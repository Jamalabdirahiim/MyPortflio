import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ── Floating panel ─────────────────────────────────────────── */
interface FloatPanelProps {
  title: string;
  items: string[];
  style?: React.CSSProperties;
}

const FloatPanel: React.FC<FloatPanelProps> = ({ title, items, style }) => (
  <div
    style={{
      background: 'rgba(8, 9, 10, 0.25)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '8px',
      padding: '8px 12px',
      minWidth: '125px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      ...style,
    }}
  >
    <div
      style={{
        fontSize: '0.55rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        color: 'rgba(243, 241, 234, 0.75)',
        textTransform: 'uppercase',
        marginBottom: '8px',
      }}
    >
      {title}
    </div>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#C8FF3D',
              flexShrink: 0,
              boxShadow: '0 0 6px rgba(200, 255, 61, 0.8)',
            }}
          />
          <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#F3F1EA' }}>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ── Hero ───────────────────────────────────────────────────── */
const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 32, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 32, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 12);
    mouseY.set(y * 10);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      id="top"
      aria-label="Hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: isMobile ? 'auto' : '100svh',
        paddingTop: isMobile ? '6rem' : '10rem',
        paddingBottom: isMobile ? '3rem' : '3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-site" style={{ width: '100%', maxWidth: '96rem' }}>

        {/* ── Responsive layout: stacks on mobile ─────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: isMobile ? 'center' : 'flex-start',
            flexDirection: isMobile ? 'column' : 'row',
            position: 'relative',
            gap: isMobile ? '2.5rem' : '0',
          }}
        >
          {/* ── Left column (Typography) ─────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '1.25rem' : '1.5rem',
              flex: '0 0 auto',
              width: isMobile ? '100%' : '48%',
              minWidth: isMobile ? 'auto' : '340px',
              zIndex: 10,
              position: 'relative',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <p className="text-eyebrow" style={{
                fontSize: isMobile ? '0.6875rem' : '0.8125rem',
                letterSpacing: '0.16em',
                fontWeight: 600,
                marginBottom: '0.25rem'
              }}>
                AHMED ABDIHAKIM / FRONTEND ENGINEER
              </p>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1
                className="text-display"
                style={{
                  color: '#F3F1EA',
                  margin: 0,
                  fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2.15rem, 4.2vw, 3.65rem)',
                  lineHeight: 1.06,
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  textShadow: '0 10px 40px rgba(0,0,0,0.95), 0 2px 10px rgba(0,0,0,0.85)',
                }}
              >
                I BUILD DIGITAL
                <br />
                EXPERIENCES WITH
                <br />
                <span style={{ color: '#C8FF3D' }}>PURPOSE.</span>
              </h1>
            </motion.div>

            {/* Supporting copy */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: isMobile ? '0.9375rem' : '1rem',
                lineHeight: 1.7,
                color: '#A8A8A2',
                maxWidth: isMobile ? '100%' : '30rem',
                margin: isMobile ? '0 auto' : '0',
                textShadow: '0 2px 12px rgba(0,0,0,0.9)',
              }}
            >
              Graduating Information Technology Engineer from SIMAD University,
              building real projects, selected for intensive job training, and
              ready to contribute to impactful engineering teams.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: isMobile ? '0.875rem 1.5rem' : '0.8125rem 1.625rem',
                  background: '#111315',
                  color: '#F3F1EA',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  border: '1.5px solid #C8FF3D',
                  borderRadius: '4px',
                  transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 0 20px rgba(200,255,61,0.15)',
                  minHeight: '48px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1a1d1f';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(200,255,61,0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#111315';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(200,255,61,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore my work
                <ArrowRight size={15} strokeWidth={2.5} style={{ color: '#C8FF3D' }} />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right column — Hero visual (hidden on mobile) ─────── */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                flex: '1.25',
                position: 'relative',
                zIndex: 1,
                marginLeft: '-6.5rem',
                paddingTop: '2rem',
                width: '100%',
                maxWidth: '1080px',
                x: springX,
                y: springY,
              }}
            >
              {/* Ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-15%',
                  background: 'radial-gradient(ellipse at 60% 50%, rgba(200,255,61,0.06) 0%, rgba(0,0,0,0) 70%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Hero Image */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid #272A2C',
                  boxShadow: '0 40px 140px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.04)',
                  background: '#0D0F10',
                }}
              >
                <img
                  src="/hero-image.png"
                  alt="Ahmed Abdihakim at workstation"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transform: 'scale(1.005)',
                  }}
                />
              </div>

              {/* Floating panel 1 */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.5 },
                  y: { delay: 0.8, duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
                }}
                style={{ position: 'absolute', top: '3%', right: '3%', zIndex: 10 }}
              >
                <FloatPanel
                  title="Frontend Stack"
                  items={['React', 'TypeScript', 'Tailwind', 'Vite']}
                />
              </motion.div>

              {/* Floating panel 2 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: [0, 6, 0] }}
                transition={{
                  opacity: { delay: 0.95, duration: 0.5 },
                  y: { delay: 0.95, duration: 6.2, repeat: Infinity, ease: 'easeInOut' },
                }}
                style={{ position: 'absolute', bottom: '-2%', left: '23%', zIndex: 10 }}
              >
                <FloatPanel
                  title="Interface Quality"
                  items={['Responsive', 'Accessible', 'Performant']}
                />
              </motion.div>

              {/* Annotation line */}
              <div
                style={{
                  position: 'absolute',
                  top: '-1.75rem',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#4a4d50', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  01 / FRONTEND
                </span>
                <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#4a4d50', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  2026 EDITION
                </span>
              </div>
            </motion.div>
          )}

          {/* Mobile-only: subtle gradient divider below text */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(200,255,61,0.3), transparent)',
                marginTop: '0.5rem',
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
