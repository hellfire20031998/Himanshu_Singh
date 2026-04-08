import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MetricChart } from './MetricChart';

const panelTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] };

function githubLinkLabel(url, index) {
  try {
    const parts = new URL(url).pathname.replace(/\/$/, '').split('/').filter(Boolean);
    if (parts.length >= 2) return `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
    if (parts.length === 1) return parts[0];
  } catch {
    /* ignore */
  }
  return `GitHub ${index + 1}`;
}

function projectHasLinks(project) {
  const live = typeof project.liveLink === 'string' && project.liveLink.trim();
  const gh =
    Array.isArray(project.githubLinks) &&
    project.githubLinks.some((u) => typeof u === 'string' && String(u).trim());
  return !!(live || gh);
}

function ProjectLinks({ githubLinks, liveLink }) {
  const repos = Array.isArray(githubLinks) ? githubLinks.filter((u) => typeof u === 'string' && u.trim()) : [];
  const live = typeof liveLink === 'string' ? liveLink.trim() : '';
  if (!live && repos.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/10 text-emerald-800 border border-emerald-600/20 px-3 py-1.5 text-sm font-medium hover:bg-emerald-600/15 transition-colors duration-200"
        >
          <span aria-hidden>↗</span>
          Live demo
        </a>
      ) : null}
      {repos.map((url, i) => (
        <a
          key={`${url}-${i}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/5 text-slate-800 border border-slate-300/80 px-3 py-1.5 text-sm font-medium hover:bg-slate-800/10 transition-colors duration-200"
        >
          <span className="text-xs font-semibold text-slate-500">GH</span>
          {githubLinkLabel(url, i)}
        </a>
      ))}
    </div>
  );
}

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
                    <p
                      className={`text-sm font-medium text-slate-600 ${projectHasLinks(active) ? 'mb-3' : 'mb-6'}`}
                    >
                      {active.stack}
                    </p>
                    <ProjectLinks githubLinks={active.githubLinks} liveLink={active.liveLink} />
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
