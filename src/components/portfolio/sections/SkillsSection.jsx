import { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import { sectionReveal, staggerContainer, staggerItem } from '@/lib/motion';
import { SkillsChart } from '../SkillsChart';

const cardClass =
  'rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 md:p-8 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-violet-500/20 hover:shadow-[0_8px_48px_rgba(139,92,246,0.12)]';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const skillsToRender = selectedCategory ? { [selectedCategory]: resumeData.skills[selectedCategory] } : resumeData.skills;

  return (
    <motion.section id="skills" className={`mb-20 ${cardClass}`} {...sectionReveal}>
      <motion.h2
        className="text-3xl font-bold text-white mb-2 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Skills
      </motion.h2>
      <motion.p
        className="text-center text-zinc-500 mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        Distribution by category. Click a bar to filter tags below; click the chart background to show all.
      </motion.p>
      <motion.div
        className="chart-container mb-8 rounded-xl bg-black/20 border border-white/[0.06] p-2"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SkillsChart onBarClick={setSelectedCategory} />
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-2.5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-20px' }}
      >
        {Object.values(skillsToRender)
          .flat()
          .map((skill) => (
            <motion.span
              key={`${selectedCategory ?? 'all'}-${skill}`}
              variants={staggerItem}
              layout
              className="tag text-sm font-medium px-3.5 py-1.5 rounded-full cursor-default border border-white/[0.1] bg-white/[0.06] text-zinc-200"
            >
              {skill}
            </motion.span>
          ))}
      </motion.div>
    </motion.section>
  );
}
