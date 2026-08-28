export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  liveDemo: string;
  github: string;
  liveDemoAvailable: boolean;
  githubAvailable: boolean;
}

export const projects: Project[] = [
  {
    id: 'ai-placement-mentor',
    title: 'AI Placement Mentor Agent',
    description:
      'An AI-powered career guidance platform that analyzes resumes, identifies skill gaps, recommends suitable job roles and companies, and generates personalized placement preparation roadmaps.',
    overview:
      'AI Placement Mentor Agent is an intelligent career guidance system designed to help students and professionals prepare for job placements more effectively.',
    problem:
      'Students often lack personalized guidance for placement preparation, leading to misaligned career goals and inadequate skill development.',
    solution:
      'An AI-powered platform that automates resume analysis, identifies skill gaps, and provides tailored recommendations for job roles, companies, and preparation roadmaps.',
    features: [
      'Resume Analysis',
      'Skill Gap Identification',
      'Job Role Recommendations',
      'Company Recommendations',
      'Placement Preparation Roadmap',
      'AI Interview Preparation',
    ],
    technologies: ['React', 'Spring Boot', 'AI', 'LLM'],
    liveDemo: '#',
    github: '#',
    liveDemoAvailable: false,
    githubAvailable: false,
  },
  {
    id: 'tree-plantation-calculator',
    title: 'Tree Plantation & Carbon Reduction Calculator',
    description:
      'A web-based sustainability application that estimates CO₂ emissions, recommends tree-planting offsets, and provides personalized sustainability insights through an interactive dashboard.',
    overview:
      'A sustainability-focused web application that empowers users to understand and offset their carbon footprint through data-driven tree plantation recommendations.',
    problem:
      'Individuals and organizations struggle to quantify their carbon impact and identify practical steps toward environmental sustainability.',
    solution:
      'An interactive calculator that estimates carbon emissions, recommends appropriate tree-planting offsets, and visualizes sustainability data through intuitive dashboards.',
    features: [
      'Carbon Footprint Calculation',
      'CO₂ Estimation',
      'Tree Plantation Offset',
      'Interactive Dashboard',
      'Data Visualization',
      'Sustainability Insights',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    liveDemo: 'https://tree-plantation-calculator-1.onrender.com/',
    github: '#',
    liveDemoAvailable: true,
    githubAvailable: false,
  },
];
