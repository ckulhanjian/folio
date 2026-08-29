import '../style/portfolio.css';
import Nav from './portfolio/Nav.jsx';
import Hero from './portfolio/Hero.jsx';
import About from './portfolio/About.jsx';
import Research from './portfolio/Research.jsx';
import Coursework from './portfolio/Coursework.jsx';
import Resume from './portfolio/Resume.jsx';
import Interlude from './portfolio/Interlude.jsx';
import PortfolioFooter from './portfolio/PortfolioFooter.jsx';

function PortfolioHome() {
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
