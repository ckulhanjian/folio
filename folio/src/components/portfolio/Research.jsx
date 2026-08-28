import { research } from '../../data/portfolio.js';

function Research() {
  return (
    <section id="research" className="section research">
      <span className="eyebrow">Research Project</span>
      <h2 className="research-title">{research.title}</h2>

      <div className="research-meta">
        <div className="meta-card">
          <div className="label">Principal Investigator</div>
          <div className="value">{research.pi}</div>
        </div>
        <div className="meta-card">
          <div className="label">Institution &amp; Department</div>
          <div className="value">{research.institution}</div>
        </div>
        <div className="meta-card">
          <div className="label">Time Affiliated</div>
          <div className="value">{research.duration}</div>
        </div>
      </div>

      <div className="research-grid">
        <div className="research-body">
          <div>
            <h3>Research Focus</h3>
            <p>{research.focus}</p>
          </div>
          <div>
            <h3>Project Responsibilities</h3>
            <p>{research.responsibilities}</p>
          </div>
        </div>

        <div className="research-media" role="img" aria-label="Placeholder for a research figure or photo">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="10" width="56" height="44" rx="6" stroke="#6e0f13" strokeWidth="2.5" />
            <circle cx="20" cy="24" r="5" stroke="#6e0f13" strokeWidth="2.5" />
            <path d="M4 44L22 30L34 40L46 26L60 40" stroke="#6e0f13" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="media-label">Add a figure or photo</span>
          <span className="media-sub">e.g. a heatmap from the imaging analysis or a lab photo</span>
        </div>
      </div>

      <div className="research-context">
        <h3>About the Data</h3>
        <p>{research.context}</p>
      </div>
    </section>
  );
}

export default Research;
