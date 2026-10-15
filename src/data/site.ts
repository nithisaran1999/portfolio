// ---------------------------------------------------------------------------
// Portfolio content — edit this file to make the site yours.
// Every user-facing string is bilingual: `{ en, th }`.
// ---------------------------------------------------------------------------

export type Social = {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'x' | 'mail' | 'website';
};

export type BilingualText = {
  en: string;
  th: string;
};

export type Project = {
  title: BilingualText;
  description: BilingualText;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  category: BilingualText;
  items: string[];
};

export type Experience = {
  role: BilingualText;
  company: BilingualText;
  companyUrl?: string;
  period: BilingualText;
  description: BilingualText;
  highlights: BilingualText[];
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
  name: 'Nithisaran',
  role: {
    en: 'AI-Driven Software Developer',
    th: 'นักพัฒนาซอฟต์แวร์ขับเคลื่อนด้วย AI',
  },
  tagline: {
    en: 'I build fast, accessible, and delightful web experiences.',
    th: 'ฉันสร้างเว็บที่รวดเร็ว เข้าถึงได้ และน่าใช้งาน',
  },
  location: {
    en: 'Thailand',
    th: 'ประเทศไทย',
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/nithisaran1999', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
    { name: 'X', url: 'https://x.com/yourname', icon: 'x' },
  ] satisfies Social[],
} as const;

export const aboutMe = {
  description: {
    en: 'A modern software developer focused on seamlessly blending Software Engineering with AI Workflows. I believe in leveraging AI to accelerate development (fast iteration) — from problem-solving and system design to code refactoring — to deliver high-quality work and create business value quickly and precisely.',
    th: 'นักพัฒนาซอฟต์แวร์ยุคใหม่ที่มุ่งเน้นการผสานพลังระหว่าง Software Engineering และ AI Workflows เข้าด้วยกันอย่างลงตัว เชื่อมั่นในการใช้ประโยชน์จาก AI มาช่วยเร่งความเร็วในการพัฒนา (Fast Iteration) ตั้งแต่การคิดวิธีแก้ปัญหา การออกแบบระบบ ไปจนถึงการ Refactor โค้ด เพื่อส่งมอบงานที่มีคุณภาพและสร้าง Business Value ได้อย่างรวดเร็วแม่นยำ',
  },
};

export const workApproach: WorkApproach[] = [
  {
    title: {
      en: 'AI-First & Efficiency Mindset',
      th: 'แนวคิด AI-First และประสิทธิภาพ',
    },
    body: {
      en: 'I treat AI as a working partner — using it to handle repetitive tasks (boilerplate) and accelerate solution discovery, so I can focus fully on core logic, architecture design, and the user experience (UX).',
      th: 'มอง AI เป็น Partner ในการทำงาน โดยใช้ AI ช่วยจัดการงานซ้ำซ้อน (Boilerplate) และเร่งกระบวนการค้นหาโซลูชัน เพื่อให้มีเวลาโฟกัสกับ Core Logic, Architecture design และประสบการณ์ของผู้ใช้ (UX) ได้เต็มที่',
    },
  },
  {
    title: {
      en: 'Modern Developer Workflows',
      th: 'เวิร์กโฟลว์นักพัฒนาสมัยใหม่',
    },
    body: {
      en: 'I weave AI agents and CLI tools into every stage of the development lifecycle to ship features faster while maintaining high code quality standards.',
      th: 'ประยุกต์ใช้ AI Agent และ CLI Tools เข้ามาสอดแทรกในทุก Lifecycle ของการพัฒนา เพื่อเพิ่ม Speed ในการส่งมอบฟีเจอร์โดยยังคงมาตรฐานความถูกต้องของโค้ด',
    },
  },
  {
    title: {
      en: 'Adaptability & Continuous Learning',
      th: 'ความยืดหยุ่นและการเรียนรู้ต่อเนื่อง',
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
      th: 'ประสิทธิภาพและความเร็วสูง',
    },
    body: {
      en: 'Deliver work faster with AI-assisted workflows.',
      th: 'ส่งมอบงานได้เร็วยิ่งขึ้นด้วย AI-Assisted Workflows',
    },
  },
  {
    title: {
      en: 'Pragmatic Problem Solving',
      th: 'การแก้ปัญหาอย่างตรงจุด',
    },
    body: {
      en: 'Focus on solving problems precisely, quickly, and in ways that are easy to build on.',
      th: 'มุ่งเน้นการแก้ปัญหาที่ตรงจุด รวดเร็ว และต่อยอดได้ง่าย',
    },
  },
  {
    title: {
      en: 'Clean & Maintainable Results',
      th: 'ผลงานที่สะอาดและดูแลรักษาง่าย',
    },
    body: {
      en: 'Prioritize well-organized, readable work that stays easy to maintain in the long term.',
      th: 'ให้ความสำคัญกับโครงสร้างงานที่ระเบียบ อ่านง่าย และดูแลต่อได้ในระยะยาว',
    },
  },
];

export const skills: SkillGroup[] = [
  {
    category: { en: 'Languages', th: 'ภาษา' },
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Go'],
  },
  {
    category: { en: 'Frontend', th: 'ฟรอนต์เอนด์' },
    items: ['React', 'Astro', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    category: { en: 'Backend & Data', th: 'แบ็กเอนด์และข้อมูล' },
    items: ['Node.js', 'PostgreSQL', 'Redis', 'REST', 'GraphQL'],
  },
  {
    category: { en: 'Tools & Practices', th: 'เครื่องมือและแนวปฏิบัติ' },
    items: ['Git', 'Docker', 'CI/CD', 'Testing', 'Accessibility', 'Figma'],
  },
];

export const projects: Project[] = [
  {
    title: { en: 'Diabetes Patient Appointment & Syringe Management', th: 'ระบบจัดการนัดหมายและรับ–คืนเข็มสำหรับผู้ป่วยเบาหวาน' },
    description: {
      en: 'A web application developed during an internship at 4X-Treme to manage appointments for diabetes patients and track syringe collection and returns.',
      th: 'เว็บแอปพลิเคชันที่พัฒนาระหว่างฝึกงานที่ 4X-Treme สำหรับจัดการนัดหมายผู้ป่วยเบาหวาน และบันทึกการรับเข็มกับการคืนเข็ม',
    },
    tech: ['Web App', 'Entity Framework'],
    featured: true,
  },
  {
    title: { en: 'Donmuang Tollway Toll Collection System', th: 'ระบบจัดเก็บค่าผ่านทางดอนเมืองโทลล์เวย์' },
    description: {
      en: 'A toll collection program for toll booth employees to process vehicle payments on the Donmuang Tollway.',
      th: 'โปรแกรมสำหรับพนักงานหน้าตู้ใช้จัดเก็บค่าผ่านทางจากรถที่สัญจรบนทางด่วนดอนเมืองโทลล์เวย์',
    },
    tech: ['Toll Collection', 'Desktop Application'],
    featured: true,
  },
  {
    title: { en: 'Project Three', th: 'โปรเจกต์ 3' },
    description: {
      en: 'An open-source CLI tool and library that automates repetitive developer workflows, published to npm with full test coverage.',
      th: 'เครื่องมือ CLI และไลบรารีแบบโอเพนซอร์สที่ช่วยอัตโนมัติเวิร์กโฟลว์ซ้ำซ้อนของนักพัฒนา เผยแพร่บน npm พร้อมชุดทดสอบครบถ้วน',
    },
    tech: ['TypeScript', 'Node.js', 'Vitest'],
    sourceUrl: 'https://github.com/yourname/project-three',
  },
  {
    title: { en: 'Project Four', th: 'โปรเจกต์ 4' },
    description: {
      en: 'A data dashboard that turns raw metrics into clear, interactive visualizations with an accessible, responsive interface.',
      th: 'แดชบอร์ดข้อมูลที่แปลงเมตริกดิบให้เป็นภาพแสดงผลที่ชัดเจนและโต้ตอบได้ พร้อมอินเทอร์เฟซที่เข้าถึงได้และรองรับทุกขนาดหน้าจอ',
    },
    tech: ['React', 'D3.js', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/yourname/project-four',
  },
  {
    title: { en: 'PTTEP-Document Center', th: 'PTTEP-Document Center' },
    description: {
      en: 'An internal financial document system for PTTEP.',
      th: 'ระบบเอกสารการเงินภายใน PTTEP',
    },
    tech: ['Document Management', 'Finance', 'Internal System'],
  },
];

export const experience: Experience[] = [
  {
    role: { en: 'Full Stack Programmer', th: 'โปรแกรมเมอร์ฟูลสแตก' },
    company: { en: '1008bit Co., Ltd.', th: 'บริษัท 1008บิท จำกัด' },
    period: { en: '2021 — Present', th: '2021 — ปัจจุบัน' },
    description: {
      en: 'Working as a full-stack programmer at 1008bit Co., Ltd.',
      th: 'ทำงานในตำแหน่งโปรแกรมเมอร์ฟูลสแตกที่บริษัท 1008บิท จำกัด',
    },
    highlights: [],
  },
  {
    role: { en: 'Software Development Intern', th: 'นักศึกษาฝึกงานด้านการพัฒนาซอฟต์แวร์' },
    company: { en: '4X-Treme', th: '4X-Treme' },
    companyUrl: 'https://www.4x-treme.com/',
    period: { en: '2021', th: '2021' },
    description: {
      en: 'Developed web applications using Entity Framework.',
      th: 'รับผิดชอบการพัฒนาเว็บแอปพลิเคชันโดยใช้ Entity Framework',
    },
    highlights: [],
  },
];
