export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  verificationNo: string;
  category: string;
  skills: string[];
  credentialUrl: string;
  badgeIcon: string;
  image?: string;
  issuedTo?: string;
}

export const CERTIFICATES_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'The Joy of Computing Using Python',
    issuer: 'NPTEL (IIT Madras)',
    year: '2025',
    verificationNo: 'Verified Course Certificate',
    category: 'Programming & Algorithms',
    skills: ['Python', 'Computational Thinking', 'Data Structures', 'Algorithmic Problem Solving'],
    credentialUrl: 'https://drive.google.com/file/d/1SirkPfEJKHEuOr8Q5BrSMXyRAq7Y0zBI/view?usp=drive_link',
    badgeIcon: 'Award',
    issuedTo: 'Dhanushkaran M',
  },
  {
    id: 'cert-2',
    title: 'Data Structures and Algorithms Using Python; Generative AI',
    issuer: 'INFOSYS SPRINGBOARD',
    year: '2025',
    verificationNo: 'Verified Course Certificate',
    category: 'Data Structures & GenAI',
    skills: ['Python DSA', 'Generative AI', 'Time Complexity', 'Prompt Formulation'],
    credentialUrl: 'https://drive.google.com/file/d/1v-lpbWR_LpKbGD5Gyq_WMB36IMktqp9q/view?usp=drive_link',
    badgeIcon: 'Cpu',
    issuedTo: 'Dhanushkaran M',
  },
  {
    id: 'cert-3',
    title: 'Foundations of Prompt Engineering',
    issuer: 'AMAZON WEB SERVICES (AWS)',
    year: '2025',
    verificationNo: 'Verified Course Certificate',
    category: 'Prompt Engineering & LLMs',
    skills: ['Prompt Engineering', 'Foundation Models', 'Amazon Bedrock', 'In-Context Learning'],
    credentialUrl: 'https://drive.google.com/file/d/144nBcidyfSx8yAf9eA0SgnuMPqHAbznU/view?usp=drive_link',
    badgeIcon: 'Sparkles',
    issuedTo: 'Dhanushkaran M',
  },
  {
    id: 'cert-4',
    title: 'Generative AI Essentials: Using LLMs to Work with Data',
    issuer: 'IBM',
    year: '2025',
    verificationNo: 'Verified Course Certificate',
    category: 'LLMs & Data Intelligence',
    skills: ['Generative AI', 'LLMs with Tabular Data', 'Data Extraction', 'AI Ethics'],
    credentialUrl: 'https://drive.google.com/file/d/1Gn_DEuM9QksKd_HwQCnXfW5aBPBBkZ3W/view?usp=drive_link',
    badgeIcon: 'Layers',
    issuedTo: 'Dhanushkaran M',
  },
];
