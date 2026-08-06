'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '@/components/ui/TextReveal';

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&auto=format&fit=crop&crop=face',
    quote:
      "Apexcale took over our Amazon account and within a few months, our visibility and sales completely turned around. Their team clearly knows what they're doing.",
    name: 'Simon',
    role: 'Supplements',
  },
  {
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80&auto=format&fit=crop&crop=face',
    quote:
      "What sets Apexcale apart is that they treat our account like it's their own business. Communication has been excellent, and the results speak for themselves.",
    name: 'Sunny',
    role: 'Fashion',
  },
  {
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80&auto=format&fit=crop&crop=face',
    quote:
      'Our PPC spend was leaking profits every single month. Apexcale optimized our TACoS and scaled our listing conversion rate by over 140%.',
    name: 'Elena',
    role: 'Home & Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&q=80&auto=format&fit=crop&crop=face',
    quote:
      'Managing global platforms used to be a nightmare. Apexcale unified our Amazon US, EU, and Walmart strategy under a single accountable team.',
    name: 'Marcus',
    role: 'Electronics',
  },
];

export function FancyTestimonialsSlider({
  testimonials = TESTIMONIALS,
  autorotateTiming = 6000,
}: {
  testimonials?: Testimonial[];
  autorotateTiming?: number;
}) {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length, autorotateTiming]);

  return (
    <div className="relative mx-auto w-full max-w-3xl px-4 text-center sm:px-6 py-8">
      {/* Large Semi-Circular Background Arc / Dome - Orange Gradient */}
      <div className="pointer-events-none absolute -top-12 left-1/2 h-[340px] w-[340px] -translate-x-1/2 sm:h-[480px] sm:w-[480px]">
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-90"
          style={{ background: 'radial-gradient(circle, rgba(255,94,0,0.22) 0%, rgba(255,170,0,0.12) 55%, transparent 75%)' }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: 'linear-gradient(180deg, rgba(255,94,0,0.06) 0%, rgba(255,170,0,0.02) 100%)' }}
        />
      </div>

      {/* Top Testimonial Image / Avatar - shifted higher up */}
      <div className="relative z-10 h-16 sm:h-20 flex items-center justify-center mb-6 sm:mb-8 -mt-4 sm:-mt-6">
        <div className="relative h-16 w-16 sm:h-20 sm:w-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, rotate: -60, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 60, scale: 0.8 }}
              transition={{ duration: 0.6, ease: [0.68, -0.3, 0.32, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={testimonials[active].img}
                alt={testimonials[active].name}
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover shadow-md border-2 border-white ring-4 ring-[#FF5E00]/25"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Quote Text - Centered & Justified */}
      <div className="relative z-10 mb-8 min-h-[110px] sm:min-h-[130px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="mx-auto max-w-2xl px-2 text-center text-pretty text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A192F] leading-snug tracking-tight font-display"
          >
            &ldquo;{testimonials[active].quote}&rdquo;
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Pill Buttons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 sm:gap-2.5">
        {testimonials.map((testimonial, index) => {
          const isActive = active === index;
          return (
            <button
              key={index}
              onClick={() => {
                setActive(index);
                setAutorotate(false);
              }}
              className={`inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm ${
                isActive
                  ? 'text-white shadow-md scale-105'
                  : 'bg-white text-[#0A192F]/80 border border-slate-200/80 hover:bg-slate-50 hover:text-[#0A192F]'
              }`}
              style={
                isActive
                  ? { background: 'linear-gradient(135deg, #FF5E00 0%, #FFAA00 100%)' }
                  : undefined
              }
            >
              <span>{testimonial.name}</span>
              <span className={`mx-1 ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                -
              </span>
              <span className="font-normal">{testimonial.role}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-px mx-auto mb-10 sm:mb-14 max-w-4xl text-center flex flex-col items-center justify-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1 rounded-full border border-[#FF5E00]/20 shadow-sm">
          Client Testimonials
        </span>
        <TextReveal
          as="h2"
          text="What Our Clients Say"
          className="mt-4 font-display text-3xl xs:text-4xl sm:text-5xl font-bold text-[#0A192F] text-pretty justify-center text-center"
        />
      </div>

      <FancyTestimonialsSlider />
    </section>
  );
}
