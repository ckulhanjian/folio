import { profile, pageTabs } from '../../data/portfolio.js';
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

        <div className="folder-recap" aria-hidden="true">
          {pageTabs.map((tab) => (
            <span
              key={tab.id}
              className="recap-tab"
              style={{ '--tab-color': tab.color, '--tab-text': tab.text }}
            >
              {tab.label}
            </span>
          ))}
        </div>
        <p className="recap-caption">You've reached the last page of the folder.</p>

        <p className="footer-copy">© {new Date().getFullYear()} {profile.name}</p>
      </Reveal>
    </footer>
  );
}

export default PortfolioFooter;
