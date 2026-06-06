// ─── NAVIGATION ────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

// ─── SKILLS ────────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Monitor',
    color: 'blue',
    skills: [
      { name: 'React.js', level: 'Intermediate' },
      { name: 'HTML / CSS', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    color: 'sage',
    skills: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'RESTful APIs', level: 'Intermediate' },
      { name: 'Django', level: 'Learning' },
      { name: 'FastAPI', level: 'Learning' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    color: 'tan',
    skills: [
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'MySQL', level: 'Basic' },
      { name: 'PostgreSQL', level: 'Learning' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    icon: 'Brain',
    color: 'purple',
    skills: [
      { name: 'Python', level: 'Intermediate' },
      { name: 'Machine Learning', level: 'Learning' },
      { name: 'Pandas', level: 'Learning' },
      { name: 'Scikit-learn', level: 'Learning' },
      { name: 'Data Analysis', level: 'Learning' },
    ],
  },
  {
    id: 'digital',
    title: 'Digital Skills',
    icon: 'Globe',
    color: 'sage',
    skills: [
      { name: 'SEO Optimization', level: 'Intermediate' },
      { name: 'WordPress Setup', level: 'Intermediate' },
      { name: 'Content Blogging', level: 'Intermediate' },
      { name: 'Automation', level: 'Learning' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'Wrench',
    color: 'blue',
    skills: [
      { name: 'Git & GitHub', level: 'Intermediate' },
      { name: 'VS Code', level: 'Intermediate' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'Basic Hosting', level: 'Intermediate' },
    ],
  },
];

// ─── PROJECTS ──────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'WordPress Blog Network',
    status: 'Built / Service',
    statusColor: 'sage',
    description: 'A practical WordPress blog setup focused on clean structure, readable layouts, SEO basics, categories, pages, and content publishing workflow.',
    tags: ['WordPress', 'SEO', 'Blog'],
    icon: 'Globe',
  },
  {
    id: 2,
    title: 'MERN Personal Portfolio',
    status: 'Practice Project',
    statusColor: 'blue',
    description: 'A responsive personal portfolio built with React and Tailwind CSS to present skills, projects, services, education, and contact information clearly.',
    tags: ['React', 'Tailwind', 'Vite'],
    icon: 'Layout',
  },
  {
    id: 3,
    title: 'Typing Speed Test App',
    status: 'Personal Project',
    statusColor: 'tan',
    description: 'A web-based typing speed test that measures WPM, accuracy, time modes, and performance feedback through a clean interactive interface.',
    tags: ['JavaScript', 'React', 'CSS'],
    icon: 'Keyboard',
  },
  {
    id: 4,
    title: 'AI/ML Practice Models',
    status: 'Academic Project',
    statusColor: 'purple',
    description: 'A collection of beginner machine learning practice models using Python for preprocessing, training, testing, and basic model evaluation.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
    icon: 'Brain',
  },
  {
    id: 5,
    title: 'Automation Workflows',
    status: 'In Progress',
    statusColor: 'outline',
    description: 'Custom scripts and workflow ideas designed to reduce repetitive work, automate simple tasks, connect APIs, and improve productivity.',
    tags: ['Python', 'Automation', 'APIs'],
    icon: 'Zap',
  },
  {
    id: 6,
    title: 'Frontend Landing Page',
    status: 'Practice Project',
    statusColor: 'blue',
    description: 'A responsive landing page built with React and Tailwind CSS, focused on layout structure, spacing, typography, and mobile-friendly design.',
    tags: ['React', 'Tailwind', 'UI/UX'],
    icon: 'Layers',
  },
];

// ─── SERVICES ──────────────────────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    title: 'WordPress Websites',
    description: 'Custom setup and configuration of responsive WordPress websites for blogs and business pages with clean, readable layouts.',
    icon: 'Globe',
    accent: 'blue',
  },
  {
    id: 2,
    title: 'Blog Setup & SEO',
    description: 'Complete blog optimization using SEO basics, clean category structures, metadata, and a sustainable publishing workflow.',
    icon: 'Search',
    accent: 'sage',
  },
  {
    id: 3,
    title: 'Frontend Websites',
    description: 'Clean, accessible, and performant websites using HTML, CSS, JavaScript, and React built for real-world usability.',
    icon: 'Monitor',
    accent: 'tan',
  },
  {
    id: 4,
    title: 'Portfolio Websites',
    description: 'Personalized digital portfolios for students, developers, freelancers, and professionals to showcase their best work.',
    icon: 'Briefcase',
    accent: 'blue',
  },
  {
    id: 5,
    title: 'MERN Applications',
    description: 'Full-stack web applications using MongoDB, Express.js, React, and Node.js for dynamic, data-driven digital products.',
    icon: 'Code2',
    accent: 'sage',
  },
  {
    id: 6,
    title: 'Automation Scripts',
    description: 'Python scripts and custom workflows to automate repetitive tasks, improve efficiency, and save valuable time.',
    icon: 'Zap',
    accent: 'tan',
  },
];

// ─── JOURNEY TIMELINE ─────────────────────────────────────────────────────────
export const journeyTimeline = [
  {
    step: 1,
    title: 'Web Development Foundation',
    description: 'Started with HTML, CSS, JavaScript, and responsive design — building a strong foundation for the web.',
  },
  {
    step: 2,
    title: 'MERN Stack Development',
    description: 'Building full-stack applications using MongoDB, Express.js, React, and Node.js for dynamic web products.',
  },
  {
    step: 3,
    title: 'Python & AI/ML Exploration',
    description: 'Exploring data preprocessing, machine learning models, and evaluation using Python, Pandas, and Scikit-learn.',
  },
  {
    step: 4,
    title: 'Freelancing & Practical Work',
    description: 'Applying skills through real-world projects, SEO optimization, WordPress blogs, and client-facing work.',
  },
];

// ─── CONTACT LINKS ─────────────────────────────────────────────────────────────
export const contactInfo = [
  {
    label: 'Email',
    value: 'naqeebdr@gmail.com',
    href: 'mailto:naqeebdr@gmail.com',
    icon: 'Mail',
  },
  {
    label: 'Phone / WhatsApp',
    value: '+92 314 5588013',
    href: 'tel:+923145588013',
    icon: 'Phone',
  },
  {
    label: 'LinkedIn',
    value: 'Naqeebullah Khan',
    href: 'https://www.linkedin.com/in/naqeebullahh/',
    icon: 'Linkedin',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'naqeebullah19',
    href: 'https://github.com/naqeebullah19',
    icon: 'Github',
    external: true,
  },
];