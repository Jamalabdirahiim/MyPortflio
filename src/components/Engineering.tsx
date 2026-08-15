import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Layers,
  Monitor,
  Braces,
  Zap,
  Grid3X3,
  MousePointerClick,
} from 'lucide-react';
import SectionLabel from './SectionLabel';

const principles = [
  {
    icon: Layers,
    title: 'Component Architecture',
    body: 'Reusable, maintainable UI systems that scale without accumulating technical debt.',
    stat: '100%',
    statLabel: 'Reusable',
    featured: true,
  },
  {
    icon: Monitor,
    title: 'Responsive Engineering',
    body: 'Interfaces that adapt beautifully across every device — from 360px to 1920px.',
    stat: '360–1920',
    statLabel: 'px range',
    featured: false,
  },
  {
    icon: Braces,
    title: 'Type Safety',
    body: 'TypeScript for predictable, self-documenting, scalable frontend code.',
    stat: 'TS',
    statLabel: 'First',
    featured: false,
  },
  {
    icon: Zap,
    title: 'Performance',
    body: 'Fast interfaces through thoughtful rendering, lazy loading, and careful optimization.',
    stat: '<100ms',
    statLabel: 'TTI target',
    featured: false,
  },
  {
    icon: Grid3X3,
    title: 'Design Systems',
    body: 'Consistent components, spacing, typography, and interaction patterns that teams love.',
    stat: '∞',
    statLabel: 'Scale',
    featured: false,
  },
  {
    icon: MousePointerClick,
    title: 'User Experience',
    body: 'Technology should disappear behind a simple, intuitive, delightful experience.',
    stat: 'UX',
    statLabel: 'Driven',
    featured: false,
  },
];



interface PrincipleCardProps {
  p: typeof principles[0];
  i: number;
  inView: boolean;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ p, i, inView }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = p.icon;

  return (
    <motion.div
      key={p.title}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#141618' : '#111315',
        border: `1px solid ${hovered ? 'rgba(200,255,61,0.22)' : '#1E2124'}`,
        borderRadius: '8px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default',
        transition: 'background 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
        boxShadow: hovered
          ? '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,255,61,0.08)'
          : '0 2px 8px rgba(0,0,0,0.25)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top-left glow */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,255,61,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Header row: icon + stat */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div
          style={{
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: hovered ? 'rgba(200,255,61,0.1)' : 'rgba(200,255,61,0.05)',
            border: `1px solid ${hovered ? 'rgba(200,255,61,0.25)' : 'rgba(200,255,61,0.1)'}`,
            borderRadius: '8px',
            transition: 'background 220ms ease, border-color 220ms ease',
            flexShrink: 0,
          }}
        >
          <Icon size={17} style={{ color: '#C8FF3D' }} strokeWidth={1.75} />
        </div>
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontSize: '1.0625rem',
              fontWeight: 800,
              color: hovered ? '#C8FF3D' : '#F3F1EA',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              transition: 'color 220ms ease',
            }}
          >
            {p.stat}
          </div>
          <div style={{ fontSize: '0.625rem', color: '#9A9A94', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
            {p.statLabel}
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <h3
          style={{
            margin: '0 0 0.5rem',
            fontSize: '0.9375rem',
            fontWeight: 700,
            color: '#F3F1EA',
            letterSpacing: '-0.015em',
            lineHeight: 1.2,
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: '0.8125rem',
            color: '#9A9A94',
            lineHeight: 1.6,
          }}
        >
          {p.body}
        </p>
      </div>
    </motion.div>
  );
};

const Engineering: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section
      id="engineering"
      className="section"
      aria-label="Engineering Principles"
      style={{ borderTop: '1px solid #272A2C', position: 'relative' }}
    >
      <div className="container-site">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel number="03" label="Engineering" />
          </motion.div>

          {/* ── Two-column header layout ───────────────────────── */}
          {/* ── Section Header ───────────────────────── */}
          <div style={{ marginBottom: '3rem', maxWidth: '42rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2
                style={{
                  margin: '0 0 1.25rem',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.65rem)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.025em',
                  textTransform: 'uppercase',
                  color: '#F3F1EA',
                }}
              >
                ENGINEERING,
                <br />
                NOT JUST{' '}
                <span style={{ color: '#C8FF3D' }}>INTERFACES.</span>
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: '1rem',
                  color: '#9A9A94',
                  lineHeight: 1.7,
                }}
              >
                I focus on building reliable, scalable, and delightful frontend
                experiences through solid engineering principles — where every technical decision
                serves the end user.
              </p>
            </motion.div>
          </div>

          {/* ── Principles grid — 3 cols, all cells filled ─────── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {principles.map((p, i) => (
              <PrincipleCard key={p.title} p={p} i={i} inView={inView} />
            ))}
          </div>

          {/* ── Bottom CTA strip ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.7 }}
            style={{
              marginTop: '2.5rem',
              padding: '1.5rem 2rem',
              background: '#111315',
              border: '1px solid #1E2124',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#C8FF3D',
                  boxShadow: '0 0 8px rgba(200,255,61,0.6)',
                  flexShrink: 0,
                }}
              />
              <p style={{ margin: 0, fontSize: '0.9375rem', color: '#F3F1EA', fontWeight: 500 }}>
                Available for engineering roles — full-time, intern, or intensive training programs.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                background: 'rgba(200,255,61,0.08)',
                border: '1px solid rgba(200,255,61,0.25)',
                borderRadius: '4px',
                color: '#C8FF3D',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                transition: 'background 220ms ease, border-color 220ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(200,255,61,0.14)';
                e.currentTarget.style.borderColor = 'rgba(200,255,61,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(200,255,61,0.08)';
                e.currentTarget.style.borderColor = 'rgba(200,255,61,0.25)';
              }}
            >
              Let's Talk →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
