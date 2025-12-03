
import React from 'react';
import { motion } from 'framer-motion';

const Coaches: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-gradient-to-b from-neutral-900 to-black">
      <div className="container mx-auto px-6">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl font-bold uppercase text-center mb-16"
        >
            Meet Your <span className="text-brand-red">Coaches</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="order-2 md:order-1"
             >
                <h3 className="font-heading text-3xl font-bold uppercase mb-4">Mossab & Adz</h3>
                <div className="w-20 h-1 bg-brand-red mb-6"></div>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                    With over 10 years of experience coaching group fitness and one-on-one sessions, we bring meticulous attention to form and technique.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                    Mossab focuses on structure and adaptability, ensuring all fitness levels maintain high standards. Adz ensures you get maximum results from every single rep.
                </p>
                <p className="text-white font-heading uppercase text-xl font-bold italic">
                    "We don't just train. We build."
                </p>
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="order-1 md:order-2"
             >
                 <div className="relative group">
                    <div className="absolute inset-0 border-2 border-brand-red translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1541600383005-565c949cf777?q=80&w=2070&auto=format&fit=crop" 
                        alt="Coaches" 
                        className="relative z-10 rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
             </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
