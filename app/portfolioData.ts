export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  metricBadge?: string;
  url: string;
  image: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  stats?: { label: string; value: string }[];
  achievements: string[];
  technologies: string[];
}

export const PERSONAL_INFO = {
  name: "Priyansh Sharma",
  role: "Forward Deployed Engineer",
  company: "IndianAppGuy PVT LTD / MagicSlides",
  location: "Bangalore, India",
  email: "piyuindia4@gmail.com",
  github: "https://github.com/PriyanshIAG2002",
  linkedin: "https://www.linkedin.com/in/priyaansh-sharma-7b9520223/",
  calCom: "https://cal.com/priyansh-sharma-vkgamk/30min",
  heroBio:
    "Forward Deployed Engineer at IndianAppGuy / MagicSlides. I talk directly with users, uncover the core engineering problems, and ship production solutions in days — scaled 0→1 multi-product AI suites serving 190K+ quarterly visitors at $750K+ total volume and $330K+ ARR.",
  stats: [
    { value: "$750K+", label: "Platform Revenue", isHighlight: true },
    { value: "$330K+", label: "Current ARR (MagicSlides)", isHighlight: true },
    { value: "190K+", label: "Quarterly Visitors", isHighlight: false },
    { value: "4,000+", label: "Outlets Scaled (IPL 2026)", isHighlight: false },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "magicslides",
    title: "MagicSlides",
    category: "AI Presentation Suite",
    tagline:
      "Multi-product AI presentation platform with 200+ templates, live HTML streaming slide generation, and a Figma/Canva-grade deck editor.",
    description:
      "Built out a normal PPT generator into a multi-product AI suite (MagicDocs with 110+ templates, Creative Studio, Hyperframes, MagicSheets, Meeting Notes, MagicClips). Shifted PPT generation from legacy JSON to design-preserving HTML streaming, cutting wait time from 3 minutes to 30 seconds with live streaming rendering.",
    metricBadge: "$750K+ Rev · $330K ARR",
    url: "https://www.magicslides.app/",
    image: "/projects/magicslides.png",
  },
  {
    id: "buildcheap",
    title: "BuildCheap",
    category: "AI Vibe-Coding Platform",
    tagline:
      "Vibe coding app in which you can make web and mobile apps with simple natural language prompts and deploy them in minutes.",
    description:
      "Automated code generation and dependency resolver with live containerized sandbox previews and instant deployment.",
    metricBadge: "0→1 Vibe-Coding",
    url: "https://www.buildcheap.app/",
    image: "/projects/buildcheap.png",
  },
  {
    id: "magicchat",
    title: "MagicChat",
    category: "AI Website Assistant",
    tagline:
      "Personal AI assistant for any website supporting videos, files, and text as knowledge sources.",
    description:
      "Multi-format knowledge ingestion serving as a drop-in AI assistant. Personally conducted 250+ sales calls, converting businesses into recurring subscriptions.",
    metricBadge: "250+ Sales Calls",
    url: "https://magicchat.ai/",
    image: "/projects/magicchat.png",
  },
  {
    id: "askvideo",
    title: "AskVideo",
    category: "Video RAG Intelligence",
    tagline:
      "RAG platform where users can add YouTube videos, Instagram reels, or uploaded video files and converse directly with their video content.",
    description:
      "Extracts transcripts, chunks temporal timestamps, and provides precise video-grounded answers with citations.",
    metricBadge: "Video RAG",
    url: "https://www.askvideo.ai/",
    image: "/projects/askvideo.png",
  },
  {
    id: "talkingpdf",
    title: "TalkingPDF",
    category: "Document Intelligence",
    tagline:
      "Conversational AI for all file formats allowing users to chat with research papers, contracts, and documents.",
    description:
      "Local and cloud multi-format parser with hybrid search, contextual citation extraction, and high-accuracy summarization.",
    metricBadge: "Multi-Format RAG",
    url: "https://talkingpdf.io/",
    image: "/projects/talkingpdf.png",
  },
  {
    id: "bananaslides",
    title: "BananaSlides",
    category: "Presentation Utility",
    tagline:
      "Lightweight, lightning-fast presentation generation utility for instant slide decks.",
    description:
      "Rapid deck scaffolding focused on speed, clean typography, and zero-friction sharing.",
    metricBadge: "Slide Utility",
    url: "https://www.bananaslides.com/",
    image: "/projects/bananaslides.png",
  },
  {
    id: "blurscreen",
    title: "BlurScreen",
    category: "Chrome Extension & SaaS",
    tagline:
      "Privacy-first Chrome extension that simply and securely blurs any selected area or sensitive DOM element on screen.",
    description:
      "Zero-lag DOM element selector engine that persists blur masks across dynamic SPAs during product demos, client calls, and video recordings.",
    metricBadge: "Chrome Extension",
    url: "https://www.blurweb.app/",
    image: "/projects/blurscreen.png",
  },
  {
    id: "fotosaket",
    title: "fotosaket",
    category: "Personal Portfolio",
    tagline:
      "Official portfolio website for Saket Gokhale.",
    description:
      "High-performance creative portfolio featuring responsive visual galleries, smooth transitions, and optimized asset delivery.",
    metricBadge: "Saket Gokhale Portfolio",
    url: "https://fotosaket.vercel.app/",
    image: "/projects/fotosaket.png",
  },
  {
    id: "spark-spectrum-studios",
    title: "Spark Spectrum Studios",
    category: "Design Agency",
    tagline:
      "Official design agency website showcasing interactive digital experiences and creative branding.",
    description:
      "Design studio digital platform featuring interactive layouts, brand storytelling, and modern web development.",
    metricBadge: "Agency Website",
    url: "https://spark-spectrum-studios.vercel.app/",
    image: "/projects/sparkspectrum.png",
  },
  {
    id: "logarithm",
    title: "Logarithm",
    category: "Web Design Agency",
    tagline:
      "Web design agency official website crafting bespoke digital products and high-impact web presence.",
    description:
      "Editorial agency presence with crisp typography, responsive layout hierarchy, and optimized performance.",
    metricBadge: "Agency Platform",
    url: "https://logarithm.dev/",
    image: "/projects/logarithm.png",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Jan 2025 — Present",
    role: "Forward Deployed Engineer",
    company: "MagicSlides App / IndianAppGuy PVT LTD",
    location: "Bangalore, India",
    type: "Full-time",
    description:
      "End-to-end forward deployed engineer at MagicSlides, an AI presentation and document suite serving 190K+ quarterly visitors and 29K+ signups/quarter, scaling the platform to $750K+ total volume and $330K+ ARR. In close contact with free and premium users, turning support requests and user friction into live production features within hours or days.",
    stats: [
      { label: "Platform Revenue", value: "$750K+" },
      { label: "Current ARR", value: "$330K+" },
      { label: "Quarterly Visitors", value: "190K+" },
      { label: "Quarterly Signups", value: "29K+" },
    ],
    achievements: [
      "Multi-Product AI Suite (0→1): Built out a normal PPT generator into an integrated suite — launched MagicDocs (agentic editor with 110+ templates, surgical PDF/DOCX edits, and Word export), Creative Studio (social posts & YouTube thumbnails with 30+ templates), Hyperframes (HTML→MP4 video generation via headless Chrome + FFmpeg), MagicSheets (AI CSV manipulation), Meeting Notes (meeting bot with 1-click sync to MagicTeams kanban board), and MagicClips.",
      "Rebuilt Slide Generation Pipeline: Shifted from legacy JSON to design-preserving HTML streaming templates (fonts/colors/layout intact), cutting generation latency from 3 minutes down to 30 seconds with live streaming rendering.",
      "Figma/Canva-Grade Visual Deck Editor: Engineered full visual deck editor from scratch — drag, resize, rotate, smart snapping guides, layers, align/distribute, crop/mask, 3D elements, and animations (far superior to Claude Design or basic HTML editors).",
      "ChatGPT & Claude Native Connectors: Embedded slide generation natively inside ChatGPT and Claude with inline presentation preview, offloading AI reasoning and establishing a high-volume organic acquisition channel.",
      "Monetization & Regional Pricing: Redesigned subscriptions and credit top-ups with region-aware pricing across Stripe, Razorpay, and PayPal.",
      "Technical SEO & Growth: Migrated notion blogs to WordPress (resolving rate-limiting 404 errors); researched competitor ranking keywords to engineer high-ranking tool pages, comparison pages, and use-case directories that convert organic traffic to recurring paying customers.",
      "Customer Obsession: Conducted 250+ sales calls for MagicChat, personally converting paying accounts, and resolved 1,000+ user tickets with code shipped within 24–48 hours.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "HTML Streaming",
      "OpenAI",
      "Claude",
      "Headless Chrome",
      "FFmpeg",
      "Canvas API",
      "Tailwind CSS",
      "Stripe",
      "Razorpay",
      "PayPal",
    ],
  },
  {
    period: "Aug 2024 — Dec 2024 · 5 mos",
    role: "Creative Developer",
    company: "Konstellation",
    location: "Bengaluru, India",
    type: "Full-time",
    description:
      "Crafted award-style, 3D interactive web experiences for international clients with Three.js, GSAP, and Framer Motion.",
    achievements: [
      "Led full-stack development of Pathfinder (path-finder.io) — a scroll-based 3D website with Three.js and GSAP image sequences built for award recognition and silky 60fps performance.",
      "Designed and built Walkwise (walkwise.in) — interactive 3D showcase website for a footwear brand, delivered end-to-end within one month.",
      "Created an internal web-based presentation platform replacing traditional PPT/PDF sharing with responsive, animated web decks.",
      "Built DRF Internal Tool Platform: document management, task tracking, and workflow tooling.",
    ],
    technologies: ["Next.js", "Three.js", "GSAP", "Framer Motion", "React", "TypeScript", "WebGL"],
  },
  {
    period: "Aug 2023 — Feb 2024 · 7 mos",
    role: "Full-Stack & Web Developer",
    company: "Orxa Energies",
    location: "Bengaluru, India",
    type: "Full-time",
    description:
      "Engineered customer-facing web applications, pre-booking pipelines, and internal ERP systems for the Orxa Mantis electric motorcycle launch.",
    achievements: [
      "Designed and developed Orxa Mantis Pre-Booking pages (Landing, Order Status, Buyer Agreement, Refund Automation, and Referral Leaderboard).",
      "Built ERP backend features: Purchase requests, Stock Inventory, GDN, and custom User Activity Tracker monitoring departmental usage.",
      "Engineered automated transactional email infrastructure with AWS SES; produced launch media with 40k+ user engagement.",
    ],
    technologies: ["React", "Node.js", "Express", "AWS SES", "ERP Systems", "Tailwind CSS"],
  },
];

export const AWARDS = [
  {
    title: "1st Prize, JavaScript Mastery Awards",
    organization: "JSM YouTube (1.2M+ Subscribers)",
    description: "Awarded top honor for high-performance creative web engineering.",
  },
  {
    title: "8× Milestone Winner",
    organization: "FunctionUp across 10 engineering projects",
    description: "Recognized for consistent speed of delivery, architecture quality, and frontend execution.",
  },
  {
    title: "B.Tech in Computer Science Engineering",
    organization: "Institute of Professional Studies, Indore",
    description: "Graduated with CGPA 8.9 / 10.0.",
  },
];

export const SKILLS = {
  Languages: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL"],
  Frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Three.js",
    "GSAP",
    "Framer Motion",
    "Redux Toolkit",
    "React Native (Expo)",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Fastify",
    "REST APIs",
    "WebSockets",
    "MongoDB",
    "Supabase",
    "Redis",
    "Docker",
    "CI/CD",
  ],
  AppliedAI: [
    "OpenAI",
    "Claude",
    "Gemini",
    "RAG & Vector Embeddings",
    "MCP Servers",
    "AI Agents",
    "Streaming Pipelines",
    "Multi-Model Routing",
    "Cost Optimization",
  ],
  Tools: ["Cursor", "Claude Code", "Git / GitHub", "Figma", "DataFast", "LogSnag", "Lighthouse"],
};
