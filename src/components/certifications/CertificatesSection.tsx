'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  FileCheck,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { CERTIFICATES_DATA } from '@/data/certificates';
import CertificateModal from './CertificateModal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Cpu,
  Layers,
  Award,
};

export default function CertificatesSection() {
  const certs = CERTIFICATES_DATA;
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCertificate = (certId: string) => {
    setSelectedCertId(certId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectCert = (id: string) => {
    setSelectedCertId(id);
  };

  // Open the certificate library modal (defaults to first certificate if none selected)
  const handleOpenLibrary = () => {
    if (!selectedCertId && certs.length > 0) {
      setSelectedCertId(certs[0].id);
    }
    setIsModalOpen(true);
  };

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 flex flex-col items-center justify-center bg-[#0B0B0C] overflow-hidden z-20"
      aria-label="Certificates and Verified Credentials"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff6b3d]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff8e66]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.04)]"
          >
            <Award className="w-3.5 h-3.5 text-[#ff6b3d]" />
            <span className="tracking-wider uppercase font-medium">Digital Credentials</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.05] text-white"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Certificates &amp;{' '}
            <span className="bg-gradient-to-r from-[#ff6b3d] via-[#ff9b73] to-[#ff6b3d] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,107,61,0.3)]">
              Credentials
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base font-mono text-zinc-400 tracking-wide"
          >
            Official verified documents from NPTEL (IIT Madras), Infosys Springboard, AWS, and IBM
          </motion.p>

          {/* Global Explore Certificate Library Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={handleOpenLibrary}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#ff6b3d]/50 text-xs font-mono text-zinc-200 hover:text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] group"
              aria-label="Explore all official credentials in interactive viewer"
            >
              <Eye className="w-3.5 h-3.5 text-[#ff6b3d] group-hover:scale-110 transition-transform" />
              <span>Explore Certificate Library</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ff6b3d]/15 text-[#ff8e66] border border-[#ff6b3d]/30 font-semibold">
                4 Documents
              </span>
            </button>
          </motion.div>
        </div>

        {/* 4 Responsive Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {certs.map((cert, index) => {
            const Icon = iconMap[cert.badgeIcon] || Award;

            return (
              <motion.div
                key={cert.id}
                role="button"
                tabIndex={0}
                onClick={() => handleOpenCertificate(cert.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenCertificate(cert.id);
                  }
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                aria-label={`View verified certificate for ${cert.title} issued by ${cert.issuer}`}
                className="group relative rounded-3xl p-6 sm:p-7 bg-[#131214]/85 backdrop-blur-xl border border-white/10 hover:border-[#ff6b3d]/40 shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden flex flex-col justify-between select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff6b3d]/60 focus:border-[#ff6b3d]"
              >
                {/* Shine Sweep Overlay on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                {/* Top Border Glow Accent */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6b3d]/30 to-transparent group-hover:via-[#ff6b3d]/70 transition-all" />

                <div className="relative z-10">
                  {/* Top Badge: Status & Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-[#ff8e66] bg-[#ff6b3d]/10 px-2.5 py-1 rounded-full border border-[#ff6b3d]/20">
                      <FileCheck className="w-3 h-3" />
                      <span>{cert.verificationNo}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 font-semibold">
                      {cert.year}
                    </span>
                  </div>

                  {/* Visual Header with Issuer */}
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 flex items-center justify-between mb-5 group-hover:bg-white/[0.05] transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Icon with subtle rotation on hover */}
                      <div className="w-10 h-10 rounded-xl bg-[#ff6b3d]/10 border border-[#ff6b3d]/25 flex items-center justify-center text-[#ff8e66] group-hover:rotate-6 group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                          Issuer
                        </div>
                        <div className="text-sm font-bold text-white tracking-tight truncate">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-emerald-400/50 group-hover:text-emerald-400 transition-colors shrink-0" />
                  </div>

                  {/* Title with min-h for grid consistency */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#ff9b73] transition-colors min-h-[3.25rem] flex items-start">
                    {cert.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 min-h-[3.5rem] items-start content-start">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-400 group-hover:border-white/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer with Direct Modal Trigger & Direct Google Drive Link */}
                <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono gap-2">
                  <span className="text-[11px] text-zinc-500 font-mono truncate">
                    Issued to: {cert.issuedTo || 'Dhanushkaran M'}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Primary Button: View Document in Interactive Modal */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenCertificate(cert.id);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] group/btn"
                      aria-label={`View Certificate Document for ${cert.title}`}
                    >
                      <span>View Document</span>
                      <Eye className="w-3.5 h-3.5 text-black transition-transform duration-300 group-hover/btn:scale-110" />
                    </button>

                    {/* Secondary Link: Open directly in Google Drive */}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-400 hover:text-white transition-colors"
                      aria-label={`Open ${cert.title} in Google Drive`}
                      title="Open directly in Google Drive"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Integrated Certificate Document Viewer Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        activeCertId={selectedCertId}
        onClose={handleCloseModal}
        onSelectCert={handleSelectCert}
        certificates={certs}
      />
    </section>
  );
}
