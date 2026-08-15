import React from 'react';

export const ReactIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const TSIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <rect width="32" height="32" rx="4" fill="#3178C6" />
    <path d="M18.8 19.8c.6.9 1.4 1.4 2.5 1.4 1.1 0 1.8-.6 1.8-1.4 0-.9-.7-1.3-2.1-1.8-2.1-.8-3.5-1.7-3.5-3.6 0-2 1.6-3.4 4-3.4 1.7 0 3 .6 3.9 1.8l-1.6 1.3c-.6-.7-1.3-1.1-2.3-1.1-1 0-1.6.5-1.6 1.2 0 .8.6 1.1 1.9 1.6 2.3.9 3.7 1.8 3.7 3.8 0 2.2-1.7 3.6-4.3 3.6-2 0-3.6-.8-4.5-2.2l2.1-1.3zM9.5 13.2h3.5v10H10.8V15.2H7.3v-2h2.2z" fill="#FFFFFF" />
  </svg>
);

export const JSIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <rect width="32" height="32" rx="4" fill="#F7DF1E" />
    <path d="M19.5 21.8c.8 1.3 1.9 2.1 3.5 2.1 1.5 0 2.5-.7 2.5-1.8 0-1.2-.9-1.7-2.7-2.4-2.7-1-4.5-2.2-4.5-4.7 0-2.6 2-4.5 5.1-4.5 2.2 0 3.8.8 4.9 2.4l-2 1.6c-.6-.9-1.4-1.4-2.9-1.4-1.3 0-2.1.7-2.1 1.5 0 1 .8 1.4 2.5 2.1 3 1.1 4.7 2.3 4.7 4.9 0 2.8-2.2 4.6-5.5 4.6-2.6 0-4.6-1-5.6-2.9l2.1-1.5zM11.8 10.5h2.8v10.5c0 3.3-1.8 4.8-4.7 4.8-1.5 0-2.9-.5-3.8-1.4l1.6-1.8c.6.6 1.3.9 2.2.9 1.3 0 1.9-.7 1.9-2.5V10.5z" fill="#000000" />
  </svg>
);

export const TailwindIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
  </svg>
);

export const HTMLIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#E44D26" />
    <path d="M12 3.8v16.3l4.8-1.5 1.3-14.8H12z" fill="#F16529" />
    <path d="M8.2 7h7.6l-.2 2.2H12v2.2h3.4l-.5 5.2-2.9.9V19l4.5-1.4.6-6.8H8.2V7z" fill="#EBEBEB" />
    <path d="M12 11.4H8.4L8.2 9.2H12V7H8l.6 6.6H12v-2.2zm0 4.3l-2.3-.7-.2-1.8H7.3l.3 3.3L12 17.5v-1.8z" fill="#FFFFFF" />
  </svg>
);

export const CSSIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#1572B6" />
    <path d="M12 3.8v16.3l4.8-1.5 1.3-14.8H12z" fill="#33A9DC" />
    <path d="M12 7.2h3.8l-.3 3.2H12v2.2h3.2l-.5 5-2.7.8V20l4.3-1.3.8-9.3H12V7.2z" fill="#EBEBEB" />
    <path d="M12 12.6H8.5l-.2-2.2H12V8.2H6.1l.6 6.6H12v-2.2zm0 4.1l-2.1-.7-.1-1.6H7.6l.3 3.1 4.1 1.2v-2z" fill="#FFFFFF" />
  </svg>
);

export const ViteIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M29.8 4.4L16.8 28.6c-.4.7-1.3.7-1.7 0L2.2 4.4c-.4-.8.2-1.7 1.1-1.6L16 4.3l12.7-1.5c.9-.1 1.5.8 1.1 1.6z" fill="url(#vite-grad)" />
    <path d="M19.7 2.8L9.9 14.5c-.3.4 0 1 .5 1h4.8l-2.4 8.7c-.2.7.7 1.1 1.2.6L24.5 12c.4-.5 0-1.2-.6-1.2h-4.9l2-7.3c.2-.7-.7-1.2-1.3-.7z" fill="#FFD62E" />
    <defs>
      <linearGradient id="vite-grad" x1="2" y1="3" x2="30" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

export const GitIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9.1 4.3l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.7 1.2.5 1.8l2.6 2.6c.6-.2 1.3 0 1.8.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.4-1.2 1-1.4V8.9c-.6-.2-1-.8-1-1.4 0-.3.1-.6.3-.8L5.7 7.7 2.4 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" fill="#F05032" />
  </svg>
);

export const GitHubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#F3F1EA" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const FirebaseIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4.6 17.5L6.3 3.9c.1-.8 1.1-1.1 1.6-.5l3.2 4.4L4.6 17.5z" fill="#FFA000" />
    <path d="M12.6 10.2l2.3-4.4c.4-.7 1.4-.7 1.8.1l4.7 11.6-8.8-7.3z" fill="#F57C00" />
    <path d="M3.5 18.7L12 23.4l8.5-4.7-8.5-16.2c-.4-.7-1.4-.7-1.8.1L3.5 18.7z" fill="#FFCA28" />
  </svg>
);

export const FigmaIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
    <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
    <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
    <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
    <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
  </svg>
);

export const VercelIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#F3F1EA" className={className}>
    <path d="M12 2L24 22H0L12 2z" />
  </svg>
);

export const NextIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="11" fill="#000" stroke="#272A2C" strokeWidth="1" />
    <path d="M16.5 7.5v9m-4.5-9v9l5.5-7.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const NodeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l9 5.2v10.4L12 22.8l-9-5.2V7.2L12 2z" fill="#339933" opacity="0.2" />
    <path d="M12 2l9 5.2v10.4L12 22.8l-9-5.2V7.2L12 2z" stroke="#339933" strokeWidth="1.5" />
    <path d="M12 6.5v11m-5.5-8l11 6.5m0-6.5l-11 6.5" stroke="#339933" strokeWidth="1" />
  </svg>
);

export const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  React: ReactIcon,
  TypeScript: TSIcon,
  JavaScript: JSIcon,
  'Tailwind CSS': TailwindIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  'Next.js': NextIcon,
  Vite: ViteIcon,
  Git: GitIcon,
  GitHub: GitHubIcon,
  Firebase: FirebaseIcon,
  Figma: FigmaIcon,
  Vercel: VercelIcon,
  'Node.js': NodeIcon,
};
