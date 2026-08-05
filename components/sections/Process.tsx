'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/ui/TextReveal';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start with a detailed conversation about your brand, your current performance, your goals, and the specific challenges holding your account back.',
  },
  {
    number: '02',
    title: 'Account & Market Audit',
    description:
      'Our team conducts a comprehensive audit of your listings, advertising accounts, competitive landscape, and category-level data to identify exactly where the biggest opportunities — and risks — are hiding.',
  },
  {
    number: '03',
    title: 'Custom Growth Strategy',
    description:
      'Based on the audit, we build a tailored roadmap covering advertising, content, and account operations, aligned directly to your specific goals, budget, and marketplace footprint.',
  },
  {
    number: '04',
    title: 'Execution & Continuous Optimization',
    description:
      'We implement the strategy in full and optimize continuously based on live performance data — adjusting bids, refining content, and refining targeting as real results come in.',
  },
  {
    number: '05',
    title: 'Transparent Reporting & Strategic Review',
    description:
      'You receive clear, regular reporting alongside strategic check-ins, so you always understand exactly how your investment is performing and what\'s coming next.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced || !sectionRef.current || !trackRef.current) return;

      const scrollDistance = () =>
        trackRef.current!.scrollWidth - window.innerWidth + 160;

      const tween = gsap.to(trackRef.current, {
        x: () => -scrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollDistance() + window.innerHeight}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left 75%',
              end: 'left 35%',
              scrub: true,
            },
          }
        );
      });

      return () => tween.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      <div className="container-px mx-auto mb-14 max-w-6xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
          How We Work With You
        </span>
        <TextReveal
          as="h2"
          text="Our Process"
          className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl"
        />
      </div>

      <div className="pl-6 sm:pl-10 lg:pl-[6rem]">
        <div ref={trackRef} className="flex gap-6 will-change-transform">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="glass glass-border-gradient flex w-[80vw] max-w-md shrink-0 flex-col justify-between rounded-3xl p-9 sm:w-[420px]"
            >
              <span className="font-display text-5xl font-bold text-sky-300">
                {step.number}
              </span>
              <div className="mt-10">
                <h3 className="font-display text-2xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/65">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          <div className="w-[10vw] shrink-0" />
        </div>
      </div>
    </section>
  );
}
