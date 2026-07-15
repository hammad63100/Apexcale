'use client';

import dynamic from 'next/dynamic';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import AuroraBackground from '@/components/ui/AuroraBackground';
import TextReveal from '@/components/ui/TextReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import Counter from '@/components/ui/Counter';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
});

const TRUST = [
  { value: 500, suffix: '+', label: 'Brands Scaled' },
  { value: 50, prefix: '$', suffix: 'M+', label: 'Ad Spend Managed' },
  { value: 34, suffix: '%', label: 'Avg. ACOS Reduction' },
];

export default function Hero() {
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const springX = useSpring(spotX, { stiffness: 60, damping: 20 });
  const springY = useSpring(spotY, { stiffness: 60, damping: 20 });
  const background = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(58,166,240,0.16), transparent 70%)`
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      spotX.set(e.clientX);
      spotY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [spotX, spotY]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-40 pb-24">
      <AuroraBackground />
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background }}
      />

      <div className="absolute inset-0 z-[2] h-full w-full opacity-90">
        <HeroScene />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-sky-800"
        >
          <span className="h-2 w-2 rounded-full bg-amazon animate-pulse" />
          Amazon Advertising Verified Partner
        </motion.div>

        <TextReveal
          as="h1"
          text="Scale your Amazon brand with data, not guesswork."
          className="max-w-4xl font-display text-5xl font-semibold text-navy text-balance sm:text-6xl lg:text-7xl"
          triggerOnView={false}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 max-w-xl text-lg text-navy/70"
        >
          Full-service PPC, SEO, and catalog management for brands that are
          done leaving Buy Box share and ad spend on the table. We manage the
          ACOS-to-TACOS math so you can manage the business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton variant="filled" cursorLabel="Start">
            Get a Free Account Audit
          </MagneticButton>
          <MagneticButton variant="glass" cursorLabel="View">
            See Our Results ↓
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass mt-20 grid max-w-2xl grid-cols-3 divide-x divide-white/50 rounded-2xl px-6 py-6"
        >
          {TRUST.map((t) => (
            <div key={t.label} className="px-2 text-center sm:px-4">
              <div className="font-display text-2xl font-bold text-navy sm:text-3xl">
                <Counter value={t.value} prefix={t.prefix} suffix={t.suffix} />
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-navy/60 sm:text-xs">
                {t.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
