import { useEffect, useState } from 'react';
import { sound } from '../utils/audio';
import { useDialog } from '../hooks/useDialog';
import { EMAIL, GITHUB } from '../data/portfolioData';
const links = [{ id: 'projects', label: 'Work' }, { id: 'ai-agents', label: 'Lab' }, { id: 'architecture', label: 'Approach' }, { id: 'contact', label: 'Contact' }];
function MobileMenu({ onClose }: {
    onClose: () => void;
}) {
    const dialog = useDialog(onClose);
    useEffect(() => {
        const query = matchMedia('(min-width: 761px)');
        const resize = () => { if (query.matches)
            onClose(); };
        query.addEventListener('change', resize);
        return () => query.removeEventListener('change', resize);
    }, [onClose]);
    const jump = (event: React.MouseEvent, id: string) => {
        event.preventDefault();
        onClose();
        // Wait until dialog cleanup has restored focus and scroll before moving to the section.
        requestAnimationFrame(() => { location.hash = id; document.getElementById(id)?.focus({ preventScroll: true }); });
    };
    return <dialog {...dialog} className="mobile-menu" aria-label="Site navigation">
    <div className="menu-top">
    <span>Syed / Index</span>
    <button onClick={onClose} autoFocus>Close ×</button>
    </div>
    <nav>{links.map((link, i) => <a key={link.id} href={`#${link.id}`} onClick={event => jump(event, link.id)}>
        <span>0{i + 1}</span>{link.label}<span>↗</span>
        </a>)}</nav>
    <div className="menu-bottom">
    <a href={GITHUB} target="_blank" rel="noreferrer">GitHub Profile ↗</a>
    <a href={`mailto:${EMAIL}`}>Send an email ↗</a>
    </div>
    </dialog>;
}
export function Navbar() {
    const [soundOn, setSoundOn] = useState(sound.isEnabled());
    const [menu, setMenu] = useState(false);
    const [active, setActive] = useState('');
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries)
                if (entry.isIntersecting)
                    setActive(entry.target.id);
        }, { rootMargin: '-10% 0px -55% 0px' });
        ['home', ...links.map(link => link.id)].forEach(id => { const el = document.getElementById(id); if (el)
            observer.observe(el); });
        return () => observer.disconnect();
    }, []);
    return <>
    <header className="site-header">
    <a className="wordmark" href="#home" aria-label="Syed Muhammad Bin Ali, back to top">s<span className="wordmark-dot">.</span>
    </a>
    <span className="header-caption">Independent developer<br />Interfaces & intelligent systems</span>
    <nav className="desktop-nav" aria-label="Primary">{links.map(link => <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined}>{link.label}<span className="nav-dot"/>
        </a>)}</nav>
    <button className="sound-control" onClick={() => setSoundOn(sound.toggle())} aria-pressed={soundOn} aria-label={`Sound ${soundOn ? 'on' : 'off'}`}>
    <span aria-hidden="true">{soundOn ? '◖))' : '◖)'}</span>
    <span>Sound {soundOn ? 'on' : 'off'}</span>
    </button>
    <button className="menu-toggle" aria-haspopup="dialog" aria-expanded={menu} onClick={() => setMenu(true)}>Menu <span>+</span>
    </button>
    </header>{menu && <MobileMenu onClose={() => setMenu(false)}/>}<aside className="section-rail" aria-hidden="true">
    <span>{active === 'home' || !active ? '00' : `0${links.findIndex(link => link.id === active) + 1}`}</span>
    <i />
    <span>{active === 'home' || !active ? 'Introduction' : links.find(link => link.id === active)?.label}</span>
    </aside>
    </>;
}
