import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/timeline';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionDivider } from '../components/SectionDivider';
import { Footer } from '../sections/Footer';
import { Calendar, MapPin, ArrowLeft, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TimelinePage: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const tags = ['all', 'GENESIS', 'SWARAJYA OATH', 'VICTORY', 'VALOR', 'ESCAPE', 'CORONATION'];

  const filteredEvents = TIMELINE_EVENTS.filter((e) => {
    if (activeFilter === 'all') return true;
    return e.tag.en === activeFilter;
  });

  return (
    <div className="relative min-h-screen pt-28 bg-[#1A0F0A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron hover:text-white transition-colors mb-6 font-mukta"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'mr' ? '← मुख्यपृष्ठावर परत जा' : '← Back to Home'}</span>
        </Link>

        <SectionDivider
          heading={language === 'mr' ? 'अखंड इतिहास कालपट' : 'COMPLETE CHRONOLOGICAL TIMELINE'}
          subheading={
            language === 'mr'
              ? '१६३० ते १६८०: शिवनेरीच्या जन्मापासून ते महासमाधीपर्यंतच्या ऐतिहासिक घटनांची शृंखला'
              : 'Verified timeline of milestone events from 1630 to 1680 with primary source citations'
          }
          badge="१६३० - १६८०"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase font-mukta transition-all ${
                activeFilter === tag
                  ? 'bg-gradient-to-r from-saffron to-gold text-charcoal font-black shadow-gold-glow'
                  : 'bg-white/5 border border-white/10 text-ivory/70 hover:border-gold hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Vertical Connected Journey Timeline */}
        <div className="relative border-l-2 border-gold/40 pl-6 sm:pl-10 ml-4 sm:ml-8 space-y-12">
          {filteredEvents.map((event) => (
            <div key={event.year} className="relative group">
              {/* Gold Node Bullet on Timeline Track */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-saffron to-gold border-2 border-charcoal shadow-gold-glow group-hover:scale-125 transition-transform" />

              {/* Event Card */}
              <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#24130C] to-[#120804] border border-gold/40 shadow-xl text-left">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-cinzel text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-saffron">
                      {event.year}
                    </span>
                    <span className="text-xs font-mukta text-ivory/60 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-saffron" />
                      {language === 'mr' ? event.dateStr.mr : event.dateStr.en}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-saffron/15 text-saffron border border-saffron/40 font-mukta">
                    {language === 'mr' ? event.tag.mr : event.tag.en}
                  </span>
                </div>

                <h3 className="font-yatra text-2xl font-bold text-ivory mt-1 mb-2">
                  {language === 'mr' ? event.title.mr : event.title.en}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-gold/80 font-mukta mb-4">
                  <MapPin className="w-3.5 h-3.5 text-saffron" />
                  <span>{language === 'mr' ? event.location.mr : event.location.en}</span>
                </div>

                <p className="text-sm text-ivory/90 font-mukta leading-relaxed mb-4">
                  {language === 'mr' ? event.detailedHistory.mr : event.detailedHistory.en}
                </p>

                <div className="p-3 rounded-lg bg-black/40 border border-white/10 flex items-start gap-2 text-xs font-mukta">
                  <Bookmark className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-saffron block">
                      {language === 'mr' ? 'ऐतिहासिक महत्त्व:' : 'Historical Significance:'}
                    </span>
                    <span className="text-ivory/80">
                      {language === 'mr' ? event.significance.mr : event.significance.en}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

