export interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlight?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Patent Publication',
    subtitle: 'Smart Traffic Management System for Urban Congestion',
    description: 'Indian Patent Application No. 202541099319 A',
    icon: 'ScrollText',
    highlight: 'November 2025',
  },
  {
    title: '1st Prize',
    subtitle: 'Tech Architecture',
    description: 'Inter College Symposium',
    icon: 'Trophy',
  },
  {
    title: 'Hackathon Finalist',
    subtitle: 'Tree Plantation & Carbon Reduction Calculator',
    description: 'Eclearnix Hackathon — KPR College',
    icon: 'Award',
  },
];
