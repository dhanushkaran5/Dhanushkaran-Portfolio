import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Summary', href: '#summary' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight-bg/80 backdrop-blur-xl border-b border-midnight-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-lg lg:text-xl font-bold text-content-primary tracking-tight hover:text-accent-cyan transition-colors"
          >
            DHANUSHKARAN <span className="text-accent-cyan">M</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm text-content-muted hover:text-accent-cyan transition-colors rounded-lg hover:bg-accent-cyan/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Social + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dhanushkaran5"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex p-2 text-content-muted hover:text-accent-cyan transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanushkaran-m-35ab77330"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex p-2 text-content-muted hover:text-accent-cyan transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-content-muted hover:text-accent-cyan transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-midnight-bg/95 backdrop-blur-xl border-b border-midnight-border overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-3 text-content-muted hover:text-accent-cyan hover:bg-accent-cyan/5 rounded-lg transition-colors text-lg"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-4 px-4 pt-4 mt-2 border-t border-midnight-border">
                <a
                  href="https://github.com/dhanushkaran5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-content-muted hover:text-accent-cyan transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhanushkaran-m-35ab77330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-content-muted hover:text-accent-cyan transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
