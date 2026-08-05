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
  },
  {
    quote:
      'What sets Apexcale apart is that they treat our account like it\'s their own business. Communication has been excellent, and the results speak for themselves.',
    name: 'Sunny',
    role: 'Fashion Category',
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
          fill="#FF9900"
        >
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
}

function TestimonialCard({ q }: { q: (typeof QUOTES)[number] }) {
  return (
    <div className="glass mx-3 w-[340px] shrink-0 rounded-3xl p-7 sm:w-[400px]" data-cursor="Read">
      <Stars />
      <p className="mt-5 text-[15px] leading-relaxed text-navy/80">
        “{q.quote}”
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cta-gradient font-display text-sm font-semibold text-white">
          {q.name.split(' ').map((n) => n[0]).join('')}
        </div>
        <div>
          <div className="text-sm font-semibold text-navy">{q.name}</div>
          <div className="text-xs text-navy/55">{q.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [dragHint, setDragHint] = useState(true);
  const doubled = [...QUOTES, ...QUOTES];

  return (
    <section className="relative overflow-hidden py-28">
      <div className="container-px mx-auto mb-14 max-w-6xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
          Client Testimonials
        </span>
        <TextReveal
          as="h2"
          text="What Our Clients Say"
          className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl"
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
