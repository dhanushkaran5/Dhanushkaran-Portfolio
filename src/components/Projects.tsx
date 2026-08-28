import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-midnight-card border border-midnight-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-midnight-card/95 backdrop-blur-sm border-b border-midnight-border p-6 flex items-center justify-between z-10">
          <h3 className="text-xl font-bold text-content-primary">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-midnight-border/50 text-content-muted hover:text-content-primary transition-colors"
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-content-muted leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem */}
          <div>
            <h4 className="text-sm font-semibold text-accent-purple uppercase tracking-wider mb-2">Problem</h4>
            <p className="text-content-muted leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-2">Solution</h4>
            <p className="text-content-muted leading-relaxed">{project.solution}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-accent-purple uppercase tracking-wider mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-content-muted text-sm">
                  <ChevronRight size={14} className="text-accent-cyan flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveDemoAvailable && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubAvailable && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <Github size={16} />
                View Code
              </a>
            )}
            {!project.liveDemoAvailable && !project.githubAvailable && (
              <p className="text-content-muted text-sm italic">Links will be added once available.</p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
        className="group relative bg-midnight-card border border-midnight-border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-cyan/10 hover:border-accent-cyan/30 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        {/* Gradient Top Border */}
        <div className="h-1 w-full bg-gradient-to-r from-accent-cyan to-accent-purple" />

        <div className="p-6 sm:p-8">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-content-primary mb-3 group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-content-muted leading-relaxed mb-6 text-sm sm:text-base">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-3">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.slice(0, 6).map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-content-muted text-sm">
                  <ChevronRight size={14} className="text-accent-cyan flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="tech-tag group-hover:bg-accent-cyan/15 group-hover:border-accent-cyan/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {project.liveDemoAvailable && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubAvailable && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {!project.liveDemoAvailable && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-content-muted border border-midnight-border">
                <ExternalLink size={14} />
                Demo Coming Soon
              </span>
            )}
            {!project.githubAvailable && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-content-muted border border-midnight-border">
                <Github size={14} />
                Repo Coming Soon
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <ProjectModal project={project} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative bg-midnight-bg-secondary/50">
      <div className="section-container">
        <div ref={ref}>
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              Practical solutions built with modern technologies
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
