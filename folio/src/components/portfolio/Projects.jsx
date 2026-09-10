import { useState } from 'react';
import { projects } from '../../data/portfolio.js';
import Reveal from './Reveal.jsx';

function ProjectsBar({ onSelect }) {
  return (
    <div className="projects-bar">
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          className="project-chip"
          onClick={() => onSelect(project.id)}
        >
          <span className="project-chip-title">{project.title}</span>
          <span className="project-chip-tagline">{project.tagline}</span>
          <p className="project-chip-summary">{project.summary}</p>
          <div className="project-tags">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <div className="project-detail">
      <button type="button" className="project-back" onClick={onBack}>
        ← Back to Projects
      </button>

      <div className="project-detail-grid">
        <div className="project-detail-text">
          <h3>{project.title}</h3>
          <p className="project-detail-tagline">{project.tagline}</p>
          <div className="project-tags">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a
            className="btn btn-outline project-github-link"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub ↗
          </a>
        </div>

        {project.image && (
          <div className="project-detail-image">
            <img src={project.image} alt={`${project.title} preview`} />
          </div>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = projects.find((project) => project.id === selectedId);

  return (
    <section id="projects" className="section projects stack-section">
      <div className="section-reveal">
        <Reveal className="coursework-head" y={22}>
          <span className="eyebrow">Projects</span>
          <h2>Selected Projects</h2>
          <p className="degree">A few things I've built and researched, from class projects to lab work.</p>
        </Reveal>

        {selected ? (
          <ProjectDetail key={selected.id} project={selected} onBack={() => setSelectedId(null)} />
        ) : (
          <ProjectsBar key="projects-bar" onSelect={setSelectedId} />
        )}
      </div>
    </section>
  );
}

export default Projects;
