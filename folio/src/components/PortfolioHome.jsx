import { useEffect } from 'react';
import '../style/portfolio.css';
import Nav from './portfolio/Nav.jsx';
import Hero from './portfolio/Hero.jsx';
import About from './portfolio/About.jsx';
import Research from './portfolio/Research.jsx';
import Coursework from './portfolio/Coursework.jsx';
import Resume from './portfolio/Resume.jsx';
import PortfolioFooter from './portfolio/PortfolioFooter.jsx';
import MobileStack from './portfolio/MobileStack.jsx';
import useIsMobile from '../hooks/useIsMobile.js';

// Two different experiences share one data source (data/portfolio.js):
// desktop scrolls through full-screen pages behind a top nav, mobile
// collapses everything into one screen of expand/collapse cards with
// no separate navigation at all.
function PortfolioHome() {
  const isMobile = useIsMobile();

  // Desktop only: each section's own color/background stays invisible
  // until a meaningful chunk of it has scrolled into view, rather than
  // popping in the instant its first pixel crosses the viewport edge.
  // Sections don't snap into place anymore — this reveal is what
  // signals "the next page" instead.
  useEffect(() => {
    if (isMobile) return;
    const sections = document.querySelectorAll('.hero-full, .stack-section');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="portfolio">
        <MobileStack />
      </div>
    );
  }

  return (
    <div className="portfolio">
      <Nav />
      <Hero />
      <About />
      <Research />
      <Coursework />
      <Resume />
      <PortfolioFooter />
    </div>
  );
}

export default PortfolioHome;
