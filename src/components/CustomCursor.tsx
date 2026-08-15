import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'project'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing follower
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, .interactive');

      if (projectEl) {
        setCursorType('project');
      } else if (interactiveEl) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 300ms ease',
      }}
    >
      {/* ── Center primary dot (snappy position) ──────────────────── */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={{
            scale: cursorType === 'project' ? 0 : cursorType === 'pointer' ? 0.6 : 1,
            opacity: cursorType === 'project' ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#F3F1EA',
            boxShadow: '0 0 8px rgba(243, 241, 234, 0.6)',
          }}
        />
      </motion.div>

      {/* ── Smooth trailing circle / badge ───────────────────────── */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={{
            width: cursorType === 'project' ? 52 : cursorType === 'pointer' ? 36 : 22,
            height: cursorType === 'project' ? 52 : cursorType === 'pointer' ? 36 : 22,
            backgroundColor:
              cursorType === 'project'
                ? 'rgba(8, 9, 10, 0.85)'
                : cursorType === 'pointer'
                ? 'rgba(200, 255, 61, 0.08)'
                : 'rgba(243, 241, 234, 0.03)',
            borderColor:
              cursorType === 'project'
                ? 'rgba(200, 255, 61, 0.6)'
                : cursorType === 'pointer'
                ? 'rgba(200, 255, 61, 0.45)'
                : 'rgba(243, 241, 234, 0.15)',
          }}
          transition={{
            type: 'spring',
            damping: 24,
            stiffness: 280,
          }}
          style={{
            borderRadius: '50%',
            borderWidth: '1px',
            borderStyle: 'solid',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: cursorType === 'project' ? 'blur(8px)' : 'none',
            boxShadow:
              cursorType === 'project'
                ? '0 0 16px rgba(200, 255, 61, 0.25)'
                : cursorType === 'pointer'
                ? '0 0 12px rgba(200, 255, 61, 0.15)'
                : 'none',
          }}
        >
          {cursorType === 'project' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#C8FF3D',
                textTransform: 'uppercase',
                userSelect: 'none',
              }}
            >
              VIEW
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
