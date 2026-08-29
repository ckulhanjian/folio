import '../style/portfolio.css';
import Nav from './portfolio/Nav.jsx';
import Hero from './portfolio/Hero.jsx';
import About from './portfolio/About.jsx';
import Research from './portfolio/Research.jsx';
import Coursework from './portfolio/Coursework.jsx';
import Resume from './portfolio/Resume.jsx';
import Interlude from './portfolio/Interlude.jsx';
import PortfolioFooter from './portfolio/PortfolioFooter.jsx';
import MobileStack from './portfolio/MobileStack.jsx';
import useIsMobile from '../hooks/useIsMobile.js';

// Two different experiences share one data source (data/portfolio.js):
// desktop scrolls through full-screen pages behind a top nav, mobile
// collapses everything into one screen of expand/collapse cards with
// no separate navigation at all.
function PortfolioHome() {
  const isMobile = useIsMobile();

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
      <Interlude />
      <PortfolioFooter />
    </div>
  );
}

export default PortfolioHome;
