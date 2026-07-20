import React from 'react';
import { motion } from 'framer-motion';

const LOGO = '/kintologo.webp';

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d0d0d]/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={LOGO} alt="KINTO Tyres" className="h-9 w-auto" />
          <span className="font-display hidden text-sm font-extrabold uppercase tracking-[0.2em] text-white sm:inline">
            KINTO <span className="text-[#e10600]">Tyres</span>
          </span>
        </a>
      </div>
    </motion.header>
  );
}
