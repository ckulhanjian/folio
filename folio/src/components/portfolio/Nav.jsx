import { useEffect, useState } from 'react';
import { pageTabs } from '../../data/portfolio.js';

function Nav() {
  const [active, setActive] = useState(pageTabs[0].id);
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    const sections = pageTabs
      .map((tab) => document.getElementById(tab.id))
      .filter(Boolean);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-48% 0px -48% 0px', threshold: 0 }
    );
    sections.forEach((section) => sectionObserver.observe(section));

    // The folder-tab nav only makes sense once you've left the cover
    // (hero) — keep it hidden until you've scrolled past the landing
    // page. The hero is 200vh tall (extra scroll room for its own
    // background-scroll effect), so compare against its actual
    // release point rather than using intersection ratio.
    const hero = document.getElementById('hero');
    const updateShowTabs = () => {
      if (!hero) return;
      const releasePoint = hero.offsetHeight - window.innerHeight;
      setShowTabs(window.scrollY >= releasePoint - 40);
    };
    updateShowTabs();
    window.addEventListener('scroll', updateShowTabs, { passive: true });
    window.addEventListener('resize', updateShowTabs);

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener('scroll', updateShowTabs);
      window.removeEventListener('resize', updateShowTabs);
    };
  }, []);

  return (
    <nav className="nav">
      <a className="nav-logo" href="#hero">Cara Kulhanjian</a>
      <div className={`tab-row${showTabs ? ' tab-row-visible' : ''}`}>
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
