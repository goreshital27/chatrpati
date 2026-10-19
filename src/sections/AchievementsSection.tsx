import React, { useState, useEffect, useRef } from 'react';
import { ACHIEVEMENTS } from '../data/achievements';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionDivider } from '../components/SectionDivider';
import { ShieldCheck, Anchor, Zap, Crown, HeartHandshake } from 'lucide-react';

const iconList = [
  <ShieldCheck className="w-8 h-8 text-gold" />,
  <Anchor className="w-8 h-8 text-saffron" />,
  <Zap className="w-8 h-8 text-[#FFD670]" />,
  <Crown className="w-8 h-8 text-gold-light" />,
  <HeartHandshake className="w-8 h-8 text-rose-mist" />,
];

export const AchievementsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [counts, setCounts] = useState<number[]>(ACHIEVEMENTS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters smoothly
          const duration = 1800; // ms
          const steps = 60;
          const stepTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            // easeOutQuad
            const easeProgress = progress * (2 - progress);

            setCounts(
              ACHIEVEMENTS.map((item) => Math.floor(item.count * easeProgress))
            );

            if (step >= steps) {
              setCounts(ACHIEVEMENTS.map((item) => item.count));
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative py-24 px-4 sm:px-6 w-full overflow-hidden bg-gradient-to-b from-[#0A0614] via-[#0D0A08] to-[#140A0A]"
    >
      {/* Background Gold Light Streaks */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionDivider
          heading={t.achievements.sectionHeading}
          subheading={t.achievements.subheading}
          badge="ऐतिहासिक आकडेवारी • सुवर्ण अध्याय"
        />

        {/* Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={item.id}
              className="relative rounded-2xl p-[2px] bg-gradient-to-b from-[#D4AF37]/60 via-[#8F6B14]/40 to-[#1A120B] shadow-[0_10px_30px_rgba(0,0,0,0.8)] group hover:scale-104 transition-all duration-300"
            >
              <div className="h-full rounded-[14px] bg-gradient-to-b from-[#18120E] to-[#0D0907] p-6 flex flex-col justify-between text-center">
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto rounded-xl bg-black/40 border border-gold/40 flex items-center justify-center mb-4 group-hover:border-saffron group-hover:shadow-gold-glow transition-all">
                    {iconList[index % iconList.length]}
                  </div>

                  {/* Animated Counter Digit */}
                  <div className="flex items-baseline justify-center font-cinzel text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gold-light to-gold drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                    <span>{counts[index].toLocaleString()}</span>
                    <span className="text-saffron text-2xl ml-0.5">{item.suffix}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-yatra text-lg font-bold text-ivory mt-2 mb-1">
                    {language === 'mr' ? item.title.mr : item.title.en}
                  </h3>
                  <p className="font-mukta text-xs text-saffron font-semibold">
                    {language === 'mr' ? item.subtitle.mr : item.subtitle.en}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs text-ivory/70 font-mukta leading-relaxed">
                    {language === 'mr' ? item.description.mr : item.description.en}
                  </p>
                </div>

                {/* Primary Source Citation */}
                <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-ivory/50 font-mukta">
                  <span className="text-gold/80 block uppercase">संदर्भ (Citation):</span>
                  <span className="italic">{item.citation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
