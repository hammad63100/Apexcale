'use client';

import dynamic from 'next/dynamic';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import AuroraBackground from '@/components/ui/AuroraBackground';
import TextReveal from '@/components/ui/TextReveal';
import MagneticButton from '@/components/ui/MagneticButton';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
});

export default function Hero() {
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const springX = useSpring(spotX, { stiffness: 60, damping: 20 });
  const springY = useSpring(spotY, { stiffness: 60, damping: 20 });
  const background = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(58,166,240,0.16), transparent 70%)`
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      spotX.set(e.clientX);
      spotY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [spotX, spotY]);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 flex flex-col justify-center">
      <AuroraBackground />
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background }}
      />

      <div className="absolute inset-0 z-[2] h-full w-full opacity-90 pointer-events-none md:pointer-events-auto">
        <HeroScene />
      </div>

      <div className="container-px relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <TextReveal
          as="h1"
          text="Scale Your Brand to the Top of Amazon — Anywhere in the World"
          className="mx-auto max-w-4xl font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy text-pretty"
          triggerOnView={false}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-4 sm:mt-8 max-w-2xl text-base sm:text-lg text-navy/70 leading-relaxed"
        >
          Apexcale is a full-service Amazon growth partner for brands that are serious about scaling profitably. We combine data-driven advertising, conversion-focused listing optimization, and hands-on account management to help you win the Buy Box, dominate search results, and turn your marketplace presence into a predictable revenue engine — across Amazon, Walmart, and every major global marketplace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 w-full xs:w-auto"
        >
          <MagneticButton variant="filled" cursorLabel="Start" className="w-full xs:w-auto !px-6 !py-3.5 !text-sm">
            Schedule a Free Strategy Call
          </MagneticButton>
          <MagneticButton variant="glass" cursorLabel="View" className="w-full xs:w-auto !px-6 !py-3.5 !text-sm">
            View Our Results ↓
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
