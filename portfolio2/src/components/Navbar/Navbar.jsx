import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Education', href: '#education' },
        { name: 'Techfluence', href: '#techfluence' },
        { name: 'Strategy', href: '#product' },
        { name: 'Moments', href: '#gallery' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'py-4 translate-y-0' : 'py-10'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`premium-blur rounded-full px-10 py-5 flex items-center justify-between transition-all duration-500 ${scrolled ? 'border-white/10 shadow-2xl scale-[0.98]' : 'border-white/5 shadow-none'
                    } relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-brand-blue/5 -z-10 group-hover:bg-brand-blue/10 transition-colors"></div>

                    <div className="text-3xl font-black font-outfit text-white tracking-widest uppercase">
                        S<span className="text-brand-blue">.</span>BOSE
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link text-[10px] font-black uppercase tracking-[0.3em] !no-underline text-white/50 hover:text-white transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="px-10 py-4 bg-brand-blue text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-midnight transition-all shadow-[0_0_30px_rgba(18,62,151,0.4)] hover:shadow-none">
                            CONSULTANCY
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-full left-0 w-full p-6 lg:hidden origin-top"
                    >
                        <div className="premium-blur rounded-[3rem] p-10 flex flex-col gap-8 border border-white/10 shadow-3xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-3xl font-black uppercase tracking-tighter text-white/60 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="border-white/5" />
                            <button className="btn-premium w-full text-white text-[12px] tracking-[0.3em]">CONSULTANCY</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
