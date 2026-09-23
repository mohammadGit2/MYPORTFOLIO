import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { Mail, Github, Copy, Check, Send, Sparkles, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const directEmail = 'mohammadprofessional14@gmail.com';

  const handleCopyEmail = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    sound.playClick();
    setIsSubmitting(true);

    // Simulate sending message with sound feedback
    setTimeout(() => {
      sound.playSuccess();
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      
      {/* Dark-Glass Capsule Container */}
      <div className="relative rounded-3xl bg-[#0c0d14]/90 border border-white/[0.12] p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-xl overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04. OPEN FOR CONTRACTS & ARCHITECTURAL CONSULTATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Let's Engineer the Next Breakthrough<span className="text-amber-400">.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400">
            Looking for a Senior Full-Stack Architect or autonomous AI workflow specialist? Reach out directly or dispatch a message below.
          </p>
        </div>

        {/* Quick Social & Direct Email Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pb-10">
          
          {/* Quick-Action Copy Pill */}
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] hover:border-amber-400/40 text-xs sm:text-sm text-zinc-200 hover:text-white transition-all shadow-sm"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span className="font-mono">{directEmail}</span>
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-400 text-xs font-semibold pl-1">
                <Check className="w-3.5 h-3.5" /> Copied!
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-zinc-400 pl-0.5" />
            )}
          </button>

          {/* GitHub Pill */}
          <a
            href="https://github.com/mohammadGit2"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] hover:border-white/30 text-xs sm:text-sm text-zinc-200 hover:text-white transition-all shadow-sm"
          >
            <Github className="w-4 h-4 text-zinc-300" />
            <span className="font-mono">github.com/mohammadGit2</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>

          {/* Direct Mailto Launcher */}
          <a
            href={`mailto:${directEmail}?subject=Engineering%20Inquiry%20via%20Portfolio`}
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-amber-400 text-black font-semibold text-xs sm:text-sm hover:bg-amber-300 transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Email Client</span>
          </a>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="max-w-md mx-auto text-center p-8 rounded-2xl bg-white/[0.03] border border-emerald-500/30 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-xl font-bold font-display text-white">Transmission Received</div>
            <p className="text-xs sm:text-sm text-zinc-400">
              Thank you, <span className="text-white font-medium">{name}</span>. Your brief has been dispatched to Syed's direct inbox. You will receive an architectural response within 24 hours.
            </p>
            <button
              onClick={() => {
                sound.playClick();
                setSubmitted(false);
                setMessage('');
              }}
              className="mt-2 text-xs font-mono text-amber-400 hover:underline"
            >
              Send another dispatch
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase">
                  Your Name / Organization
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Vance"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-amber-400 focus:outline-none text-zinc-100 placeholder:text-zinc-600 text-sm font-sans transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase">
                  Work Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@enterprise.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-amber-400 focus:outline-none text-zinc-100 placeholder:text-zinc-600 text-sm font-sans transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase">
                Project Scope & Architectural Requirements
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your web platform or autonomous agent automation goals, timelines, and technical challenges..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-amber-400 focus:outline-none text-zinc-100 placeholder:text-zinc-600 text-sm font-sans transition-colors resize-none"
              />
            </div>

            {/* High-Contrast CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => sound.playHover()}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                  isSubmitting
                    ? 'bg-amber-400/50 text-black cursor-wait'
                    : 'bg-amber-400 hover:bg-amber-300 text-black hover:shadow-amber-500/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    <span>Encrypting & Dispatching...</span>
                  </>
                ) : (
                  <>
                    <span>Dispatch Project Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="text-center text-[11px] font-mono text-zinc-500 pt-2">
              GUARANTEED CONFIDENTIALITY • DIRECT DEVELOPER ACCESS • &lt; 24H RESPONSE
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
