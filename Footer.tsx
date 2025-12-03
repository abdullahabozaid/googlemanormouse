
import React from 'react';
import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black pt-32 md:pt-48 pb-8"
    >
        <div className="container mx-auto px-6 mb-16 text-center">
             <h2 className="font-heading text-3xl font-bold uppercase mb-4 text-white">Still Got Questions?</h2>
             <p className="text-gray-400 mb-8 font-light">It's okay to ask. We respond quickly.</p>
             <div className="flex flex-col md:flex-row justify-center gap-6">
                 <a href="mailto:help@lc.manormouse.net" className="flex items-center justify-center gap-2 border border-white/20 px-6 py-3 rounded-sm hover:border-brand-red hover:text-brand-red transition-all text-sm font-heading uppercase">
                    <Mail size={18} /> Email Us
                 </a>
             </div>
        </div>

      {/* Soft Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-12"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
                <span className="font-heading font-bold text-3xl tracking-tighter text-white block mb-6">
                    MAN<span className="text-brand-red">OR</span>MOUSE
                </span>
                <p className="text-gray-400 max-w-md mb-6 font-light">
                    The Brotherhood for Men Who Want More. Outdoor bootcamps, expert online coaching, and a private community.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:help@lc.manormouse.net" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="font-heading text-lg font-bold uppercase mb-6 text-brand-red">Explore</h4>
                <ul className="space-y-3 text-gray-400 font-light text-sm">
                    <li><a href="#about" className="hover:text-white transition-colors">Who We Are</a></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Everything You Get</a></li>
                    <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                    <li><a href="#pricing" className="hover:text-white transition-colors">Membership</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-heading text-lg font-bold uppercase mb-6 text-brand-red">Location</h4>
                <ul className="space-y-3 text-gray-400 font-light text-sm">
                    <li className="mt-4">
                        <span className="block text-white font-bold uppercase text-xs mb-1">Paddington Recreation Ground</span>
                        London, UK
                    </li>
                    <li className="text-xs text-gray-500 uppercase mt-4">
                        Wed: HIIT THE BAR<br/>
                        Sat: HIIT & RUN
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Man or Mouse. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
