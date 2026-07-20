
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Ambient page background: moving red gradient lights, slow smoke, floating particles.
export function AnimatedBackground() {
  const particles = useMemo(
    () =>
    Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 8,
      duration: 12 + Math.random() * 14,
      drift: (Math.random() - 0.5) * 60
    })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base color */}
      <div className="absolute inset-0 bg-[#0d0d0d]" />

      {/* Moving red gradient lights */}
      <motion.div
        className="absolute -left-40 top-[-10%] h-[45rem] w-[45rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(225,6,0,0.22), transparent 65%)' }}
        animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }} />
      
      <motion.div
        className="absolute -right-40 bottom-[-15%] h-[40rem] w-[40rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(225,6,0,0.16), transparent 65%)' }}
        animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 26, ease: 'easeInOut' }} />
      

      {/* Slow smoke haze */}
      <div
        className="smoke-layer absolute inset-0"
        style={{
          background:
          'radial-gradient(ellipse at 30% 20%, rgba(40,40,40,0.5), transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(30,30,30,0.5), transparent 55%)'
        }} />
      

      {/* Floating particles */}
      {particles.map((p) =>
      <motion.span
        key={p.id}
        className="absolute rounded-full bg-[#e10600]"
        style={{
          left: `${p.left}%`,
          bottom: '-10px',
          width: p.size,
          height: p.size,
          boxShadow: '0 0 8px rgba(225,6,0,0.8)'
        }}
        animate={{ y: [0, -window.innerHeight - 40], x: [0, p.drift], opacity: [0, 0.9, 0] }}
        transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: 'linear' }} />

      )}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)' }} />
      
    </div>);

}