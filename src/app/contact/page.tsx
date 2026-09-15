import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ContactSection from '@/components/contact/ContactSection';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: `Contact — ${PORTFOLIO_DATA.personal.name}`,
  description: `Get in touch with ${PORTFOLIO_DATA.personal.name} (${PORTFOLIO_DATA.personal.role}) for full-stack engineering, AI collaboration, and career inquiries.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0F0E0E] text-white selection:bg-white/20 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 w-full pt-28 sm:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
