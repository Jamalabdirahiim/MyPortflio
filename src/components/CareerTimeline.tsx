import React from 'react';
import { motion, useInView } from 'framer-motion';
import SectionLabel from './SectionLabel';

const timelineItems = [
  {
    year: '2026',
    title: 'SIMAD University',
    subtitle: 'Information Technology',
    type: 'education',
  },
  {
    year: '2026',
    title: 'Selected Opportunity',
    subtitle: 'Intensive Job Training',
    note: 'Among a few students selected for an intensive training opportunity focused on preparing for real-world engineering environments.',
    type: 'opportunity',
  },
  {
    year: 'NEXT',
    title: 'Frontend Engineering',
    subtitle: 'Building production-ready interfaces and solving meaningful problems.',
    type: 'next',
  },
];

const CareerTimeline: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section
      id="experience"
      className="section"
      aria-label="Career Timeline"
      style={{ borderTop: '1px solid #272A2C' }}
    >
      <div className="container-site">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel number="06" label="Career Moment" />
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3.5rem',
              alignItems: 'start',
            }}
            className="lg:grid-cols-[1fr_1.5fr]"
          >
            {/* Left — Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2
                style={{
                  margin: '0 0 1rem',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  textTransform: 'uppercase',
                  color: '#F3F1EA',
                  lineHeight: 1.1,
                }}
              >
                CAREER MOMENT
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.9375rem',
                  color: '#9A9A94',
                  lineHeight: 1.65,
                  maxWidth: '22rem',
                }}
              >
                A focused transition from university into professional frontend
                engineering.
              </p>
            </motion.div>

            {/* Right — Timeline */}
            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: '0',
                  width: '1px',
                  background: '#272A2C',
                }}
              />

              <div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.45 }}
                    style={{ position: 'relative', paddingBottom: i < timelineItems.length - 1 ? '2.5rem' : 0 }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2.3125rem',
                        top: '0.25rem',
                        width: '9px',
                        height: '9px',
                        borderRadius: '50%',
                        background: item.type === 'next' ? '#C8FF3D' : '#272A2C',
                        border: `1px solid ${item.type === 'next' ? '#C8FF3D' : '#4a4d50'}`,
                        boxShadow: item.type === 'next' ? '0 0 8px rgba(200,255,61,0.4)' : 'none',
                      }}
                    />

                    {/* Content */}
                    <div
                      style={{
                        background: '#111315',
                        border: '1px solid #272A2C',
                        borderRadius: '4px',
                        padding: '1rem 1.25rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '0.375rem',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.625rem',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            color: item.type === 'next' ? '#C8FF3D' : '#9A9A94',
                            textTransform: 'uppercase',
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: '0.9375rem',
                          fontWeight: 700,
                          color: '#F3F1EA',
                          letterSpacing: '-0.01em',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: '0.8125rem',
                          color: '#9A9A94',
                          lineHeight: 1.55,
                        }}
                      >
                        {item.subtitle}
                      </div>
                      {item.note && (
                        <p
                          style={{
                            margin: '0.5rem 0 0',
                            fontSize: '0.75rem',
                            color: '#6a6a64',
                            lineHeight: 1.55,
                          }}
                        >
                          {item.note}
                        </p>
                      )}
                    </div>

                    {/* Arrow between items */}
                    {i < timelineItems.length - 1 && (
                      <div
                        style={{
                          position: 'absolute',
                          left: '-2rem',
                          bottom: '1rem',
                          fontSize: '0.75rem',
                          color: '#3a3d40',
                        }}
                      >
                        ↓
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
