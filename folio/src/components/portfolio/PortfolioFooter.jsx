import { profile } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';

function PortfolioFooter() {
  return (
    <footer id="contact" className="pf-footer">
      <Reveal y={20}>
        <span className="eyebrow">Contact</span>
        <h2 className="accent">Let's connect</h2>
        <p>Feel free to reach out about research, projects, or opportunities.</p>

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
