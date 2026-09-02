import { useEffect, useState } from 'react';
import { pageTabs } from '../../data/portfolio.js';
import heartIcon from '../../assets/heart-icon-dark.png';

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
    // (hero) — keep it hidden until the hero has scrolled out of view.
    const heroSection = document.getElementById('hero');
    let heroObserver;
    if (heroSection) {
      heroObserver = new IntersectionObserver(
        ([entry]) => setShowTabs(!entry.isIntersecting),
        { threshold: 0 }
      );
      heroObserver.observe(heroSection);
    }

    return () => {
      sectionObserver.disconnect();
      heroObserver?.disconnect();
    };
  }, []);

  // Sections slide into place via a CSS transform that's still mid-
  // animation (or hasn't started) for anything below the fold, so the
  // browser's native #hash jump — which measures the element's
  // current, possibly-offset position — can land short or long. Scroll
  // by offsetTop instead: that's pure layout position, unaffected by
  // the reveal transform, so the target is always where the section
  // actually settles.
  const jumpTo = (id) => (event) => {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <a className="nav-logo" href="#hero" onClick={jumpTo('hero')}>
        <img src={heartIcon} alt="" className="nav-heart" />
        <span className="nav-logo-text">Cara Kulhanjian</span>
      </a>
      <div className="nav-right">
        <div className={`mini-nav${showTabs ? ' mini-nav-hidden' : ''}`}>
          {pageTabs.map((tab) => (
            <a key={tab.id} href={`#${tab.id}`} onClick={jumpTo(tab.id)}>{tab.label}</a>
          ))}
        </div>
        <div className={`tab-row${showTabs ? ' tab-row-visible' : ''}`}>
          {pageTabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={jumpTo(tab.id)}
              className={`tab${active === tab.id ? ' tab-active' : ''}`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
