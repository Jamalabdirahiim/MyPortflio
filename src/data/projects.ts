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
    id: 'finvest-one',
    number: '03',
    name: 'Finvest-One',
    tagline: 'Modern financial telemetry built around clarity.',
    description:
      'Precision financial dashboard interface designed around high-density telemetry, multi-asset portfolio tracking, and interactive canvas charts for zero-lag data visualization.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    slug: 'finvest-one',
    featured: true,
    accentColor: '#C8FF3D', // Finvest lime
  },
];

export default projects;
