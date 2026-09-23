import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Globe } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sound.playClick();
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        sound.playClick();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0e14] border border-white/[0.12] rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 text-zinc-100 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="text-amber-400 uppercase tracking-widest">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                PRODUCTION DEPLOYED
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            onMouseEnter={() => sound.playHover()}
            className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Visual or Preview Frame */}
        {project.image ? (
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/[0.08] bg-black/40">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="text-xs font-mono text-zinc-300 bg-black/60 px-3 py-1.5 rounded backdrop-blur-md border border-white/[0.1]">
                Live Production Environment
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-3.5 py-1.5 rounded bg-amber-400 text-black text-xs font-semibold hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>Launch Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/[0.08] bg-[#12131b] p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>DEPLOYMENT RUNTIME: VERCEL / NODE.JS</span>
              <span>STATE: ACTIVE</span>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold font-display text-white">{project.title}</div>
              <p className="text-zinc-400 text-sm max-w-lg">{project.description}</p>
            </div>
            <div className="flex items-center justify-end">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-4 py-2 rounded bg-amber-400 text-black text-xs font-semibold hover:bg-amber-300 transition-colors flex items-center gap-1.5"
              >
                <span>Open Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase">{metric.label}</div>
              <div className="text-lg sm:text-2xl font-bold text-white tabular-nums tracking-tight font-mono">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture Breakdown */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Architectural Engineering Breakdown</span>
          </div>
          <div className="grid gap-2.5">
            {project.architecturalBreakdown.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-zinc-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack List */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Embedded Technology Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Triggers Footer */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="px-5 py-2.5 rounded bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Production URL</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="px-4 py-2.5 rounded bg-zinc-900 border border-white/[0.12] text-zinc-300 hover:text-white hover:border-zinc-500 text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="text-xs text-zinc-400 hover:text-white transition-colors"
          >
            Press ESC to exit
          </button>
        </div>
      </div>
    </div>
  );
};
