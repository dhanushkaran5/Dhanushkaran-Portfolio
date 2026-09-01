import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const viewport: Viewport = {
  themeColor: '#08080A',
  width: 'device-width',
  initialScale: 1,
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dhanushkaran M — AI & Data Science Developer',
  description:
    'Portfolio of Dhanushkaran M, an AI & Data Science Developer specializing in full-stack web applications, Spring Boot, React, Next.js, and autonomous machine learning systems. Indian Patent published in urban smart mobility.',
  keywords: [
    'Dhanushkaran M',
    'Dhanushkaran portfolio',
    'AI Developer India',
    'Data Science Developer',
    'Full Stack Developer',
    'Spring Boot React Developer',
    'Smart Traffic Management Patent',
    'Tree Plantation Calculator',
    'Coimbatore Developer',
    'Anna University',
  ],
  authors: [{ name: 'Dhanushkaran M', url: 'https://github.com/dhanushkaran5' }],
  creator: 'Dhanushkaran M',
  metadataBase: new URL('https://dhanushkaran-portfolio.vercel.app'),
  openGraph: {
    title: 'Dhanushkaran M — AI & Data Science Developer',
    description:
      'Designing smart software to solve real challenges. Full-stack development, agentic AI systems, and published patent in smart systems.',
    url: 'https://dhanushkaran-portfolio.vercel.app',
    siteName: 'Dhanushkaran M Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhanushkaran M — AI & Data Science Developer',
    description:
      'Designing smart software to solve real challenges. Full-stack development, agentic AI systems, and published patent.',
  },
  icons: {
    icon: '/favicon.svg',
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
    name: PORTFOLIO_DATA.personal.name,
    jobTitle: PORTFOLIO_DATA.personal.role,
    description: PORTFOLIO_DATA.personal.subheadline,
    email: PORTFOLIO_DATA.personal.email,
    sameAs: [
      PORTFOLIO_DATA.personal.github,
      PORTFOLIO_DATA.personal.linkedin,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
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
        className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans bg-[#08080A] text-white antialiased selection:bg-emerald-500/30 selection:text-white relative`}
      >
        {/* Subtle noise layer */}
        <div className="fixed inset-0 pointer-events-none bg-noise z-10 opacity-60" />

        <LoadingScreen />
        <CustomCursor />

        <SmoothScrollProvider>
          <div className="relative z-20 flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
