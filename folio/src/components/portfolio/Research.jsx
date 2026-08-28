import { research } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';
import PhotoStack from './PhotoStack.jsx';

function Research() {
  return (
    <section id="research" className="section research stack-section">
      <Reveal as="span" className="eyebrow" y={0}>
        Research Project
      </Reveal>
      <Reveal className="research-title-wrap" delay={0.05}>
        <h2 className="research-title">{research.title}</h2>
      </Reveal>

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

      <div className="research-grid">
        <Reveal className="research-body" x={-24} y={0}>
          <p>{research.summary}</p>
        </Reveal>

        <Reveal x={24} y={0} delay={0.1}>
          <PhotoStack />
        </Reveal>
      </div>

      <Reveal className="research-links" y={18}>
        {research.links.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
            {link.label} ↗
          </a>
        ))}
      </Reveal>
    </section>
  );
}

export default Research;
