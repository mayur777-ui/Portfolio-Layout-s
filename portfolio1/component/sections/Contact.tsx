
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteContent } from '@/lib/data/cms-service';

export default function Contact() {
  const { content } = useSiteContent();
  const [mounted, setMounted] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [activeTab, setActiveTab] = useState('message');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !content) return null;

  const { contact, profile } = content;
  const { email, location, socials, responseTime } = contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[rgb(var(--bg-primary))] overflow-hidden">
      {/* Simple, clean background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[rgb(var(--accent-1))] opacity-3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[rgb(var(--accent-2))] opacity-3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header - Simple but elegant */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm tracking-[0.3em] text-[rgb(var(--accent-1))] uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-light mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's <span className="text-[rgb(var(--accent-1))]">connect</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-px bg-[rgb(var(--accent-1))] mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Main Content - Clean 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Email Card */}
            <motion.div 
              className="group p-6 bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent-1))] transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[rgb(var(--text-tertiary))]">Email</span>
                  <a 
                    href={`mailto:${email}`}
                    className="block text-lg md:text-xl mt-2 text-[rgb(var(--fg-primary))] hover:text-[rgb(var(--accent-1))] transition-colors"
                  >
                    {email}
                  </a>
                  <p className="text-sm text-[rgb(var(--text-secondary))] mt-2">
                    ✦ Response: {responseTime}
                  </p>
                </div>
                <span className="text-2xl text-[rgb(var(--accent-1))] opacity-30 group-hover:opacity-100 transition-opacity">✧</span>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              className="group p-6 bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent-2))] transition-all duration-300"
              whileHover={{ y: -4 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[rgb(var(--text-tertiary))]">Location</span>
                  <p className="text-lg md:text-xl mt-2 text-[rgb(var(--fg-primary))]">{location}</p>
                  <p className="text-sm text-[rgb(var(--text-secondary))] mt-2">
                    ✦ Open for meetings & events
                  </p>
                </div>
                <span className="text-2xl text-[rgb(var(--accent-2))] opacity-30 group-hover:opacity-100 transition-opacity">✦</span>
              </div>
            </motion.div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="p-4 bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-center group hover:border-[rgb(var(--accent-3))] transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-xl text-[rgb(var(--accent-3))] opacity-50 group-hover:opacity-100">☎</span>
                <p className="text-xs mt-2 text-[rgb(var(--text-tertiary)))]">Available on</p>
                <p className="text-sm font-medium">Calendar</p>
              </motion.div>
              <motion.div 
                className="p-4 bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-center group hover:border-[rgb(var(--accent-4))] transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-xl text-[rgb(var(--accent-4))] opacity-50 group-hover:opacity-100">✉</span>
                <p className="text-xs mt-2 text-[rgb(var(--text-tertiary)))]">Reply within</p>
                <p className="text-sm font-medium">24h</p>
              </motion.div>
            </div>

            {/* Social Links - Simple Grid */}
            <div className="pt-4">
              <h3 className="text-sm uppercase tracking-wider text-[rgb(var(--text-tertiary))] mb-4">Find me on</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent-1))] group transition-all"
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm capitalize">{social.platform}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[rgb(var(--text-tertiary))]">{social.followers}</span>
                      <span className="text-[rgb(var(--accent-1))] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Simple Message Form */}
          <motion.div 
            className="bg-[rgb(var(--bg-secondary))] p-8 border border-[rgb(var(--border))]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-6">Send a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[rgb(var(--text-tertiary))] mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] focus:border-[rgb(var(--accent-1))] outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[rgb(var(--text-tertiary))] mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] focus:border-[rgb(var(--accent-1))] outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[rgb(var(--text-tertiary))] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border))] focus:border-[rgb(var(--accent-1))] outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full py-4 bg-[rgb(var(--fg-primary))] text-white hover:bg-[rgb(var(--accent-1))] transition-colors relative overflow-hidden disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && 'Sent! ✦'}
                </span>
              </motion.button>

              {/* Simple note */}
              <p className="text-xs text-center text-[rgb(var(--text-tertiary))] mt-4">
                I'll get back to you within 24 hours
              </p>
            </form>
          </motion.div>
        </div>

        {/* Footer - Clean and simple */}
        <motion.footer 
          className="mt-20 pt-8 border-t border-[rgb(var(--border))] text-center text-sm text-[rgb(var(--text-tertiary))]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} {profile?.firstName} {profile?.lastName}. All rights reserved.</p>
          <p className="mt-2 text-xs">
            ✦ Based in {location.split(',')[0]} · Available worldwide ✦
          </p>
        </motion.footer>
      </div>
    </section>
  );
}