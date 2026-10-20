import { useState } from 'react';
import { LocalTime } from './LocalTime';
import { GITHUB } from '../data/portfolioData';
function SystemGraphic({ paused }: { paused: boolean }) {
 return <div className={`system-graphic ${paused ? 'motion-paused' : ''}`}>
  <div className="graphic-top"><span><i/> SYSTEM ARCHITECTURE</span><span>01 — 03</span></div>
  <svg viewBox="0 0 560 460" role="img" aria-label="An application interface connected to an automation engine and data layer">
   <defs><pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" fill="none" stroke="#263249" strokeWidth=".6"/></pattern><linearGradient id="plane" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#19283e"/><stop offset="1" stopColor="#0c1423"/></linearGradient></defs>
   <rect width="560" height="460" fill="url(#grid)" opacity=".5"/>
   <g className="system-stack">
    <path d="M280 297L466 358L280 431L94 358Z" fill="#0d1625" stroke="#283a52"/>
    <path d="M280 277L466 338L280 411L94 338Z" fill="url(#plane)" stroke="#527295"/>
    <path d="M280 411v20M94 338v20M466 338v20" stroke="#3b546f"/>
    <path d="M280 172L466 233L280 306L94 233Z" fill="url(#plane)" stroke="#6996e8" strokeWidth="1.5"/>
    <path d="M280 190L413 235L280 285L147 235Z" fill="#112f40" stroke="#5ee2bb" strokeOpacity=".6"/>
    <path d="M280 210L350 235L280 262L210 235Z" fill="#79f0ce"/>
    <text x="280" y="241" textAnchor="middle" fill="#09251c" fontSize="16" fontFamily="monospace">{'{ AI }'}</text>
    <path d="M280 65L466 126L280 199L94 126Z" fill="url(#plane)" stroke="#76a7ff"/>
    <path d="M280 86L426 132L281 180L134 131Z" fill="#1c3351" stroke="#2c5786"/>
    <path d="M208 114L319 151M235 105L349 141M267 99L380 131" stroke="#729bd2" strokeWidth="5" strokeDasharray="30 8 15 8"/>
    <path d="M94 126v107m372-107v107M94 233v105m372-105v105" stroke="#3e6488" strokeDasharray="4 6"/>
    <path className="data-wire" d="M94 126v107l186 73 186-73v105l-186 73" fill="none" stroke="#79f0ce" strokeWidth="2" strokeDasharray="10 260"/>
    <circle cx="94" cy="126" r="4" fill="#8db4ff"/><circle cx="466" cy="233" r="4" fill="#79f0ce"/>
   </g>
   <g fill="#a6b8cd" fontFamily="monospace" fontSize="10"><text x="32" y="62">01 / INTERFACE</text><text x="351" y="207">02 / INTELLIGENCE</text><text x="32" y="418">03 / DATA & INTEGRATIONS</text></g>
  </svg>
  <div className="graphic-bottom"><span>INPUT → LOGIC → ACTION</span><span className="graphic-status">CONNECTED BY DESIGN</span></div>
 </div>;
}
export function Hero() {
 const [paused,setPaused]=useState(false);
 return <section id="home" className="developer-hero section" tabIndex={-1} aria-labelledby="hero-title">
  <div className="hero-topline"><span className="eyebrow"><span className="status-dot"/> Full-stack developer · AI automation</span><LocalTime/></div>
  <div className="developer-hero-grid"><div className="hero-copy">
   <p className="hero-name">SYED MUHAMMAD BIN ALI <span> / DEVELOPER</span></p>
   <h1 id="hero-title">I build software<br/>that <span>does the work.</span></h1>
   <p className="hero-summary">From a fast, intuitive interface to the automation behind it. I build web applications and AI agents that turn complex workflows into simple experiences.</p>
   <div className="hero-actions"><a href="#contact" className="astra-button">Let’s build your project <span>↗</span></a><a href="#featured" className="hero-secondary">Explore the systems <span>↓</span></a></div>
   <div className="hero-stack"><span>React</span><span>TypeScript</span><span>Next.js</span><span>Node.js</span><span>n8n</span></div>
  </div><div className="hero-visual"><SystemGraphic paused={paused}/><button className="motion-toggle" aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?'▶ Resume motion':'Ⅱ Pause motion'}</button></div></div>
  <div className="hero-baseline"><span>BASED IN PAKISTAN. BUILDING FOR THE WEB.</span><a href={GITHUB} target="_blank" rel="noreferrer">Explore my GitHub ↗</a></div>
 </section>;
}
