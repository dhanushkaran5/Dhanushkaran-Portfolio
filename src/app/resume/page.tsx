import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, Download, ExternalLink, FileText, CheckCircle2, Award, Briefcase, GraduationCap, CodeXml } from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: `Resume — ${PORTFOLIO_DATA.personal.name}`,
  description: `Official engineering resume and credentials of ${PORTFOLIO_DATA.personal.name} (${PORTFOLIO_DATA.personal.role}).`,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0F0E0E] text-white selection:bg-white/20 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 md:px-8 pt-32 sm:pt-40 pb-24">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Title & Download CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-4">
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Official Curriculum Vitae</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
              style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
            >
              Resume &amp; Credentials
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 font-mono">
              {PORTFOLIO_DATA.personal.name} • {PORTFOLIO_DATA.personal.role}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Dhanushkaran_M_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] border border-white/10 text-white font-mono text-xs hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Tab</span>
            </a>
          </div>
        </div>

        {/* Resume Overview Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Education Card */}
          <div className="p-7 rounded-3xl bg-[#141313]/85 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-mono text-emerald-400">CGPA: 8.10</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">B.Tech, AI &amp; Data Science</h3>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">V.S.B College of Engineering (2023 – 2027)</p>
              <p className="text-xs text-zinc-300 mt-3">Affiliated with Anna University, Coimbatore. Specializing in machine learning, Python, Java, and scalable architectures.</p>
            </div>
          </div>

          {/* Key Milestone Card */}
          <div className="p-7 rounded-3xl bg-[#141313]/85 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                <Award className="w-4 h-4 text-[#ff6b3d]" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff6b3d]/10 text-[#ff8e66] border border-[#ff6b3d]/20">
                PUBLISHED PATENT
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Smart Traffic System</h3>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">Indian Patent No. 202541099319 A (Nov 2025)</p>
              <p className="text-xs text-zinc-300 mt-3">Dynamic signal regulation via real-time computer vision vehicle density and automated emergency vehicle priority.</p>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="p-7 rounded-3xl bg-[#141313]/85 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-mono text-zinc-500">INTERNSHIPS</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Dual Industry Internships</h3>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">Litz Technologies &amp; EDU TANTR (2025)</p>
              <p className="text-xs text-zinc-300 mt-3">Built responsive cloud-deployed web modules and engineered Python data science cleaning &amp; preprocessing pipelines.</p>
            </div>
          </div>
        </div>

        {/* Embedded Resume Preview Container */}
        <div className="p-4 sm:p-6 rounded-3xl bg-[#141313]/90 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
            <span>PREVIEW // DHANUSHKARAN_M_RESUME.PDF</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Resume Verified</span>
            </div>
          </div>

          <div className="w-full h-[700px] sm:h-[850px] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/[0.06]">
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0"
              className="w-full h-full"
              title="Dhanushkaran M Resume"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
