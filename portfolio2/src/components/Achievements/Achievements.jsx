import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from './../../data/index.js';
import { Award, Star, Mic, Shield } from 'lucide-react';

const Achievements = () => {
    const icons = [Award, Shield, Mic, Star];

    return (
        <section id="achievements" className="py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-bold mb-16 text-white uppercase tracking-tighter">{achievementsData.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {achievementsData.stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-blur p-8 rounded-3xl border border-white/10"
                        >
                            <div className="text-4xl font-black text-brand-blue mb-4 font-outfit uppercase tracking-tighter">{stat.value}</div>
                            <div className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{stat.label}</div>
                            <p className="text-white/40 text-sm font-inter leading-relaxed">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievementsData.items.map((item, idx) => {
                        const Icon = icons[idx % icons.length];
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/30 transition-colors">
                                    <Icon className="text-brand-blue" size={28} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2 font-inter">{item.category} • {item.year}</div>
                                    <p className="text-lg text-white/80 font-inter leading-relaxed">{item.text}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
