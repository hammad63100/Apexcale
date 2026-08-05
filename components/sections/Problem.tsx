'use client';

import { motion } from 'framer-motion';

const PROBLEMS = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Ad Spend Disappears',
    description: 'Without a coordinated strategy across advertising, SEO, and operations, even great products get buried on page three while ad spend disappears.',
    rotation: 'rotate-1 sm:translate-x-3',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Misaligned Strategy',
    description: 'Advertising isn\'t aligned with listing content, and listing content isn\'t aligned with how customers actually search on Amazon.',
    rotation: '-rotate-1 sm:-translate-x-2',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'No Unified Overview',
    description: 'Nobody on the account is looking at the full picture, leaving advertising, SEO, and listing management completely uncoordinated.',
    rotation: 'rotate-2 sm:translate-x-4',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-20 sm:py-28 bg-[#FFFFFF]" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column - Headline & Main Paragraphs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 border border-slate-200/80 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-[#FF8C00]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0A192F]">
                The Problem
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-bold text-[#0A192F] leading-[1.15] tracking-tight"
            >
              Selling on Amazon Is Easy. Winning Is a Different Game Entirely.
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-6 text-sm sm:text-base text-slate-600 font-normal leading-relaxed"
            >
              Every day, thousands of new listings go live on Amazon. Your competitors are running ad campaigns, optimizing their content, and fighting for the exact same customers you&apos;re trying to reach. Without a coordinated strategy across advertising, SEO, and operations, even a great product can get buried on page three — while your ad spend quietly disappears with nothing to show for it.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed"
            >
              Most brands don&apos;t have a visibility problem or a demand problem. They have a <span className="font-semibold text-[#0A192F]">strategy problem</span>. Their advertising isn&apos;t aligned with their listing content. Their listing content isn&apos;t aligned with how customers actually search. And nobody on the account is looking at the full picture.
            </motion.p>
          </div>

          {/* Right Column - Stacked Floating Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 relative">
            {PROBLEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-slate-200/50 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl ${item.rotation}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 border border-orange-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-Width Solution Box (Below Both Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 w-full rounded-2xl sm:rounded-3xl border-l-4 border-[#0052CC] bg-[#0052CC]/5 p-6 sm:p-8 border-y border-r border-slate-200/80 shadow-sm"
        >
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium text-center max-w-4xl mx-auto">
            <span className="font-bold text-[#0052CC]">Apexcale was built to solve exactly that.</span> We bring advertising, content, and operations under one roof, managed by a single accountable team, so every part of your account is working toward the same goal: <span className="font-semibold text-[#0052CC]">profitable, sustainable growth</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
