'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '@/components/ui/TextReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import clsx from 'clsx';

const TIERS = [
  {
    name: 'Launch',
    monthly: 1500,
    annual: 1250,
    description: 'For brands under $500K/yr getting PPC under control.',
    features: [
      'Sponsored Products management',
      'Core listing SEO (up to 20 SKUs)',
      'Monthly account health check',
      'Bi-weekly performance report',
    ],
    highlighted: false,
  },
  {
    name: 'Scale',
    monthly: 3200,
    annual: 2650,
    description: 'For established catalogs pushing past $500K–$5M/yr.',
    features: [
      'Full PPC suite (SP, SB, SD)',
      'A+ Content & Brand Store design',
      'Weekly bid & budget optimization',
      'Search-term & catalog SEO refresh',
      'Dedicated account strategist',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthly: null,
    annual: null,
    description: 'For multi-brand portfolios and $5M+ catalogs.',
    features: [
      'Everything in Scale',
      'Amazon DSP management',
      'FBA & inventory forecasting',
      'Custom reporting dashboard',
      'Quarterly brand strategy sessions',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Packages
          </span>
          <TextReveal
            as="h2"
            text="Pricing that scales with your ad spend, not against it."
            className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl"
          />
        </div>

        <div className="mb-14 flex items-center gap-4">
          <span className={clsx('text-sm font-medium', !annual ? 'text-navy' : 'text-navy/45')}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual((a) => !a)}
            className="glass relative h-8 w-16 rounded-full p-1"
            aria-label="Toggle annual pricing"
          >
            <motion.div
              className="h-6 w-6 rounded-full bg-cta-gradient"
              animate={{ x: annual ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            />
          </button>
          <span className={clsx('text-sm font-medium', annual ? 'text-navy' : 'text-navy/45')}>
            Annual <span className="text-amazon">· save ~18%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className={clsx(
                'glass glass-border-gradient relative flex flex-col rounded-3xl p-8',
                tier.highlighted && 'lg:-translate-y-4 shadow-glow-sky ring-1 ring-sky-300/60'
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amazon-gradient px-4 py-1 text-xs font-semibold text-white shadow-glow-orange">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-navy">{tier.name}</h3>
              <p className="mt-2 text-sm text-navy/60">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                {tier.monthly ? (
                  <>
                    <span className="font-display text-4xl font-bold text-navy">
                      ${annual ? tier.annual : tier.monthly}
                    </span>
                    <span className="text-sm text-navy/50">/mo</span>
                  </>
                ) : (
                  <span className="font-display text-3xl font-bold text-navy">Custom</span>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-navy/75">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <MagneticButton
                  variant={tier.highlighted ? 'filled' : 'glass'}
                  className="w-full"
                >
                  {tier.monthly ? 'Get Started' : 'Talk to Sales'}
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
