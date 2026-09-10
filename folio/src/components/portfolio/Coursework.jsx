import { useState } from 'react';
import { academics, timeline } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import badgeSwe from '../../assets/badge-swe.png';
import badgeWicse from '../../assets/badge-wicse.png';
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

        <Reveal y={20} delay={0.1} className="timeline-h">
          <div className="timeline-h-track">
            {timeline.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`timeline-h-node${expandedId === item.id ? ' active' : ''}`}
                onClick={() => toggle(item.id)}
                aria-expanded={expandedId === item.id}
              >
                <span className="timeline-h-dot" aria-hidden="true" />
                <span className="timeline-h-label">{item.short}</span>
                <span className="timeline-h-date">{item.date}</span>
              </button>
            ))}
          </div>

          {expandedItem && (
            <div className="timeline-h-detail" key={expandedItem.id}>
              <span className="timeline-h-vline" aria-hidden="true" />
              <div className="timeline-h-detail-body">
                {timelineBadges[expandedItem.id] && (
                  <img
                    src={timelineBadges[expandedItem.id]}
                    alt=""
                    className="timeline-h-detail-logo"
                  />
                )}
                <div className="timeline-h-detail-text">
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
                      View on GitHub ↗
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
            </div>
          )}
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
