import React from 'react';
import { motion, useInView } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { Code2, Layers, Globe, Zap, Terminal, CheckCircle2 } from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────── */
const traits = [
  {
    icon: Code2,
    label: 'Currently Learning',
    value: 'Advanced systems architecture & React Compiler patterns.',
    accent: '#C8FF3D',
  },
  {
    icon: Layers,
    label: 'Currently Building',
    value: 'Resilient web applications with sub-second responsiveness.',
    accent: '#C8FF3D',
  },
  {
    icon: Globe,
    label: 'Career Focus',
    value: 'High-growth engineering teams building impactful products.',
    accent: '#C8FF3D',
  },
  {
    icon: Zap,
    label: 'Core Philosophy',
    value: 'Every pixel, token, and interaction must serve a purpose.',
    accent: '#C8FF3D',
  },
];

const profileRows = [
  ['Institution', 'SIMAD University'],
  ['Degree', 'B.Sc. Information Technology'],
  ['Graduation', 'Class of 2026'],
  ['Specialization', 'Frontend Architecture & UI Systems'],
  ['Core Arsenal', 'React 19 · Next.js · TypeScript · Tailwind'],
  ['Location', 'Somalia · Available Globally'],
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
          : 'rgba(17, 19, 21, 0.65)',
        border: hovered
          ? '1px solid rgba(200, 255, 61, 0.35)'
          : '1px solid rgba(39, 42, 44, 0.85)',
        borderRadius: '10px',
        backdropFilter: 'blur(12px)',
        transition: 'all 280ms cubic-bezier(0.16, 1, 0.3, 1)',
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
          transition: 'all 280ms ease',
        }}
      >
        <Icon
          size={16}
          style={{
            color: '#C8FF3D',
            opacity: hovered ? 1 : 0.8,
            transition: 'opacity 280ms ease',
          }}
        />
      </div>

      <div
        style={{
          fontSize: '0.625rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#9A9A94',
          marginBottom: '0.375rem',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: '0.84375rem',
          color: hovered ? '#F3F1EA' : '#D1D1C7',
          fontWeight: 500,
          lineHeight: 1.5,
          transition: 'color 280ms ease',
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
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background:
            'radial-gradient(ellipse at center, rgba(200,255,61,0.05) 0%, transparent 70%)',
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

          {/* ── Centered Profile Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '4rem',
            }}
          >
            {/* Centered Circular Portrait */}
            <div
              style={{
                position: 'relative',
                width: '100px',
                height: '100px',
                marginBottom: '1.25rem',
              }}
            >
              {/* Outer soft ambient halo */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-6px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(200, 255, 61, 0.4) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                  zIndex: 0,
                }}
              />
              {/* Glowing ring container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  padding: '3px',
                  background: 'linear-gradient(135deg, #C8FF3D 0%, rgba(200, 255, 61, 0.3) 55%, rgba(255, 255, 255, 0.15) 100%)',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.7), 0 0 24px rgba(200, 255, 61, 0.25)',
                  zIndex: 1,
                }}
              >
                <img
                  src="/ahmed-profile.jpg"
                  alt="Ahmed Abdihakim"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center 22%',
                    display: 'block',
                    background: '#0D0F10',
                  }}
                />
                {/* Active online status badge */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    right: '4px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: '#22C55E',
                    border: '2.5px solid #0D0F10',
                    boxShadow: '0 0 8px #22C55E',
                  }}
                />
              </div>
            </div>

            {/* Name & Title Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '0.875rem',
                padding: '4px 14px',
                background: 'rgba(17, 19, 21, 0.75)',
                border: '1px solid rgba(200, 255, 61, 0.25)',
                borderRadius: '9999px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#F3F1EA',
                  letterSpacing: '0.01em',
                }}
              >
                Ahmed Abdihakim
              </span>
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: '#C8FF3D',
                  opacity: 0.6,
                }}
              />
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#C8FF3D',
                  textTransform: 'uppercase',
                }}
              >
                Frontend Engineer
              </span>
            </div>

            {/* Section Headline */}
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                  color: '#F3F1EA',
                  lineHeight: 1.1,
                }}
              >
                A LITTLE <span style={{ color: '#C8FF3D' }}>ABOUT ME</span>
              </h2>
              {/* Accent decorative bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '64px',
                  height: '2.5px',
                  background: '#C8FF3D',
                  borderRadius: '2px',
                }}
              />
            </div>

            {/* Subtitle statement */}
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                color: '#9A9A94',
                maxWidth: '42rem',
                lineHeight: 1.65,
                marginTop: '0.75rem',
              }}
            >
              Bridging engineering rigor with interaction craft to build responsive, accessible, and high-performance digital software.
            </p>
          </motion.div>

          {/* ── Two-column Details Grid ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3.5rem',
              alignItems: 'start',
            }}
            className="lg:grid-cols-[1.1fr_0.9fr]"
          >
            {/* ── LEFT: Story + trait grid ─────────────────── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#C8FF3D',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Terminal size={14} />
                  Background & Engineering Focus
                </div>

                {/* Professional Body text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "Graduating Information Technology Engineer from SIMAD University with a focused specialization in modern frontend architectures, component design systems, and client-side performance.",
                    "Through end-to-end projects like SOON (telecom & AI platform), DevGear (developer marketplace), and Finvest (financial telemetry), I have developed the discipline to engineer software that balances deep technical resilience with fluid UX.",
                    "I am actively pursuing frontend engineering roles where I can collaborate with forward-thinking teams, solve complex interface challenges, and ship production code at scale.",
                  ].map((text, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        margin: 0,
                        fontSize: '0.9625rem',
                        color: '#B5B5AD',
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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

            {/* ── RIGHT: Profile terminal dossier ───────────── */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
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
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Traffic lights + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{ gap: '0.45rem', alignItems: 'center', display: 'flex' }}>
                      {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
                        <div
                          key={c}
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: c,
                            opacity: 0.85,
                          }}
                        />
                      ))}
                    </div>
                    <span
                      style={{
                        marginLeft: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#9A9A94',
                        textTransform: 'uppercase',
                      }}
                    >
                      ahmed abdihakim // dossier
                    </span>
                  </div>

                  {/* Status badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      padding: '0.35rem 0.75rem',
                      background: 'rgba(200, 255, 61, 0.08)',
                      border: '1px solid rgba(200, 255, 61, 0.2)',
                      borderRadius: '9999px',
                      flexShrink: 0,
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
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Open to work
                    </span>
                  </div>
                </div>

                {/* Profile rows */}
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
                          fontWeight: 500,
                          letterSpacing: '0.02em',
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontSize: '0.84375rem',
                          color: '#F3F1EA',
                          fontWeight: 600,
                          letterSpacing: '-0.01em',
                          textAlign: 'right',
                        }}
                      >
                        {value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom manifesto banner */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.85 }}
                  style={{
                    padding: '1.35rem 1.5rem',
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
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                    }}
                  >
                    <CheckCircle2 size={13} />
                    Career Commitment
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.84375rem',
                      color: '#9A9A94',
                      lineHeight: 1.65,
                      fontStyle: 'italic',
                    }}
                  >
                    "Prepared, motivated, and equipped with the engineering foundation to design and ship production software that delivers tangible real-world value."
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
