import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { AudioController } from './AudioController';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navItems = [
    { id: 'itahas', label: t.nav.itahas, href: '#itahas', route: '/timeline', isRoute: false },
    { id: 'gadkille', label: t.nav.gadkille, href: '#gadkille', route: '/forts', isRoute: false },
    { id: 'ashtapradhan', label: t.nav.ashtapradhan, href: '#ashtapradhan', route: '/ashtapradhan', hasBadge: true, isRoute: false },
    { id: 'mohima', label: t.nav.mohima, href: '#mavle', route: '/#mavle', isRoute: false },
    { id: 'varsa', label: t.nav.varsa, href: '#achievements', route: '/#achievements', isRoute: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = ['hero', 'itahas', 'gadkille', 'mavle', 'ashtapradhan', 'achievements', 'navy', 'quotes', 'swarajya'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Centered Pill Navbar */}
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${
          scrolled ? 'translate-y-0' : 'translate-y-1'
        }`}
      >
        <div
          className={`relative max-w-4xl w-full flex items-center justify-between px-4 sm:px-6 py-2.5 transition-all duration-500 rounded-2xl md:rounded-full ${
            scrolled
              ? 'bg-[#14100E]/90 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.25)]'
              : 'bg-gradient-to-b from-[#2B2724]/90 via-[#1A1614]/90 to-[#0F0D0C]/90 backdrop-blur-sm border border-[#8F6B14]/60 shadow-[0_8px_30px_rgba(0,0,0,0.7)]'
          }`}
        >
          {/* Subtle Top Metallic Highlight Line */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#F7E27A]/60 to-transparent pointer-events-none" />

          {/* Logo / Emblems */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-saffron rounded-full pr-2"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold/70 group-hover:border-saffron transition-colors duration-300 shadow-inner">
              <img
                src="/assets/ui/rajmudra.svg"
                alt="Rajmudra Seal"
                className="w-full h-full object-cover p-0.5 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-yatra text-sm sm:text-base font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold-light to-saffron group-hover:from-white group-hover:to-gold transition-colors">
                {language === 'mr' ? 'शिवराज्य' : 'SWARAJYA'}
              </span>
              <span className="text-[10px] text-ivory/60 font-mukta uppercase tracking-widest hidden sm:block">
                १६७४ • हिंदवी स्वराज्य
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id ||
                (item.id === 'itahas' && activeSection === 'itahas') ||
                (item.id === 'mohima' && activeSection === 'mavle') ||
                (item.id === 'varsa' && activeSection === 'achievements');

              return (
                <div key={item.id} className="relative group">
                  {/* Glowing Badge for Ashtapradhan */}
                  {item.hasBadge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-gradient-to-r from-[#D4AF37] to-[#FF9933] text-[#0D0A08] text-[9px] font-black px-1.5 py-0.2 rounded-full tracking-wider animate-bounce shadow-gold-glow">
                      <Sparkles className="w-2.5 h-2.5 inline" />
                      {t.nav.newBadge}
                    </span>
                  )}

                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative block px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-300 rounded-md uppercase font-mukta ${
                      isActive
                        ? 'text-saffron font-bold'
                        : 'text-ivory/80 hover:text-white'
                    }`}
                  >
                    {item.label}

                    {/* Underline glow */}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-saffron via-gold to-saffron shadow-[0_0_10px_#FF9933]" />
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons: Audio, Language Toggle, Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ambient Sound Controller */}
            <AudioController />

            {/* Language Switcher Pill (Bilingual Marathi / English) */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language between Marathi and English"
              title="मराठी / English"
              className="relative px-2.5 py-1 text-xs font-bold rounded-full bg-[#201A16] border border-gold/40 hover:border-gold text-ivory hover:text-saffron transition-all duration-300 flex items-center gap-1 shadow-inner focus:outline-none focus:ring-2 focus:ring-saffron"
            >
              <span className={language === 'mr' ? 'text-saffron font-black' : 'text-ivory/50'}>
                मराठी
              </span>
              <span className="text-gold/50">/</span>
              <span className={language === 'en' ? 'text-saffron font-black' : 'text-ivory/50'}>
                EN
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-ivory/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-saffron"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-saffron" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Full-Screen Saffron-to-Maroon Gradient) */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E0B0B]/95 via-[#1F0808]/95 to-[#0D0A08]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 pt-24 overflow-y-auto">
          {/* Decorative Rajmudra Background Watermark */}
          <div className="absolute right-0 bottom-10 opacity-5 pointer-events-none w-80 h-80">
            <img src="/assets/ui/rajmudra.svg" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-6">
            <div className="border-b border-gold/30 pb-4 flex items-center justify-between">
              <div>
                <h3 className="font-yatra text-xl text-saffron">छत्रपती शिवाजी महाराज</h3>
                <p className="font-mukta text-xs text-ivory/70 tracking-widest uppercase">
                  हिंदवी स्वराज्य महामंदिर
                </p>
              </div>
              <Shield className="w-6 h-6 text-gold" />
            </div>

            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="group flex items-center justify-between text-2xl font-bold font-yatra text-ivory hover:text-saffron transition-colors py-2 border-b border-white/5"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold/50 group-hover:bg-saffron transition-colors" />
                    {item.label}
                  </span>
                  {item.hasBadge && (
                    <span className="bg-saffron text-charcoal text-xs font-mukta font-extrabold px-2 py-0.5 rounded-full">
                      {t.nav.newBadge}
                    </span>
                  )}
                </a>
              ))}

              {/* Dedicated Multi-page links */}
              <div className="pt-4 grid grid-cols-3 gap-2">
                <Link
                  to="/timeline"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center p-2 rounded-lg bg-white/5 border border-gold/30 text-xs font-semibold text-ivory hover:text-saffron hover:border-saffron transition-colors font-mukta"
                >
                  {t.nav.timelinePage}
                </Link>
                <Link
                  to="/forts"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center p-2 rounded-lg bg-white/5 border border-gold/30 text-xs font-semibold text-ivory hover:text-saffron hover:border-saffron transition-colors font-mukta"
                >
                  {t.nav.fortsPage}
                </Link>
                <Link
                  to="/ashtapradhan"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center p-2 rounded-lg bg-white/5 border border-gold/30 text-xs font-semibold text-ivory hover:text-saffron hover:border-saffron transition-colors font-mukta"
                >
                  {t.nav.councilPage}
                </Link>
              </div>
            </nav>
          </div>

          <div className="pt-8 border-t border-gold/20 flex flex-col gap-3 text-center">
            <p className="font-yatra text-gold text-lg">॥ जय भवानी • जय शिवाजी ॥</p>
            <p className="text-xs text-ivory/50 font-mukta">
              ३५० वर्षे सार्वभौम राज्याभिषेक • १६७४ - २०२४
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

