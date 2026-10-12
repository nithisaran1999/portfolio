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
  email: 'nithisaran@gmail.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
    { name: 'X', url: 'https://x.com/yourname', icon: 'x' },
    { name: 'Email', url: 'mailto:nithisaran@gmail.com', icon: 'mail' },
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
    title: { en: 'Project One', th: 'โปรเจกต์ 1' },
    description: {
      en: 'A full-stack web application that helps teams plan and track work. Features real-time collaboration, a polished UI, and a fast, type-safe data layer.',
      th: 'เว็บแอปพลิเคชันแบบฟูลสแตกที่ช่วยทีมวางแผนและติดตามงาน มาพร้อมการทำงานร่วมกันแบบเรียลไทม์ UI ที่ประณีต และ data layer ที่รวดเร็วแบบ type-safe',
    },
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/yourname/project-one',
    featured: true,
  },
  {
    title: { en: 'Project Two', th: 'โปรเจกต์ 2' },
    description: {
      en: 'A headless, content-driven marketing site built with Astro. Ships with zero JavaScript by default and scores 100 on Lighthouse.',
      th: 'เว็บไซต์การตลาดแบบ headless ที่ขับเคลื่อนด้วยเนื้อหา สร้างด้วย Astro แทบไม่มี JavaScript โดยค่าเริ่มต้น และได้คะแนน Lighthouse เต็ม 100',
    },
    tech: ['Astro', 'Tailwind CSS', 'MDX'],
    liveUrl: '#',
    sourceUrl: 'https://github.com/yourname/project-two',
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
];

export const experience: Experience[] = [
  {
    role: { en: 'Senior Software Engineer', th: 'วิศวกรซอฟต์แวร์อาวุโส' },
    company: { en: 'Company Name', th: 'ชื่อบริษัท' },
    period: { en: '2022 — Present', th: '2022 — ปัจจุบัน' },
    description: {
      en: 'Lead development of customer-facing features and internal tooling, mentoring engineers and driving accessibility and performance initiatives.',
      th: 'นำทีมพัฒนาฟีเจอร์ที่ใช้งานจริงและเครื่องมือภายใน ให้คำปรึกษาวิศวกร และผลักดันโครงการด้านการเข้าถึงและประสิทธิภาพ',
    },
    highlights: [
      { en: 'Reduced page load times by 40% through performance profiling and code-splitting.', th: 'ลดเวลาโหลดหน้าเว็บลง 40% ด้วยการวิเคราะห์ประสิทธิภาพและการแยกโค้ด' },
      { en: 'Built a reusable design system adopted across three product teams.', th: 'สร้าง design system ที่นำกลับมาใช้ใหม่ได้และถูกใช้โดยทีมผลิตภัณฑ์ 3 ทีม' },
      { en: 'Mentored four engineers and ran the frontend guild.', th: 'ให้คำปรึกษาวิศวกร 4 คนและดูแลชุมชนนักพัฒนาฟรอนต์เอนด์' },
    ],
  },
  {
    role: { en: 'Software Engineer', th: 'วิศวกรซอฟต์แวร์' },
    company: { en: 'Previous Company', th: 'บริษัทก่อนหน้า' },
    period: { en: '2020 — 2022', th: '2020 — 2022' },
    description: {
      en: 'Shipped full-stack features end to end, collaborating closely with design and product to deliver polished, reliable software.',
      th: 'ส่งมอบฟีเจอร์ฟูลสแตกตั้งแต่ต้นจนจบ ทำงานใกล้ชิดกับทีมออกแบบและผลิตภัณฑ์เพื่อส่งมอบซอฟต์แวร์ที่ประณีตและเชื่อถือได้',
    },
    highlights: [
      { en: 'Delivered a real-time collaboration feature used by thousands of customers.', th: 'ส่งมอบฟีเจอร์การทำงานร่วมกันแบบเรียลไทม์ที่มีลูกค้าใช้งานนับพันราย' },
      { en: 'Introduced automated testing that cut regression bugs by 30%.', th: 'นำการทดสอบอัตโนมัติมาใช้ ลดบั๊กแบบ regression ลง 30%' },
      { en: 'Owned the migration to TypeScript across the codebase.', th: 'รับผิดชอบการย้ายโค้ดเบสทั้งหมดไปใช้ TypeScript' },
    ],
  },
  {
    role: { en: 'Junior Developer', th: 'นักพัฒนาจูเนียร์' },
    company: { en: 'First Company', th: 'บริษัทแรก' },
    period: { en: '2019 — 2020', th: '2019 — 2020' },
    description: {
      en: 'Built and maintained marketing sites and web apps while learning modern development practices.',
      th: 'สร้างและดูแลเว็บไซต์การตลาดและเว็บแอปพลิเคชัน พร้อมเรียนรู้แนวทางการพัฒนาสมัยใหม่',
    },
    highlights: [
      { en: 'Rebuilt the company marketing site with a modern stack.', th: 'ปรับปรุงเว็บไซต์การตลาดของบริษัทใหม่ด้วยเทคโนโลยีสมัยใหม่' },
      { en: 'Collaborated on the core product UI and API integrations.', th: 'ร่วมพัฒนาส่วน UI ของผลิตภัณฑ์หลักและการเชื่อมต่อ API' },
    ],
  },
];
