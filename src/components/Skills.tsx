import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Cpu,
} from 'lucide-react';
import type { SkillCategory } from '../data/skills';
import { skillCategories } from '../data/skills';

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Cpu,
};

function SkillCard({ category, index, isInView }: { category: SkillCategory; index: number; isInView: boolean }) {
  const Icon = ICON_MAP[category.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="card card-hover group p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-cyan/10 group-hover:bg-accent-cyan/20 transition-colors">
          <Icon size={20} className="text-accent-cyan" />
        </div>
        <h3 className="text-lg font-semibold text-content-primary">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="tech-tag hover:bg-accent-cyan/20 hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative bg-midnight-bg-secondary/50">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3">
              Technologies and tools I work with
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
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
