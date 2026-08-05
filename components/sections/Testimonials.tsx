'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TextReveal from '@/components/ui/TextReveal';

const QUOTES = [
  {
    quote:
      'Apexcale took over our Amazon account and within a few months, our visibility and sales completely turned around. Their team clearly knows what they\'re doing.',
    name: 'Simon',
    role: 'Supplements Category',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face',
  },
  {
    quote:
      'What sets Apexcale apart is that they treat our account like it\'s their own business. Communication has been excellent, and the results speak for themselves.',
    name: 'Sunny',
    role: 'Fashion Category',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80&auto=format&fit=crop&crop=face',
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0.4, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.06 }}
          viewport={{ once: true }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#FF8C00"
        >
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
}

function TestimonialCard({ q }: { q: (typeof QUOTES)[number] }) {
  return (
    <div className="mx-2 sm:mx-3 w-[280px] xs:w-[340px] sm:w-[400px] shrink-0 rounded-3xl p-5 sm:p-7 bg-[#F4F7FC] border border-primary/8 shadow-glass" data-cursor="Read">
      <Stars />
      <p className="mt-4 sm:mt-5 text-xs sm:text-[15px] leading-relaxed text-navy/80">
        &ldquo;{q.quote}&rdquo;
      </p>
      <div className="mt-5 sm:mt-6 flex items-center gap-3">
        <div className="h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-full shrink-0">
          <img
            src={q.image}
            alt={q.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="text-xs sm:text-sm font-semibold text-navy">{q.name}</div>
          <div className="text-[11px] sm:text-xs text-navy/55">{q.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [dragHint, setDragHint] = useState(true);
  const doubled = [...QUOTES, ...QUOTES];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-px mx-auto mb-10 sm:mb-14 max-w-6xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
          Client Testimonials
        </span>
        <TextReveal
          as="h2"
          text="What Our Clients Say"
          className="mt-3 font-display text-3xl xs:text-4xl sm:text-5xl font-semibold text-navy text-pretty"
        />
      </div>

      <motion.div
        className="flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -1600, right: 0 }}
        onDragStart={() => setDragHint(false)}
        whileTap={{ cursor: 'grabbing' }}
      >
        <div className="marquee-track">
          {doubled.map((q, i) => (
            <TestimonialCard key={i} q={q} />
          ))}
        </div>
      </motion.div>

      {dragHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [0, 12, 0] }}
          transition={{ x: { repeat: Infinity, duration: 1.6 }, opacity: { duration: 0.5 } }}
          className="container-px mx-auto mt-6 max-w-6xl text-xs font-medium text-navy/40"
        >
          ← drag to explore →
        </motion.div>
      )}
    </section>
  );
}
