import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/audio';
import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'E-Commerce', 'AI Integration', 'Interactive Web'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const handleOpenProject = (project: Project) => {
    sound.playSuccess();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. Production Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Featured Systems & Deployments<span className="text-amber-400">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Live digital experiences and high-conversion software engines engineered for scale, zero layout shift, and immediate business ROI.
          </p>
        </div>

        {/* Functional category filter tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.08] rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-amber-400 text-black font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenProject(project)}
            onMouseEnter={() => sound.playHover()}
            className="group relative flex flex-col justify-between rounded-xl bg-[#0c0d12]/90 border border-white/[0.08] hover:border-amber-400/40 p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 cursor-pointer overflow-hidden"
          >
            {/* Top metadata row */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="text-amber-400 font-medium">{project.category}</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    LIVE
                  </span>
                </div>
              </div>

              {/* Preview Thumbnail Container */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/[0.06] bg-black/40">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-900 to-zinc-950">
                    <span className="font-display font-bold text-lg text-white mb-1">{project.title}</span>
                    <span className="text-xs font-mono text-zinc-500">MICRO-FRONTEND SERVICE</span>
                  </div>
                )}
                
                {/* Floating overlay trigger button on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="px-3.5 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-xs font-medium text-white flex items-center gap-1.5 shadow-lg">
                    <span>Inspect Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </span>
                </div>
              </div>

              {/* Project Title and Description */}
              <div className="space-y-2 pt-1">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors shrink-0" />
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="px-1.5 py-0.5 text-[11px] font-mono text-zinc-500">
                    +{project.stack.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div 
              className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="text-zinc-500 hover:text-zinc-300 font-mono flex items-center gap-1 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Overlay Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
