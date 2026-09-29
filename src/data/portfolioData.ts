import image0 from '../assets/images/project_nextmarket_pk_1790138508266-1376.webp';
import small0 from '../assets/images/project_nextmarket_pk_1790138508266-640.webp';
import image1 from '../assets/images/project_presentation_engine_1790138525474-1376.webp';
import small1 from '../assets/images/project_presentation_engine_1790138525474-640.webp';
import image2 from '../assets/images/project_cognitive_mindgames_1790138540960-1376.webp';
import small2 from '../assets/images/project_cognitive_mindgames_1790138540960-640.webp';
import image3 from '../assets/images/project_historical_archive_1790138557253-1376.webp';
import small3 from '../assets/images/project_historical_archive_1790138557253-640.webp';

export const EMAIL = 'mohammadprofessional14@gmail.com';
export const GITHUB = 'https://github.com/mohammadGit2';
export interface Project {
 id: string; number: string; title: string; tagline: string; category: string;
 url: string; githubUrl: string; image?: string; imageSmall?: string; imageAlt?: string;
 stack: string[]; description: string; architecturalBreakdown: string[]; featured?: boolean;
}
export interface AgentNode { id: string; name: string; role: string; outputType: string; }
export interface AIAgentSystem {
 id: string; title: string; category: string; description: string; triggerEvent: string;
 sampleInput: string; executionOutcome: string; toolsUsed: string[]; nodes: AgentNode[];
}
// Project notes are supplied portfolio descriptions, not independently measured outcomes.
export const PROJECTS: Project[] = [
  {
    "id": "nextmarket-pk",
    "title": "NextMarket PK",
    "tagline": "Commerce, made conversational.",
    "category": "E-Commerce",
    "url": "https://nextmarketpk.netlify.app/",
    "githubUrl": "https://github.com/mohammadGit2",
    "image": image0,
    "stack": [
      "React",
      "Tailwind CSS",
      "Client state"
    ],
    "description": "A utility-product storefront connecting product discovery, a persistent cart, and WhatsApp checkout.",
    "architecturalBreakdown": [
      "Product browsing and cart state in a React interface.",
      "A conversational checkout handoff through WhatsApp.",
      "Local storage for returning shoppers."
    ],
    "featured": true,
    "number": "01",
    "imageSmall": small0,
    "imageAlt": "NextMarket PK — existing concept artwork"
  },
  {
    "id": "project-presentation-build",
    "title": "Project Presentation Build",
    "tagline": "Ideas deserve a stage.",
    "category": "Full-Stack",
    "url": "https://project-presentation-build.netlify.app/",
    "githubUrl": "https://github.com/mohammadGit2",
    "image": image1,
    "stack": [
      "Responsive web",
      "Motion",
      "Tailwind CSS"
    ],
    "description": "An interactive presentation experience with animated slide navigation and responsive visual composition.",
    "architecturalBreakdown": [
      "Declarative slide composition for a responsive canvas.",
      "Keyboard navigation and a slide overview.",
      "Transform-based transitions between ideas."
    ],
    "featured": true,
    "number": "02",
    "imageSmall": small1,
    "imageAlt": "Project Presentation Build — existing concept artwork"
  },
  {
    "id": "mind-games",
    "title": "Mind Games",
    "tagline": "A little play. A lot of interaction.",
    "category": "Interactive Web",
    "url": "https://mindgames-syedm.netlify.app/",
    "githubUrl": "https://github.com/mohammadGit2",
    "image": image2,
    "stack": [
      "JavaScript",
      "HTML / CSS",
      "Web Audio"
    ],
    "description": "Browser-based memory and reaction games exploring state, timing, and immediate feedback.",
    "architecturalBreakdown": [
      "Pattern sequences and interactive game state.",
      "Local high-score persistence.",
      "Visual and audio feedback for player actions."
    ],
    "number": "03",
    "imageSmall": small2,
    "imageAlt": "Mind Games — existing concept artwork"
  },
  {
    "id": "bait-al-taareekh",
    "title": "Bait Al Taareekh",
    "tagline": "A window into the past.",
    "category": "Full-Stack",
    "url": "https://baitaltaareekh-syedm.netlify.app/",
    "githubUrl": "https://github.com/mohammadGit2",
    "image": image3,
    "stack": [
      "Web architecture",
      "Tailwind CSS",
      "Structured content"
    ],
    "description": "A historical exploration portal bringing timelines, archives, and visual storytelling together.",
    "architecturalBreakdown": [
      "Chronological organization of historical content.",
      "Readable article layouts and media galleries.",
      "Timeline filtering and structured navigation."
    ],
    "number": "04",
    "imageSmall": small3,
    "imageAlt": "Bait Al Taareekh — existing concept artwork"
  },
  {
    "id": "sm-bot",
    "title": "SM Bot",
    "tagline": "Conversation as an interface.",
    "category": "AI Integration",
    "url": "https://sm-bot-ten.vercel.app/",
    "githubUrl": "https://github.com/mohammadGit2",
    "stack": [
      "Node.js",
      "AI APIs",
      "Webhooks"
    ],
    "description": "A conversational assistant exploring AI API integration and custom prompt logic.",
    "architecturalBreakdown": [
      "Responsive chat interface.",
      "AI API integration and conversation context.",
      "Webhook-based automation concepts."
    ],
    "number": "05"
  },
  {
    "id": "seo-busin",
    "title": "SEO Busin",
    "tagline": "Making the web discoverable.",
    "category": "Full-Stack",
    "url": "https://seobusin.netlify.app/",
    "githubUrl": "https://github.com/mohammadGit2",
    "stack": [
      "Next.js",
      "React",
      "Tailwind CSS"
    ],
    "description": "A digital marketing and SEO web project focused on content structure and discoverability.",
    "architecturalBreakdown": [
      "Structured content and metadata.",
      "Responsive presentation of SEO services.",
      "React-based interface composition."
    ],
    "number": "06"
  }
];

// All agent data below is illustrative. This frontend makes no external API calls.
export const AI_AGENTS: AIAgentSystem[] = [
  {
    "id": "whatsapp-ecommerce",
    "title": "WhatsApp E-Commerce Agent",
    "category": "Autonomous Sales & Ordering",
    "description": "An architecture demonstration of a customer message becoming a structured order.",
    "triggerEvent": "Incoming WhatsApp message",
    "sampleInput": "I would like two wireless chargers delivered to Lahore.",
    "executionOutcome": "Example order prepared and confirmation composed. No order is placed.",
    "toolsUsed": [
      "WhatsApp Cloud API",
      "Product Catalog DB",
      "Inventory Lock",
      "Payment Link Generator",
      "Customer CRM"
    ],
    "nodes": [
      {
        "id": "n1",
        "name": "Webhook Ingestion",
        "role": "Validate the incoming message and extract its text.",
        "outputType": "Parsed message"
      },
      {
        "id": "n2",
        "name": "Intent Classifier",
        "role": "Extract product, quantity, and delivery intent.",
        "outputType": "Structured order intent"
      },
      {
        "id": "n3",
        "name": "Inventory Verifier",
        "role": "Look up the requested product and availability.",
        "outputType": "Example stock result"
      },
      {
        "id": "n4",
        "name": "Order Record Dispatch",
        "role": "Prepare a structured order record for review.",
        "outputType": "Draft order record"
      },
      {
        "id": "n5",
        "name": "Confirmation Broadcaster",
        "role": "Compose a customer-facing confirmation.",
        "outputType": "Confirmation preview"
      }
    ]
  },
  {
    "id": "facebook-comment-replier",
    "title": "Facebook Comment Replier",
    "category": "Social Engagement Agent",
    "description": "A workflow concept for reviewing a social comment and preparing a contextual reply.",
    "triggerEvent": "New Facebook comment webhook",
    "sampleInput": "Is there a replacement warranty? Do you deliver to Karachi?",
    "executionOutcome": "Example reply prepared for review. Nothing is published.",
    "toolsUsed": [
      "Meta Graph Webhook",
      "Sentiment Filter",
      "Brand Knowledge Base",
      "Toxicity Guard",
      "Graph API Publisher"
    ],
    "nodes": [
      {
        "id": "n1",
        "name": "Meta Event Receiver",
        "role": "Extract the comment from the webhook event.",
        "outputType": "Comment payload"
      },
      {
        "id": "n2",
        "name": "Safety & Sentiment Scan",
        "role": "Check whether the request needs human review.",
        "outputType": "Review decision"
      },
      {
        "id": "n3",
        "name": "RAG Policy Lookup",
        "role": "Retrieve relevant warranty and shipping information.",
        "outputType": "Retrieved context"
      },
      {
        "id": "n4",
        "name": "Response Generator",
        "role": "Compose a response grounded in retrieved information.",
        "outputType": "Draft reply"
      },
      {
        "id": "n5",
        "name": "Graph API Publisher",
        "role": "Preview the response before publication.",
        "outputType": "Publishing preview"
      }
    ]
  },
  {
    "id": "bug-identifier-fixer",
    "title": "Website Bug Identifier & Fixer",
    "category": "Autonomous Code Engineering",
    "description": "A demonstration of moving from an error report to a proposed code change.",
    "triggerEvent": "Error report or repository scan",
    "sampleInput": "TypeError: Cannot read properties of undefined (reading \"items\")",
    "executionOutcome": "Example patch and pull-request draft prepared. No repository is changed.",
    "toolsUsed": [
      "GitHub Octokit",
      "AST Parser",
      "Sentry Webhooks",
      "Code Synthesizer",
      "Test Runner"
    ],
    "nodes": [
      {
        "id": "n1",
        "name": "Error Hook Ingestion",
        "role": "Parse the error and relevant source location.",
        "outputType": "Parsed error"
      },
      {
        "id": "n2",
        "name": "AST File Context Fetch",
        "role": "Retrieve the code surrounding the reported error.",
        "outputType": "Source context"
      },
      {
        "id": "n3",
        "name": "Patch Generation",
        "role": "Propose a defensive code change.",
        "outputType": "Proposed diff"
      },
      {
        "id": "n4",
        "name": "Test Execution Bot",
        "role": "Define checks to validate the proposed change.",
        "outputType": "Test plan"
      },
      {
        "id": "n5",
        "name": "PR Auto-Submission",
        "role": "Prepare a pull request for human review.",
        "outputType": "Draft pull request"
      }
    ]
  },
  {
    "id": "ai-news-provider",
    "title": "AI Latest News Provider",
    "category": "Data Pipeline & Intelligence",
    "description": "A pipeline concept for collecting, deduplicating, and summarizing news.",
    "triggerEvent": "Scheduled feed collection",
    "sampleInput": "Collect recent articles about language models and robotics.",
    "executionOutcome": "Example briefing prepared for delivery. Nothing is sent.",
    "toolsUsed": [
      "RSS Scraper",
      "Embedding Deduplicator",
      "LLM Summarizer",
      "Fact Checker",
      "Telegram Bot API"
    ],
    "nodes": [
      {
        "id": "n1",
        "name": "Feed Aggregator",
        "role": "Collect articles from configured feeds.",
        "outputType": "Collected articles"
      },
      {
        "id": "n2",
        "name": "Vector Deduplicator",
        "role": "Group related articles and remove duplicates.",
        "outputType": "Unique stories"
      },
      {
        "id": "n3",
        "name": "Significance Evaluator",
        "role": "Rank stories by topic relevance.",
        "outputType": "Ranked topics"
      },
      {
        "id": "n4",
        "name": "Executive Synthesis",
        "role": "Summarize the sources into a concise briefing.",
        "outputType": "Draft briefing"
      },
      {
        "id": "n5",
        "name": "Channel Broadcaster",
        "role": "Prepare the briefing for a selected channel.",
        "outputType": "Delivery preview"
      }
    ]
  },
  {
    "id": "github-issue-triage",
    "title": "Smart GitHub Issue Triage",
    "category": "DevOps & Repo Automation",
    "description": "A workflow concept for classifying issues and routing them for review.",
    "triggerEvent": "GitHub issues.opened webhook",
    "sampleInput": "Memory leak when mounting a canvas in Safari. Reproduction steps attached.",
    "executionOutcome": "Example labels and routing prepared. No issue is changed.",
    "toolsUsed": [
      "GitHub Webhook",
      "Issue Classifier",
      "Priority Matrix",
      "Team Skill Matcher",
      "Slack Notification Hook"
    ],
    "nodes": [
      {
        "id": "n1",
        "name": "Issue Ingestion",
        "role": "Extract the issue description and reproduction steps.",
        "outputType": "Issue payload"
      },
      {
        "id": "n2",
        "name": "Classification Engine",
        "role": "Suggest a category and priority for review.",
        "outputType": "Suggested labels"
      },
      {
        "id": "n3",
        "name": "Skill-Match Router",
        "role": "Route the issue to a relevant area of responsibility.",
        "outputType": "Suggested routing"
      },
      {
        "id": "n4",
        "name": "GitHub Metadata Writer",
        "role": "Preview proposed labels and acknowledgement.",
        "outputType": "Update preview"
      },
      {
        "id": "n5",
        "name": "Alert Dispatcher",
        "role": "Prepare a notification for the relevant team.",
        "outputType": "Notification preview"
      }
    ]
  }
];
