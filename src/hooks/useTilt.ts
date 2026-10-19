import { useState, useRef, MouseEvent } from 'react';

interface TiltValues {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export function useTilt(maxAngle: number = 7) {
  const [tilt, setTilt] = useState<TiltValues>({ rotateX: 0, rotateY: 0, scale: 1 });
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxAngle;
    const rotateY = ((x - centerX) / centerX) * maxAngle;

    setTilt({
      rotateX,
      rotateY,
      scale: 1.025
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return { elementRef, tilt, handleMouseMove, handleMouseLeave };
}

