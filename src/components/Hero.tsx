import { useState } from 'react';
import { LocalTime } from './LocalTime';
import { SignalSculpture } from './SignalSculpture';
export function Hero() {
  const [skip, setSkip] = useState(false);
  return <section id="home" className={`astra-hero section ${skip ? 'intro-skipped' : ''}`} tabIndex={-1} aria-labelledby="hero-title">
    <div className="astra-meta"><span className="eyebrow">Independent developer & creative technologist</span><LocalTime/></div>
    <div className="astra-hero-grid">
      <div className="astra-identity"><p className="eyebrow identity-kicker"><span className="status-dot"/> A practice in possibility</p>
        <h1 id="hero-title"><span>Syed Muhammad</span><span className="name-main">Bin Ali<span className="copper-dot">.</span></span></h1>
        <p className="hero-declaration">I turn complex ideas<br/>into <em>considered experiences.</em></p>
        <p className="hero-description">Full-stack development. AI agents & automation.<br/>Useful technology, built with intention.</p>
        <div className="hero-actions"><a href="#projects" className="astra-button">Explore my work <span>↗</span></a><a href="#showreel" className="reel-link"><span className="play-ring">▶</span>Play the film <small>00:21</small></a></div>
      </div>
      <div className="sculpture-frame"><div className="sculpture-meta eyebrow"><span>Fig. 01</span><span>Signal → Structure</span></div><SignalSculpture/><div className="sculpture-caption"><span>One idea.<br/>Many possibilities.</span><span className="eyebrow">A study in<br/>creative engineering</span></div></div>
    </div>
    <div className="astra-bottom"><a href="#projects">Selected work, systems & experiments <span>↓</span></a><button onClick={()=>setSkip(true)} className="skip-intro">{skip ? 'Opening motion skipped' : 'Skip opening motion ↗'}</button><span className="eyebrow">Portfolio / 2026</span></div>
  </section>;
}
