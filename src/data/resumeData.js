export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/himanshu-singh-6ab01b179/',
  github: 'https://github.com/hellfire20031998',
  leetcode: 'https://leetcode.com/u/tonu8707/',
};

export const resumeData = {
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

export const SKILL_CHART_COLORS = {
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
