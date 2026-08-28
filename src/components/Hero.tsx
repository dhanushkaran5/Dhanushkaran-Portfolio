import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const handleScrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="gradient-orb gradient-orb-cyan w-[500px] h-[500px] -top-40 -right-40 absolute" />
      <div className="gradient-orb gradient-orb-purple w-[400px] h-[400px] -bottom-20 -left-20 absolute" />

      <div className="section-container relative z-10 py-32 lg:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-accent-cyan font-mono text-sm sm:text-base mb-4 tracking-wider"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-content-primary mb-4 tracking-tight"
          >
            DHANUSHKARAN{' '}
            <span className="gradient-text">M</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-content-muted mb-3"
          >
            Artificial Intelligence & Data Science Student
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base sm:text-lg text-accent-cyan/80 font-medium mb-6"
          >
            Building practical solutions with software, data, and AI.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-content-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I enjoy turning ideas into practical solutions while continuously
            learning and exploring emerging technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button onClick={handleScrollToProjects} className="btn-primary">
              <ArrowDown size={18} />
              View Projects
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center justify-center gap-5"
          >
            <a
              href="https://github.com/dhanushkaran5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-midnight-border text-content-muted hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanushkaran-m-35ab77330"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-midnight-border text-content-muted hover:text-accent-purple hover:border-accent-purple/40 hover:bg-accent-purple/5 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:logeshdhanushkaran@gmail.com"
              className="p-3 rounded-xl border border-midnight-border text-content-muted hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-content-muted/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
