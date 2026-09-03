import { useState } from 'react';
import { academics, allSkills, skillLinks } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import badgeSwe from '../../assets/badge-swe.png';
import badgeWicse from '../../assets/badge-wicse.png';
import badgeSps from '../../assets/badge-sps.png';
import badgeDreamTeam from '../../assets/badge-dream-team.png';
import badgeKhoshbouei from '../../assets/badge-khoshbouei.jpg';
import badgeVenus from '../../assets/badge-venus.jpg';

const involvementBadges = {
  swe: badgeSwe,
  wicse: badgeWicse,
  'khoshbouei-lab': badgeKhoshbouei,
  dreamteam: badgeDreamTeam,
  'ieee-sps': badgeSps,
  venus: badgeVenus,
};

// Populated once real screenshots are available for an involvement's
// "image" key (see academics.involvement in data/portfolio.js) — the
// image slot next to Distinctions only renders for keys present here.
const involvementImages = {};

function Coursework() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const highlighted = activeSkill ? skillLinks[activeSkill] ?? [] : [];
  const expandedItem = academics.involvement.find((item) => item.id === expandedId);
  const expandedImage = expandedItem && involvementImages[expandedItem.image];

  const toggleSkill = (id) => {
    setActiveSkill((cur) => (cur === id ? null : id));
  };

  const toggleInvolvement = (id) => {
    setExpandedId((cur) => (cur === id ? null : id));
  };

  return (
    <section id="education" className="section coursework stack-section">
      <div className="section-reveal">
        {/* 1. Title & major */}
        <Reveal className="coursework-head" y={22}>
          <span className="eyebrow">Education</span>
          <h2>{academics.major}</h2>
          <p className="degree">
            {academics.school} · {academics.grad} · GPA {academics.gpa}
          </p>
        </Reveal>

        <div className="coursework-grid">
          <Reveal x={-30} y={0} delay={0.1}>
            {/* 2. Skills */}
            <h3 style={{ fontStyle: 'italic', marginBottom: '0.8rem' }}>Skills</h3>
            <p className="skills-hint">Click a skill to see where it's been applied.</p>
            <ul className="pill-list skill-pill-list">
              {allSkills.map((skill) => (
                <li key={skill.id}>
                  <button
                    type="button"
                    className={`skill-pill${activeSkill === skill.id ? ' skill-pill-active' : ''}`}
                    onClick={() => toggleSkill(skill.id)}
                    aria-pressed={activeSkill === skill.id}
                  >
                    {skill.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* 4. Involvement (below Skills) */}
            <div className="side-col education-involvement">
              <h3>Involvement</h3>
              <ul className="plain-list involvement-list">
                {academics.involvement.map((item) => {
                  const isExpanded = expandedId === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="involvement-toggle"
                        onClick={() => toggleInvolvement(item.id)}
                        aria-expanded={isExpanded}
                      >
                        {involvementBadges[item.id] && (
                          <img src={involvementBadges[item.id]} alt="" className="involvement-badge" />
                        )}
                        <span
                          className={`involvement-title${highlighted.includes(item.id) ? ' skill-highlight' : ''}`}
                        >
                          {item.title}
                        </span>
                      </button>
                      {item.sub.length > 0 && (
                        <ul className="involvement-sub">
                          {item.sub.map((sub) => (
                            <li key={sub}>{sub}</li>
                          ))}
                        </ul>
                      )}
                      {isExpanded && (
                        <div className="involvement-detail">
                          <p>{item.detail}</p>
                          {item.link && (
                            <a href={item.link} target="_blank" rel="noreferrer">
                              View on GitHub ↗
                            </a>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal x={30} y={0} delay={0.2} className="education-side">
            {/* 3. Distinctions */}
            <div className="side-col">
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
            </div>

            {expandedImage && (
              <div className="involvement-image-slot">
                <img src={expandedImage} alt={`${expandedItem.title} screenshot`} />
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Coursework;
