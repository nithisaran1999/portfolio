// ---------------------------------------------------------------------------
// Portfolio content — edit this file to make the site yours.
// Every user-facing string is bilingual: `{ en, th }`.
// ---------------------------------------------------------------------------

export type Social = {
  name: string;
  url: string;
  icon: 'github' | 'gitlab' | 'linkedin' | 'x' | 'mail' | 'website';
};

export type BilingualText = {
  en: string;
  th: string;
};

export type Project = {
  title: BilingualText;
  description: BilingualText;
  tech: string[];
  logo?: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  tag?: string;
  icon?: string;
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
    th: 'นักพัฒนาซอฟต์แวร์ที่ใช้ AI ช่วยทำงาน',
  },
  tagline: {
    en: 'I understand your business and apply AI to build practical solutions that create real value.',
    th: 'ผมเริ่มจากทำความเข้าใจธุรกิจและปัญหาที่คุณเจอ แล้วเลือกใช้เทคโนโลยี รวมถึง AI ให้เหมาะกับงาน',
  },
  location: {
    en: 'Thailand',
    th: 'ประเทศไทย',
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/nithisaran1999', icon: 'github' },
    { name: 'GitLab', url: 'https://gitlab.com/nithisaran1999', icon: 'gitlab' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nithisaran-suksom-70a533233/', icon: 'linkedin' },
  ] satisfies Social[],
} as const;

export const aboutMe = {
  description: {
    en: 'A modern software developer focused on seamlessly blending Software Engineering with AI Workflows. I believe in leveraging AI to accelerate development (fast iteration) — from problem-solving and system design to code refactoring — to deliver high-quality work and create business value quickly and precisely.',
    th: 'ผมเป็นนักพัฒนาซอฟต์แวร์ที่ใช้ AI ช่วยทำงาน ตั้งแต่คิดวิธีแก้ปัญหา ออกแบบระบบ ไปจนถึงปรับปรุงโค้ด ผมชอบหาวิธีทำงานให้คล่องขึ้น โดยยังใส่ใจคุณภาพโค้ดและสิ่งที่คนใช้งานต้องการ',
  },
};

export const workApproach: WorkApproach[] = [
  {
    title: {
      en: 'AI-First & Efficiency Mindset',
      th: 'ใช้ AI ช่วยในงานพัฒนา',
    },
    body: {
      en: 'I treat AI as a working partner — using it to handle repetitive tasks (boilerplate) and accelerate solution discovery, so I can focus fully on core logic, architecture design, and the user experience (UX).',
      th: 'ผมใช้ AI เป็นผู้ช่วย ทั้งเขียนโค้ดส่วนที่ซ้ำ ๆ และช่วยหาวิธีแก้ปัญหา ทำให้มีเวลาใส่ใจกับการทำงานหลักของระบบ การออกแบบโครงสร้าง และประสบการณ์ของผู้ใช้มากขึ้น',
    },
  },
  {
    title: {
      en: 'Modern Developer Workflows',
      th: 'วิธีทำงานและเครื่องมือที่ใช้',
    },
    body: {
      en: 'I weave AI agents and CLI tools into every stage of the development lifecycle to ship features faster while maintaining high code quality standards.',
      th: 'ผมใช้ AI Agent และเครื่องมือ CLI ช่วยในแต่ละขั้นตอนของการพัฒนา เพื่อทำฟีเจอร์ได้เร็วขึ้น โดยยังตรวจสอบความถูกต้องของโค้ด',
    },
  },
  {
    title: {
      en: 'Adaptability & Continuous Learning',
      th: 'พร้อมปรับตัวและเรียนรู้สิ่งใหม่',
    },
    body: {
      en: 'I continuously learn and adapt to new tools, analyzing the pros and cons of each solution to choose the approach that best fits the problem at hand.',
      th: 'ผมชอบลองเครื่องมือใหม่ ๆ และดูข้อดีข้อเสียก่อนเลือกใช้ให้เหมาะกับงาน เพราะแต่ละโปรเจกต์มีโจทย์ไม่เหมือนกัน',
    },
  },
];

export const valuePoints: ValuePoint[] = [
  {
    title: {
      en: 'High Productivity & Speed',
      th: 'ระบบเร็ว ใช้งานลื่น',
    },
    body: {
      en: 'Deliver work faster with AI-assisted workflows.',
      th: 'ใช้ AI ช่วยให้งานเสร็จเร็วขึ้น',
    },
  },
  {
    title: {
      en: 'Pragmatic Problem Solving',
      th: 'แก้ปัญหาให้ตรงจุด',
    },
    body: {
      en: 'Focus on solving problems precisely, quickly, and in ways that are easy to build on.',
      th: 'เน้นแก้ปัญหาให้ตรงจุด ทำงานได้เร็ว และต่อยอดได้ง่าย',
    },
  },
  {
    title: {
      en: 'Clean & Maintainable Results',
      th: 'โค้ดอ่านง่าย ดูแลต่อได้',
    },
    body: {
      en: 'Prioritize well-organized, readable work that stays easy to maintain in the long term.',
      th: 'ผมชอบจัดโครงสร้างโค้ดให้เป็นระเบียบ อ่านเข้าใจง่าย และดูแลต่อได้',
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
    category: { en: 'Tools & Practices', th: 'เครื่องมือและวิธีทำงาน' },
    items: ['Git', 'Docker', 'CI/CD', 'Testing', 'Accessibility', 'Figma'],
  },
];

export const projects: Project[] = [
  {
    title: {
      en: 'Truck Weight Monitoring System — Vehicle Weight Control Office',
      th: 'ระบบตรวจสอบน้ำหนักรถบรรทุก สำนักงานควบคุมน้ำหนักยานพาหนะ',
    },
    description: {
      en: 'A Leaflet map dashboard for monitoring truck weighing checkpoints and alerting staff when an overweight or blacklisted vehicle is detected.',
      th: 'แดชบอร์ดแผนที่ Leaflet สำหรับติดตามจุดตรวจน้ำหนักรถบรรทุก พร้อมแจ้งเตือนเจ้าหน้าที่เมื่อพบรถน้ำหนักเกินหรือรถที่ติดบัญชีดำ',
    },
    tech: ['Leaflet', 'Map Dashboard', 'Vehicle Monitoring', 'Alert System'],
    logo: '/assets/highhway.png',
    featured: true,
    tag: 'VEHICLE WEIGHT CONTROL',
    icon: 'compass',
  },
  {
    title: { en: 'Diabetes Patient Appointment & Syringe Management', th: 'ระบบนัดหมายและรับ–คืนเข็มสำหรับผู้ป่วยเบาหวาน' },
    description: {
      en: 'A web application developed during an internship at 4X-Treme to manage appointments for diabetes patients and track syringe collection and returns.',
      th: 'เว็บแอปที่ผมพัฒนาระหว่างฝึกงานที่ 4X-Treme ใช้นัดหมายผู้ป่วยเบาหวานและบันทึกการรับ–คืนเข็ม',
    },
    tech: ['Web App', 'Entity Framework'],
    featured: true,
    tag: 'HEALTHCARE WEB APP',
    icon: 'layers',
  },
  {
    title: { en: 'Donmuang Tollway Toll Collection System', th: 'ระบบจัดเก็บค่าผ่านทางดอนเมืองโทลล์เวย์' },
    description: {
      en: 'A toll collection program for toll booth employees to process vehicle payments on the Donmuang Tollway.',
      th: 'โปรแกรมที่พนักงานประจำตู้ใช้เก็บค่าผ่านทางจากรถที่ใช้ทางด่วนดอนเมืองโทลล์เวย์',
    },
    tech: ['Toll Collection', 'Desktop Application'],
    logo: '/assets/DMT.png',
    featured: true,
    tag: 'TOLL COLLECTION SYSTEM',
    icon: 'cpu',
  },
  {
    title: {
      en: 'Airport Weather Reporting System (RTAF)',
      th: 'ระบบรายงานสภาพอากาศสนามบิน (กองข่าวอากาศ กองทัพอากาศ)',
    },
    description: {
      en: 'An aviation weather reporting and monitoring system developed for the Air Weather Division, Royal Thai Air Force (RTAF), delivering real-time meteorological observations, airfield weather reports, and flight support data.',
      th: 'ระบบของกองข่าวอากาศ กองทัพอากาศ ใช้รวบรวม ติดตาม และรายงานสภาพอากาศสนามบินและข้อมูลประจำสถานี เพื่อช่วยให้การปฏิบัติภารกิจการบินปลอดภัย',
    },
    tech: ['Aviation Weather', 'Meteorological System', 'Web Application'],
    logo: '/assets/rtaf.png',
    featured: true,
    tag: 'RTAF · AVIATION WEATHER',
    icon: 'cloud',
  },
  {
    title: { en: 'PTTEP-Document Center', th: 'ระบบเอกสารการเงินภายใน PTTEP' },
    description: {
      en: 'An internal financial document system for PTTEP.',
      th: 'ระบบเอกสารการเงินภายใน PTTEP',
    },
    tech: ['Document Management', 'Finance', 'Internal System'],
    logo: '/assets/PTTEP_Logo.svg.webp',
    tag: 'DOCUMENT MANAGEMENT',
    icon: 'shield-check',
  },
  {
    title: {
      en: 'PSC E-Asset State Asset Database System',
      th: 'ระบบฐานข้อมูลสินทรัพย์ของรัฐ PSC E-Asset',
    },
    description: {
      en: "A database system for managing state-owned assets under the Production Sharing Contract (PSC) E-Asset system for Thailand's Ministry of Energy.",
      th: 'ระบบฐานข้อมูลของกระทรวงพลังงาน ประเทศไทย ใช้จัดการสินทรัพย์ของรัฐภายใต้สัญญาแบ่งปันผลผลิต (PSC E-Asset)',
    },
    tech: ['PSC E-Asset', 'Asset Management', 'Database System'],
    logo: '/assets/Seal_of_the_Ministry_of_Energy_of_Thailand.svg.webp',
    tag: 'ENERGY · STATE ASSET MANAGEMENT',
    icon: 'layers',
  },
];

export const experience: Experience[] = [
  {
    role: { en: 'Full Stack Programmer', th: 'โปรแกรมเมอร์ฟูลสแตก' },
    company: { en: '1008bit Co., Ltd.', th: 'บริษัท 1008บิท จำกัด' },
    period: { en: '2021 — Present', th: '2021 — ปัจจุบัน' },
    description: {
      en: 'Working as a full-stack programmer at 1008bit Co., Ltd.',
      th: 'ทำงานเป็นโปรแกรมเมอร์ฟูลสแตกที่บริษัท 1008บิท จำกัด',
    },
    highlights: [],
  },
  {
    role: { en: 'Software Development Intern', th: 'นักศึกษาฝึกงานพัฒนาซอฟต์แวร์' },
    company: { en: '4X-Treme', th: '4X-Treme' },
    companyUrl: 'https://www.4x-treme.com/',
    period: { en: '2021', th: '2021' },
    description: {
      en: 'Developed web applications using Entity Framework.',
      th: 'พัฒนาเว็บแอปโดยใช้ Entity Framework',
    },
    highlights: [],
  },
];
