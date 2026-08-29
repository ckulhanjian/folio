import { useState } from 'react';
import { profile, pageTabs } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';

const indexEntries = [
  { id: 'hero', eyebrow: 'Home', title: profile.name, color: 'var(--cream)', text: 'var(--ink)' },
  ...pageTabs.filter((tab) => tab.id !== 'contact'),
];

function PortfolioFooter() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <footer id="contact" className="pf-footer stack-section">
      <Reveal y={20} className="page-index">
        {indexEntries.map((entry) => {
          const expanded = expandedId === entry.id;
          return (
            <div
              key={entry.id}
              className={`page-index-row${expanded ? ' page-index-row-expanded' : ''}`}
              style={{ '--tab-color': entry.color, '--tab-text': entry.text }}
            >
              <a href={`#${entry.id}`} className="page-index-link">
                <span className="page-index-eyebrow">{entry.eyebrow}</span>
                <span className="page-index-title">{entry.title}</span>
                {expanded && <span className="page-index-hint">Visit page ↗</span>}
              </a>
              <button
                type="button"
                className="page-index-toggle"
                aria-label={expanded ? `Collapse ${entry.eyebrow}` : `Preview ${entry.eyebrow}`}
                onClick={() => setExpandedId(expanded ? null : entry.id)}
              >
                {expanded ? '–' : '+'}
              </button>
            </div>
          );
        })}
      </Reveal>

      <Reveal y={20} delay={0.1} className="contact-close">
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
