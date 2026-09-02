import { profile } from '../../data/portfolio.js';
import headshotDots from '../../assets/about-headshot-dots.jpg';
import Reveal from './Reveal.jsx';

function About() {
  return (
    <section id="about" className="section about stack-section">
      <div className="about-spread section-reveal">
        <Reveal className="about-copy" y={26}>
          <span className="eyebrow">About</span>
          <h2 className="about-theme accent">Carpe Diem.</h2>
          <p className="about-story">
            Carpe Diem has always felt less like a motto and more like a method. I came to
            computer science through curiosity — for how systems work, how people use them,
            and how good design can make both feel effortless — and that same curiosity is
            what's pulled me toward research, toward leadership, toward saying yes to the
            harder path when it's the more interesting one.
          </p>
          <p className="about-story">
            At the University of Florida's Honors College, I've built that curiosity into a
            practice: analyzing patient data in a neuroscience lab, leading a
            cross-disciplinary engineering team, mentoring students still finding their
            footing in code. Data, design, and a bit of stubborn optimism are the threads
            running through all of it — the belief that today's the day to start the thing
            you've been putting off.
          </p>
          <p className="hero-meta">{profile.meta}</p>
        </Reveal>

        <Reveal className="about-photos" y={26} delay={0.15}>
          <figure className="about-photo about-photo-main">
            <img src={headshotDots} alt={profile.name} />
            <figcaption>{profile.name}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
