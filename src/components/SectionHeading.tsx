


import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow &&
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#e10600]">
        
          {eyebrow}
        </motion.p>
      }
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl font-extrabold text-white sm:text-5xl">
        
        {title}
      </motion.h2>
      {/* Animated red underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="mx-auto mt-5 h-[3px] w-24 origin-center rounded-full bg-[#e10600]"
        style={{ boxShadow: '0 0 14px rgba(225,6,0,0.8)' }} />
      
      {subtitle &&
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 text-base leading-relaxed text-white/60">
        
          {subtitle}
        </motion.p>
      }
    </div>);

}