export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'E-Commerce' | 'AI Integration' | 'Interactive Web';
  url: string;
  githubUrl: string;
  image?: string;
  stack: string[];
  description: string;
  architecturalBreakdown: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
}

export interface AgentNode {
  id: string;
  name: string;
  role: string;
  latency: string;
  status: 'idle' | 'running' | 'completed';
  outputType: string;
}

export interface AIAgentSystem {
  id: string;
  title: string;
  category: string;
  description: string;
  triggerEvent: string;
  sampleInput: string;
  executionOutcome: string;
  reliability: string;
  avgLatency: string;
  toolsUsed: string[];
  nodes: AgentNode[];
  rawTraceLog: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'nextmarket-pk',
    title: 'NextMarket PK',
    tagline: 'High-Conversion Utility Commerce Infrastructure',
    category: 'E-Commerce',
    url: 'https://nextmarketpk.netlify.app/',
    githubUrl: 'https://github.com/mohammadGit2',
    image: '/src/assets/images/project_nextmarket_pk_1790138508266.jpg',
    stack: ['React', 'Tailwind CSS', 'E-Commerce Engine', 'Product Analytics', 'State Store'],
    description: 'High-conversion e-commerce platform engineered for utility products, real-time order processing, and social media sales funnels.',
    architecturalBreakdown: [
      'Sub-second first contentful paint via aggressive image compression and static payload bundling.',
      'One-click WhatsApp conversational checkout funnel optimized for emerging market conversions.',
      'Persistent client-side cart synchronization with local storage failover and quantity lockstep.',
      'Real-time inventory and pricing state dispatcher with telemetry event hooks.'
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Checkout Time', value: '< 15s' },
      { label: 'Lighthouse Perf', value: '98/100' }
    ],
    featured: true
  },
  {
    id: 'project-presentation-build',
    title: 'Project Presentation Build',
    tagline: 'Interactive Dynamic Visual Presentation Engine',
    category: 'Full-Stack',
    url: 'https://project-presentation-build.netlify.app/',
    githubUrl: 'https://github.com/mohammadGit2',
    image: '/src/assets/images/project_presentation_engine_1790138525474.jpg',
    stack: ['Full-Stack Web', 'Dynamic UI Engine', 'Framer Motion', 'Tailwind CSS'],
    description: 'Interactive dynamic presentation engine built for immersive visual delivery and client pitch showcases.',
    architecturalBreakdown: [
      'Declarative slide composition architecture with real-time responsive aspect-ratio containment.',
      '60 FPS hardware-accelerated kinetic transitions utilizing CSS transforms and Framer Motion spring physics.',
      'Keyboard-driven presenter navigation with overview matrix view and slide index scrubbing.',
      'Modular deck serialisation enabling client-side slide branching without reload.'
    ],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Bundle Size', value: '38 KB' },
      { label: 'Interaction Latency', value: '< 16ms' }
    ],
    featured: true
  },
  {
    id: 'mind-games',
    title: 'Mind Games',
    tagline: 'Cognitive Web Mini-Game Suite & Feedback Engine',
    category: 'Interactive Web',
    url: 'https://mindgames-syedm.netlify.app/',
    githubUrl: 'https://github.com/mohammadGit2',
    image: '/src/assets/images/project_cognitive_mindgames_1790138540960.jpg',
    stack: ['JavaScript', 'HTML5/CSS3', 'Interactive Web Mechanics', 'Audio FX'],
    description: 'Web-based cognitive mini-game suite featuring real-time state tracking, interactive UI feedback, and smooth animations.',
    architecturalBreakdown: [
      'Deterministic algorithmic pattern generation for cognitive sequence memory testing.',
      'High-precision microsecond response timer measuring neuro-cognitive reaction curves.',
      'Local-first high score persistence with zero server latency overhead.',
      'Subtle synthesized audio feedback loops reinforcing rapid cognitive interaction.'
    ],
    metrics: [
      { label: 'Reaction Precision', value: '1ms' },
      { label: 'Game Modes', value: 'Multi-Level' },
      { label: 'State Sync', value: 'Instant' }
    ]
  },
  {
    id: 'bait-al-taareekh',
    title: 'Bait Al Taareekh',
    tagline: 'Historical Heritage Exploration & Structured Archives',
    category: 'Full-Stack',
    url: 'https://baitaltaareekh-syedm.netlify.app/',
    githubUrl: 'https://github.com/mohammadGit2',
    image: '/src/assets/images/project_historical_archive_1790138557253.jpg',
    stack: ['Full-Stack Web Architecture', 'Tailwind CSS', 'Structured Archives', 'Media Feeds'],
    description: 'Historical exploration and archive portal featuring structured visual layouts, dynamic content feeds, and rich media galleries.',
    architecturalBreakdown: [
      'Chronological taxonomy database mapped across historical eras with interactive timeline filtering.',
      'Multi-format archival media viewer supporting high-resolution document inspection.',
      'Zero-layout-shift responsive article templates crafted for high typographic legibility.',
      'Dynamic content search indexing with cross-referenced manuscript tags.'
    ],
    metrics: [
      { label: 'Archival Records', value: 'Curated' },
      { label: 'Layout Shift', value: '0.00 CLS' },
      { label: 'Readability', value: 'Editorial' }
    ]
  },
  {
    id: 'sm-bot',
    title: 'SM Bot',
    tagline: 'Autonomous Conversational Assistant & Webhook Orchestrator',
    category: 'AI Integration',
    url: 'https://sm-bot-ten.vercel.app/',
    githubUrl: 'https://github.com/mohammadGit2',
    stack: ['Node.js', 'AI API Integration', 'Webhook Architecture', 'Micro-Frontend'],
    description: 'Intelligent chat and conversational automation bot built with responsive micro-frontend UI and custom prompt logic.',
    architecturalBreakdown: [
      'Server-Sent Events (SSE) streaming pipeline delivering instantaneous character rendering.',
      'Contextual token sliding window preventing memory drift across multi-turn user dialogues.',
      'Embedded webhook dispatchers enabling automated handoff to CRM and support queues.',
      'Lightweight micro-frontend embedding allowing drop-in installation on any web property.'
    ],
    metrics: [
      { label: 'Stream TTFT', value: '280ms' },
      { label: 'Context Depth', value: '32k Tokens' },
      { label: 'Uptime', value: '99.98%' }
    ]
  },
  {
    id: 'seo-busin',
    title: 'SEO Busin',
    tagline: 'Digital Marketing & Algorithmic Audit Engine',
    category: 'Full-Stack',
    url: 'https://seobusin.netlify.app/',
    githubUrl: 'https://github.com/mohammadGit2',
    stack: ['Next.js', 'React', 'SEO Analytics Engine', 'Tailwind CSS'],
    description: 'Modern digital marketing and SEO analysis platform optimized for speed, metadata indexation performance, and site scoring.',
    architecturalBreakdown: [
      'Automated semantic metadata parser extracting OpenGraph, JSON-LD schema, and heading structures.',
      'Real-time SERP simulation rendering how target pages appear in Google search results across desktop and mobile.',
      'Core Web Vitals diagnostic calculator with actionable remediation blueprints.',
      'High-performance static rendering utilizing Next.js incremental cache layers.'
    ],
    metrics: [
      { label: 'Audit Speed', value: '< 1.2s' },
      { label: 'Schema Check', value: 'JSON-LD' },
      { label: 'PageScore', value: '100% Core' }
    ]
  }
];

export const AI_AGENTS: AIAgentSystem[] = [
  {
    id: 'whatsapp-ecommerce',
    title: 'WhatsApp E-Commerce Agent',
    category: 'Autonomous Sales & Ordering',
    description: 'Automated customer communication, catalog browsing, and autonomous order placement system operating via WhatsApp Webhooks and dynamic databases.',
    triggerEvent: 'Incoming WhatsApp message payload with order intent or product query',
    sampleInput: 'Hello! I need 2 units of the Pro Wireless Charger, delivery to Gulberg, Lahore. Phone: 0300-1234567.',
    executionOutcome: 'Identified SKU #W-CHG-02, verified stock, formatted shipping address, recorded order in database, and returned WhatsApp invoice confirmation in 640ms.',
    reliability: '99.94%',
    avgLatency: '640ms',
    toolsUsed: ['WhatsApp Cloud API', 'Product Catalog DB', 'Inventory Lock', 'Payment Link Generator', 'Customer CRM'],
    nodes: [
      { id: 'n1', name: 'Webhook Ingestion', role: 'Validates HMAC signature and parses WhatsApp message', latency: '45ms', status: 'completed', outputType: 'ParsedMessagePayload' },
      { id: 'n2', name: 'Intent Classifier', role: 'LLM extracts product entity, units, city, and phone', latency: '280ms', status: 'completed', outputType: 'StructuredOrderIntent' },
      { id: 'n3', name: 'Inventory Verifier', role: 'Queries SQL database to lock units and calculate total', latency: '85ms', status: 'completed', outputType: 'StockLockedResult' },
      { id: 'n4', name: 'Order Record Dispatch', role: 'Inserts order record with tracking token into database', latency: '90ms', status: 'completed', outputType: 'OrderCreated(ORD-8921)' },
      { id: 'n5', name: 'Confirmation Broadcaster', role: 'Compiles formatted WhatsApp message with tracking link', latency: '140ms', status: 'completed', outputType: 'WhatsAppAPISent(200)' }
    ],
    rawTraceLog: [
      '[00:00.045] [WEBHOOK_IN] Payload received from +923001234567',
      '[00:00.325] [AGENT_NLP] Intent identified: ORDER_CREATION | Confidence: 0.984',
      '[00:00.326] [AGENT_NLP] Extracted: SKU="W-CHG-02", Qty=2, City="Lahore"',
      '[00:00.410] [DB_LOCK] Inventory reserved for SKU W-CHG-02 (Remaining: 84)',
      '[00:00.500] [POSTGRES] Inserted order ORD-8921 with status PENDING_CONFIRMATION',
      '[00:00.640] [WHATSAPP_API] Confirmation template dispatched (Status: 200 OK)'
    ]
  },
  {
    id: 'facebook-comment-replier',
    title: 'Facebook Comment Replier',
    category: 'Social Engagement Agent',
    description: 'Real-time social engagement agent that parses incoming comment intent and deploys context-aware, brand-aligned responses automatically.',
    triggerEvent: 'Meta Graph API comment webhook on ad campaigns or page posts',
    sampleInput: 'Does this come with a replacement warranty and how fast do you dispatch to Karachi?',
    executionOutcome: 'Detected dual intent (Warranty inquiry + Shipping timeline), applied brand voice guidelines, generated personalized reply, and published to Meta Graph API.',
    reliability: '99.98%',
    avgLatency: '710ms',
    toolsUsed: ['Meta Graph Webhook', 'Sentiment Filter', 'Brand Knowledge Base', 'Toxicity Guard', 'Graph API Publisher'],
    nodes: [
      { id: 'n1', name: 'Meta Event Receiver', role: 'Decrypts webhook payload and isolates comment string', latency: '40ms', status: 'completed', outputType: 'RawCommentPayload' },
      { id: 'n2', name: 'Safety & Sentiment Scan', role: 'Confirms comment is non-toxic and assesses brand sentiment', latency: '160ms', status: 'completed', outputType: 'Sentiment: Positive (0.92)' },
      { id: 'n3', name: 'RAG Policy Lookup', role: 'Retrieves warranty terms (1 Year) and Karachi delivery (24-48h)', latency: '190ms', status: 'completed', outputType: 'ContextRetrieved' },
      { id: 'n4', name: 'Response Generator', role: 'Drafts human-grade, brand-aligned reply with CTA', latency: '210ms', status: 'completed', outputType: 'DraftedResponse' },
      { id: 'n5', name: 'Graph API Publisher', role: 'Publishes nested comment response to Facebook Graph', latency: '110ms', status: 'completed', outputType: 'MetaResponse(CommentID: 9812)' }
    ],
    rawTraceLog: [
      '[00:00.040] [META_HOOK] New comment on Post #8410291 by user Sarah K.',
      '[00:00.200] [GUARDRAILS] Toxicity check passed (Score: 0.01) | Sentiment: Neutral-Inquiry',
      '[00:00.390] [RAG_CORE] Retrieved vector context: "Warranty: 12mo free replacement", "Shipping: Karachi 24-48h"',
      '[00:00.600] [LLM_GEN] Drafted: "Hi Sarah! Yes, you get a full 1-year replacement warranty, and Karachi orders arrive within 24–48 hours. Check your DM for a special discount code!"',
      '[00:00.710] [GRAPH_API] Comment published successfully with ID c_98124912'
    ]
  },
  {
    id: 'bug-identifier-fixer',
    title: 'Website Bug Identifier & Fixer',
    category: 'Autonomous Code Engineering',
    description: 'Autonomous code inspection bot that scans web repos, isolates syntax/runtime errors, and generates proposed hotfix pull requests automatically.',
    triggerEvent: 'CI/CD error event, Sentry error hook, or repository code scan trigger',
    sampleInput: 'TypeError: Cannot read properties of undefined (reading "items") at CartDrawer.tsx:42:18',
    executionOutcome: 'Located file CartDrawer.tsx, identified unhandled empty state on cart.items, generated defensive optional chaining fix, ran unit tests, and created Pull Request.',
    reliability: '99.85%',
    avgLatency: '1.42s',
    toolsUsed: ['GitHub Octokit', 'AST Parser', 'Sentry Webhooks', 'Code Synthesizer', 'Test Runner'],
    nodes: [
      { id: 'n1', name: 'Error Hook Ingestion', role: 'Parses stack trace, commit SHA, and source line', latency: '60ms', status: 'completed', outputType: 'StackTraceParsed' },
      { id: 'n2', name: 'AST File Context Fetch', role: 'Retrieves CartDrawer.tsx surrounding lines from Git repo', latency: '180ms', status: 'completed', outputType: 'ASTContext(85 lines)' },
      { id: 'n3', name: 'Patch Generation', role: 'Synthesizes defensive code patch with optional chaining', latency: '620ms', status: 'completed', outputType: 'UnifiedDiffGenerated' },
      { id: 'n4', name: 'Test Execution Bot', role: 'Runs headless test suite on ephemeral virtual sandbox', latency: '420ms', status: 'completed', outputType: 'TestPass(12/12)' },
      { id: 'n5', name: 'PR Auto-Submission', role: 'Creates Git branch fix/cart-items-guard and opens PR', latency: '140ms', status: 'completed', outputType: 'PR#14 Created' }
    ],
    rawTraceLog: [
      '[00:00.060] [SENTRY_HOOK] Error received: TypeError in CartDrawer.tsx line 42',
      '[00:00.240] [GITHUB_OCTOKIT] Pulled branch main /src/components/CartDrawer.tsx',
      '[00:00.860] [AGENT_CODER] Identified unsafe dereference on cart.items.map()',
      '[00:00.865] [AGENT_CODER] Generated fix: (cart?.items ?? []).map() with null guard',
      '[00:01.285] [SANDBOX] Running: npm test -- CartDrawer.test.tsx ... PASSED',
      '[00:01.425] [GITHUB_OCTOKIT] Created branch fix/cart-drawer-null-safety and submitted PR #14'
    ]
  },
  {
    id: 'ai-news-provider',
    title: 'AI Latest News Provider',
    category: 'Data Pipeline & Intelligence',
    description: 'Automated news aggregation pipeline that scrapes, summarizes, and broadcasts curated tech and AI updates across custom channels.',
    triggerEvent: 'Hourly cron trigger across 25+ RSS feeds, arXiv papers, and research releases',
    sampleInput: 'Ingested 28 raw articles covering Google Gemini, open-source model weights, and robotics breakthroughs.',
    executionOutcome: 'Filtered out redundant PR content, synthesized 3 high-impact executive summaries with verifiable sources, and dispatched formatted brief to Telegram & Discord.',
    reliability: '99.99%',
    avgLatency: '1.85s',
    toolsUsed: ['RSS Scraper', 'Embedding Deduplicator', 'LLM Summarizer', 'Fact Checker', 'Telegram Bot API'],
    nodes: [
      { id: 'n1', name: 'Feed Aggregator', role: 'Scrapes 25+ tech feeds and filters articles from last 60m', latency: '320ms', status: 'completed', outputType: 'RawArticles(28)' },
      { id: 'n2', name: 'Vector Deduplicator', role: 'Computes cosine similarity to collapse identical stories', latency: '210ms', status: 'completed', outputType: 'UniqueStories(7)' },
      { id: 'n3', name: 'Significance Evaluator', role: 'Scores each story based on technical impact and novelty', latency: '480ms', status: 'completed', outputType: 'TopHighlights(3)' },
      { id: 'n4', name: 'Executive Synthesis', role: 'Generates concise 3-bullet breakdown with verified citations', latency: '650ms', status: 'completed', outputType: 'MarkdownBrief' },
      { id: 'n5', name: 'Channel Broadcaster', role: 'Pushes notification to developer channels and newsletter list', latency: '190ms', status: 'completed', outputType: 'BroadcastDone(3 Channels)' }
    ],
    rawTraceLog: [
      '[00:00.320] [SCRAPER] 28 articles pulled from HackerNews, arXiv, TechCrunch, GitHub Trending',
      '[00:00.530] [EMBEDDINGS] Vector clustering reduced 28 articles into 7 distinct topic clusters',
      '[00:01.010] [RANKER] Scored Top 3 breakthroughs: (1) SOTA multimodal agents (2) 1M context efficiency (3) WebGPU acceleration',
      '[00:01.660] [SYNTHESIZER] Markdown briefing formatted with key metrics and source links',
      '[00:01.850] [TELEGRAM_BOT] Dispatched message to 4,200 developers on @AIExecutiveBriefing'
    ]
  },
  {
    id: 'github-issue-triage',
    title: 'Smart GitHub Issue Triage',
    category: 'DevOps & Repo Automation',
    description: 'Autonomous repository agent that evaluates incoming GitHub issues, applies accurate labels, assigns priority tags, and notifies lead developers.',
    triggerEvent: 'GitHub issues.opened webhook event on repository',
    sampleInput: 'Title: "Memory leak observed when mounting Live Canvas on Safari iOS 17.5" Description with repro steps.',
    executionOutcome: 'Classified as severe browser-specific memory leak, tagged labels (bug, webkit, high-priority), assigned to lead WebGL developer, and posted reproduction checklist.',
    reliability: '99.96%',
    avgLatency: '820ms',
    toolsUsed: ['GitHub Webhook', 'Issue Classifier', 'Priority Matrix', 'Team Skill Matcher', 'Slack Notification Hook'],
    nodes: [
      { id: 'n1', name: 'Issue Ingestion', role: 'Captures issue title, body, author, and environment info', latency: '50ms', status: 'completed', outputType: 'IssuePayload(#108)' },
      { id: 'n2', name: 'Classification Engine', role: 'Evaluates severity, affected subsystem, and repro quality', latency: '340ms', status: 'completed', outputType: 'Tags: [bug, webkit, p1]' },
      { id: 'n3', name: 'Skill-Match Router', role: 'Cross-references team member expertise matrix for assignment', latency: '110ms', status: 'completed', outputType: 'Assignee: @syed-lead' },
      { id: 'n4', name: 'GitHub Metadata Writer', role: 'Applies labels, milestone, and automated acknowledgement comment', latency: '180ms', status: 'completed', outputType: 'IssueUpdated' },
      { id: 'n5', name: 'Alert Dispatcher', role: 'Pushes high-priority alert to Discord/Slack oncall channel', latency: '140ms', status: 'completed', outputType: 'SlackAlertSent' }
    ],
    rawTraceLog: [
      '[00:00.050] [OCTOKIT] Webhook received: Issue #108 opened by external contributor',
      '[00:00.390] [AGENT_TRIAGE] Severity assessed: P1_HIGH | Domain: WebKit / Canvas Memory',
      '[00:00.500] [AGENT_TRIAGE] Identified reproduction steps: 100% complete with trace',
      '[00:00.680] [GITHUB_API] Applied labels: ["bug", "platform:safari", "priority:p1", "triaged-by-agent"]',
      '[00:00.820] [SLACK_HOOK] Alert pinged to #eng-triage: "P1 Memory Leak on Safari iOS assigned to Syed"'
    ]
  }
];

export const SKILLS_LIST = [
  { name: 'Full-Stack Architecture', level: '98%', items: ['React 19', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'PostgreSQL', 'REST & GraphQL', 'State Machines'] },
  { name: 'Autonomous AI Agents', level: '99%', items: ['n8n Workflow Engineering', 'Custom LLM Tool Calling', 'Multi-Agent Orchestration', 'RAG Pipelines', 'Vector Search', 'Webhook Automations'] },
  { name: 'DevOps & Performance', level: '96%', items: ['Zero-CLS Web Perf', 'CI/CD Pipelines', 'Cloud Run & Vercel', 'Docker', 'Sub-second Latency Optimization', 'Web Audio API'] }
];
