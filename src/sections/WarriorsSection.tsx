import React, { useState } from 'react';
import { WARRIORS } from '../data/warriors';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionDivider } from '../components/SectionDivider';
import { Shield, Sparkles, Swords, Quote } from 'lucide-react';
import { SmartImage } from '../components/SmartImage';

export const WarriorsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="mavle"
      className="relative py-24 px-4 sm:px-6 w-full overflow-hidden bg-gradient-to-b from-[#1F0606] via-[#3B0C0C] to-[#140404]"
    >
      {/* Halftone Grunge Texture Overlay */}
      <div className="absolute inset-0 halftone-blood opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionDivider
          heading={t.warriors.sectionHeading}
          subheading={t.warriors.subheading}
          badge="रक्ताचे शिंपण • अढळ निष्ठा"
        />

        <p className="text-center text-xs text-saffron/90 font-mukta -mt-8 mb-12 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.warriors.flipPrompt}</span>
        </p>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WARRIORS.map((warrior) => {
            const isFlipped = !!flippedCards[warrior.id];

            return (
              <div
                key={warrior.id}
                onClick={() => toggleFlip(warrior.id)}
                className="group relative h-[420px] w-full [perspective:1000px] cursor-pointer"
              >
                {/* 3D Inner Card flipper */}
                <div
                  className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform ${
                    isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
                  }`}
                >
                  {/* ================= FRONT SIDE ================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl p-[2px] bg-gradient-to-b from-[#D4AF37] via-[#8B1A1A] to-[#4A0D0D] shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                    <div className="w-full h-full bg-[#120606] rounded-[14px] overflow-hidden flex flex-col justify-between p-5 relative">
                      {/* Top Battle Badge */}
                      <div className="flex items-center justify-between z-10">
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blood/80 text-white border border-[#D4AF37]/50 shadow-md font-mukta flex items-center gap-1">
                          <Swords className="w-3 h-3 text-[#FFD670]" />
                          <span>{language === 'mr' ? warrior.battleBadgeMr : warrior.battleBadge}</span>
                        </span>
                        <Shield className="w-5 h-5 text-gold/70" />
                      </div>

                      {/* Silhouette Portrait Art with SmartImage 4/5 fallback */}
                      <div className="relative my-auto flex items-center justify-center w-full">
                        <SmartImage
                          src={warrior.imagePath}
                          alt={warrior.name}
                          fallbackType="warrior"
                          name={language === 'mr' ? warrior.nameMr : warrior.name}
                          subtitle={language === 'mr' ? warrior.roleTitle.mr : warrior.roleTitle.en}
                          aspectRatio="4/5"
                          containerClassName="max-h-[240px]"
                          className="w-full h-full object-cover filter drop-shadow-[0_0_15px_rgba(255,153,51,0.35)]"
                        />
                      </div>

                      {/* Name Plate & Role */}
                      <div className="pt-3 border-t border-gold/30 text-center">
                        <h3
                          lang={language === 'mr' ? 'mr' : undefined}
                          className="font-yatra text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory to-gold"
                          style={{ letterSpacing: language === 'mr' ? 0 : undefined, textTransform: language === 'mr' ? 'none' : undefined, lineHeight: 1.35 }}
                        >
                          {language === 'mr' ? warrior.nameMr : warrior.name}
                        </h3>
                        <p className="font-mukta text-xs text-saffron font-semibold mt-0.5">
                          {language === 'mr' ? warrior.roleTitle.mr : warrior.roleTitle.en}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ================= BACK SIDE ================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl p-[2px] bg-gradient-to-b from-[#FF9933] via-[#D4AF37] to-[#8B1A1A] shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(255,153,51,0.3)]">
                    <div className="w-full h-full bg-[#1A0707] rounded-[14px] p-6 flex flex-col justify-between text-left overflow-y-auto">
                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gold/30 pb-2 mb-3">
                          <h4
                            lang={language === 'mr' ? 'mr' : undefined}
                            className="font-yatra text-lg font-bold text-gold"
                            style={{ letterSpacing: language === 'mr' ? 0 : undefined, textTransform: language === 'mr' ? 'none' : undefined, lineHeight: 1.35 }}
                          >
                            {language === 'mr' ? warrior.nameMr : warrior.name}
                          </h4>
                          <span
                            lang="mr"
                            className="text-[10px] text-ivory/60 font-mukta"
                            style={{ letterSpacing: 0, textTransform: 'none' }}
                          >
                            शौर्यगाथा
                          </span>
                        </div>

                        {/* One-Line Legend */}
                        <div className="mb-3">
                          <span
                            lang={language === 'mr' ? 'mr' : undefined}
                            className={`text-[11px] font-bold text-saffron font-mukta block mb-1 ${
                              language === 'mr' ? 'tracking-normal' : 'uppercase tracking-widest'
                            }`}
                            style={{ letterSpacing: language === 'mr' ? 0 : undefined, textTransform: language === 'mr' ? 'none' : undefined }}
                          >
                            {language === 'mr' ? 'अमर ब्रीद व पराक्रम' : 'Legendary Creed'}
                          </span>
                          <p className="text-xs sm:text-sm text-ivory font-mukta leading-relaxed italic">
                            "{language === 'mr' ? warrior.legend.mr : warrior.legend.en}"
                          </p>
                        </div>

                        {/* Historic Deed */}
                        <div className="mb-3">
                          <span className="text-[11px] font-bold text-gold uppercase tracking-widest font-mukta block mb-1">
                            {language === 'mr' ? 'ऐतिहासिक कामगिरी' : 'Historic Deed'}
                          </span>
                          <p className="text-xs text-ivory/80 font-mukta leading-relaxed">
                            {language === 'mr' ? warrior.historicDeed.mr : warrior.historicDeed.en}
                          </p>
                        </div>
                      </div>

                      {/* Famous Quote / Motto if available */}
                      {warrior.quoteOrMotto && (
                        <div className="pt-2 border-t border-white/10 flex items-start gap-2 text-xs text-saffron/90 font-mukta">
                          <Quote className="w-3.5 h-3.5 shrink-0 text-gold" />
                          <span className="line-clamp-2">
                            {language === 'mr' ? warrior.quoteOrMotto.mr : warrior.quoteOrMotto.en}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
