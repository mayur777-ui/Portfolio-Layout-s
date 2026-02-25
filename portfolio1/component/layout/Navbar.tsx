// component/layout/Navbar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteContent } from '@/lib/data/cms-service';

export default function Navbar() {
  const { content } = useSiteContent();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [logoHovered, setLogoHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Poetic navigation
  const navItems = [
    { href: '#home', label: 'presence' },
    { href: '#journey', label: 'journey' },
    { href: '#gallery', label: 'moments' },
    { href: '#achievements', label: 'echoes' },
    { href: '#testimonials', label: 'whispers' },
    { href: '#contact', label: 'connect' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  if (!content) return null;

  const { profile } = content;
  const firstName = profile?.firstName?.toLowerCase() || 'souhardya';
  // const lastName = profile?.lastName?.toLowerCase() || 'bose';

  // Create signature style - first letter large, rest connected
  const signatureLetters = firstName.split('');
  // const lastInitial = lastName.charAt(0);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'py-4 bg-[rgb(var(--bg-primary))]/80 backdrop-blur-md' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            
            {/* Signature Logo - Full of Personality */}
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group relative block"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <div className="flex items-end gap-1">
                {/* Signature style - first letter prominent */}
                <motion.span 
                  className="text-3xl sm:text-4xl font-light text-[rgb(var(--accent-1))]"
                  animate={{ 
                    rotate: logoHovered ? [-2, 2, -2, 0] : 0,
                    scale: logoHovered ? [1, 1.05, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {signatureLetters[0]}
                </motion.span>
                
                {/* Rest of name - connected like handwriting */}
                <motion.div 
                  className="flex items-center"
                  animate={{ 
                    x: logoHovered ? 2 : 0,
                  }}
                >
                  {signatureLetters.slice(1).map((letter, index) => (
                    <motion.span 
                      key={index}
                      className="text-lg sm:text-xl font-light text-[rgb(var(--text-primary))]"
                      animate={{ 
                        y: logoHovered ? [0, -1, 0] : 0,
                      }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Last initial - connected with a dot */}
                <motion.span 
                  className="text-lg sm:text-xl font-light text-[rgb(var(--text-primary))] ml-1"
                  animate={{ 
                    opacity: logoHovered ? 1 : 0.7,
                  }}
                >
                  {/* {lastInitial} */}
                </motion.span>

                {/* Hand-drawn underline that appears on hover */}
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 100 10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: logoHovered ? 1 : 0 }}
                >
                  <motion.path
                    d="M2,8 Q20,2 40,8 T80,5 T98,7"
                    stroke={`rgb(var(--accent-1))`}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: logoHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.svg>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const isHovered = hoveredItem === item.href;
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative py-2 group"
                  >
                    <motion.span 
                      className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                        isActive 
                          ? 'text-[rgb(var(--accent-1))]' 
                          : 'text-[rgb(var(--text-tertiary))] group-hover:text-[rgb(var(--text-primary))]'
                      }`}
                      animate={{ 
                        y: isHovered ? -1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>

                    {isActive && (
                      <motion.div 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[rgb(var(--accent-1))]"
                        layoutId="activeDot"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div 
                className="absolute inset-0 rounded-full border border-[rgb(var(--border))] group-hover:border-[rgb(var(--accent-1))] transition-colors"
                animate={{ scale: menuOpen ? 1.1 : 1 }}
              />
              
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span
                    key="close"
                    className="text-xs tracking-widest uppercase text-[rgb(var(--accent-1))]"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    close
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    className="text-xs tracking-widest uppercase text-[rgb(var(--text-primary))]"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    menu
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            ref={menuRef}
            className="fixed inset-0 z-40 md:hidden bg-[rgb(var(--bg-primary))] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background artistic elements */}
            <motion.div 
              className="absolute top-20 left-10 text-9xl text-[rgb(var(--accent-1))] opacity-3 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              ✦
            </motion.div>
            <motion.div 
              className="absolute bottom-20 right-10 text-9xl text-[rgb(var(--accent-2))] opacity-3 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              ✧
            </motion.div>

            {/* Navigation Items */}
            <nav className="relative z-10 space-y-12 text-center">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className={`text-2xl tracking-widest uppercase transition-all duration-300 ${
                      isActive 
                        ? 'text-[rgb(var(--accent-1))]' 
                        : 'text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))]'
                    }`}>
                      {item.label}
                    </span>

                    {isActive && (
                      <motion.div 
                        className="w-12 h-px bg-[rgb(var(--accent-1))] mx-auto mt-3"
                        layoutId="mobileActiveLine"
                      />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer - Signature touch */}
            <motion.div 
              className="absolute bottom-12 left-0 right-0 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-[rgb(var(--text-tertiary))] flex items-center justify-center gap-2">
                <span>{profile?.location?.split(',')[0] || 'punjab'}</span>
                <span className="w-1 h-1 rounded-full bg-[rgb(var(--text-tertiary))]" />
                <span>{firstName}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}