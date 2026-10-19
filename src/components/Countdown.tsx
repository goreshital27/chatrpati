import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { useLanguage } from '../i18n/LanguageContext';
import { Sparkles, Calendar, ShieldCheck } from 'lucide-react';

export const Countdown: React.FC = () => {
  const { language, t } = useLanguage();
  const isMarathi = language === 'mr';
  // Shivrajyabhishek Din is 6 June (month index 5)
  const timeLeft = useCountdown(5, 6);

  const digitBoxes = [
    { label: t.cta.days, value: timeLeft.days },
    { label: t.cta.hours, value: timeLeft.hours },
    { label: t.cta.mins, value: timeLeft.minutes },
    { label: t.cta.secs, value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1C0F0F]/80 via-[#140A0A]/90 to-[#0A0505]/95 backdrop-blur-md border border-[#8B1A1A]/60 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(139,26,26,0.25)]">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <div
          lang={isMarathi ? 'mr' : undefined}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1A1A]/30 border border-[#8B1A1A] text-saffron text-xs font-bold mb-2 font-mukta"
          style={{ letterSpacing: isMarathi ? 0 : undefined, textTransform: isMarathi ? 'none' : undefined }}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{isMarathi ? '६ जून • भव्य सोहळा' : '6 JUNE • CORONATION FESTIVAL'}</span>
        </div>
        <h3
          lang={language}
          className={`${
            isMarathi ? 'font-yatra text-2xl sm:text-4xl' : 'font-cinzel text-xl sm:text-3xl uppercase tracking-widest'
          } font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold-light to-saffron`}
          style={{
            letterSpacing: isMarathi ? 0 : undefined,
            textTransform: isMarathi ? 'none' : undefined,
            lineHeight: 1.35,
          }}
        >
          {t.cta.countdownTitle}
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Glowing 4 Digit Boxes */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full lg:w-3/5">
          {digitBoxes.map((box, idx) => (
            <div
              key={idx}
              className="relative group flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl bg-gradient-to-b from-[#241212]/90 to-[#0D0505]/95 border border-[#D4AF37]/40 shadow-[inset_0_0_15px_rgba(212,175,55,0.15)] group-hover:border-saffron transition-all duration-300"
            >
              <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gold-light to-gold drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                {String(box.value).padStart(2, '0')}
              </span>
              <span
                lang={language}
                className={`mt-1 text-[10px] sm:text-xs font-bold text-ivory/70 font-mukta ${
                  isMarathi ? 'tracking-normal' : 'tracking-widest uppercase'
                }`}
                style={{
                  letterSpacing: isMarathi ? 0 : undefined,
                  textTransform: isMarathi ? 'none' : undefined,
                }}
              >
                {box.label}
              </span>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-saffron/60 group-hover:bg-saffron group-hover:animate-ping" />
            </div>
          ))}
        </div>

        {/* 3 Glass-morphism Highlight Pills */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-2/5">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/40 transition-colors">
            <div className="p-2 rounded-lg bg-saffron/15 text-saffron">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-bold text-ivory font-mukta">{t.cta.pill1}</p>
              <p className="text-[10px] text-ivory/50">६ जून १६७४ ते आजतागायत</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/40 transition-colors">
            <div className="p-2 rounded-lg bg-gold/15 text-gold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-bold text-ivory font-mukta">{t.cta.pill2}</p>
              <p className="text-[10px] text-ivory/50">सह्याद्रीचे दुर्गम संरक्षक</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/40 transition-colors">
            <div className="p-2 rounded-lg bg-blood/25 text-[#FF7070]">
              <span className="text-sm font-black">👑</span>
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-bold text-ivory font-mukta">{t.cta.pill3}</p>
              <p className="text-[10px] text-ivory/50">रयतेचे सार्वभौम छत्रपती</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

