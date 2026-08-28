import { profile, resumeFileUrl } from '../../data/portfolio.js';
import headshot from '../../assets/cara-headshot.jpg';
import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section about stack-section">
      <div className="about-grid">
        <Reveal className="about-text" y={26}>
          <span className="eyebrow">About</span>
          <p className="about-bio">{profile.bio}</p>
          <p className="hero-meta">{profile.meta}</p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#research">View Research</a>
            <a className="btn btn-outline" href={resumeFileUrl} download>
              Download Resume ↓
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-art" y={26} delay={0.15}>
          <div className="hero-art-block" aria-hidden="true" />
          <img src={headshot} alt={profile.name} />
        </Reveal>
      </div>
    </section>
  );
}

export default About;
