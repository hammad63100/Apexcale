'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/ui/TextReveal';
import clsx from 'clsx';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
  colSpan: string;
  isFeatured?: boolean;
  layoutVariant?: 'featured' | 'wide' | 'tall' | 'standard';
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
    title: 'Amazon PPC & Advertising Management',
    description: 'We plan, launch, and manage Sponsored Products, Sponsored Brands, and Sponsored Display campaigns built around real performance targets — not just impressions and clicks. Our team structures campaigns around keyword intent, competitive bidding strategy, and dayparting, with continuous optimization based on ACoS and TACoS.',
    icon: <Icon path="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    colSpan: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
    isFeatured: true,
    layoutVariant: 'featured',
  },
  {
    title: 'Listing & SEO Optimization',
    description: 'Our copywriters and keyword strategists rebuild your listings from the ground up — titles, bullet points, backend search terms, and descriptions — optimized for Amazon\'s A9/A10 search algorithm.',
    icon: <Icon path="M11 4a7 7 0 105.3 12.1L21 21m-10-3a7 7 0 110-14 7 7 0 010 14z" />,
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-1',
    layoutVariant: 'standard',
  },
  {
    title: 'Product Research & Validation',
    description: 'We analyze demand trends, competition density, profit margins, and category saturation to validate product opportunities with real data.',
    icon: <Icon path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-1',
    layoutVariant: 'standard',
  },
  {
    title: 'A+ Content & Creative Design',
    description: 'Our in-house design team produces premium product photography, lifestyle imagery, comparison charts, infographics, and A+/Premium A+ modules designed to maximize conversions.',
    icon: <Icon path="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format&fit=crop',
    colSpan: 'md:col-span-2 lg:col-span-2',
    layoutVariant: 'wide',
  },
  {
    title: 'Full Account Management',
    description: 'Inventory monitoring, case log resolution, account health tracking, pricing oversight, and policy compliance — managed end-to-end.',
    icon: <Icon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-1',
    layoutVariant: 'standard',
  },
  {
    title: 'Product Launch Strategy',
    description: 'Coordinated PPC activation, review-generation strategy, and ranking tactics for day-one velocity.',
    icon: <Icon path="M13 10V3L4 14h7v7l9-11h-7z" />,
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    title: 'Brand Registry & Protection',
    description: 'We support enrollment and ongoing protection — identifying unauthorized sellers and hijackers before they impact Buy Box share.',
    icon: <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80&auto=format&fit=crop',
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
  {
    title: 'Trademark Registration',
    description: 'We guide you through the trademark registration process from filing to approval for complete Brand Registry eligibility.',
    icon: <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&auto=format&fit=crop',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    title: 'Company Formation',
    description: 'Legal entity setup assistance for international sellers to launch compliant Amazon operations.',
    icon: <Icon path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop',
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
];

function TiltCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMove = (e: React.MouseEvent) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isFeatured = service.isFeatured;

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
          transition: { duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={clsx(
        'glass-strong glass-border-gradient group relative flex min-h-[280px] sm:min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl p-5 sm:p-8',
        'border border-white/80 shadow-glass transition-all duration-500 hover:shadow-glass-lg hover:border-sky-300/60',
        service.colSpan
      )}
    >
      {/* Full-bleed background image reaching all borders */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
        />
        {/* Soft subtle gradient overlay allowing the image to show clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
      </div>

      {/* Card Content Header (Icon + Badge) */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-2xl bg-white/95 shadow-md backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
          {service.icon}
        </div>
        {isFeatured && (
          <span className="rounded-full bg-white/90 border border-sky-200/60 px-3 py-1 text-[11px] sm:text-xs font-semibold text-sky-800 shadow-sm backdrop-blur-md">
            Core Expertise
          </span>
        )}
      </div>

      {/* Card Text Area with clear contrast */}
      <div className="relative z-10 mt-auto rounded-2xl bg-white/60 p-4 backdrop-blur-sm border border-white/50 shadow-sm">
        <h3 className={clsx(
          'font-display font-bold text-navy leading-snug',
          isFeatured ? 'text-xl sm:text-3xl' : 'text-lg sm:text-2xl'
        )}>
          {service.title}
        </h3>
        <p className={clsx(
          'mt-2.5 leading-relaxed text-navy/85 text-left font-medium',
          isFeatured ? 'text-sm sm:text-lg' : 'text-xs sm:text-base'
        )}>
          {service.description}
        </p>
      </div>

      {/* Hover ambient light glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/0 blur-2xl transition-colors duration-500 group-hover:bg-sky-400/20 z-0" />
    </motion.div>
  );
}

export default function BentoServices() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Our Services
          </span>
          <TextReveal
            as="h2"
            text="A Complete Growth Partner, Not Just a Vendor"
            className="mt-3 font-display text-3xl xs:text-4xl sm:text-5xl font-semibold text-navy text-pretty"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => (
            <TiltCard key={s.title} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
