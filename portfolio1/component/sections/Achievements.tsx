'use client';

import { useState, useEffect, useRef } from 'react';
import { useSiteContent } from '@/lib/data/cms-service';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function Achievements() {
  const { content } = useSiteContent();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Only initialize useScroll after component is mounted
  const { scrollYProgress } = useScroll({
    target: mounted ? sectionRef : undefined,
    offset: ["start end", "end start"]
  });

  // ALL useTransform calls must be at the top level
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0.5, 0.5, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !content) return null;

  const { achievements, profile } = content;
  const stats = profile?.stats || [];

  // Rest of your component remains exactly the same...
  const achievementColors = [
    { 
      primary: 'rgb(var(--accent-1))', 
      secondary: 'rgba(218, 41, 28, 0.02)', 
      light: 'rgba(218, 41, 28, 0.08)',
      symbol: '✧',
      gradient: 'from-[rgb(var(--accent-1))] to-[rgb(var(--accent-3))]'
    },
    { 
      primary: 'rgb(var(--accent-2))', 
      secondary: 'rgba(10, 102, 194, 0.02)', 
      light: 'rgba(10, 102, 194, 0.08)',
      symbol: '❋',
      gradient: 'from-[rgb(var(--accent-2))] to-[rgb(var(--accent-4))]'
    },
    { 
      primary: 'rgb(var(--accent-3))', 
      secondary: 'rgba(255, 184, 0, 0.02)', 
      light: 'rgba(255, 184, 0, 0.08)',
      symbol: '☙',
      gradient: 'from-[rgb(var(--accent-3))] to-[rgb(var(--accent-1))]'
    },
    { 
      primary: 'rgb(var(--accent-4))', 
      secondary: 'rgba(0, 200, 200, 0.02)', 
      light: 'rgba(0, 200, 200, 0.08)',
      symbol: '✦',
      gradient: 'from-[rgb(var(--accent-4))] to-[rgb(var(--accent-2))]'
    },
  ];

  const categories = ['all', ...new Set(achievements.map(a => a.category))];
  const filteredAchievements = activeFilter === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === activeFilter);

  const getPosition = (index: number, total: number) => {
    const baseRotations = [-2, 1.5, -1, 2.5, -1.8, 1.2, -2.2, 1.8];
    const baseMargins = ['ml-0', 'ml-16', 'ml-8', 'ml-24', 'ml-4', 'ml-20', 'ml-12', 'ml-6'];
    const baseDelays = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1.05];
    
    return {
      rotate: baseRotations[index % baseRotations.length],
      margin: baseMargins[index % baseMargins.length],
      delay: baseDelays[index % baseDelays.length],
      translateX: Math.sin(index) * 10,
      translateY: Math.cos(index) * 5,
    };
  };

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="section-premium bg-[rgb(var(--bg-primary))] relative overflow-hidden min-h-screen"
    >
      {/* Ethereal background layers */}
      {mounted && (
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-[rgb(var(--accent-1))] rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.1,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Delicate grid lines */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(var(--fg-primary)) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(var(--fg-primary)) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Whisper lines */}
          <motion.div 
            className="absolute top-40 left-20 w-px h-40 bg-gradient-to-b from-transparent via-[rgb(var(--accent-1))] to-transparent opacity-10"
            animate={{ 
              scaleY: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-40 right-20 w-px h-60 bg-gradient-to-t from-transparent via-[rgb(var(--accent-2))] to-transparent opacity-10"
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </motion.div>
      )}

      <div className="container-premium relative z-10">
        {/* Refined header with parallax */}
        <motion.div 
          style={{ opacity }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.span 
                className="w-8 h-px bg-[rgb(var(--accent-1))] opacity-30"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[rgb(var(--text-tertiary))]">
                a curated collection
              </span>
              <motion.span 
                className="w-8 h-px bg-[rgb(var(--accent-1))] opacity-30"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light text-[rgb(var(--text-primary))] tracking-tight mb-4">
              achievements
              <motion.span 
                className="block text-2xl md:text-3xl font-serif italic text-[rgb(var(--text-tertiary))] mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                & recognitions
              </motion.span>
            </h2>
            
            <motion.div 
              className="w-16 h-px bg-gradient-to-r from-[rgb(var(--accent-1))] to-[rgb(var(--accent-3))] mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>
        </motion.div>

        {/* Stats - with micro-interactions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
              whileHover={{ y: -4 }}
            >
              <div className="relative inline-block">
                <span className="text-4xl md:text-5xl font-light text-[rgb(var(--accent-1))] relative z-10">
                  {stat.value}
                </span>
                <motion.div 
                  className="absolute -inset-2 bg-[rgb(var(--accent-1))] opacity-0 group-hover:opacity-5 rounded-full blur-xl"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-xs text-[rgb(var(--text-tertiary))] mt-2 tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Category filters - whisper thin */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-500 ${
                activeFilter === category
                  ? 'text-[rgb(var(--accent-1))] border-b border-[rgb(var(--accent-1))]'
                  : 'text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-secondary))] border-b border-transparent'
              }`}
            >
              {category.replace(/_/g, ' ')}
              {activeFilter === category && (
                <motion.div 
                  layoutId="activeFilter"
                  className="h-px bg-[rgb(var(--accent-1))] mt-2"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Achievement gallery */}
        <div ref={containerRef} className="relative pb-20">
          {/* Floating timeline marker */}
          {mounted && (
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgb(var(--accent-1))] to-transparent opacity-20"
              style={{ scaleY: scrollYProgress }}
            />
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {filteredAchievements.map((item, index) => {
                const isExpanded = expandedId === item.id;
                const isHovered = hoveredId === item.id;
                const colors = achievementColors[index % achievementColors.length];
                const pos = getPosition(index, filteredAchievements.length);

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20, rotate: pos.rotate - 2 }}
                    animate={{ opacity: 1, x: 0, rotate: pos.rotate }}
                    exit={{ opacity: 0, x: 20, rotate: pos.rotate + 2 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: pos.delay,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`relative ${pos.margin} mb-6 last:mb-0`}
                    onHoverStart={() => setHoveredId(item.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    style={{
                      translateX: pos.translateX,
                      translateY: pos.translateY,
                    }}
                  >
                    {/* Background aura */}
                    <motion.div 
                      className="absolute -inset-4 rounded-[2rem] opacity-0 transition-opacity duration-700"
                      style={{ 
                        background: `radial-gradient(circle at 50% 50%, ${colors.light} 0%, transparent 70%)`,
                      }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                    />

                    <motion.div 
                      className="relative"
                      animate={{ 
                        scale: isHovered ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div 
                        className="relative bg-[rgb(var(--bg-primary))] p-8 rounded-2xl border border-[rgb(var(--border))] cursor-pointer transition-all duration-700 overflow-hidden group"
                        style={{ 
                          borderColor: isExpanded ? colors.primary : 'rgb(var(--border))',
                          boxShadow: isExpanded ? `0 20px 40px -20px ${colors.primary}` : 'none',
                        }}
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      >
                        {/* Animated corner decorations */}
                        <motion.div 
                          className="absolute top-0 left-0 w-16 h-16 opacity-10"
                          animate={{ rotate: isHovered ? 90 : 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: colors.primary }} />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute bottom-0 right-0 w-16 h-16 opacity-10"
                          animate={{ rotate: isHovered ? -90 : 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: colors.primary }} />
                        </motion.div>

                        {/* Subtle gradient overlay on hover */}
                        <motion.div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                          style={{ 
                            background: `linear-gradient(135deg, ${colors.secondary} 0%, transparent 80%)`
                          }}
                        />

                        <div className="flex items-start gap-6 relative z-10">
                          {/* Animated symbol */}
                          <motion.div 
                            className="relative"
                            animate={{ 
                              rotate: isHovered ? [0, 15, -15, 0] : 0,
                              scale: isHovered ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <span className="text-2xl md:text-3xl" style={{ color: colors.primary }}>
                              {colors.symbol}
                            </span>
                            {isHovered && (
                              <motion.div 
                                className="absolute inset-0 blur-md"
                                style={{ color: colors.primary }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                              >
                                {colors.symbol}
                              </motion.div>
                            )}
                          </motion.div>

                          <div className="flex-1">
                            {/* Category with color indicator */}
                            <div className="flex items-center gap-3 mb-3">
                              <motion.div 
                                className="w-6 h-px"
                                style={{ backgroundColor: colors.primary }}
                                animate={{ width: isHovered ? 12 : 6 }}
                              />
                              <span className="text-[9px] uppercase tracking-[0.2em] text-[rgb(var(--text-tertiary))]">
                                {item.category.replace(/_/g, ' · ')}
                              </span>
                              {item.year && (
                                <>
                                  <span className="text-[9px] text-[rgb(var(--text-tertiary))]">·</span>
                                  <motion.span 
                                    className="text-[9px] font-mono"
                                    style={{ color: colors.primary }}
                                    animate={{ opacity: isHovered ? 1 : 0.5 }}
                                  >
                                    {item.year}
                                  </motion.span>
                                </>
                              )}
                            </div>

                            {/* Title with elegant hover effect */}
                            <h3 className="text-lg md:text-xl font-light text-[rgb(var(--text-primary))] mb-2 leading-snug">
                              {item.title.split(' ').map((word, i, arr) => (
                                <motion.span
                                  key={i}
                                  className="inline-block"
                                  animate={{ 
                                    y: isHovered ? [0, -2, 0] : 0,
                                  }}
                                  transition={{ 
                                    delay: i * 0.03,
                                    duration: 0.3
                                  }}
                                >
                                  {word}{i < arr.length - 1 ? '\u00A0' : ''}
                                </motion.span>
                              ))}
                            </h3>

                            {/* Description with gradient text on expand */}
                            <motion.p 
                              className={`text-sm text-[rgb(var(--text-secondary))] leading-relaxed ${
                                isExpanded ? 'mb-4' : 'line-clamp-2 mb-3'
                              }`}
                              animate={{ 
                                color: isExpanded ? `rgb(var(--text-primary))` : `rgb(var(--text-secondary))`,
                              }}
                            >
                              {item.description}
                            </motion.p>

                            {/* Read more with micro-animation */}
                            <motion.div 
                              className="flex items-center justify-end gap-2"
                              animate={{ x: isHovered ? 4 : 0 }}
                            >
                              <span className="text-[9px] uppercase tracking-wider text-[rgb(var(--text-tertiary))]">
                                {isExpanded ? 'close' : 'read more'}
                              </span>
                              <motion.span 
                                className="text-sm"
                                style={{ color: colors.primary }}
                                animate={{ 
                                  x: isHovered ? [0, 4, 0] : 0,
                                  rotate: isExpanded ? 90 : 0,
                                }}
                                transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }}
                              >
                                →
                              </motion.span>
                            </motion.div>

                            {/* Expanded content with rich details */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.4 }}
                                  className="mt-4 pt-4 border-t border-[rgb(var(--border))] space-y-3"
                                >
                                  {/* Organization with icon */}
                                  {item.organization && (
                                    <div className="flex items-center gap-2 text-xs">
                                      <span className="text-[rgb(var(--text-tertiary))]">🏛️</span>
                                      <span className="text-[rgb(var(--text-secondary))]">{item.organization}</span>
                                    </div>
                                  )}
                                  
                                  {/* Key highlights - extracted from description */}
                                  <div className="flex items-center gap-3 text-xs">
                                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.primary }} />
                                    <span className="text-[rgb(var(--text-tertiary))] italic">
                                      {item.description.split('.')[0]}.
                                    </span>
                                  </div>

                                  {/* Achievement metadata */}
                                  <div className="flex gap-4 pt-2">
                                    <div className="text-[8px] uppercase tracking-wider text-[rgb(var(--text-tertiary))]">
                                      <span style={{ color: colors.primary }}>{colors.symbol}</span> permanent collection
                                    </div>
                                    <div className="text-[8px] uppercase tracking-wider text-[rgb(var(--text-tertiary))]">
                                      entry #{String(index + 1).padStart(2, '0')}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal footer with scroll progress */}
        <motion.div 
          className="text-center mt-20 space-y-4"
          style={{ opacity }}
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div 
              className="w-12 h-px bg-gradient-to-l from-[rgb(var(--accent-1))] to-transparent"
              style={{ scaleX: scrollYProgress }}
            />
            <motion.span 
              className="text-[8px] tracking-[0.3em] uppercase text-[rgb(var(--text-tertiary))]"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✦ curated with care ✦
            </motion.span>
            <motion.div 
              className="w-12 h-px bg-gradient-to-r from-[rgb(var(--accent-1))] to-transparent"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          
          {/* Achievement counter */}
          <motion.div 
            className="text-[8px] font-mono text-[rgb(var(--text-tertiary))]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {filteredAchievements.length} {filteredAchievements.length === 1 ? 'achievement' : 'achievements'} displayed
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-[8px] tracking-wider text-[rgb(var(--text-tertiary))] rotate-90">⌄</span>
        <span className="text-[6px] uppercase tracking-[0.3em] text-[rgb(var(--text-tertiary))]">scroll</span>
      </motion.div>
    </section>
  );
}
