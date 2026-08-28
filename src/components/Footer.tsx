import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/dhanushkaran5',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/dhanushkaran-m-35ab77330',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:logeshdhanushkaran@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-midnight-border bg-midnight-bg">
      <div className="section-container py-12">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Name */}
          <a href="#home" className="text-xl font-bold text-content-primary tracking-tight">
            DHANUSHKARAN <span className="text-accent-cyan">M</span>
          </a>

          {/* Tagline */}
          <p className="text-content-muted text-sm max-w-md">
            Building practical solutions with software, data, and AI.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-lg border border-midnight-border text-content-muted hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-midnight-border" />

          {/* Copyright */}
          <p className="text-content-muted text-xs flex items-center gap-1.5">
            © 2026 Dhanushkaran M. Built with
            <Heart size={12} className="text-accent-cyan" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
