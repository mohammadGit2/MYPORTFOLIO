import type { Project } from '../data/portfolioData';
import { ProjectMedia } from './ProjectMedia';
import { useDialog } from '../hooks/useDialog';
export function ProjectModal({ project, onClose }: {
    project: Project;
    onClose: () => void;
}) {
    const dialog = useDialog(onClose);
    return <dialog {...dialog} className="case-study" aria-labelledby="case-title" onClick={event => { if (event.target === event.currentTarget)
        onClose(); }}>
    <div className="case-content">
    <header className="case-header">
    <span className="eyebrow">Selected work / {project.number}</span>
    <button autoFocus onClick={onClose} className="close-button" aria-label="Close project details">Close <span>×</span>
    </button>
    </header>
    <div className="case-title">
    <span className="eyebrow">{project.category}</span>
    <h2 id="case-title">{project.title}</h2>
    <p>{project.description}</p>
    </div>
    <figure className="case-media">
    <ProjectMedia project={project} eager/>{project.image && <figcaption>Existing portfolio concept artwork; not a verified product screenshot.</figcaption>}</figure>
    <div className="case-details">
    <div>
    <h3>Technical notes</h3>
    <ol>{project.architecturalBreakdown.map(note => <li key={note}>{note}</li>)}</ol>
    </div>
    <div>
    <h3>Tools & technologies</h3>
    <p>{project.stack.join(' / ')}</p>
    <p className="small muted">Based on the supplied project description.</p>
    </div>
    </div>
    <footer className="case-footer">
    <a className="button-primary" href={project.url} target="_blank" rel="noreferrer">Visit project ↗</a>
    <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub Profile ↗</a>
    <span className="small muted">Escape to close</span>
    </footer>
    </div>
    </dialog>;
}
