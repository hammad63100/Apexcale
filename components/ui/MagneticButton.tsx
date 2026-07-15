'use client';

import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';
import clsx from 'clsx';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'glass';
  className?: string;
  onClick?: () => void;
  href?: string;
  cursorLabel?: string;
}

export default function MagneticButton({
  children,
  variant = 'filled',
  className,
  onClick,
  href,
  cursorLabel = 'Click',
}: MagneticButtonProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic({
    strength: 0.3,
  });
  const inner = useMagnetic({ strength: 0.5 });

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      // @ts-ignore - polymorphic ref
      ref={ref}
      href={href}
      onClick={onClick}
      data-cursor={cursorLabel}
      onMouseMove={(e: React.MouseEvent) => {
        handleMouseMove(e);
        inner.handleMouseMove(e);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        inner.handleMouseLeave();
      }}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={clsx(
        'relative inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-sm tracking-wide transition-shadow duration-300',
        variant === 'filled' &&
          'bg-cta-gradient text-white shadow-glow-sky hover:shadow-glow-orange',
        variant === 'glass' &&
          'glass text-navy hover:bg-white/60',
        className
      )}
    >
      <motion.span
        style={{ x: inner.x, y: inner.y }}
        className="pointer-events-none"
      >
        {children}
      </motion.span>
    </Comp>
  );
}
