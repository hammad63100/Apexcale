'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '@/components/ui/TextReveal';

const FAQS = [
  {
    q: 'Which marketplaces do you work with?',
    a: 'We manage accounts across Amazon (including the U.S., U.K., D.E., E.U., and other international marketplaces), Walmart Marketplace, and other major online retail platforms, allowing your brand to scale wherever your customers are located.',
  },
  {
    q: 'How quickly can I expect to see results?',
    a: 'Advertising performance improvements are typically visible within the first 30 days. Organic ranking and listing optimization results generally build over a 60- to 90-day period, as Amazon\'s algorithm responds to sustained, consistent performance.',
  },
  {
    q: 'Is there a minimum contract length?',
    a: 'We operate on a results-first, flexible basis. Specific terms are discussed and agreed upon during your initial strategy call, based on your account size, marketplace footprint, and growth goals.',
  },
  {
    q: 'Do you charge a commission on advertising spend?',
    a: 'Our pricing structure is discussed transparently during onboarding, based on the scope of services required. We do not believe in hidden fees or unclear billing practices.',
  },
  {
    q: 'What makes Apexcale different from other Amazon agencies?',
    a: 'We integrate advertising, content, operations, and brand protection into a single, coordinated strategy — managed by a dedicated team that both plans and executes the work, rather than handing recommendations off to a separate implementation team.',
  },
  {
    q: 'Can you support brands that are just launching on Amazon, as well as established brands?',
    a: 'Yes. We work with early-stage brands preparing for launch as well as established sellers looking to scale, recover from stalled growth, or expand into new marketplaces.',
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
        className="flex w-full items-center justify-between px-4 py-4 sm:px-6 sm:py-5 text-left gap-3"
        data-cursor="Toggle"
      >
        <span className="font-display text-sm xs:text-base sm:text-lg font-semibold text-navy">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-white/60 text-navy text-lg sm:text-xl font-bold"
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
            className="px-4 sm:px-6"
          >
            <p className="pb-4 sm:pb-6 text-xs sm:text-sm leading-relaxed text-navy/65">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-3xl">
        <div className="mb-10 sm:mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Frequently Asked Questions
          </span>
          <TextReveal
            as="h2"
            text="Questions"
            className="mt-3 justify-center font-display text-3xl xs:text-4xl sm:text-5xl font-semibold text-navy text-pretty"
          />
        </div>

        <div className="space-y-3 sm:space-y-4">
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
