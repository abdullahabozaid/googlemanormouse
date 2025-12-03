
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 md:py-48 bg-black relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4 text-white">
                Unlock The <span className="text-brand-red">Brotherhood</span>
            </h2>
            <p className="text-gray-400 font-light text-lg tracking-wide">
                Simple pricing. Maximum value. No hidden fees.
            </p>
        </motion.div>

        {/* Pricing Layout - Split Panel */}
        <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-neutral-900/30 border border-white/10 rounded-sm overflow-hidden"
        >
                
            {/* Left Panel: Features (Value) */}
            <div className="p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="font-heading text-xl uppercase tracking-widest text-white mb-8 flex items-center gap-3">
                    What's Included
                    <span className="h-px flex-1 bg-white/10"></span>
                </h3>
                <ul className="space-y-6">
                    {[
                        "Unlimited Bootcamp Access",
                        "Custom App Workouts & Plans",
                        "Private WhatsApp Community",
                        "Monthly Expert Webinars",
                        "Priority Retreat Booking",
                        "Weekly Accountability Check-ins"
                    ].map((item, i) => (
                        <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="mt-1 w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shrink-0">
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-gray-300 font-light text-lg group-hover:text-white transition-colors">{item}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* Right Panel: Price & Action */}
            <div className="p-10 md:p-14 bg-neutral-900/50 flex flex-col justify-center items-center text-center relative">
                 {/* Background Ambience */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red/5 blur-[80px] rounded-full pointer-events-none"
                ></motion.div>

                <div className="relative z-10 w-full max-w-sm">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="inline-block py-1.5 px-4 border border-brand-red/30 rounded-full text-brand-red text-xs font-bold uppercase tracking-widest mb-8 bg-brand-red/5"
                    >
                        All-Access Pass
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                        className="flex items-baseline justify-center gap-1 mb-2"
                    >
                        <span className="text-6xl md:text-7xl font-heading font-bold text-white tracking-tighter">£35</span>
                        <span className="text-xl text-gray-500 font-light uppercase">/mo</span>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-gray-400 text-sm font-light mb-10"
                    >
                        Cancel anytime. No questions asked.
                    </motion.p>

                    <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="w-full bg-gradient-to-b from-brand-red to-brand-darkRed hover:brightness-110 text-white font-heading font-bold uppercase tracking-wide text-lg px-12 py-3 rounded-sm shadow-lg shadow-brand-red/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
                    >
                        Get Started
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-6 text-xs text-gray-600 uppercase tracking-widest"
                    >
                        Join the brotherhood today.
                    </motion.p>
                </div>
            </div>

        </motion.div>
        
        {/* Footer Link */}
        <div className="mt-12 text-center">
                <a href="#contact" className="text-gray-500 text-sm font-light hover:text-brand-red transition-colors underline decoration-white/10 hover:decoration-brand-red underline-offset-4">
                Have questions before joining? Contact us.
                </a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
