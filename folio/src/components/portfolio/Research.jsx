import { research } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import PhotoStack from './PhotoStack.jsx';

function Research() {
  return (
    <section id="research" className="section research stack-section">
      <div className="section-reveal">
        <Reveal as="span" className="eyebrow" y={0}>
          Research Project
        </Reveal>
        <Reveal className="research-title-wrap" delay={0.05}>
          <h2 className="research-title">{research.title}</h2>
        </Reveal>

        {/* Full section width — same span as the two-column area
            below it, from the left edge to the photo stack's right
            edge — not just the width of the text column. */}
        <div className="research-meta">
          {[
            ['Principal Investigator', research.pi],
            ['Institution & Department', research.institution],
            ['Time Affiliated', research.duration],
          ].map(([label, value], i) => (
            <Reveal key={label} className="meta-card" y={18} delay={0.1 + i * 0.08}>
              <div className="label">{label}</div>
              <div className="value">{value}</div>
            </Reveal>
          ))}
        </div>

        <div className="research-layout">
          <div className="research-text">
            <Reveal className="research-body" y={0}>
              <p>{research.summary}</p>
            </Reveal>

            <Reveal className="research-summary" y={18} delay={0.1}>
              <h3>Summary</h3>
              <ul className="plain-list">
                {research.keyFindings.map((finding) => (
                  <li key={finding}>{finding}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="research-links" y={18}>
              {research.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </Reveal>
          </div>

          {/* Centered vertically across the whole column — equidistant
              between the top of this row and the section's bottom
              edge — rather than sitting level with any one piece of
              text. */}
          <Reveal className="research-photos" x={24} y={0} delay={0.1}>
            <PhotoStack />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Research;
