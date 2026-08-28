import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <div ref={ref}>
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              Professional experience and internships
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative pl-14 sm:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/50 ring-4 ring-midnight-bg" />

                {/* Card */}
                <div className="card p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 size={18} className="text-accent-cyan" />
                        <h3 className="text-xl font-bold text-content-primary">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-accent-cyan font-medium">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-content-muted text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-3 text-content-muted text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
