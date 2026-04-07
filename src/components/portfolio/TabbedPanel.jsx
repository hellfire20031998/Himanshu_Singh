import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MetricChart } from './MetricChart';

const panelTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] };

export function TabbedPanel({ items, sectionTitle, sectionSubtitle, defaultId, variant }) {
  const [activeId, setActiveId] = useState(defaultId);
  const active = items.find((i) => i.id === activeId);

  return (
    <>
      <motion.h2
        className="text-3xl font-bold text-slate-900 mb-2 text-center"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        {sectionTitle}
      </motion.h2>
      <motion.p
        className="text-center text-slate-500 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.06 }}
      >
        {sectionSubtitle}
      </motion.p>
      <div className="md:flex md:gap-8">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <ul className="flex flex-col gap-2">
            {items.map((item) => {
              const tabPrimary = variant === 'project' ? item.shortName : item.company;
              const tabSecondary =
                variant === 'project'
                  ? item.tagline
                  : [item.role, item.period].filter(Boolean).join(' · ');
              return (
                <li key={item.id}>
                  <motion.button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`tab w-full text-left px-4 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-200/80 transition-colors duration-200 ${activeId === item.id ? 'active' : ''}`}
                  >
                    <span
                      className={`block text-sm font-semibold ${activeId === item.id ? 'text-white' : 'text-slate-800'}`}
                    >
                      {tabPrimary}
                    </span>
                    {tabSecondary ? (
                      <span
                        className={`block text-xs font-normal mt-0.5 ${activeId === item.id ? 'text-stone-200' : 'text-slate-500'}`}
                      >
                        {tabSecondary}
                      </span>
                    ) : null}
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:w-2/3 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100 min-h-[320px] transition-shadow duration-300 hover:shadow-md">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={panelTransition}
              >
                {variant === 'work' ? (
                  <>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">{active.role}</h3>
                    <p className="text-sm font-medium text-slate-500 mb-1">{active.company}</p>
                    <p className="text-xs text-slate-500 mb-4">
                      {[active.period, active.stack].filter(Boolean).join(' · ')}
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{active.title}</h3>
                    <p className="text-sm font-medium text-slate-600 mb-6">{active.stack}</p>
                  </>
                )}
                <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                  {active.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.3 }}
                    >
                      {b}
                    </motion.li>
                  ))}
                </ul>
                {active.metrics?.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {active.metrics.map((metric) => (
                      <MetricChart key={metric.label} metric={metric} />
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
