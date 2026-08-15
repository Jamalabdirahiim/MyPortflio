import React from 'react';
import { motion, useInView } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { Code2, Layers, Globe, Zap } from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────── */
const traits = [
  {
    icon: Code2,
    label: 'Currently Learning',
    value: 'Advanced frontend architecture.',
    accent: '#C8FF3D',
  },
  {
    icon: Layers,
    label: 'Currently Building',
    value: 'Better interfaces.',
    accent: '#C8FF3D',
  },
  {
    icon: Globe,
    label: 'Currently Looking For',
    value: 'A team where I can learn, contribute, and grow.',
    accent: '#C8FF3D',
  },
  {
    icon: Zap,
    label: 'Core Belief',
    value: 'Every pixel should have a purpose.',
    accent: '#C8FF3D',
  },
];

const profileRows = [
  ['University', 'SIMAD University'],
  ['Program', 'Information Technology'],
  ['Graduation', '2026'],
  ['Focus', 'Frontend Engineering'],
  ['Location', 'Somalia'],
];

/* ── Trait card ───────────────────────────────────────────── */
const TraitCard: React.FC<{
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
  inView: boolean;
}> = ({ icon: Icon, label, value, delay, inView }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '1.25rem 1.5rem',
        background: hovered
          ? 'rgba(200, 255, 61, 0.05)'
          : 'rgba(17, 19, 21, 0.6)',
        border: hovered
          ? '1px solid rgba(200, 255, 61, 0.35)'
          : '1px solid rgba(39, 42, 44, 0.9)',
        borderRadius: '10px',
        backdropFilter: 'blur(12px)',
        transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >
      {/* Glow top edge */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(200,255,61,0.6), transparent)',
          }}
        />
      )}

      {/* Icon badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '34px',
          height: '34px',
          borderRadius: '8px',
          background: hovered
            ? 'rgba(200, 255, 61, 0.15)'
            : 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(200, 255, 61, 0.2)',
          marginBottom: '0.875rem',
          transition: 'all 300ms ease',
        }}
      >
        <Icon
          size={16}
          style={{
            color: '#C8FF3D',
            opacity: hovered ? 1 : 0.7,
            transition: 'opacity 300ms ease',
          }}
        />
      </div>

      <div
        style={{
          fontSize: '0.625rem',
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#9A9A94',
          marginBottom: '0.375rem',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: '0.875rem',
          color: hovered ? '#F3F1EA' : '#D1D1C7',
          fontWeight: 500,
          lineHeight: 1.45,
          transition: 'color 300ms ease',
        }}
      >
        {value}
      </div>
    </motion.div>
  );
};

/* ── Main component ───────────────────────────────────────── */
const About: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section
      id="about"
      className="section"
      aria-label="About Ahmed"
      style={{ borderTop: '1px solid #272A2C', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(200,255,61,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-site">
        <div ref={ref}>
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel number="05" label="About" />
          </motion.div>

          {/* Two-column layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="lg:grid-cols-[1fr_1fr]"
          >
            {/* ── LEFT: Story + trait grid ─────────────────── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Headline with accent underline */}
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 'clamp(1.65rem, 3.5vw, 2.25rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.025em',
                      textTransform: 'uppercase',
                      color: '#F3F1EA',
                      lineHeight: 1.1,
                    }}
                  >
                    A LITTLE
                    <br />
                    <span style={{ color: '#C8FF3D' }}>ABOUT ME</span>
                  </h2>
                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: 0,
                      width: '48px',
                      height: '2px',
                      background: '#C8FF3D',
                      transformOrigin: 'left',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                {/* Body text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {[
                    "I'm a graduating Information Technology Engineer from SIMAD University with a deep passion for frontend development and modern interfaces.",
                    "Through academic projects, personal work, and real-world challenges, I've developed the mindset and skills to build digital products that are both functional and meaningful.",
                    "I'm now transitioning into professional engineering and ready to contribute, learn, and grow with a talented team.",
                  ].map((text, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        margin: 0,
                        fontSize: '0.9375rem',
                        color: '#9A9A94',
                        lineHeight: 1.75,
                      }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              {/* ── Trait cards 2×2 grid ───────────────────── */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.875rem',
                  marginTop: '2.5rem',
                }}
              >
                {traits.map((t, i) => (
                  <TraitCard
                    key={t.label}
                    icon={t.icon}
                    label={t.label}
                    value={t.value}
                    delay={0.35 + i * 0.08}
                    inView={inView}
                  />
                ))}
              </div>
            </div>

            {/* ── RIGHT: Profile card ───────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Profile terminal card */}
              <div
                style={{
                  background: '#0D0F11',
                  border: '1px solid rgba(39, 42, 44, 0.9)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow:
                    '0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Top bar — terminal style */}
                <div
                  style={{
                    padding: '0.875rem 1.25rem',
                    borderBottom: '1px solid #1E2124',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#111315',
                  }}
                >
                  {/* Traffic lights */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
                      <div
                        key={c}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.8,
                        }}
                      />
                    ))}
                    <span
                      style={{
                        marginLeft: '0.75rem',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        color: '#9A9A94',
                        textTransform: 'uppercase',
                      }}
                    >
                      ahmed.abdihakim
                    </span>
                  </div>

                  {/* Status badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      padding: '0.25rem 0.625rem',
                      background: 'rgba(200, 255, 61, 0.08)',
                      border: '1px solid rgba(200, 255, 61, 0.2)',
                      borderRadius: '9999px',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#C8FF3D',
                        boxShadow: '0 0 6px rgba(200,255,61,0.9)',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.625rem',
                        color: '#C8FF3D',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Open to work
                    </span>
                  </div>
                </div>

                {/* Info rows with stagger */}
                <div>
                  {profileRows.map(([label, value], i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.45 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        padding: '1rem 1.5rem',
                        borderBottom: '1px solid #1A1D20',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'background 200ms ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: '#6B6B64',
                          fontWeight: 400,
                          letterSpacing: '0.02em',
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontSize: '0.875rem',
                          color: '#F3F1EA',
                          fontWeight: 600,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom manifesto */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.85 }}
                  style={{
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(200,255,61,0.03)',
                    borderTop: '1px solid rgba(200,255,61,0.08)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      color: '#C8FF3D',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                      opacity: 0.7,
                    }}
                  >
                    // summary
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.8125rem',
                      color: '#9A9A94',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}
                  >
                    "Early in my career — but unusually prepared and motivated to
                    grow inside a professional engineering environment."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
