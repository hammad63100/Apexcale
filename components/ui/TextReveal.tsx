'use client';

import { motion } from 'framer-motion';
import {
  revealContainerVariants,
  wordRevealVariants,
  splitWords,
} from '@/hooks/useTextReveal';
import clsx from 'clsx';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  triggerOnView?: boolean;
  delay?: number;
}

export default function TextReveal({
  text,
  as = 'h2',
  className,
  triggerOnView = true,
  delay = 0,
}: TextRevealProps) {
  const Comp = motion[as] as any;
  const words = splitWords(text);

  return (
    <Comp
      className={clsx('flex flex-wrap', className)}
      variants={revealContainerVariants}
      initial="hidden"
      {...(triggerOnView
        ? { whileInView: 'visible', viewport: { once: true, amount: 0.6 } }
        : { animate: 'visible' })}
      transition={{ delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden pb-1 pr-[0.28em]">
          <motion.span
            variants={wordRevealVariants}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
