import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, ScrollText, Award } from 'lucide-react';
import { achievements } from '../data/achievements';

const ICON_MAP: Record<string, React.ElementType> = {
  Trophy,
  ScrollText,
  Award,
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="section-padding relative">
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
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              Recognitions and notable accomplishments
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = ICON_MAP[achievement.icon] || Trophy;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.15 }}
                  className="relative group"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />

                  <div className="relative card card-hover p-6 sm:p-8 text-center rounded-2xl">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-accent-cyan" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-content-primary mb-2">
                      {achievement.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-accent-cyan text-sm font-medium mb-2">
                      {achievement.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-content-muted text-sm">
                      {achievement.description}
                    </p>

                    {/* Highlight */}
                    {achievement.highlight && (
                      <p className="mt-3 text-xs font-medium text-accent-purple">
                        {achievement.highlight}
                      </p>
                    )}
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
