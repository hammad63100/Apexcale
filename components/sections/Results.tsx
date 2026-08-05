'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/ui/TextReveal';
import clsx from 'clsx';

interface CaseStudy {
  brand: string;
  category: string;
  description: string;
  span: string;
  image: string;
}

const CASES: CaseStudy[] = [
  {
    brand: 'Multi-Marketplace Management',
    category: 'Amazon, Walmart & Global Platforms',
    description: 'Coordinated strategy across Amazon, Walmart, and other major global platforms — all managed under one unified approach.',
    span: 'md:col-span-2 lg:col-span-2',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
  },
  {
    brand: 'Profit-First Advertising',
    category: 'Sustainable ACoS & TACoS Targets',
    description: 'Built around sustainable ACoS and TACoS targets rather than vanity impression metrics. 100% focus on profitable, sustainable growth.',
    span: 'md:col-span-1 lg:col-span-1',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  },
  {
    brand: 'Proactive Account Health',
    category: 'Rankings & Buy Box Protection',
    description: 'Proactive monitoring to protect your rankings, your Buy Box share, and your listing status before issues become account-threatening.',
    span: 'md:col-span-1 lg:col-span-1',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop',
  },
  {
    brand: 'Dedicated Senior Strategists',
    category: 'Consistent Account Oversight',
    description: 'Consistent, informed account oversight from experienced strategists — not a rotating cast of junior associates learning on your budget.',
    span: 'md:col-span-2 lg:col-span-2',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
  },
];

function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMove = (e: React.MouseEvent) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={clsx(
        'glass-strong glass-border-gradient group relative flex min-h-[280px] sm:min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-5 sm:p-8',
        'border border-white/80 shadow-glass transition-all duration-500 hover:shadow-glass-lg hover:border-sky-300/60',
        item.span
      )}
    >
      {/* Full-bleed background image reaching all borders */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.brand}
          className="h-full w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
        />
        {/* Soft subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
      </div>

      {/* Category Pill Header */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <span className="rounded-full bg-white/90 border border-sky-200/60 px-3 py-1 text-[11px] sm:text-xs font-semibold text-sky-800 shadow-sm backdrop-blur-md">
          {item.category}
        </span>
      </div>

      {/* Card Text Area with Glass Backdrop */}
      <div className="relative z-10 mt-auto rounded-2xl bg-white/60 p-4 sm:p-5 backdrop-blur-sm border border-white/50 shadow-sm">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-navy leading-snug">
          {item.brand}
        </h3>
        <p className="mt-2 text-xs sm:text-base leading-relaxed text-navy/85 text-left font-medium">
          {item.description}
        </p>
      </div>

      {/* Hover ambient light glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/0 blur-2xl transition-colors duration-500 group-hover:bg-sky-400/20 z-0" />
    </motion.div>
  );
}

export default function Results() {
  return (
    <section id="results" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="mb-10 sm:mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
              Results That Matter
            </span>
            <TextReveal
              as="h2"
              text="What Sets Our Performance Apart"
              className="mt-3 font-display text-3xl xs:text-4xl sm:text-5xl font-semibold text-navy text-pretty"
            />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {CASES.map((c, i) => (
            <CaseCard key={c.brand} item={c} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
