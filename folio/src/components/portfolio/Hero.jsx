import { useEffect, useRef } from 'react';
import roseArt from '../../assets/ascii-art-rose.png';
import vineArt from '../../assets/ascii-art-vine.png';

function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;
    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      section.style.setProperty('--art-progress', progress.toFixed(3));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="hero-full" ref={sectionRef}>
      <div className="hero-art hero-art-left" aria-hidden="true" style={{ '--art-src': `url(${vineArt})` }} />
      <div className="hero-art hero-art-right" aria-hidden="true" style={{ '--art-src': `url(${roseArt})` }} />

      <div className="section-reveal hero-reveal">
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
