'use client';

import React, { useState, useEffect, useCallback, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Cpu,
  Sparkles,
  Layers,
  ExternalLink,
  ShieldCheck,
  FileCheck,
  Maximize2,
  Minimize2,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Calendar,
  User,
  Hash,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { CertificationItem } from '@/data/certificates';

const badgeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Cpu,
  Sparkles,
  Layers,
};

interface CertificateModalProps {
  isOpen: boolean;
  activeCertId: string | null;
  onClose: () => void;
  onSelectCert: (id: string) => void;
  certificates: CertificationItem[];
}

export default function CertificateModal({
  isOpen,
  activeCertId,
  onClose,
  onSelectCert,
  certificates,
}: CertificateModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const titleId = useId();

  // Find active certificate, fallback safely to first cert if ID not found
  const currentIndex = certificates.findIndex((c) => c.id === activeCertId);
  const validIndex = currentIndex >= 0 ? currentIndex : 0;
  const activeCert = certificates[validIndex];

  // Reset loading state when active certificate changes
  useEffect(() => {
    if (isOpen) {
      setIframeLoading(true);
    }
  }, [activeCert?.id, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard navigation: Escape to close, Left/Right arrow to navigate
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (validIndex - 1 + certificates.length) % certificates.length;
        onSelectCert(certificates[prevIndex].id);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (validIndex + 1) % certificates.length;
        onSelectCert(certificates[nextIndex].id);
      }
    },
    [isOpen, onClose, onSelectCert, validIndex, certificates]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || !activeCert) return null;

  const ActiveIcon = badgeIcons[activeCert.badgeIcon] || Award;
  const hasVerificationUrl = Boolean(activeCert.verificationUrl);

  const goToPrev = () => {
    const prevIndex = (validIndex - 1 + certificates.length) % certificates.length;
    onSelectCert(certificates[prevIndex].id);
  };

  const goToNext = () => {
    const nextIndex = (validIndex + 1) % certificates.length;
    onSelectCert(certificates[nextIndex].id);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative w-full ${
            isFullscreen
              ? 'h-[96vh] max-w-[98vw]'
              : 'max-w-6xl h-[90vh] sm:h-[86vh]'
          } bg-[#101012] border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden z-10 transition-all duration-300`}
        >
          {/* Ambient Corner Glow Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6b3d]/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff6b3d]/5 blur-[120px] pointer-events-none rounded-full" />

          {/* Top Bar / Header */}
          <header className="relative z-20 px-4 sm:px-6 py-3.5 sm:py-4 bg-[#141417]/95 border-b border-white/[0.08] backdrop-blur-xl flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              {/* Certificate Title & Status */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#ff6b3d]/15 border border-[#ff6b3d]/30 flex items-center justify-center text-[#ff8e66] shrink-0 shadow-[0_0_15px_rgba(255,107,61,0.2)]">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#ff8e66] font-semibold">
                      {activeCert.issuer}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400">
                      {activeCert.year}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      Verified Document
                    </span>
                  </div>
                  <h2
                    id={titleId}
                    className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight truncate"
                  >
                    {activeCert.title}
                  </h2>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Fullscreen Toggle */}
                <button
                  type="button"
                  onClick={() => setIsFullscreen((prev) => !prev)}
                  className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
                  aria-label={isFullscreen ? 'Exit fullscreen view' : 'Expand document view'}
                  title={isFullscreen ? 'Exit fullscreen' : 'Expand document'}
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="w-4 h-4" />
                      <span className="hidden md:inline">Collapse</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-4 h-4" />
                      <span className="hidden md:inline">Expand</span>
                    </>
                  )}
                </button>

                {/* Direct Google Drive Open */}
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#ff6b3d] hover:bg-[#ff8056] text-black font-semibold text-xs font-mono tracking-wide transition-all shadow-[0_0_15px_rgba(255,107,61,0.3)] hover:shadow-[0_0_20px_rgba(255,107,61,0.5)]"
                  aria-label={`Open ${activeCert.title} directly in Google Drive`}
                >
                  <span>Open Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-red-500/20 hover:border-red-500/40 border border-white/10 text-zinc-400 hover:text-red-300 transition-all"
                  aria-label="Close certificate viewer"
                  title="Close viewer (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Certificate Switcher Navigation Bar */}
            <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/[0.05]">
              <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1 scrollbar-none">
                {certificates.map((cert) => {
                  const isSelected = cert.id === activeCert.id;
                  const TabIcon = badgeIcons[cert.badgeIcon] || Award;
                  return (
                    <button
                      key={cert.id}
                      type="button"
                      onClick={() => onSelectCert(cert.id)}
                      className={`px-3 py-1 sm:py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                        isSelected
                          ? 'bg-[#ff6b3d]/20 border border-[#ff6b3d]/50 text-[#ff9b73] font-semibold shadow-[0_0_12px_rgba(255,107,61,0.25)]'
                          : 'bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-zinc-200'
                      }`}
                      aria-label={`Select ${cert.issuer} certificate`}
                    >
                      <TabIcon className="w-3.5 h-3.5" />
                      <span>{cert.issuer.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Pagination Controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={goToPrev}
                  className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white transition-all disabled:opacity-40"
                  aria-label="Previous certificate"
                  title="Previous certificate (Left arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-zinc-500 px-1">
                  {validIndex + 1}/{certificates.length}
                </span>
                <button
                  type="button"
                  onClick={goToNext}
                  className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white transition-all disabled:opacity-40"
                  aria-label="Next certificate"
                  title="Next certificate (Right arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Main Body: Document Viewer & Side Details */}
          <div className="relative flex-1 flex flex-col lg:flex-row overflow-hidden bg-black/40">
            {/* Document Preview Pane */}
            <div className="relative flex-1 h-full min-h-[300px] bg-[#0A0A0B] flex flex-col">
              {/* Iframe Loading State */}
              {iframeLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0C0C0E]/95 backdrop-blur-md gap-3">
                  <div className="relative flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-[#ff6b3d] animate-spin" />
                    <div className="absolute inset-0 rounded-full blur-md bg-[#ff6b3d]/30 animate-pulse" />
                  </div>
                  <div className="text-center px-4">
                    <p className="text-sm font-mono text-zinc-200 font-medium">
                      Loading official document...
                    </p>
                    <p className="text-xs font-mono text-zinc-500 mt-1">
                      Streaming preview from Google Drive
                    </p>
                  </div>
                </div>
              )}

              {/* Real Google Drive Document Preview */}
              <iframe
                key={activeCert.id}
                src={activeCert.previewUrl}
                title={`Official certificate document preview for ${activeCert.title}`}
                className="w-full h-full border-0 bg-neutral-900"
                allow="autoplay"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                onLoad={() => setIframeLoading(false)}
              />

              {/* Fallback Banner for Restricted Browsers / Adblockers */}
              <div className="px-4 py-2 bg-[#121215] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400 gap-2 shrink-0">
                <span className="flex items-center gap-1.5 truncate">
                  <AlertCircle className="w-3.5 h-3.5 text-[#ff8e66] shrink-0" />
                  <span className="truncate">
                    Official file hosted on Google Drive (Viewer Access).
                  </span>
                </span>
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff8e66] hover:text-[#ffab8b] underline shrink-0 font-medium"
                >
                  Direct View Link &rarr;
                </a>
              </div>
            </div>

            {/* Verified Credential Details Sidebar (Collapsible or scrollable) */}
            <aside className="w-full lg:w-80 xl:w-96 bg-[#131215]/95 border-t lg:border-t-0 lg:border-l border-white/[0.08] p-4 sm:p-6 overflow-y-auto shrink-0 flex flex-col justify-between gap-6">
              <div className="space-y-5">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                    Credential Overview
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    {activeCert.title}
                  </h3>
                  {activeCert.issuerOrg && (
                    <p className="text-xs text-zinc-400 mt-1 font-mono">
                      {activeCert.issuerOrg}
                    </p>
                  )}
                </div>

                {/* Metadata Badges */}
                <div className="space-y-2.5 pt-2 border-t border-white/[0.06] text-xs font-mono">
                  {/* Recipient */}
                  <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-zinc-500 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-zinc-400" />
                      Recipient
                    </span>
                    <span className="text-zinc-200 font-semibold truncate">
                      {activeCert.issuedTo || 'Dhanushkaran M'}
                    </span>
                  </div>

                  {/* Issue Date */}
                  <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-zinc-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      Period / Date
                    </span>
                    <span className="text-zinc-200 font-semibold">
                      {activeCert.issueDate || activeCert.year}
                    </span>
                  </div>

                  {/* Verification Reference / Roll No */}
                  <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-zinc-500 flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5 text-zinc-400" />
                      Verification ID
                    </span>
                    <span className="text-[#ff8e66] font-mono text-[11px] font-medium truncate max-w-[160px]">
                      {activeCert.verificationNo}
                    </span>
                  </div>

                  {/* Score / Grade if present */}
                  {activeCert.score && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-zinc-500 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-zinc-400" />
                        Performance
                      </span>
                      <span className="text-emerald-400 font-semibold text-[11px] truncate max-w-[160px]">
                        {activeCert.score}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {activeCert.description && (
                  <div className="pt-2 border-t border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
                      Program Curriculum
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      {activeCert.description}
                    </p>
                  </div>
                )}

                {/* Skills tags */}
                <div className="pt-2 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                    Verified Competencies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons in Sidebar */}
              <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                {/* Genuine External Verification Button (if available) */}
                {hasVerificationUrl && (
                  <a
                    href={activeCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-mono text-xs font-semibold tracking-wide transition-all shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:border-white/20"
                    aria-label={`Verify credential for ${activeCert.title} on official issuer portal`}
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verify on Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                )}

                {/* Open in Google Drive */}
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ff6b3d] hover:bg-[#ff855e] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,107,61,0.25)] hover:shadow-[0_0_25px_rgba(255,107,61,0.45)]"
                  aria-label={`Open ${activeCert.title} in Google Drive`}
                >
                  <span>Open in Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                </a>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
