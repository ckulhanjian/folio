import { useEffect, useRef, useState } from 'react';
import { profile } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import me from '../../assets/me.png';

function PortfolioFooter() {
  const footerRef = useRef(null);
  const headRef = useRef(null);
  const [isDimmed, setIsDimmed] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    const head = headRef.current;
    if (!footer || !head) return;

    const handleMouseMove = (event) => {
      const rect = footer.getBoundingClientRect();
      head.style.left = `${event.clientX - rect.left}px`;
      head.style.top = `${event.clientY - rect.top}px`;
    };

    footer.addEventListener('mousemove', handleMouseMove);
    return () => footer.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer id="contact" className="pf-footer" ref={footerRef}>
      <img
        ref={headRef}
        src={me}
        alt=""
        aria-hidden="true"
        className={`footer-head-img${isDimmed ? ' footer-head-img-dimmed' : ''}`}
      />

      <Reveal
        y={20}
        className="contact-close"
        onMouseEnter={() => setIsDimmed(true)}
        onMouseLeave={() => setIsDimmed(false)}
      >
        <span className="eyebrow">Contact</span>
        <h2 className="accent">Contact me!</h2>
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
      </Reveal>
    </footer>
  );
}

export default PortfolioFooter;
