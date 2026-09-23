/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { AgentWorkflowHub } from './components/AgentWorkflowHub';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top sticky navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <ProjectsSection />
        <AgentWorkflowHub />
        <ExpertiseSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

