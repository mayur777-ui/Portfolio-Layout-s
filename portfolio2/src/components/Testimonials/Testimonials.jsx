import React from 'react';
import { motion } from 'framer-motion';
import { getTestimonials } from './../../data/index.js';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = getTestimonials();

    return (
        <section id="testimonials" className="py-24 bg-midnight">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-bold mb-16 text-white uppercase tracking-tighter">Voices <span className="text-gradient">& Reviews</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-blur p-12 rounded-[2.5rem] relative group border border-white/5 hover:border-white/20 transition-all flex flex-col"
                        >
                            <Quote className="absolute top-10 right-10 text-brand-blue/20 group-hover:text-brand-blue/40 transition-colors" size={60} />

                            <div className="flex gap-1 mb-8">
                                {[...Array(item.rating)].map((_, i) => (
                                    <span key={i} className="w-2 h-2 rounded-full bg-brand-blue"></span>
                                ))}
                            </div>

                            <p className="text-xl text-white/80 font-inter leading-relaxed italic mb-10 relative z-10">"{item.text}"</p>

                            <div className="mt-auto">
                                <div className="text-xl font-bold text-white uppercase tracking-tighter">{item.name}</div>
                                <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mt-1 font-inter">{item.role} @ {item.company}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
