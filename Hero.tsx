
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/msgsndr/BT2Tohm3AXWyQ92OuS19/media/675833e4b96532f24e18de62.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Bottom Fade Gradient for seamless transition */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl text-left"
        >
            <motion.h2 variants={itemVariants} className="font-heading text-xl md:text-2xl text-brand-red uppercase tracking-[0.2em] mb-4 font-bold">
            The Brotherhood for Men Who Want More
            </motion.h2>
            <motion.h1 variants={itemVariants} className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-none mb-6">
            <span className="text-brand-red">Man</span> <span className="text-stroke-white text-transparent" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>Or</span> <span className="text-neutral-400">Mouse?</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-200 text-lg md:text-2xl mb-8 leading-relaxed font-light max-w-2xl">
            The hybrid training brotherhood. Outdoor bootcamps, expert online coaching, and a private community for men who refuse to be average.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-8 text-gray-300 font-heading uppercase tracking-wide text-sm font-medium">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-red rounded-full"></span> Build Real Strength</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-red rounded-full"></span> Forge Mental Resilience</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-red rounded-full"></span> Join The Brotherhood</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-start items-center md:items-start">
            <button 
                onClick={scrollToPricing}
                className="group w-full md:w-auto bg-gradient-to-b from-brand-red to-brand-darkRed hover:brightness-110 text-white font-heading font-bold text-lg uppercase px-12 py-3 rounded-sm transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(217,35,35,0.4)] flex items-center justify-center gap-3"
            >
                Get Started <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            </motion.div>
            
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/50 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
