export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  slug: string;
  featured?: boolean;
  accentColor: string;  // brand accent used for card glow/border
  liveUrl?: string;     // direct link to live website
}

const projects: Project[] = [
  {
    id: 'devgear',
    number: '01',
    name: 'DevGear',
    tagline: 'The developer affiliate platform built for growth.',
    description:
      'Developer-focused ecosystem and gear curation platform designed to help creators discover useful hardware & software. Engineered with instant search, category filtering, and high-contrast dark UX.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    slug: 'devgear',
    featured: true,
    accentColor: '#A855F7', // DevGear purple
    liveUrl: 'https://devgear.byahmed.dev',
  },
  {
    id: 'soon',
    number: '02',
    name: 'SOON — Somali Optical Networks',
    tagline: 'Next-Gen Telecommunications & AI Platform for Somalia.',
    description:
      'Full-stack telecommunications web application featuring interactive fiber coverage maps, modern service onboarding, and Google Genkit AI for intelligent customer troubleshooting and package routing.',
    technologies: ['Next.js 15', 'TypeScript', 'Genkit AI', 'Firebase'],
    slug: 'soon',
    featured: true,
    accentColor: '#06B6D4', // SOON cyan/teal
    liveUrl: 'https://soon.byahmed.dev',
  },
  {
    id: 'finvest',
    number: '03',
    name: 'Finvest',
    tagline: 'Modern personal crypto & banking interface built for real-time portfolio telemetry.',
    description:
      'High-clarity cryptocurrency dashboard and financial telemetry interface built with React and Tailwind CSS. Features dynamic multi-asset tracking, live balance calculations, vector trendlines, and instant crypto swapping.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
    slug: 'finvest',
    featured: true,
    accentColor: '#C8FF3D', // Finvest lime
    liveUrl: 'https://finvest.ahmddev.tech',
  },
];

export default projects;
