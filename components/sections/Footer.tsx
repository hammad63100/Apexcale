'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const COLUMNS = [
  {
    title: 'Services',
    links: ['Product Research', 'Trademark Registration', 'Company Formation', 'PPC Management', 'Listing SEO', 'A+ Content & Design'],
  },
  {
    title: 'Company',
    links: ['About Apexcale', 'Our Process', 'Why Choose Us', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Amazon Guide', 'FAQ', 'Blog', 'Help Center'],
  },
];

const SOCIALS = [
  { label: 'X', path: 'M4 4l16 16M20 4L4 20' },
  { label: 'LinkedIn', path: 'M4 4h16v16H4zM8 10v6M8 7v.01M12 16v-3.5c0-1.5 1-2.5 2.5-2.5S17 11 17 12.5V16' },
  { label: 'Instagram', path: 'M4 4h16v16H4zM12 8a4 4 0 100 8 4 4 0 000-8zM16.5 7.5h.01' },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 w-full">
      <div className="w-full glass-strong rounded-t-3xl sm:rounded-t-[2.5rem] border-x-0 border-b-0 px-5 py-10 sm:px-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cta-gradient font-display text-sm font-bold text-white">
                  A
                </span>
                <span className="font-display text-lg font-semibold text-navy">
                  Apex<span className="text-sky-700">cale</span>
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-navy/60">
                Full-service Amazon growth partner for brands ready to scale profitably across global marketplaces.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex flex-col xs:flex-row items-stretch xs:items-center gap-2 rounded-2xl xs:rounded-full bg-white/50 p-1.5"
              >
                <input
                  type="email"
                  required
                  placeholder="Your work email"
                  className="w-full bg-transparent px-4 py-2 text-sm text-navy placeholder:text-navy/40 focus:outline-none"
                />
                <MagneticButton
                  variant="filled"
                  className="!px-5 !py-2.5 !text-xs shrink-0 w-full xs:w-auto"
                >
                  Subscribe
                </MagneticButton>
              </form>
            </div>

            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-navy">
                  {col.title}
                </h4>
                <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-navy/60 transition-colors hover:text-sky-700"
                        data-cursor="View"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-4 sm:gap-6 border-t border-white/50 pt-6 sm:pt-8 sm:flex-row text-center sm:text-left">
            <p className="text-xs text-navy/50">
              © {new Date().getFullYear()} Apexcale. All rights reserved.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60 text-navy"
                  aria-label={s.label}
                  data-cursor="Follow"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path d={s.path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
