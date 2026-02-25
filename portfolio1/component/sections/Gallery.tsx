'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useSiteContent } from '@/lib/data/cms-service';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const { content } = useSiteContent();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  if (!content) return null;

  const { gallery } = content;
  const allImages = gallery || [];

  // Categories
  const categories = [
    { id: 'all', label: 'all', icon: '✦' },
    { id: 'guests', label: 'celebrities', icon: '✧' },
    { id: 'events', label: 'events', icon: '◈' },
    { id: 'behind_scenes', label: 'behind scenes', icon: '☾' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setLoading(false);
    }, 800);
  };

  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="relative min-h-screen bg-[rgb(var(--bg-primary))] py-24 overflow-hidden"
    >
      {/* Background texture - like luxury paper */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(var(--accent-1), 0.1) 0%, transparent 50%)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - minimal luxury */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[rgb(var(--accent-1))] opacity-70 block mb-3">
              featured moments
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-[rgb(var(--text-primary))] mb-4">
              gallery
            </h2>
            <div className="w-16 h-px bg-[rgb(var(--accent-1))] mx-auto opacity-30" />
          </motion.div>
        </div>

        {/* Category filters - elegant tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setVisibleCount(9);
              }}
              className="relative py-2 group"
              whileHover={{ y: -1 }}
            >
              <span className={`text-sm tracking-wider transition-colors duration-300 ${
                activeCategory === cat.id
                  ? 'text-[rgb(var(--accent-1))]'
                  : 'text-[rgb(var(--text-tertiary))] group-hover:text-[rgb(var(--text-primary))]'
              }`}>
                {cat.label}
              </span>
              {activeCategory === cat.id && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-px bg-[rgb(var(--accent-1))]"
                  layoutId="activeCategoryLine"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Gallery grid - luxury magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleImages.map((image, index) => {
            // Create visual hierarchy with varied sizes
            const isHero = index === 0;
            const isWide = index === 3 || index === 7;
            const isTall = index === 1 || index === 5;
            
            return (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`relative group cursor-pointer ${
                  isHero ? 'md:col-span-2 md:row-span-2' : ''
                } ${isWide ? 'md:col-span-2' : ''} ${
                  isTall ? 'md:row-span-2' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(image)}
              >
                <div className={`relative w-full ${
                  isHero ? 'aspect-[16/9] md:aspect-[3/2]' : 
                  isTall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                } overflow-hidden rounded-2xl bg-[rgb(var(--bg-secondary))]`}>
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />

                  {/* Overlay - appears on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.p 
                        className="text-white text-xl font-light mb-2"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: hoveredIndex === index ? 0 : 10, opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {image.title}
                      </motion.p>
                      {image.guest && (
                        <motion.p 
                          className="text-white/80 text-sm flex items-center gap-2"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: hoveredIndex === index ? 0 : 10, opacity: hoveredIndex === index ? 1 : 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          <span className="w-4 h-px bg-[rgb(var(--accent-1))]" />
                          with {image.guest.name}
                        </motion.p>
                      )}
                      <motion.p 
                        className="text-white/40 text-xs mt-3"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: hoveredIndex === index ? 0 : 10, opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {image.date}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Category badge - subtle */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-[rgb(var(--text-secondary))]">
                    {image.category}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-16">
            <motion.button
              onClick={loadMore}
              disabled={loading}
              className="group relative inline-flex items-center gap-3 px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 border border-[rgb(var(--border))] rounded-full group-hover:border-[rgb(var(--accent-1))] transition-colors duration-500" />
              <span className="relative text-sm tracking-wider text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--accent-1))] transition-colors duration-500">
                {loading ? 'loading...' : 'load more'}
              </span>
              {!loading && (
                <motion.span 
                  className="relative text-lg text-[rgb(var(--text-tertiary))] group-hover:text-[rgb(var(--accent-1))] transition-colors duration-500"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              )}
            </motion.button>
          </div>
        )}

        {/* Counter */}
        <div className="text-center mt-6">
          <p className="text-xs text-[rgb(var(--text-tertiary))] opacity-50">
            {visibleImages.length} of {filteredImages.length} moments
          </p>
        </div>

        {/* Lightbox - luxury fullscreen */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div 
                className="relative w-full max-w-6xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image container */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>

                {/* Caption */}
                <motion.div 
                  className="absolute -bottom-16 left-0 right-0 flex justify-between items-end text-white/80"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <p className="text-xl font-light">{selectedImage.title}</p>
                    {selectedImage.guest && (
                      <p className="text-sm text-[rgb(var(--accent-1))]">
                        with {selectedImage.guest.name}
                      </p>
                    )}
                  </div>
                  <p className="text-sm">{selectedImage.date}</p>
                </motion.div>

                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
                >
                  <span className="text-2xl">✕</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="text-center mt-24">
          <div className="flex items-center justify-center gap-2 opacity-20">
            <span className="text-xs text-[rgb(var(--text-tertiary))]">✦</span>
            <span className="text-xs tracking-[0.2em] text-[rgb(var(--text-tertiary))]">end of gallery</span>
            <span className="text-xs text-[rgb(var(--text-tertiary))]">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}