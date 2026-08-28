import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, FolderGit2, ScrollText, Trophy } from 'lucide-react';

const STATS = [
  { label: 'Internships', value: 2, icon: Briefcase },
  { label: 'Featured Projects', value: 2, icon: FolderGit2 },
  { label: 'Patent Publication', value: 1, icon: ScrollText },
  { label: 'First Prize', value: 1, icon: Trophy },
];

function AnimatedCounter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 30));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [target, inView]);

  return <span>{count}</span>;
}

export default function ProfessionalSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="summary" className="section-padding relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="section-title">
              Professional <span className="gradient-text">Summary</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          </div>

          {/* Summary Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 sm:p-10 mb-12"
          >
            <p className="text-content-muted text-base sm:text-lg leading-relaxed text-center">
              I am an Artificial Intelligence & Data Science student passionate about
              software development, AI, Machine Learning, and data-driven solutions.
              With hands-on internship experience and projects in AI-powered career
              guidance and sustainability, I enjoy turning ideas into practical
              solutions while continuously learning and exploring emerging
              technologies.
            </p>
          </motion.div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="card card-hover text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-cyan/10 mb-4">
                    <Icon size={24} className="text-accent-cyan" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-content-primary mb-1">
                    <AnimatedCounter target={stat.value} inView={isInView} />
                  </div>
                  <p className="text-content-muted text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
