import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  visible: boolean;
}

export function Loader({ visible }: LoaderProps) {
  return (
    <AnimatePresence>
      {visible &&
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d0d]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        aria-hidden="true">
        
          <div className="relative flex items-center justify-center">
            <motion.div
            className="h-24 w-24 rounded-full border-2 border-[#1b1b1b] border-t-[#e10600]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            style={{ boxShadow: '0 0 40px rgba(225,6,0,0.35)' }} />
          
            <div className="absolute h-14 w-14 rounded-full bg-[#0d0d0d] shadow-[inset_0_0_20px_rgba(225,6,0,0.4)]" />
          </div>
          <motion.p
          className="font-display mt-8 text-sm font-bold uppercase tracking-[0.5em] text-white/70"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          
            KINTO
          </motion.p>
        </motion.div>
      }
    </AnimatePresence>);

}