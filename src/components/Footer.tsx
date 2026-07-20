




import React from 'react';
import { motion } from 'framer-motion';

const LOGO = '/kintologo.webp';

const socials = [
{ name: 'Facebook', href: 'https://www.facebook.com/share/1EkBXKBqzX/?mibextid=wwXIfr', logo: '/Facebook.png' },
{ name: 'Instagram', href: 'https://www.instagram.com/kintotyres_srilanka?igsh=MXdid3BjZDlnemFnNA==', logo: '/instagram.png' },
{ name: 'TikTok', href: 'https://www.tiktok.com/@kinto.tyres.sri.lanka?_r=1&_t=ZS-98Bf6In6Boj', logo: '/tiktok.jpg' },
{ name: 'YouTube', href: 'https://youtube.com/@kintotyreslanka?si=wpr1GyIca3pe-6vh', logo: '/Youtube_logo.png' }];


export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#1b1b1b]/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-14 text-center">
        <div className="flex flex-col items-center">
          <img src={LOGO} alt="KINTO Tyres" className="mb-3 h-12 w-auto" />
          <h3
            className="font-display text-2xl font-extrabold tracking-tight text-white"
            style={{ textShadow: '0 0 24px rgba(225,6,0,0.4)' }}>

            KINTO <span className="text-[#e10600]">TYRES</span>
          </h3>
          <p className="mt-2 text-sm italic text-white/60">Drive with Confidence.</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ name, href, logo }) =>
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white p-2 transition-colors hover:border-[#e10600]/60">

              <img src={logo} alt={name} className="h-full w-full object-contain" />
            </motion.a>
          )}
        </div>

        <p className="text-xs tracking-wide text-white/40">
          © 2026 KINTO Tyres. All Rights Reserved.
        </p>
      </div>
    </footer>);

}