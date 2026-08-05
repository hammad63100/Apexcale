'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/ui/TextReveal';
import clsx from 'clsx';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

function Icon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-sky-700">
      <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SERVICES: Service[] = [
  {
    title: 'Product Research & Validation',
    description:
      'Before a single dollar goes into advertising or inventory, we identify what\'s actually worth selling. Our team analyzes demand trends, competition density, profit margins, and category saturation to validate product opportunities with real data — reducing guesswork and protecting your capital from day one.',
    icon: <Icon path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  },
  {
    title: 'Trademark Registration',
    description: 'A registered trademark isn\'t optional for serious Amazon sellers — it\'s the foundation of Brand Registry, brand protection, and long-term account security. We guide you through the trademark registration process from filing to approval, so your brand is legally protected and positioned to access Amazon\'s full suite of brand tools.',
    icon: <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Company Formation',
    description: 'For entrepreneurs and international sellers who need a properly structured business entity to sell compliantly, we assist with company formation — helping you set up the right legal and operational foundation to sell on Amazon and other marketplaces with confidence.',
    icon: <Icon path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
  },
  {
    title: 'Amazon PPC & Advertising Management',
    description: 'We plan, launch, and manage Sponsored Products, Sponsored Brands, and Sponsored Display campaigns built around real performance targets — not just impressions and clicks. Our team structures campaigns around keyword intent, competitive bidding strategy, and dayparting, with continuous optimization based on ACoS and TACoS rather than surface-level metrics.',
    icon: <Icon path="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: 'Listing & SEO Optimization',
    description: 'Our copywriters and keyword strategists rebuild your listings from the ground up — titles, bullet points, backend search terms, and descriptions — based on real search-volume data and buyer intent. We don\'t just make listings sound good; we make them convert, while ensuring they\'re fully optimized for Amazon\'s A9/A10 search algorithm.',
    icon: <Icon path="M11 4a7 7 0 105.3 12.1L21 21m-10-3a7 7 0 110-14 7 7 0 010 14z" />,
  },
  {
    title: 'Full Account Management',
    description: 'We handle the day-to-day operational demands of running an Amazon business: inventory monitoring, case log resolution, account health tracking, pricing oversight, and policy compliance. Our team acts as an extension of yours, catching issues before they become account-threatening problems.',
    icon: <Icon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
  },
  {
    title: 'Product Launch Strategy',
    description: 'Launching a new product on Amazon requires more than flipping a listing live. We combine coordinated PPC activation, review-generation strategy, and early-stage ranking tactics to build sustainable velocity from day one — avoiding the common trap of a fast launch followed by a slow, permanent decline.',
    icon: <Icon path="M13 10V3L4 14h7v7l9-11h-7z" />,
  },
  {
    title: 'A+ Content & Creative Design',
    description: 'Our in-house design team produces premium product photography, lifestyle imagery, comparison charts, infographics, and A+/Premium A+ modules that are built specifically to increase conversion rate — not just look polished. Every creative asset is designed with a clear commercial purpose.',
    icon: <Icon path="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  },
  {
    title: 'Brand Registry',
    description: 'We support brands through Brand Registry enrollment and ongoing protection — identifying and resolving unauthorized sellers, counterfeit listings, and hijackers before they erode your Buy Box share, your pricing integrity, or your brand\'s reputation.',
    icon: <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
];

function TiltCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={clsx(
        'glass-strong glass-border-gradient group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl p-6 sm:p-7',
        'border border-white/80 shadow-glass transition-shadow duration-300 hover:shadow-glass-lg'
      )}
      data-cursor="Explore"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100/80 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
        {service.icon}
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-lg font-semibold leading-snug text-navy sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/60">
          {service.description}
        </p>
      </div>

      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-400/0 blur-2xl transition-colors duration-500 group-hover:bg-sky-400/20" />
    </motion.div>
  );
}

export default function BentoServices() {
  return (
    <section id="services" className="relative py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Our Services
          </span>
          <TextReveal
            as="h2"
            text="A Complete Growth Partner, Not Just a Vendor"
            className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => (
            <TiltCard key={s.title} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
