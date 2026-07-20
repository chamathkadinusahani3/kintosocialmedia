




import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { GlowButton } from './GlowButton';

const HERO_BG = "/05612ba2-d038-49ed-a639-cdb5528ed5ee.jpg";
const LOGO = "/kintologo.webp";

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Carbon fiber background with slow zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-[#0d0d0d]/50 to-[#0d0d0d]" />

      {/* Red ambient light */}
      <div
        className="ambient-pulse absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(225,6,0,0.35), transparent 65%)' }}
        aria-hidden="true" />
      

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e10600]/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-md">

          <img src={LOGO} alt="" className="h-4 w-4 object-contain" />
          KINTO Tyres
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          
          CONNECT WITH{' '}
          <span className="relative inline-block text-[#e10600]" style={{ textShadow: '0 0 30px rgba(225,6,0,0.6)' }}>
            KINTO TYRES
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          
          Follow us across all social platforms for tyre tips, offers, customer stories, and
          exclusive promotions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex justify-center">
          
          <GlowButton onClick={onExplore} ariaLabel="Scroll to social media section">
            Explore Our Socials
          </GlowButton>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={onExplore}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-[#e10600]"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
        
        <ChevronDownIcon className="h-7 w-7" />
      </motion.button>
    </section>);

}