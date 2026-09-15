export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'AI & ML' | 'Full-Stack' | 'Web Apps';
  description: string;
  problem: string;
  solution: string;
  architecture?: string;
  metrics?: string[];
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
  stars?: number;
  badge?: string;
  image?: string;
  patentDocument?: string;
  role?: string;
  timeline?: string;
  impact?: string;
  challenges?: {
    challenge: string;
    solution: string;
  };
  phases?: {
    phase: string;
    title: string;
    description: string;
  }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-placement-mentor',
    slug: 'ai-placement-mentor',
    title: 'AI Placement Mentor Agent',
    subtitle: 'Autonomous Career Guidance, Resume Gap Analysis & Placement Roadmaps',
    category: 'AI & ML',
    year: '2025–2026',
    featured: true,
    badge: 'FLAGSHIP AI AGENT',
    image: '/images/projects/ai-placement-mentor.jpg',
    role: 'Lead AI & Full Stack Developer',
    timeline: '4 Months',
    impact: 'Automated gap extraction, personalized preparation roadmaps, simulated mock interviews',
    description:
      'An AI-powered career guidance platform that analyzes resumes, identifies skill gaps, recommends suitable job roles and companies, and generates personalized placement preparation roadmaps. Implemented AI-driven interview preparation and career assistance using React, Spring Boot, and generative AI models.',
    problem:
      'Students and job seekers struggle to identify concrete skill deficiencies against modern industry hiring rubrics, lacking targeted preparation timelines, role-specific guidance, and realistic interview evaluations.',
    solution:
      'Engineered an intelligent career guidance platform combining a responsive React client with Spring Boot backend services and generative AI prompt pipelines. The system parses PDF resumes, identifies competency gaps against live job specifications, constructs structured weekly roadmaps, and conducts simulated interview sessions with constructive feedback.',
    architecture:
      'React frontend communicating with Spring Boot REST microservices. PDF resume ingestion pipeline extracting unstructured competencies into validated schemas, combined with semantic matching models for targeted role recommendations and dynamic roadmap scheduling.',
    metrics: [
      'Automated PDF resume parsing & entity extraction',
      'Targeted company & job role recommendations',
      'Dynamic week-by-week preparation schedules',
      'Interactive mock interview evaluation engine',
    ],
    features: [
      'Automated resume parsing with structured skill taxonomy extraction',
      'Targeted company & job role recommendation engine',
      'Personalized week-by-week placement preparation roadmaps',
      'Simulated AI interview evaluation with real-time feedback',
      'Interactive skill progression dashboard with telemetry metrics',
    ],
    technologies: ['React', 'Spring Boot', 'Java', 'Python', 'AI / LLMs', 'SQL', 'REST API'],
    liveUrl: 'https://ai-placement-mentor-1-4gyw.onrender.com/',
    githubUrl: 'https://github.com/dhanushkaran5/AI-placement-Mentor',
    challenges: {
      challenge: 'Handling diverse resume formatting styles (multi-column tables, varied typography) while preserving accurate competency categorization without hallucinations.',
      solution: 'Designed a structured multi-stage parsing pipeline that normalizes extracted tokens into canonical skill classifications prior to recommendation synthesis.',
    },
    phases: [
      { phase: 'PHASE 01', title: 'Data Extraction Engine', description: 'Engineered text parsing algorithms to extract education, experience, and competencies reliably from resumes.' },
      { phase: 'PHASE 02', title: 'Semantic Skill Matching', description: 'Implemented vector similarity analysis matching candidate profiles against company hiring rubrics.' },
      { phase: 'PHASE 03', title: 'Full Stack Integration', description: 'Built React dashboard and Spring Boot service pipelines with secure session tracking and interactive roadmap generators.' },
    ],
  },
  {
    id: 'carbon-calculator',
    slug: 'carbon-calculator',
    title: 'Tree Plantation & Carbon Calculator',
    subtitle: 'Web-Based Carbon Footprint Estimation & Tree-Planting Offset Engine',
    category: 'Web Apps',
    year: '2025',
    featured: false,
    badge: 'ECLEARNIX HACKATHON FINALIST',
    image: '/images/projects/tree-plantation.jpg',
    role: 'Lead Frontend & Systems Architect',
    timeline: '2 Months',
    impact: 'National Hackathon Finalist at KPR College, verified emission factor formulas',
    description:
      'Engineered a web-based carbon footprint calculator estimating CO2 emissions and recommending tree-planting offsets. Built an interactive dashboard with real-time calculations and data visualizations, delivering personalized sustainability insights with an intuitive user interface.',
    problem:
      'Individuals and campus communities lack accessible, quantified visualizations of daily carbon output across energy, transport, and lifestyle habits, as well as actionable calculations of exact tree offsets needed for carbon neutrality.',
    solution:
      'Built a responsive green-tech web application featuring real-time calculation mathematics based on verified emission factors. Provides dynamic visual sliders, interactive chart telemetry, and tailored tree-planting species recommendations.',
    architecture:
      'Responsive web client using HTML5, CSS3, and modern JavaScript with real-time formula computation pipelines. State-driven dynamic chart rendering and client-side computational sustainability modeling.',
    metrics: [
      'Sub-5ms Real-Time Calculation Loop',
      '100% Client-Side Private Computation',
      'Eclearnix Hackathon Finalist Honor (KPR College)',
      'High-contrast interactive sustainability visualizations',
    ],
    features: [
      'Dynamic multi-category emission calculator (travel, electricity, diet)',
      'Algorithmic tree-planting offset recommendations with species guides',
      'Real-time interactive data visualizations and trend charts',
      'Personalized sustainability scorecard and milestone tracking',
      'Responsive mobile-first interface optimized for campus awareness drives',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'Data Visualization', 'Git'],
    liveUrl: 'https://tree-plantation-calculator-1.onrender.com/',
    githubUrl: 'https://github.com/dhanushkaran5/Tree-Plantation-Calculator',
    challenges: {
      challenge: 'Ensuring carbon math calculations update at 60 FPS smoothly as users adjust multi-variable sliders without interface latency.',
      solution: 'Utilized debounced state reconciliations and optimized DOM canvas chart updates for silky-smooth interactive feedback.',
    },
    phases: [
      { phase: 'PHASE 01', title: 'Carbon Math Modeling', description: 'Curated standard environmental emission factors and verified computational formulas.' },
      { phase: 'PHASE 02', title: 'Interactive Dashboard', description: 'Designed high-contrast sustainability gauges, live sliders, and tree-count counters.' },
      { phase: 'PHASE 03', title: 'Hackathon Presentation', description: 'Presented and finalized at the Eclearnix Hackathon at KPR College to jury acclaim.' },
    ],
  },
  {
    id: 'ai-summarizer',
    slug: 'ai-summarizer',
    title: 'AI Summarizer & Document Intelligence',
    subtitle: 'Multi-Depth Document Summarization & Verified Anti-Hallucination RAG',
    category: 'AI & ML',
    year: '2025–2026',
    featured: false,
    badge: 'DOCUMENT INTELLIGENCE',
    image: '/images/projects/ai-summarizer.jpg',
    role: 'Lead AI & Systems Engineer',
    timeline: '3 Months',
    impact: 'Multi-depth summarization levels 0–5, anti-hallucination verification engine, verified citations',
    description:
      'AI-powered document intelligence and multi-depth summarization platform. Ingests PDFs, DOCX, PPTX, and text documents to generate structured summaries from one-sentence core thesis to deep technical analyses, paired with an evidence-grounded anti-hallucination RAG pipeline.',
    problem:
      'Professionals and students spend hours reviewing dense multi-page documentation, technical papers, and contracts, while existing LLM summarizers frequently suffer from ungrounded hallucinations, loss of citations, and rigid one-size-fits-all outputs.',
    solution:
      'Engineered an end-to-end document intelligence architecture with a React 19 frontend, Spring Boot backend, and Python FastAPI AI microservice with ChromaDB. Features 6 adaptive summarization depths (Levels 0–5), 9 audience modes, and an anti-hallucination verification engine classifying assertions as Supported or Unsupported with exact source citations.',
    architecture:
      'Modular microservices architecture: React 19 TypeScript client, Spring Boot API orchestrator, and FastAPI vector search service with ChromaDB. Implements token-aware semantic chunking and grounded retrieval pipelines.',
    metrics: [
      'Multi-Format Ingestion: PDF, DOCX, PPTX, TXT',
      '6 Adaptive Summarization Depths (Levels 0–5)',
      '9 Tailored Audience Personas',
      'Evidence-Grounded RAG with anti-hallucination tags',
    ],
    features: [
      'Multi-depth adaptive summarization ranging from executive briefs to technical analyses',
      '9 tailored audience perspectives (Executive, Student, Research, Technical, Legal)',
      'Anti-hallucination verification engine with grounded citation indices',
      'Token-aware semantic document chunking with configurable overlap',
      'Document comparison engine highlighting semantic contradictions and alignments',
    ],
    technologies: ['React 19', 'Spring Boot', 'FastAPI', 'Python', 'ChromaDB', 'RAG', 'TypeScript'],
    liveUrl: 'https://ai-summarizer-1-8nq8.onrender.com/',
    githubUrl: 'https://github.com/dhanushkaran5/AI-Summarizer',
    challenges: {
      challenge: 'Eliminating synthetic hallucinations and ensuring every extracted point traces back to an exact paragraph in multi-hundred-page documents.',
      solution: 'Built a multi-stage citation verification pipeline that maps embedding chunk indices to bounding paragraph coordinates before streaming responses.',
    },
    phases: [
      { phase: 'PHASE 01', title: 'Document Ingestion Pipeline', description: 'Built multi-format tokenizers and semantic chunkers supporting PDF, DOCX, and text.' },
      { phase: 'PHASE 02', title: 'Vector RAG & Verification', description: 'Configured ChromaDB vector stores with cosine similarity and claim verification classifiers.' },
      { phase: 'PHASE 03', title: 'Full Stack Deployment', description: 'Integrated React 19 UI with Spring Boot service gateway and deployed to Render.' },
    ],
  },
  {
    id: 'smart-traffic-patent',
    slug: 'smart-traffic-patent',
    title: 'Smart Traffic Management System',
    subtitle: 'Indian Patent Publication (App No. 202541099319 A, Nov 2025)',
    category: 'AI & ML',
    year: '2025',
    featured: false,
    badge: 'PUBLISHED GOVT PATENT',
    image: '/images/projects/smart-traffic.jpg',
    patentDocument: '/images/projects/patent.jpg',
    role: 'Patent Co-Inventor & AI Researcher',
    timeline: '6 Months',
    impact: 'Official Indian Patent Publication, dynamic signal timing & emergency green-wave corridors',
    description:
      'A computer vision-driven Smart Traffic Management System for Urban Congestion (Indian Patent Application No. 202541099319 A, published Nov 2025). Designed to dynamically regulate signal intervals based on real-time vehicle density and provide automated emergency vehicle priority corridors.',
    problem:
      'Static-timer traffic signals cause extensive vehicular bottlenecks, heightened idle emissions, and delayed emergency response vehicles in rapidly growing urban intersections.',
    solution:
      'Architected an intelligent computer vision system leveraging Python and deep learning object detection to quantify lane-by-lane vehicular density in real time, calculating dynamic green-light durations and establishing automated emergency vehicle corridors.',
    architecture:
      'Multi-camera video feed ingestion pipeline utilizing Python, OpenCV, and convolutional neural networks for bounding-box classification. Edge compute nodes communicate with microcontroller traffic relays via serial and socket protocols.',
    metrics: [
      'Official Patent App No. 202541099319 A',
      'Real-time vehicle counting and density calculation',
      'Simulated dynamic green-wave emergency corridor',
      'Adaptive junction timing based on live congestion',
    ],
    features: [
      'Real-time vehicle counting and multi-lane density computation',
      'Automated emergency vehicle detection with pre-emptive clearance signals',
      'Adaptive signal timing algorithms based on fluctuating junction traffic',
      'Predictive congestion forecasting during peak school and office hours',
      'Telemetry logging for municipal traffic analytics and infrastructure planning',
    ],
    technologies: ['Python', 'Computer Vision', 'OpenCV', 'Deep Learning', 'SQL', 'IoT'],
    githubUrl: 'https://github.com/dhanushkaran5',
    challenges: {
      challenge: 'Maintaining vehicle classification accuracy in varying ambient lighting, torrential rain, and occluded intersection perspectives.',
      solution: 'Trained augmentations across weather conditions and implemented spatial tracking to avoid multi-counting overlapping vehicle vectors.',
    },
    phases: [
      { phase: 'PHASE 01', title: 'Model Architecture & Research', description: 'Devised real-time vision algorithms for accurate vehicle density extraction.' },
      { phase: 'PHASE 02', title: 'Simulation & Benchmarking', description: 'Simulated urban intersection bottlenecks demonstrating significant congestion mitigation.' },
      { phase: 'PHASE 03', title: 'Patent Filing & Publication', description: 'Filed and successfully published Indian Patent Application No. 202541099319 A.' },
    ],
  },
  {
    id: 'tech-architecture-symposium',
    slug: 'tech-architecture-symposium',
    title: 'Distributed System Architecture',
    subtitle: '1st Prize Winner — Tech Architecture, Inter College Symposium',
    category: 'Full-Stack',
    year: '2025',
    featured: false,
    badge: '1ST PRIZE AWARD',
    image: '/images/projects/architecture.jpg',
    role: 'Lead Systems Architect',
    timeline: '1 Month',
    impact: '1st Prize Inter-College Honors, high-concurrency microservice design',
    description:
      'Award-winning technical architecture demonstrating high-throughput backend microservices, resilient database connection pooling, and fault-tolerant transaction isolation presented at the Inter College Technical Symposium.',
    problem:
      'Monolithic college systems frequently crash during peak course registrations, semester exam results, and fee payment deadlines due to database locks and unbounded thread exhaustion.',
    solution:
      'Engineered an event-driven architecture with Node.js and SQL connection pooling, offloading intensive tasks to asynchronous workers and caching active session tokens for rapid horizontal scalability.',
    architecture:
      'Modular Node.js and Java Spring backend services with SQL relational stores, connection pooling, and asynchronous message buffers.',
    metrics: [
      '1st Prize Inter-College Technical Honors',
      'Event-driven asynchronous worker queue',
      'Atomic database transaction rollback protection',
      'High-throughput connection pooling under stress testing',
    ],
    features: [
      'Asynchronous task queues for high-volume registration requests',
      'Atomic database transaction execution with automatic rollback',
      'Connection pooling and thread optimization for resource constraints',
      'Automated API schema contract verification and stress testing',
    ],
    technologies: ['Node.js', 'Java', 'SQL', 'Architecture Design', 'Git', 'REST API'],
    githubUrl: 'https://github.com/dhanushkaran5',
    phases: [
      { phase: 'PHASE 01', title: 'System Blueprint', description: 'Drafted architectural topologies addressing common college portal failure modes.' },
      { phase: 'PHASE 02', title: 'Benchmark Prototyping', description: 'Built working microservices simulating high concurrency loads.' },
      { phase: 'PHASE 03', title: 'Symposium Defense', description: 'Presented architecture to industry judges and clinched 1st Prize.' },
    ],
  },
];
