import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import { easeOut, sectionReveal } from '@/lib/motion';

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: easeOut },
};

export function AchievementsAndEducationSection() {
  return (
    <motion.section id="achievements" className="grid md:grid-cols-2 gap-8 mb-16" {...sectionReveal}>
      <motion.div
        className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100 transition-all duration-300 hover:shadow-md hover:border-stone-200/80"
        {...cardMotion}
        transition={{ ...cardMotion.transition, delay: 0 }}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Achievements</h2>
        <ul className="space-y-5">
          {resumeData.achievements.map((ach, i) => (
            <motion.li
              key={ach.title}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08 * i, ease: easeOut }}
            >
              <span className="text-2xl shrink-0" aria-hidden>
                {ach.icon}
              </span>
              <div>
                <h4 className="font-bold text-slate-800">{ach.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{ach.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100 transition-all duration-300 hover:shadow-md hover:border-stone-200/80"
        {...cardMotion}
        transition={{ ...cardMotion.transition, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
        <div>
          <h4 className="text-lg font-bold text-slate-800">{resumeData.education.university}</h4>
          <p className="text-slate-600">{resumeData.education.degree}</p>
          <p className="text-sm text-slate-500 mt-1">{resumeData.education.year}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
