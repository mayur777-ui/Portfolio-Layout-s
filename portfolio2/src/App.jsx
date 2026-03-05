import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Gallery from './components/Gallery/Gallery'
import Experience from './components/Experience/Experience'
import Achievements from './components/Achievements/Achievements'
import Testimonials from './components/Testimonials/Testimonials'
import Techfluence from './components/Techfluence/Techfluence'
import ProductIdeology from './components/ProductStrategy/ProductIdeology'
import Education from './components/Education/Education'

function App() {
  return (
    <div className="bg-midnight min-h-screen text-white font-inter selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Education Persona */}
        <Education />

        {/* Content Creation Pillars */}
        <Techfluence />

        {/* Visual Journey */}
        <Gallery />

        {/* Product Consultancy & Ideology */}
        <ProductIdeology />

        {/* History & Credibility */}
        <Experience />
        <Achievements />

        {/* Social Proof */}
        <Testimonials />
      </main>

      <footer className="py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="premium-blur p-20 rounded-[4rem] mb-32 relative overflow-hidden group border border-brand-blue/10 hover:border-brand-blue/30 transition-all bg-brand-blue/[0.02]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-blue/5 blur-[120px] -z-10 group-hover:bg-brand-blue/10 transition-colors"></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-[0.9]">
                Let's Build the <span className="text-gradient">Future.</span>
              </h2>
              <p className="text-2xl text-white/40 max-w-3xl mx-auto mb-16 font-inter leading-relaxed">
                Available for high-impact consultancy, product strategy, and institutional keynote sessions.
                Let's redefine the educational and tech landscape together.
              </p>
              <button className="btn-premium text-white px-20 py-6 text-xl tracking-[0.3em] shadow-[0_0_50px_rgba(18,62,151,0.2)]">
                START CONSULTANCY
              </button>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5 text-white/20">
            <div className="text-2xl font-black font-outfit uppercase tracking-tighter">
              Souhardya <span className="text-brand-blue">Bose.</span>
            </div>
            <p className="tracking-widest uppercase text-[10px] font-black font-inter">
              © 2026 SOUHARDYA BOSE • HEAD OF GUEST RELATIONS • ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
