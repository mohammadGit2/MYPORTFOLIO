import { useRef, useState } from 'react';
import { EMAIL, GITHUB } from '../data/portfolioData';
import { sound } from '../utils/audio';
export function ContactSection() {
    const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
    const fallback = useRef<HTMLInputElement>(null);
    async function copy() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopyState('copied');
            sound.playSuccess();
        }
        catch {
            setCopyState('failed');
            requestAnimationFrame(() => { fallback.current?.focus(); fallback.current?.select(); });
        }
    }
    return <section id="contact" className="contact section" tabIndex={-1} aria-labelledby="contact-title">
    <div className="contact-meta">
    <span className="eyebrow">04 / Start a conversation</span>
    <span>From an idea to something useful.</span>
    </div>
    <h2 id="contact-title">Something<br />worth <em>building?</em>
    <a href={`mailto:${EMAIL}`} aria-label="Start a conversation by email" className="contact-arrow">↗</a>
    </h2>
    <div className="contact-bottom">
    <div>
    <a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
    <p className="small muted">Opens your email app. Prefer to copy the address?</p>
    <button className="text-link" onClick={copy}>{copyState === 'copied' ? 'Email copied ✓' : 'Copy email ↗'}</button>
    <p className="sr-only" role="status">{copyState === 'copied' ? 'Email address copied to clipboard.' : copyState === 'failed' ? 'Clipboard unavailable. Select and copy the address below.' : ''}</p>{copyState === 'failed' && <label className="copy-fallback">Select and copy this address:<input ref={fallback} readOnly value={EMAIL} onFocus={event => event.target.select()}/>
        </label>}</div>
    <a href={GITHUB} target="_blank" rel="noreferrer" className="text-link">Find me on GitHub ↗</a>
    </div>
    </section>;
}
