import { useState } from 'react';
import { academics, timeline } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import badgeSwe from '../../assets/badge-swe.png';
import badgeWicse from '../../assets/badge-wicse.svg';
import badgeDreamTeam from '../../assets/badge-dream-team.png';
import badgeKhoshbouei from '../../assets/badge-khoshbouei.jpg';
import badgeVenus from '../../assets/badge-venus.jpg';

const timelineBadges = {
  swe: badgeSwe,
  wicse: badgeWicse,
  'khoshbouei-lab': badgeKhoshbouei,
  dreamteam: badgeDreamTeam,
  venus: badgeVenus,
};

// Populated once real screenshots are available for a timeline entry's
// "image" key (see data/portfolio.js) — shown inline inside that
// entry's expanded detail panel.
const timelineImages = {};

// The timeline is plotted on a real calendar axis — freshman year
// (2023) through senior year (2026) — rather than an evenly-spaced
// list, so each node's horizontal position reflects when it actually
// started.
const AXIS_START_YEAR = 2023;
const AXIS_END_YEAR = 2027;

const yearMarks = [
  { year: 2023, label: 'Freshman' },
  { year: 2024, label: 'Sophomore' },
  { year: 2025, label: 'Junior' },
  { year: 2026, label: 'Senior' },
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Turns a display date like "August – December 2024" or
// "2024 – Present" into a decimal-year position along the axis, so the
// node lands under the month it actually started (defaulting to
// mid-year when only a year is given).
function startFraction(dateStr) {
  const yearMatch = dateStr.match(/\d{4}/);
  if (!yearMatch) return AXIS_START_YEAR + 0.5;
  const year = parseInt(yearMatch[0], 10);
  const monthMatch = dateStr.match(new RegExp(MONTHS.join('|')));
  const monthIndex = monthMatch ? MONTHS.indexOf(monthMatch[0]) : 5.5;
  return year + (monthIndex + 0.5) / 12;
}

function axisPosition(dateStr) {
  const fraction = startFraction(dateStr);
  const clamped = Math.min(Math.max(fraction, AXIS_START_YEAR), AXIS_END_YEAR);
  return ((clamped - AXIS_START_YEAR) / (AXIS_END_YEAR - AXIS_START_YEAR)) * 100;
}

// Year markers sit at the start of each year (January), not the
// mid-year default used for undated entries — otherwise a node with
// no month given (which defaults to mid-year) would land exactly on
// top of that year's marker.
function yearMarkPosition(year) {
  return ((year - AXIS_START_YEAR) / (AXIS_END_YEAR - AXIS_START_YEAR)) * 100;
}

// Real start dates cluster tightly in a couple of spots (several
// entries land in the same year with no month given), which would
// otherwise stack nodes on top of each other. Keep entries in
// chronological order but nudge any that land too close to their
// predecessor further right, so every node (and its angled tag) stays
// legible and clickable.
const MIN_NODE_GAP = 9;
const nodePositions = timeline.reduce((positions, item) => {
  const raw = axisPosition(item.date);
  const prev = positions[positions.length - 1];
  const pos = prev === undefined ? Math.max(raw, 4) : Math.max(raw, prev + MIN_NODE_GAP);
  positions.push(pos);
  return positions;
}, []);

function Coursework() {
  const [expandedId, setExpandedId] = useState(null);
  const expandedItem = timeline.find((item) => item.id === expandedId);

  const toggle = (id) => setExpandedId((cur) => (cur === id ? null : id));

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

        <Reveal y={20} delay={0.1} className="timeline-v2">
          <div className="timeline-v2-detail">
            {expandedItem && (
              <div className="timeline-v2-detail-body" key={expandedItem.id}>
                {timelineBadges[expandedItem.id] && (
                  <img
                    src={timelineBadges[expandedItem.id]}
                    alt=""
                    className="timeline-v2-detail-logo"
                  />
                )}
                <div className="timeline-v2-detail-text">
                  <h4>{expandedItem.heading}</h4>
                  {expandedItem.org && <div className="timeline-org">{expandedItem.org}</div>}
                  {expandedItem.sub && (
                    <ul className="involvement-sub">
                      {expandedItem.sub.map((sub) => (
                        <li key={sub}>{sub}</li>
                      ))}
                    </ul>
                  )}
                  {expandedItem.bullets.map((bullet) => (
                    <p key={bullet}>{bullet}</p>
                  ))}
                  {expandedItem.link && (
                    <a href={expandedItem.link} target="_blank" rel="noreferrer">
                      Visit Website ↗
                    </a>
                  )}
                  {timelineImages[expandedItem.image] && (
                    <div className="involvement-image-slot">
                      <img
                        src={timelineImages[expandedItem.image]}
                        alt={`${expandedItem.heading} screenshot`}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="timeline-v2-axis">
            <span className="timeline-v2-line" aria-hidden="true" />

            {yearMarks.map((mark) => (
              <span
                key={mark.year}
                className="timeline-v2-year"
                style={{ left: `${yearMarkPosition(mark.year)}%` }}
              >
                <span className="timeline-v2-year-num">{mark.year}</span>
                <span className="timeline-v2-year-label">{mark.label}</span>
              </span>
            ))}

            {timeline.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`timeline-v2-node ${index % 2 === 0 ? 'above' : 'below'}${
                  expandedId === item.id ? ' active' : ''
                }`}
                style={{ left: `${nodePositions[index]}%` }}
                onClick={() => toggle(item.id)}
                aria-expanded={expandedId === item.id}
              >
                <span className="timeline-v2-dot" aria-hidden="true" />
                <span className="timeline-v2-tag">
                  <span className="timeline-v2-tag-name">{item.short}</span>
                  <span className="timeline-v2-tag-date">{item.date}</span>
                </span>
              </button>
            ))}
          </div>
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
