import React, { useRef, useState } from 'react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/timeline';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionDivider } from '../components/SectionDivider';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TimelineSection: React.FC = () => {
  const { language, t } = useLanguage();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(TIMELINE_EVENTS[0]);
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const scrollTrack = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = 360;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleSelectEvent = (event: TimelineEvent, index: number) => {
    setSelectedEvent(event);
    setActiveYearIndex(index);
  };

  return (
    <section id="itahas" className="relative py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto">
      <SectionDivider
        heading={t.timeline.sectionHeading}
        subheading={t.timeline.subheading}
        badge="१६३० - १६८० • अमर कालपट"
      />

      {/* Timeline Controls & Year Ticks Navigation */}
      <div className="relative mb-8 flex items-center justify-between border-b border-gold/30 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 pr-4">
          {TIMELINE_EVENTS.map((event, idx) => (
            <button
              key={event.year}
              onClick={() => handleSelectEvent(event, idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold font-mukta transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 ${
                activeYearIndex === idx
                  ? 'bg-gradient-to-r from-saffron to-gold text-charcoal shadow-gold-glow scale-105'
                  : 'bg-white/5 text-ivory/70 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span>{event.year}</span>
              {activeYearIndex === idx && <Sparkles className="w-3 h-3 inline" />}
            </button>
          ))}
        </div>

        {/* Arrow Scroll Controls for Horizontal Timeline */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scrollTrack('left')}
            aria-label="Scroll timeline left"
            className="p-2 rounded-full bg-white/5 hover:bg-saffron text-ivory hover:text-charcoal border border-gold/40 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTrack('right')}
            aria-label="Scroll timeline right"
            className="p-2 rounded-full bg-white/5 hover:bg-saffron text-ivory hover:text-charcoal border border-gold/40 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track Container for Desktop & Swipe on Tablet */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TIMELINE_EVENTS.map((event, index) => {
          const isSelected = activeYearIndex === index;

          return (
            <div
              key={event.year}
              onClick={() => handleSelectEvent(event, index)}
              className={`snap-center shrink-0 w-[300px] sm:w-[360px] cursor-pointer rounded-2xl p-[2px] transition-all duration-500 ${
                isSelected
                  ? 'scale-102 shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.4)]'
                  : 'hover:scale-101 opacity-85 hover:opacity-100 shadow-lg'
              }`}
              style={{
                background: isSelected
                  ? 'linear-gradient(135deg, #FF9933 0%, #D4AF37 40%, #FFF2D6 60%, #8F6B14 100%)'
                  : 'linear-gradient(135deg, #4A2814 0%, #8F6B14 50%, #2A170C 100%)',
              }}
            >
              <div className="h-full rounded-[14px] bg-[#140E0C] p-6 flex flex-col justify-between">
                <div>
                  {/* Card Header with Year & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-cinzel text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-light to-saffron">
                      {event.year}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-saffron/15 border border-saffron/40 text-saffron font-mukta">
                      {language === 'mr' ? event.tag.mr : event.tag.en}
                    </span>
                  </div>

                  {/* Title & Location */}
                  <h3 className="font-yatra text-lg sm:text-xl font-bold text-ivory mb-1">
                    {language === 'mr' ? event.title.mr : event.title.en}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-gold/80 font-mukta mb-3">
                    <MapPin className="w-3.5 h-3.5 text-saffron" />
                    <span>{language === 'mr' ? event.location.mr : event.location.en}</span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-ivory/80 font-mukta leading-relaxed line-clamp-4">
                    {language === 'mr' ? event.summary.mr : event.summary.en}
                  </p>
                </div>

                {/* Bottom Ribbon / Date */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mukta">
                  <span className="text-ivory/60 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-saffron" />
                    {language === 'mr' ? event.dateStr.mr : event.dateStr.en}
                  </span>
                  <span className="text-saffron font-bold text-[11px] group-hover:underline">
                    {language === 'mr' ? 'तपशील वाचा →' : 'Read details →'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Milestone Deep-Dive Feature Box */}
      <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1C120D] to-[#0F0A08] border border-gold/50 shadow-2xl flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-cinzel text-3xl font-extrabold text-saffron">
              {selectedEvent.year}
            </span>
            <span className="text-xs text-ivory/60 font-mukta">
              • {language === 'mr' ? selectedEvent.dateStr.mr : selectedEvent.dateStr.en}
            </span>
          </div>

          <h3 className="font-yatra text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory to-gold-light mb-2">
            {language === 'mr' ? selectedEvent.title.mr : selectedEvent.title.en}
          </h3>

          <p className="text-sm sm:text-base text-ivory/90 font-mukta leading-relaxed mb-4">
            {language === 'mr' ? selectedEvent.detailedHistory.mr : selectedEvent.detailedHistory.en}
          </p>

          <div className="p-3 rounded-lg bg-black/40 border border-gold/30">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron font-mukta block mb-0.5">
              {language === 'mr' ? 'ऐतिहासिक महत्त्व व परिणाम' : 'Strategic Significance & Impact'}
            </span>
            <p className="text-xs sm:text-sm text-ivory/80 font-mukta">
              {language === 'mr' ? selectedEvent.significance.mr : selectedEvent.significance.en}
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto flex md:flex-col gap-3 self-center md:self-start">
          <Link
            to="/timeline"
            className="w-full text-center px-6 py-3 rounded-md font-mukta text-xs font-bold tracking-widest uppercase text-charcoal bg-gradient-to-r from-gold via-gold-light to-gold hover:from-white hover:to-saffron border border-gold shadow-gold-glow transition-all"
          >
            {t.timeline.viewAllTimeline}
          </Link>
        </div>
      </div>
    </section>
  );
};

