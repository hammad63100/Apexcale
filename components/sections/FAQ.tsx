'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    number: '1',
    q: 'Which marketplaces do you work with?',
    a: 'We manage accounts across Amazon (including the U.S., U.K., D.E., E.U., and other international marketplaces), Walmart Marketplace, and other major online retail platforms.',
    highlight: 'Full-service management for Amazon & global marketplace storefronts.',
  },
  {
    number: '2',
    q: 'How quickly can I expect to see results?',
    a: 'Advertising performance improvements are typically visible within the first 30 days. Organic ranking and listing optimization results generally build over a 60 to 90-day period.',
    highlight: 'PPC performance visible within 30 days; SEO ranking compounds in 60-90 days.',
  },
  {
    number: '3',
    q: 'Is there a minimum contract length?',
    a: 'We operate on a results-first, flexible basis. Specific terms are discussed and agreed upon during your initial strategy call, based on your account size and marketplace footprint.',
    highlight: 'Flexible, results-driven partnerships tailored to your brand goals.',
  },
  {
    number: '4',
    q: 'Do you charge a commission on advertising spend?',
    a: 'Our pricing structure is discussed transparently during onboarding, based on the scope of services required. We do not believe in hidden fees or unclear billing practices.',
    highlight: 'Transparent pricing with zero hidden fees or unexpected commission spikes.',
  },
  {
    number: '5',
    q: 'What makes Apexcale different from other Amazon agencies?',
    a: 'We integrate advertising, content, operations, and brand protection into a single, coordinated strategy — managed by a dedicated senior team that both plans and executes.',
    highlight: 'One unified team managing strategy, advertising, content, and account health.',
  },
  {
    number: '6',
    q: 'Can you support early-stage launch brands as well as established brands?',
    a: 'Yes. We work with early-stage brands preparing for launch as well as established sellers looking to scale, recover from stalled growth, or expand into new marketplaces.',
    highlight: 'Proven playbooks for both new marketplace launches and scaling 7-8 figure brands.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Item 2 open by default matching reference image

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#F4F7FC]" style={{ backgroundColor: '#F4F7FC' }}>
      <div className="container-px mx-auto max-w-6xl">
        {/* Centered Header matching reference design */}
        <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0A192F] tracking-tight">
            FAQs
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            We built the complete growth stack for Amazon, so you don&apos;t have to
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Accordion List (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.number}
                  className={`rounded-2xl transition-all duration-300 bg-white overflow-hidden ${
                    isOpen
                      ? 'border-2 border-[#0052CC] shadow-md ring-4 ring-[#0052CC]/10'
                      : 'border border-slate-200/80 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-5 py-4 sm:px-6 sm:py-4.5 text-left gap-4 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-base sm:text-lg font-bold text-[#0A192F]">
                        {item.number}. {item.q}
                      </span>
                    </div>

                    {/* Plus / Minus Square Button matching reference image */}
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors font-bold text-sm ${
                        isOpen ? 'bg-[#FF8C00] text-white shadow-sm' : 'bg-[#0052CC] text-white shadow-sm'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-slate-100"
                      >
                        <p className="text-sm leading-relaxed text-slate-600 font-normal">
                          {item.a}
                        </p>
                        {item.highlight && (
                          <div className="mt-3.5 border-l-2 border-[#0052CC] bg-[#0052CC]/5 pl-3.5 py-2 pr-3 rounded-r-xl">
                            <p className="text-xs font-medium italic text-[#0052CC]">
                              {item.highlight}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Vector Illustration matching reference design (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-[#FFF7ED] rounded-full filter blur-3xl opacity-70 transform scale-95" />

              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full relative z-10 drop-shadow-sm"
              >
                {/* Background Wall Bricks */}
                <rect x="220" y="160" width="40" height="24" rx="2" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="2 2" fill="none" opacity="0.6" />
                <rect x="260" y="160" width="40" height="24" rx="2" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="2 2" fill="none" opacity="0.6" />
                <rect x="240" y="184" width="40" height="24" rx="2" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="2 2" fill="none" opacity="0.6" />

                {/* Ground Line */}
                <path d="M50 420H450" stroke="#0A192F" strokeWidth="4" strokeLinecap="round" />

                {/* Background Soft Yellow Oval */}
                <ellipse cx="320" cy="350" rx="90" ry="70" fill="#FEF3C7" opacity="0.6" />

                {/* GIANT QUESTION MARK (?) */}
                <path
                  d="M340 180C340 130 380 110 420 135C455 155 450 200 420 230C390 260 375 285 375 320"
                  stroke="#E07A00" strokeWidth="54" strokeLinecap="round" fill="none" opacity="0.2"
                />
                <path
                  d="M335 175C335 125 375 105 415 130C450 150 445 195 415 225C385 255 370 280 370 315"
                  stroke="#FF8C00" strokeWidth="48" strokeLinecap="round" fill="none"
                />
                <path
                  d="M340 165C345 135 375 115 410 135"
                  stroke="#FFB74D" strokeWidth="12" strokeLinecap="round" fill="none"
                />
                <circle cx="370" cy="385" r="24" fill="#FF8C00" />
                <circle cx="365" cy="380" r="8" fill="#FFB74D" opacity="0.8" />

                {/* THOUGHT BUBBLE WITH THREE DOTS */}
                <path
                  d="M260 220C260 205 275 195 290 195C305 195 320 205 320 220C320 235 305 245 290 245C280 245 272 240 266 235L255 240L260 230C260 227 260 223 260 220Z"
                  fill="#DBEAFE" stroke="#93C5FD" strokeWidth="2"
                />
                <circle cx="280" cy="220" r="4" fill="#3B82F6" />
                <circle cx="290" cy="220" r="4" fill="#3B82F6" />
                <circle cx="300" cy="220" r="4" fill="#3B82F6" />

                {/* PERSON SITTING WITH LAPTOP */}
                <path d="M295 260C285 250 270 260 265 275C260 290 268 305 275 310L300 295Z" fill="#0A192F" />
                <circle cx="285" cy="280" r="16" fill="#FDBA74" />
                <circle cx="273" cy="282" r="4" fill="#F97316" />

                <path d="M250 310C240 290 255 275 275 275" stroke="#2563EB" strokeWidth="18" strokeLinecap="round" fill="none" />
                <path d="M250 310C240 290 255 275 275 275" stroke="#FDBA74" strokeWidth="10" strokeLinecap="round" fill="none" />

                <path d="M255 315C255 300 295 300 305 315L315 370H245L255 315Z" fill="#0052CC" />
                <path d="M270 315C260 330 250 350 245 365" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />

                <path d="M230 380C230 360 330 360 330 380C330 405 230 405 230 380Z" fill="#FF8C00" />
                <path d="M240 370C230 385 250 405 280 405C310 405 330 385 320 370" fill="#FFA726" />

                <ellipse cx="255" cy="405" rx="18" ry="10" fill="#0A192F" />
                <ellipse cx="305" cy="405" rx="18" ry="10" fill="#0A192F" />
                <path d="M245 405H265" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <path d="M295 405H315" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

                <rect x="260" y="340" width="55" height="38" rx="6" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="2" />
                <rect x="282" y="354" width="10" height="8" rx="2" stroke="#1D4ED8" strokeWidth="2" fill="none" />
                <path d="M245 378H330" stroke="#93C5FD" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
