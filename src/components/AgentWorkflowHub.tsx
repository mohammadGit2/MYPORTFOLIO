import React, { useState } from 'react';
import { AI_AGENTS, AIAgentSystem, AgentNode } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Bot, Play, RotateCcw, Terminal, GitBranch, CheckCircle, Clock, Zap, ArrowRight, Activity, ShieldCheck, Database } from 'lucide-react';

export const AgentWorkflowHub: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<AIAgentSystem>(AI_AGENTS[0]);
  const [viewMode, setViewMode] = useState<'graph' | 'terminal'>('graph');
  const [isRunning, setIsRunning] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(-1);
  const [selectedNode, setSelectedNode] = useState<AgentNode | null>(null);
  const [logs, setLogs] = useState<string[]>(AI_AGENTS[0].rawTraceLog);

  const handleSelectAgent = (agent: AIAgentSystem) => {
    sound.playClick();
    setSelectedAgent(agent);
    setActiveNodeIndex(-1);
    setIsRunning(false);
    setSelectedNode(null);
    setLogs(agent.rawTraceLog);
  };

  const runSimulation = () => {
    if (isRunning) return;
    sound.playClick();
    setIsRunning(true);
    setActiveNodeIndex(0);
    setLogs([]);

    const nodes = selectedAgent.nodes;
    let currentIdx = 0;

    const interval = setInterval(() => {
      sound.playStep();
      const currentLog = selectedAgent.rawTraceLog[currentIdx] || `[TRACE] Executed node: ${nodes[currentIdx]?.name}`;
      setLogs((prev) => [...prev, currentLog]);

      currentIdx++;
      if (currentIdx < nodes.length) {
        setActiveNodeIndex(currentIdx);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          sound.playSuccess();
          setIsRunning(false);
          setActiveNodeIndex(nodes.length);
        }, 300);
      }
    }, 550);
  };

  const resetSimulation = () => {
    sound.playClick();
    setIsRunning(false);
    setActiveNodeIndex(-1);
    setLogs(selectedAgent.rawTraceLog);
    setSelectedNode(null);
  };

  return (
    <section id="ai-agents" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="space-y-3 border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
          <Bot className="w-3.5 h-3.5" />
          <span>02. Autonomous Agent Architectures</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              AI Agent & Workflow Hub<span className="text-emerald-400">.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl pt-1">
              Production autonomous decision pipelines engineered with n8n, structured LLM reasoning, deterministic API tooling, and self-evaluating state loops.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono text-zinc-400">5 ACTIVE AUTONOMOUS SUITES</span>
          </div>
        </div>
      </div>

      {/* Main Agent Hub Container */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: 5 Agent System Selectors */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider px-1">
            Select Autonomous System
          </div>
          <div className="space-y-2">
            {AI_AGENTS.map((agent, idx) => {
              const isSelected = selectedAgent.id === agent.id;
              return (
                <div
                  key={agent.id}
                  onClick={() => handleSelectAgent(agent)}
                  onMouseEnter={() => sound.playHover()}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white/[0.06] border-emerald-400/50 shadow-lg shadow-emerald-500/5'
                      : 'bg-[#0c0d12]/70 border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-zinc-500">0{idx + 1} // AGENT</span>
                    <span className="text-emerald-400">{agent.reliability}</span>
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-white">
                    {agent.title}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {agent.description}
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-[11px] font-mono text-zinc-500">
                    <span className="flex items-center gap-1 text-zinc-400">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {agent.avgLatency}
                    </span>
                    <span>·</span>
                    <span>{agent.nodes.length} Execution Nodes</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Node Graph / Execution Engine */}
        <div className="lg:col-span-8 flex flex-col rounded-2xl bg-[#0c0d12] border border-white/[0.1] overflow-hidden shadow-2xl">
          
          {/* Top Engine Console Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-b border-white/[0.08] bg-[#090a0f]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-display">
                  {selectedAgent.title}
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  CATEGORY: {selectedAgent.category}
                </div>
              </div>
            </div>

            {/* View Mode Toggle & Simulation Triggers */}
            <div className="flex items-center gap-2">
              <div className="flex items-center p-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs">
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewMode('graph');
                  }}
                  className={`px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1.5 ${
                    viewMode === 'graph' ? 'bg-emerald-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Node Graph</span>
                </button>
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewMode('terminal');
                  }}
                  className={`px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1.5 ${
                    viewMode === 'terminal' ? 'bg-emerald-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Terminal Logs</span>
                </button>
              </div>

              <button
                onClick={runSimulation}
                disabled={isRunning}
                onMouseEnter={() => sound.playHover()}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow transition-all ${
                  isRunning
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-not-allowed'
                    : 'bg-emerald-400 hover:bg-emerald-300 text-black'
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Executing...' : 'Run Simulation'}</span>
              </button>

              <button
                onClick={resetSimulation}
                onMouseEnter={() => sound.playHover()}
                title="Reset simulation"
                className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Trigger Event Banner */}
          <div className="px-5 py-3 bg-white/[0.02] border-b border-white/[0.06] text-xs font-mono flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-zinc-400">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-zinc-500">EVENT TRIGGER:</span>
              <span className="text-zinc-200">{selectedAgent.triggerEvent}</span>
            </div>
            <div className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Reliability: {selectedAgent.reliability}</span>
            </div>
          </div>

          {/* Main Visual Content View: Graph OR Terminal */}
          <div className="p-5 sm:p-6 flex-1 min-h-[380px] flex flex-col justify-between">
            {viewMode === 'graph' ? (
              <div className="space-y-6">
                
                {/* Node Pipeline Map */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>STEP-BY-STEP EXECUTION PIPELINE</span>
                    <span>CLICK ANY NODE TO INSPECT PAYLOAD</span>
                  </div>

                  {/* Horizontal/Vertical Steps Pipeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {selectedAgent.nodes.map((node, idx) => {
                      const isActive = isRunning && activeNodeIndex === idx;
                      const isCompleted = activeNodeIndex > idx || (!isRunning && activeNodeIndex === selectedAgent.nodes.length);
                      const isSelected = selectedNode?.id === node.id;

                      return (
                        <div
                          key={node.id}
                          onClick={() => {
                            sound.playClick();
                            setSelectedNode(node);
                          }}
                          onMouseEnter={() => sound.playHover()}
                          className={`relative p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[120px] ${
                            isActive
                              ? 'bg-emerald-500/15 border-emerald-400 ring-2 ring-emerald-400/20 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                              : isCompleted
                              ? 'bg-emerald-950/20 border-emerald-500/30'
                              : isSelected
                              ? 'bg-white/[0.08] border-white/40'
                              : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
                          }`}
                        >
                          {/* Step Number & Status Icon */}
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="text-zinc-500">0{idx + 1}</span>
                            {isActive ? (
                              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                            ) : isCompleted ? (
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600"></span>
                            )}
                          </div>

                          {/* Node Title */}
                          <div className="my-1.5">
                            <div className="text-xs font-bold text-white leading-tight">
                              {node.name}
                            </div>
                            <div className="text-[10px] text-zinc-400 line-clamp-2 mt-0.5">
                              {node.role}
                            </div>
                          </div>

                          {/* Latency metric badge */}
                          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1 border-t border-white/[0.04]">
                            <span>LATENCY</span>
                            <span className="text-zinc-300 font-semibold">{node.latency}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Node or Payload Inspection Box */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-200">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      {selectedNode ? `NODE INSPECTOR: ${selectedNode.name}` : 'PIPELINE INPUT & OUTCOME TRACE'}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-mono">
                      {selectedNode ? `Output Schema: ${selectedNode.outputType}` : `Latency: ${selectedAgent.avgLatency}`}
                    </span>
                  </div>

                  {selectedNode ? (
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 font-mono block text-[11px]">ROLE / BEHAVIOR</span>
                        <span className="text-zinc-200">{selectedNode.role}</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 font-mono block text-[11px]">PRODUCED ARTIFACT / RETURN TYPE</span>
                        <code className="text-emerald-400 font-mono">{selectedNode.outputType}</code>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] space-y-1">
                        <span className="text-amber-400 font-mono text-[11px]">SAMPLE INGESTION PAYLOAD</span>
                        <p className="text-zinc-300 italic">"{selectedAgent.sampleInput}"</p>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 space-y-1">
                        <span className="text-emerald-400 font-mono text-[11px]">AUTONOMOUS SYSTEM OUTCOME</span>
                        <p className="text-zinc-300">{selectedAgent.executionOutcome}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tools & Integrations row */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs font-mono text-zinc-500">CONNECTED TOOLS:</span>
                  {selectedAgent.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              /* Terminal View */
              <div className="h-full flex flex-col justify-between space-y-4">
                <div className="font-mono text-xs text-zinc-300 bg-black/80 p-4 rounded-xl border border-white/[0.08] space-y-2 overflow-x-auto min-h-[260px]">
                  <div className="text-zinc-500 pb-2 border-b border-white/[0.06] flex items-center justify-between">
                    <span>// EXECUTION STACK TRACE CONSOLE</span>
                    <span className="text-emerald-400">STREAMING READY</span>
                  </div>
                  {logs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 shrink-0">&gt;</span>
                      <span className={log.includes('PASSED') || log.includes('200 OK') ? 'text-emerald-300 font-semibold' : 'text-zinc-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                  {isRunning && (
                    <div className="flex items-center gap-2 text-amber-400 animate-pulse">
                      <span>&gt;</span>
                      <span>Processing state transition...</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Log Buffer: {logs.length} events</span>
                  <button
                    onClick={runSimulation}
                    disabled={isRunning}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                  >
                    <span>Re-run stream</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
