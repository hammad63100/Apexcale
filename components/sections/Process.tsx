'use client';

import TextReveal from '@/components/ui/TextReveal';
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack';

const STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start with a detailed conversation about your brand, your current performance, your goals, and the specific challenges holding your account back.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Account & Market Audit',
    description:
      'Our team conducts a comprehensive audit of your listings, advertising accounts, competitive landscape, and category-level data to identify exactly where the biggest opportunities — and risks — are hiding.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'Custom Growth Strategy',
    description:
      'Based on the audit, we build a tailored roadmap covering advertising, content, and account operations, aligned directly to your specific goals, budget, and marketplace footprint.',
    image: 'https://images.unsplash.com/photo-1507925922837-1305741630c7?w=800&q=80&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Execution & Continuous Optimization',
    description:
      'We implement the strategy in full and optimize continuously based on live performance data — adjusting bids, refining content, and refining targeting as real results come in.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  },
  {
    number: '05',
    title: 'Transparent Reporting & Strategic Review',
    description:
      'You receive clear, regular reporting alongside strategic check-ins, so you always understand exactly how your investment is performing and what\'s coming next.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-16 sm:py-20 bg-transparent">
      <div className="container-px mx-auto max-w-6xl w-full">
        <div className="mb-10 sm:mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            How We Work With You
          </span>
          <TextReveal
            as="h2"
            text="Our Process"
            className="mt-3 justify-center font-display text-3xl xs:text-4xl sm:text-5xl font-semibold text-navy text-pretty"
          />
        </div>

        <ScrollStack
          itemDistance={100}
          itemScale={0.04}
          itemStackDistance={20}
          stackPosition="15%"
          scaleEndPosition="10%"
          baseScale={0.88}
          scaleDuration={0.5}
          blurAmount={2}
          useWindowScroll={true}
        >
            {STEPS.map((step) => (
              <ScrollStackItem key={step.number} itemClassName="!p-0 border-none bg-transparent shadow-none">
                <div className="glass glass-border-gradient flex flex-col overflow-hidden rounded-3xl sm:rounded-[2.5rem] md:flex-row bg-white/70 w-full min-h-[360px] sm:min-h-[450px]">
                  {/* Content Side */}
                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-10 md:p-14 md:w-[60%]">
                    <span className="mb-2 sm:mb-4 font-display text-5xl sm:text-7xl font-bold text-sky-300/40">
                      {step.number}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-navy/80 text-left sm:text-justify">
                      {step.description}
                    </p>
                  </div>

                  {/* Image Side */}
                  <div className="relative min-h-[180px] sm:min-h-[250px] md:w-[40%] md:min-h-full bg-navy/5">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent md:bg-gradient-to-l" />
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
      </div>
    </section>
  );
}
