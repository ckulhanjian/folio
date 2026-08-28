import { useEffect, useState } from 'react';
import { pageTabs } from '../../data/portfolio.js';

function Nav() {
  const [active, setActive] = useState(pageTabs[0].id);

  useEffect(() => {
    const sections = pageTabs
      .map((tab) => document.getElementById(tab.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-48% 0px -48% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <a className="nav-logo" href="#hero">Cara Kulhanjian</a>
      <div className="tab-row">
        {pageTabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`tab${active === tab.id ? ' tab-active' : ''}`}
            style={{ '--tab-color': tab.color, '--tab-text': tab.text }}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
