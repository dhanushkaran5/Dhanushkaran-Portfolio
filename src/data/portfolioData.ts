export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / ML' | 'Full Stack' | 'Data Science' | 'Web Apps';
  description: string;
  problem: string;
  solution: string;
  metrics?: string[];
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  type: 'education' | 'internship' | 'achievement' | 'patent';
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string[];
  highlight?: string;
  badge?: string;
}

export interface Certification {
  provider: string;
  title: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Dhanushkaran M',
    shortName: 'Dhanush',
    role: 'AI & Data Science Developer',
    headline: 'Designing smart software to solve real challenges.',
    subheadline:
      'B.Tech Artificial Intelligence & Data Science scholar with a published patent in smart systems. Crafting full-stack web products, autonomous AI agents, and high-performance applications with modern engineering rigor.',
    location: 'Coimbatore, Tamil Nadu, India',
    timezone: 'Asia/Kolkata',
    email: 'logeshdhanushkaran@gmail.com',
    github: 'https://github.com/dhanushkaran5',
    linkedin: 'https://www.linkedin.com/in/dhanushkaran-m-35ab77330',
    resumeUrl: '/resume.pdf',
    availabilityStatus: 'Available for opportunities',
  },

  stats: [
    { label: 'Patent Published', value: '01', suffix: '', description: 'Govt of India Patent (Urban Congestion)' },
    { label: 'Projects Built', value: '08', suffix: '+', description: 'Full Stack, AI & Data Science products' },
    { label: 'Industry Internships', value: '02', suffix: '', description: 'Software Engineering & Data Science' },
    { label: 'Academic CGPA', value: '8.10', suffix: '', description: 'B.Tech AI & Data Science (Anna Univ)' },
  ],

  bentoAbout: {
    intro: {
      tagline: 'Engineering with Purpose',
      title: 'Turning algorithmic research into dependable, user-first digital products.',
      bio: "I'm Dhanushkaran M, an AI & Data Science developer from Tamil Nadu, India. My engineering focus lies at the intersection of robust full-stack software architecture (Java, Spring Boot, React, Next.js) and applied intelligent systems (LLMs, predictive machine learning pipelines, and computer vision).",
    },
    currentFocus: {
      title: 'Current Focus',
      description: 'Architecting end-to-end full stack web platforms, agentic LLM workflows with Hugging Face & Spring Boot, and scalable RESTful microservices.',
    },
    location: {
      city: 'Coimbatore',
      region: 'Tamil Nadu, India',
      coordinates: '11.0168° N, 76.9558° E',
    },
    education: {
      degree: 'B.Tech — Artificial Intelligence & Data Science',
      institution: 'V.S.B College of Engineering Technical Campus',
      affiliation: 'Affiliated with Anna University, Chennai',
      period: '2023 – 2027',
      cgpa: '8.10 CGPA',
    },
    patent: {
      title: 'Patent Published (Govt. of India)',
      name: 'Smart Traffic Management System for Urban Congestion',
      appNumber: 'Indian Patent Application No. 202541099319 A',
      publishedDate: 'November 2025',
    },
    philosophy: {
      quote: 'Elegant code is not just about syntax; it is about building dependable systems that solve real human friction.',
    },
  },

  projects: [
    {
      id: 'tree-plantation-calculator',
      title: 'Tree Plantation & Carbon Reduction Calculator',
      subtitle: 'Eclearnix Hackathon Finalist — Climate Tech Engine',
      category: 'Data Science',
      year: '2025',
      featured: true,
      description:
        'A web-based sustainability application that accurately calculates dynamic carbon emissions, models tree-planting offsets, and visualizes environmental impact through real-time interactive analytics.',
      problem:
        'Both individuals and small organizations struggle to translate abstract carbon footprints into tangible, actionable tree planting milestones with trustworthy metrics.',
      solution:
        'Developed an interactive calculation suite that ingests emission inputs across transportation, energy, and consumption to project exact tree-planting offsets with multi-year CO₂ absorption curves.',
      metrics: [
        'Live Production Deployment on Render',
        'Finalist at Eclearnix National Hackathon',
        'Dynamic Multi-Source Carbon Factor Index',
        'Instant Client-Side Mathematical Modeling',
      ],
      features: [
        'Precise Carbon Footprint Calculation across lifestyle vectors',
        'Algorithmic CO₂ absorption timeline modeling per tree species',
        'Interactive real-time data visualization and metrics dashboard',
        'Personalized reduction action items & sustainability benchmarks',
        'Fully responsive, zero-latency client interface',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Data Analytics', 'Render'],
      liveUrl: 'https://tree-plantation-calculator-1.onrender.com/',
      githubUrl: 'https://github.com/dhanushkaran5',
    },
    {
      id: 'ai-placement-mentor',
      title: 'AI Placement Mentor Agent',
      subtitle: 'Autonomous Career Preparation & Roadmap Synthesizer',
      category: 'AI / ML',
      year: '2025',
      featured: false,
      description:
        'An intelligent AI-powered platform that analyzes candidate resumes, pinpoints critical skill gaps against current market job descriptions, and synthesizes hyper-personalized preparation roadmaps.',
      problem:
        'Graduating students frequently struggle with generic preparation advice and lack targeted clarity on specific gaps between their resume and target technical job profiles.',
      solution:
        'Engineered an LLM-driven platform that orchestrates document parsing, skill vector extraction, and company-specific interview curriculum generation.',
      metrics: [
        'Automated multi-section resume parser',
        'Skill deficiency mapping against 50+ tech roles',
        'Targeted roadmap generation in seconds',
      ],
      features: [
        'Automated Resume Extraction & Semantic Vector Comparison',
        'Granular Skill Gap Identification with actionable remedies',
        'Company & Tier-specific preparation milestones',
        'Curated AI interview prep questions & prompt challenges',
      ],
      technologies: ['React', 'Spring Boot', 'Python', 'LLMs', 'Hugging Face', 'REST APIs'],
      githubUrl: 'https://github.com/dhanushkaran5',
    },
    {
      id: 'smart-traffic-system',
      title: 'Smart Traffic Management System',
      subtitle: 'Published Indian Patent — No. 202541099319 A',
      category: 'AI / ML',
      year: '2025',
      featured: false,
      description:
        'Patented intelligent urban traffic system that monitors vehicular bottleneck density dynamically and computes adaptive signal timings in real-time.',
      problem:
        'Static timer-based traffic lights induce severe bottlenecks and fuel wastage during asymmetric rush-hour vehicular surges.',
      solution:
        'Designed an algorithmic control architecture combining sensor feedback loops and predictive density queueing to autonomously adjust signal green-times.',
      metrics: [
        'Official Indian Patent Application No. 202541099319 A',
        'Published in Official Patent Journal, Nov 2025',
        'Proportional signal delay reduction model',
      ],
      features: [
        'Real-time vehicular queue density estimation',
        'Adaptive green-signal cycle calculation',
        'Priority lane routing protocols for emergency services',
        'Robust fault tolerance for sensor degradation',
      ],
      technologies: ['Python', 'Computer Vision', 'IoT Protocols', 'Algorithmic Optimization'],
      githubUrl: 'https://github.com/dhanushkaran5',
    },
    {
      id: 'resume-screening-engine',
      title: 'Intelligent Candidate Screening Engine',
      subtitle: 'Enterprise Talent Ranking & Keyword Matrix Parser',
      category: 'Full Stack',
      year: '2024',
      featured: false,
      description:
        'Full-stack enterprise recruitment microservice that automates initial candidate screening via structured ranking matrices and semantic scoring.',
      problem:
        'High volume of inbound resumes overwhelms recruitment teams, leading to missed qualified talent or slow hiring cycles.',
      solution:
        'Built a high-performance Spring Boot backend with clean REST endpoints, persistent MySQL storage, and an intuitive candidate dashboard.',
      metrics: [
        'Sub-100ms API response times',
        'Scalable relational schema design',
        'Clean multi-criteria filtering',
      ],
      features: [
        'Structured resume metadata extraction',
        'Weighted skill score computation against job criteria',
        'Role-based access management and dashboard views',
        'CSV/JSON batch candidate export pipelines',
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/dhanushkaran5',
    },
  ] as Project[],

  skills: [
    {
      category: 'Languages',
      iconName: 'Code2',
      description: 'Core programming languages for software and algorithmic development.',
      skills: [
        { name: 'Java', highlight: true },
        { name: 'Python', highlight: true },
        { name: 'JavaScript', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'SQL', highlight: true },
        { name: 'HTML5 / CSS3' },
      ],
    },
    {
      category: 'Frontend Engineering',
      iconName: 'Layout',
      description: 'Modern, reactive interfaces with fluid micro-interactions and accessibility.',
      skills: [
        { name: 'React', highlight: true },
        { name: 'Next.js', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'Framer Motion', highlight: true },
        { name: 'Component Architecture' },
        { name: 'Responsive Web Design' },
      ],
    },
    {
      category: 'Backend & APIs',
      iconName: 'Server',
      description: 'Scalable services, business logic, and reliable database architectures.',
      skills: [
        { name: 'Spring Boot', highlight: true },
        { name: 'Node.js', highlight: true },
        { name: 'Express.js' },
        { name: 'REST APIs', highlight: true },
        { name: 'Object-Oriented Programming (OOP)' },
        { name: 'Data Structures & Algorithms' },
      ],
    },
    {
      category: 'AI / ML & Data Science',
      iconName: 'Brain',
      description: 'Applied machine learning, language models, and predictive analytics.',
      skills: [
        { name: 'Machine Learning', highlight: true },
        { name: 'Large Language Models (LLMs)', highlight: true },
        { name: 'Hugging Face', highlight: true },
        { name: 'Pandas & NumPy', highlight: true },
        { name: 'Scikit-learn' },
        { name: 'Data Preprocessing & Cleaning' },
      ],
    },
    {
      category: 'Databases & Tools',
      iconName: 'Database',
      description: 'Persistent data layers, version control, and developer tooling.',
      skills: [
        { name: 'MySQL', highlight: true },
        { name: 'MongoDB' },
        { name: 'Git & GitHub', highlight: true },
        { name: 'VS Code' },
        { name: 'Postman', highlight: true },
        { name: 'Render / Vercel' },
      ],
    },
  ] as SkillGroup[],

  services: [
    {
      number: '01',
      title: 'Full Stack Development',
      subtitle: 'End-to-end web applications',
      description:
        'Building responsive, accessible web applications from intuitive client interfaces to scalable backend microservices with React, Next.js, and Spring Boot.',
      iconName: 'Layers',
    },
    {
      number: '02',
      title: 'AI & LLM Solutions',
      subtitle: 'Intelligent data-driven systems',
      description:
        'Integrating generative AI, Hugging Face models, and automated semantic agents into workflows to solve real-world productivity challenges.',
      iconName: 'Cpu',
    },
    {
      number: '03',
      title: 'Data Science & Analytics',
      subtitle: 'Data cleaning, insight & modeling',
      description:
        'Transforming unstructured business datasets into structured pipelines, exploratory insights, and predictive machine learning models using Python.',
      iconName: 'LineChart',
    },
    {
      number: '04',
      title: 'Backend & API Architecture',
      subtitle: 'High-throughput secure systems',
      description:
        'Designing clean, maintainable RESTful APIs with structured relational schemas, tokenized authentication, and strict validation logic.',
      iconName: 'Server',
    },
    {
      number: '05',
      title: 'Developer Tools & Automation',
      subtitle: 'Workflow acceleration & utilities',
      description:
        'Crafting automated utilities, calculators, and scripts that eliminate repetitive manual friction and optimize delivery speed.',
      iconName: 'Wrench',
    },
  ],

  journey: [
    {
      type: 'patent',
      title: 'Patent Publication — Urban Traffic Management',
      organization: 'Government of India Patent Office',
      period: 'Nov 2025',
      badge: 'Patent Published',
      highlight: 'Indian Patent Application No. 202541099319 A',
      description: [
        'Published patent for "Smart Traffic Management System for Urban Congestion".',
        'Architected an adaptive signal timing mechanism driven by dynamic vehicular volume estimation.',
        'Designed to mitigate bottleneck choke points in dense urban intersections.',
      ],
    },
    {
      type: 'internship',
      title: 'Data Science Intern',
      organization: 'EDU TANTR',
      period: 'Dec 2025',
      badge: 'Internship',
      description: [
        'Analyzed real-world datasets using Python data science libraries (Pandas, NumPy).',
        'Implemented systematic data cleaning, outlier treatment, and exploratory statistical analysis.',
        'Collaborated on cross-functional technical tasks under strict delivery milestones.',
      ],
    },
    {
      type: 'internship',
      title: 'Web Development & Cloud Intern',
      organization: 'Litz Technologies',
      period: 'May 2025',
      badge: 'Internship',
      description: [
        'Developed responsive client modules utilizing HTML5, CSS3, and modern JavaScript.',
        'Applied foundational cloud server deployment principles to verify live build pipelines.',
        'Participated in code reviews and architectural discussions for modular frontend components.',
      ],
    },
    {
      type: 'achievement',
      title: '1st Prize — Tech Architecture Symposium',
      organization: 'Inter College Symposium',
      period: '2025',
      badge: 'Winner',
      description: [
        'Awarded 1st place in the Tech Architecture competition across participating regional engineering colleges.',
        'Presented robust system architecture design with clear failure mitigation strategies.',
      ],
    },
    {
      type: 'achievement',
      title: 'National Hackathon Finalist',
      organization: 'Eclearnix Hackathon — KPR College',
      period: '2025',
      badge: 'Finalist',
      description: [
        'Selected as finalist for the Tree Plantation & Carbon Reduction Calculator project.',
        'Recognized for live working prototype, intuitive UX, and practical environmental relevance.',
      ],
    },
    {
      type: 'education',
      title: 'B.Tech in Artificial Intelligence & Data Science',
      organization: 'V.S.B College of Engineering Technical Campus (Anna University)',
      period: '2023 – 2027',
      badge: 'CGPA 8.10',
      highlight: 'Coimbatore, Tamil Nadu',
      description: [
        'Specializing in Data Structures, AI, Machine Learning, Database Management, and Object-Oriented Design.',
        'Maintained a strong 8.10 CGPA through consistent academic performance and hands-on laboratory projects.',
      ],
    },
  ] as ExperienceItem[],

  certifications: [
    {
      provider: 'NPTEL',
      title: 'The Joy of Computing Using Python',
      iconName: 'BookOpen',
    },
    {
      provider: 'Infosys Springboard',
      title: 'Data Structures and Algorithms Using Python',
      iconName: 'Code2',
    },
    {
      provider: 'Infosys Springboard',
      title: 'Generative AI',
      iconName: 'Sparkles',
    },
    {
      provider: 'AWS',
      title: 'Foundations of Prompt Engineering',
      iconName: 'Cloud',
    },
    {
      provider: 'IBM',
      title: 'Generative AI Essentials: Using LLMs to Work with Data',
      iconName: 'Brain',
    },
  ] as Certification[],

  terminalResponses: {
    help: `Available commands:
  • about     - Who is Dhanushkaran M?
  • skills    - Technical skillset & proficiencies
  • projects  - Selected production & academic projects
  • patent    - Official Indian Patent details
  • contact   - Connect via Email, GitHub & LinkedIn
  • resume    - Download or view resume
  • clear     - Clear terminal buffer`,
    about: `DHANUSHKARAN M
Role: AI & Data Science Developer | Software Engineer
Location: Coimbatore, Tamil Nadu, India
Education: B.Tech in AI & Data Science (2023–2027) | CGPA: 8.10
Summary: Passionate about building intelligent digital products, full-stack systems with Spring Boot and React, and applied machine learning tools that solve real-world problems.`,
    skills: `LANGUAGES: Java, Python, JavaScript, TypeScript, SQL, HTML/CSS
FRONTEND:  React, Next.js, Tailwind CSS, Framer Motion
BACKEND:   Spring Boot, Node.js, Express, REST APIs
AI / ML:   LLMs, Hugging Face, Machine Learning, Pandas, NumPy, Scikit-learn
DATABASE:  MySQL, MongoDB, PostgreSQL
DEV TOOLS: Git, GitHub, VS Code, Postman, Render, Vercel`,
    projects: `SELECTED PROJECTS:
  1. Tree Plantation & Carbon Reduction Calculator [Live on Render | Hackathon Finalist]
     URL: https://tree-plantation-calculator-1.onrender.com/
  2. AI Placement Mentor Agent [React, Spring Boot, LLM, Hugging Face]
  3. Smart Traffic Management System [Indian Patent Published: No. 202541099319 A]
  4. Intelligent Candidate Screening Engine [Java, Spring Boot, MySQL]`,
    patent: `OFFICIAL PATENT PUBLICATION:
  Title:       Smart Traffic Management System for Urban Congestion
  Application: Indian Patent Application No. 202541099319 A
  Published:   November 2025
  Office:      Government of India Patent Office
  Focus:       Dynamic vehicular volume estimation & adaptive signal phase control.`,
    contact: `GET IN TOUCH:
  Email:    logeshdhanushkaran@gmail.com
  GitHub:   https://github.com/dhanushkaran5
  LinkedIn: https://www.linkedin.com/in/dhanushkaran-m-35ab77330
  Status:   Available for opportunities`,
    resume: `Direct resume link: /resume.pdf
  You can click the 'Download Resume' button in the hero or visit /resume.pdf directly.`,
  } as Record<string, string>,
};
