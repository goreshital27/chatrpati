import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { AnimatedText } from './AnimatedText';

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
  alignment = 'center',
}) => {
  const { language } = useLanguage();
  const [hasRevealed, setHasRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Detect Devanagari script in heading
  const isDevanagari = /[\u0900-\u097F]/.test(heading) || language === 'mr';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRevealed) {
          setHasRevealed(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasRevealed]);

  return (
    <div
      ref={containerRef}
      className={`my-12 sm:my-16 px-4 flex flex-col ${
        alignment === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {badge && (
        <span
          lang={isDevanagari ? 'mr' : undefined}
          className={`mb-2 px-3 py-0.5 text-[11px] font-bold text-saffron bg-saffron/10 border border-saffron/30 rounded-full font-mukta ${
            isDevanagari ? 'tracking-normal' : 'tracking-widest uppercase'
          }`}
          style={{ letterSpacing: isDevanagari ? 0 : undefined, textTransform: isDevanagari ? 'none' : undefined }}
        >
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
        <h2
          lang={isDevanagari ? 'mr' : 'en'}
          className={`${
            isDevanagari ? 'font-yatra text-2xl sm:text-3xl md:text-4xl' : 'font-cinzel text-xl sm:text-3xl md:text-4xl uppercase tracking-widest'
          } font-extrabold hero-gold-gradient px-2 min-h-[1.5em] flex items-center`}
          style={{
            letterSpacing: isDevanagari ? 0 : undefined,
            textTransform: isDevanagari ? 'none' : undefined,
            lineHeight: 1.35,
            fontFeatureSettings: '"liga" 1, "clig" 1, "kern" 1',
            fontKerning: 'normal',
            textRendering: 'optimizeLegibility',
          }}
        >
          {hasRevealed ? (
            <AnimatedText
              text={heading}
              lang={isDevanagari ? 'mr' : 'en'}
              stagger={0.1}
            />
          ) : (
            <span className="opacity-0">{heading}</span>
          )}
        </h2>

        {/* Right Diamond */}
        <span className="text-[#D4AF37] text-xs sm:text-sm animate-pulse">◆</span>

        {/* Right Fading Gold Line */}
        <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4AF37]/80 to-[#D4AF37]" />
      </div>

      {subheading && (
        <p
          lang={isDevanagari ? 'mr' : undefined}
          className="mt-2 text-sm sm:text-base text-ivory/70 max-w-2xl font-mukta font-light"
          style={{
            letterSpacing: isDevanagari ? 0 : undefined,
            lineHeight: 1.45,
          }}
        >
          {subheading}
        </p>
      )}
    </div>
  );
};
