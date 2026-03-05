import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Clock } from 'lucide-react';
import { heroData } from '../../data/index.js';

const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-midnight">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping"></span>
                <span className="text-[10px] font-black text-white/60 tracking-[0.2em] uppercase">
                  EST. {heroData.established} • {heroData.location}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 backdrop-blur-md text-brand-blue">
                <Clock size={12} className="animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase font-mono">
                  {formatTime(time)} GMT+5:30
                </span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.85] mb-12 uppercase tracking-tighter drop-shadow-2xl relative">
              <span className="block">{heroData.firstName}</span>
              <span className="text-gradient block mt-2">{heroData.lastName}</span>

              {/* Decorative background text for depth */}
              <span className="absolute -top-10 -left-10 text-[12rem] font-black text-white/[0.02] -z-10 select-none hidden lg:block uppercase tracking-tighter">
                {heroData.lastName}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/40 max-w-xl mb-16 leading-relaxed font-inter italic border-l-2 border-brand-blue/30 pl-8">
              "Transforming the academic experience through professional excellence and strategic community building."
            </p>

            <div className="flex flex-wrap gap-8">
              <a href={heroData.cta.primary.href} className="btn-premium flex items-center gap-4 group !no-underline text-white px-12 py-6">
                {heroData.cta.primary.label} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <button className="flex items-center gap-4 px-10 py-6 rounded-full bg-white/[0.03] border border-white/10 font-black text-[10px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all group text-white">
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </div>
                Watch Moments
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative lg:block hidden"
          >
            <div className="absolute -inset-4 bg-brand-blue/10 blur-[60px] rounded-full animate-pulse-slow"></div>
            <div className="relative premium-blur rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-3xl bg-midnight/40 group">
              <img
                src={heroData.photo}
                alt={`${heroData.firstName} ${heroData.lastName}`}
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-60"></div>
            </div>

            <motion.div
              animate={{ y: [0, -15, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 premium-blur p-8 rounded-[2rem] shadow-4xl border border-brand-blue/20 bg-brand-blue/5 z-20 backdrop-blur-2xl"
            >
              <div className="text-5xl font-black font-outfit text-white tracking-tighter mb-1">{heroData.stat.number}</div>
              <div className="text-[10px] text-brand-blue font-black uppercase tracking-[0.3em] font-inter">{heroData.stat.label}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
