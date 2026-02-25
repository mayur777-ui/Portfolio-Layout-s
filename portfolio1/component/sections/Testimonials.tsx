'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '@/lib/data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const entries = testimonialsData.items;
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-rotate with pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % entries.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [entries.length, isHovered]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + entries.length) % entries.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % entries.length);
  };

  // Premium icons - using emoji/unicode as requested
  const icons = ['✧', '❋', '✤', '❂', '☙', '✦'];

  return (
    <section 
      ref={sectionRef}
      id="testimonials"
      className="relative section-premium overflow-hidden bg-[rgb(var(--bg-primary))]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[rgb(var(--accent-1))]/3 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[rgb(var(--accent-3))]/3 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        
        {/* Geometric grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(var(--fg-primary)) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(var(--fg-primary)) 1px, transparent 1px)
            `,
            backgroundSize: 'clamp(40px, 8vw, 80px) clamp(40px, 8vw, 80px)'
          }}
        />
      </div>

      <div className="container-premium relative z-10">
        {/* Header with animated icon */}
        <div className="flex items-end justify-between mb-[clamp(2rem,6vh,4rem)]">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl text-[rgb(var(--accent-1))]">✦</span>
              <span className="label-premium gradient-accent-1">THE GUEST BOOK</span>
              <span className="text-2xl text-[rgb(var(--accent-3))]">✦</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-premium max-w-2xl"
            >
              Voices from the
              <br />
              <span className="serif-premium text-[rgb(var(--accent-2))]">creative journey</span>
            </motion.h2>
          </div>

          {/* Entry counter - premium minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block text-right"
          >
            <div className="grotesk-premium text-[clamp(2rem,4vw,3rem)] leading-none text-[rgb(var(--accent-1))]">
              {(activeIndex + 1).toString().padStart(2, '0')}
            </div>
            <div className="label-premium-light text-[rgb(var(--text-tertiary))]">
              OF {entries.length.toString().padStart(2, '0')}
            </div>
          </motion.div>
        </div>

        {/* Main testimonial display - Gallery inspired */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left column - Artistic decoration */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden md:block md:col-span-3 lg:col-span-2"
          >
            <div className="sticky top-24 space-y-6">
              {/* Vertical timeline dots */}
              <div className="relative pl-4 border-l border-[rgb(var(--border))] space-y-8 py-4">
                {entries.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }}
                    className="group flex items-center gap-3"
                  >
                    <span 
                      className={`absolute left-[-5px] w-2 h-2 rounded-full transition-all duration-500 ${
                        i === activeIndex 
                          ? 'bg-[rgb(var(--accent-1))] scale-150' 
                          : 'bg-[rgb(var(--border))] group-hover:bg-[rgb(var(--accent-1))]/50'
                      }`}
                      style={{ transform: i === activeIndex ? 'scale(1.5)' : 'scale(1)' }}
                    />
                    <span className={`text-xs transition-all duration-300 ${
                      i === activeIndex 
                        ? 'text-[rgb(var(--fg-primary))] font-medium translate-x-4' 
                        : 'text-[rgb(var(--text-tertiary))] opacity-0 group-hover:opacity-50 translate-x-2 group-hover:translate-x-4'
                    }`}>
                      ENTRY {String(i + 1).padStart(2, '0')}
                    </span>
                  </button>
                ))}
              </div>

              {/* Decorative symbol */}
              <div className="mt-12 text-center opacity-30">
                <span className="text-4xl text-[rgb(var(--accent-3))]">✤</span>
              </div>
            </div>
          </motion.div>

          {/* Center column - Main testimonial card */}
          <motion.div 
            className="md:col-span-6 lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main content card - Premium glass with artistic flair */}
              <div className="relative glass-premium rounded-[clamp(1.5rem,3vw,3rem)] p-[clamp(2rem,4vw,4rem)]">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[rgb(var(--accent-1))] rounded-tl-[clamp(1.5rem,3vw,3rem)]" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[rgb(var(--accent-3))] rounded-tr-[clamp(1.5rem,3vw,3rem)]" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[rgb(var(--accent-2))] rounded-bl-[clamp(1.5rem,3vw,3rem)]" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[rgb(var(--accent-4))] rounded-br-[clamp(1.5rem,3vw,3rem)]" />

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    initial={{ opacity: 0, rotateX: 15, y: 50 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    exit={{ opacity: 0, rotateX: -15, y: -50 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                    className="relative"
                  >
                    {/* Floating icon */}
                    <div className="absolute -top-6 -left-4 w-12 h-12 bg-[rgb(var(--bg-secondary))] rounded-full flex items-center justify-center border border-[rgb(var(--accent-1))] shadow-premium">
                      <span className="text-xl text-[rgb(var(--accent-1))]">
                        {icons[activeIndex % icons.length]}
                      </span>
                    </div>

                    {/* Quote mark */}
                    <div className="absolute -top-4 right-4 text-6xl text-[rgb(var(--accent-1))] opacity-20 serif-premium">
                      "
                    </div>

                    <div className="pl-6">
                      {/* Author info with gradient */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div>
                          <h3 className="heading-premium text-[clamp(1.5rem,3vw,2.2rem)]">
                            {entries[activeIndex].name}
                          </h3>
                          <p className="body-regular mt-1">
                            <span className="gradient-accent-2 font-medium">
                              {entries[activeIndex].role}
                            </span>
                            <span className="text-[rgb(var(--text-tertiary))] mx-2">·</span>
                            <span className="text-[rgb(var(--text-secondary))]">
                              {entries[activeIndex].company}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Testimonial text with premium styling */}
                      <div className="relative">
                        <p className="body-large serif-premium italic leading-relaxed">
                          {entries[activeIndex].text}
                        </p>
                        
                        {/* Signature line */}
                        <div className="flex items-center gap-3 mt-8 pt-4 border-t border-[rgb(var(--border))]">
                          <div className="w-12 h-[2px] bg-gradient-to-r from-[rgb(var(--accent-1))] to-[rgb(var(--accent-3))]" />
                          <span className="label-premium-light">
                            — Personal endorsement
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation controls - Integrated */}
                <div className="flex justify-between items-center mt-8 pt-4">
                  <button
                    onClick={handlePrev}
                    className="group flex items-center gap-2 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-1))] transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <span className="text-xl transform group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="label-premium-light hidden sm:block">PREVIOUS</span>
                  </button>

                  <div className="flex gap-1">
                    {entries.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDirection(i > activeIndex ? 1 : -1);
                          setActiveIndex(i);
                        }}
                        className={`h-1 transition-all duration-500 ${
                          i === activeIndex 
                            ? 'w-8 bg-gradient-to-r from-[rgb(var(--accent-1))] to-[rgb(var(--accent-3))]' 
                            : 'w-2 bg-[rgb(var(--border))] hover:bg-[rgb(var(--accent-1))]'
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="group flex items-center gap-2 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-1))] transition-colors"
                    aria-label="Next testimonial"
                  >
                    <span className="label-premium-light hidden sm:block">NEXT</span>
                    <span className="text-xl transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[rgb(var(--accent-1))]/5 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[rgb(var(--accent-3))]/5 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right column - Artistic details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block md:col-span-3 lg:col-span-2"
          >
            <div className="sticky top-24 space-y-8">
              {/* Current entry artistic display */}
              <div className="p-6 border border-[rgb(var(--border))] rounded-2xl bg-[rgb(var(--bg-secondary))]">
                <p className="label-premium-light mb-3">CURRENT ENTRY</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[rgb(var(--text-tertiary))]">Number</span>
                    <span className="grotesk-premium text-[rgb(var(--accent-1))]">
                      #{String(activeIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[rgb(var(--text-tertiary))]">Icon</span>
                    <span className="text-xl">{icons[activeIndex % icons.length]}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[rgb(var(--text-tertiary))]">Collection</span>
                    <span className="text-sm font-medium">Voices {Math.floor(activeIndex / 3) + 1}</span>
                  </div>
                </div>
              </div>

              {/* Decorative pattern */}
              <div className="relative h-32 overflow-hidden rounded-2xl border border-[rgb(var(--border))]">
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 10px 10px, rgb(var(--accent-1)) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl text-[rgb(var(--accent-2))] opacity-30">❋</span>
                </div>
              </div>

              {/* Mini quote */}
              <p className="text-xs text-[rgb(var(--text-tertiary))] italic text-center">
                Each voice tells a story
                <br />
                <span className="text-[rgb(var(--accent-1))] text-lg block mt-1">✧</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom signature */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-[clamp(3rem,8vh,5rem)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gradient-to-l from-[rgb(var(--accent-1))] to-transparent" />
            <span className="label-premium-light">TRUSTED BY CREATORS</span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-[rgb(var(--accent-1))] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}