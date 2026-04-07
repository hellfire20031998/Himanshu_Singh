import { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import { sectionReveal, staggerContainer, staggerItem } from '@/lib/motion';
import { SkillsChart } from '../SkillsChart';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const skillsToRender = selectedCategory ? { [selectedCategory]: resumeData.skills[selectedCategory] } : resumeData.skills;

  return (
    <motion.section
      id="skills"
      className="mb-16 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100 transition-shadow duration-300 hover:shadow-md"
      {...sectionReveal}
    >
      <motion.h2
        className="text-3xl font-bold text-slate-900 mb-2 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Skills
      </motion.h2>
      <motion.p
        className="text-center text-slate-500 mb-6 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        Distribution by category. Click a bar to filter tags below; click the chart background to show all.
      </motion.p>
      <motion.div
        className="chart-container mb-8"
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
              className="tag bg-slate-100 text-slate-800 text-sm font-medium px-3 py-1.5 rounded-full cursor-default border border-slate-200/80"
            >
              {skill}
            </motion.span>
          ))}
      </motion.div>
    </motion.section>
  );
}
