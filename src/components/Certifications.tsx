import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BookOpen,
  Code2,
  Sparkles,
  Cloud,
  Brain,
} from 'lucide-react';
import { certifications } from '../data/certifications';

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  Code2,
  Sparkles,
  Cloud,
  Brain,
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding relative bg-midnight-bg-secondary/50">
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
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              Professional certifications and continuous learning
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = ICON_MAP[cert.icon] || BookOpen;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="card card-hover group p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent-purple/10 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                      <Icon size={20} className="text-accent-purple" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-1">
                        {cert.provider}
                      </p>
                      <h3 className="text-sm font-semibold text-content-primary leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
