'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { getAssetPath } from '@/lib/assets';

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
    <footer className="relative mt-12 w-full bg-[#0A192F]" style={{ backgroundColor: '#0A192F' }}>
      <div className="w-full rounded-t-3xl sm:rounded-t-[2.5rem] border-t border-white/10 px-5 py-10 sm:px-14 sm:py-16 bg-[#0A192F]" style={{ backgroundColor: '#0A192F' }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5">
                  <img
                    src={getAssetPath('/assets/logo.jpeg')}
                    alt="Apexcale Logo"
                    className="h-full w-full object-contain rounded-lg"
                  />
                </div>
                <span className="font-display text-xl font-bold text-white tracking-tight">
                  Apex<span className="text-[#FF8C00]">cale</span>
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-[#F4F7FC]/80 leading-relaxed">
                Full-service Amazon growth partner for brands ready to scale profitably across global marketplaces.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex flex-col xs:flex-row items-stretch xs:items-center gap-2 rounded-2xl xs:rounded-full bg-white/10 p-1.5 border border-white/15"
              >
                <input
                  type="email"
                  required
                  placeholder="Your work email"
                  className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-[#F4F7FC]/40 focus:outline-none"
                />
                <MagneticButton
                  variant="filled"
                  className="!px-5 !py-2.5 !text-xs shrink-0 w-full xs:w-auto !bg-[#FF8C00] hover:!bg-[#FFA733] text-white"
                >
                  Subscribe
                </MagneticButton>
              </form>
            </div>

            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-white">
                  {col.title}
                </h4>
                <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-[#F4F7FC]/70 transition-colors hover:text-[#FF8C00]"
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

          <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-4 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8 sm:flex-row text-center sm:text-left">
            <p className="text-xs text-[#F4F7FC]/50">
              © {new Date().getFullYear()} Apexcale. All rights reserved.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#F4F7FC] hover:bg-[#FF8C00] hover:text-white transition-colors"
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
