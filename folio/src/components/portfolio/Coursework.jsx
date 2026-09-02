import { academics } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';

function Coursework() {
  return (
    <section id="coursework" className="section coursework stack-section">
      <div className="section-reveal">
        <Reveal className="coursework-head" y={22}>
          <span className="eyebrow">Coursework</span>
          <h2>{academics.major}</h2>
          <p className="degree">
            {academics.school} · {academics.grad} · GPA {academics.gpa}
          </p>
        </Reveal>

        <div className="coursework-grid">
          <Reveal x={-30} y={0} delay={0.1}>
            <h3 style={{ fontStyle: 'italic', marginBottom: '0.8rem' }}>Relevant Coursework</h3>
            <ul className="pill-list">
              {academics.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal x={30} y={0} delay={0.2}>
            <div className="side-col">
              <h3>Distinctions</h3>
              <ul className="plain-list">
                {academics.distinctions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="side-col">
              <h3>Involvement</h3>
              <ul className="plain-list">
                {academics.involvement.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Coursework;
