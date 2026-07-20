

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Soft red glow that follows the cursor. Disabled on touch / no fine pointer.
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    setEnabled(fine);
    if (!fine) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[5] h-[400px] w-[400px] rounded-full blur-[80px]"
      style={{
        x: sx,
        y: sy,
        background: 'radial-gradient(circle, rgba(225,6,0,0.14), transparent 70%)'
      }}
      aria-hidden="true" />);


}