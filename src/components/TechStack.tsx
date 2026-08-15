import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionLabel from './SectionLabel';
import technologies, { type Technology } from '../data/technologies';
import { iconMap } from './TechIcons';
import { Layers, Wrench } from 'lucide-react';

const TechCard: React.FC<{ tech: Technology }> = ({ tech }) => {
  const Icon = iconMap[tech.name];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.875rem',
        padding: '0.75rem 1.25rem',
        background: hovered ? '#16191C' : '#111315',
        border: `1px solid ${hovered ? 'rgba(200, 255, 61, 0.4)' : '#272A2C'}`,
        borderRadius: '0.5rem',
        boxShadow: hovered
          ? '0 8px 24px rgba(0,0,0,0.6), 0 0 16px rgba(200,255,61,0.1)'
          : '0 2px 8px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      {/* Icon Box */}
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '6px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {Icon ? <Icon size={20} /> : <span style={{ color: '#C8FF3D', fontSize: '10px' }}>●</span>}
      </div>

      {/* Name & Role */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span
          style={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: hovered ? '#FFFFFF' : '#F3F1EA',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          {tech.name}
        </span>
        <span
          style={{
            fontSize: '0.6875rem',
            color: hovered ? '#C8FF3D' : '#9A9A94',
            fontWeight: 500,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {tech.role}
        </span>
      </div>
    </div>
  );
};

const TechStack: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  const frontend = technologies.filter((t) => t.category === 'frontend');
  const tools = technologies.filter((t) => t.category === 'tools' || t.category === 'backend');

  // Double arrays for seamless infinite marquee loop
  const marqueeRow1 = [...frontend, ...frontend, ...frontend];
  const marqueeRow2 = [...tools, ...tools, ...tools];

  return (
    <section
      id="skills"
      className="section"
      aria-label="Technologies"
      style={{
        borderTop: '1px solid #272A2C',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(13,15,16,0.5) 0%, rgba(8,9,10,1) 100%)',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse at center, rgba(200, 255, 61, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel number="04" label="Technologies & Tooling" />
          </motion.div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <motion.h2
              className="text-headline"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ margin: 0, color: '#F3F1EA', maxWidth: '34rem' }}
            >
              TECHNOLOGIES I WORK WITH
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                fontSize: '0.9375rem',
                color: '#9A9A94',
                margin: 0,
                maxWidth: '26rem',
                lineHeight: 1.6,
              }}
            >
              Production-tested libraries, frameworks, and modern developer tooling I use to craft fast, responsive, and robust user interfaces.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Infinite Horizontal Marquees ───────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem', marginBottom: '4rem' }}>
        {/* Row 1: Frontend (Moving Left) */}
        <div className="marquee-mask" style={{ width: '100%', overflow: 'hidden' }}>
          <div className="animate-marquee" style={{ gap: '1rem' }}>
            {marqueeRow1.map((tech, i) => (
              <TechCard key={`row1-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2: Tools & Platforms (Moving Right) */}
        <div className="marquee-mask" style={{ width: '100%', overflow: 'hidden' }}>
          <div className="animate-marquee-reverse" style={{ gap: '1rem' }}>
            {marqueeRow2.map((tech, i) => (
              <TechCard key={`row2-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Structured Categorized Overview ────────────────────────── */}
      <div className="container-site">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid #1E2124',
          }}
        >
          {/* Frontend Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              background: '#111315',
              border: '1px solid #272A2C',
              borderRadius: '0.75rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    background: 'rgba(200, 255, 61, 0.08)',
                    border: '1px solid rgba(200, 255, 61, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Layers size={16} style={{ color: '#C8FF3D' }} />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 700, color: '#F3F1EA' }}>
                  Frontend Engineering
                </h3>
              </div>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: '#9A9A94',
                  textTransform: 'uppercase',
                }}
              >
                01 / CORE
              </span>
            </div>

            <p style={{ margin: 0, fontSize: '0.875rem', color: '#9A9A94', lineHeight: 1.6 }}>
              Building modular component architectures with React and TypeScript, leveraging Tailwind CSS for scalable design systems and modern CSS layouts.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {frontend.map((tech) => {
                const Icon = iconMap[tech.name];
                return (
                  <div
                    key={`grid-frontend-${tech.name}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.4rem 0.75rem',
                      background: '#0D0F10',
                      border: '1px solid #1E2124',
                      borderRadius: '4px',
                      fontSize: '0.8125rem',
                      color: '#F3F1EA',
                      fontWeight: 500,
                    }}
                  >
                    {Icon && <Icon size={15} />}
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Tools & Cloud Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              background: '#111315',
              border: '1px solid #272A2C',
              borderRadius: '0.75rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    background: 'rgba(200, 255, 61, 0.08)',
                    border: '1px solid rgba(200, 255, 61, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Wrench size={16} style={{ color: '#C8FF3D' }} />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 700, color: '#F3F1EA' }}>
                  Tools & Infrastructure
                </h3>
              </div>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: '#9A9A94',
                  textTransform: 'uppercase',
                }}
              >
                02 / WORKFLOW
              </span>
            </div>

            <p style={{ margin: 0, fontSize: '0.875rem', color: '#9A9A94', lineHeight: 1.6 }}>
              Streamlined developer workflows with Vite, Git/GitHub for version control, Figma for interface precision, and Vercel/Firebase for edge deployment and authentication.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {tools.map((tech) => {
                const Icon = iconMap[tech.name];
                return (
                  <div
                    key={`grid-tools-${tech.name}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.4rem 0.75rem',
                      background: '#0D0F10',
                      border: '1px solid #1E2124',
                      borderRadius: '4px',
                      fontSize: '0.8125rem',
                      color: '#F3F1EA',
                      fontWeight: 500,
                    }}
                  >
                    {Icon && <Icon size={15} />}
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
