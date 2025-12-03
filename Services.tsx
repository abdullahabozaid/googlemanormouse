
import React from 'react';
import { Smartphone, MessageCircle, Tent, ArrowRight, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 md:py-48 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tight">
            Everything <span className="text-brand-red">You Get</span>
          </h2>
          <p className="text-gray-400 text-lg font-light tracking-wide max-w-xl mx-auto">
            One subscription. Total access. No hidden fees.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Card 1: Bootcamps */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-2 group relative bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden h-[350px] flex flex-col justify-end p-8 transition-all duration-500 hover:border-brand-red/50 hover:shadow-[0_0_40px_-10px_rgba(217,35,35,0.3)]"
          >
             <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                 alt="Bootcamps" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
             </div>
             
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2 text-brand-red">
                    <Tent size={24} />
                    <span className="font-heading uppercase font-bold text-sm tracking-widest">Unlimited Access</span>
                </div>
                <h3 className="font-heading text-3xl font-bold uppercase mb-2 text-white">Outdoor Bootcamps</h3>
                <p className="text-gray-300 text-sm max-w-md">Attend as many sessions as you want. Booking is simple.</p>
                
                {/* Learn More Push Animation */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <div className="pt-4 flex items-center gap-2 text-brand-red text-xs font-heading font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Card 2: App */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="group relative bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden h-[350px] flex flex-col justify-end p-8 transition-all duration-500 hover:border-brand-red/50 hover:shadow-[0_0_40px_-10px_rgba(217,35,35,0.3)]"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-800 to-black"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-red text-white transition-colors duration-300">
                <Smartphone size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-2 text-white">Personalised Training</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Workouts tailored to you in our app. Gym or home.
              </p>

              {/* Learn More Push Animation */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <div className="pt-4 flex items-center gap-2 text-brand-red text-xs font-heading font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Community */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="group relative bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden h-[300px] flex flex-col justify-end p-8 transition-all duration-500 hover:border-brand-red/50 hover:shadow-[0_0_40px_-10px_rgba(217,35,35,0.3)]"
          >
             <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-800 to-black"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-red text-white transition-colors duration-300">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-2 text-white">Private Community</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The Brotherhood WhatsApp group. Accountability is key.
              </p>
              
              {/* Learn More Push Animation */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <div className="pt-4 flex items-center gap-2 text-brand-red text-xs font-heading font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Accountability */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="md:col-span-2 group relative bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden h-[300px] flex flex-col justify-end p-8 transition-all duration-500 hover:border-brand-red/50 hover:shadow-[0_0_40px_-10px_rgba(217,35,35,0.3)]"
          >
             <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                 className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
                 alt="Meeting" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
             </div>

             <div className="relative z-10 grid md:grid-cols-2 gap-4">
                <div>
                     <div className="flex items-center gap-3 mb-2 text-brand-red">
                        <Video size={24} />
                        <span className="font-heading uppercase font-bold text-sm tracking-widest">Live Coaching</span>
                     </div>
                     <h3 className="font-heading text-2xl font-bold uppercase mb-2 text-white">Monthly Webinars & Events</h3>
                     <p className="text-gray-300 text-sm">Round-table catchups, Q&A with coaches, and priority access to retreats.</p>
                     
                     {/* Learn More Push Animation */}
                     <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                        <div className="overflow-hidden">
                          <div className="pt-4 flex items-center gap-2 text-brand-red text-xs font-heading font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            Learn More <ArrowRight size={14} />
                          </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-end md:items-end">
                    <div className="flex items-center gap-2 text-gray-400 text-sm"><CheckCircle size={16} className="text-brand-red"/> Weekly Check-ins</div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm"><CheckCircle size={16} className="text-brand-red"/> Form Analysis</div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Helper icon for checkmark
const CheckCircle = ({size, className}: {size: number, className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

export default Services;
