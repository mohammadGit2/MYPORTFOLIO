const capabilities = [
    { name: 'Build', description: 'Start with the person using it.', tools: 'React / TypeScript / Next.js / Responsive interfaces', href: '#projects', link: 'Explore the projects' },
    { name: 'Connect', description: 'Make the handoffs make sense.', tools: 'Node.js / APIs / Webhooks / n8n', href: '#ai-agents', link: 'Follow a workflow' },
    { name: 'Think', description: 'Give intelligence a useful role.', tools: 'LLM integration / Tool calling / Retrieval / Agent workflows', href: '#ai-agents', link: 'Inspect the AI concepts' },
    { name: 'Refine', description: 'Care about the last interaction.', tools: 'Accessibility / State handling / Motion / Web Audio', href: '#contact', link: 'Talk about your project' },
];
export function ExpertiseSection() {
    return <section id="architecture" className="approach section" tabIndex={-1} aria-labelledby="approach-title">
    <div className="approach-intro">
    <span className="eyebrow">03 / How I approach the work</span>
    <h2 id="approach-title">The interface<br />is just the<br />
    <em>beginning.</em>
    </h2>
    <p>Good software connects what people see with what a system needs to do. I’m interested in both sides of that conversation.</p>
    <a className="text-link" href="#ai-agents">See the connections ↗</a>
    </div>
    <div className="capability-index">{capabilities.map((item, index) => <article key={item.name}>
        <span className="eyebrow">0{index + 1}</span>
        <div>
        <h3>{item.name}<span>↗</span>
        </h3>
        <p>{item.description}</p>
        <p className="capability-tools">{item.tools}</p>
        <a href={item.href} className="text-link small">{item.link} ↗</a>
        </div>
        </article>)}</div>
    <div className="working-note">
    <span className="eyebrow">A practical point of view</span>
    <p>Understand the input.<br />Make the logic clear.<br />
    <span className="muted">Give the output a purpose.</span>
    </p>
    </div>
    </section>;
}
