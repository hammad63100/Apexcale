'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const COLUMNS = [
  {
    title: 'Services',
    links: ['Product Research', 'Trademark Registration', 'Company Formation', 'PPC Management', 'Listing SEO'],
  },
  {
    title: 'Company',
    links: ['About Apexcale', 'Case Studies', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Amazon Guide', 'ACOS Calculator', 'Blog', 'Help Center'],
  },
];

const SOCIALS = [
  { label: 'X', path: 'M4 4l16 16M20 4L4 20' },
  { label: 'LinkedIn', path: 'M4 4h16v16H4zM8 10v6M8 7v.01M12 16v-3.5c0-1.5 1-2.5 2.5-2.5S17 11 17 12.5V16' },
  { label: 'Instagram', path: 'M4 4h16v16H4zM12 8a4 4 0 100 8 4 4 0 000-8zM16.5 7.5h.01' },
];

export default function Footer() {
  return (
    <footer className="relative pb-8 pt-4">
      <div className="container-px mx-auto max-w-6xl">
        <div className="glass-strong rounded-[2rem] p-10 sm:p-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
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
                className="mt-6 flex items-center gap-2 rounded-full bg-white/50 p-1.5"
              >
                <input
                  type="email"
                  required
                  placeholder="Your work email"
                  className="w-full bg-transparent px-4 py-2 text-sm text-navy placeholder:text-navy/40 focus:outline-none"
                />
                <MagneticButton
                  variant="filled"
                  className="!px-5 !py-2.5 !text-xs shrink-0"
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
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-navy/60 transition-colors hover:text-sky-700"
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

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/50 pt-8 sm:flex-row">
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
