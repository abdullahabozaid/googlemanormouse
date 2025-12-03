
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
           <img 
             src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/BT2Tohm3AXWyQ92OuS19/media/689073f1711f8985b45e5eed.png" 
             alt="Man or Mouse" 
             className="h-16 md:h-20 w-auto object-contain"
           />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-heading uppercase tracking-wide text-sm font-medium">
          <button onClick={() => scrollToSection('about')} className="hover:text-brand-red transition-colors duration-300">About</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-brand-red transition-colors duration-300">Services</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-brand-red transition-colors duration-300">Testimonials</button>
          <button onClick={() => scrollToSection('pricing')} className="group bg-gradient-to-b from-brand-red to-brand-darkRed hover:brightness-110 text-white px-8 py-3 rounded-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-brand-red/20 flex items-center gap-2">
            Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-gray border-b border-white/10 overflow-hidden"
          >
             <div className="py-8 flex flex-col items-center gap-6 font-heading uppercase tracking-wide">
                <button onClick={() => scrollToSection('about')} className="text-lg hover:text-brand-red">About</button>
                <button onClick={() => scrollToSection('services')} className="text-lg hover:text-brand-red">Services</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-lg hover:text-brand-red">Testimonials</button>
                <button onClick={() => scrollToSection('pricing')} className="bg-gradient-to-b from-brand-red to-brand-darkRed hover:brightness-110 text-white px-8 py-3 text-lg rounded-sm w-3/4 shadow-lg shadow-brand-red/20 flex items-center justify-center gap-2 group">
                    Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
