import React from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Cpu, Workflow, ShieldCheck, Zap, Layers, Server } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="space-y-3 border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Workflow className="w-3.5 h-3.5" />
          <span>03. Engineering Philosophy & Systems</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Architectural Mastery<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl pt-1">
              Building at the intersection of modern full-stack web platforms and autonomous machine intelligence.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            DETERMINISTIC · SCALABLE · PRODUCTION-TESTED
          </div>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
        
        {/* Pillar 1 */}
        <div 
          onMouseEnter={() => sound.playHover()}
          className="p-6 rounded-2xl bg-[#0c0d12] border border-white/[0.08] hover:border-cyan-400/40 transition-all space-y-4"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono text-zinc-500 uppercase">PILLAR 01</div>
            <h3 className="text-xl font-display font-bold text-white">Full-Stack Web Engineering</h3>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Architecting ultra-responsive web applications using React, Next.js, and TypeScript. Delivering zero layout shift (CLS 0.0), sub-second First Contentful Paint, and bulletproof client state stores.
          </p>
          <div className="pt-2 border-t border-white/[0.06] text-xs font-mono text-zinc-400 space-y-1">
            <div>• Core Web Vitals 95+ Baseline</div>
            <div>• Server-Sent Events (SSE) Streaming</div>
            <div>• Type-safe contract APIs</div>
          </div>
        </div>

        {/* Pillar 2 */}
        <div 
          onMouseEnter={() => sound.playHover()}
          className="p-6 rounded-2xl bg-[#0c0d12] border border-white/[0.08] hover:border-emerald-400/40 transition-all space-y-4"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono text-zinc-500 uppercase">PILLAR 02</div>
            <h3 className="text-xl font-display font-bold text-white">Autonomous Agent Swarms</h3>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Transforming non-deterministic LLM output into reliable business workflows. Combining n8n visual graphs, custom prompt guardrails, and deterministic tool verification to deploy self-healing agents.
          </p>
          <div className="pt-2 border-t border-white/[0.06] text-xs font-mono text-zinc-400 space-y-1">
            <div>• Structured JSON schema enforcement</div>
            <div>• Real-time webhook dispatching</div>
            <div>• Autonomous bug triage & self-patching</div>
          </div>
        </div>

        {/* Pillar 3 */}
        <div 
          onMouseEnter={() => sound.playHover()}
          className="p-6 rounded-2xl bg-[#0c0d12] border border-white/[0.08] hover:border-amber-400/40 transition-all space-y-4"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-mono text-zinc-500 uppercase">PILLAR 03</div>
            <h3 className="text-xl font-display font-bold text-white">Production Reliability & Speed</h3>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Engineering robust backends with Node.js and SQL data layers. Handling failovers gracefully with transactional locks, automated retry queues, and end-to-end telemetry observability.
          </p>
          <div className="pt-2 border-t border-white/[0.06] text-xs font-mono text-zinc-400 space-y-1">
            <div>• 99.9% uptime pipeline guarantees</div>
            <div>• Concurrency locks & idempotent operations</div>
            <div>• Instant localized audio & visual micro-interactions</div>
          </div>
        </div>

      </div>

      {/* Tech Stack Matrix */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0c0d12] border border-white/[0.08] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Mastery Matrix & Production Competencies</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">VERIFIED SKILL BENCHMARK</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_LIST.map((group, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-zinc-200">{group.name}</span>
                <span className="text-xs font-mono text-amber-400 tabular-nums">{group.level}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
