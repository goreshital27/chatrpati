import React, { useState, useEffect } from 'react';
import { HISTORICAL_QUOTES, HistoricalQuote } from '../data/quotes';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionDivider } from '../components/SectionDivider';
import { Quote, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export const QuotesSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HISTORICAL_QUOTES.length);
    }, 6000); // 6 seconds per quote

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeQuote: HistoricalQuote = HISTORICAL_QUOTES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HISTORICAL_QUOTES.length) % HISTORICAL_QUOTES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HISTORICAL_QUOTES.length);
  };

  return (
    <section
      id="quotes"
      className="relative py-24 px-4 sm:px-6 w-full max-w-5xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <SectionDivider
        heading={t.quotes.sectionHeading}
        subheading={t.quotes.subheading}
        badge="इतिहासाची साक्ष • अमर विचार"
      />

      {/* Main Quote Showcase Carousel Card */}
      <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-gold via-saffron to-maroon shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.2)]">
        <div className="rounded-[22px] bg-gradient-to-b from-[#180F0D] via-[#120B09] to-[#0A0605] p-8 sm:p-14 text-center relative overflow-hidden">
          {/* Subtle Watermark Quote Mark */}
          <div className="absolute top-4 left-6 opacity-10 pointer-events-none text-gold">
            <Quote className="w-24 h-24" />
          </div>

          {/* Quote Body */}
          <div className="relative z-10 min-h-[160px] flex flex-col justify-center items-center">
            <p className="font-yatra text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory to-gold leading-relaxed font-normal">
              "{language === 'mr' ? activeQuote.quoteMr : activeQuote.quoteEn}"
            </p>

            {/* Author */}
            <h4 className="mt-6 font-cinzel text-base sm:text-lg font-bold text-saffron tracking-wider">
              — {language === 'mr' ? activeQuote.authorMr : activeQuote.author}
            </h4>

            {/* Source & Historical Context */}
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs text-ivory/70 font-mukta">
              <BookOpen className="w-3.5 h-3.5 text-gold" />
              <span>{activeQuote.source}</span>
            </div>
            <p className="mt-1 text-[11px] text-ivory/50 font-mukta italic">
              {activeQuote.context}
            </p>
          </div>

          {/* Controls: Prev / Next & Dots */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
            <button
              onClick={handlePrev}
              aria-label="Previous historical quote"
              className="p-2 rounded-full bg-white/5 hover:bg-saffron text-ivory hover:text-charcoal transition-colors border border-gold/30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {HISTORICAL_QUOTES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to quote ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-saffron' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next historical quote"
              className="p-2 rounded-full bg-white/5 hover:bg-saffron text-ivory hover:text-charcoal transition-colors border border-gold/30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

