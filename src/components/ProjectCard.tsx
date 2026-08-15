import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { type Project } from '../data/projects';

/* ── Static image map ───────────────────────────────────────── */
const imageMap: Record<string, string> = {
  devgear: '/projects/devgear-hero.png',
  soon: '/projects/soon-hero.png',
};

/* ── Finvest mock visual (no real screenshot) ───────────────── */
const FinvestVisual: React.FC = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#0D0F10',
      padding: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <div style={{ fontSize: '7px', color: '#4a4d50', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Financial Overview</div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: '#F3F1EA' }}>$24,780.50</div>
        <div style={{ fontSize: '7px', color: '#C8FF3D', fontWeight: 600 }}>↑ +2.4% this month</div>
      </div>
      <div style={{ display: 'flex', gap: '3px' }}>
        {['1D', '1W', '1M', 'ALL'].map((t, i) => (
          <div key={t} style={{ padding: '2px 4px', background: i === 2 ? 'rgba(200,255,61,0.1)' : 'transparent', border: `1px solid ${i === 2 ? 'rgba(200,255,61,0.3)' : '#1e2124'}`, borderRadius: '1px' }}>
            <span style={{ fontSize: '6px', color: i === 2 ? '#C8FF3D' : '#4a4d50', fontWeight: 600 }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(200,255,61,0.2)" />
            <stop offset="100%" stopColor="rgba(200,255,61,0)" />
          </linearGradient>
        </defs>
        <path d="M0 30 L10 28 L20 32 L30 20 L40 22 L50 15 L60 18 L70 10 L80 12 L90 6 L100 8 L100 40 L0 40 Z" fill="url(#chartGrad)" />
        <path d="M0 30 L10 28 L20 32 L30 20 L40 22 L50 15 L60 18 L70 10 L80 12 L90 6 L100 8" fill="none" stroke="#C8FF3D" strokeWidth="1.2" />
      </svg>
    </div>
    {[['Investments', '+$1,240', '#C8FF3D'], ['Expenses', '-$380', '#9A9A94'], ['Savings', '+$960', '#C8FF3D']].map(([label, val, color]) => (
      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #1e2124' }}>
        <span style={{ fontSize: '7px', color: '#9A9A94' }}>{label}</span>
        <span style={{ fontSize: '7px', fontWeight: 600, color }}>{val}</span>
      </div>
    ))}
  </div>
);

/* ── ProjectCard ─────────────────────────────────────────────── */
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const imageSrc = imageMap[project.id];
  const accent = project.accentColor;

  return (
    <motion.article
      ref={ref}
      data-cursor="project"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(`/project/${project.slug}`)}
      role="button"
      tabIndex={0}
      aria-label={`View case study for ${project.name}`}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${project.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111315',
        border: '1px solid #272A2C',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        /* ── Brand accent as outer glow — the "holding frame" effect ── */
        boxShadow: hovered
          ? `0 0 0 1.5px ${accent}55, 0 20px 60px rgba(0,0,0,0.7), 0 0 40px ${accent}20`
          : `0 0 0 1px ${accent}20, 0 8px 32px rgba(0,0,0,0.5)`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 320ms ease, transform 320ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* ── Accent top bar — brand color stripe ───────────────── */}
      <div
        style={{
          height: '3px',
          background: `linear-gradient(90deg, ${accent} 0%, ${accent}60 60%, transparent 100%)`,
          flexShrink: 0,
        }}
      />

      {/* ── Image frame — fixed height, full cover, no blur ─── */}
      <div
        style={{
          width: '100%',
          height: '220px',
          position: 'relative',
          overflow: 'hidden',
          background: '#0D0F10',
          borderBottom: '1px solid #1E2124',
          flexShrink: 0,
        }}
      >
        {imageSrc ? (
          <>
            <motion.img
              src={imageSrc}
              alt={`${project.name} interface preview`}
              animate={{ scale: hovered ? 1.02 : 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'left top',
                display: 'block',
              }}
            />
            {/* Subtle bottom fade into card body */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60px',
                background: 'linear-gradient(to bottom, transparent, rgba(17,19,21,0.85))',
                pointerEvents: 'none',
              }}
            />
            {/* Corner accent dot */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: accent,
                boxShadow: `0 0 8px ${accent}`,
                opacity: hovered ? 1 : 0.5,
                transition: 'opacity 300ms ease',
              }}
            />
          </>
        ) : (
          <FinvestVisual />
        )}
      </div>

      {/* ── Card body ─────────────────────────────────────────── */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span
            className="project-number"
            style={{ color: accent, opacity: 0.85 }}
          >
            {project.number}
          </span>
          <motion.div
            animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ArrowUpRight size={15} style={{ color: hovered ? accent : '#9A9A94', transition: 'color 250ms ease' }} />
          </motion.div>
        </div>

        <h3
          style={{
            margin: 0,
            fontSize: '1.0625rem',
            fontWeight: 700,
            color: '#F3F1EA',
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: '0.8125rem',
            color: '#9A9A94',
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.875rem',
            borderTop: '1px solid #1e2124',
            marginTop: 'auto',
          }}
        >
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  padding: '3px 7px',
                  background: '#0D0F10',
                  border: '1px solid #1e2124',
                  borderRadius: '3px',
                  color: '#9A9A94',
                  letterSpacing: '0.04em',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: hovered ? accent : '#9A9A94',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              transition: 'color 300ms ease',
            }}
          >
            View Case Study →
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
