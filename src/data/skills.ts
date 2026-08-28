export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: ['Java'],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Spring Boot', 'Node.js'],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: ['SQL', 'MySQL'],
  },
  {
    title: 'AI / ML / LLM',
    icon: 'Brain',
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'Large Language Models (LLMs)',
      'Hugging Face',
    ],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'Core Software Development',
    icon: 'Cpu',
    skills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'REST APIs',
      'Problem Solving',
    ],
  },
];
