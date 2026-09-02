import { experience, academics, skills, resumeFileUrl } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';

function Resume() {
  return (
    <section id="resume" className="section resume stack-section">
      <div className="section-reveal">
        <Reveal className="resume-top" y={22}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--pink)' }}>Resume / CV</span>
            <h2>Download the full CV</h2>
            <p>A complete record of my research, professional experience, and technical skills.</p>
          </div>
          <a className="btn btn-solid" href={resumeFileUrl} download>
            Download PDF ↓
          </a>
        </Reveal>

        <div className="resume-cards">
          <Reveal className="resume-card" y={30} delay={0.05} as="div">
            <h3>Experience Highlights</h3>
            {experience.map((job) => (
              <div className="exp-item" key={job.org}>
                <div className="exp-role">{job.role}</div>
                <div className="exp-org">{job.org} · {job.location}</div>
                <div className="exp-date">{job.date}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="resume-card" y={30} delay={0.15}>
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
          </Reveal>

          <Reveal className="resume-card" y={30} delay={0.25}>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Resume;
