'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Chart from 'chart.js/auto';

const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/himanshu-singh-6ab01b179/',
  github: 'https://github.com/hellfire20031998',
  leetcode: 'https://leetcode.com/u/tonu8707/',
};

const resumeData = {
  headline: 'Backend Engineer',
  headlineTrack: 'Java · Microservices · Distributed Systems',
  summary:
    'Backend-focused engineer with 2+ years of experience building scalable, high-performance systems using Java, Spring Boot, and microservices. I optimize APIs, improve throughput, and design distributed workflows for real-world products. Strong in DSA, system design, and performance engineering—with hands-on use of Redis, Kafka, and WebRTC.',

  contact: {
    email: 'tonu8707@gmail.com',
    phone: '+91-8707838102',
  },

  skills: {
    Languages: ['Java', 'JavaScript'],
    Backend: ['Spring Boot', 'Node.js', 'Express.js', 'Spring AI', 'LLM Integration'],
    Frontend: ['React', 'Next.js'],
    Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    Tools: ['Redis', 'Kafka', 'AWS', 'Jenkins', 'Git'],
    'Core concepts': [
      'Microservices',
      'Distributed systems',
      'System design',
      'REST APIs',
      'AI integration',
      'Prompt engineering',
    ],
  },

  workExperience: [
    {
      id: 'natlov',
      role: 'Full Stack Developer',
      company: 'Natlov Technologies Pvt Ltd',
      period: 'Jan 2026 – Present',
      stack: 'Java, Spring Boot, Next.js, Jenkins',
      bullets: [
        'Developing and scaling backend services with Java and Spring Boot, focusing on performance and clean architecture.',
        'Improved API performance by ~20% and enhanced reliability by optimizing services and resolving production issues.',
        'Integrating Next.js frontends with backend APIs for end-to-end product delivery.',
        'Automating CI/CD with Jenkins to speed up deployments.',
        'Reviewing pull requests and upholding code quality standards.',
      ],
      metrics: [
        { label: 'API performance improvement', value: 20, color: 'rgba(59, 130, 246, 0.7)' },
      ],
    },
    {
      id: 'railse',
      role: 'Backend Engineer',
      company: 'Railse',
      period: 'Nov 2024 – Dec 2025',
      stack: 'Java, Spring Boot, Redis, microservices, REST',
      bullets: [
        'Designed and scaled REST APIs for CRM reporting, payment settlement, and logistics in a distributed microservices architecture.',
        'Reduced latency by optimizing queries, trimming payloads, and introducing Redis caching.',
        'Increased throughput and lowered database load with in-memory and distributed caching for high-frequency paths.',
        'Contributed to backend architecture for reliable inter-service communication and data consistency.',
      ],
      metrics: [],
    },
    {
      id: 'otusone',
      role: 'Engineering Intern',
      company: 'Otusone LLP',
      period: 'Feb 2023 – Nov 2023',
      stack: 'E-commerce, REST APIs, full-stack',
      bullets: [
        'Built and optimized REST APIs for orders and products, cutting response time by ~30%.',
        'Improved frontend components—higher engagement (~20%), better UX (~25%).',
        'Shipped cron-based push notifications, boosting engagement ~15%.',
        'Designed email automation that reduced manual operational effort ~40%.',
      ],
      metrics: [
        { label: 'Reduction in API response time', value: 30, color: 'rgba(16, 185, 129, 0.7)' },
        { label: 'Increase in customer engagement', value: 20, color: 'rgba(59, 130, 246, 0.7)' },
        { label: 'Improvement in user satisfaction (UX)', value: 25, color: 'rgba(59, 130, 246, 0.7)' },
        { label: 'Lift from push notifications', value: 15, color: 'rgba(249, 115, 22, 0.7)' },
        { label: 'Reduction in manual workload', value: 40, color: 'rgba(16, 185, 129, 0.7)' },
      ],
    },
  ],

  projects: [
    {
      id: 'hireflow',
      shortName: 'HireFlow',
      tagline: 'Talent acquisition platform',
      title: 'HireFlow — Talent Acquisition Platform',
      stack: 'Java, Spring Boot, microservices, Next.js, PostgreSQL, MongoDB, AWS, Redis, WebRTC',
      bullets: [
        'Architected a scalable multi-tenant ATS with strong tenant isolation and smooth onboarding.',
        'Spring Boot microservices with Eureka, API Gateway, PostgreSQL for structured data and MongoDB for flexible schemas.',
        'Real-time video interviews via WebRTC and WebSocket signaling; Razorpay for payments.',
        'Redis caching for faster responses and better overall performance.',
      ],
      metrics: [],
    },
    {
      id: 'food',
      shortName: 'Food ordering',
      tagline: 'Full-stack + Kafka events',
      title: 'Online Food Ordering Platform',
      stack: 'Java, Spring Boot, MySQL, React, Redis, Kafka, Stripe',
      bullets: [
        'Full-stack ordering flow with REST APIs for menus, cart, and checkout.',
        'Stripe integration for secure payments.',
        'Event-driven design with Kafka for async order processing and notifications.',
        'Optimized MySQL and Redis caching—~30% better data retrieval performance.',
      ],
      metrics: [
        { label: 'Data retrieval performance', value: 30, color: 'rgba(16, 185, 129, 0.7)' },
      ],
    },
    {
      id: 'chat',
      shortName: 'Real-time chat',
      tagline: 'WebSocket, WebRTC, AI assist',
      title: 'Real-Time Chat Application',
      stack: 'Next.js, Spring Boot, WebSocket (STOMP), WebRTC, MongoDB',
      bullets: [
        '1:1 and group chat with live updates via STOMP/SockJS; AI-assisted message suggestions.',
        'JWT auth with secure sessions, token expiry, and auto re-authentication.',
        'WebRTC audio/video with STOMP signaling across networks.',
        'Deployed full stack (Spring Boot, MongoDB, Next.js) on Vercel, AWS, and Atlas.',
      ],
      metrics: [],
    },
  ],

  achievements: [
    {
      icon: '☕',
      title: 'Java & JVM',
      text: 'Strong fundamentals including multithreading and JVM internals.',
    },
    {
      icon: '🏗️',
      title: 'System design',
      text: 'Scalable system design and distributed architecture patterns.',
    },
    {
      icon: '🧠',
      title: 'DSA',
      text: '600+ problems on LeetCode and Scaler—sharp problem-solving and algorithms.',
    },
  ],

  education: {
    university: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow',
    degree: 'B.Tech, Electrical Engineering',
    year: '2020',
  },
};

const SKILL_CHART_COLORS = {
  bg: [
    'rgba(59, 130, 246, 0.7)',
    'rgba(16, 185, 129, 0.7)',
    'rgba(249, 115, 22, 0.7)',
    'rgba(139, 92, 246, 0.7)',
    'rgba(239, 68, 68, 0.7)',
    'rgba(14, 165, 233, 0.7)',
  ],
  border: [
    'rgba(59, 130, 246, 1)',
    'rgba(16, 185, 129, 1)',
    'rgba(249, 115, 22, 1)',
    'rgba(139, 92, 246, 1)',
    'rgba(239, 68, 68, 1)',
    'rgba(14, 165, 233, 1)',
  ],
};

const GlobalStyles = () => (
  <style jsx global>{`
    html {
      scroll-behavior: smooth;
    }
    .chart-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      height: 300px;
      max-height: 400px;
    }
    @media (min-width: 640px) {
      .chart-container {
        height: 280px;
        max-height: 340px;
      }
    }
    @media (min-width: 768px) {
      .chart-container {
        height: 320px;
        max-height: 380px;
      }
    }
    .metric-chart-container {
      position: relative;
      width: 100%;
      height: 24px;
    }
    .nav-link {
      transition: color 0.2s ease;
    }
    .nav-link:hover {
      color: #1e293b;
    }
    .tag {
      transition: all 0.2s ease-in-out;
    }
    .tag:hover {
      transform: translateY(-2px);
      box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.08),
        0 2px 4px -2px rgb(0 0 0 / 0.06);
    }
    .tab.active {
      background-color: #1e293b;
      color: #ffffff;
    }
  `}</style>
);

function SocialLink({ href, children }) {
  if (!href) {
    return <span className="text-stone-400">{children}</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-1 space-y-1 md:space-y-0 py-2 md:py-0">
      <a href="#summary" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">
        Summary
      </a>
      <a href="#skills" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">
        Skills
      </a>
      <a href="#experience" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">
        Experience
      </a>
      <a href="#projects" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">
        Projects
      </a>
      <a href="#achievements" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">
        Achievements
      </a>
      <a href="#contact" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">
        Contact
      </a>
    </div>
  );

  return (
    <header className="bg-stone-100/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#summary" className="text-xl font-bold text-slate-800 tracking-tight">
              Himanshu Singh
            </a>
          </div>
          <div className="hidden md:block">{navLinks}</div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div id="mobile-nav" className="md:hidden px-2 sm:px-3 pb-3 border-t border-stone-200/80">
          {navLinks}
        </div>
      )}
    </header>
  );
};

const SkillsChart = ({ onBarClick }) => {
  const chartRef = useRef(null);
  const onBarClickStable = useCallback((cat) => {
    onBarClick(cat);
  }, [onBarClick]);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const categories = Object.keys(resumeData.skills);
    const data = categories.map((cat) => resumeData.skills[cat].length);
    const n = categories.length;

    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [
          {
            label: 'Skills in category',
            data,
            backgroundColor: SKILL_CHART_COLORS.bg.slice(0, n),
            borderColor: SKILL_CHART_COLORS.border.slice(0, n),
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, grid: { display: false }, ticks: { precision: 0 } },
          y: { grid: { display: false } },
        },
        onClick: (_event, elements) => {
          if (elements.length > 0) {
            const clickedIndex = elements[0].index;
            onBarClickStable(categories[clickedIndex]);
          } else {
            onBarClickStable(null);
          }
        },
      },
    });

    return () => chartInstance.destroy();
  }, [onBarClickStable]);

  return <canvas ref={chartRef} />;
};

const MetricChart = ({ metric }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            data: [metric.value],
            backgroundColor: [metric.color],
            borderWidth: 0,
            barPercentage: 1.0,
            categoryPercentage: 1.0,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            displayColors: false,
            callbacks: {
              title: () => '',
              label: (context) => metric.customLabel || `${context.raw}%`,
            },
          },
        },
        scales: {
          x: { display: false, min: 0, max: 100 },
          y: { display: false },
        },
      },
    });

    return () => chartInstance.destroy();
  }, [metric]);

  return (
    <div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
      <p className="text-sm font-semibold text-slate-700 mb-2">{metric.label}</p>
      <div className="metric-chart-container">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

function TabbedPanel({ items, sectionTitle, sectionSubtitle, defaultId, variant }) {
  const [activeId, setActiveId] = useState(defaultId);
  const active = items.find((i) => i.id === activeId);

  return (
    <>
      <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">{sectionTitle}</h2>
      <p className="text-center text-slate-500 mb-8 max-w-2xl mx-auto">{sectionSubtitle}</p>
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
                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`tab w-full text-left px-4 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-200/80 transition ${activeId === item.id ? 'active' : ''}`}
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
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:w-2/3 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100 min-h-[320px]">
          {active && (
            <>
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
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {active.metrics?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {active.metrics.map((metric) => (
                    <MetricChart key={metric.label} metric={metric} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

const SummarySection = () => {
  const handleCopyEmail = async () => {
    const email = resumeData.contact.email;
    try {
      await navigator.clipboard.writeText(email);
      window.alert(`${email}\n\nEmail copied to clipboard.`);
    } catch {
      window.alert(`Could not copy automatically.\n\nYour email: ${email}`);
    }
  };

  return (
  <section id="summary" className="text-center mb-16 pt-10 md:pt-14">
    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">{resumeData.headlineTrack}</p>
    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">{resumeData.headline}</h1>
    <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-8">{resumeData.summary}</p>
    <div className="flex flex-wrap justify-center gap-3">
      <button
        type="button"
        onClick={handleCopyEmail}
        className="inline-flex items-center rounded-full bg-slate-800 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-700 transition cursor-pointer"
      >
        Email me
      </button>
      <a
        href={`tel:${resumeData.contact.phone.replace(/[\s-]/g, '')}`}
        className="inline-flex items-center rounded-full border border-slate-300 bg-white text-slate-800 px-5 py-2.5 text-sm font-medium hover:bg-stone-50 transition"
      >
        Call
      </a>
      <a href="#experience" className="inline-flex items-center rounded-full border border-transparent text-slate-600 px-5 py-2.5 text-sm font-medium hover:text-slate-900 transition">
        View experience →
      </a>
    </div>
  </section>
  );
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const skillsToRender = selectedCategory ? { [selectedCategory]: resumeData.skills[selectedCategory] } : resumeData.skills;

  return (
    <section id="skills" className="mb-16 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Skills</h2>
      <p className="text-center text-slate-500 mb-6 max-w-xl mx-auto">
        Distribution by category. Click a bar to filter tags below; click the chart background to show all.
      </p>
      <div className="chart-container mb-8">
        <SkillsChart onBarClick={setSelectedCategory} />
      </div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {Object.values(skillsToRender)
          .flat()
          .map((skill) => (
            <span
              key={`${selectedCategory ?? 'all'}-${skill}`}
              className="tag bg-slate-100 text-slate-800 text-sm font-medium px-3 py-1.5 rounded-full cursor-default border border-slate-200/80"
            >
              {skill}
            </span>
          ))}
      </div>
    </section>
  );
};

const WorkExperienceSection = () => (
  <section id="experience" className="mb-16">
    <TabbedPanel
      variant="work"
      items={resumeData.workExperience}
      defaultId={resumeData.workExperience[0].id}
      sectionTitle="Experience"
      sectionSubtitle="Roles aligned with my resume—backend, full stack, and shipping in production environments."
    />
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="mb-16">
    <TabbedPanel
      variant="project"
      items={resumeData.projects}
      defaultId={resumeData.projects[0].id}
      sectionTitle="Projects"
      sectionSubtitle="Deep dives into platforms I have designed and built end to end."
    />
  </section>
);

const AchievementsAndEducationSection = () => (
  <section id="achievements" className="grid md:grid-cols-2 gap-8 mb-16">
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Achievements</h2>
      <ul className="space-y-5">
        {resumeData.achievements.map((ach) => (
          <li key={ach.title} className="flex items-start gap-4">
            <span className="text-2xl shrink-0" aria-hidden>
              {ach.icon}
            </span>
            <div>
              <h4 className="font-bold text-slate-800">{ach.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{ach.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
      <div>
        <h4 className="text-lg font-bold text-slate-800">{resumeData.education.university}</h4>
        <p className="text-slate-600">{resumeData.education.degree}</p>
        <p className="text-sm text-slate-500 mt-1">{resumeData.education.year}</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-800 text-stone-300 scroll-mt-20">
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-2">Contact</h3>
      <p className="mb-2">
        <a href={`mailto:${resumeData.contact.email}`} className="hover:text-white">
          {resumeData.contact.email}
        </a>
        <span className="mx-2 text-stone-500">|</span>
        <a href={`tel:${resumeData.contact.phone.replace(/[\s-]/g, '')}`} className="hover:text-white">
          {resumeData.contact.phone}
        </a>
      </p>
      <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-sm mb-2">
        <SocialLink href={SOCIAL.linkedin}>LinkedIn</SocialLink>
        <SocialLink href={SOCIAL.github}>GitHub</SocialLink>
        <SocialLink href={SOCIAL.leetcode}>LeetCode</SocialLink>
      </div>
    </div>
  </footer>
);

export default function InteractiveResumePage() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <SummarySection />
        <SkillsSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <AchievementsAndEducationSection />
      </main>
      <Footer />
    </>
  );
}
