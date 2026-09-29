import { useEffect, useReducer, useState } from 'react';
import { AI_AGENTS } from '../data/portfolioData';
import { sound } from '../utils/audio';
type State = {
    step: number;
    running: boolean;
    run: number;
};
type Action = {
    type: 'run';
} | {
    type: 'reset';
} | {
    type: 'tick';
    run: number;
    count: number;
};
function reducer(state: State, action: Action): State {
    if (action.type === 'reset')
        return { step: -1, running: false, run: state.run + 1 };
    if (action.type === 'run')
        return state.running ? state : { step: 0, running: true, run: state.run + 1 };
    if (!state.running || action.run !== state.run)
        return state;
    const step = state.step + 1;
    return { ...state, step, running: step < action.count };
}
export default function AgentWorkflowHub() {
    const [agentIndex, setAgentIndex] = useState(0);
    const [view, setView] = useState<'graph' | 'trace'>('graph');
    const [inspected, setInspected] = useState<number | null>(null);
    const [state, dispatch] = useReducer(reducer, { step: -1, running: false, run: 0 });
    const agent = AI_AGENTS[agentIndex];
    const complete = state.step === agent.nodes.length;
    const selectedIndex = inspected ?? Math.max(0, Math.min(state.step, agent.nodes.length - 1));
    const node = agent.nodes[selectedIndex];
    useEffect(() => {
        if (!state.running)
            return;
        const timer = window.setTimeout(() => dispatch({ type: 'tick', run: state.run, count: agent.nodes.length }), 850);
        return () => window.clearTimeout(timer);
    }, [state.running, state.step, state.run, agent.nodes.length]);
    const reset = () => { dispatch({ type: 'reset' }); setInspected(null); };
    const run = () => { setInspected(null); sound.playClick(); dispatch({ type: 'run' }); };
    const status = complete ? 'Simulation complete' : state.running ? `Step ${state.step + 1} of ${agent.nodes.length}: ${agent.nodes[state.step].name}` : 'Ready to explore';
    return <>
    <div className="lab-heading">
    <div>
    <span className="eyebrow">02 / The systems lab</span>
    <h2>Inside the<br />
    <em>workflow.</em>
    </h2>
    </div>
    <div className="lab-intro">
    <span className="demo-label">Interactive architecture demo</span>
    <p>A message comes in. A useful action comes out. Explore the decisions in between.</p>
    <p className="small">These simulations run locally with example data. They do not contact APIs, publish content, or represent production telemetry.</p>
    </div>
    </div>
    <div className="lab-layout">
    <div className="agent-index" role="group" aria-label="Choose an agent demonstration">{AI_AGENTS.map((item, index) => <button key={item.id} aria-pressed={index === agentIndex} onClick={() => { reset(); setAgentIndex(index); }}>
        <span className="agent-number">0{index + 1}</span>
        <span>{item.title}</span>
        <span className="agent-arrow">↗</span>
        </button>)}</div>
    <div className="workflow">
    <div className="workflow-heading">
    <div>
    <span className="eyebrow">{agent.category}</span>
    <h3>{agent.title}</h3>
    </div>
    <div className="view-controls" role="group" aria-label="Workflow view">
    <button aria-pressed={view === 'graph'} onClick={() => setView('graph')}>Flow</button>
    <button aria-pressed={view === 'trace'} onClick={() => setView('trace')}>Trace</button>
    </div>
    </div>
    <p className="workflow-description">{agent.description}</p>
    <div className="workflow-trigger">
    <span className="eyebrow">Trigger</span>
    <p>{agent.triggerEvent}</p>
    </div>{view === 'graph' ? <ol className="node-flow" aria-label="Execution steps">{agent.nodes.map((item, index) => {
                const phase = index < state.step ? 'complete' : index === state.step && state.running ? 'running' : 'idle';
                return <li key={item.id} data-phase={phase}>
                <button aria-pressed={selectedIndex === index} onClick={() => setInspected(index)} aria-label={`Step ${index + 1}: ${item.name}, ${phase}`}>
                <span className="node-marker">{phase === 'complete' ? '✓' : `0${index + 1}`}</span>
                <strong>{item.name}</strong>
                <span className="node-status">{phase === 'complete' ? 'Completed' : phase === 'running' ? 'Processing' : 'Inspect step'}</span>
                </button>
                </li>;
            })}</ol> : <div className="trace-panel" aria-label="Example execution trace">
        <p className="eyebrow">Illustrative execution / local only</p>{state.step < 1 ? <p className="trace-empty">Run the simulation to follow each event here.</p> : <ol>{agent.nodes.slice(0, state.step).map((item, index) => <li key={item.id}>
                <span>0{index + 1}</span>
                <div>
                <strong>{item.name}</strong>
                <p>{item.outputType}</p>
                </div>
                <span>✓</span>
                </li>)}</ol>}</div>}<div className="node-inspector">
    <div>
    <span className="eyebrow">Inspecting step 0{selectedIndex + 1}</span>
    <h4>{node.name}</h4>
    <p>{node.role}</p>
    </div>
    <div>
    <span className="eyebrow">Example output</span>
    <code>{node.outputType}</code>
    </div>
    </div>
    <div className="workflow-actions">
    <button className="button-primary" onClick={run} disabled={state.running}>{state.running ? 'Running simulation…' : complete ? 'Run again' : 'Run simulation'} <span aria-hidden="true">↗</span>
    </button>
    <button className="text-link" onClick={reset}>Reset ↺</button>
    <span className="workflow-status" role="status">{status}</span>
    </div>
    <div className="workflow-payload">
    <div>
    <span className="eyebrow">Sample input</span>
    <p>“{agent.sampleInput}”</p>
    </div>
    <div>
    <span className="eyebrow">{complete ? 'Example result' : 'Expected result'}</span>
    <p>{agent.executionOutcome}</p>
    </div>
    </div>
    <details className="tools-details">
    <summary>Tools in this architecture <span>+</span>
    </summary>
    <p>{agent.toolsUsed.join(' / ')}</p>
    </details>
    </div>
    </div>
    </>;
}
