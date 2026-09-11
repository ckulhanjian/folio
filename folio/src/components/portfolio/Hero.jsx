import roseArt from '../../assets/ascii-art-rose.png';
import vineArt from '../../assets/ascii-art-vine.png';
import dearDataPostcard from '../../assets/dear-data-postcard.jpg';

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

        <figure className="hero-photos">
          <img src={dearDataPostcard} alt="A hand-drawn Dear Data postcard, week 14: (abstract) productivity" className="hero-photo" />
          <figcaption className="hero-photo-caption">Dear Data — Giorgia Lupi</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
