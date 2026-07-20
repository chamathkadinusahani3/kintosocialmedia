



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
  href: 'https://facebook.com',
  Icon: FacebookIcon
},
{
  name: 'Instagram',
  description: 'Premium tyre photography, reels, behind-the-scenes, and offers.',
  href: 'https://instagram.com',
  Icon: InstagramIcon
},
{
  name: 'TikTok',
  description: 'Fun tyre content, street interviews, educational videos, and viral reels.',
  href: 'https://tiktok.com',
  Icon: TikTokIcon
},
{
  name: 'YouTube',
  description: 'Product reviews, installation guides, customer experiences, and educational videos.',
  href: 'https://youtube.com',
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