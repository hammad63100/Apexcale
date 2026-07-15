'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '@/components/ui/TextReveal';

const FAQS = [
  {
    q: 'Do you require long-term contracts?',
    a: 'No. Our standard agreement is month-to-month after an initial 90-day ramp period — the time it typically takes for PPC restructuring and listing changes to fully reflect in ACOS and organic rank.',
  },
  {
    q: 'Do you work with both Seller Central and Vendor Central?',
    a: 'Yes. We manage PPC, listing optimization, and account health across both Seller Central (1P) and Vendor Central (3P) accounts, including hybrid catalogs.',
  },
  {
    q: 'How do you report on performance?',
    a: 'You get a live dashboard tracking ACOS, TACOS, Buy Box percentage, and organic keyword rank, plus a written bi-weekly or weekly summary depending on your tier.',
  },
  {
    q: 'Can you help with a suppressed listing or account health issue?',
    a: 'Yes — account health remediation, including suppressed listings, policy violations, and Brand Registry issues, is included starting at the Scale tier and available as a standalone engagement.',
  },
  {
    q: 'What is the minimum ad spend you work with?',
    a: 'We typically take on accounts spending at least $3,000/month on Amazon Ads, though the Launch tier is built for brands ramping up from a smaller base.',
  },
];

function AccordionItem({
  item,
  isOpen,
  onClick,
}: {
  item: (typeof FAQS)[number];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        data-cursor="Toggle"
      >
        <span className="font-display text-base font-semibold text-navy sm:text-lg">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/60 text-navy text-xl"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="px-6"
          >
            <p className="pb-6 text-sm leading-relaxed text-navy/65">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <div className="container-px mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Questions
          </span>
          <TextReveal
            as="h2"
            text="Everything before you book a call."
            className="mt-3 justify-center font-display text-4xl font-semibold text-navy sm:text-5xl"
          />
        </div>

        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
