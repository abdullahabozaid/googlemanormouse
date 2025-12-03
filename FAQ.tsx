
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What fitness level do I need?",
    answer: "All levels are welcome. Our bootcamps and coaching plans are scalable. Whether you can do 50 pushups or 0, we have a progression for you. Effort is the only requirement."
  },
  {
    question: "What if I can't do pull-ups or I'm unfit?",
    answer: "That's exactly why you join. We build you up from the ground up. You will get stronger, period."
  },
  {
    question: "Do I have to be in London?",
    answer: "No. While bootcamps are in Paddington, our online coaching and community are accessible from anywhere. You can follow the program at your local gym."
  },
  {
    question: "What’s included for £35/month?",
    answer: "Unlimited bootcamps, the full online coaching app, personal workout plans, and access to the private WhatsApp community."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No fixed contract. You can cancel your subscription at any time."
  },
  {
    question: "How does the free bootcamp trial work?",
    answer: "Book your first session for free. Show up, train, and meet the lads. If you like the vibe, you can join the membership."
  },
  {
    question: "How quickly do I see results?",
    answer: "If you stick to the plan and show up? You'll feel different in 2 weeks and look different in 6."
  },
  {
    question: "What if I've had injuries?",
    answer: "Let the coaches know during onboarding. We adapt exercises to ensure you train safely while still working hard."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-48 bg-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl font-bold uppercase text-center mb-12"
        >
            Frequently Asked <span className="text-brand-red">Questions</span>
        </motion.h2>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
        >
            {faqs.map((faq, index) => (
                <div key={index} className="border border-white/10 bg-brand-gray rounded-sm overflow-hidden">
                    <button 
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                    >
                        <span className="font-heading text-lg uppercase tracking-wide font-medium pr-4">{faq.question}</span>
                        {openIndex === index ? <Minus className="text-brand-red shrink-0" /> : <Plus className="text-brand-red shrink-0" />}
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 font-light">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
