/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sonawane Rajesh Swapnil',
  displayName: 'Swapnil Sonawane',
  firstName: 'SWAPNIL',
  seriesTag: 'THE PROFESSIONAL PROFILE',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A Swapnil ORIGINAL',
  role: 'QA Lead / Agile Scrum Master',
  tagline: ['Quality Assurance', 'Testing', 'Agile Delivery'],
  intro:
    'A B.Tech Artificial Intelligence & Machine Learning student (CGPA 9.10) and QA Lead ensuring the quality and reliability of AI-powered platforms, payment systems and multi-tenant SaaS with Java, Python, React, Node.js and Docker.',
  location: 'Navi Mumbai, Maharashtra',
  email: 'mr.swapnilrsonawane@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/swapnil-sonawane-5437b310b',
    github: 'https://github.com/SwapnilSonawane',
  },
  resumePdf: '/assets/Swapnil_Sonawane_Resume.pdf',
  portrait: {
    src: '/assets/Swapnil.jpeg',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Swapnil Sonawane',
  },
  interests: ['Content Writing', 'Designing', 'Public Speaking'],
};

export const education = [
  {
    school: 'Indian Institute of Information Technology, Bangalore (IIIT-B)',
    place: 'Bangalore',
    degree: 'Data Science (Business Analyst)',
    period: 'June 2022 – April 2023',
  },
  {
    school: 'University of Mumbai',
    place: 'Navi Mumbai',
    degree: 'Bachelor of Engineering',
    period: 'July 2013 – May 2017',
  },
];

export const experience = [
  {
    company: 'Sodel Software Solutions Pvt Ltd',
    role: 'QA Lead / Agile Scrum Master',
    place: 'Navi Mumbai, Maharashtra',
    period: 'September 2022 – Present',
    points: [
      'Completed one year of intensive Full-Stack Development (FSD) training covering frontend, backend, database integration, and deployment workflows.',
      'Developed responsive and functional web applications by implementing user interfaces, server-side logic, and database connectivity.',
      'Deployed and managed web applications while applying version control, debugging, and end-to-end development practices.',
    ],
  },
  {
    company: 'Here Solutions India Pvt Ltd',
    role: 'Spatial Data Specialist II / Scrum Master',
    place: 'Navi Mumbai',
    period: 'September 2018 – September 2022',
    points: [
      'Clarified Scrum goals and actions to support team transparency.',
      'Removed impediments and supported continuous improvement to increase team efficiency and capacity.',
      'Executed sprint release plans, release trajectory, and release burn-down using capacity and velocity predictions.',
      'Gathered and communicated stakeholder requirements for product and sprint backlogs.',
    ],
  }
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'Agile-leadership',
    title: 'QA Agile leadership',
    year: '2026',
    genre: 'AI • NLP • LLM',
    logline: 'An AI-powered policy analysis platform across web, browser extension, mobile and desktop applications.',
    stack: ['Python', 'NLP', 'LLM', 'REST API'],
    build: [
      'Built an AI-powered policy analysis platform across web, browser extension, mobile, and desktop applications, processing 500+ policy documents with 92% accuracy and reducing manual review time by 60% across 8 policy categories.',
      'Engineered LLM-based Q&A, key-information extraction, and REST API integration for 10+ document types, enabling real-time policy insights and reducing decision turnaround time by 45%.',
    ],
    features: [
      'LLM-based Q&A over policy documents',
      'Key-information extraction',
      'REST API integration for 10+ document types',
      'Web, browser extension, mobile & desktop apps',
      'Real-time policy insights',
    ],
    metrics: [
      { value: '500+', label: 'policy documents processed' },
      { value: '92%', label: 'accuracy' },
      { value: '60%', label: 'less manual review time' },
      { value: '45%', label: 'faster decision turnaround' },
      { value: '8', label: 'policy categories' },
    ],
    // The resume links to https://github.com/Sushmitadasari/PolicyGuard-AI, which is not public yet (404).
    // Add `github: 'https://github.com/Sushmitadasari/PolicyGuard-AI',` back once the repo is public.
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway System',
    year: '2026',
    genre: 'Full-Stack • Fintech • Microservices',
    logline: 'A full-stack UPI & card payment gateway built around a strict payment state machine.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Docker'],
    build: [
      'Built full-stack UPI & card payment gateway processing 1,000+ transactions at 99.8% uptime with a strict payment state machine (processing → success/failed).',
      'Dockerized microservice architecture cut deployment setup by 70%; backend optimizations reduced API response time by 40% and tripled throughput under load.',
    ],
    features: [
      'UPI & card payments',
      'Strict payment state machine (processing → success / failed)',
      'Dockerized microservice architecture',
      'Backend optimizations for load',
    ],
    metrics: [
      { value: '1,000+', label: 'transactions processed' },
      { value: '99.8%', label: 'uptime' },
      { value: '70%', label: 'less deployment setup' },
      { value: '40%', label: 'faster API response' },
      { value: '3×', label: 'throughput under load' },
    ],
    github: 'https://github.com/Sushmitadasari/Payment-gateway-system-Project',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Platform',
    year: '2026',
    genre: 'SaaS • Security • DevOps',
    logline: 'Shared-database multi-tenancy with strict tenant isolation and 4-level JWT/RBAC.',
    stack: ['Node.js', 'React', 'PostgreSQL', 'Docker Compose'],
    build: [
      'Architected shared-database multi-tenancy for 50+ concurrent tenants with strict tenant_id isolation and 4-level JWT/RBAC, achieving zero unauthorized-access incidents across 200+ users.',
      'Implemented Docker Compose one-command deployment, reducing environment setup time from 45 minutes to under 2 minutes.',
    ],
    features: [
      'Shared-database multi-tenancy',
      'Strict tenant_id isolation',
      '4-level JWT / RBAC',
      'One-command Docker Compose deployment',
    ],
    metrics: [
      { value: '50+', label: 'concurrent tenants' },
      { value: '200+', label: 'users' },
      { value: '0', label: 'unauthorized-access incidents' },
      { value: '45m → <2m', label: 'environment setup time' },
    ],
    github: 'https://github.com/Sushmitadasari/Multi-Tenant-SaaS-Platform',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'algouniversity',
    title: 'Tech Fellow',
    org: 'AlgoUniversity',
    detail: 'Selected through competitive national selection — advanced DSA, algorithm optimization, and competitive coding.',
    laurel: 'National Selection',
  },
  {
    id: 'flipkart-grid',
    title: 'Semi-Finalist',
    org: 'Flipkart GRiD 7.0',
    detail: 'Competed among top national engineering talent.',
    laurel: 'Semi-Finalist',
    link: 'https://drive.google.com/file/d/16pXA2hssyJqlYMr27wfi6U4bjKDLvh9f/view?usp=drive_link',
  },
  {
    id: 'branch-topper',
    title: 'AIML Branch Topper',
    org: 'B.Tech AI & ML',
    detail: '9.24 SGPA for the semester.',
    laurel: 'Branch Topper',
  },
  {
    id: 'competitive-coding',
    title: '850+ Problems Solved',
    org: 'LeetCode • GFG • CodeChef',
    detail: 'LeetCode: 350+ DSA problems (peak rating 1442). GFG: 300+ problems (rating 1436). CodeChef: 200+ problems.',
    laurel: 'Competitive Coding',
  },
  {
    id: 'hackerrank',
    title: '5-Star Badges',
    org: 'HackerRank',
    detail: '5-star badges in C, Python, Java, and SQL.',
    laurel: 'Four Languages',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Scaled Agile', name: 'SAFe Agilist 6.0', link: '/assets/CertifiedSAFe6Agilist_Badge20230604-28-wdhdnu.pdf' },
  { issuer: 'IIIT-B', name: 'ACP in Data Science - Business Analytics', link: '/assets/ACP_Data Science_Business Analyst.pdf' },
  { issuer: 'Scrum Alliance', name: 'Certified Scrum Master (CSM)', link: '/assets/CSM.pdf' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'agile-tools',
    title: 'Agile Tools',
    subtitle: 'Tools listed on the resume',
    skills: [
      { name: 'JIRA', mono: 'Ji' },
      { name: 'Confluence', mono: 'Co' },
      { name: 'SAFe', mono: 'Sa' },
    ],
  },
  {
    id: 'analysis',
    title: 'Analysis',
    subtitle: 'Reporting and analytical skills',
    skills: [
      { name: 'Microsoft Power BI', mono: 'PB', note: 'Primary' },
      { name: 'Data Analysis', mono: 'DA' },
    ],
  },
  {
    id: 'people',
    title: 'Communication',
    subtitle: 'Collaboration and team support',
    skills: [
      { name: 'Communication Skills', mono: 'CS' },
      { name: 'Mentoring', mono: 'Me' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Collections', mono: 'Co' },
      { name: 'Multithreading', mono: 'Mt' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'JIRA': ['Oracle Java Certified Foundations Associate', 'HackerRank 5-star'],
  'Confluence': ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 5-star'],
  'Microsoft Power BI': ['HackerRank 5-star'],
  'Data Analysis': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Communication Skills': ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  'Mentoring': ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  'JavaScript': ['Cisco JavaScript Essentials 1 & 2'],
  'Communication Skill': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  'Docker': ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  'Microservices': ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  'PostgreSQL': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'MongoDB': ['MongoDB Certified Associate Developer'],
  'DBMS': ['NPTEL Database Management System', 'Oracle Database Foundations'],
  'DSA': ['AlgoUniversity Tech Fellow', '850+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Tech AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Professional Foundations',
    period: '2017 – 2022',
    synopsis: 'Procurement and spatial data experience, with Scrum team coordination responsibilities.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Procurement Specialist',
        description: 'Supplier coordination focused on lead time, cost, delivery, schedule, and quality.',
        tags: ['Supplier Management', 'Procurement'],
        runtime: 'Jun 2017 – Aug 2018',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Spatial Data and Scrum Mastery',
    period: '2023 – Present',
    synopsis: 'Spatial Data Specialist II role with Scrum facilitation, release planning, stakeholder communication, and project risk tracking.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Artificial Intelligence and Machine Learning — CGPA 9.10.',
        tags: ['Spatial Data', 'Scrum', 'Release Planning'],
        runtime: 'Sep 2018 – Sep 2022',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Topper',
        description: 'AIML Branch Topper with a 9.24 SGPA for the semester.',
        tags: ['9.24 SGPA', 'Branch Topper'],
        runtime: 'One semester',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: 'LeetCode 350+ (peak 1442), GFG 300+ (1436), CodeChef 200+ and HackerRank 5-star badges in C, Python, Java and SQL.',
        tags: ['DSA', 'LeetCode', 'GFG', 'CodeChef', 'HackerRank'],
        runtime: '850+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2025 – 2026',
    synopsis: 'One year of intensive Full-Stack Development training as a Trainee at Technical Hub Pvt Ltd.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Team Coaching',
        description: 'Coaches teams and product owners in Scrum practices and supports self-organization and continuous improvement.',
        tags: ['Scrum', 'Coaching', 'Retrospectives'],
        runtime: 'Sep 2022 – Present',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Sprint and Release Delivery',
        description: 'Supports capacity-based prioritization, sprint performance analysis, risk mitigation, and release planning.',
        tags: ['Sprint Planning', 'Performance Analysis', 'Release Planning'],
        runtime: 'Sep 2022 – Present',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Deployer',
        description: 'Deployed and managed web applications with version control, debugging and end-to-end development practices.',
        tags: ['Git / GitHub', 'Deployment'],
        runtime: 'Sep 2022 – Present',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Three Originals — an AI platform, a payment gateway and a multi-tenant SaaS — plus national-level recognition.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Builder',
        description: 'PolicyGuard AI — LLM-based Q&A and key-information extraction across 500+ policy documents at 92% accuracy.',
        tags: ['Python', 'NLP', 'LLM'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Architect',
        description: 'Payment Gateway System and Multi-Tenant SaaS Platform — state machines, microservices, tenant isolation and RBAC.',
        tags: ['Node.js', 'PostgreSQL', 'Docker'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Fellow',
        description: 'Selected as a Tech Fellow at AlgoUniversity and reached the Semi-Finals of Flipkart GRiD 7.0.',
        tags: ['AlgoUniversity', 'Flipkart GRiD 7.0'],
        runtime: 'National stage',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring System Design, Cloud Computing (AWS) and Machine Learning.',
        tags: ['System Design', 'AWS', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'QA Agile Lead', detail: 'Sodel Software Solutions • Sep 2022 – Present', palette: amber },
  { label: 'Team scope', title: '35 Resources', detail: 'Across 4 Agile Release Trains', palette: crimson },
  { label: 'Experience', title: '6.5 Years', detail: 'Professional experience stated in the resume', palette: ocean },
  { label: 'Certification', title: 'SAFe Agilist 6.0', detail: 'Scaled Agile • June 2023', palette: violet },
  { label: 'Certification', title: 'Certified Scrum Master', detail: 'Scrum Alliance • June 2021 – June 2022', palette: jade },
  { label: 'Certification', title: 'AWS AI Lean 6 Sigma Expert', detail: 'Simplilearn • September – November 2021', palette: amber },
  { label: 'Problems solved', title: '850+', detail: 'LeetCode 350+ • GFG 300+ • CodeChef 200+', palette: crimson },
  { label: 'The training arc', title: '1 Year of FSD', detail: 'Technical Hub Pvt Ltd', palette: ocean },
  { label: 'Database credential', title: 'MongoDB', detail: 'Certified Associate Developer', palette: jade },
  { label: 'Current focus', title: 'System Design', detail: 'with Cloud (AWS) & Machine Learning', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Scrum Master',
    lines: ['Agile and optimistic Scrum Master', '6.5 years of professional experience'],
    chips: ['Agile Delivery', 'Team Coaching', 'Scrum Facilitation', 'Release Planning'],
  },
  {
    kicker: 'Leadership',
    title: 'Multi-team delivery',
    lines: ['Responsible for 35 resources', 'Supporting multiple product deliveries across 4 ARTs'],
    chips: ['Java', 'Python', 'React', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    kicker: 'Experience',
    title: 'Scrum Master & QA Lead',
    lines: ['Sodel Software Solutions · September 2022 – Present', 'Here Solutions India · September 2018 – September 2022'],
  },
  {
    kicker: 'Education',
    title: 'Business Analysis and Engineering',
    lines: ['Data Science (Business Analyst) · IIIT-B', 'Bachelor of Engineering · University of Mumbai'],
  },
  {
    kicker: 'Certified',
    title: 'Agile and process improvement',
    lines: ['SAFe Agilist 6.0 · Certified Scrum Master', 'Lean 6 Sigma Expert'],
  },
  {
    kicker: 'Certified',
    title: '16 Certifications',
    lines: ['AWS · MongoDB · Oracle · GitHub · Pearson', 'NPTEL · Cisco · Udemy'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing (AWS) · Machine Learning'],
  },
];

export type ProfileId = 'Swapnil' | 'recruiter' | 'AgileDelivery' | 'QualityFirst';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'Swapnil',
    name: 'Swapnil',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, skills, and education first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'AgileDelivery',
    name: 'Agile Delivery',
    blurb: 'Agile delivery and work history',
    color: '#46e3a8',
    order: ['originals', 'journey', 'skills', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'QualityFirst',
    name: 'Quality First',
    blurb: 'Coaching and collaboration',
    color: '#ff6b6b',
    order: ['about', 'skills', 'journey', 'moments', 'originals', 'picks', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'QA Team Lead • Agile delivery', palette: violet },
  journey: { nav: 'Journey', card: 'Career Journey', meta: `${seasons.length} Career Chapters • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'Professional Experience', meta: `${projects.length} The Roles • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Highlights', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Certifications', meta: `${achievements.length} Certifications • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
