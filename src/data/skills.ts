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

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    iconName: 'Layout',
    description: 'Modern, reactive interfaces with fluid micro-interactions, responsive grids, and strict accessibility.',
    skills: [
      { name: 'React 19', level: 95, experience: '3+ yrs', highlight: true },
      { name: 'Next.js 15', level: 95, experience: '2+ yrs', highlight: true },
      { name: 'TypeScript', level: 92, experience: '2+ yrs', highlight: true },
      { name: 'Tailwind CSS', level: 96, experience: '3+ yrs', highlight: true },
      { name: 'Framer Motion', level: 90, experience: '2+ yrs', highlight: true },
      { name: 'HTML5 & CSS3', level: 98, experience: '4+ yrs' },
      { name: 'Responsive Design', level: 95, experience: '3+ yrs' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Engineering',
    iconName: 'Server',
    description: 'Scalable services, business logic, microservices, and reliable API architectures.',
    skills: [
      { name: 'Node.js', level: 90, experience: '2+ yrs', highlight: true },
      { name: 'Spring Boot', level: 88, experience: '2+ yrs', highlight: true },
      { name: 'Java (Core & Advanced)', level: 92, experience: '3+ yrs', highlight: true },
      { name: 'Python & FastAPI', level: 89, experience: '2+ yrs', highlight: true },
      { name: 'Express.js', level: 88, experience: '2+ yrs' },
      { name: 'RESTful API Design', level: 94, experience: '3+ yrs', highlight: true },
      { name: 'Microservices', level: 82, experience: '1+ yrs' },
    ],
  },
  {
    id: 'database',
    name: 'Databases & Storage',
    iconName: 'Database',
    description: 'High-throughput relational databases, document stores, and memory caching.',
    skills: [
      { name: 'PostgreSQL', level: 88, experience: '2+ yrs', highlight: true },
      { name: 'MongoDB', level: 90, experience: '2+ yrs', highlight: true },
      { name: 'MySQL', level: 90, experience: '3+ yrs', highlight: true },
      { name: 'Redis Caching', level: 82, experience: '1+ yr' },
      { name: 'Prisma ORM', level: 86, experience: '2+ yrs' },
      { name: 'Database Optimization', level: 85, experience: '2+ yrs' },
    ],
  },
  {
    id: 'aiml',
    name: 'AI & Machine Learning',
    iconName: 'Brain',
    description: 'Applied machine learning, generative AI, LLMs, computer vision, and predictive modeling.',
    skills: [
      { name: 'LLMs & Prompt Engineering', level: 92, experience: '2+ yrs', highlight: true },
      { name: 'PyTorch & TensorFlow', level: 85, experience: '2+ yrs', highlight: true },
      { name: 'Computer Vision (OpenCV/MediaPipe)', level: 88, experience: '2+ yrs', highlight: true },
      { name: 'LangChain & RAG', level: 86, experience: '1+ yr', highlight: true },
      { name: 'Hugging Face Transformers', level: 87, experience: '2+ yrs' },
      { name: 'Pandas & NumPy', level: 92, experience: '3+ yrs' },
      { name: 'Scikit-Learn', level: 88, experience: '2+ yrs' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    iconName: 'Cloud',
    description: 'Containerization, automated deployment pipelines, cloud hosting, and infrastructure monitoring.',
    skills: [
      { name: 'Git & GitHub Workflows', level: 96, experience: '4+ yrs', highlight: true },
      { name: 'Docker Containerization', level: 84, experience: '1+ yr', highlight: true },
      { name: 'Vercel Deployment', level: 96, experience: '2+ yrs', highlight: true },
      { name: 'Render & AWS Basics', level: 85, experience: '2+ yrs' },
      { name: 'CI/CD Pipelines', level: 82, experience: '1+ yr' },
      { name: 'Postman & API Testing', level: 92, experience: '3+ yrs' },
    ],
  },
  {
    id: 'practices',
    name: 'Specialized & Soft Skills',
    iconName: 'ShieldCheck',
    description: 'Engineering excellence, problem-solving, architectural clarity, and team leadership.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 90, experience: '3+ yrs', highlight: true },
      { name: 'System Architecture', level: 86, experience: '2+ yrs', highlight: true },
      { name: 'Clean Code & Refactoring', level: 94, experience: '3+ yrs' },
      { name: 'Technical Documentation', level: 92, experience: '3+ yrs' },
      { name: 'Agile & Collaborative Git', level: 90, experience: '2+ yrs' },
    ],
  },
];
