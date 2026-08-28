import '../style/portfolio.css';
import Nav from './portfolio/Nav.jsx';
import Hero from './portfolio/Hero.jsx';
import Research from './portfolio/Research.jsx';
import Coursework from './portfolio/Coursework.jsx';
import Resume from './portfolio/Resume.jsx';
import PortfolioFooter from './portfolio/PortfolioFooter.jsx';

function PortfolioHome() {
  return (
    <div className="portfolio">
      <Nav />
      <Hero />
      <Research />
      <Coursework />
      <Resume />
      <PortfolioFooter />
    </div>
  );
}

export default PortfolioHome;
