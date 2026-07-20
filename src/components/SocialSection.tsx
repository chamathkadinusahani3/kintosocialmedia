



import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import { SocialCard, type SocialCardData } from './SocialCard';
import { SectionHeading } from './SectionHeading';
import { TikTokIcon } from './icons/TikTokIcon';

const cards: SocialCardData[] = [
{
  name: 'Facebook',
  description: 'Latest promotions, customer stories, tyre tips, and company updates.',
  href: 'https://www.facebook.com/share/1EkBXKBqzX/?mibextid=wwXIfr',
  Icon: FacebookIcon
},
{
  name: 'Instagram',
  description: 'Premium tyre photography, reels, behind-the-scenes, and offers.',
  href: 'https://www.instagram.com/kintotyres_srilanka?igsh=MXdid3BjZDlnemFnNA==',
  Icon: InstagramIcon
},
{
  name: 'TikTok',
  description: 'Fun tyre content, street interviews, educational videos, and viral reels.',
  href: 'https://www.tiktok.com/@kinto.tyres.sri.lanka?_r=1&_t=ZS-98Bf6In6Boj',
  Icon: TikTokIcon
},
{
  name: 'YouTube',
  description: 'Product reviews, installation guides, customer experiences, and educational videos.',
  href: 'https://youtube.com/@kintotyreslanka?si=wpr1GyIca3pe-6vh',
  Icon: YoutubeIcon
}];


const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

export const SocialSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Stay Connected"
        title="Follow KINTO Everywhere"
        subtitle="Join our community across every platform and never miss a drop, a deal, or a driving tip." />
      

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        
        {cards.map((card) =>
        <SocialCard key={card.name} {...card} />
        )}
      </motion.div>
    </section>);

});

SocialSection.displayName = 'SocialSection';