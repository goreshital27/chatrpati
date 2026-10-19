import React, { useEffect } from 'react';
import { Fort } from '../data/forts';
import { useLanguage } from '../i18n/LanguageContext';
import { X, MapPin, Mountain, Shield, Compass, Landmark } from 'lucide-react';
import { SmartImage } from './SmartImage';

interface FortModalProps {
  fort: Fort | null;
  onClose: () => void;
}

export const FortModal: React.FC<FortModalProps> = ({ fort, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (fort) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fort, onClose]);

  if (!fort) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="fort-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#1C1410] via-[#120D0A] to-[#0A0705] border-2 border-gold/70 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(212,175,55,0.3)] p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.forts.closeModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-saffron text-ivory hover:text-charcoal transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-saffron"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gold/30 pb-4 mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-saffron/20 border border-saffron/50 text-saffron">
                {fort.category.toUpperCase()} FORT
              </span>
              <span className="text-xs text-gold/80 font-mukta">
                {fort.statRibbon.labelEn}: {fort.statRibbon.value}
              </span>
            </div>
            <h2 id="fort-modal-title" className="font-cinzel text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory to-gold">
              {fort.name}
            </h2>
            <p
              lang="mr"
              className="font-yatra text-lg sm:text-xl text-saffron mt-0.5"
              style={{ letterSpacing: 0, textTransform: 'none', lineHeight: 1.35 }}
            >
              {fort.nameMr}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-ivory/80 font-mukta">
            <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Mountain className="w-3.5 h-3.5 text-gold" />
              {fort.elevation}
            </span>
            <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-saffron" />
              {language === 'mr' ? fort.districtMr : fort.district}
            </span>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column: Image & Mini Map */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-gold/40 shadow-inner">
              <SmartImage
                src={fort.imagePath}
                alt={fort.name}
                fallbackType="fort"
                name={fort.name}
                subtitle={fort.nameMr}
                aspectRatio="16/9"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 pointer-events-none">
                <span className="text-xs text-ivory/90 font-mukta">
                  {language === 'mr' ? fort.summary.mr : fort.summary.en}
                </span>
              </div>
            </div>

            {/* Stylized Mini Map Compass Card */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-saffron/15 text-saffron">
                  <Compass className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ivory uppercase tracking-wider font-mukta">
                    {language === 'mr' ? 'भौगोलिक स्थान व नकाश' : 'Coordinates & Location'}
                  </p>
                  <p className="text-xs text-gold font-mono">
                    {fort.coordinates.lat}, {fort.coordinates.lng}
                  </p>
                </div>
              </div>
              <div className="text-right text-[11px] text-ivory/60 font-mukta">
                {language === 'mr' ? 'सह्याद्री पर्वतरांग' : 'Western Ghats Ridge'}
              </div>
            </div>
          </div>

          {/* Right Column: Historical Narrative & Highlights */}
          <div className="flex flex-col gap-4 text-left">
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold text-saffron uppercase tracking-widest font-mukta mb-2">
                <Landmark className="w-4 h-4" />
                <span>{language === 'mr' ? 'ऐतिहासिक महत्त्व' : 'Historical Background'}</span>
              </h4>
              <p className="text-sm text-ivory/90 font-mukta leading-relaxed">
                {language === 'mr' ? fort.history.mr : fort.history.en}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="pt-2">
              <h4 className="flex items-center gap-2 text-sm font-bold text-gold uppercase tracking-widest font-mukta mb-2">
                <Shield className="w-4 h-4" />
                <span>{t.forts.features}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-ivory/80 font-mukta">
                {(language === 'mr' ? fort.architecturalHighlights.mr : fort.architecturalHighlights.en).map(
                  (feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-saffron">◆</span>
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Battles */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-rose-mist uppercase tracking-widest font-mukta mb-1.5">
                {t.forts.battles}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(language === 'mr' ? fort.keyBattles.mr : fort.keyBattles.en).map((battle, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-blood/20 border border-blood/50 text-[#FFD6D6]"
                  >
                    {battle}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

