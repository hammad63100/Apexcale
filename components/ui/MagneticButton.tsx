'use client';

import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';
import clsx from 'clsx';
import { CSSProperties, ReactNode, MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  variant?: 'filled' | 'glass';
  className?: string;
  onClick?: () => void;
  href?: string;
  cursorLabel?: string;
  style?: CSSProperties;
}

export default function MagneticButton({
  children,
  variant = 'filled',
  className,
  onClick,
  href,
  cursorLabel = 'Click',
  style,
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
      onMouseMove={(e: MouseEvent) => {
        handleMouseMove(e);
        inner.handleMouseMove(e);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        inner.handleMouseLeave();
      }}
      style={{ x, y, ...style }}
      whileTap={{ scale: 0.96 }}
      className={clsx(
        'relative inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-sm tracking-wide transition-all duration-300',
        variant === 'filled' &&
          'bg-cta-gradient text-white shadow-glow-orange hover:shadow-[0_0_50px_rgba(255,94,0,0.6)] hover:scale-[1.02]',
        variant === 'glass' &&
          'glass text-navy hover:bg-accent/10 hover:border-accent/30 hover:text-accent-dark',
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
