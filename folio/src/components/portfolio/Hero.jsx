import { useEffect, useState } from 'react';
import roseArt from '../../assets/ascii-art-rose.png';
import vineArt from '../../assets/ascii-art-vine.png';
import dearData1 from '../../assets/dear-data-postcard.jpg';
import dearData2 from '../../assets/dear-data-2.jpg';
import dearData3 from '../../assets/dear-data-3.jpg';
import dearData4 from '../../assets/dear-data-4.jpg';

const POSTCARDS = [
  { src: dearData1, alt: 'Dear Data postcard, week 14: (abstract) productivity' },
  { src: dearData2, alt: 'Dear Data postcard, week 49: data' },
  { src: dearData3, alt: 'Dear Data postcard, week 8: phone addiction' },
  { src: dearData4, alt: 'Dear Data postcard, week 13: I wish I' },
];

// Matches the 7s period of the ascii-art pulse (see .hero-art-pulse in
// portfolio.css) so the postcard rotates in time with the graphics.
const ROTATE_MS = 7000;

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((cur) => (cur + 1) % POSTCARDS.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

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
          <div className="hero-photo-frame">
            {POSTCARDS.map((card, i) => (
              <img
                key={card.src}
                src={card.src}
                alt={i === index ? card.alt : ''}
                className={`hero-photo${i === index ? ' hero-photo-active' : ''}`}
              />
            ))}
          </div>
          <figcaption className="hero-photo-caption">Dear Data — Giorgia Lupi</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
