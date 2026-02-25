'use client';

import { useEffect, useState } from 'react';
import Hero from '@/component/sections/Hero';
import Journey from '@/component/sections/Journey';
import Gallery from '@/component/sections/Gallery';
import Achievements from '@/component/sections/Achievements';
import Testimonials from '@/component/sections/Testimonials';
import Contact from '@/component/sections/Contact';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative">
      <Hero />
      <Journey />
      <Gallery />
      <Achievements />
      // <Testimonials />
      <Contact />
    </main>
  );
}