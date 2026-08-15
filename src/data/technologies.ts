export interface Technology {
  name: string;
  category: 'frontend' | 'tools' | 'backend';
  role: string;
  featured?: boolean;
}

const technologies: Technology[] = [
  { name: 'React', category: 'frontend', role: 'UI Library', featured: true },
  { name: 'TypeScript', category: 'frontend', role: 'Type Safety', featured: true },
  { name: 'Next.js', category: 'frontend', role: 'Fullstack React', featured: true },
  { name: 'Tailwind CSS', category: 'frontend', role: 'Utility Styling', featured: true },
  { name: 'JavaScript', category: 'frontend', role: 'Core Language', featured: true },
  { name: 'HTML', category: 'frontend', role: 'Semantic Structure' },
  { name: 'CSS', category: 'frontend', role: 'Modern Layouts' },
  { name: 'Vite', category: 'tools', role: 'Build Tool', featured: true },
  { name: 'Git', category: 'tools', role: 'Version Control', featured: true },
  { name: 'GitHub', category: 'tools', role: 'Collaboration', featured: true },
  { name: 'Firebase', category: 'tools', role: 'Backend & Auth', featured: true },
  { name: 'Figma', category: 'tools', role: 'UI/UX Design', featured: true },
  { name: 'Vercel', category: 'tools', role: 'Edge Deployment', featured: true },
  { name: 'Node.js', category: 'backend', role: 'Runtime & APIs' },
];

export default technologies;
