import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Youtube, ArrowRight } from 'lucide-react';
import { getTechfluence } from '../../data/index.js';

const Techfluence = () => {
    const data = getTechfluence();

    return (
        <section id="techfluence" className="py-32 bg-midnight relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/10 text-red-500 font-bold text-sm uppercase tracking-widest mb-6"
                        >
                            <Youtube size={16} />
                            Featured Show
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
                            {data.title}<span className="text-brand-blue">.</span>
                        </h2>
                        <p className="text-2xl text-white/60 leading-relaxed font-inter italic">
                            "{data.description}"
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <div className="text-right">
                            <div className="text-4xl font-bold text-white uppercase tracking-tighter">Content</div>
                            <div className="text-brand-blue font-bold uppercase tracking-widest text-sm mt-1">Creation & Insights</div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.episodes.map((episode, idx) => (
                        <motion.div
                            key={episode.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 premium-blur mb-6">
                                <img
                                    src={episode.thumbnail}
                                    alt={episode.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-midnight/40 group-hover:bg-midnight/10 transition-colors"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-midnight scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                                        <Play size={24} fill="currentColor" />
                                    </div>
                                </div>

                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-midnight/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                                    {episode.platform}
                                </div>
                            </div>

                            <div className="space-y-4 px-2">
                                <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Clock size={12} /> {episode.duration}</span>
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {episode.platform}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white uppercase leading-tight group-hover:text-brand-blue transition-colors tracking-tight">
                                    {episode.title}
                                </h3>
                                <p className="text-white/40 font-inter text-sm">
                                    Exclusive session with <span className="text-white/80 font-bold">{episode.guest}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <button className="px-12 py-5 rounded-full border border-white/10 font-bold text-white uppercase tracking-widest hover:bg-white hover:text-midnight transition-all group flex items-center gap-4">
                        Watch All Episodes
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Techfluence;
