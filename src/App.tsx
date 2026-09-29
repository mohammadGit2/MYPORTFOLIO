import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
const AgentWorkflowHub = lazy(() => import('./components/AgentWorkflowHub'));
function AgentLab() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (!('IntersectionObserver' in window)) {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { rootMargin: '700px' });
        if (ref.current)
            observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    const fallback = <div className="lab-loading">
    <p className="eyebrow">Interactive architecture demonstrations</p>
    <h2>Inside the workflow.</h2>
    <p>Explore how a message becomes an action.</p>
    <button onClick={() => setVisible(true)} className="text-link">Open the workflow lab ↗</button>
    </div>;
    return <section id="ai-agents" className="lab section" tabIndex={-1} aria-label="AI workflow lab">
    <div ref={ref}>{visible ? <Suspense fallback={fallback}>
        <AgentWorkflowHub />
        </Suspense> : fallback}</div>
    </section>;
}
export default function App() {
    return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main" tabIndex={-1}>
    <Hero />
    <ProjectsSection />
    <AgentLab />
    <ExpertiseSection />
    <ContactSection />
    </main>
    <Footer />
    </>;
}
