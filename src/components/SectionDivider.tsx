import React, { useState, useEffect, useRef } from 'react';

interface SectionDividerProps {
  heading: string;
  subheading?: string;
  badge?: string;
  alignment?: 'center' | 'left';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  heading,
  subheading,
  badge,
  alignment = 'center'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasRevealed, setHasRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRevealed) {
          setHasRevealed(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasRevealed]);

  useEffect(() => {
    if (!hasRevealed) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= heading.length) {
        setDisplayedText(heading.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [hasRevealed, heading]);

  return (
    <div
      ref={containerRef}
      className={`my-12 sm:my-16 px-4 flex flex-col ${
        alignment === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {badge && (
        <span className="mb-2 px-3 py-0.5 text-[11px] font-bold tracking-widest uppercase text-saffron bg-saffron/10 border border-saffron/30 rounded-full font-mukta">
          {badge}
        </span>
      )}

      {/* Decorative Diamond & Line Divider */}
      <div className="w-full max-w-3xl flex items-center justify-center gap-3 sm:gap-4 my-2">
        {/* Left Fading Gold Line */}
        <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-[#D4AF37]" />

        {/* Left Diamond */}
        <span className="text-[#D4AF37] text-xs sm:text-sm animate-pulse">◆</span>

        {/* Main Section Title */}
        <h2 className="font-cinzel text-xl sm:text-3xl md:text-4xl font-extrabold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-ivory to-gold-light px-2 min-h-[1.5em] flex items-center">
          {displayedText}
          {displayedText.length < heading.length && (
            <span className="inline-block w-1.5 h-6 bg-saffron ml-1 animate-ping" />
          )}
        </h2>

        {/* Right Diamond */}
        <span className="text-[#D4AF37] text-xs sm:text-sm animate-pulse">◆</span>

        {/* Right Fading Gold Line */}
        <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4AF37]/80 to-[#D4AF37]" />
      </div>

      {subheading && (
        <p className="mt-2 text-sm sm:text-base text-ivory/70 max-w-2xl font-mukta font-light">
          {subheading}
        </p>
      )}
    </div>
  );
};

