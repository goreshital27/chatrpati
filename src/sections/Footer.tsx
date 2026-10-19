import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0D0A08] text-ivory border-t border-gold/40 overflow-hidden pt-16 pb-12 px-4 sm:px-8">
      {/* Rajmudra Background Watermark */}
      <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none w-96 h-96">
        <img
          src="/assets/ui/rajmudra.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Top Gold Crest Ornament */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <Shield className="w-6 h-6 text-gold" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Salutation */}
        <h3 className="font-yatra text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold-light to-saffron mb-3 tracking-wide">
          {t.footer.salutation}
        </h3>

        <p className="font-mukta text-xs sm:text-sm text-ivory/70 max-w-xl mb-8 leading-relaxed">
          {t.footer.rights}
        </p>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-widest text-ivory/80 font-mukta mb-8">
          <a href="#hero" className="hover:text-saffron transition-colors">
            {language === 'mr' ? 'मुखपृष्ठ' : 'HOME'}
          </a>
          <a href="#itahas" className="hover:text-saffron transition-colors">
            {t.nav.itahas}
          </a>
          <a href="#gadkille" className="hover:text-saffron transition-colors">
            {t.nav.gadkille}
          </a>
          <a href="#ashtapradhan" className="hover:text-saffron transition-colors">
            {t.nav.ashtapradhan}
          </a>
          <a href="#mavle" className="hover:text-saffron transition-colors">
            {t.nav.mohima}
          </a>
          <Link to="/timeline" className="hover:text-gold transition-colors">
            {t.nav.timelinePage}
          </Link>
          <Link to="/forts" className="hover:text-gold transition-colors">
            {t.nav.fortsPage}
          </Link>
          <Link to="/ashtapradhan" className="hover:text-gold transition-colors">
            {t.nav.councilPage}
          </Link>
        </div>

        {/* Primary Citations & Historical Integrity */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-3xl text-left sm:text-center text-[11px] text-ivory/60 font-mukta mb-8 leading-relaxed">
          <p>{t.footer.sources}</p>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-saffron text-ivory hover:text-charcoal border border-gold/40 transition-all text-xs font-bold font-mukta tracking-wider"
        >
          <span>{t.footer.backToTop}</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 w-full text-center text-[10px] text-ivory/40 font-mukta">
          <span>
            © {new Date().getFullYear()} Hindavi Swarajya Tribute • Built with Vite, React, GSAP & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
};

