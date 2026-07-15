'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/ui/TextReveal';
import Counter from '@/components/ui/Counter';

const TEAM = [
  { name: 'Rachel Ito', role: 'Head of PPC Strategy', initials: 'RI' },
  { name: 'Devon Marsh', role: 'Lead Listing Strategist', initials: 'DM' },
  { name: 'Talia Reyes', role: 'Brand Design Lead', initials: 'TR' },
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
            Why brands switch to us
          </span>
          <TextReveal
            as="h2"
            text="Amazon specialists, not generalist marketers."
            className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <TiltPhoto key={m.name} member={m} />
          ))}

          <div className="glass flex flex-col justify-center rounded-3xl p-8">
            <div className="font-display text-4xl font-bold text-navy">
              <Counter value={7} suffix=" yrs" />
            </div>
            <p className="mt-2 text-sm text-navy/60">
              Average team experience managing Amazon Seller & Vendor Central
              accounts exclusively.
            </p>
          </div>

          <div className="glass flex flex-col justify-center rounded-3xl p-8 sm:col-span-2">
            <p className="font-display text-xl font-medium leading-snug text-navy">
              “We don't take on retainers we can't move the needle on. Every
              account gets a strategist who reads P&Ls, not just dashboards.”
            </p>
            <p className="mt-4 text-sm text-navy/55">— Founding Partner</p>
          </div>

          <div className="glass flex flex-col justify-center rounded-3xl p-8">
            <div className="font-display text-4xl font-bold text-navy">
              <Counter value={98} suffix="%" />
            </div>
            <p className="mt-2 text-sm text-navy/60">Client retention rate, year over year.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
