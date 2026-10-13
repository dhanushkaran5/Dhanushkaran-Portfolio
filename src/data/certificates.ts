export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerOrg?: string;
  year: string;
  issueDate?: string;
  verificationNo: string;
  verificationUrl?: string;
  category: string;
  skills: string[];
  driveFileId: string;
  credentialUrl: string;
  previewUrl: string;
  credentialType: 'pdf' | 'image' | 'external';
  badgeIcon: string;
  issuedTo?: string;
  score?: string;
  description?: string;
  image?: string;
}

/**
 * Helper to generate official Google Drive URLs
 */
export function getGoogleDriveViewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export function getGoogleDrivePreviewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

/**
 * Centralized Single Source of Truth for verified certifications.
 * Mapped directly to verified Google Drive document contents.
 */
export const CERTIFICATES_DATA: CertificationItem[] = [
  {
    id: 'cert-nptel',
    title: 'The Joy of Computing Using Python',
    issuer: 'NPTEL (IIT Madras)',
    issuerOrg: 'National Programme on Technology Enhanced Learning / IIT Madras',
    year: '2024',
    issueDate: 'Jul – Oct 2024',
    verificationNo: 'Roll: NPTEL24CS113S852404255',
    verificationUrl: 'https://nptel.ac.in/noc',
    category: 'Programming & Algorithms',
    skills: ['Python', 'Computational Thinking', 'Data Structures', 'Algorithmic Problem Solving'],
    driveFileId: '11If_X6chVJPBiwoCO0tCqk4oJUa9waGP',
    credentialUrl: 'https://drive.google.com/file/d/11If_X6chVJPBiwoCO0tCqk4oJUa9waGP/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/file/d/11If_X6chVJPBiwoCO0tCqk4oJUa9waGP/preview',
    credentialType: 'pdf',
    badgeIcon: 'Award',
    issuedTo: 'Dhanush Karan',
    score: '56% (Assignments: 24.88/25, Proctored Exam: 31.5/75)',
    description: '12-week comprehensive program covering core computational paradigms, algorithmic logic, and Python programming by IIT Madras.',
  },
  {
    id: 'cert-infosys',
    title: 'Data Structures and Algorithms using Python - Part 1',
    issuer: 'Infosys Springboard',
    issuerOrg: 'Infosys Limited',
    year: '2025',
    issueDate: 'May 8, 2025',
    verificationNo: 'Verified Course Certificate',
    verificationUrl: 'https://verify.onwingspan.com',
    category: 'Data Structures & Algorithms',
    skills: ['Python DSA', 'Algorithm Design', 'Time Complexity', 'Problem Solving'],
    driveFileId: '1SirkPfEJKHEuOr8Q5BrSMXyRAq7Y0zBI',
    credentialUrl: 'https://drive.google.com/file/d/1SirkPfEJKHEuOr8Q5BrSMXyRAq7Y0zBI/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/file/d/1SirkPfEJKHEuOr8Q5BrSMXyRAq7Y0zBI/preview',
    credentialType: 'pdf',
    badgeIcon: 'Cpu',
    issuedTo: 'Dhanushkaran M',
    description: 'In-depth certification covering foundational data structures, algorithmic design patterns, and asymptotic complexity in Python.',
  },
  {
    id: 'cert-aws',
    title: 'Foundations of Prompt Engineering',
    issuer: 'Amazon Web Services (AWS)',
    issuerOrg: 'AWS Training and Certification',
    year: '2026',
    issueDate: 'July 16, 2026',
    verificationNo: 'AWS Training & Certification',
    category: 'Prompt Engineering & GenAI',
    skills: ['Prompt Engineering', 'Foundation Models', 'Amazon Bedrock', 'In-Context Learning'],
    driveFileId: '1v-lpbWR_LpKbGD5Gyq_WMB36IMktqp9q',
    credentialUrl: 'https://drive.google.com/file/d/1v-lpbWR_LpKbGD5Gyq_WMB36IMktqp9q/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/file/d/1v-lpbWR_LpKbGD5Gyq_WMB36IMktqp9q/preview',
    credentialType: 'pdf',
    badgeIcon: 'Sparkles',
    issuedTo: 'Dhanushkaran M',
    description: 'Official AWS certification on foundation models, prompt formulation patterns, model parameters, and generative AI workflows with Amazon Bedrock.',
  },
  {
    id: 'cert-ibm',
    title: 'Generative AI Essentials: Using LLMs to Work with Data',
    issuer: 'IBM',
    issuerOrg: 'IBM SkillsBuild',
    year: '2026',
    issueDate: 'July 17, 2026',
    verificationNo: 'Credly Verified Credential',
    verificationUrl: 'https://www.credly.com/go/LdTiWa8e',
    category: 'LLMs & Data Intelligence',
    skills: ['Generative AI', 'LLMs with Tabular Data', 'Data Extraction', 'AI Ethics'],
    driveFileId: '1Gn_DEuM9QksKd_HwQCnXfW5aBPBBkZ3W',
    credentialUrl: 'https://drive.google.com/file/d/1Gn_DEuM9QksKd_HwQCnXfW5aBPBBkZ3W/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/file/d/1Gn_DEuM9QksKd_HwQCnXfW5aBPBBkZ3W/preview',
    credentialType: 'pdf',
    badgeIcon: 'Layers',
    issuedTo: 'Dhanushkaran M',
    description: 'IBM credential focusing on leveraging Large Language Models for automated dataset analysis, tabular data transformation, and ethical AI deployment.',
  },
];

export function getCertificateById(id: string): CertificationItem | undefined {
  return CERTIFICATES_DATA.find((cert) => cert.id === id);
}
