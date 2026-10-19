import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ChevronDown, Sparkles, Compass } from 'lucide-react';
import { AnimatedText } from '../components/AnimatedText';

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Scroll listener for parallax and fog parting
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle floating ember particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(35, Math.floor(width / 30));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      glow: Math.random() * 10 + 5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 153, 51, ${p.opacity})`;
        ctx.shadowColor = '#FF9933';
        ctx.shadowBlur = p.glow;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Compute parallax offsets
  // Fog parts sideways and fades out completely over first 500px scroll
  const fogProgress = Math.min(1, scrollY / 450);
  const fogOpacity = Math.max(0, 1 - fogProgress * 1.3);
  const fogLeftX = -fogProgress * 250;
  const fogRightX = fogProgress * 250;

  // Background and silhouettes move at different parallax rates
  const skyOffset = scrollY * 0.15;
  const distantHillOffset = scrollY * 0.25;
  const midHillOffset = scrollY * 0.38;
  const foregroundOffset = scrollY * 0.5;


  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#2B100B] via-[#4A1713] to-[#1A0F0A]"
    >
      {/* Layer 1: Sunset Sky Gradient with Glowing Saffron Sun */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${skyOffset}px)`,
          background: 'linear-gradient(180deg, #FF9933 0%, #E2552B 40%, #E8B4B8 75%, #1A0F0A 100%)',
        }}
      >
        {/* Radiant Sunset Sun Disk */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-b from-[#FFF5E6] via-[#FFD29D] to-[#FF9933] opacity-90 blur-[1px] shadow-[0_0_120px_rgba(255,153,51,0.8)]" />
      </div>

      {/* Layer 2: Distant Raigad Citadel & Sahyadri Ridges */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none w-full"
        style={{ transform: `translateY(${distantHillOffset}px)` }}
      >
        <img
          src="/assets/hero/raigad-far.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-cover min-h-[350px] opacity-85"
        />
      </div>

      {/* Layer 3: Birds Soaring in Sky */}
      <div
        className="absolute top-28 inset-x-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <img
          src="/assets/hero/birds.svg"
          alt=""
          aria-hidden="true"
          className="w-full max-w-5xl mx-auto h-auto opacity-75 animate-pulse-slow"
        />
      </div>

      {/* Layer 4: Midground Sahyadri Hills with Fluttering Bhagwa Flags & Spears */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none w-full"
        style={{ transform: `translateY(${midHillOffset}px)` }}
      >
        <img
          src="/assets/hero/mid-ground-hills.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-cover min-h-[420px]"
        />
      </div>

      {/* Layer 5: Foreground Silhouette — Shivaji Maharaj on Steed with Mavle & Flags */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none w-full z-10"
        style={{ transform: `translateY(${foregroundOffset}px)` }}
      >
        <img
          src="/assets/hero/shivaji-foreground.svg"
          alt="Chhatrapati Shivaji Maharaj silhouette on horseback with Mavla warriors"
          className="w-full h-auto object-cover min-h-[480px] sm:min-h-[550px]"
        />
      </div>

      {/* Layer 6: Floating Spark & Ember Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-15"
      />

      {/* Layer 7: Pink-Orange Mist / Fog Layers (Parting & Dispersing on Scroll) */}
      <div
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
        style={{ opacity: fogOpacity }}
      >
        {/* Left Mist Cloud drifting left */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateX(${fogLeftX}px) scale(${1 + fogProgress * 0.3})` }}
        >
          <img
            src="/assets/hero/fog-1.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover mix-blend-screen opacity-90"
          />
        </div>

        {/* Right Mist Cloud drifting right */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateX(${fogRightX}px) scale(${1 + fogProgress * 0.3})` }}
        >
          <img
            src="/assets/hero/fog-2.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover mix-blend-screen opacity-85"
          />
        </div>
      </div>

      {/* Center Cinematic Typography & Hero Title */}
      <div className="relative z-30 flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-36 max-w-5xl mx-auto">
        {/* Top Auspicious Sanskrit Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-gold/50 shadow-gold-glow mb-4 sm:mb-6 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-saffron shrink-0" />
          <span
            lang="mr"
            className="font-tiro text-xs sm:text-sm text-gold whitespace-nowrap"
            style={{
              letterSpacing: 0,
              textTransform: 'none',
              fontFeatureSettings: '"liga" 1, "clig" 1, "kern" 1',
              fontKerning: 'normal',
              textRendering: 'optimizeLegibility',
            }}
          >
            प्रतिपच्चन्द्रलेखेव वर्धिष्णुर्विश्ववन्दिता
          </span>
          <Sparkles className="w-3.5 h-3.5 text-saffron shrink-0" />
        </div>

        {/* Hero Display Title (Whole heading gradient + Word-level reveal animation) */}
        <h1
          lang={language}
          className={`${language === 'mr' ? 'font-tiro font-bold' : 'font-cinzel font-black'} drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)] my-2`}
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
            lineHeight: 1.35,
            textWrap: 'balance',
            letterSpacing: 0,
            textTransform: 'none',
            fontFeatureSettings: '"liga" 1, "clig" 1, "kern" 1',
            fontKerning: 'normal',
            textRendering: 'optimizeLegibility',
          }}
        >
          <AnimatedText
            text={language === 'mr' ? 'छत्रपती शिवाजी महाराज' : 'CHHATRAPATI SHIVAJI MAHARAJ'}
            lang={language}
            mobileStackWords={true}
            stagger={0.14}
            delay={0.1}
            wordClassName="hero-gold-gradient"
          />
        </h1>

        {/* Tagline */}
        <p
          lang={language}
          className="mt-2 sm:mt-4 font-mukta text-sm sm:text-xl md:text-2xl text-ivory/90 font-medium max-w-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          style={{
            letterSpacing: language === 'mr' ? 0 : undefined,
            textTransform: 'none',
            lineHeight: 1.4,
          }}
        >
          {language === 'mr'
            ? 'हिंदवी स्वराज्याचे शिल्पकार • दुर्गपती • छत्रपती'
            : t.hero.tagline}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#itahas"
            className={`group px-6 py-3 rounded-md font-mukta text-xs sm:text-sm font-bold text-[#0D0A08] bg-gradient-to-r from-[#D4AF37] via-[#F7E27A] to-[#D4AF37] hover:from-white hover:to-saffron border border-gold shadow-[0_0_20px_rgba(212,175,55,0.6)] [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)] transition-all duration-300 flex items-center gap-2 ${
              language === 'mr' ? 'tracking-normal normal-case' : 'uppercase tracking-widest'
            }`}
            style={{ letterSpacing: language === 'mr' ? 0 : undefined, textTransform: language === 'mr' ? 'none' : undefined }}
          >
            <Compass className="w-4 h-4 text-charcoal group-hover:rotate-45 transition-transform" />
            <span>{t.hero.exploreBtn}</span>
          </a>

          <a
            href="#gadkille"
            className={`px-6 py-3 rounded-md font-mukta text-xs sm:text-sm font-bold text-ivory bg-black/60 hover:bg-maroon/70 backdrop-blur-sm border border-gold/60 hover:border-saffron shadow-lg [clip-path:polygon(0_0,calc(100%-10px)_0,100%_100%,10px_100%)] transition-all duration-300 ${
              language === 'mr' ? 'tracking-normal normal-case' : 'uppercase tracking-widest'
            }`}
            style={{ letterSpacing: language === 'mr' ? 0 : undefined, textTransform: language === 'mr' ? 'none' : undefined }}
          >
            {t.hero.watchBtn}
          </a>
        </div>
      </div>

      {/* Bottom Scroll-Down Indicator */}
      <div className="relative z-30 pb-6 flex flex-col items-center justify-center text-center pointer-events-none">
        <span
          lang={language}
          className={`text-[11px] font-bold text-ivory/70 font-mukta mb-1 drop-shadow-md ${
            language === 'mr' ? 'tracking-normal normal-case' : 'uppercase tracking-widest'
          }`}
          style={{ letterSpacing: language === 'mr' ? 0 : undefined, textTransform: language === 'mr' ? 'none' : undefined }}
        >
          {t.hero.scrollDown}
        </span>
        <ChevronDown className="w-5 h-5 text-saffron animate-bounce" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

