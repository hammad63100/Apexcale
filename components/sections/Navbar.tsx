'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import clsx from 'clsx';

const LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      data-cursor="View"
      className="group relative overflow-hidden text-sm font-medium text-navy/80 py-1"
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          (window as any).lenis
            ? (window as any).lenis.scrollTo(target, { offset: -80 })
            : target.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <span className="block transition-transform duration-400 ease-out group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute left-0 top-full block translate-y-0 text-sky-700 transition-transform duration-400 ease-out group-hover:-translate-y-full">
        {label}
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-3 sm:top-4 inset-x-0 mx-auto z-50 w-[92%] sm:w-[94%] max-w-6xl"
      >
        <div
          className={clsx(
            'glass flex items-center justify-between rounded-full transition-all duration-500',
            scrolled ? 'px-4 py-2 sm:px-5 sm:py-2.5' : 'px-4 py-3 sm:px-7 sm:py-4'
          )}
        >
          <a href="#" className="flex items-center gap-2 shrink-0" data-cursor="Home">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cta-gradient text-white font-display font-bold text-sm">
              A
            </span>
            <span className="font-display font-semibold text-navy text-base sm:text-lg">
              Apex<span className="text-sky-700">cale</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <NavLink key={l.href} {...l} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton
              variant="filled"
              className="!px-6 !py-3 !text-xs"
              cursorLabel="Talk"
            >
              Schedule a Free Strategy Call
            </MagneticButton>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full lg:hidden hover:bg-white/40 active:scale-95 transition-transform shrink-0"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <div className="space-y-1 flex flex-col items-center justify-center">
              <span className="block h-0.5 w-5 bg-navy rounded-full" />
              <span className="block h-0.5 w-5 bg-navy rounded-full" />
              <span className="block h-0.5 w-5 bg-navy rounded-full" />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-strong fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 sm:gap-8 lg:hidden px-6"
          >
            <button
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/60 text-navy text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const target = document.querySelector(l.href);
                  if (target) {
                    (window as any).lenis
                      ? (window as any).lenis.scrollTo(target, { offset: -80 })
                      : target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="font-display text-2xl sm:text-3xl font-semibold text-navy hover:text-sky-700 transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
              onClick={() => setOpen(false)}
            >
              <MagneticButton variant="filled" className="!px-8 !py-4 !text-sm">Schedule a Free Strategy Call</MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
