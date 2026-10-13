import { Project, PROJECTS_DATA } from './projects';
import { CertificationItem, CERTIFICATES_DATA } from './certificates';
import { WORK_EXPERIENCE_DATA, TIMELINE_DATA, ExperienceItem, JourneyMilestone } from './timeline';

export { PROJECTS_DATA, CERTIFICATES_DATA, WORK_EXPERIENCE_DATA, TIMELINE_DATA };
export type { Project, CertificationItem, ExperienceItem, JourneyMilestone };

export interface SkillItem {
  name: string;
  level: number; // 0-100
  experience?: string;
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  iconName: string;
  stats?: string;
  experience?: string;
  projectCount?: string;
  skills: { name: string; percentage: number; icon: string; color: string }[];
  competencies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Dhanushkaran M',
    shortName: 'Dhanushkaran',
    role: 'AI & Data Science Developer',
    editorialHero: {
      line1: 'AI & DS',
      line2: 'SOFTWARE',
      line3: 'DEVELOPER',
    },
    cornerLeft: 'DHANUSHKARAN M • AI & DATA SCIENCE ENGINEER\nBUILDING IMPACTFUL TECHNOLOGY SOLUTIONS.',
    cornerRight: 'APPLYING PROGRAMMING, CREATIVITY & ML\nFOR REAL-WORLD PROBLEM SOLVING.',
    headline: 'Turning ideas into reality',
    subheadline:
      'AI & Data Science student passionate about machine learning, scalable full-stack applications, and green technology.',
    bio: 'I am an AI & DS student with a strong interest in technology, seeking an internship opportunity to apply analytical thinking, programming skills, and creativity to real-world projects while contributing to innovative teams through software development and technology-driven solutions for environmental and business growth.',
    location: 'Coimbatore, Tamil Nadu, India',
    timezone: 'Asia/Kolkata',
    email: 'logeshdhanushkaran@gmail.com',
    phone: '+91 9566413640',
    phoneRaw: '+919566413640',
    whatsapp: 'https://wa.me/919566413640',
    github: 'https://github.com/dhanushkaran5',
    linkedin: 'https://www.linkedin.com/in/dhanushkaran-m-35ab77330/',
    instagram: 'https://www.instagram.com/dhanux._.karan/',
    twitter: 'https://twitter.com/dhanushkaran_m',
    resumeUrl: '/resume',
    availabilityStatus: 'AVAILABLE FOR OPPORTUNITY',
    education: {
      degree: 'B.Tech, Artificial Intelligence & Data Science',
      institution: 'V.S.B College of Engineering Technical Campus, Coimbatore',
      years: '2023 – 2027',
      score: 'CGPA: 8.10',
    },
    patent: {
      title: 'Smart Traffic Management System for Urban Congestion',
      applicationNo: '202541099319 A',
      date: 'Nov 2025',
    },
  },

  projects: PROJECTS_DATA,
  certifications: CERTIFICATES_DATA,
  experience: WORK_EXPERIENCE_DATA,
  journey: TIMELINE_DATA,

  stats: [
    { label: 'Verified Projects', value: '05', suffix: '+', description: 'Production AI & Web applications' },
    { label: 'Published Patent', value: '01', suffix: '', description: 'Govt. Indian Patent Publication' },
    { label: 'Academic CGPA', value: '8.10', suffix: '/10', description: 'B.Tech AI & Data Science' },
  ],

  bentoItems: {
    badge: 'GET TO KNOW ME',
    headingMain: 'Turning ideas into',
    headingAccent: 'reality',
    subtitle: 'AI & DS student passionate about machine learning, software development, and green technology.',
    ticker: 'AI & Data Science • Machine Learning • Python & Java • React & Spring Boot • FastAPI & ChromaDB • Hackathon Finalist • Patent Co-Inventor •',
    profileTitle: 'AI & Data Science Developer',
    profileName: 'Dhanushkaran M.',
    profileBio: 'Crafting intelligent AI systems, data science pipelines, and full-stack solutions with Python, Java, React, and SQL.',
    coreTechs: ['Python', 'Java', 'React', 'Spring Boot', 'FastAPI', 'SQL'],
    servicesBadge: 'MY SPECIALIZATION',
    servicesTitle: 'Machine Learning & Full-Stack Development',
    servicesSubtitle: 'Building AI agents, data pipelines, and responsive web platforms for real-world impact.',
    profilesBadge: 'NETWORK',
    profilesTitle: 'Connect with Dhanushkaran M',
    statsLabel1: 'PUBLISHED PATENT',
    statsValue1: '01',
    statsLabel2: 'PROJECTS BUILT',
    statsValue2: '05+',
    statsLabel3: 'ACADEMIC CGPA',
    statsValue3: '8.10',
    ctaBadge: 'COLLABORATE',
    ctaHeading: "Let's build something extraordinary together.",
  },

  expertise: [
    {
      id: 'ai-ml',
      number: '01',
      title: 'Artificial Intelligence & ML',
      subtitle: 'INTELLIGENT SYSTEMS & LLMs',
      description:
        'Architecting autonomous career guidance agents, multi-depth document intelligence, and computer vision models for automated classification and decision-making.',
      iconName: 'Brain',
      stats: '4 Projects',
      projectCount: '4 Projects',
      experience: '2+ Years',
      skills: [
        { name: 'Python', percentage: 95, icon: 'Python', color: '#3776AB' },
        { name: 'Generative AI & LLMs', percentage: 92, icon: 'Sparkles', color: '#10A37F' },
        { name: 'Prompt Engineering (AWS)', percentage: 94, icon: 'Zap', color: '#FF9900' },
        { name: 'Computer Vision & OpenCV', percentage: 86, icon: 'Eye', color: '#5C3EE8' },
        { name: 'Data Structures & Algorithms', percentage: 90, icon: 'Code', color: '#4B8BBE' },
        { name: 'Vector RAG & Embeddings', percentage: 88, icon: 'Cpu', color: '#E10098' },
      ],
      competencies: [
        'Autonomous agent design and resume parsing workflows',
        'Computer vision object detection for traffic management (Patent)',
        'Multi-depth document summarization and anti-hallucination RAG',
        'Data preprocessing and structured dataset cleaning',
      ],
      technologies: ['Python', 'Generative AI', 'AWS Prompt Engineering', 'OpenCV', 'LLMs', 'ChromaDB'],
    },
    {
      id: 'full-stack',
      number: '02',
      title: 'Full Stack Development',
      subtitle: 'END-TO-END WEB PLATFORMS',
      description:
        'Building responsive, high-performance web applications using React, Spring Boot, Node.js, and Flask with clean architecture and reliable state flows.',
      iconName: 'Layers',
      stats: '5 Projects',
      projectCount: '5 Projects',
      experience: '2+ Years',
      skills: [
        { name: 'React', percentage: 92, icon: 'React', color: '#61DAFB' },
        { name: 'Node.js', percentage: 88, icon: 'Nodejs', color: '#339933' },
        { name: 'Spring Boot (Java)', percentage: 86, icon: 'Server', color: '#6DB33F' },
        { name: 'FastAPI / Flask (Python)', percentage: 90, icon: 'Code', color: '#009688' },
        { name: 'JavaScript / TypeScript', percentage: 90, icon: 'FileCode', color: '#F7DF1E' },
        { name: 'HTML5 & CSS3', percentage: 96, icon: 'Layout', color: '#E34F26' },
      ],
      competencies: [
        'Responsive client interfaces with modern state management',
        'Cross-browser UI consistency and asset optimization (Litz Tech)',
        'RESTful API service contracts between client and server',
        'Interactive dashboards with live chart calculations',
      ],
      technologies: ['React', 'Spring Boot', 'Node.js', 'FastAPI', 'JavaScript', 'TypeScript'],
    },
    {
      id: 'data-science',
      number: '03',
      title: 'Data Science & Analytics',
      subtitle: 'STRUCTURED DATA PIPELINES',
      description:
        'Analyzing real-world datasets, automating data cleaning pipelines, performing exploratory data analysis, and deriving actionable predictive insights.',
      iconName: 'Activity',
      stats: '3 Projects',
      projectCount: '3 Projects',
      experience: '1+ Years',
      skills: [
        { name: 'Python Data Science', percentage: 94, icon: 'Python', color: '#3776AB' },
        { name: 'Data Cleaning & Preprocessing', percentage: 92, icon: 'Sparkles', color: '#3ECF8E' },
        { name: 'Exploratory Data Analysis (EDA)', percentage: 90, icon: 'TrendingUp', color: '#F59E0B' },
        { name: 'Statistical Modeling', percentage: 85, icon: 'BarChart', color: '#8B5CF6' },
        { name: 'Data Visualization', percentage: 88, icon: 'Eye', color: '#06B6D4' },
        { name: 'Dataset Imputation', percentage: 90, icon: 'Database', color: '#10B981' },
      ],
      competencies: [
        'Automated outlier detection and missing-value imputation (EDU TANTR)',
        'Data quality enhancement through systematic preprocessing',
        'Feature engineering for machine learning pipelines',
        'Statistical distribution analysis and summary visualization',
      ],
      technologies: ['Python', 'Data Science Workflows', 'Pandas', 'NumPy', 'EDA', 'SQL'],
    },
    {
      id: 'databases-cloud',
      number: '04',
      title: 'Databases & Cloud Systems',
      subtitle: 'DATA INTEGRITY & INFRASTRUCTURE',
      description:
        'Architecting normalized SQL relational databases, writing optimized queries, and deploying web applications to live server and cloud environments.',
      iconName: 'Database',
      stats: '4 Projects',
      projectCount: '4 Projects',
      experience: '2+ Years',
      skills: [
        { name: 'SQL (Relational DBMS)', percentage: 90, icon: 'Database', color: '#00758F' },
        { name: 'Cloud Computing Basics', percentage: 85, icon: 'Cloud', color: '#FF9900' },
        { name: 'Git & Version Control', percentage: 94, icon: 'Git', color: '#F05032' },
        { name: 'VS Code & Dev Tools', percentage: 95, icon: 'Code', color: '#007ACC' },
        { name: 'Linux CLI & Scripting', percentage: 84, icon: 'Terminal', color: '#FCC624' },
        { name: 'Server Deployment & Testing', percentage: 86, icon: 'Server', color: '#10B981' },
      ],
      competencies: [
        'Relational schema normalization and indexed SQL queries',
        'Live server deployment and component validation (Litz Tech)',
        'Git branching workflows, code reviews, and versioning',
        'Cloud storage integration and environment provisioning',
      ],
      technologies: ['SQL', 'Cloud Computing', 'Git', 'VS Code', 'Linux', 'REST API'],
    },
    {
      id: 'green-tech',
      number: '05',
      title: 'Green Tech & Sustainability Computing',
      subtitle: 'ENVIRONMENTAL IMPACT ENGINEERING',
      description:
        'Engineering computational sustainability tools, carbon emission footprint models, and automated offset estimation engines for green initiatives.',
      iconName: 'TreePine',
      stats: '2 Projects',
      projectCount: '2 Projects',
      experience: '1+ Years',
      skills: [
        { name: 'Carbon Math Modeling', percentage: 92, icon: 'TreePine', color: '#10B981' },
        { name: 'Real-Time Emission Math', percentage: 94, icon: 'Zap', color: '#06B6D4' },
        { name: 'Interactive Visualizations', percentage: 90, icon: 'Layout', color: '#3ECF8E' },
        { name: 'UI/UX Accessibility', percentage: 92, icon: 'Eye', color: '#F59E0B' },
        { name: 'Hackathon Rapid Prototyping', percentage: 96, icon: 'Award', color: '#EC4899' },
        { name: 'Client-Side Telemetry', percentage: 88, icon: 'Activity', color: '#8B5CF6' },
      ],
      competencies: [
        'Carbon emission factor calculations based on verified formulas',
        'National Hackathon Finalist design (Eclearnix, KPR College)',
        'Client-side real-time calculation mathematics with zero latency',
        'Public awareness interfaces supporting eco-friendly decisions',
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'Environmental Models', 'Git'],
    },
  ],

  skillsData: [
    {
      id: 'languages',
      name: 'Programming Languages',
      iconName: 'Code',
      description: 'Core languages utilized across machine learning algorithms, systems programming, and full-stack development.',
      skills: [
        { name: 'Python', level: 95, experience: '3+ Yrs', highlight: true },
        { name: 'Java', level: 88, experience: '2+ Yrs', highlight: true },
        { name: 'JavaScript (ES6+)', level: 90, experience: '2+ Yrs', highlight: true },
        { name: 'SQL', level: 90, experience: '2+ Yrs', highlight: true },
        { name: 'HTML5 & CSS3', level: 95, experience: '3+ Yrs', highlight: true },
      ],
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      iconName: 'Layers',
      description: 'Backend web microservices, enterprise service containers, and reactive frontend UI frameworks.',
      skills: [
        { name: 'React', level: 92, experience: '2+ Yrs', highlight: true },
        { name: 'Spring Boot', level: 86, experience: '1+ Yrs', highlight: true },
        { name: 'FastAPI', level: 88, experience: '1+ Yrs', highlight: true },
        { name: 'Flask', level: 90, experience: '2+ Yrs', highlight: true },
        { name: 'Node.js', level: 88, experience: '2+ Yrs', highlight: true },
      ],
    },
    {
      id: 'ai-genai',
      name: 'AI & Generative Models',
      iconName: 'Brain',
      description: 'Prompt architecture, foundation model integration, ChromaDB RAG, and computer vision pipelines.',
      skills: [
        { name: 'Prompt Engineering (AWS)', level: 94, experience: 'Certified', highlight: true },
        { name: 'Generative AI & LLMs (IBM)', level: 92, experience: 'Certified', highlight: true },
        { name: 'Computer Vision (Patent)', level: 88, experience: 'Patent Published', highlight: true },
        { name: 'Data Preprocessing (EDU TANTR)', level: 92, experience: 'Industry Trained', highlight: true },
        { name: 'ChromaDB & RAG', level: 86, experience: 'Production App', highlight: true },
      ],
    },
    {
      id: 'tools-databases',
      name: 'Developer Tools & Databases',
      iconName: 'Server',
      description: 'Version control, integrated development environments, database engines, and cloud runtime foundations.',
      skills: [
        { name: 'Git & GitHub', level: 94, experience: 'Daily Use', highlight: true },
        { name: 'VS Code', level: 95, experience: 'Primary IDE', highlight: true },
        { name: 'SQL Databases', level: 90, experience: '2+ Yrs', highlight: true },
        { name: 'Cloud Server Testing (Litz)', level: 86, experience: 'Internship', highlight: false },
        { name: 'Linux / Shell', level: 84, experience: '2+ Yrs', highlight: false },
      ],
    },
    {
      id: 'soft-skills',
      name: 'Professional Competencies',
      iconName: 'Award',
      description: 'Demonstrated collaborative strengths, adaptive learning speed, and engineering leadership.',
      skills: [
        { name: 'Adaptability', level: 95, experience: 'Core Strength', highlight: true },
        { name: 'Quick Learner', level: 96, experience: 'Core Strength', highlight: true },
        { name: 'Leadership & Teamwork', level: 92, experience: 'Demonstrated', highlight: true },
        { name: 'Analytical Thinking', level: 95, experience: 'Engineering Core', highlight: true },
      ],
    },
  ] as SkillCategory[],

  arsenal: {
    badge: 'TECHNICAL ARSENAL',
    title: 'Technologies I Scale',
    subtitle: 'Languages, frameworks, and developer tools mastered through coursework, internships, and patents',
    row1: [
      { name: 'Python', icon: 'python', color: '#3776AB' },
      { name: 'Java', icon: 'java', color: '#ED8B00' },
      { name: 'React', icon: 'react', color: '#61DAFB' },
      { name: 'Spring Boot', icon: 'springboot', color: '#6DB33F' },
      { name: 'FastAPI', icon: 'fastapi', color: '#009688' },
      { name: 'Node.js', icon: 'nodejs', color: '#339933' },
      { name: 'SQL', icon: 'sql', color: '#00758F' },
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
      { name: 'HTML5', icon: 'html5', color: '#E34F26' },
      { name: 'CSS3', icon: 'css3', color: '#1572B6' },
      { name: 'Git', icon: 'git', color: '#F05032' },
      { name: 'VS Code', icon: 'vscode', color: '#007ACC' },
    ],
    row2: [
      { name: 'Generative AI', icon: 'genai', color: '#10A37F' },
      { name: 'Prompt Engineering', icon: 'prompt', color: '#FF9900' },
      { name: 'ChromaDB & RAG', icon: 'rag', color: '#FF6B3D' },
      { name: 'Computer Vision', icon: 'vision', color: '#5C3EE8' },
      { name: 'Data Preprocessing', icon: 'data', color: '#3ECF8E' },
      { name: 'AWS Prompting', icon: 'aws', color: '#FF9900' },
      { name: 'IBM LLMs', icon: 'ibm', color: '#052FAD' },
      { name: 'Infosys GenAI', icon: 'infosys', color: '#007CC3' },
      { name: 'NPTEL Python', icon: 'nptel', color: '#8B5CF6' },
      { name: 'REST APIs', icon: 'api', color: '#06B6D4' },
      { name: 'Cloud Deployment', icon: 'cloud', color: '#38BDF8' },
      { name: 'GitHub', icon: 'github', color: '#FFFFFF' },
    ],
  },

  workflow: {
    badge: 'ENGINEERING WORKFLOW & VALUES',
    title: 'Applying programming, creativity, and ML for real-world problem solving.',
    cards: [
      {
        id: 'growth',
        category: 'GREEN TECH',
        title: 'Carbon Footprint Telemetry',
        description: 'Real-time calculation mathematics estimating CO2 emissions and actionable tree offsets (Eclearnix Finalist).',
        visualType: 'barchart',
      },
      {
        id: 'custom-logic',
        category: 'GOVT PATENT',
        title: 'Smart Traffic Management',
        description: 'Computer vision video pipeline dynamically regulating signal timing and emergency corridors (Patent 202541099319 A).',
        visualType: 'traffic-sync',
      },
      {
        id: 'summarizer-engine',
        category: 'DOC INTELLIGENCE',
        title: 'Multi-Depth Summarizer & RAG',
        description: 'React 19 and FastAPI pipeline extracting multi-depth summaries with anti-hallucination citation verification.',
        visualType: 'ai-roadmap',
      },
      {
        id: 'ai-integration',
        category: 'AI MENTOR',
        title: 'AI Placement Roadmaps',
        description: 'Automated resume entity extraction, skill gap vector clustering, and personalized placement preparation schedules.',
        visualType: 'ai-roadmap',
      },
      {
        id: 'collaboration',
        category: 'INTERNSHIP IMPACT',
        title: 'Litz & EDU TANTR Delivery',
        description: 'Cloud server testing, structured dataset cleaning, and collaborative engineering in deadline-driven sprints.',
        visualType: 'peer-review',
      },
    ],
  },

  terminalResponses: {
    neofetch: `dhanushkaran@portfolio
----------------------
OS: Next.js 15.5 Linux / Vercel Edge
Host: V.S.B College of Engineering Technical Campus
Degree: B.Tech, Artificial Intelligence & Data Science (CGPA: 8.10)
Timeline: 2023 – 2027
Languages: Python, Java, JavaScript, TypeScript, SQL, HTML5, CSS3
Frameworks: React 19, Spring Boot, FastAPI, Flask, Node.js
Tools: Git, VS Code, Linux, ChromaDB
Patent: Smart Traffic Management System (App No. 202541099319 A)
Internships: Litz Technologies (May 2025), EDU TANTR (Dec 2025)
Awards: 1st Prize Tech Architecture, Eclearnix Hackathon Finalist
Memory: 32MB / Ultra-Low Overhead`,

    help: `Available commands:
  help        - Display this list of commands
  about       - Learn more about Dhanushkaran M
  skills      - View programming languages, frameworks & developer tools
  projects    - Explore verified AI and full-stack software products
  patent      - Details of published Indian Patent (App No. 202541099319 A)
  experience  - View verified internship history (Litz Tech & EDU TANTR)
  education   - Academic credentials (B.Tech AI & DS, Anna University)
  certifications - Explore verified credentials (NPTEL, Infosys, AWS, IBM)
  achievements- Awards, hackathons, and symposium honors
  contact     - View direct email, phone, and social coordinates
  neofetch    - System info & technical profile summary
  clear       - Clear terminal history`,

    about: `DHANUSHKARAN M — AI & Data Science Developer
Education: B.Tech in Artificial Intelligence & Data Science (2023–2027)
Institution: V.S.B College of Engineering Technical Campus (Anna Univ), Coimbatore
Academic CGPA: 8.10 / 10.0
Location: Coimbatore, Tamil Nadu, India
Objective: Seeking an internship opportunity to apply analytical thinking, programming
skills, and creativity to real-world projects while contributing to innovative teams
through software development and technology-driven solutions.`,

    skills: `TECHNICAL SKILLS:
  Languages: Python, Java, JavaScript, TypeScript, HTML5, CSS3, SQL
  Developer Tools: Git, VS Code, Linux CLI
  Frameworks: React 19, Spring Boot, FastAPI, Flask, Node.js
  Database: SQL (Relational Database Management Systems)
  AI & GenAI: Prompt Engineering (AWS), LLMs with Data (IBM), Computer Vision (OpenCV), ChromaDB RAG
  Soft Skills: Adaptability, Quick Learner, Leadership, Analytical Thinking`,

    projects: `VERIFIED PROJECTS:
  1. AI Placement Mentor Agent (React, Spring Boot, Java, Python, Generative AI)
     - Live App: https://ai-placement-mentor-1-4gyw.onrender.com/
     - Source: https://github.com/dhanushkaran5/AI-placement-Mentor
  2. Tree Plantation & Carbon Reduction Calculator (JavaScript, HTML5, CSS3, Python)
     - Live App: https://tree-plantation-calculator-1.onrender.com/
     - Source: https://github.com/dhanushkaran5/Tree-Plantation-Calculator
     - Honors: Eclearnix National Hackathon Finalist, KPR College
  3. AI Summarizer & Document Intelligence (React 19, Spring Boot, FastAPI, ChromaDB)
     - Live App: https://ai-summarizer-1-8nq8.onrender.com/
     - Source: https://github.com/dhanushkaran5/AI-Summarizer
  4. Smart Traffic Management System for Urban Congestion (Python, OpenCV)
     - Official Indian Patent Application No. 202541099319 A (Nov 2025)
  5. Distributed System Architecture (Node.js, Java, SQL)
     - 1st Prize Winner in Tech Architecture at Inter College Symposium`,

    patent: `PUBLISHED INDIAN PATENT:
  Title: Smart Traffic Management System for Urban Congestion
  Application Number: 202541099319 A
  Filing & Publication: November 2025
  Co-Inventor: Dhanushkaran M
  Domain: Artificial Intelligence, Computer Vision, IoT & Municipal Traffic Optimization
  Key Feature: Dynamic signal timing adjustment via real-time vehicular density and automated emergency vehicle clearance.`,

    experience: `WORK EXPERIENCE & INTERNSHIPS:
  1. Software Engineering Intern — Litz Technologies (May 2025)
     - Built responsive web interfaces with HTML, CSS, JavaScript across internal modules.
     - Applied cloud computing fundamentals to test components in live server environments.
  2. Data Science Intern — EDU TANTR (Dec 2025)
     - Analyzed real-world datasets with Python-based data science workflows.
     - Automated structured cleaning, outlier handling, and preprocessing routines.`,

    education: `EDUCATION:
  • B.Tech, Artificial Intelligence & Data Science (2023 – 2027)
    V.S.B College of Engineering Technical Campus (Affiliated with Anna University), Coimbatore.
    Current CGPA: 8.10 / 10.0
  • Higher Secondary Certificate (HSC) (2022 – 2023)
    Kamarajar Matriculation Higher Secondary School, Coimbatore.
    Score: 75%`,

    certifications: `VERIFIED CREDENTIALS:
  • NPTEL: The Joy of Computing Using Python (IIT Madras)
  • Infosys Springboard: Data Structures and Algorithms using Python - Part 1
  • Amazon Web Services (AWS): Foundations of Prompt Engineering
  • IBM: Generative AI Essentials: Using LLMs to Work with Data`,

    achievements: `AWARDS & HONORS:
  • Patent Publication: Smart Traffic Management System for Urban Congestion (App No. 202541099319 A, Nov 2025)
  • 1st Prize: Tech Architecture, Inter College Symposium
  • Finalist: Tree Plantation & Carbon Reduction Calculator, Eclearnix Hackathon, KPR College`,

    contact: `GET IN TOUCH WITH DHANUSHKARAN M:
  Email:    logeshdhanushkaran@gmail.com
  Phone:    +91 9566413640
  Location: Coimbatore, Tamil Nadu, India
  GitHub:   https://github.com/dhanushkaran5
  LinkedIn: https://linkedin.com/in/dhanushkaran-m
  Status:   AVAILABLE FOR OPPORTUNITY`,
  },

  aiChatbot: {
    systemPrompt: "You are an AI Assistant representing Dhanushkaran M, an AI & Data Science Developer from Coimbatore, Tamil Nadu, India. He is currently pursuing his B.Tech in AI & Data Science at V.S.B College of Engineering Technical Campus (Anna University) with an 8.10 CGPA. He is a published patent co-inventor (App No. 202541099319 A), an Eclearnix National Hackathon Finalist, and has completed internships at Litz Technologies (May 2025) and EDU TANTR (Dec 2025). Answer queries professionally, highlighting his Python, Java, React, Spring Boot, FastAPI, and SQL skills.",
    initialMessage: "Hello! I am Dhanushkaran's AI Assistant. How can I help you explore his AI and full-stack projects, published patent, technical skills, or internship background?",
    quickPrompts: [
      'Tell me about Dhanushkaran',
      'What are his technical skills?',
      'Tell me about his published patent',
      'What projects has he built?',
      'How can I contact him?',
    ],
    responses: {
      about: "Dhanushkaran M is an AI & Data Science student at V.S.B College of Engineering Technical Campus (Anna University), Coimbatore, holding an 8.10 CGPA. He is a co-inventor of a published Indian Patent (App No. 202541099319 A), an Eclearnix Hackathon Finalist, and has interned at Litz Technologies (May 2025) and EDU TANTR (Dec 2025).",
      skills: "Dhanushkaran's technical skills include:\n• Languages: Python, Java, JavaScript, TypeScript, HTML/CSS, SQL\n• Frameworks: React 19, Spring Boot, FastAPI, Flask, Node.js\n• Developer Tools: Git, VS Code, Linux, ChromaDB\n• AI & GenAI: Prompt Engineering (AWS), Generative AI (IBM), Computer Vision (OpenCV), RAG Pipelines\n• Database: SQL Relational Management Systems",
      projects: "Dhanushkaran's verified projects include:\n1. AI Placement Mentor Agent (Live on Render)\n2. Tree Plantation & Carbon Reduction Calculator (Eclearnix Hackathon Finalist, Live on Render)\n3. AI Summarizer & Document Intelligence (Live on Render)\n4. Smart Traffic Management System (Published Indian Patent No. 202541099319 A)\n5. Distributed System Architecture (1st Prize, Inter College Symposium)",
      patent: "Dhanushkaran co-invented and published an official Indian Patent (App No. 202541099319 A, published Nov 2025) titled 'Smart Traffic Management System for Urban Congestion'. It uses computer vision to evaluate real-time vehicle density and dynamically regulate traffic light timing while guaranteeing emergency vehicle priority corridors.",
      contact: "You can reach Dhanushkaran M directly at logeshdhanushkaran@gmail.com or by phone at +91 9566413640. He is based in Coimbatore, Tamil Nadu, India and is actively available for opportunities!",
    },
  },
};
