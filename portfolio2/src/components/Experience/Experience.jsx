import React from 'react';
import { motion } from 'framer-motion';
import { getJourney } from './../../data/index.js';

const Experience = () => {
    const journey = getJourney();

    return (
        <section id="journey" className="py-24 bg-midnight relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="inline-block px-4 py-2 rounded-lg bg-brand-blue/20 text-brand-blue font-bold text-sm uppercase tracking-widest mb-6 font-inter">Evolution</div>
                <h2 className="text-5xl md:text-7xl font-bold mb-16 text-white uppercase tracking-tighter">The <span className="text-gradient">Journey</span></h2>

                <div className="space-y-24">
                    {journey.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
                        >
                            <div className="flex-1 w-full">
                                <div className="relative premium-blur rounded-3xl overflow-hidden aspect-video border border-white/20 group">
                                    {item.media.type === 'youtube' ? (
                                        <iframe
                                            src={item.media.url}
                                            className="w-full h-full border-0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <img src={item.media.src} alt={item.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                                    )}
                                </div>
                            </div>

                            <div className="flex-1 w-full space-y-6">
                                <div className="text-6xl font-black text-white/10 font-outfit uppercase tracking-tighter">{item.year}</div>
                                <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">{item.title}</h3>
                                <h4 className="text-brand-blue font-bold uppercase tracking-widest text-sm font-inter">{item.subtitle}</h4>
                                <p className="text-lg text-white/60 leading-relaxed font-inter">{item.description}</p>

                                {item.metric && (
                                    <div className="pt-6 inline-flex flex-col">
                                        <span className="text-4xl font-bold text-white font-outfit uppercase tracking-tighter">{item.metric}</span>
                                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest font-inter">{item.metricLabel}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
