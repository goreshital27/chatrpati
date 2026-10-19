import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Disable on touch devices or if reduced motion is requested
    if (window.matchMedia('(pointer: coarse)').matches || prefersReducedMotion) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      setTrail((prev) => [
        { x: e.clientX, y: e.clientY },
        ...prev.slice(0, 5),
      ]);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button';
        setIsPointer(!!isClickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [prefersReducedMotion]);

  if (!isVisible || prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Trailing golden ember spark dots */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="absolute rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${Math.max(2, 6 - index)}px`,
            height: `${Math.max(2, 6 - index)}px`,
            backgroundColor: index === 0 ? '#FF9933' : '#D4AF37',
            opacity: (1 - index / 6) * 0.6,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 8px #FF9933',
          }}
        />
      ))}

      {/* Main Arrowhead / Sword Blade Pointer */}
      <div
        className="absolute pointer-events-none transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-2px, -2px) ${isPointer ? 'scale(1.25) rotate(-15deg)' : 'scale(1)'}`,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_8px_rgba(255,153,51,0.8)]"
        >
          {/* Sword blade / Arrowhead */}
          <path
            d="M3 3L10.5 21L12.5 13L20.5 11L3 3Z"
            fill="url(#swordFoil)"
            stroke="#D4AF37"
            strokeWidth="1.2"
          />
          {/* Inner Bloodline Fuller */}
          <path d="M5 5L12 12.5" stroke="#8F6B14" strokeWidth="1" />
          <defs>
            <linearGradient id="swordFoil" x1="3" y1="3" x2="20.5" y2="21">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#FFD670" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

