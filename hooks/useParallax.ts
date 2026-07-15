'use client';

import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxOptions {
  distance?: number; // px of vertical travel across the scroll range
  offset?: [string, string];
}

/**
 * Returns a ref to attach to a scroll container/section and a
 * MotionValue you can pass straight into a `style={{ y }}` on any
 * child layer. Different `distance` values on sibling layers create
 * layered-depth parallax (background slower, foreground faster).
 */
export function useParallax({
  distance = 120,
  offset = ['start end', 'end start'],
}: ParallaxOptions = {}): {
  ref: React.RefObject<HTMLDivElement>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return { ref, y };
}
