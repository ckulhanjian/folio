import { academics, timeline } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';

// Plotted oldest (freshman) at the bottom-left to newest (senior) at
// the top-right, like a diagonal ramp — each stop's content grows
// downward from its point on the line, so the years never crowd each
// other even though they hold very different numbers of events.
const POINTS = [
  { left: 6, top: 85 },
  { left: 25, top: 62 },
  { left: 44, top: 34 },
  { left: 63, top: 8 },
];

function Coursework() {
  return (
    <section id="education" className="section coursework stack-section">
      <div className="section-reveal">
        <Reveal className="coursework-head" y={22}>
          <span className="eyebrow">Education</span>
          <h2>{academics.major}</h2>
          <p className="degree">
            {academics.school} · {academics.grad} · GPA {academics.gpa}
          </p>
        </Reveal>

        <Reveal y={20} delay={0.1} className="timeline-diag">
          <svg className="timeline-diag-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line
              x1={POINTS[0].left}
              y1={POINTS[0].top}
              x2={POINTS[POINTS.length - 1].left}
              y2={POINTS[POINTS.length - 1].top}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {timeline.map((yearItem, index) => {
            const point = POINTS[index];
            return (
              <div
                key={yearItem.id}
                className="timeline-diag-point"
                style={{ left: `${point.left}%`, top: `${point.top}%` }}
              >
                <span className="timeline-diag-dot" aria-hidden="true" />
                <div className="timeline-diag-content">
                  <h4>
                    {yearItem.label} <span className="timeline-diag-range">({yearItem.range})</span>
                  </h4>
                  <ul>
                    {yearItem.events.map((event) => (
                      <li key={event}>{event}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal y={20} delay={0.2} className="side-col education-distinctions">
          <h3>Distinctions</h3>
          <ul className="plain-list">
            {academics.distinctions.map((item) => (
              <li key={item.text}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Coursework;
