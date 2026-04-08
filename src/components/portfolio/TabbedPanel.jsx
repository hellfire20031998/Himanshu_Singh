import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MetricChart } from './MetricChart';

const panelTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] };

const glassPanel =
  'rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 md:p-8 backdrop-blur-xl min-h-[320px] shadow-[0_4px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-violet-500/15';

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
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 px-3 py-1.5 text-sm font-medium hover:bg-emerald-500/25 transition-colors duration-200"
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
          className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] text-zinc-200 border border-white/10 px-3 py-1.5 text-sm font-medium hover:bg-white/[0.1] hover:border-violet-500/30 transition-all duration-200"
        >
          <span className="text-xs font-semibold text-violet-400/90">GH</span>
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
        className="text-3xl font-bold text-white mb-2 text-center"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        {sectionTitle}
      </motion.h2>
      <motion.p
        className="text-center text-zinc-500 mb-10 max-w-2xl mx-auto"
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
                    className={`tab w-full text-left px-4 py-3 rounded-xl font-medium text-zinc-400 hover:bg-white/[0.06] transition-colors duration-200 ${activeId === item.id ? 'active' : ''}`}
                  >
                    <span
                      className={`block text-sm font-semibold ${activeId === item.id ? 'text-white' : 'text-zinc-200'}`}
                    >
                      {tabPrimary}
                    </span>
                    {tabSecondary ? (
                      <span
                        className={`block text-xs font-normal mt-0.5 ${activeId === item.id ? 'text-violet-200/80' : 'text-zinc-500'}`}
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
        <div className={`md:w-2/3 ${glassPanel}`}>
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
                    <h3 className="text-2xl font-bold text-white mb-1">{active.role}</h3>
                    <p className="text-sm font-medium text-violet-400/90 mb-1">{active.company}</p>
                    <p className="text-xs text-zinc-500 mb-4">
                      {[active.period, active.stack].filter(Boolean).join(' · ')}
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-snug">{active.title}</h3>
                    {active.summary ? (
                      <p className="text-sm text-zinc-400 leading-relaxed mb-4 border-l-2 border-violet-500/40 pl-3">
                        {active.summary}
                      </p>
                    ) : null}
                    <p
                      className={`text-sm font-medium ${active.summary ? 'text-zinc-500' : 'text-zinc-400'} ${projectHasLinks(active) ? 'mb-3' : 'mb-6'}`}
                    >
                      {active.summary ? (
                        <>
                          <span className="text-zinc-600 font-semibold uppercase tracking-wider text-xs mr-2">
                            Stack
                          </span>
                          {active.stack}
                        </>
                      ) : (
                        active.stack
                      )}
                    </p>
                    <ProjectLinks githubLinks={active.githubLinks} liveLink={active.liveLink} />
                  </>
                )}
                <ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-6 marker:text-violet-500/80">
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
