import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';
import LoadingScreen from '@/components/ui/LoadingScreen';
import GlobalFloatingControls from '@/components/ui/GlobalFloatingControls';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const viewport: Viewport = {
  themeColor: '#0F0E0E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Dhanushkaran M - AI & Data Science Developer',
  description:
    'Dhanushkaran M is an AI & Data Science student at V.S.B College of Engineering Technical Campus, specializing in Python, Java, Flask, Node.js, React, and SQL. Explore projects including AI Placement Mentor Agent, Tree Plantation & Carbon Reduction Calculator, and Patent-published Smart Traffic Management System.',
  keywords: [
    'Dhanushkaran M',
    'Dhanushkaran M portfolio',
    'Dhanushkaran M developer',
    'AI & Data Science Developer',
    'AI Placement Mentor Agent',
    'Carbon Footprint Calculator',
    'Smart Traffic Management System Patent',
    'Python Java Flask Developer',
    'Coimbatore Developer',
    'Tamil Nadu Developer',
  ],
  authors: [{ name: 'Dhanushkaran M', url: 'https://github.com/dhanushkaran5' }],
  creator: 'Dhanushkaran M',
  metadataBase: new URL('https://dhanushkaran-portfolio.vercel.app'),
  openGraph: {
    title: 'Dhanushkaran M - AI & Data Science Developer',
    description:
      'Dhanushkaran M is an AI & Data Science Developer specializing in Python, Java, Flask, Node.js, and AI-powered web applications.',
    url: 'https://dhanushkaran-portfolio.vercel.app',
    siteName: 'Dhanushkaran M - AI & Data Science Developer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhanushkaran M - AI & Data Science Developer',
    description:
      'Dhanushkaran M is an AI & Data Science Developer specializing in Python, Java, Flask, Node.js, and AI-powered web applications.',
    site: '@dhanushkaran_m',
    creator: '@dhanushkaran_m',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dhanushkaran M',
    jobTitle: 'AI & Data Science Developer',
    description: PORTFOLIO_DATA.personal.bio,
    email: PORTFOLIO_DATA.personal.email,
    telephone: PORTFOLIO_DATA.personal.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'V.S.B College of Engineering Technical Campus (Anna University)',
    },
    sameAs: [
      PORTFOLIO_DATA.personal.github,
      PORTFOLIO_DATA.personal.linkedin,
      PORTFOLIO_DATA.personal.instagram,
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Data Science',
      'Python',
      'Java',
      'Flask',
      'Node.js',
      'React',
      'Spring Boot',
      'SQL',
      'Git',
      'VS Code',
      'Machine Learning',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans bg-[#0F0E0E] text-white antialiased overflow-x-hidden selection:bg-white/20 selection:text-white relative`}
      >
        <div className="fixed inset-0 pointer-events-none bg-noise z-10 opacity-40" />

        <LoadingScreen />
        <CustomCursor />

        <SmoothScrollProvider>
          <div className="relative z-20 flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScrollProvider>

        {/* Global Floating Terminal, Chat Assistant, Status Badge & Vignette */}
        <GlobalFloatingControls />
      </body>
    </html>
  );
}
