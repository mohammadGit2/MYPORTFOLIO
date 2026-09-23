import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';
import { ArrowDown, Bot, Code2, Cpu, ExternalLink, Zap } from 'lucide-react';

const HEADLINE_ROTATIONS = [
  'Full-Stack Web Architect',
  'Autonomous AI Agent Master',
  'n8n & LLM Workflow Engineer'
];

export const Hero: React.FC = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [pktTime, setPktTime] = useState('');

  // PKT Time Tracker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setPktTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Kinetic headline cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setHeadlineIndex((prev) => (prev + 1) % HEADLINE_ROTATIONS.length);
        setFadeState('in');
      }, 350);
    }, 3600);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    sound.playClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[280px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Top Editorial Status Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>SYSTEM LIVE • OPEN FOR CONTRACTS</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
            LOCAL TIME: <span className="text-zinc-200 tabular-nums">{pktTime || 'PKT'}</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-zinc-400">
          <div>
            <span className="text-zinc-600 block">PIPELINE RELIABILITY</span>
            <span className="text-zinc-200 font-semibold tabular-nums text-sm">99.9%</span>
          </div>
          <div className="border-l border-white/[0.06] pl-6">
            <span className="text-zinc-600 block">CUSTOM WORKFLOWS</span>
            <span className="text-amber-400 font-semibold tabular-nums text-sm">50+ BUILT</span>
          </div>
        </div>
      </div>

      {/* Main Kinetic Typography Hero Center */}
      <div className="my-auto py-12 md:py-16 max-w-5xl">
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <span>Syed Muhammad Bin Ali</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
            Engineering resilient <br />
            <span className="inline-block relative">
              <span 
                className={`inline-block transition-all duration-300 font-display ${
                  fadeState === 'in' 
                    ? 'opacity-100 translate-y-0 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500' 
                    : 'opacity-0 -translate-y-2 text-zinc-400'
                }`}
              >
                {HEADLINE_ROTATIONS[headlineIndex]}
              </span>
            </span>
            <span className="text-amber-400">.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl font-normal leading-relaxed pt-2">
            Senior Full-Stack Architect crafting sub-second web platforms and autonomous AI agent systems. 
            Bridging production web applications with deterministic n8n pipelines, LLM tool-calling logic, 
            and self-healing backend infrastructure.
          </p>
        </div>

        {/* Action CTAs and Quick Proof Links */}
        <div className="pt-8 sm:pt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={() => scrollToSection('projects')}
            onMouseEnter={() => sound.playHover()}
            className="px-6 py-3.5 rounded bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-lg hover:shadow-amber-500/10"
          >
            <span>Explore Live Projects</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('ai-agents')}
            onMouseEnter={() => sound.playHover()}
            className="px-6 py-3.5 rounded bg-zinc-900/90 border border-white/[0.12] text-zinc-200 font-semibold text-sm hover:bg-zinc-800 hover:border-amber-400/40 hover:text-white transition-all flex items-center gap-2"
          >
            <Bot className="w-4 h-4 text-amber-400" />
            <span>Inspect Autonomous Agents</span>
          </button>

          <a
            href="https://github.com/mohammadGit2"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="px-4 py-3.5 text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5"
          >
            <span>GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Bottom Proof Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            <span>FULL-STACK WEB</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-white tracking-tight">React & Next.js</div>
          <div className="text-xs text-zinc-500">Sub-second response architectures</div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
            <Bot className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI AGENTS</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-white tracking-tight">Autonomous Ops</div>
          <div className="text-xs text-zinc-500">Self-evaluating multi-agent swarms</div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>N8N & WEBHOOKS</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-white tracking-tight">Deterministic Hub</div>
          <div className="text-xs text-zinc-500">Enterprise data & API orchestration</div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>EXECUTION SPEED</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-white tracking-tight tabular-nums">&lt; 800ms Avg</div>
          <div className="text-xs text-zinc-500">Sub-second pipeline turnaround</div>
        </div>
      </div>
    </section>
  );
};
