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

// Plotted oldest (freshman) at the bottom-left to newest (senior) at
// the top-right, like a diagonal ramp — each stop's content grows
// downward from its point on the line, so the years never crowd each
// other even though they hold very different numbers of events.
// Spread across the full width with a gentle rise (not a steep 45°).
const POINTS = [
  { left: 3, top: 76 },
  { left: 30, top: 54 },
  { left: 57, top: 28 },
  { left: 74, top: 10 },
];

function Coursework() {
  const [selectedOrgId, setSelectedOrgId] = useState(null);
  const selected = academics.involvement.find((item) => item.id === selectedOrgId);

  const toggleOrg = (id) => setSelectedOrgId((cur) => (cur === id ? null : id));

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

        <Reveal y={20} delay={0.1} className="timeline-diag">
          <svg className="timeline-diag-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line
              x1={POINTS[0].left}
              y1={POINTS[0].top}
              x2={POINTS[POINTS.length - 1].left}
              y2={POINTS[POINTS.length - 1].top}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {timeline.map((yearItem, index) => {
            const point = POINTS[index];
            return (
              <div
                key={yearItem.id}
                className="timeline-diag-point"
                style={{ left: `${point.left}%`, top: `${point.top}%` }}
              >
                <span className="timeline-diag-dot" aria-hidden="true" />
                <div className="timeline-diag-content">
                  <h4>
                    {yearItem.label} <span className="timeline-diag-range">({yearItem.range})</span>
                  </h4>
                  <ul>
                    {yearItem.events.map((event) =>
                      event.org ? (
                        <li key={event.text} className="timeline-diag-event-clickable">
                          <button
                            type="button"
                            onClick={() => toggleOrg(event.org)}
                            aria-expanded={selectedOrgId === event.org}
                          >
                            {event.text}
                          </button>
                        </li>
                      ) : (
                        <li key={event.text}>{event.text}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </Reveal>

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
