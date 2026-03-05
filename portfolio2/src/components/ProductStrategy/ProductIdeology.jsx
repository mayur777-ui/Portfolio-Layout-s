import React from 'react';
import { motion } from 'framer-motion';
import { Users, Layers, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getProductIdeology } from '../../data/index.js';

const ProductIdeology = () => {
    const data = getProductIdeology();
    const icons = { Users, Layers, Zap };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="product" className="py-32 bg-white/[0.01] relative overflow-hidden shimmer-bg">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/[0.02] -skew-x-12 -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-lg bg-brand-blue text-white font-bold text-sm uppercase tracking-widest mb-8"
                        >
                            The Strategy
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-10 leading-[0.9]">
                            Product<br />
                            <span className="text-gradient">Ideology</span>
                        </h2>
                        <p className="text-xl text-white/60 leading-relaxed font-inter pr-8">
                            Bridging the gap between complex engineering and human-centric design. My consultancy focuses on building product ecosystems that are intuitive, scalable, and deeply aligned with user needs.
                        </p>

                        <div className="mt-12 flex flex-col gap-6">
                            {data.workflow.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <span className="text-4xl font-black text-white/5 group-hover:text-brand-blue/20 transition-colors font-outfit">{step.step}</span>
                                    <div>
                                        <div className="text-white font-bold uppercase tracking-widest text-sm mb-1">{step.name}</div>
                                        <div className="text-white/40 text-xs font-inter">{step.detail}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-6"
                    >
                        {data.pillars.map((pillar, idx) => {
                            const Icon = icons[pillar.icon] || Layers;
                            return (
                                <motion.div
                                    key={pillar.id}
                                    variants={itemVariants}
                                    className="premium-blur p-12 rounded-[2.5rem] border border-white/5 hover:border-brand-blue/20 transition-all group hover:scale-[1.02]"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">{pillar.title}</h3>
                                    <p className="text-white/40 leading-relaxed font-inter">{pillar.description}</p>

                                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Consultancy Pillar</span>
                                        <ArrowRight size={16} className="text-brand-blue" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Consulting CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="premium-blur p-12 md:p-20 rounded-[3rem] border border-brand-blue/20 bg-brand-blue/5 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
                        Need a Product <span className="text-brand-blue">Specialist?</span>
                    </h3>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 font-inter">
                        Deep-dive consultancy for startups and established tech firms looking to redefine their roadmap and user experience.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {['Product Management', 'Market Entry', 'Tech Evangelism', 'Education Strategy'].map((tag, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/80 font-bold uppercase tracking-widest text-[10px]">
                                <CheckCircle2 size={12} className="text-brand-blue" />
                                {tag}
                            </div>
                        ))}
                    </div>
                    <button className="btn-premium mt-16 text-white uppercase tracking-[0.2em] text-sm">Book a Consultation</button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductIdeology;
