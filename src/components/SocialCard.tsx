import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
interface Ripple {
  id: number;
  x: number;
  y: number;
}
export interface SocialCardData {
  name: string;
  description: string;
  href: string;
  logo: string;
}
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};
export function SocialCard({
  name,
  description,
  href,
  logo
}: SocialCardData) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
  };
  return <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit KINTO Tyres on ${name}`} onClick={handleClick} variants={cardVariants} whileHover={{
    y: -10
  }} className="group relative flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#e10600]/70" style={{
    boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
  }}>
      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
      boxShadow: 'inset 0 0 60px rgba(225,6,0,0.15), 0 0 45px rgba(225,6,0,0.35)'
    }} aria-hidden="true" />

      {/* ripples */}
      {ripples.map((r) => <motion.span key={r.id} className="pointer-events-none absolute z-0 rounded-full bg-[#e10600]/25" style={{
      left: r.x,
      top: r.y,
      translateX: '-50%',
      translateY: '-50%'
    }} initial={{
      width: 0,
      height: 0,
      opacity: 0.5
    }} animate={{
      width: 600,
      height: 600,
      opacity: 0
    }} transition={{
      duration: 0.7,
      ease: 'easeOut'
    }} aria-hidden="true" />)}

      <div className="relative z-10">
        <motion.div className="mb-6 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl" whileHover={{
        rotate: 8,
        scale: 1.05
      }} transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15
      }}>
          <img src={logo} alt={`${name} logo`} className="h-full w-full object-contain" />
        </motion.div>

        <h3 className="font-display text-2xl font-extrabold text-white">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{description}</p>

        <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-[#e10600]">
          Visit {name}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </motion.a>;
}