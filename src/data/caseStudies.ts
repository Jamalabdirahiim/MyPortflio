export interface CaseStudySection {
  heading: string;
  subheading?: string;
  body: string[];
  bulletPoints?: string[];
  techCallout?: {
    title: string;
    items: string[];
  };
}

export interface CaseStudyData {
  id: string;
  githubUrl?: string;
  liveUrl?: string;
  role: string;
  timeline: string;
  coreLanguages: string[];
  architectureOverview: string;
  highlights: { label: string; value: string }[];
  sections: CaseStudySection[];
}

export const caseStudies: Record<string, CaseStudyData> = {
  devgear: {
    id: 'devgear',
    githubUrl: 'https://github.com/Jamalabdirahiim/DevGear',
    liveUrl: 'https://devgear.byahmed.dev',
    role: 'Lead Frontend Engineer & UI Designer',
    timeline: '2025 – 2026',
    coreLanguages: ['TypeScript', 'JavaScript (ESNext)', 'React 18', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    architectureOverview:
      'Component-driven single page application built with Vite and React, engineered for ultra-low latency, dynamic product filtering, and a dark-mode developer aesthetic.',
    highlights: [
      { label: 'Build Tool', value: 'Vite 5 (HMR <50ms)' },
      { label: 'UI Architecture', value: 'Atomic Components' },
      { label: 'State Management', value: 'React Hooks & Context' },
      { label: 'Styling', value: 'Tailwind CSS + Glassmorphism' },
    ],
    sections: [
      {
        heading: '01. Problem & Opportunity',
        subheading: 'Fragmented developer hardware and software curation',
        body: [
          'Developers and creators often struggle to find authentic, peer-reviewed workstations, peripherals, and software tools without wading through cluttered generic e-commerce sites.',
          'DevGear was conceptualized to serve as a curated, high-aesthetic developer ecosystem where tech enthusiasts can explore battle-tested gear with transparent specs, affiliate links, and community endorsements.',
        ],
      },
      {
        heading: '02. Engineering & Technical Implementation',
        subheading: 'High-performance client architecture with instantaneous search',
        body: [
          'The interface is built around modular React components leveraging custom hooks for responsive filtering, categorization by developer discipline (Frontend, Backend, DevOps, Design), and lightning-fast instant search indexing.',
          'Styling utilizes Tailwind CSS with customized color palettes, CSS backdrop filters, and delicate neon accents that resonate with modern developer tooling aesthetics (reminiscent of Linear and Vercel).',
        ],
        techCallout: {
          title: 'Key Technical Stack Details',
          items: [
            'React 18 & TypeScript for type-safe component contracts and robust data interfaces',
            'Vite bundler providing optimized tree-shaking and near-instant hot module replacement',
            'Framer Motion for micro-interactions, modal transitions, and magnetic button physics',
            'Lucide Icons for lightweight SVG icon geometry with zero layout shift',
          ],
        },
      },
      {
        heading: '03. User Experience & Interaction Design',
        subheading: 'Meticulous details for a developer-centric audience',
        body: [
          'Careful attention was paid to keyboard navigation, intuitive category pills, and responsive cards that scale gracefully across mobile, tablet, and ultra-wide displays.',
          'Custom micro-animations ensure that interacting with product previews, spec sheets, and external vendor redirects feels crisp and rewarding.',
        ],
      },
      {
        heading: '04. Key Takeaways & Future Roadmap',
        subheading: 'Performance lessons and scaling the product catalog',
        body: [
          'Building DevGear solidified best practices in zero-CLS image loading, dynamic client-side filtering without re-render cascades, and maintaining accessible contrast ratios on dark OLED backgrounds.',
          'Upcoming updates will introduce community review submissions, personalized gear setup showcases, and user bookmark synchronization.',
        ],
      },
    ],
  },

  soon: {
    id: 'soon',
    githubUrl: 'https://github.com/Jamalabdirahiim/soon-final',
    liveUrl: 'https://soon.byahmed.dev',
    role: 'Full-Stack Frontend Engineer & AI Integrator',
    timeline: '2025 – 2026',
    coreLanguages: ['TypeScript', 'Next.js 15 (Turbopack)', 'React 19', 'Google Genkit AI', 'Firebase', 'Tailwind CSS', 'Radix UI'],
    architectureOverview:
      'Next-generation telecommunications interface and AI-driven platform for Somali Optical Networks, utilizing Next.js App Router, Firebase cloud infrastructure, and Google Genkit AI.',
    highlights: [
      { label: 'Framework', value: 'Next.js 15 + Turbopack' },
      { label: 'AI Engine', value: 'Google Genkit AI' },
      { label: 'Backend Services', value: 'Firebase Suite' },
      { label: 'Design System', value: 'Radix UI Primitives' },
    ],
    sections: [
      {
        heading: '01. Vision & Core Mission',
        subheading: 'Modernizing telecommunication access across the Horn of Africa',
        body: [
          'SOON (Somali Optical Networks) represents a visionary platform designed to visualize and manage modern fiber-optic network infrastructure and smart telecommunications services.',
          'The goal was to build a world-class enterprise web application that combines intuitive coverage exploration, customer onboarding, and intelligent AI assistance in a unified interface.',
        ],
      },
      {
        heading: '02. Full-Stack & AI Architecture',
        subheading: 'Next.js 15 with Turbopack, Firebase, and Google Genkit AI',
        body: [
          'The platform is architected on Next.js 15 App Router with Turbopack for ultra-fast builds and server-side streaming. It connects to Firebase for real-time data persistence and authentication.',
          'Integrated Google Genkit AI (`@genkit-ai/google-genai` and `@genkit-ai/next`) powers contextual natural language customer support, automated package recommendations, and network troubleshooting workflows.',
        ],
        techCallout: {
          title: 'Full Technology Arsenal',
          items: [
            'Next.js 15 App Router & Server Components for optimal SEO and instant initial page renders',
            'Google Genkit AI SDK for generative workflows and intelligent conversational routing',
            'Firebase Firestore & Auth for scalable document storage and real-time state synchronization',
            'Radix UI accessible headless primitives (Accordions, Dialogs, Avatars, Dropdowns)',
            'React Hook Form with Zod validation for robust form resilience and client-side error handling',
          ],
        },
      },
      {
        heading: '03. Interface Craft & Telecom Visualization',
        subheading: 'High-contrast data clarity and responsive interactive modules',
        body: [
          'Engineered customized coverage maps, interactive speed tier selectors, and service status monitors designed for high readability even under challenging network constraints.',
          'Implemented dark-mode cyan branding (`#06B6D4`) with luminous status rings and accessible typography to give the telecom brand a prestigious, trustworthy digital footprint.',
        ],
      },
      {
        heading: '04. Engineering Outcomes & Growth',
        subheading: 'Mastering production AI integration and modern React patterns',
        body: [
          'Successfully engineered a full-stack Next.js + AI product from scratch, managing asynchronous streaming responses, Firebase security rules, and clean atomic design hierarchy.',
          'Demonstrates readiness to build enterprise-scale, production-ready frontend architectures that bridge complex backend logic with effortless user experiences.',
        ],
      },
    ],
  },

  'finvest-one': {
    id: 'finvest-one',
    role: 'Frontend Engineer & UI Specialist',
    timeline: '2025 – 2026',
    coreLanguages: ['TypeScript', 'React', 'Tailwind CSS', 'SVG Canvas', 'Lucide React'],
    architectureOverview:
      'High-clarity financial dashboard engineered for multi-asset portfolio tracking, real-time balance calculations, and frictionless investment telemetry.',
    highlights: [
      { label: 'Focus', value: 'Financial Data Viz' },
      { label: 'Languages', value: 'TypeScript + React' },
      { label: 'Design', value: 'Precision Dark Mode' },
      { label: 'Performance', value: 'Zero Lag Canvas' },
    ],
    sections: [
      {
        heading: '01. Purpose & Overview',
        subheading: 'Eliminating cognitive load in modern personal finance',
        body: [
          'Finvest-One addresses the clutter of traditional financial apps by prioritizing clean typographic hierarchy, instantaneous net-worth calculations, and glanceable asset allocations.',
        ],
      },
      {
        heading: '02. Engineering & Data Presentation',
        subheading: 'Lightweight vector charts and responsive data grid',
        body: [
          'Built with responsive SVG charts, animated trend paths, and modular metric summary cards that allow users to inspect investment breakdowns by time horizon (1D, 1W, 1M, ALL).',
          'Styled with high-contrast obsidian surfaces and Electric Lime highlights to ensure maximum numerical legibility.',
        ],
      },
    ],
  },
};
