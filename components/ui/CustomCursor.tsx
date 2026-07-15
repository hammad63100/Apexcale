'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const touch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    setIsTouch(touch);
    if (touch) return;

    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let raf = 0;

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: Event) => {
      const el = (e.target as HTMLElement).closest('[data-cursor]');
      if (el) {
        setHovering(true);
        setLabel(el.getAttribute('data-cursor') || '');
      }
    };
    const onOut = (e: Event) => {
      const el = (e.target as HTMLElement).closest('[data-cursor]');
      if (el) {
        setHovering(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={dotRef}
      className="custom-cursor flex items-center justify-center transition-[width,height,background] duration-300 ease-out"
      style={{
        width: hovering ? 64 : 16,
        height: hovering ? 64 : 16,
        background: hovering ? 'rgba(15,41,66,0.9)' : '#0F2942',
      }}
    >
      {label && (
        <span className="text-[10px] font-medium tracking-wide text-white uppercase">
          {label}
        </span>
      )}
    </div>
  );
}
