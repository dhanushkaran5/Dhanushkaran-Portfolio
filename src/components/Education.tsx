import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative">
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
              <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              Academic background and qualifications
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-cyan to-transparent" />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative pl-14 sm:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full bg-accent-purple shadow-lg shadow-accent-purple/50 ring-4 ring-midnight-bg" />

                {/* Card */}
                <div className="card p-6 sm:p-8 hover:border-accent-purple/30 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap size={22} className="text-accent-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-content-primary">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin size={14} className="text-content-muted" />
                        <p className="text-content-muted text-sm">{edu.institution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <div className="flex items-center gap-2 text-content-muted text-sm">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-sm font-medium border border-accent-purple/20">
                      {edu.gradeLabel}: {edu.grade}
                    </div>
                  </div>

                  {edu.note && (
                    <p className="text-content-muted text-sm mt-3 italic">
                      {edu.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
