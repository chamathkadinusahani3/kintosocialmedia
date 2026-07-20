



import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  ariaLabel?: string;
}

export function GlowButton({ children, onClick, href, className = '', ariaLabel }: GlowButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawnRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    spawnRipple(e);
    onClick?.();
  };

  const content =
  <>
      <span className="relative z-10">{children}</span>
      {ripples.map((r) =>
    <motion.span
      key={r.id}
      className="pointer-events-none absolute z-0 rounded-full bg-white/40"
      style={{ left: r.x, top: r.y, translateX: '-50%', translateY: '-50%' }}
      initial={{ width: 0, height: 0, opacity: 0.6 }}
      animate={{ width: 300, height: 300, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }} />

    )}
    </>;


  const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[20px] px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-shadow ' +
  className;

  const style: React.CSSProperties = {
    background: 'linear-gradient(120deg, #e10600, #b30400, #e10600)',
    backgroundSize: '200% 100%',
    boxShadow: '0 0 24px rgba(225,6,0,0.45)'
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onClick={spawnRipple}
        className={base}
        style={style}
        whileHover={{ scale: 1.04, backgroundPosition: '100% 0', boxShadow: '0 0 40px rgba(225,6,0,0.7)' }}
        whileTap={{ scale: 0.97 }}>
        
        {content}
      </motion.a>);

  }

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={handleClick}
      className={base}
      style={style}
      whileHover={{ scale: 1.04, backgroundPosition: '100% 0', boxShadow: '0 0 40px rgba(225,6,0,0.7)' }}
      whileTap={{ scale: 0.97 }}>
      
      {content}
    </motion.button>);

}