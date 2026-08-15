import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import personal from '../data/personal';

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: personal.github },
  { icon: Mail, label: 'Email Me Directly', href: `mailto:${personal.email}` },
];

const Contact: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6%' });

  return (
    <section
      id="contact"
      className="section"
      aria-label="Contact"
      style={{
        borderTop: '1px solid #272A2C',
        paddingBlock: '7rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Large ambient glow behind headline ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: '60vw',
          height: '60vw',
          maxWidth: '700px',
          maxHeight: '700px',
          background:
            'radial-gradient(ellipse at center, rgba(200,255,61,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Scrolling ticker strip ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          height: '36px',
          borderBottom: '1px solid rgba(39,42,44,0.6)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            display: 'flex',
            gap: '3rem',
            whiteSpace: 'nowrap',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(154,154,148,0.45)',
              }}
            >
              Available for opportunities &nbsp;·&nbsp; Frontend Engineering &nbsp;·&nbsp; Somalia &nbsp;·&nbsp; 2026
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container-site" style={{ paddingTop: '2rem' }}>
        <div ref={ref}>

          {/* ── Section label — slides from left ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}
          >
            <span
              style={{
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: '#9A9A94',
                textTransform: 'uppercase',
              }}
            >
              06
            </span>
            <div style={{ width: '1.5rem', height: '1px', background: '#272A2C' }} />
            <span
              style={{
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: '#9A9A94',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </span>
          </motion.div>

          {/* ── Main layout: headline left + details right ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4rem',
              alignItems: 'end',
            }}
            className="lg:grid-cols-[1fr_auto]"
          >
            {/* LEFT: Headline block — cinematic slide from left */}
            <div>
              <div style={{ overflow: 'hidden' }}>
                {/* Word-by-word staggered reveal */}
                {[
                  { text: "LET'S BUILD", delay: 0.05 },
                  { text: 'SOMETHING', delay: 0.18, suffix: ' GREAT.', suffixLime: true },
                ].map((line, i) => (
                  <div key={i} style={{ overflow: 'hidden', lineHeight: 0.95 }}>
                    <motion.div
                      initial={{ y: '105%', opacity: 0 }}
                      animate={inView ? { y: '0%', opacity: 1 } : {}}
                      transition={{
                        duration: 0.75,
                        delay: line.delay,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.035em',
                        textTransform: 'uppercase',
                        color: '#F3F1EA',
                        paddingBottom: '0.05em',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.25em',
                        flexWrap: 'wrap',
                      }}
                    >
                      {line.text}
                      {line.suffix && (
                        <span style={{ color: line.suffixLime ? '#C8FF3D' : '#F3F1EA' }}>
                          {line.suffix}
                        </span>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Animated underline bar */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  height: '1.5px',
                  background:
                    'linear-gradient(90deg, #C8FF3D 0%, rgba(200,255,61,0.3) 60%, transparent 100%)',
                  marginTop: '1.25rem',
                  marginBottom: '2rem',
                  maxWidth: '480px',
                  transformOrigin: 'left',
                }}
              />

              {/* Sub-copy — fades up */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  margin: '0 0 2.5rem',
                  fontSize: '0.9375rem',
                  color: '#9A9A94',
                  lineHeight: 1.7,
                  maxWidth: '38rem',
                }}
              >
                I'm currently open to frontend engineering opportunities,
                internships, and teams where I can contribute while continuing to grow.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
              >
                <a
                  href={`mailto:${personal.email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    padding: '0.875rem 1.75rem',
                    background: '#C8FF3D',
                    color: '#08090A',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    borderRadius: '6px',
                    border: '1px solid #C8FF3D',
                    boxShadow: '0 0 24px rgba(200,255,61,0.25)',
                    transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#d6ff5e';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(200,255,61,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#C8FF3D';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(200,255,61,0.25)';
                  }}
                >
                  Get in touch
                  <ArrowRight size={15} strokeWidth={2.5} />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 1.5rem',
                    background: 'transparent',
                    color: '#D1D1C7',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    transition: 'all 250ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                    e.currentTarget.style.color = '#F3F1EA';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.color = '#D1D1C7';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  View GitHub
                  <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </div>

            {/* RIGHT: Social links card — slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex"
              style={{
                flexDirection: 'column',
                gap: '0.75rem',
                minWidth: '220px',
              }}
            >
              <div
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#6B6B64',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem',
                }}
              >
                Connect
              </div>
              {socialLinks.map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(17, 19, 21, 0.6)',
                    color: '#9A9A94',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    border: '1px solid rgba(39, 42, 44, 0.9)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 250ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(200,255,61,0.3)';
                    e.currentTarget.style.color = '#F3F1EA';
                    e.currentTarget.style.background = 'rgba(200,255,61,0.05)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(39, 42, 44, 0.9)';
                    e.currentTarget.style.color = '#9A9A94';
                    e.currentTarget.style.background = 'rgba(17, 19, 21, 0.6)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <Icon size={16} strokeWidth={1.75} />
                  <span style={{ flex: 1 }}>{label}</span>
                  <ArrowUpRight size={13} style={{ opacity: 0.4 }} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Bottom: footer strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid #1E2124',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                color: '#6B6B64',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Somalia · 2026
            </span>
          </motion.div>

        </div>
      </div>

      {/* ── Soft premium bottom glow/light emanating upward ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80vw',
          height: '320px',
          background: 'radial-gradient(ellipse at bottom, rgba(200, 255, 61, 0.09) 0%, rgba(200, 255, 61, 0.02) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </section>
  );
};

export default Contact;
