import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import { easeOut, sectionReveal } from '@/lib/motion';

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: easeOut },
};

const cardClass =
  'rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 md:p-8 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-violet-500/20 hover:shadow-[0_8px_48px_rgba(139,92,246,0.1)]';

export function AchievementsAndEducationSection() {
  return (
    <motion.section id="achievements" className="grid md:grid-cols-2 gap-8 mb-20" {...sectionReveal}>
      <motion.div className={cardClass} {...cardMotion} transition={{ ...cardMotion.transition, delay: 0 }}>
        <h2 className="text-3xl font-bold text-white mb-4">Achievements</h2>
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
              <span className="text-2xl shrink-0 drop-shadow-[0_0_12px_rgba(139,92,246,0.35)]" aria-hidden>
                {ach.icon}
              </span>
              <div>
                <h4 className="font-bold text-zinc-100">{ach.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{ach.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className={cardClass}
        {...cardMotion}
        transition={{ ...cardMotion.transition, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
        <div>
          <h4 className="text-lg font-bold text-zinc-100">{resumeData.education.university}</h4>
          <p className="text-zinc-400">{resumeData.education.degree}</p>
          <p className="text-sm text-zinc-500 mt-1">{resumeData.education.year}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
