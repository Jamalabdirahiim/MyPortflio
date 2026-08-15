import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      if (window.scrollY < 300) {
        setActiveSection('');
        return;
      }

      const sections = ['contact', 'about', 'skills', 'projects'];
      let found = false;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            found = true;
            break;
          }
        }
      }
      if (!found && window.scrollY < 600) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Logo heights: desktop vs mobile
  const logoH = isMobile
    ? scrolled ? '60px' : '70px'
    : scrolled ? '110px' : '130px';

  // Mobile menu top offset: accounts for the logo height + padding
  const mobileMenuTop = isMobile ? '5.5rem' : '6rem';

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: '0.75rem',
          left: isMobile ? '0.75rem' : '1.5rem',
          right: isMobile ? '0.75rem' : '1.5rem',
          maxWidth: '76rem',
          margin: '0 auto',
          zIndex: 100,
          padding: isMobile
            ? scrolled ? '0.2rem 1rem' : '0.3rem 1rem'
            : scrolled ? '0.35rem 1.5rem' : '0.45rem 1.75rem',
          background: scrolled
            ? 'rgba(10, 12, 14, 0.95)'
            : 'rgba(10, 12, 14, 0.88)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          transition: 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: scrolled
            ? '0 16px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)'
            : '0 8px 28px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Glowing top line accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            right: '20%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(200, 255, 61, 0.35), transparent)',
            pointerEvents: 'none',
          }}
        />

        {/* Single flex row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '1rem' }}>

          {/* LEFT: Brand Logo */}
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'transform 250ms ease, opacity 250ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.opacity = '1';
            }}
          >
            <img
              src="/logo.png"
              alt="Ahmed Abdihakim Logo"
              style={{
                height: logoH,
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
                transition: 'height 300ms ease',
                filter: 'drop-shadow(0 4px 16px rgba(200, 255, 61, 0.15))',
              }}
            />
          </a>

          {/* CENTER: Desktop Nav */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '9999px',
              backdropFilter: 'blur(16px)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    position: 'relative',
                    padding: '0.625rem 1.25rem',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: isActive ? '#C8FF3D' : '#D1D1C7',
                    textDecoration: 'none',
                    borderRadius: '9999px',
                    transition: 'all 220ms ease',
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                    background: isActive ? 'rgba(200, 255, 61, 0.08)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#D1D1C7';
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: '4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#C8FF3D',
                        boxShadow: '0 0 8px rgba(200, 255, 61, 0.8)',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Status pill (desktop only) + Hamburger (mobile) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hidden md:inline-flex"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(200, 255, 61, 0.06)',
                border: '1px solid rgba(200, 255, 61, 0.3)',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 0 16px rgba(200, 255, 61, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(200, 255, 61, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(200, 255, 61, 0.6)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(200, 255, 61, 0.25)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(200, 255, 61, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(200, 255, 61, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(200, 255, 61, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  width: '8px',
                  height: '8px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: '#C8FF3D',
                    opacity: 0.75,
                    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#C8FF3D',
                    boxShadow: '0 0 8px rgba(200, 255, 61, 0.9)',
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#C8FF3D',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Available
              </span>
              <ArrowUpRight size={12} style={{ color: '#C8FF3D', opacity: 0.8 }} />
            </a>

            {/* Mobile: compact status indicator + hamburger */}
            <div className="flex md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#C8FF3D',
                  boxShadow: '0 0 8px rgba(200,255,61,0.9)',
                  flexShrink: 0,
                }}
              />
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="lg:hidden"
              style={{
                background: menuOpen ? 'rgba(200, 255, 61, 0.1)' : 'rgba(255, 255, 255, 0.06)',
                border: menuOpen ? '1px solid rgba(200, 255, 61, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '10px',
                padding: '0.5rem',
                color: menuOpen ? '#C8FF3D' : '#F3F1EA',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px',
                transition: 'all 200ms ease',
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: mobileMenuTop,
              left: '0.75rem',
              right: '0.75rem',
              background: 'rgba(8, 9, 10, 0.97)',
              backdropFilter: 'blur(36px)',
              WebkitBackdropFilter: 'blur(36px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '1.25rem',
              padding: '1.5rem',
              zIndex: 99,
              boxShadow: '0 32px 80px rgba(0,0,0,0.9)',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.08 }}
                    style={{
                      fontSize: '1.1875rem',
                      fontWeight: 700,
                      color: isActive ? '#C8FF3D' : '#F3F1EA',
                      textDecoration: 'none',
                      padding: '0.875rem 1.25rem',
                      borderRadius: '10px',
                      background: isActive ? 'rgba(200, 255, 61, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                      border: isActive ? '1px solid rgba(200, 255, 61, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#C8FF3D',
                          boxShadow: '0 0 6px rgba(200,255,61,0.9)',
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}

              {/* Contact CTA inside mobile menu */}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                style={{
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.625rem',
                  padding: '1rem 1.25rem',
                  background: 'rgba(200, 255, 61, 0.1)',
                  border: '1px solid rgba(200, 255, 61, 0.3)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#C8FF3D',
                    boxShadow: '0 0 8px rgba(200,255,61,0.9)',
                  }}
                />
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#C8FF3D', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Available for Opportunities
                </span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
