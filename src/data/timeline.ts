export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  date: string;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
  badge: string;
  iconName: string;
}

export const WORK_EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'litz-technologies',
    company: 'Litz Technologies',
    role: 'Software Engineering Intern',
    period: 'May 2025',
    date: 'May 2025',
    location: 'Coimbatore, India',
    badge: 'SOFTWARE INTERNSHIP',
    description:
      'Developed responsive frontend interfaces and deployed components to live enterprise server environments under senior developer mentorship.',
    bullets: [
      'Built responsive web interfaces using HTML, CSS, and JavaScript across multiple internal modules, improving UI consistency and load performance.',
      'Applied cloud computing fundamentals to deploy and test web components in a live server environment under senior developer guidance.',
      'Collaborated in technical design discussions, contributing implementation ideas adopted into the final deployment plan.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Cloud Computing', 'Live Server Testing', 'Git'],
    iconName: 'Briefcase',
  },
  {
    id: 'edu-tantr',
    company: 'EDU TANTR',
    role: 'Data Science Intern',
    period: 'Dec 2025',
    date: 'Dec 2025',
    location: 'Coimbatore, India',
    badge: 'DATA SCIENCE INTERNSHIP',
    description:
      'Engineered Python data science pipelines, cleaning and preprocessing heterogeneous datasets for structured analytical modeling.',
    bullets: [
      'Analyzed real-world datasets using Python-based data science workflows, improving data quality through structured cleaning and preprocessing.',
      'Implemented analytical and problem-solving techniques across assigned tasks, delivering results within a collaborative, deadline-driven environment.',
      'Strengthened data science and critical-thinking skills through hands-on training in industry-standard workflows and best practices.',
    ],
    technologies: ['Python', 'Data Science Workflows', 'Data Preprocessing', 'EDA', 'Pandas', 'NumPy'],
    iconName: 'TrendingUp',
  },
];

export interface JourneyMilestone {
  year: string;
  phase: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  iconName: string;
}

export const TIMELINE_DATA: JourneyMilestone[] = [
  {
    year: '2023 – 2027',
    phase: 'Academic Education',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    description:
      'V.S.B College of Engineering Technical Campus (Affiliated with Anna University), Coimbatore. Maintaining an 8.10 CGPA while mastering machine learning, data structures, and enterprise full-stack development.',
    highlights: [
      'Current Academic CGPA: 8.10 / 10.0',
      'Specialized in Python, Java, Data Structures, Algorithms, and SQL',
      'Active leadership in technical symposiums and university hackathons',
    ],
    technologies: ['Python', 'Java', 'Data Structures', 'Algorithms', 'SQL', 'Machine Learning'],
    iconName: 'GraduationCap',
  },
  {
    year: 'May 2025',
    phase: 'Industry Internship',
    title: 'Intern — Litz Technologies',
    description:
      'Built responsive web interfaces across internal modules and applied cloud computing fundamentals for live server testing under senior engineering mentorship.',
    highlights: [
      'Constructed responsive web interfaces with HTML, CSS, JavaScript',
      'Deployed and validated components in live server environments',
      'Contributed architectural ideas adopted into production plans',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Cloud Computing', 'Git'],
    iconName: 'Briefcase',
  },
  {
    year: 'Nov 2025',
    phase: 'Govt. Patent Publication',
    title: 'Smart Traffic Management System for Urban Congestion',
    description:
      'Co-invented and published Indian Patent Application No. 202541099319 A. Real-time computer vision system dynamically regulating traffic light intervals and emergency priority clearance.',
    highlights: [
      'Official Indian Patent Application No. 202541099319 A published',
      'Real-time OpenCV and deep learning vehicle density extraction',
      'Automated emergency vehicle pre-emptive clearance corridors',
    ],
    technologies: ['Python', 'Computer Vision', 'OpenCV', 'Deep Learning', 'IoT'],
    iconName: 'ShieldCheck',
  },
  {
    year: 'Dec 2025',
    phase: 'Industry Internship',
    title: 'Intern — EDU TANTR',
    description:
      'Analyzed real-world datasets with Python-based data science workflows, executing structured preprocessing, cleaning routines, and exploratory data analysis.',
    highlights: [
      'Processed real-world datasets with automated cleaning pipelines',
      'Delivered structured exploratory analysis in deadline-driven sprints',
      'Earned certifications across AWS, IBM, and Infosys Springboard',
    ],
    technologies: ['Python', 'Data Science', 'Data Preprocessing', 'Pandas', 'NumPy'],
    iconName: 'TrendingUp',
  },
];
