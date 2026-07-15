'use client';

import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import TextReveal from '@/components/ui/TextReveal';
import Counter from '@/components/ui/Counter';
import clsx from 'clsx';

interface CaseStudy {
  brand: string;
  category: string;
  metric: { value: number; suffix: string; label: string };
  secondaryMetric: { value: number; suffix: string; label: string };
  gradient: string;
  span: string;
}

const CASES: CaseStudy[] = [
  {
    brand: 'Northline Outdoor',
    category: 'Home & Outdoor · FBA',
    metric: { value: 218, suffix: '%', label: 'Revenue growth, 6 months' },
    secondaryMetric: { value: 41, suffix: '%', label: 'ACOS reduction' },
    gradient: 'from-sky-600 to-sky-400',
    span: 'lg:col-span-2',
  },
  {
    brand: 'Verdant Supplement Co.',
    category: 'Health & Personal Care',
    metric: { value: 63, suffix: '%', label: 'TACOS improvement' },
    secondaryMetric: { value: 4, suffix: 'x', label: 'Organic keyword rank' },
    gradient: 'from-cyan-500 to-sky-500',
    span: '',
  },
  {
    brand: 'Kessler Home Goods',
    category: 'Kitchen & Dining',
    metric: { value: 156, suffix: '%', label: 'Sessions growth' },
    secondaryMetric: { value: 29, suffix: '%', label: 'Conversion rate lift' },
    gradient: 'from-sky-500 to-indigo-400',
    span: '',
  },
  {
    brand: 'Alderwood Pet Supply',
    category: 'Pet Products · Brand Registry',
    metric: { value: 89, suffix: '%', label: 'Buy Box win rate lift' },
    secondaryMetric: { value: 12, suffix: '', label: 'New top-10 keywords' },
    gradient: 'from-sky-400 to-cyan-300',
    span: 'lg:col-span-2',
  },
];

function CaseCard({ item }: { item: CaseStudy }) {
  const { ref, y } = useParallax({ distance: 26 });
  return (
    <div
      className={clsx(
        'glass group relative overflow-hidden rounded-3xl p-1',
        item.span
      )}
      data-cursor="View"
    >
      <div
        ref={ref}
        className={clsx(
          'relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br p-8',
          item.gradient
        )}
      >
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-xl"
        />
        <motion.div
          style={{ y }}
          className="pointer-events-none absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-white/10 blur-lg"
        />

        <div className="relative z-10">
          <p className="text-xs font-medium uppercase tracking-wide text-white/70">
            {item.category}
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-white">
            {item.brand}
          </h3>

          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <div className="font-display text-4xl font-bold text-white">
                <Counter value={item.metric.value} suffix={item.metric.suffix} />
              </div>
              <div className="mt-1 text-xs text-white/75">{item.metric.label}</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-white">
                <Counter
                  value={item.secondaryMetric.value}
                  suffix={item.secondaryMetric.suffix}
                />
              </div>
              <div className="mt-1 text-xs text-white/75">
                {item.secondaryMetric.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <section id="results" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
              Real accounts, real numbers
            </span>
            <TextReveal
              as="h2"
              text="Results tied to revenue, not vanity metrics."
              className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl"
            />
          </div>
          <p className="max-w-sm text-sm text-navy/60">
            Every case study below reflects verified account data across a
            trailing six-month management period.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CASES.map((c) => (
            <CaseCard key={c.brand} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
