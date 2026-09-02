import { useState } from 'react';
import { academics, skills, skillLinks } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import badgeSwe from '../../assets/badge-swe.png';
import badgeWicse from '../../assets/badge-wicse.png';
import badgeSps from '../../assets/badge-sps.png';
import badgeDreamTeam from '../../assets/badge-dream-team.png';

const involvementBadges = {
  swe: badgeSwe,
  wicse: badgeWicse,
  'ieee-sps': badgeSps,
};

const designTeamBadges = {
  'swe-pm': badgeSwe,
  dreamteam: badgeDreamTeam,
};

function Coursework() {
  const [activeSkill, setActiveSkill] = useState(null);
  const highlighted = activeSkill ? skillLinks[activeSkill] ?? [] : [];

  const toggleSkill = (id) => {
    setActiveSkill((cur) => (cur === id ? null : id));
  };

  return (
    <section id="coursework" className="section coursework stack-section">
      <div className="section-reveal">
        <Reveal className="coursework-head" y={22}>
          <span className="eyebrow">Coursework</span>
          <h2>{academics.major}</h2>
          <p className="degree">
            {academics.school} · {academics.grad} · GPA {academics.gpa}
          </p>
        </Reveal>

        <div className="coursework-grid">
          <Reveal x={-30} y={0} delay={0.1}>
            <h3 style={{ fontStyle: 'italic', marginBottom: '0.8rem' }}>Skills</h3>
            <p className="skills-hint">Click a skill to see where it's shown up.</p>
            <ul className="pill-list skill-pill-list">
              {skills.topSkills.map((skill) => (
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

            <h3 style={{ fontStyle: 'italic', margin: '1.6rem 0 0.8rem' }}>Relevant Coursework</h3>
            <ul className="pill-list">
              {academics.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal x={30} y={0} delay={0.2}>
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

            <div className="side-col">
              <h3>Involvement</h3>
              <ul className="plain-list involvement-list">
                {academics.involvement.map((item) => (
                  <li
                    key={item.id}
                    className={highlighted.includes(item.id) ? 'skill-highlight' : ''}
                  >
                    {involvementBadges[item.id] && (
                      <img src={involvementBadges[item.id]} alt="" className="involvement-badge" />
                    )}
                    {item.title}
                    {item.sub.length > 0 && (
                      <ul className="involvement-sub">
                        {item.sub.map((sub) => (
                          <li key={sub}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal y={20} delay={0.15} className="design-teams">
          <h3>Design Teams</h3>
          <div className="resume-cards">
            {academics.designTeams.map((team) => (
              <div
                key={team.id}
                className={`resume-card design-team-card${highlighted.includes(team.id) ? ' skill-highlight' : ''}`}
              >
                <span className="design-team-badge" aria-hidden="true">
                  <img src={designTeamBadges[team.id]} alt="" />
                </span>
                <div className="exp-role">{team.role}</div>
                <div className="exp-org">{team.org}</div>
                <div className="exp-date">{team.date}</div>
                <ul className="plain-list design-team-bullets">
                  {team.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Coursework;
