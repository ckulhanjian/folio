import { useState } from 'react';
import { academics, timeline } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import badgeSwe from '../../assets/badge-swe.png';
import badgeWicse from '../../assets/badge-wicse.png';
import badgeSps from '../../assets/badge-sps.png';
import badgeDreamTeam from '../../assets/badge-dream-team.png';
import badgeKhoshbouei from '../../assets/badge-khoshbouei.jpg';
import badgeVenus from '../../assets/badge-venus.jpg';

const timelineBadges = {
  swe: badgeSwe,
  wicse: badgeWicse,
  'khoshbouei-lab': badgeKhoshbouei,
  dreamteam: badgeDreamTeam,
  'ieee-sps': badgeSps,
  venus: badgeVenus,
};

// Populated once real screenshots are available for a timeline entry's
// "image" key (see data/portfolio.js) — shown inline inside that
// entry's expanded detail box.
const timelineImages = {};

function Coursework() {
  const [expandedId, setExpandedId] = useState(null);

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

        <Reveal y={20} delay={0.1} className="timeline">
          {timeline.map((item) => {
            const isExpanded = expandedId === item.id;
            const badge = timelineBadges[item.id];
            const image = timelineImages[item.image];
            return (
              <div className="timeline-item" key={item.id}>
                <span className={`timeline-dot${badge ? '' : ' timeline-dot-plain'}`} aria-hidden="true">
                  {badge && <img src={badge} alt="" />}
                </span>
                <div className="timeline-content">
                  <button
                    type="button"
                    className="timeline-toggle"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isExpanded}
                  >
                    <span className="timeline-heading-row">
                      <span className="involvement-title">{item.heading}</span>
                      {item.org && <span className="timeline-org">{item.org}</span>}
                    </span>
                    <span className="timeline-date">{item.date}</span>
                  </button>
                  {item.sub && (
                    <ul className="involvement-sub">
                      {item.sub.map((sub) => (
                        <li key={sub}>{sub}</li>
                      ))}
                    </ul>
                  )}
                  {isExpanded && (
                    <div className="involvement-detail">
                      {item.bullets.map((bullet) => (
                        <p key={bullet}>{bullet}</p>
                      ))}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          View on GitHub ↗
                        </a>
                      )}
                      {image && (
                        <div className="involvement-image-slot">
                          <img src={image} alt={`${item.heading} screenshot`} />
                        </div>
                      )}
                    </div>
                  )}
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
