export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeLabel: string;
  note?: string;
}

export const educationData: Education[] = [
  {
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'V.S.B College of Engineering Technical Campus',
    period: '2023 – 2027',
    grade: '8.10',
    gradeLabel: 'CGPA',
    note: 'Affiliated with Anna University, Coimbatore.',
  },
  {
    degree: 'HSC',
    institution: 'Kamarajar Matriculation Higher Secondary School',
    period: '2022 – 2023',
    grade: '75%',
    gradeLabel: 'Percentage',
  },
];
