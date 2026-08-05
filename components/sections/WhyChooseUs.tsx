'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/ui/TextReveal';

const DIFFERENTIATORS = [
  {
    title: 'One Accountable Team, Every Marketplace',
    description:
      'Whether you\'re selling on Amazon.com, Amazon.co.uk, or a dozen international storefronts simultaneously, our team manages the entire footprint from a single, coordinated strategy. No fragmented vendors. No conflicting priorities.',
    initials: 'OA',
    gradient: 'from-sky-200 to-sky-400',
  },
  {
    title: 'Strategy Backed by Execution',
    description:
      'We don\'t deliver a slide deck and walk away. Every strategic recommendation we make is implemented, monitored, and refined by the same team that built it — so nothing gets lost in translation between planning and execution.',
    initials: 'SE',
    gradient: 'from-cyan-200 to-sky-400',
  },
  {
    title: 'Senior-Level Attention, Not Junior Handoffs',
    description:
      'Your account is managed by experienced strategists who understand your category, your competitors, and your customer — not a rotating cast of junior associates learning on your budget.',
    initials: 'SA',
    gradient: 'from-sky-300 to-indigo-400',
  },
];

function TiltPhoto({ member }: { member: (typeof DIFFERENTIATORS)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="glass rounded-3xl p-6"
      data-cursor="Meet"
    >
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 700 }}
        className={`flex aspect-[4/5] items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient}`}
      >
        <span className="font-display text-5xl font-bold text-white/90">
          {member.initials}
        </span>
      </motion.div>
      <h4 className="mt-4 font-display text-lg font-semibold text-navy">{member.title}</h4>
      <p className="mt-1 text-sm text-navy/55 leading-relaxed">{member.description}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Why Brands Choose Apexcale
          </span>
          <TextReveal
            as="h2"
            text="What Sets Us Apart"
            className="mt-3 font-display text-3xl xs:text-4xl sm:text-5xl font-semibold text-navy text-pretty"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((m) => (
            <TiltPhoto key={m.title} member={m} />
          ))}

          <div className="glass flex flex-col justify-center rounded-3xl p-6 sm:p-8">
            <div className="font-display text-3xl sm:text-4xl font-bold text-navy">
              Built for Compounding
            </div>
            <p className="mt-2.5 text-xs sm:text-sm text-navy/60 leading-relaxed">
              We are not in the business of manufacturing short-term spikes that collapse the moment ad spend stops. Our strategies are designed to build durable organic rank, healthy margins, and a brand asset that continues to compound in value over time.
            </p>
          </div>

          <div className="glass flex flex-col justify-center rounded-3xl p-6 sm:p-8 sm:col-span-2 lg:col-span-2">
            <p className="font-display text-lg sm:text-xl font-medium leading-snug text-navy">
              &quot;Full Transparency, Always. You will always know exactly what we&apos;re doing, why we&apos;re doing it, and how it&apos;s performing — through clear, consistent reporting rather than vague dashboards.&quot;
            </p>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-navy/55">— Apexcale Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
