'use client';

import { motion } from 'framer-motion';
import AuroraBackground from '@/components/ui/AuroraBackground';
import MagneticButton from '@/components/ui/MagneticButton';
import TextReveal from '@/components/ui/TextReveal';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <AuroraBackground intensity="strong" />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/70 shadow-glass animate-float hidden sm:flex items-center justify-center p-2 border border-white/80"
        aria-hidden="true"
      >
        <img
          src="/assects/WhatsApp Image 2026-08-05 at 5.03.05 PM.jpeg"
          alt="Apexcale Emblem"
          className="h-full w-full object-contain rounded-xl"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[20%] top-[30%] h-10 w-10 rounded-xl bg-white/50 shadow-glass animate-float hidden sm:flex items-center justify-center p-1.5 border border-white/80"
        style={{ animationDelay: '1.2s' }}
        aria-hidden="true"
      >
        <img
          src="/assects/WhatsApp Image 2026-08-05 at 5.03.05 PM.jpeg"
          alt="Apexcale Emblem"
          className="h-full w-full object-contain rounded-lg"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[18%] bottom-[25%] h-14 w-14 rounded-2xl bg-white/50 shadow-glass animate-float hidden sm:flex items-center justify-center p-2 border border-white/80"
        style={{ animationDelay: '2.4s' }}
        aria-hidden="true"
      >
        <img
          src="/assects/WhatsApp Image 2026-08-05 at 5.03.05 PM.jpeg"
          alt="Apexcale Emblem"
          className="h-full w-full object-contain rounded-xl"
        />
      </motion.div>

      <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
        <TextReveal
          as="h2"
          text="Ready to Turn Your Amazon Store Into a Predictable Growth Engine?"
          className="justify-center font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy text-pretty"
        />
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-navy/65 leading-relaxed">
          Schedule a free strategy call with our team and get a clear, honest assessment of what's holding your account back — and exactly how Apexcale can fix it.
        </p>
        <div className="mt-8 sm:mt-10 flex justify-center w-full">
          <MagneticButton variant="filled" className="w-full sm:w-auto !px-6 !py-4 xs:!px-10 xs:!py-5 !text-sm sm:!text-base" cursorLabel="Start">
            Schedule Your Free Strategy Call
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
