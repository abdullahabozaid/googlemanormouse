
import React, { useRef } from 'react';
import { Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Alex M.",
    quote: "Could barely do pull-ups when I started, now I'm doing multiple reps with good form.",
    videoUrl: "https://storage.googleapis.com/msgsndr/BT2Tohm3AXWyQ92OuS19/media/675833e4b96532f24e18de62.mp4",
    poster: "https://images.unsplash.com/photo-1615535384666-832c32439c71?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "James D.",
    quote: "Found a community that actually holds me accountable. I show up because they do.",
    videoUrl: "https://storage.googleapis.com/msgsndr/BT2Tohm3AXWyQ92OuS19/media/675833e4b96532f24e18de62.mp4",
    poster: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Marcus T.",
    quote: "Confidence and energy are up, not just my fitness. This spills over into my work.",
    videoUrl: "https://storage.googleapis.com/msgsndr/BT2Tohm3AXWyQ92OuS19/media/675833e4b96532f24e18de62.mp4",
    poster: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "David K.",
    quote: "I recommend this to any man wanting to get serious about his training.",
    videoUrl: "https://storage.googleapis.com/msgsndr/BT2Tohm3AXWyQ92OuS19/media/675833e4b96532f24e18de62.mp4",
    poster: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  }
];

const VideoCard: React.FC<{ testimonial: typeof testimonials[0]; index: number }> = ({ testimonial, index }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => console.log("Video play interrupted", error));
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Optional: Reset video on leave
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
            className="relative rounded-lg overflow-hidden aspect-[9/16] group cursor-pointer bg-neutral-900 shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                src={testimonial.videoUrl}
                poster={testimonial.poster}
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 pb-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                <p className="text-gray-200 text-base leading-relaxed font-medium">"{testimonial.quote}"</p>
            </div>

            {/* Play Button Indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 rounded-full bg-brand-red/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-brand-red/20">
                    <Play fill="white" className="ml-1 text-white" size={24} />
                </div>
            </div>
            
            {/* Top Label: 5 Stars + Name (Transparent Background, Gold Stars) */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="flex gap-0.5 drop-shadow-md">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="fill-yellow-500 text-yellow-500" />
                    ))}
                </div>
                <span className="text-xs font-heading font-bold uppercase tracking-wide text-white drop-shadow-md">{testimonial.name}</span>
            </div>
        </motion.div>
    );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 md:py-48 bg-black relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            What Our <span className="text-brand-red">Men Say</span>
          </h2>
          <p className="text-gray-400 text-lg font-light tracking-wide max-w-xl mx-auto">
            Real results from everyday guys. Not pro athletes—just men who decided to step up.
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-4">Hover Over Video To Play</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <VideoCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
