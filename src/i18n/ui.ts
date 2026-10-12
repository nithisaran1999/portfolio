// ---------------------------------------------------------------------------
// UI strings for the portfolio. Add or edit translations here.
// ---------------------------------------------------------------------------

export type Lang = 'en' | 'th';

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    nav: {
      about: 'About',
      how: 'How I Work',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    theme: {
      toggle: 'Toggle theme',
    },
    hero: {
      badge: 'Available for new opportunities',
      greeting: "Hi, I'm",
      viewWork: 'View my work',
      getInTouch: 'Get in touch',
    },
    about: {
      eyebrow: 'About Me',
      whatImGoodAt: "What I'm good at",
      goodAt: [
        { title: 'Frontend engineering', body: 'Building accessible, responsive interfaces with React and Astro.' },
        { title: 'Backend & APIs', body: 'Designing reliable APIs and data models with Node.js and SQL.' },
        { title: 'Performance', body: 'Making the web fast: code-splitting, caching, and Core Web Vitals.' },
      ],
      location: 'Location',
      focus: 'Focus',
      experience: 'Experience',
      focusValue: 'AI-Driven Development',
      experienceValue: '5+ years',
    },
    howIWork: {
      eyebrow: 'How I Work',
      title: 'My working approach',
      description: 'The mindset and workflows I bring to every project.',
    },
    value: {
      eyebrow: 'Value I Deliver',
      title: 'What I bring to the team',
      description: 'The impact I deliver to teams and organizations.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Tools & technologies',
      description: 'The languages, frameworks, and tools I reach for to ship great software.',
    },
    projects: {
      eyebrow: 'Projects',
      title: "Things I've built",
      description: 'A selection of projects that show what I enjoy building and the problems I like to solve.',
      featured: 'Featured',
      liveDemo: 'Live demo',
      source: 'Source',
    },
    experience: {
      eyebrow: 'Experience',
      title: "Where I've worked",
      description: "My career journey and the impact I've made along the way.",
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's work together",
      description: "Have a project in mind, a role to fill, or just want to say hi? My inbox is always open.",
      emailMe: 'Email me',
      findMe: 'Find me online',
    },
    footer: {
      builtWith: 'Built with Astro & Bun.',
    },
  },
  th: {
    nav: {
      about: 'เกี่ยวกับฉัน',
      how: 'แนวทางการทำงาน',
      skills: 'ทักษะ',
      projects: 'ผลงาน',
      experience: 'ประสบการณ์',
      contact: 'ติดต่อ',
    },
    theme: {
      toggle: 'สลับธีม',
    },
    hero: {
      badge: 'เปิดรับโอกาสใหม่',
      greeting: 'สวัสดี ฉันคือ',
      viewWork: 'ดูผลงานของฉัน',
      getInTouch: 'ติดต่อฉัน',
    },
    about: {
      eyebrow: 'เกี่ยวกับฉัน',
      whatImGoodAt: 'สิ่งที่ฉันถนัด',
      goodAt: [
        { title: 'วิศวกรรมฟรอนต์เอนด์', body: 'สร้างอินเทอร์เฟซที่เข้าถึงได้และรองรับทุกขนาดหน้าจอด้วย React และ Astro' },
        { title: 'แบ็กเอนด์และ API', body: 'ออกแบบ API และโมเดลข้อมูลที่เชื่อถือได้ด้วย Node.js และ SQL' },
        { title: 'ประสิทธิภาพ', body: 'ทำให้เว็บเร็ว: การแยกโค้ด การแคช และ Core Web Vitals' },
      ],
      location: 'ที่อยู่',
      focus: 'ความเชี่ยวชาญ',
      experience: 'ประสบการณ์',
      focusValue: 'การพัฒนาด้วย AI',
      experienceValue: '5+ ปี',
    },
    howIWork: {
      eyebrow: 'แนวทางการทำงาน',
      title: 'แนวทางการทำงานของฉัน',
      description: 'แนวคิดและเวิร์กโฟลว์ที่ฉันนำไปใช้กับทุกโปรเจกต์',
    },
    value: {
      eyebrow: 'สิ่งที่ฉันมอบให้',
      title: 'สิ่งที่ฉันมอบให้ทีม',
      description: 'คุณค่าที่ฉันส่งมอบให้กับทีมและองค์กร',
    },
    skills: {
      eyebrow: 'ทักษะ',
      title: 'เครื่องมือและเทคโนโลยี',
      description: 'ภาษา เฟรมเวิร์ก และเครื่องมือที่ฉันใช้เพื่อสร้างซอฟต์แวร์ที่ยอดเยี่ยม',
    },
    projects: {
      eyebrow: 'ผลงาน',
      title: 'สิ่งที่ฉันได้สร้าง',
      description: 'โปรเจกต์ที่คัดสรรซึ่งแสดงสิ่งที่ฉันสนุกกับการสร้างและปัญหาที่ฉันชอบแก้',
      featured: 'เด่น',
      liveDemo: 'ดูเดโม',
      source: 'ซอร์สโค้ด',
    },
    experience: {
      eyebrow: 'ประสบการณ์',
      title: 'ที่ที่ฉันเคยทำงาน',
      description: 'เส้นทางอาชีพของฉันและผลงานที่ฉันสร้างไว้ตลอดทาง',
    },
    contact: {
      eyebrow: 'ติดต่อ',
      title: 'มาร่วมงานกัน',
      description: 'มีโปรเจกต์ในใจ ต้องการคนมาร่วมทีม หรือแค่อยากทักทาย? กล่องข้อความของฉันเปิดรอเสมอ',
      emailMe: 'อีเมลฉัน',
      findMe: 'พบฉันออนไลน์',
    },
    footer: {
      builtWith: 'สร้างด้วย Astro & Bun',
    },
  },
} as const;
