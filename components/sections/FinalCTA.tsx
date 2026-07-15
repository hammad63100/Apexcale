'use client';

import { motion } from 'framer-motion';
import AuroraBackground from '@/components/ui/AuroraBackground';
import MagneticButton from '@/components/ui/MagneticButton';
import TextReveal from '@/components/ui/TextReveal';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <AuroraBackground intensity="strong" />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/50 shadow-glass animate-float"
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute left-[20%] top-[30%] h-10 w-10 rounded-xl bg-white/40 shadow-glass animate-float"
        style={{ animationDelay: '1.2s' }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute right-[18%] bottom-[25%] h-14 w-14 rounded-full bg-white/40 shadow-glass animate-float"
        style={{ animationDelay: '2.4s' }}
        aria-hidden="true"
      />

      <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
        <TextReveal
          as="h2"
          text="Ready to turn ad spend into a growth channel?"
          className="justify-center font-display text-4xl font-semibold text-navy text-balance sm:text-5xl lg:text-6xl"
        />
        <p className="mt-6 text-lg text-navy/65">
          Get a free, no-obligation audit of your PPC, listings, and account
          health — delivered in 5 business days.
        </p>
        <div className="mt-10 flex justify-center">
          <MagneticButton variant="filled" className="!px-10 !py-5 !text-base" cursorLabel="Start">
            Book Your Free Audit
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
