// ---------------------------------------------------------------------------
// Portfolio content — edit this file to make the site yours.
// ---------------------------------------------------------------------------

export type Social = {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'x' | 'mail' | 'website';
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export type BilingualText = {
  en: string;
  th: string;
};

export type WorkApproach = {
  title: BilingualText;
  body: BilingualText;
};

export type ValuePoint = {
  title: BilingualText;
  body: BilingualText;
};

export const site = {
  name: 'Nithisaran Suksom',
  role: 'AI-Driven Software Developer',
  tagline: 'I build fast, accessible, and delightful web experiences.',
  location: 'Thailand',
  email: 'nithisaran.suksom@gmail.com',
  resumeUrl: '#',
  intro: [
    "I'm a software engineer who enjoys turning complex problems into clean, human-centered products. I care deeply about performance, accessibility, and the small details that make software feel great to use.",
    'Currently I focus on building modern web applications with TypeScript, React, and Astro — from design systems to full-stack features.',
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
    { name: 'X', url: 'https://x.com/yourname', icon: 'x' },
    { name: 'Email', url: 'mailto:nithisaran.suksom@gmail.com', icon: 'mail' },
  ] satisfies Social[],
} as const;

export const aboutMe = {
  title: 'About Me',
  titleTh: 'เกี่ยวกับฉัน',
  role: 'AI-Driven Software Developer',
  roleTh: 'นักพัฒนาซอฟต์แวร์ขับเคลื่อนด้วย AI',
  description:
    'A modern software developer focused on seamlessly blending Software Engineering with AI Workflows. I believe in leveraging AI to accelerate development (fast iteration) — from problem-solving and system design to code refactoring — to deliver high-quality work and create business value quickly and precisely.',
  descriptionTh:
    'นักพัฒนาซอฟต์แวร์ยุคใหม่ที่มุ่งเน้นการผสานพลังระหว่าง Software Engineering และ AI Workflows เข้าด้วยกันอย่างลงตัว เชื่อมั่นในการใช้ประโยชน์จาก AI มาช่วยเร่งความเร็วในการพัฒนา (Fast Iteration) ตั้งแต่การคิดวิธีแก้ปัญหา การออกแบบระบบ ไปจนถึงการ Refactor โค้ด เพื่อส่งมอบงานที่มีคุณภาพและสร้าง Business Value ได้อย่างรวดเร็วแม่นยำ',
};

export const workApproach: WorkApproach[] = [
  {
    title: {
      en: 'AI-First & Efficiency Mindset',
      th: 'AI-First & Efficiency Mindset',
    },
    body: {
      en: 'I treat AI as a working partner — using it to handle repetitive tasks (boilerplate) and accelerate solution discovery, so I can focus fully on core logic, architecture design, and the user experience (UX).',
      th: 'มอง AI เป็น Partner ในการทำงาน โดยใช้ AI ช่วยจัดการงานซ้ำซ้อน (Boilerplate) และเร่งกระบวนการค้นหาโซลูชัน เพื่อให้มีเวลาโฟกัสกับ Core Logic, Architecture design และประสบการณ์ของผู้ใช้ (UX) ได้เต็มที่',
    },
  },
  {
    title: {
      en: 'Modern Developer Workflows',
      th: 'Modern Developer Workflows',
    },
    body: {
      en: 'I weave AI agents and CLI tools into every stage of the development lifecycle to ship features faster while maintaining high code quality standards.',
      th: 'ประยุกต์ใช้ AI Agent และ CLI Tools เข้ามาสอดแทรกในทุก Lifecycle ของการพัฒนา เพื่อเพิ่ม Speed ในการส่งมอบฟีเจอร์โดยยังคงมาตรฐานความถูกต้องของโค้ด',
    },
  },
  {
    title: {
      en: 'Adaptability & Continuous Learning',
      th: 'Adaptability & Continuous Learning',
    },
    body: {
      en: 'I continuously learn and adapt to new tools, analyzing the pros and cons of each solution to choose the approach that best fits the problem at hand.',
      th: 'เรียนรู้และปรับตัวเข้ากับเครื่องมือใหม่ๆ อยู่เสมอ พร้อมวิเคราะห์ข้อดี-ข้อเสียของโซลูชันต่างๆ เพื่อเลือกใช้วิธีที่เหมาะสมที่สุดกับโจทย์ของแต่ละโครงการ',
    },
  },
];

export const valuePoints: ValuePoint[] = [
  {
    title: {
      en: 'High Productivity & Speed',
      th: 'High Productivity & Speed',
    },
    body: {
      en: 'Deliver work faster with AI-assisted workflows.',
      th: 'ส่งมอบงานได้เร็วยิ่งขึ้นด้วย AI-Assisted Workflows',
    },
  },
  {
    title: {
      en: 'Pragmatic Problem Solving',
      th: 'Pragmatic Problem Solving',
    },
    body: {
      en: 'Focus on solving problems precisely, quickly, and in ways that are easy to build on.',
      th: 'มุ่งเน้นการแก้ปัญหาที่ตรงจุด รวดเร็ว และต่อยอดได้ง่าย',
    },
  },
  {
    title: {
      en: 'Clean & Maintainable Results',
      th: 'Clean & Maintainable Results',
    },
    body: {
      en: 'Prioritize well-organized, readable work that stays easy to maintain in the long term.',
      th: 'ให้ความสำคัญกับโครงสร้างงานที่ระเบียบ อ่านง่าย และดูแลต่อได้ในระยะยาว',
    },
  },
];

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Go'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Astro', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'PostgreSQL', 'Redis', 'REST', 'GraphQL'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git', 'Docker', 'CI/CD', 'Testing', 'Accessibility', 'Figma'],
  },
];

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A full-stack web application that helps teams plan and track work. Features real-time collaboration, a polished UI, and a fast, type-safe data layer.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/yourname/project-one',
    featured: true,
  },
  {
    title: 'Project Two',
    description:
      'A headless, content-driven marketing site built with Astro. Ships with zero JavaScript by default and scores 100 on Lighthouse.',
    tech: ['Astro', 'Tailwind CSS', 'MDX'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/yourname/project-two',
    featured: true,
  },
  {
    title: 'Project Three',
    description:
      'An open-source CLI tool and library that automates repetitive developer workflows, published to npm with full test coverage.',
    tech: ['TypeScript', 'Node.js', 'Vitest'],
    sourceUrl: 'https://github.com/yourname/project-three',
  },
  {
    title: 'Project Four',
    description:
      'A data dashboard that turns raw metrics into clear, interactive visualizations with an accessible, responsive interface.',
    tech: ['React', 'D3.js', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/yourname/project-four',
  },
];

export const experience: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Company Name',
    period: '2022 — Present',
    description:
      'Lead development of customer-facing features and internal tooling, mentoring engineers and driving accessibility and performance initiatives.',
    highlights: [
      'Reduced page load times by 40% through performance profiling and code-splitting.',
      'Built a reusable design system adopted across three product teams.',
      'Mentored four engineers and ran the frontend guild.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Previous Company',
    period: '2020 — 2022',
    description:
      'Shipped full-stack features end to end, collaborating closely with design and product to deliver polished, reliable software.',
    highlights: [
      'Delivered a real-time collaboration feature used by thousands of customers.',
      'Introduced automated testing that cut regression bugs by 30%.',
      'Owned the migration to TypeScript across the codebase.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'First Company',
    period: '2019 — 2020',
    description:
      'Built and maintained marketing sites and web apps while learning modern development practices.',
    highlights: [
      'Rebuilt the company marketing site with a modern stack.',
      'Collaborated on the core product UI and API integrations.',
    ],
  },
];
