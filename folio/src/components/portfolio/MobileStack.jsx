import { useState } from 'react';
import { profile, research, academics, skills, experience, resumeFileUrl } from '../../data/portfolio.js';
import headshotDots from '../../assets/about-headshot-dots.jpg';
import me from '../../assets/me.png';
import PhotoStack from './PhotoStack.jsx';
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

const designTeamBadges = {
  'swe-pm': badgeSwe,
  dreamteam: badgeDreamTeam,
};

const cards = [
  { id: 'about', label: 'About', color: 'var(--paper)', text: 'var(--ink)' },
  { id: 'research', label: 'Research', color: 'var(--pink)', text: 'var(--ink)' },
  { id: 'resume', label: 'Resume', color: 'var(--babyblue)', text: 'var(--ink)' },
  { id: 'contact', label: 'Contact', color: 'var(--ink)', text: 'var(--paper)' },
];

function AboutBody() {
  return (
    <>
      <span className="mobile-card-title">Carpe Diem.</span>
      <div className="mobile-card-content">
        <p className="about-story">
          Carpe Diem has always felt less like a motto and more like a method. I came to computer
          science through curiosity — for how systems work, how people use them, and how good
          design can make both feel effortless — and that same curiosity is what's pulled me
          toward research, toward leadership, toward saying yes to the harder path when it's the
          more interesting one.
        </p>
        <p className="about-story">
          At the University of Florida's Honors College, I've built that curiosity into a
          practice: analyzing patient data in a neuroscience lab, leading a cross-disciplinary
          engineering team, mentoring students still finding their footing in code. Data, design,
          and a bit of stubborn optimism are the threads running through all of it — the belief
          that today's the day to start the thing you've been putting off.
        </p>
        <div className="about-photos">
          <figure className="about-photo about-photo-main">
            <img src={headshotDots} alt={profile.name} />
            <figcaption>{profile.name}</figcaption>
          </figure>
        </div>
        <p className="hero-meta">{profile.meta}</p>
      </div>
    </>
  );
}

function ResearchBody() {
  return (
    <>
      <span className="mobile-card-title">{research.title}</span>
      <div className="mobile-card-content">
        <div className="research-meta">
          {[
            ['Principal Investigator', research.pi],
            ['Institution & Department', research.institution],
            ['Time Affiliated', research.duration],
          ].map(([label, value]) => (
            <div key={label} className="meta-card">
              <div className="label">{label}</div>
              <div className="value">{value}</div>
            </div>
          ))}
        </div>
        <p>{research.summary}</p>
        <PhotoStack />
        <div className="research-links">
          {research.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function ResumeBody() {
  return (
    <>
      <span className="mobile-card-title">Download the full CV</span>
      <div className="mobile-card-content mobile-resume">
        <p>A complete record of my research, professional experience, and technical skills.</p>
        <a className="btn btn-solid" href={resumeFileUrl} download>
          Download PDF ↓
        </a>

        <div className="resume-cards">
          <div className="resume-card">
            <h3>Experience Highlights</h3>
            {experience.map((job) => (
              <div className="exp-item" key={job.org}>
                <div className="exp-role">{job.role}</div>
                <div className="exp-org">{job.org} · {job.location}</div>
                <div className="exp-date">{job.date}</div>
              </div>
            ))}
          </div>

          <div className="resume-card">
            <h3>Career Interests</h3>
            <div className="tag-row">
              {skills.careerInterests.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <h3 style={{ marginTop: '1.4rem' }}>Skills</h3>
            <div className="tag-row">
              {[...skills.languagesTools, ...skills.libraries].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="resume-card">
            <h3>Education</h3>
            <div className="edu-line">{academics.major}</div>
            <div className="edu-sub">{academics.school}</div>
            <div className="edu-gpa">GPA {academics.gpa} · {academics.grad}</div>

            <h3 style={{ fontStyle: 'italic', margin: '1.4rem 0 0.8rem' }}>Relevant Coursework</h3>
            <ul className="pill-list">
              {academics.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="coursework-grid">
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
                <li key={item.id}>
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
        </div>

        <div className="design-teams">
          <h3>Design Teams</h3>
          <div className="resume-cards">
            {academics.designTeams.map((team) => (
              <div className="resume-card design-team-card" key={team.id}>
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
        </div>
      </div>
    </>
  );
}

function ContactBody() {
  return (
    <>
      <span className="mobile-card-title">Let's connect.</span>
      <div className="mobile-card-content">
        <p>
          I'm currently looking for new opportunities — reach out on{' '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-inline-link">
            LinkedIn
          </a>{' '}
          or by email, I'd love to connect.
        </p>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </>
  );
}

const bodies = {
  about: AboutBody,
  research: ResearchBody,
  resume: ResumeBody,
  contact: ContactBody,
};

function MobileStack() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="mobile-stack">
      <section
        className="mobile-card mobile-home-banner"
        style={{ '--tab-color': 'var(--cream)', '--tab-text': 'var(--ink)' }}
      >
        <div className="mobile-card-header mobile-card-header-static">
          <span className="mobile-card-label">Home</span>
        </div>
        <p className="mobile-home-statement">
          Cara Kulhanjian / Research, Data and Design (R&amp;D) / Studying Computer Science (CS)
          at the University of Florida (UF)
        </p>
        <div className="mobile-card-content mobile-home-content">
          <img src={me} alt="" className="mobile-home-portrait" />
          <p className="hero-meta">{profile.meta}</p>
        </div>
      </section>

      {cards.map((card) => {
        const expanded = expandedId === card.id;
        const Body = bodies[card.id];
        return (
          <section
            key={card.id}
            className={`mobile-card${expanded ? ' mobile-card-expanded' : ''}`}
            style={{ '--tab-color': card.color, '--tab-text': card.text }}
          >
            <button
              type="button"
              className="mobile-card-header"
              onClick={() => setExpandedId(expanded ? null : card.id)}
              aria-expanded={expanded}
            >
              <span className="mobile-card-label">{card.label}</span>
              <span className="mobile-card-toggle" aria-hidden="true">{expanded ? '–' : '+'}</span>
            </button>

            <div className="mobile-card-body-wrap">
              <div className="mobile-card-body">
                <Body />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default MobileStack;
