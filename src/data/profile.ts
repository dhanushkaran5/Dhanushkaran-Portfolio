export interface PersonalProfile {
  name: string;
  shortName: string;
  role: string;
  editorialHero: {
    line1: string;
    line2: string;
    line3: string;
  };
  cornerLeft: string;
  cornerRight: string;
  headline: string;
  subheadline: string;
  bio: string;
  location: string;
  timezone: string;
  email: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  resumeUrl: string;
  availabilityStatus: string;
  education: {
    degree: string;
    institution: string;
    years: string;
    score: string;
  };
  patent: {
    title: string;
    applicationNo: string;
    date: string;
  };
}

export interface StatItem {
  label: string;
  value: string;
  suffix: string;
  description: string;
}

export const PROFILE_DATA: PersonalProfile = {
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
};

export const STATS_DATA: StatItem[] = [
  { label: 'Verified Projects', value: '05', suffix: '+', description: 'Production AI & Web applications' },
  { label: 'Published Patent', value: '01', suffix: '', description: 'Indian Patent Application 202541099319 A' },
  { label: 'Academic CGPA', value: '8.10', suffix: '/10', description: 'B.Tech AI & Data Science' },
];
