
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Tent, Users, Smartphone, CheckCircle2 } from 'lucide-react';

const features = [
  {
    id: 1,
    category: "Feature 1: Outdoor Bootcamps",
    title: "OUTDOOR BOOTCAMPS",
    description: "Weekly men-only sessions at Paddington Rec. Wednesdays are 'HIIT the Bar' (calisthenics), Saturdays are 'HIIT & Run'. Rain or shine, we show up. This is where you build physical dominance.",
    points: ["Physical dominance & conditioning", "Unbreakable mental resilience", "Two expert coaches watching every rep", "Men-only environment"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    icon: Tent,
    align: "left"
  },
  {
    id: 2,
    category: "Feature 2: Online Coaching",
    title: "ONLINE COACHING APP",
    description: "Your pocket PT. Complete onboarding, get assigned a dedicated coach (Mossab or Adz), and receive a personalised training plan that fits your life—whether you're at home, the gym, or travelling.",
    points: ["Total clarity on what to do", "Personalised to your goals", "Weekly accountability check-ins", "Monthly round-table webinars"],
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
    icon: Smartphone,
    align: "right"
  },
  {
    id: 3,
    category: "Feature 3: The Brotherhood",
    title: "THE BROTHERHOOD",
    description: "A private, paywalled WhatsApp community where standards are high and egos are low. This is where the real work happens between sessions. Join a tribe of men with similar goals.",
    points: ["Daily accountability prompts", "Form checks & expert feedback", "Momentum, wins, and challenges", "Real support, no fluff"],
    image: "https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=1965&auto=format&fit=crop",
    icon: Users,
    align: "left"
  }
];

const FeatureSection: React.FC<{ feature: typeof features[0]; index: number }> = ({ feature, index }) => {
  const isRightAligned = feature.align === "right";
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} className="relative py-32 md:py-48 group overflow-hidden">
        {/* Background Gradient Spot for each section */}
        <div 
            className={`absolute top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none 
            ${isRightAligned ? 'left-[-10%]' : 'right-[-10%]'}`} 
        />

        {/* Numbered Dot - Centered in Section */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20 pointer-events-none">
             <div
                className="w-8 h-8 rounded-full border-2 border-neutral-800 text-neutral-500 bg-black flex items-center justify-center font-heading font-bold text-sm relative z-10 transition-all duration-300
                group-hover:border-brand-red group-hover:text-brand-red group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(217,35,35,0.4)]"
             >
                 {index + 1}
             </div>
        </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className={`flex flex-col md:flex-row gap-16 lg:gap-32 items-center ${isRightAligned ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group-hover:shadow-brand-red/10 transition-shadow duration-700">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-red">
                    <feature.icon size={22} />
                </div>
                <span className="font-heading text-brand-red uppercase tracking-widest text-sm font-bold">
                    {feature.category}
                </span>
            </div>
            
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white mb-6 leading-[0.9]">
              {feature.title}
            </h3>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-lg">
              {feature.description}
            </p>

            <ul className="space-y-5">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 group/point">
                  <CheckCircle2 className="text-brand-red mt-1 shrink-0 group-hover/point:text-white transition-colors" size={20} />
                  <span className="text-lg font-light">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const DetailedFeatures: React.FC = () => {
  return (
    <section className="bg-black relative">
       {/* Central Line */}
       <div className="absolute inset-0 hidden md:block pointer-events-none">
          {/* The Grey Line - Spans full height of the parent */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
      </div>

      {features.map((feature, index) => (
        <FeatureSection key={feature.id} feature={feature} index={index} />
      ))}
    </section>
  );
};

export default DetailedFeatures;
