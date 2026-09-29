import { useState } from 'react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ProjectMedia } from './ProjectMedia';
import { sound } from '../utils/audio';
const categories = ['All', ...new Set(PROJECTS.map(project => project.category))];
export function ProjectsSection() {
    const [category, setCategory] = useState('All');
    const [selected, setSelected] = useState<Project | null>(null);
    const projects = PROJECTS.filter(project => category === 'All' || project.category === category);
    function open(project: Project) { sound.playClick(); setSelected(project); }
    return <section id="projects" className="work section" tabIndex={-1} aria-labelledby="work-title">
    <div className="section-heading">
    <span className="eyebrow">01 / Selected work</span>
    <h2 id="work-title">Different problems.<br />
    <span className="muted">Same curiosity.</span>
    </h2>
    <p>A collection of products, experiments, and interfaces. Open a project to look closer.</p>
    </div>
    <div className="filter-bar">
    <div className="filters" aria-label="Filter projects">{categories.map(cat => <button key={cat} aria-pressed={category === cat} onClick={() => setCategory(cat)}>{cat}</button>)}</div>
    <span className="project-count" aria-live="polite">{String(projects.length).padStart(2, '0')} projects</span>
    </div>
    <div className={`project-collection ${category !== 'All' ? 'is-filtered' : ''}`}>{projects.map(project => <article key={project.id} className={`project project-${project.number}`}>
        <div className="project-caption">
        <span className="project-number">{project.number}</span>
        <span>{project.category}</span>
        <span className="caption-end">{project.image ? 'Concept artwork' : 'Project notes'}</span>
        </div>
        <button className="project-media" onClick={() => open(project)} aria-label={`Explore ${project.title}`}>
        <ProjectMedia project={project}/>
        <span className="media-cta">Explore project <span>↗</span>
        </span>
        </button>
        <div className="project-info">
        <div>
        <h3>
        <button onClick={() => open(project)}>{project.title} <span>↗</span>
        </button>
        </h3>
        <p>{project.tagline}</p>
        </div>
        <a className="text-link project-live" href={project.url} target="_blank" rel="noreferrer">Visit site ↗</a>
        </div>
        </article>)}</div>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)}/>}</section>;
}
