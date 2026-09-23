import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [soundActive, setSoundActive] = useState(sound.isEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pktTime, setPktTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Pakistan Standard Time is UTC+5
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

  const handleToggleSound = () => {
    const state = sound.toggle();
    setSoundActive(state);
  };

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'AI Agents', href: '#ai-agents' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#08080a]/80 border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
        >
          <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            SYED
          </span>
          <span className="text-zinc-500 text-xs font-mono hidden sm:inline-block">/ ARCHITECT</span>
        </a>

        {/* Zone 2: Clean 4-6 text nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-4 decoration-amber-400/70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Interactive controls and action */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live System & PKT Time Badge */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200">PKT</span>
            <span className="text-zinc-400 tabular-nums">{pktTime || '00:00:00'}</span>
          </div>

          {/* Sound FX Toggle */}
          <button
            onClick={handleToggleSound}
            onMouseEnter={() => sound.playHover()}
            title={soundActive ? 'Mute micro-interaction audio' : 'Enable audio feedback'}
            className="p-2 rounded-md bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle Sound Effects"
          >
            {soundActive ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => {
              sound.playClick();
              onContactClick();
            }}
            onMouseEnter={() => sound.playHover()}
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded bg-amber-400 text-black hover:bg-amber-300 transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0d12] px-4 py-4 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>LIVE • OPEN FOR CONTRACTS</span>
            </span>
            <span className="tabular-nums">PKT: {pktTime}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              className="block text-base font-medium text-zinc-300 hover:text-amber-400 transition-colors py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://github.com/mohammadGit2"
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="flex items-center justify-between text-xs text-zinc-400 py-1"
            >
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
