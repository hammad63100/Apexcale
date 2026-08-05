'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/components/ui/TextReveal';

export default function Problem() {
  return (
    <section id="problem" className="relative py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-200/20 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            The Problem
          </span>
          <TextReveal
            as="h2"
            text="Selling on Amazon Is Easy. Winning Is a Different Game Entirely."
            className="mt-3 font-display text-3xl xs:text-4xl sm:text-5xl font-semibold text-navy text-pretty"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base leading-relaxed text-navy/70"
            >
              Every day, thousands of new listings go live on Amazon. Your competitors are
              running ad campaigns, optimizing their content, and fighting for the exact same
              customers you&apos;re trying to reach. Without a coordinated strategy across
              advertising, SEO, and operations, even a great product can get buried on page
              three — while your ad spend quietly disappears with nothing to show for it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-base leading-relaxed text-navy/70"
            >
              Most brands don&apos;t have a visibility problem or a demand problem. They have
              a <span className="font-semibold text-navy">strategy problem</span>. Their
              advertising isn&apos;t aligned with their listing content. Their listing content
              isn&apos;t aligned with how customers actually search. And nobody on the account
              is looking at the full picture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass glass-border-gradient rounded-2xl p-5 sm:p-6 mt-1 sm:mt-2"
            >
              <p className="font-display text-base sm:text-lg font-medium leading-snug text-navy">
                Apexcale was built to solve exactly that.
              </p>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-navy/65">
                We bring advertising, content, and operations under one roof, managed by a
                single accountable team, so every part of your account is working toward the
                same goal: <span className="font-semibold text-sky-700">profitable, sustainable growth</span>.
              </p>
            </motion.div>
          </div>

          {/* Right column - Visual illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="glass-strong rounded-3xl p-5 sm:p-8 w-full">
              <div className="space-y-3 sm:space-y-4">
                {/* Problem indicators */}
                {[
                  { label: 'Advertising', issue: 'Not aligned with listing content', color: 'bg-red-400/80' },
                  { label: 'Listing Content', issue: 'Not matching customer search behavior', color: 'bg-orange-400/80' },
                  { label: 'Account Operations', issue: 'No one watching the full picture', color: 'bg-amber-400/80' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 sm:gap-4 rounded-xl bg-white/50 p-3.5 sm:p-4"
                  >
                    <div className={`h-3 w-3 shrink-0 rounded-full ${item.color}`} />
                    <div>
                      <div className="text-sm font-semibold text-navy">{item.label}</div>
                      <div className="text-xs text-navy/55">{item.issue}</div>
                    </div>
                  </motion.div>
                ))}

                {/* Arrow down */}
                <div className="flex justify-center py-1.5 sm:py-2">
                  <motion.svg
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                    width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-sky-600"
                  >
                    <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 sm:gap-4 rounded-xl bg-gradient-to-r from-sky-500/10 to-sky-400/10 p-3.5 sm:p-4 ring-1 ring-sky-300/40"
                >
                  <div className="h-3 w-3 shrink-0 rounded-full bg-sky-500" />
                  <div>
                    <div className="text-sm font-semibold text-navy">Apexcale&apos;s Unified Strategy</div>
                    <div className="text-xs text-navy/55">Everything aligned under one accountable team</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
