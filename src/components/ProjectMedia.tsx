import { useState } from 'react';
import type { Project } from '../data/portfolioData';
export function ProjectMedia({ project, eager = false }: {
    project: Project;
    eager?: boolean;
}) {
    const [failed, setFailed] = useState(false);
    if (!project.image || failed)
        return <div className={`typographic-media media-${project.id}`}>
        <span className="eyebrow">{failed ? 'Preview unavailable' : project.category}</span>
        <strong>{project.id === 'sm-bot' ? 'Hello,\npossibility.' : project.id === 'seo-busin' ? 'Be\nfound.' : project.title}</strong>
        <span>{project.stack.join(' / ')}</span>
        </div>;
    return <img src={project.image} srcSet={`${project.imageSmall} 640w, ${project.image} 1376w`} sizes="(max-width: 760px) 100vw, 75vw" width={1376} height={768} loading={eager ? 'eager' : 'lazy'} decoding="async" alt={project.imageAlt} onError={() => setFailed(true)}/>;
}
