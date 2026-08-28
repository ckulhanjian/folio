import { profile, resumeFileUrl } from '../../data/portfolio.js';
import me from '../../assets/me.png';

function Hero() {
  return (
    <section id="about" className="section hero">
      <div>
        <span className="eyebrow">E-Portfolio</span>
        <h1>
          <span className="accent">{profile.name}</span>
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-bio">{profile.bio}</p>
        <p className="hero-meta">{profile.meta}</p>
        <div className="hero-cta">
          <a className="btn btn-solid" href="#research">View Research</a>
          <a className="btn btn-outline" href={resumeFileUrl} download>
            Download Resume ↓
          </a>
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-art-block" aria-hidden="true" />
        <img src={me} alt={profile.name} />
      </div>
    </section>
  );
}

export default Hero;
