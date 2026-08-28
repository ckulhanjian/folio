import { academics } from '../../data/portfolio.js';

function Coursework() {
  return (
    <section id="coursework" className="section coursework">
      <div className="coursework-head">
        <span className="eyebrow">Coursework</span>
        <h2>{academics.major}</h2>
        <p className="degree">
          {academics.school} · {academics.grad} · GPA {academics.gpa}
        </p>
        <p>{academics.narrative}</p>
      </div>

      <div className="coursework-grid">
        <div>
          <h3 style={{ fontStyle: 'italic', marginBottom: '0.8rem' }}>Relevant Coursework</h3>
          <ul className="pill-list">
            {academics.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>

        <div>
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
        </div>
      </div>
    </section>
  );
}

export default Coursework;
