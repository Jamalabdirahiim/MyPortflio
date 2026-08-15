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
      'Developer-focused affiliate platform designed to help creators and communities discover useful technology products. Built with a focus on clean UX and fast performance.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    slug: 'devgear',
    featured: true,
    accentColor: '#A855F7', // DevGear purple
    liveUrl: 'https://devgear.byahmed.dev',
  },
  {
    id: 'soon',
    number: '02',
    name: 'SOON — Somali Optical Networks',
    tagline: 'Building the Future of Connectivity in Somalia.',
    description:
      'A technology concept focused on improving connectivity and communication infrastructure across Somalia. Explores modern network design principles through a product lens.',
    technologies: ['React', 'Firebase', 'AI'],
    slug: 'soon',
    featured: true,
    accentColor: '#06B6D4', // SOON cyan/teal
    liveUrl: 'https://soon.byahmed.dev',
  },
  {
    id: 'finvest-one',
    number: '03',
    name: 'Finvest-One',
    tagline: 'Modern financial dashboard built around clarity.',
    description:
      'Modern financial dashboard interface designed around clarity, data visualization, and usability. Focused on making financial information accessible and actionable.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    slug: 'finvest-one',
    featured: true,
    accentColor: '#C8FF3D', // Finvest lime
  },
];

export default projects;
