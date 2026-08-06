'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { getAssetPath } from '@/lib/assets';
import clsx from 'clsx';

const LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
];

function NavLink({ label, href, scrolled }: { label: string; href: string; scrolled: boolean }) {
  return (
    <a
      href={href}
      data-cursor="View"
      className={clsx(
        "group relative overflow-hidden text-base sm:text-[17px] font-semibold py-1 transition-colors",
        scrolled ? "text-[#0A192F]" : "text-white"
      )}
      onClick={(e) => {
        e.preventDefault();
        if (href === '#' || href === '#hero') {
          (window as any).lenis
            ? (window as any).lenis.scrollTo(0, { immediate: false })
            : window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const target = document.querySelector(href);
          if (target) {
            (window as any).lenis
              ? (window as any).lenis.scrollTo(target, { offset: -80 })
              : target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }}
    >
      <span className="block transition-transform duration-400 ease-out group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute left-0 top-full block translate-y-0 text-[#FF5E00] transition-transform duration-400 ease-out group-hover:-translate-y-full">
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

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    (window as any).lenis
      ? (window as any).lenis.scrollTo(0, { immediate: false })
      : window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            'flex items-center justify-between rounded-full transition-all duration-500',
            scrolled
              ? 'glass bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md px-4 py-2 sm:px-6 sm:py-3'
              : 'bg-transparent border-transparent px-4 py-3 sm:px-7 sm:py-4 shadow-none'
          )}
        >
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center gap-2.5 shrink-0 group"
            data-cursor="Home"
          >
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
              <img
                src={getAssetPath('/assets/logo.jpeg')}
                alt="Apexcale Logo"
                className="h-full w-full object-contain rounded-lg"
              />
            </div>
            <span className={clsx(
              "font-display font-bold text-lg sm:text-xl tracking-tight transition-colors",
              scrolled ? "text-[#0A192F]" : "text-white"
            )}>
              Apex<span className="text-[#FF5E00]">cale</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <NavLink key={l.label} {...l} scrolled={scrolled} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton
              variant="filled"
              className="!px-6 !py-3 !text-sm font-semibold whitespace-nowrap shrink-0 !text-white border border-amber-300/40 shadow-md"
              style={{ background: 'linear-gradient(135deg, #FF5E00 0%, #FFAA00 100%)' }}
              cursorLabel="Home"
              onClick={scrollToTop}
            >
              Schedule a Free Strategy Call
            </MagneticButton>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full lg:hidden hover:bg-white/20 active:scale-95 transition-transform shrink-0"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <div className="space-y-1 flex flex-col items-center justify-center">
              <span className={clsx("block h-0.5 w-5 rounded-full transition-colors", scrolled ? "bg-[#0A192F]" : "bg-white")} />
              <span className={clsx("block h-0.5 w-5 rounded-full transition-colors", scrolled ? "bg-[#0A192F]" : "bg-white")} />
              <span className={clsx("block h-0.5 w-5 rounded-full transition-colors", scrolled ? "bg-[#0A192F]" : "bg-white")} />
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
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <a href="#" onClick={(e) => { setOpen(false); scrollToTop(e); }} className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5">
                  <img
                    src={getAssetPath('/assets/logo.jpeg')}
                    alt="Apexcale Logo"
                    className="h-full w-full object-contain rounded-lg"
                  />
                </div>
                <span className="font-display font-bold text-[#0A192F] text-xl">
                  Apex<span className="text-[#FF5E00]">cale</span>
                </span>
              </a>
            </div>
            <button
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#0A192F] text-2xl font-bold"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            {LINKS.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  if (l.href === '#' || l.href === '#hero') {
                    scrollToTop(e);
                  } else {
                    const target = document.querySelector(l.href);
                    if (target) {
                      (window as any).lenis
                        ? (window as any).lenis.scrollTo(target, { offset: -80 })
                        : target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="font-display text-2xl sm:text-3xl font-bold text-[#0A192F] hover:text-[#FF5E00] transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
              onClick={(e) => {
                setOpen(false);
                scrollToTop(e);
              }}
            >
              <MagneticButton
                variant="filled"
                className="!px-8 !py-4 !text-sm font-semibold !text-white border border-amber-300/40 shadow-md"
                style={{ background: 'linear-gradient(135deg, #FF5E00 0%, #FFAA00 100%)' }}
              >
                Schedule a Free Strategy Call
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
