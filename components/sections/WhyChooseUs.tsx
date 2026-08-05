'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/ui/TextReveal';

const TEAM = [
  { name: 'One Accountable Team', role: 'Every Marketplace', initials: 'OA' },
  { name: 'Strategy Backed by Execution', role: 'Implementation Included', initials: 'SE' },
  { name: 'Senior-Level Attention', role: 'No Junior Handoffs', initials: 'SA' },
];

function TiltPhoto({ member }: { member: (typeof TEAM)[number] }) {
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
        className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 to-sky-400"
      >
        <span className="font-display text-5xl font-bold text-white/90">
          {member.initials}
        </span>
      </motion.div>
      <h4 className="mt-4 font-display text-lg font-semibold text-navy">{member.name}</h4>
      <p className="text-sm text-navy/55">{member.role}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Why Brands Choose Apexcale
          </span>
          <TextReveal
            as="h2"
            text="What Sets Us Apart"
            className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <TiltPhoto key={m.name} member={m} />
          ))}

          <div className="glass flex flex-col justify-center rounded-3xl p-8">
            <div className="font-display text-4xl font-bold text-navy">
              Built for Compounding
            </div>
            <p className="mt-2 text-sm text-navy/60">
              Long-term growth strategies designed to build durable organic rank, healthy margins, and a brand asset that continues to compound in value over time.
            </p>
          </div>

          <div className="glass flex flex-col justify-center rounded-3xl p-8 sm:col-span-2">
            <p className="font-display text-xl font-medium leading-snug text-navy">
              "Full Transparency, Always. You will always know exactly what we're doing, why we're doing it, and how it's performing — through clear, consistent reporting rather than vague dashboards."
            </p>
            <p className="mt-4 text-sm text-navy/55">— Apexcale Team</p>
          </div>

          <div className="glass flex flex-col justify-center rounded-3xl p-8">
            <div className="font-display text-4xl font-bold text-navy">
              Global Reach
            </div>
            <p className="mt-2 text-sm text-navy/60">Amazon, Walmart & major global marketplaces.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
