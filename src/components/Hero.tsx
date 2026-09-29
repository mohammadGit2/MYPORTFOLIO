import { LocalTime } from './LocalTime';
export function Hero() {
    return <section id="home" className="hero section" tabIndex={-1} aria-labelledby="hero-title">
    <div className="hero-meta">
    <span className="eyebrow">Syed Muhammad Bin Ali</span>
    <LocalTime />
    </div>
    <div className="hero-composition">
    <h1 id="hero-title">Interfaces.<br />
    <span className="hero-second">Intelligence<span className="signal">.</span>
    </span>
    <span className="hero-third">In motion<span className="signal">↗</span>
    </span>
    </h1>
    <div className="hero-note">
    <span className="eyebrow">The idea is only the beginning.</span>
    <p>I build full-stack products and AI workflows that connect people, interfaces, and the systems behind them.</p>
    <a className="text-link" href="#projects">Explore selected work <span>↘</span>
    </a>
    </div>
    <a href="#ai-agents" className="hero-proof" aria-label="Explore the interactive AI workflow lab">
    <span className="eyebrow">From input to possibility</span>
    <div className="signal-path" aria-hidden="true">
    <span />
    <i />
    <span />
    <i />
    <span className="end-node">↗</span>
    </div>
    <div className="proof-labels">
    <span>Intent</span>
    <span>Logic</span>
    <span>Action</span>
    </div>
    <span className="proof-footer">Anatomy of a workflow <span>↗</span>
    </span>
    </a>
    </div>
    <div className="hero-bottom">
    <span>Full-stack development / AI agents / Automation</span>
    <a href="#projects">Scroll to explore <span>↓</span>
    </a>
    </div>
    </section>;
}
