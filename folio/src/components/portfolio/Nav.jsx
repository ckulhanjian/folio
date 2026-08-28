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
    // (hero) — keep it hidden until the hero text has scrolled out of
    // view. Watch the text itself (.hero-sticky) rather than the outer
    // #hero wrapper: on desktop that wrapper is 200vh tall (extra
    // scroll room for its own background-scroll effect) but the text
    // occupies only the last viewport of it, and on mobile the wrapper
    // collapses to exactly one viewport with no extra room at all — an
    // observer on the actual visible text handles both correctly
    // without needing to know which case applies.
    const heroText = document.querySelector('.hero-sticky');
    let heroObserver;
    if (heroText) {
      heroObserver = new IntersectionObserver(
        ([entry]) => setShowTabs(!entry.isIntersecting),
        // Right at the exact release boundary a sub-pixel sliver of
        // overlap can remain at the top edge (where the text scrolls
        // out), which would otherwise still count as "intersecting"
        // and leave the tabs stuck hidden — pull the effective
        // viewport's top edge down by 20px so a clean break is required.
        { threshold: 0, rootMargin: '-20px 0px 0px 0px' }
      );
      heroObserver.observe(heroText);
    }

    return () => {
      sectionObserver.disconnect();
      heroObserver?.disconnect();
    };
  }, []);

  return (
    <nav className="nav">
      <a className="nav-logo" href="#hero">Cara Kulhanjian</a>
      <div className="nav-right">
        <div className={`mini-nav${showTabs ? ' mini-nav-hidden' : ''}`}>
          {pageTabs.map((tab) => (
            <a key={tab.id} href={`#${tab.id}`}>{tab.label}</a>
          ))}
        </div>
        <div className={`tab-row${showTabs ? ' tab-row-visible' : ''}`}>
          {pageTabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
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
