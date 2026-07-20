import React, { useEffect, useRef, useState } from 'react';
import { Loader } from './components/Loader';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CursorGlow } from './components/CursorGlow';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';

export function App() {
  const [loading, setLoading] = useState(true);
  const socialRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  const scrollToSocial = () => {
    socialRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0d0d0d] text-white">
      <Loader visible={loading} />
      <ScrollProgress />
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">
        <Hero onExplore={scrollToSocial} />
        <SocialSection ref={socialRef} />
      </main>

      <Footer />
    </div>);

}