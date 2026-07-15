import { Variants } from 'framer-motion';

/**
 * Splits a string into an array of words for per-word stagger reveal.
 * Pair with <TextReveal /> in components/ui, or roll your own markup:
 *
 *   {splitWords(text).map((word, i) => (
 *     <span key={i} className="inline-block overflow-hidden">
 *       <motion.span variants={wordRevealVariants} className="inline-block">
 *         {word}&nbsp;
 *       </motion.span>
 *     </span>
 *   ))}
 */
export function splitWords(text: string): string[] {
  return text.split(' ');
}

export function splitChars(text: string): string[] {
  return text.split('');
}

export const revealContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
};

export const wordRevealVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const charRevealVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
