export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Litz Technologies',
    role: 'Intern',
    period: 'May 2025',
    responsibilities: [
      'Built responsive web interfaces using HTML, CSS, and JavaScript across multiple internal modules.',
      'Applied cloud computing fundamentals to deploy and test web components in a live server environment.',
      'Collaborated in technical design discussions and contributed implementation ideas.',
    ],
  },
  {
    company: 'EDU TANTR',
    role: 'Intern',
    period: 'December 2025',
    responsibilities: [
      'Analyzed real-world datasets using Python-based data science workflows.',
      'Worked on structured data cleaning and preprocessing.',
      'Applied analytical and problem-solving techniques in collaborative, deadline-driven tasks.',
      'Strengthened practical data science and critical-thinking skills.',
    ],
  },
];
