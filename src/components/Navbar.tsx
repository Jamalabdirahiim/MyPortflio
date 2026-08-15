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
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 1024 : false));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoH = isMobile
    ? scrolled ? '72px' : '82px'
    : scrolled ? '110px' : '130px';

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: isMobile ? '0.5rem' : '0.85rem',
          left: isMobile ? '0.75rem' : '1.5rem',
          right: isMobile ? '0.75rem' : '1.5rem',
          maxWidth: '76rem',
          margin: '0 auto',
          zIndex: 100,
          padding: isMobile
            ? '0.35rem 0.875rem'
            : scrolled ? '0.35rem 1.5rem' : '0.45rem 1.75rem',
          background: scrolled
            ? 'rgba(10, 12, 14, 0.95)'
            : 'rgba(10, 12, 14, 0.88)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          transition: 'padding 250ms ease, background 250ms ease, box-shadow 250ms ease',
          boxShadow: scrolled
            ? '0 16px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)'
            : '0 8px 28px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Subtle glowing top line accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            right: '20%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(200, 255, 61, 0.4), transparent)',
            pointerEvents: 'none',
          }}
        />

        {/* Single flex row container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* ── LEFT: Brand Logo ───────────────────────────────── */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'transform 200ms ease, opacity 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
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
                transition: 'height 250ms ease',
                filter: 'drop-shadow(0 2px 10px rgba(200, 255, 61, 0.2))',
              }}
            />
          </a>

          {/* ── CENTER: Desktop Navigation Links (ONLY visible on desktop) ── */}
          {!isMobile && (
            <nav
              aria-label="Main navigation"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
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
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    style={{
                      position: 'relative',
                      padding: '0.625rem 1.25rem',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: isActive ? '#C8FF3D' : '#D1D1C7',
                      textDecoration: 'none',
                      borderRadius: '9999px',
                      transition: 'all 200ms ease',
                      letterSpacing: '0.01em',
                      whiteSpace: 'nowrap',
                      background: isActive ? 'rgba(200, 255, 61, 0.08)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#D1D1C7';
                        e.currentTarget.style.background = 'transparent';
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
          )}

          {/* ── RIGHT: Action Area (Desktop status pill OR Mobile hamburger) ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            {/* Desktop Status Button */}
            {!isMobile && (
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(200, 255, 61, 0.06)',
                  border: '1px solid rgba(200, 255, 61, 0.3)',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 220ms ease',
                  boxShadow: '0 0 16px rgba(200, 255, 61, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(200, 255, 61, 0.14)';
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 61, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(200, 255, 61, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 61, 0.3)';
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
                <ArrowUpRight size={13} style={{ color: '#C8FF3D', opacity: 0.8 }} />
              </a>
            )}

            {/* Mobile Hamburger Button */}
            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                style={{
                  background: menuOpen ? 'rgba(200, 255, 61, 0.12)' : 'rgba(255, 255, 255, 0.06)',
                  border: menuOpen ? '1px solid rgba(200, 255, 61, 0.4)' : '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '9999px',
                  padding: '0.5rem 0.75rem',
                  color: menuOpen ? '#C8FF3D' : '#F3F1EA',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 200ms ease',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#C8FF3D',
                    boxShadow: '0 0 6px rgba(200, 255, 61, 0.9)',
                  }}
                />
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            )}
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Dropdown Modal ──────────────────────── */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                zIndex: 98,
              }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                top: '5.75rem',
                left: '0.75rem',
                right: '0.75rem',
                background: 'rgba(12, 14, 16, 0.98)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '1.25rem',
                padding: '1.25rem',
                zIndex: 99,
                boxShadow: '0 24px 60px rgba(0,0,0,0.9), 0 0 0 1px rgba(200,255,61,0.1)',
              }}
            >
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.05 }}
                      style={{
                        fontSize: '1.0625rem',
                        fontWeight: 700,
                        color: isActive ? '#C8FF3D' : '#F3F1EA',
                        textDecoration: 'none',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        background: isActive ? 'rgba(200, 255, 61, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                        border: isActive ? '1px solid rgba(200, 255, 61, 0.25)' : '1px solid rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{link.label}</span>
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

                {/* Direct Contact Button in Mobile Menu */}
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                  style={{
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 1rem',
                    background: 'rgba(200, 255, 61, 0.1)',
                    border: '1px solid rgba(200, 255, 61, 0.35)',
                    borderRadius: '10px',
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#C8FF3D',
                      boxShadow: '0 0 8px rgba(200,255,61,0.9)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: '#C8FF3D',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Available for Roles
                  </span>
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
