import me from '../../assets/me.png';
import crochetPattern from '../../assets/crochet-pattern.jpg';
import heartIcon from '../../assets/heart-icon.jpg';
import RotatingHead from './RotatingHead.jsx';

function Hero() {
  return (
    <section id="hero" className="hero-full">
      <div className="hero-bg-layer" aria-hidden="true" />
      <div className="hero-sticky">
        <div className="hero-collage" aria-hidden="true">
          <div className="hero-pattern-swatch">
            <img src={crochetPattern} alt="" />
          </div>
          <RotatingHead src={me} alt="" className="hero-logo-img" />
        </div>

        <img src={heartIcon} alt="" className="hero-heart" aria-hidden="true" />

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
    </section>
  );
}

export default Hero;
