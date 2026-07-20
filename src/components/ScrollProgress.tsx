


import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-[#e10600]"
      style={{ scaleX, boxShadow: '0 0 12px rgba(225,6,0,0.9)' }}
      aria-hidden="true" />);


}