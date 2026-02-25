// component/sections/Journey.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { useSiteContent } from '@/lib/data/cms-service';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Journey() {
  const { content } = useSiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile swipe auto-rotate
  useEffect(() => {
    if (!isMobile || !content?.journey?.length) return;
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.journey.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isMobile, content?.journey?.length]);

  if (!content) return null;

  const { journey } = content;
  
  if (!journey || journey.length === 0) return null;

  // Different torn paper clip paths for each item
  const clipPaths = [
    'polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)',
    'polygon(2% 0%, 98% 0%, 100% 3%, 100% 97%, 98% 100%, 3% 100%, 0% 97%, 0% 3%)',
    'polygon(1% 0%, 96% 0%, 100% 4%, 100% 96%, 97% 100%, 4% 100%, 0% 96%, 0% 4%)',
    'polygon(3% 0%, 97% 0%, 100% 2%, 100% 98%, 97% 100%, 2% 100%, 0% 98%, 0% 2%)',
  ];

  // Background textures - handwritten style elements
  const handwrittenElements = [
    { char: '✎', size: 40, top: 10, left: 5, rotate: -12 },
    { char: '✑', size: 60, bottom: 15, right: 8, rotate: 8 },
    { char: '✓', size: 30, top: 60, left: 12, rotate: 45 },
    { char: '✕', size: 45, bottom: 40, right: 15, rotate: -5 },
    { char: '⌘', size: 55, top: 30, right: 20, rotate: 15 },
    { char: '⌦', size: 35, bottom: 70, left: 18, rotate: -20 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="journey" 
      className="relative min-h-screen bg-[rgb(var(--bg-primary))] py-16 sm:py-24 overflow-hidden"
    >
      {/* Handwritten Background Elements */}
      {handwrittenElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-[rgb(var(--accent-1))] opacity-5 pointer-events-none select-none hidden sm:block"
          style={{
            top: el.top ? `${el.top}%` : 'auto',
            bottom: el.bottom ? `${el.bottom}%` : 'auto',
            left: el.left ? `${el.left}%` : 'auto',
            right: el.right ? `${el.right}%` : 'auto',
            fontSize: el.size,
            rotate: el.rotate,
            fontFamily: 'var(--font-handwritten)',
          }}
          animate={{
            rotate: [el.rotate, el.rotate + 5, el.rotate - 5, el.rotate],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {el.char}
        </motion.div>
      ))}

      {/* Torn Paper Overlay Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 50 Q70 30 90 50 T130 50 T170 30\' stroke=\'%23c87c50\' fill=\'none\' stroke-width=\'1\' opacity=\'0.2\'/%3E%3C/svg%3E")',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sketchbook Title - Handwritten Style */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-handwritten text-[rgb(var(--text-primary))] relative z-10">
              journey
            </h2>
            
            {/* Hand-drawn underline */}
            <svg className="absolute -bottom-4 left-0 w-full h-6" viewBox="0 0 200 20">
              <motion.path
                d="M10,15 Q50,5 90,15 T170,10 T190,15"
                stroke="rgb(var(--accent-1))"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Desktop: Scrapbook Layout */}
        <div className="hidden md:block relative">
          {journey.map((item, index) => {
            // Random rotation for each "page" (-3 to 3 degrees)
            const rotate = (index % 3) * 2 - 2;
            const marginTop = index % 2 === 0 ? 'mt-0' : 'mt-12';
            const marginLeft = index % 3 === 0 ? 'ml-0' : index % 3 === 1 ? 'ml-12' : 'ml-24';
            
            return (
              <motion.div
                key={item.id}
                className={`relative ${marginTop} ${marginLeft}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                style={{ rotate: rotate }}
              >
                {/* Main scrapbook entry */}
                <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                  
                  {/* Polaroid-style Image with Tape */}
                  <div className="lg:w-1/2 relative group">
                    {/* Washi tape effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-[rgb(var(--accent-1))]/20 rotate-2 z-20 backdrop-blur-sm" 
                         style={{ clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)' }} />
                    
                    {/* Image container with torn edges */}
                    <div 
                      className="relative aspect-[4/3] overflow-hidden shadow-2xl"
                      style={{ 
                        clipPath: clipPaths[index % clipPaths.length],
                        rotate: rotate * -0.5
                      }}
                    >
                      {item.media?.type === 'image' && item.media?.url ? (
                        <Image
                          src={item.media.url}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[rgb(var(--accent-1))]/20 to-[rgb(var(--accent-3))]/20 flex items-center justify-center">
                          <span className="text-8xl text-[rgb(var(--accent-1))] opacity-30">✎</span>
                        </div>
                      )}
                    </div>

                    {/* Handwritten note overlay on hover */}
                    <motion.div 
                      className="absolute -bottom-2 -right-2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-white/50 max-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-xs font-handwritten text-[rgb(var(--text-secondary))]">
                        {item.subtitle}
                      </p>
                    </motion.div>
                  </div>

                  {/* Journal Entry Side */}
                  <div className="lg:w-1/2 relative">
                    {/* Paper texture background */}
                    <div className="absolute inset-0 bg-[rgb(var(--bg-secondary))] -z-10 rounded-2xl opacity-50" 
                         style={{ 
                           clipPath: clipPaths[(index + 2) % clipPaths.length],
                           transform: `rotate(${rotate * 0.3}deg)`
                         }} />
                    
                    <div className="p-6 space-y-4">
                      {/* Title with handwritten style */}
                      <h3 className="text-3xl md:text-4xl font-handwritten text-[rgb(var(--text-primary))] leading-tight">
                        {item.title}
                      </h3>
                      
                      {/* Description - like notebook lines */}
                      <div className="space-y-2">
                        {item.description.split('. ').map((sentence, i) => (
                          <p key={i} className="text-base md:text-lg text-[rgb(var(--text-secondary))] leading-relaxed relative pl-4">
                            <span className="absolute left-0 top-0 text-[rgb(var(--accent-1))] opacity-30">⌾</span>
                            {sentence}.
                          </p>
                        ))}
                      </div>

                      {/* Memory tag - appears on flip */}
                      <motion.button
                        onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                        className="group inline-flex items-center gap-2 mt-2 text-xs tracking-wider text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--accent-1))] transition-colors"
                      >
                        <span className="font-handwritten text-sm">
                          {flippedIndex === index ? 'close memory' : 'a memory...'}
                        </span>
                        <motion.span
                          animate={{ rotate: flippedIndex === index ? 90 : 0 }}
                          className="text-lg"
                        >
                          ✎
                        </motion.span>
                      </motion.button>

                      {/* Flipped memory */}
                      <AnimatePresence>
                        {flippedIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 p-4 bg-[rgb(var(--bg-primary))] rounded-xl border border-dashed border-[rgb(var(--accent-1))]/30">
                              <p className="text-sm text-[rgb(var(--text-tertiary))] font-handwritten">
                                {item.metrics?.value || '∞'} {item.metrics?.label || 'moments'} — 
                                <span className="italic"> etched in memory</span>
                              </p>
                              {/* Year as a whisper - hidden but there */}
                              {item.year && (
                                <span className="text-[10px] text-[rgb(var(--text-tertiary))] opacity-30 mt-2 block">
                                  {item.year}
                                </span>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Paper clip decoration */}
                    <div className="absolute -top-2 -right-2 text-3xl text-[rgb(var(--accent-1))] opacity-20 rotate-12">
                      📎
                    </div>
                  </div>
                </div>

                {/* Connection thread between entries */}
                {index < journey.length - 1 && (
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                    <svg height="40" width="2" className="opacity-20">
                      <line x1="1" y1="0" x2="1" y2="40" stroke="rgb(var(--accent-1))" strokeWidth="1" strokeDasharray="3 3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Flippable Scrapbook Cards */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -100, rotate: -5 }}
              transition={{ duration: 0.5 }}
              className="relative"
              style={{
                clipPath: clipPaths[activeIndex % clipPaths.length]
              }}
            >
              {/* Mobile Scrapbook Card */}
              <div className="bg-[rgb(var(--bg-primary))] rounded-3xl overflow-hidden shadow-2xl border border-[rgb(var(--border))]">
                
                {/* Image with tape */}
                <div className="relative aspect-[4/3]">
                  {/* Washi tape */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-[rgb(var(--accent-1))]/20 rotate-3 z-20 backdrop-blur-sm" 
                       style={{ clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)' }} />
                  
                  {journey[activeIndex]?.media?.type === 'image' && journey[activeIndex]?.media?.url ? (
                    <Image
                      src={journey[activeIndex].media.url}
                      alt={journey[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[rgb(var(--accent-1))]/20 to-[rgb(var(--accent-3))]/20 flex items-center justify-center">
                      <span className="text-8xl text-[rgb(var(--accent-1))] opacity-30">✎</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-handwritten text-[rgb(var(--accent-1))]">
                      {journey[activeIndex]?.subtitle}
                    </span>
                    <div className="flex-1 h-px bg-dashed bg-[rgb(var(--border))]" />
                  </div>

                  <h3 className="text-2xl font-handwritten text-[rgb(var(--text-primary))]">
                    {journey[activeIndex]?.title}
                  </h3>

                  <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                    {journey[activeIndex]?.description}
                  </p>

                  {/* Memory toggle */}
                  <button
                    onClick={() => setFlippedIndex(flippedIndex === activeIndex ? null : activeIndex)}
                    className="flex items-center gap-2 text-xs text-[rgb(var(--text-tertiary))]"
                  >
                    <span className="font-handwritten">
                      {flippedIndex === activeIndex ? '− close' : '+ memory'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {flippedIndex === activeIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 bg-[rgb(var(--bg-secondary))] rounded-xl border border-dashed border-[rgb(var(--accent-1))]/30">
                          <p className="text-xs font-handwritten text-[rgb(var(--text-tertiary))]">
                            {journey[activeIndex]?.metrics?.value || '∞'} {journey[activeIndex]?.metrics?.label || 'moments'}
                          </p>
                          {/* Year hidden but there */}
                          {journey[activeIndex]?.year && (
                            <span className="text-[8px] text-[rgb(var(--text-tertiary))] opacity-30 mt-1 block">
                              {journey[activeIndex].year}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Page Dots - Like a notebook */}
          <div className="flex justify-center gap-3 mt-6">
            {journey.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative"
              >
                <span className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[rgb(var(--accent-1))] w-6' 
                    : 'bg-[rgb(var(--border))]'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Closing - Like a notebook back cover */}
        <div className="text-center mt-24 md:mt-32">
          <div className="relative inline-block">
            <span className="text-xs tracking-[0.3em] uppercase text-[rgb(var(--text-tertiary))] font-handwritten">
              more pages to fill
            </span>
            <motion.div 
              className="absolute -bottom-4 left-0 w-full h-4 text-center text-lg text-[rgb(var(--accent-1))] opacity-30"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✦ ✦ ✦
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}