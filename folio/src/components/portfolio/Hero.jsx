import roseArt from '../../assets/ascii-art-rose.png';
import vineArt from '../../assets/ascii-art-vine.png';
import candidPhoto from '../../assets/about-candid-white.png';

function Hero() {
  return (
    <section id="hero" className="hero-full">
      <div className="hero-art hero-art-left" aria-hidden="true" style={{ '--art-src': `url(${vineArt})` }} />
      <div className="hero-art hero-art-right" aria-hidden="true" style={{ '--art-src': `url(${roseArt})` }} />

      <div className="section-reveal hero-reveal">
        <div className="hero-text">
          <h1 className="hero-statement">
            <span className="accent">Cara Kulhanjian</span> / Research, Data &amp; Design / studying Computer
            Science at the University of Florida
          </h1>
          <span className="scroll-cue" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4v14M6 12l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <div className="hero-photos" aria-hidden="true">
          <img src={candidPhoto} alt="" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
