import React from 'react';
import { motion } from 'framer-motion';
import { getGallery } from './../../data/index.js';

const Gallery = () => {
    const items = getGallery();

    return (
        <section id="gallery" className="py-24 bg-white/[0.02] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="inline-block px-4 py-2 rounded-lg bg-brand-blue/20 text-brand-blue font-bold text-sm uppercase tracking-widest mb-6 font-inter underline-offset-4 decoration-brand-blue decoration-2">Visual Journey</div>
                        <h2 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-tighter leading-none">Moments <span className="text-gradient"> & Impact</span></h2>
                        <p className="text-xl text-white/60 max-w-xl font-inter">A curated archive of high-profile events and institutional leadership. Each moment represents a story of technical and social growth.</p>
                    </div>
                    <button className="px-8 py-4 rounded-full border border-white/20 font-bold hover:bg-white hover:text-midnight transition-all text-white uppercase tracking-widest text-xs font-inter">
                        Explore All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 4) * 0.1 }}
                            whileHover={{ scale: 0.98 }}
                            className={`relative overflow-hidden group rounded-3xl border border-white/10 bg-white/5 ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                } ${idx === 5 ? 'md:col-span-2' : ''}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2 block font-inter">{item.category} • {item.date}</span>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">{item.title}</h3>
                                {item.guest && (
                                    <p className="text-white/60 text-sm mt-2 font-inter">with {item.guest.name}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
