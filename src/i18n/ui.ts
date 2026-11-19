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
      badge: "I'm hired",
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
      focusValue: 'Practical AI Integration',
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
      description: 'Want to connect or see what I’m building? Find me online.',
      findMe: 'Find me online',
    },
    footer: {
      builtWith: 'Built with Astro & Bun.',
    },
  },
  th: {
    nav: {
      about: 'เกี่ยวกับผม',
      how: 'วิธีทำงาน',
      skills: 'ทักษะ',
      projects: 'ผลงาน',
      experience: 'ประสบการณ์',
      contact: 'ติดต่อ',
    },
    theme: {
      toggle: 'เปลี่ยนธีม',
    },
    hero: {
      badge: 'มีงานประจำแล้ว',
      greeting: 'สวัสดีครับ ผมชื่อ',
      viewWork: 'ดูผลงานของผม',
      getInTouch: 'ติดต่อผม',
    },
    about: {
      eyebrow: 'เกี่ยวกับผม',
      whatImGoodAt: 'งานที่ผมถนัด',
      goodAt: [
        {
          title: 'พัฒนาฟรอนต์เอนด์',
          body: 'ผมทำเว็บให้ดูดีและใช้งานสะดวกบนหน้าจอขนาดต่าง ๆ พร้อมวางโครงสร้างให้แก้ไข เพิ่มฟีเจอร์ และดูแลต่อได้ง่าย',
        },
        {
          title: 'แบ็กเอนด์และการออกแบบระบบ',
          body: 'ผมออกแบบและพัฒนาระบบหลังบ้านให้เหมาะกับแต่ละโปรเจกต์ ตั้งแต่วางโครงสร้าง จัดการข้อมูล ไปจนถึงเชื่อมต่อบริการต่าง ๆ โดยใส่ใจเรื่องความถูกต้อง ความปลอดภัย และความน่าเชื่อถือ',
        },
        {
          title: 'ระบบที่ทำงานได้ดีและไว้ใจได้',
          body: 'ผมใส่ใจให้เว็บและแอปทำงานได้เร็ว ใช้ทรัพยากรเท่าที่จำเป็น และแก้จุดที่ทำให้ผู้ใช้ติดขัด เพื่อให้งานที่ทำออกมาใช้งานได้ดีจริง',
        },
      ],
      location: 'ที่อยู่',
      focus: 'ความเชี่ยวชาญ',
      experience: 'ประสบการณ์',
      focusValue: 'ประยุกต์ใช้ AI กับงานจริง',
      experienceValue: '5+ ปี',
    },
    howIWork: {
      eyebrow: 'วิธีทำงาน',
      title: 'วิธีทำงานของผม',
      description: 'วิธีคิดและวิธีทำงานที่ผมใช้ในแต่ละโปรเจกต์',
    },
    value: {
      eyebrow: 'ผมช่วยอะไรได้บ้าง',
      title: 'ผมช่วยทีมได้อย่างไร',
      description: 'สิ่งที่ผมช่วยทีมและองค์กรได้',
    },
    skills: {
      eyebrow: 'ทักษะ',
      title: 'เครื่องมือและเทคโนโลยี',
      description: 'ภาษา เฟรมเวิร์ก และเครื่องมือที่ผมใช้ทำงาน',
    },
    projects: {
      eyebrow: 'ผลงาน',
      title: 'งานที่ผมเคยทำ',
      description: 'รวมบางโปรเจกต์ที่ผมเคยทำ ทั้งงานที่สนุกและโจทย์ที่ได้ลองแก้',
      featured: 'ไฮไลต์',
      liveDemo: 'ลองใช้งาน',
      source: 'ดูโค้ด',
    },
    experience: {
      eyebrow: 'ประสบการณ์',
      title: 'ผมเคยทำงานที่ไหนบ้าง',
      description: 'ที่ผ่านมา ผมทำงานที่ไหนและทำอะไรมาบ้าง',
    },
    contact: {
      eyebrow: 'ติดต่อ',
      title: 'มาร่วมงานกัน',
      description: 'อยากคุยหรือติดตามผลงาน แวะมาทักกันได้ครับ',
      findMe: 'ช่องทางออนไลน์',
    },
    footer: {
      builtWith: 'สร้างด้วย Astro & Bun',
    },
  },
} as const;
