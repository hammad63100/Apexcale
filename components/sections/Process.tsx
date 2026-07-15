'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/ui/TextReveal';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: '01',
    title: 'Account & Catalog Audit',
    description:
      'We pull 90 days of PPC, listing, and account-health data to find exactly where ACOS, rank, and Buy Box share are leaking.',
  },
  {
    number: '02',
    title: 'Keyword & Bid Architecture',
    description:
      'Search-term harvesting builds a campaign structure segmented by intent, match type, and placement — built to isolate winners fast.',
  },
  {
    number: '03',
    title: 'Listing & A+ Content Rebuild',
    description:
      'Titles, bullets, backend terms, and A+ modules rewritten around indexed keywords and conversion-tested imagery.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description:
      'Daily bid management, dayparting, and budget reallocation toward the SKUs and placements converting at your target TACOS.',
  },
  {
    number: '05',
    title: 'Report & Reinvest',
    description:
      'Weekly dashboards tie ad spend directly to revenue and margin, so every dollar of reinvestment is a decision, not a guess.',
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
          How we work
        </span>
        <TextReveal
          as="h2"
          text="A five-step system, run every week."
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
