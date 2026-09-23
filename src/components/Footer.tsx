import React from 'react';
import { sound } from '../utils/audio';
import { ArrowUp, Github, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Credentials */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-display font-bold text-base text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
            <span>SYED MUHAMMAD BIN ALI</span>
            <span className="text-zinc-500 font-mono text-xs">/ SENIOR ARCHITECT</span>
          </div>
          <p className="text-xs text-zinc-500 max-w-sm">
            Full-Stack Web Architect & Autonomous AI Agent Master. Engineered with strict performance invariants.
          </p>
        </div>

        {/* Center: Social & Source Links */}
        <div className="flex items-center gap-6 text-xs font-mono text-zinc-400">
          <a
            href="https://github.com/mohammadGit2"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:mohammadprofessional14@gmail.com"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <a
            href="#projects"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Works</span>
          </a>
        </div>

        {/* Right: Back to top & copyright */}
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
          <span>&copy; {new Date().getFullYear()} SYED. ALL RIGHTS RESERVED.</span>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="p-2 rounded bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
            title="Return to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
