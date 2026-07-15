'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/ui/TextReveal';
import clsx from 'clsx';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

function Icon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-sky-700">
      <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SERVICES: Service[] = [
  {
    title: 'PPC Management',
    description:
      'Sponsored Products, Brands, and Display campaigns engineered to drop ACOS while compounding TACOS-efficient scale.',
    icon: <Icon path="M3 12h4l3 8 4-16 3 8h4" />,
  },
  {
    title: 'Listing SEO',
    description: 'Keyword-indexed titles, bullets, and backend terms that move organic rank.',
    icon: <Icon path="M11 4a7 7 0 105.3 12.1L21 21m-10-3a7 7 0 110-14 7 7 0 010 14z" />,
  },
  {
    title: 'A+ Content & Brand Store',
    description: 'Conversion-focused modules and a storefront that turns clicks into Buy Box wins.',
    icon: <Icon path="M4 5h16v14H4zM4 9h16M9 9v10" />,
  },
  {
    title: 'Account Health',
    description: 'Proactive suppression fixes, policy monitoring, and Brand Registry management.',
    icon: <Icon path="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z" />,
  },
  {
    title: 'Amazon DSP Advertising',
    description: 'Retarget shoppers on and off Amazon to lift repeat purchase rate.',
    icon: <Icon path="M4 4h16v12H8l-4 4z" />,
  },
  {
    title: 'FBA & Inventory Consulting',
    description: 'Reorder points, IPI health, and storage-fee strategy tuned to seasonality.',
    icon: <Icon path="M3 7l9-4 9 4-9 4-9-4zm0 5l9 4 9-4m-18 5l9 4 9-4" />,
  },
];

function TiltCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMove = (e: React.MouseEvent) => {
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
          transition: { duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={clsx(
        'glass-strong glass-border-gradient group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl p-6 sm:p-7',
        'border border-white/80 shadow-glass transition-shadow duration-300 hover:shadow-glass-lg'
      )}
      data-cursor="Explore"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
        {service.icon}
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-lg font-semibold leading-snug text-navy sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/60">
          {service.description}
        </p>
      </div>

      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-400/0 blur-2xl transition-colors duration-500 group-hover:bg-sky-400/20" />
    </motion.div>
  );
}

export default function BentoServices() {
  return (
    <section id="services" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            What we run
          </span>
          <TextReveal
            as="h2"
            text="Every lever an Amazon P&L actually depends on."
            className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => (
            <TiltCard key={s.title} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
