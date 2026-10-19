import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Countdown } from '../components/Countdown';
import { Flame, Shield, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BigCtaSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="swarajya"
      className="relative py-28 px-4 sm:px-6 w-full overflow-hidden bg-gradient-to-b from-[#2E0707] via-[#5C0F0F] to-[#1C0505] text-center"
    >
      {/* Halftone Grunge Texture Overlay with Radial Vignette */}
      <div className="absolute inset-0 halftone-blood opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0D0404_95%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Flame / Torch Icon with glowing aura */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-t from-[#FF9933] to-[#E2552B] p-0.5 shadow-[0_0_40px_rgba(255,153,51,0.8)] flex items-center justify-center mb-6 animate-bounce">
          <div className="w-full h-full rounded-full bg-[#1A0505] flex items-center justify-center">
            <Flame className="w-8 h-8 text-[#FFD670] fill-saffron" />
          </div>
        </div>

        {/* Huge Metallic Gradient Display Title "स्वराज्य" */}
        <h2
          lang={language}
          className={`${
            language === 'mr' ? 'font-yatra tracking-normal' : 'font-cinzel tracking-wider uppercase'
          } text-6xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F5ECD7] to-[#D4AF37] drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] my-2`}
          style={{
            letterSpacing: language === 'mr' ? 0 : undefined,
            textTransform: language === 'mr' ? 'none' : undefined,
            lineHeight: 1.35,
          }}
        >
          {t.cta.title}
        </h2>

        {/* Tagline */}
        <p className="mt-3 text-base sm:text-xl text-[#F5ECD7]/90 font-mukta max-w-2xl font-light leading-relaxed">
          {t.cta.tagline}
        </p>

        {/* Countdown to Shivrajyabhishek Din Widget */}
        <div className="w-full my-8">
          <Countdown />
        </div>

        {/* White Rectangular Button "JOIN THE LEGACY" / "EXPLORE THE EMPIRE" */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/timeline"
            className={`group px-10 py-4 text-sm sm:text-base font-extrabold text-[#0D0A08] bg-white hover:bg-gradient-to-r hover:from-white hover:to-saffron transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.4)] flex items-center gap-3 font-mukta ${
              language === 'mr' ? 'tracking-normal normal-case' : 'uppercase tracking-widest'
            }`}
            style={{ letterSpacing: language === 'mr' ? 0 : undefined, textTransform: language === 'mr' ? 'none' : undefined }}
          >
            <Shield className="w-5 h-5 text-maroon group-hover:scale-110 transition-transform" />
            <span>{t.cta.joinBtn}</span>
          </Link>

          <Link
            to="/forts"
            className={`px-8 py-4 text-sm sm:text-base font-extrabold text-ivory bg-black/60 hover:bg-black/80 border border-gold/70 hover:border-saffron transition-all duration-300 shadow-lg flex items-center gap-2 font-mukta ${
              language === 'mr' ? 'tracking-normal normal-case' : 'uppercase tracking-widest'
            }`}
            style={{ letterSpacing: language === 'mr' ? 0 : undefined, textTransform: language === 'mr' ? 'none' : undefined }}
          >
            <Compass className="w-5 h-5 text-gold" />
            <span>{language === 'mr' ? 'दुर्गदर्शन करा' : 'EXPLORE FORTS'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

