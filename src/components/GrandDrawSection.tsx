import React from 'react';
import { motion } from 'framer-motion';
import { GiftIcon, ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const DRAW_URL = 'https://kintotyressrilanka.vercel.app';

export function GrandDrawSection() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 sm:pb-32">
      <SectionHeading
        eyebrow="Don't Miss Out"
        title="Follow Us & Enter the Grand Draw"
        subtitle="Follow all our social media platforms above, then enter to win in the KINTO Tyres Grand Draw."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative mt-16 flex flex-col items-center overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] px-8 py-14 text-center backdrop-blur-xl"
        style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.4)' }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ boxShadow: 'inset 0 0 80px rgba(225,6,0,0.15)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e10600]/10">
          <GiftIcon className="h-8 w-8 text-[#e10600]" />
        </div>

        <h3 className="relative z-10 font-display text-2xl font-extrabold text-white sm:text-3xl">
          KINTO Tyres Grand Draw
        </h3>
        <p className="relative z-10 mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          Follow all of our social media platforms and stand a chance to win exciting prizes in our Grand Draw.
        </p>

        <motion.a
          href={DRAW_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-[#e10600] px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#c40500]"
          style={{ boxShadow: '0 0 30px rgba(225,6,0,0.5)' }}
        >
          Enter Now
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
