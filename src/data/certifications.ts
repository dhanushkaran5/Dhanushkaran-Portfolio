export interface Certification {
  provider: string;
  title: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    provider: 'NPTEL',
    title: 'The Joy of Computing Using Python',
    icon: 'BookOpen',
  },
  {
    provider: 'Infosys Springboard',
    title: 'Data Structures and Algorithms Using Python',
    icon: 'Code2',
  },
  {
    provider: 'Infosys Springboard',
    title: 'Generative AI',
    icon: 'Sparkles',
  },
  {
    provider: 'AWS',
    title: 'Foundations of Prompt Engineering',
    icon: 'Cloud',
  },
  {
    provider: 'IBM',
    title: 'Generative AI Essentials: Using LLMs to Work with Data',
    icon: 'Brain',
  },
];
