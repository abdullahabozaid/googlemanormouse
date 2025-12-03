
import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-black relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
             initial={{ opacity: 0, x: -50, scale: 0.95 }}
             whileInView={{ opacity: 1, x: 0, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative"
        >
             {/* Gritty Image - Male Focus */}
            <div className="relative h-[600px] w-full bg-brand-gray rounded-sm overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1517963879466-e1b54ebd6694?q=80&w=2068&auto=format&fit=crop" 
                    alt="Man exhausted after workout" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            </div>
        </motion.div>

        <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight">
                Who Is <span className="text-brand-red">Man or Mouse?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-light">
                We are a men-only training community based in Paddington Rec, London. We combine gritty outdoor bootcamps with professional app-based coaching and a private support network.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                This isn’t a commercial gym. It’s a challenge. We are for the men who are:
            </p>
            
            <ul className="space-y-4 font-heading text-xl uppercase tracking-wide mb-10">
                {[
                  "Bored of the standard gym routine.",
                  "Craving structure and professional guidance.",
                  "Looking for brotherhood and accountability.",
                  "Ready to be pushed beyond their limits."
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    className="flex items-center gap-3"
                  >
                      <span className="w-2 h-2 bg-brand-red rounded-full shrink-0"></span>
                      {item}
                  </motion.li>
                ))}
            </ul>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-6 border-l-4 border-brand-red bg-white/5"
            >
                <p className="text-white font-bold text-lg italic">
                    "Man or Mouse? It’s a choice about your standards."
                </p>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
