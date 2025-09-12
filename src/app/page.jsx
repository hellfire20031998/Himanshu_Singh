'use client'
import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// --- DATA ---
// Data is kept here for simplicity, but in a larger app, it would be in a separate file or fetched from an API.
const resumeData = {
    skills: {
        'Languages & Frameworks': ['Java', 'Spring Boot', 'Spring Security', 'Node.js', 'React', 'Next.js'],
        'Databases': ['PostgreSQL', 'MySQL', 'MongoDB'],
        'Developer Tools & DevOps': ['Git', 'GitHub', 'Maven', 'Gradle', 'Docker'],
        'Web Technologies': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST APIs', 'WebRTC', 'JWT'],
        'Concepts': ['Data Structures & Algorithms (DSA)', 'Microservices', 'System Design', 'OOP', 'Hierarchy-based RBAC']
    },
    experience: [
        {
            id: 'internship',
            title: 'Engineering Intern @ Otusone LLP',
            tech: 'E-commerce, Full-Stack Development',
            description: 'Designed and implemented core e-commerce features, developed and optimized REST APIs for order and product management, and enhanced the user interface using modern frontend practices.',
            metrics: [
                { label: 'Increase in Customer Engagement', value: 20, color: 'rgba(59, 130, 246, 0.7)' },
                { label: 'Reduction in Server Response Times', value: 30, color: 'rgba(16, 185, 129, 0.7)' },
                { label: 'Improvement in User Satisfaction', value: 25, color: 'rgba(59, 130, 246, 0.7)' },
                { label: 'Reduction in Manual Workload', value: 40, color: 'rgba(16, 185, 129, 0.7)' }
            ]
        },
        {
            id: 'proj1',
            title: 'Interview Platform',
            tech: 'Next.js, React, Spring Boot, Keycloak, PostgreSQL, WebRTC',
            description: 'Developed a secure, full-stack interview platform with real-time video streaming, session recording, and a synchronized assessment timer. Secured for over 1,000 users with Keycloak and Role-Based Access Control.',
            metrics: [
                { label: 'Users Secured via Keycloak & RBAC', value: 100, customLabel: '1,000+', color: 'rgba(239, 68, 68, 0.7)' }
            ]
        },
        {
            id: 'proj2',
            title: 'Online Food Ordering App',
            tech: 'Java, Spring Boot, MySQL, React, Spring Security',
            description: 'Engineered a full-stack food ordering application with robust authentication and authorization using Spring Security. Designed and secured RESTful APIs for a complete user workflow.',
            metrics: [
                { label: 'Enhancement in Data Retrieval Performance', value: 30, color: 'rgba(16, 185, 129, 0.7)' }
            ]
        },
        {
            id: 'proj3',
            title: 'E-Commerce Admin Panel',
            tech: 'Node.js, Express, MongoDB, React',
            description: 'Developed a robust backend for a high-traffic e-commerce platform. Engineered a JWT-based authentication system with role and hierarchy-based access control to manage user permissions.',
            metrics: [
                { label: 'Products & Accounts Managed', value: 100, customLabel: '1,000+', color: 'rgba(239, 68, 68, 0.7)' },
                { label: 'Increase in Operational Efficiency', value: 30, color: 'rgba(16, 185, 129, 0.7)' }
            ]
        }
    ],
    achievements: [
        { icon: '🧠', title: 'Data Structures & Algorithms (Scaler Academy)', text: 'Recognized for strong proficiency in DSA and algorithmic problem-solving.' },
        { icon: '☕', title: 'Advanced Java', text: 'Expertise in core Java concepts including multithreading and JVM internals.' },
        { icon: '🏗️', title: 'System Design', text: 'Comprehensive knowledge of designing scalable architecture and distributed systems.' }
    ],
    education: {
        university: 'Dr. A. P. J. Abdul Kalam Technical University',
        degree: 'Bachelor of Technology in Electrical Engineering',
        year: 'Graduated 2020'
    }
};


// --- STYLES COMPONENT ---
const GlobalStyles = () => (
    <style jsx global>{`
        html {
            scroll-behavior: smooth;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F5F5F4; /* Stone 100 */
            color: #334155; /* Slate 700 */
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
                height: 250px;
                max-height: 300px;
            }
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 300px;
                max-height: 350px;
            }
        }
        .metric-chart-container {
            position: relative;
            width: 100%;
            height: 24px;
        }
        .nav-link {
            transition: color 0.3s;
        }
        .nav-link:hover {
            color: #1e293b; /* Slate 800 */
        }
        .tag {
            transition: all 0.2s ease-in-out;
        }
        .tag:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        .tab.active {
            background-color: #1e293b; /* Slate 800 */
            color: #ffffff;
        }
    `}</style>
);


// --- UI COMPONENTS ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = (
        <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 space-y-2 md:space-y-0 py-2 md:py-0">
            <a href="#summary" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">Summary</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">Experience</a>
            <a href="#achievements" onClick={() => setIsMenuOpen(false)} className="nav-link text-slate-600 px-3 py-2 rounded-md text-sm font-medium">Achievements</a>
        </div>
    );

    return (
        <header className="bg-stone-100/80 backdrop-blur-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-slate-800">Himanshu Singh</h1>
                    </div>
                    <div className="hidden md:block">
                        {navLinks}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-slate-200 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden px-2 sm:px-3">
                    {navLinks}
                </div>
            )}
        </header>
    );
};

const SkillsChart = ({ onBarClick }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const categories = Object.keys(resumeData.skills);
        const data = categories.map(cat => resumeData.skills[cat].length);

        const chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: categories,
                datasets: [{
                    label: '# of Skills',
                    data: data,
                    backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(16, 185, 129, 0.7)', 'rgba(249, 115, 22, 0.7)', 'rgba(139, 92, 246, 0.7)', 'rgba(239, 68, 68, 0.7)'],
                    borderColor: ['rgba(59, 130, 246, 1)', 'rgba(16, 185, 129, 1)', 'rgba(249, 115, 22, 1)', 'rgba(139, 92, 246, 1)', 'rgba(239, 68, 68, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { beginAtZero: true, grid: { display: false } },
                    y: { grid: { display: false } }
                },
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const clickedIndex = elements[0].index;
                        onBarClick(categories[clickedIndex]);
                    } else {
                        onBarClick(null);
                    }
                }
            }
        });

        return () => chartInstance.destroy();
    }, [onBarClick]);

    return <canvas ref={chartRef}></canvas>;
};

const MetricChart = ({ metric }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [''],
                datasets: [{
                    data: [metric.value],
                    backgroundColor: [metric.color],
                    borderWidth: 0,
                    barPercentage: 1.0,
                    categoryPercentage: 1.0
                }]
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
                            label: (context) => metric.customLabel || `${context.raw}%`
                        }
                    }
                },
                scales: {
                    x: { display: false, min: 0, max: 100 },
                    y: { display: false }
                }
            }
        });

        return () => chartInstance.destroy();
    }, [metric]);

    return (
        <div className="bg-stone-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">{metric.label}</p>
            <div className="metric-chart-container">
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
};

// --- PAGE SECTIONS ---

const SummarySection = () => (
    <section id="summary" className="text-center mb-16 pt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Backend Developer</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Results-driven developer with hands-on experience in designing, developing, and deploying scalable web applications. Proficient in Java/Spring Boot for backend services and React/Next.js for frontend interfaces.
        </p>
    </section>
);

const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const skillsToRender = selectedCategory ? { [selectedCategory]: resumeData.skills[selectedCategory] } : resumeData.skills;

    return (
        <section id="skills" className="mb-16 bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Technical Skills Dashboard</h2>
            <p className="text-center text-slate-500 mb-6">This chart shows the distribution of my skills. Click on a bar to filter the skills displayed below.</p>
            <div className="chart-container mb-8">
                <SkillsChart onBarClick={setSelectedCategory} />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                {Object.values(skillsToRender).flat().map(skill => (
                    <span key={skill} className="tag bg-slate-200 text-slate-800 text-sm font-medium px-3 py-1 rounded-full cursor-pointer">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

const ExperienceSection = () => {
    const [activeProjectId, setActiveProjectId] = useState(resumeData.experience[0].id);
    const activeProject = resumeData.experience.find(p => p.id === activeProjectId);

    return (
        <section id="experience" className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Experience & Projects Showcase</h2>
            <p className="text-center text-slate-500 mb-8">An interactive look at my professional experience and key projects. Select a tab to see details.</p>
            <div className="md:flex md:gap-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <ul className="flex flex-col gap-2">
                        {resumeData.experience.map(exp => (
                            <li key={exp.id}>
                                <button
                                    onClick={() => setActiveProjectId(exp.id)}
                                    className={`tab w-full text-left px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-200 transition ${activeProjectId === exp.id ? 'active' : ''}`}
                                >
                                    {exp.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-2/3 bg-white rounded-2xl p-6 md:p-8 shadow-sm min-h-[400px]">
                    {activeProject && (
                        <>
                            <h3 className="text-2xl font-bold text-slate-800 mb-1">{activeProject.title}</h3>
                            <p className="text-sm font-medium text-slate-500 mb-4">{activeProject.tech}</p>
                            <p className="text-slate-600 mb-6">{activeProject.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {activeProject.metrics.map(metric => (
                                    <MetricChart key={metric.label} metric={metric} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

const AchievementsAndEducationSection = () => (
    <section id="achievements" className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Achievements</h2>
            <ul className="space-y-4">
                {resumeData.achievements.map(ach => (
                    <li key={ach.title} className="flex items-start">
                        <span className="text-2xl mr-4">{ach.icon}</span>
                        <div>
                            <h4 className="font-bold text-slate-800">{ach.title}</h4>
                            <p className="text-slate-600">{ach.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
            <div>
                <h4 className="text-lg font-bold text-slate-800">{resumeData.education.university}</h4>
                <p className="text-slate-600">{resumeData.education.degree}</p>
                <p className="text-sm text-slate-500">{resumeData.education.year}</p>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-slate-800 text-stone-300">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Contact Me</h3>
            <p className="mb-4">tonu8707@gmail.com | +91-8707838102</p>
            <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">GitHub</a>
            </div>
        </div>
    </footer>
);

// --- MAIN PAGE COMPONENT ---
export default function InteractiveResumePage() {
    return (
        <>
            
            <GlobalStyles />
            
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <SummarySection />
                <SkillsSection />
                <ExperienceSection />
                <AchievementsAndEducationSection />
            </main>

            <Footer />
        </>
    );
}


