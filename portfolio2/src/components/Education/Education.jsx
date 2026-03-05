import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, Award, ExternalLink, Zap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-32 bg-midnight">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-24 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 text-green-500 font-bold text-sm uppercase tracking-widest mb-8"
                        >
                            <GraduationCap size={16} />
                            Professor Persona
                        </motion.div>
                        <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
                            Educating<br />
                            <span className="text-gradient">Millions.</span>
                        </h2>
                        <p className="text-2xl text-white/60 leading-relaxed font-inter italic max-w-2xl">
                            "Knowledge is only powerful when distributed. My mission is to simplify tech for the next generation of global innovators."
                        </p>
                    </div>
                    <div className="md:pt-20">
                        <div className="p-8 premium-blur rounded-3xl border border-white/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="text-5xl font-black text-brand-blue font-outfit">5000+</div>
                            <div className="text-white/40 font-bold uppercase tracking-widest text-[10px] mt-2">Verified Students</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group premium-blur p-12 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">Teaching Tech</h3>
                            <p className="text-white/40 leading-relaxed font-inter">Specializing in Full-stack development, Product management, and System architecture at LPU.</p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-white/20 text-xs font-bold uppercase tracking-widest">
                            <Award size={14} /> Academic Excellence
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group premium-blur p-12 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between bg-brand-blue/5"
                    >
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center text-white mb-8">
                                <Users size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">Mentorship</h3>
                            <p className="text-white/40 leading-relaxed font-inter">Guiding thousands of students through career roadmaps, interview prep, and industry transitions.</p>
                        </div>
                        <button className="mt-12 w-full py-4 rounded-xl border border-white/10 font-bold text-white text-xs uppercase tracking-widest hover:bg-white hover:text-midnight transition-all flex items-center justify-center gap-2">
                            Join Session <ExternalLink size={14} />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group premium-blur p-12 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">Tech Evangelist</h3>
                            <p className="text-white/40 leading-relaxed font-inter">Promoting best practices in engineering and product ideology across global communities.</p>
                        </div>
                        <div className="mt-8 flex flex-row gap-2">
                            {['LPU', 'IEEE', 'UGC'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-[8px] font-bold text-white/40 uppercase tracking-widest">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
