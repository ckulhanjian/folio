import { profile } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import RotatingHead from './RotatingHead.jsx';
import me from '../../assets/me.png';

function PortfolioFooter() {
  return (
    <footer id="contact" className="pf-footer">
      <RotatingHead src={me} alt="" className="footer-head-img" trackParent />

      <Reveal y={20} className="contact-close">
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
