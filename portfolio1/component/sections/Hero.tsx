// component/sections/Hero.tsx
'use client';

import Image from 'next/image';
import { useSiteContent } from '@/lib/data/cms-service';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const { content, loading } = useSiteContent();
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [activeMantra, setActiveMantra] = useState(0);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: mounted ? heroRef : undefined,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 70 });
  const y = useTransform(smoothProgress, [0, 1], [0, 150]);
  const opacity = useTransform(smoothProgress, [0, 0.9], [1, 0.1]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.95]);

  // Mouse spring for smooth follow
  const mouseXSpring = useSpring(mousePosition.x, { damping: 50, stiffness: 300 });
  const mouseYSpring = useSpring(mousePosition.y, { damping: 50, stiffness: 300 });

  // Transform values for different elements
  const bgX = useTransform(mouseXSpring, [0, 1], [-30, 30]);
  const bgY = useTransform(mouseYSpring, [0, 1], [-30, 30]);
  
  const bgX2 = useTransform(mouseXSpring, [0, 1], [30, -30]);
  const bgY2 = useTransform(mouseYSpring, [0, 1], [30, -30]);
  
  const bgX3 = useTransform(mouseXSpring, [0, 1], [-20, 20]);
  const bgY3 = useTransform(mouseYSpring, [0, 1], [20, -20]);
  
  const imageRotateY = useTransform(mouseXSpring, [0, 1], [2, -2]);
  const imageRotateX = useTransform(mouseYSpring, [0, 1], [-1, 1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotate through personal mantras
  useEffect(() => {
    if (!content?.journey?.length) return;
    const timer = setInterval(() => {
      setActiveMantra((prev) => (prev + 1) % Math.min(3, content.journey.length));
    }, 6000);
    return () => clearInterval(timer);
  }, [content]);

  if (loading || !content || !mounted) return null;

  const { profile, journey, guestAppearances } = content;

  // Safely access data with fallbacks
  const safeJourney = journey || [];
  const safeProfile = profile || {};
  const safeStats = profile?.stats || [];
  const safeGuests = guestAppearances || [];
  
  // Personal mantras from journey subtitles - timeless
  const personalMantras = safeJourney.slice(0, 3).map(item => item?.subtitle || "Building communities that matter");

  // Pure artistic elements - no dates, just symbols
  const floatingElements = [
    { char: "✧", size: [16, 20], delay: 0, duration: 25, x: [5, 8], y: [10, 15] },
    { char: "☾", size: [24, 28], delay: 3, duration: 30, x: [85, 90], y: [20, 25] },
    { char: "◈", size: [20, 24], delay: 5, duration: 28, x: [75, 80], y: [72, 78] },
    { char: "❁", size: [28, 32], delay: 1, duration: 32, x: [12, 18], y: [78, 85] },
    { char: "✺", size: [18, 22], delay: 4, duration: 26, x: [65, 70], y: [32, 38] },
    { char: "⚘", size: [22, 26], delay: 2, duration: 29, x: [88, 94], y: [85, 90] },
    { char: "✤", size: [20, 24], delay: 6, duration: 27, x: [20, 25], y: [42, 48] },
    { char: "❋", size: [26, 30], delay: 2.5, duration: 31, x: [42, 48], y: [15, 20] },
    { char: "☯", size: [24, 28], delay: 4.5, duration: 33, x: [52, 58], y: [88, 95] },
    { char: "◉", size: [16, 20], delay: 1.5, duration: 24, x: [30, 35], y: [58, 65] },
  ];

  return (
    <motion.section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen bg-[rgb(var(--bg-primary))] overflow-hidden"
    >
      {/* Main container for mouse tracking */}
      <div ref={containerRef} className="relative min-h-screen flex items-center">
        
        {/* Floating Artistic Elements - Pure decoration, no meaning */}
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none z-0 select-none hidden sm:block"
            style={{ 
              left: `${el.x[0]}%`, 
              top: `${el.y[0]}%`,
              fontSize: el.size[0],
              color: `rgb(var(--accent-${(i % 4) + 1}))`,
              opacity: 0.04,
              filter: 'blur(2px)',
            }}
            animate={{
              left: [`${el.x[0]}%`, `${el.x[1]}%`, `${el.x[0]}%`],
              top: [`${el.y[0]}%`, `${el.y[1]}%`, `${el.y[0]}%`],
              fontSize: [`${el.size[0]}px`, `${el.size[1]}px`, `${el.size[0]}px`],
              rotate: [0, 360],
              opacity: [0.04, 0.07, 0.04],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "easeInOut",
            }}
          >
            {el.char}
          </motion.div>
        ))}

        {/* Mobile floating elements - simpler */}
        <motion.div 
          className="absolute top-20 left-10 text-6xl text-[rgb(var(--accent-1))] opacity-5 sm:hidden"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          ✧
        </motion.div>
        <motion.div 
          className="absolute bottom-40 right-10 text-7xl text-[rgb(var(--accent-2))] opacity-5 sm:hidden"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          ☾
        </motion.div>

        {/* Warm Atmosphere Layers */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 40%, rgba(var(--accent-1), 0.05) 0%, transparent 50%)`,
            x: bgX,
            y: bgY,
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 70% 60%, rgba(var(--accent-3), 0.05) 0%, transparent 50%)`,
            x: bgX2,
            y: bgY2,
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(var(--accent-2), 0.03) 0%, transparent 60%)`,
            x: bgX3,
            y: bgY3,
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-screen py-12 sm:py-16 lg:py-20">
            
            {/* Image Section - First on Mobile */}
            <motion.div 
              className="relative w-full order-1 lg:order-2 lg:pl-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative max-w-sm mx-auto lg:max-w-md lg:ml-auto">
                {/* Loading shimmer */}
                <AnimatePresence>
                  {!imageLoaded && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(var(--accent-1))]/5 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </AnimatePresence>

                {/* Main Image */}
                <motion.div 
                  className="relative aspect-[3/4] w-full"
                  style={{
                    rotateY: imageRotateY,
                    rotateX: imageRotateX,
                    transformPerspective: 2000,
                  }}
                  onViewportEnter={() => setImageLoaded(true)}
                >
                  {/* Premium Frame Layers */}
                  <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-[rgb(var(--accent-1))]/5 via-[rgb(var(--accent-2))]/5 to-[rgb(var(--accent-3))]/5 blur-2xl sm:blur-3xl" />
                  
                  {/* Outer Frame */}
                  <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 rounded-[1.8rem] sm:rounded-[2.5rem] md:rounded-[3rem] border border-[rgb(var(--accent-1))]/10" />
                  
                  {/* Inner Frame */}
                  <div className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 rounded-[1.5rem] sm:rounded-[2.2rem] md:rounded-[2.8rem] border border-white/20" />
                  
                  {/* Image Container */}
                  <div className="relative h-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <Image
                      src={safeProfile?.photo || '/images/heroImg.png'}
                      alt={`${safeProfile?.firstName || 'Souhardya'} ${safeProfile?.lastName || 'Bose'}`}
                      fill
                      className="object-cover transition-transform duration-7000 hover:scale-105"
                      priority
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                      onLoad={() => setImageLoaded(true)}
                    />
                    
                    {/* Artistic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--accent-1))]/15 via-transparent to-[rgb(var(--accent-3))]/10 mix-blend-overlay" />
                  </div>

                  {/* Decorative Circles - Pure art */}
                  <motion.div 
                    className="absolute -top-6 sm:-top-8 md:-top-10 -left-6 sm:-left-8 md:-left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 border border-[rgb(var(--accent-1))]/10 rounded-full hidden sm:block"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -right-6 sm:-right-8 md:-right-10 w-32 sm:w-44 md:w-56 h-32 sm:h-44 md:h-56 border border-[rgb(var(--accent-2))]/10 rounded-full hidden sm:block"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Quote Card - Pure essence, no dates */}
                {safeJourney[0] && (
                  <motion.div 
                    className="mt-6 lg:absolute lg:-bottom-8 lg:left-0 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-xl border border-white/50 max-w-[280px] mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] italic">
                      "{safeJourney[0]?.subtitle || 'Building communities that matter'}"
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-px bg-[rgb(var(--accent-1))]/50" />
                      <span className="text-[8px] text-[rgb(var(--text-tertiary))] uppercase tracking-wider">
                        personal mantra
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Location Tag - Minimal */}
                <motion.div 
                  className="mt-4 lg:absolute lg:top-12 lg:-right-8 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-xl border border-white/50 inline-block lg:block mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ x: -2 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm opacity-50 hidden sm:inline">⌂</span>
                    <div>
                      <div className="text-[10px] sm:text-xs font-medium">{safeProfile?.location?.split(',')[0] || 'Punjab'}</div>
                      <div className="text-[8px] text-[rgb(var(--text-tertiary))] uppercase tracking-wider">
                        {safeProfile?.availability?.split(' ')[0] || 'present'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section - Pure presence, no timeline */}
            <motion.div 
              className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* Opening - Pure name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
                onHoverStart={() => setHoveredElement('greeting')}
                onHoverEnd={() => setHoveredElement(null)}
              >
                <motion.span 
                  className="text-2xl sm:text-3xl md:text-4xl text-[rgb(var(--accent-1))]"
                  animate={{ 
                    rotate: hoveredElement === 'greeting' ? 15 : 0,
                    scale: hoveredElement === 'greeting' ? 1.2 : 1,
                  }}
                >
                  ✦
                </motion.span>
                <span className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[rgb(var(--text-tertiary))]">
                  {safeProfile.firstName || 'Souhardya'} {safeProfile.lastName || 'Bose'}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-[rgb(var(--accent-1))] via-[rgb(var(--accent-2))] to-transparent hidden lg:block" />
              </motion.div>
              
              {/* Name - Pure presence */}
              <div className="relative">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.85] tracking-tight">
                  <motion.span 
                    className="block text-[rgb(var(--text-primary))]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {safeProfile.firstName || 'Souhardya'}
                  </motion.span>
                  <motion.span 
                    className="block text-[rgb(var(--accent-1))] relative mt-1 sm:mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {safeProfile.lastName || 'Bose'}
                    
                    {/* Artistic underline - no dates */}
                    <motion.div 
                      className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-[rgb(var(--accent-1))] to-transparent"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </motion.span>
                </h1>
              </div>

              {/* Rotating Mantra - Timeless wisdom */}
              <div className="h-16 sm:h-20 md:h-24 relative">
                {personalMantras.map((mantra, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center lg:justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeMantra === index ? 1 : 0,
                      y: activeMantra === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[rgb(var(--text-secondary))] italic leading-relaxed px-4 lg:px-0">
                      <span className="text-2xl sm:text-3xl md:text-4xl text-[rgb(var(--accent-1))] opacity-20 mr-1 sm:mr-2">"</span>
                      {mantra}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Essence - Pure meaning */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-2 sm:space-y-3"
              >
                <p className="text-sm sm:text-base md:text-lg text-[rgb(var(--text-secondary))] leading-relaxed max-w-md mx-auto lg:mx-0">
                  {safeJourney[0]?.description?.split('.')[0] || 'Building communities that matter.'}
                </p>
                <p className="text-xs sm:text-sm text-[rgb(var(--text-tertiary))] leading-relaxed max-w-md mx-auto lg:mx-0">
                  {safeJourney[1]?.description?.split('.')[0] || 'Creating spaces where people find their voice.'}
                </p>
              </motion.div>

              {/* Stats - Pure impact */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex justify-center lg:justify-start gap-6 sm:gap-8 md:gap-10 pt-4 sm:pt-6"
              >
                {safeStats.slice(0, 3).map((stat, index, array) => (
                  <motion.div 
                    key={stat?.id || index}
                    className="relative"
                    whileHover={{ y: -3 }}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-light text-[rgb(var(--accent-1))]">
                      {stat?.value || '0'}
                    </div>
                    <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[rgb(var(--text-tertiary))] mt-1">
                      {stat?.label?.split(' ')[0] || 'impact'}
                    </div>
                    {index < array.length - 1 && (
                      <div className="absolute -right-3 sm:-right-4 md:-right-5 top-1/2 -translate-y-1/2 w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-[rgb(var(--border))] to-transparent" />
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA - Pure invitation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="pt-4 sm:pt-6"
              >
                <motion.a
                  href={safeProfile?.cta?.primary?.href || '#journey'}
                  className="group inline-flex items-center gap-3 sm:gap-4 text-xs sm:text-sm tracking-wider text-[rgb(var(--text-primary))] hover:text-[rgb(var(--accent-1))] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    {safeProfile?.cta?.primary?.label || 'Know my story'}
                    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-[rgb(var(--accent-1))] transition-all duration-700" />
                  </span>
                  <motion.span 
                    className="text-base sm:text-lg md:text-xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Guest whispers - Hidden on mobile */}
              {/* {safeGuests.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="hidden lg:flex items-center gap-3 pt-2"
                >
                  <div className="flex -space-x-2">
                    {safeGuests.slice(0, 4).map((guest, i) => (
                      <motion.div
                        key={guest.id}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-[rgb(var(--accent-1))] to-[rgb(var(--accent-3))] opacity-40 border border-white"
                        whileHover={{ scale: 1.2, opacity: 0.8, zIndex: 10 }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-[rgb(var(--text-tertiary))] uppercase tracking-wider">
                    +{safeGuests.length} guests
                  </span>
                </motion.div>
              )}  */}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Pure function */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 sm:gap-2"
          >
            <span className="text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[rgb(var(--text-tertiary))]">
              continue
            </span>
            <div className="w-px h-10 sm:h-12 md:h-16 bg-gradient-to-b from-[rgb(var(--accent-1))] via-[rgb(var(--accent-2))] to-transparent" />
          </motion.div>
        </motion.div>

        {/* Signature - Minimal */}
        <motion.div 
          className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 text-[8px] lg:text-xs text-[rgb(var(--text-tertiary))]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.2 }}
        >
          ✦ {safeProfile?.firstName?.toLowerCase() || 'souhardya'}
        </motion.div>

        {/* Room - Pure art */}
        <motion.div 
          className="absolute top-4 left-4 lg:top-8 lg:left-8 hidden lg:flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          <span className="text-xs text-[rgb(var(--accent-1))] font-light">○</span>
          <span className="text-[10px] text-[rgb(var(--text-tertiary))]">presence</span>
        </motion.div>
      </div>
    </motion.section>
  );
}