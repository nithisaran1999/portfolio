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

export const site = {
  name: 'Your Name',
  role: 'Software Engineer',
  tagline: 'I build fast, accessible, and delightful web experiences.',
  location: 'City, Country',
  email: 'hello@example.com',
  resumeUrl: '#',
  intro: [
    "I'm a software engineer who enjoys turning complex problems into clean, human-centered products. I care deeply about performance, accessibility, and the small details that make software feel great to use.",
    'Currently I focus on building modern web applications with TypeScript, React, and Astro — from design systems to full-stack features.',
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
    { name: 'X', url: 'https://x.com/yourname', icon: 'x' },
    { name: 'Email', url: 'mailto:hello@example.com', icon: 'mail' },
  ] satisfies Social[],
} as const;

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
