import { motion } from 'framer-motion';
import { resumeData } from '@/data/resumeData';
import { easeOut, sectionReveal } from '@/lib/motion';

const cardMotion = {
  initial: { opacity: 0, y: 26, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, ease: easeOut },
};

const cardClass =
  'rounded-xl sm:rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-5 sm:p-6 md:p-8 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-violet-500/20 hover:shadow-[0_8px_48px_rgba(139,92,246,0.1)] min-w-0';

export function AchievementsAndEducationSection() {
  return (
    <motion.section
      id="achievements"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 scroll-mt-[calc(3.5rem+env(safe-area-inset-top))] sm:scroll-mt-20"
      {...sectionReveal}
    >
      <motion.div className={cardClass} {...cardMotion} transition={{ ...cardMotion.transition, delay: 0 }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">Achievements</h2>
        <ul className="space-y-4 sm:space-y-5">
          {resumeData.achievements.map((ach, i) => (
            <motion.li
              key={ach.title}
              className="flex items-start gap-3 sm:gap-4"
              initial={{ opacity: 0, x: -14, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 * i, ease: easeOut }}
            >
              <span className="text-xl sm:text-2xl shrink-0 drop-shadow-[0_0_12px_rgba(139,92,246,0.35)]" aria-hidden>
                {ach.icon}
              </span>
              <div className="min-w-0">
                <h4 className="font-bold text-zinc-100 text-pretty">{ach.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed text-pretty">{ach.text}</p>
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
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">Education</h2>
        <div className="min-w-0">
          <h4 className="text-base sm:text-lg font-bold text-zinc-100 text-pretty">{resumeData.education.university}</h4>
          <p className="text-zinc-400 text-sm sm:text-base">{resumeData.education.degree}</p>
          <p className="text-sm text-zinc-500 mt-1">{resumeData.education.year}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
