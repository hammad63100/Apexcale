'use client';

import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

interface MagneticOptions {
  strength?: number; // 0-1, how much of the cursor offset to apply
  radius?: number; // px, disables outside this bounding pull area
}

/**
 * Attach the returned ref + motion values to any element to get a
 * magnetic "pulled toward the cursor" hover effect that springs back
 * on mouse leave. Works for both the button itself and an inner label
 * (pass a stronger strength to the inner element for a layered feel).
 */
export function useMagnetic({ strength = 0.35 }: MagneticOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, handleMouseMove, handleMouseLeave };
}
