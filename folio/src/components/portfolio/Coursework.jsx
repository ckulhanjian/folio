import { useState } from 'react';
import { academics, timeline } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import badgeSwe from '../../assets/badge-swe.png';
import badgeWicse from '../../assets/badge-wicse.svg';
import badgeDreamTeam from '../../assets/badge-dream-team.png';
import badgeKhoshbouei from '../../assets/badge-khoshbouei.jpg';
import badgeVenus from '../../assets/badge-venus.jpg';
import badgeSps from '../../assets/badge-sps.png';

const involvementBadges = {
  swe: badgeSwe,
  wicse: badgeWicse,
  'khoshbouei-lab': badgeKhoshbouei,
  dreamteam: badgeDreamTeam,
  venus: badgeVenus,
  'ieee-sps': badgeSps,
};

// The line itself runs past both ends of the plotted points — a tail
// trailing off the bottom-left (the past, before freshman year) and
// an arrowhead pointing past the top-right (still going, beyond
// senior year) — like an arrow charting time moving forward.
const LINE_START = { left: -3, top: 84 };
const LINE_END = { left: 84, top: 3 };

// Every year dot sits exactly ON that same line — derived from it by
// x position, not eyeballed as separate coordinates — so the colored
// duration highlight (itself just a sub-segment of this same line)
// can never drift off at its own angle next to the timeline.
function pointOnLine(left) {
  const t = (left - LINE_START.left) / (LINE_END.left - LINE_START.left);
  return { left, top: LINE_START.top + (LINE_END.top - LINE_START.top) * t };
}

// Plotted oldest (freshman) at the bottom-left to newest (senior) at
// the top-right, like a diagonal ramp — each stop's content grows
// downward from its point on the line, so the years never crowd each
// other even though they hold very different numbers of events.
// Spread across the full width with a gentle rise (not a steep 45°).
const POINTS = [3, 30, 57, 74].map(pointOnLine);

// Every involvement here is still ongoing (the resume language is all
// present tense — "now leads", "I'm a member", etc.), so each one's
// colored duration bar always runs from the year it first appears
// through to the end of the line, never stopping short.
function firstYearIndexForOrg(orgId) {
  return timeline.findIndex((year) => year.events.some((event) => event.org === orgId));
}

function Coursework() {
  // Tracks which single event triggered the open detail (not just
  // which org) — so a second, different event that happens to link to
  // the same org does nothing, and only re-clicking that exact event
  // closes it back up.
  const [active, setActive] = useState(null); // { key, org } | null
  const selectedOrgId = active?.org ?? null;
  const selected = academics.involvement.find((item) => item.id === selectedOrgId);
  const durationStartIndex = selectedOrgId ? firstYearIndexForOrg(selectedOrgId) : -1;

  const handleEventClick = (eventKey, org) => {
    setActive((cur) => {
      if (cur && cur.key === eventKey) return null;
      if (cur && cur.org === org) return cur;
      return { key: eventKey, org };
    });
  };

  return (
    <section id="education" className="section coursework stack-section">
      <div className="section-reveal">
        <Reveal className="coursework-head" y={22}>
          <span className="eyebrow">Education</span>
          <h2>{academics.major}</h2>
          <p className="degree">
            {academics.school} · {academics.grad} · GPA {academics.gpa}
          </p>
        </Reveal>

        <div className="timeline-diag">
          {/* The connecting line is always visible — only the year
              points/content reveal (and un-reveal) as you scroll. */}
          <svg className="timeline-diag-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line
              x1={LINE_START.left}
              y1={LINE_START.top}
              x2={LINE_END.left}
              y2={LINE_END.top}
              vectorEffect="non-scaling-stroke"
            />
            {durationStartIndex >= 0 && (
              <line
                key={selectedOrgId}
                className="timeline-diag-duration"
                x1={POINTS[durationStartIndex].left}
                y1={POINTS[durationStartIndex].top}
                x2={LINE_END.left}
                y2={LINE_END.top}
                vectorEffect="non-scaling-stroke"
              />
            )}
          </svg>

          <span className="timeline-diag-arrowhead" aria-hidden="true" />

          <div className="timeline-diag-detail">
            {selected && (
              <div className="timeline-diag-detail-body" key={selected.id}>
                {involvementBadges[selected.id] && (
                  <img src={involvementBadges[selected.id]} alt="" className="timeline-diag-detail-logo" />
                )}
                <div className="timeline-diag-detail-text">
                  <h4>{selected.title}</h4>
                  {selected.sub && selected.sub.length > 0 && (
                    <ul className="involvement-sub">
                      {selected.sub.map((sub) => (
                        <li key={sub}>{sub}</li>
                      ))}
                    </ul>
                  )}
                  <p>{selected.detail}</p>
                  {selected.link && (
                    <a href={selected.link} target="_blank" rel="noreferrer">
                      Visit Website ↗
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {timeline.map((yearItem, index) => {
            const point = POINTS[index];
            return (
              <Reveal
                key={yearItem.id}
                as="div"
                once={false}
                y={24}
                delay={index * 0.12}
                className="timeline-diag-point"
                style={{ left: `${point.left}%`, top: `${point.top}%` }}
              >
                <span className="timeline-diag-dot" aria-hidden="true" />
                <div className="timeline-diag-content">
                  <h4>
                    {yearItem.label} <span className="timeline-diag-range">({yearItem.range})</span>
                  </h4>
                  <ul>
                    {yearItem.events.map((event) => {
                      const eventKey = `${yearItem.id}:${event.text}`;
                      return event.org ? (
                        <li key={event.text} className="timeline-diag-event-clickable">
                          <button
                            type="button"
                            onClick={() => handleEventClick(eventKey, event.org)}
                            aria-expanded={active?.key === eventKey}
                          >
                            {event.text}
                          </button>
                        </li>
                      ) : (
                        <li key={event.text}>{event.text}</li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={20} delay={0.2} className="side-col education-distinctions">
          <h3>Distinctions</h3>
          <ul className="plain-list">
            {academics.distinctions.map((item) => (
              <li key={item.text}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Coursework;
