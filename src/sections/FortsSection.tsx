import React, { useState } from 'react';
import { FORTS, Fort, FortCategory } from '../data/forts';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionDivider } from '../components/SectionDivider';
import { OrnateCard } from '../components/OrnateCard';
import { FortModal } from '../components/FortModal';
import { Mountain, Waves, Landmark, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FortsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FortCategory>('all');
  const [selectedFort, setSelectedFort] = useState<Fort | null>(null);

  const filteredForts = FORTS.filter((fort) => {
    if (activeCategory === 'all') return true;
    return fort.category === activeCategory;
  });

  const filterTabs: { id: FortCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: t.forts.all, icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'hill', label: t.forts.hill, icon: <Mountain className="w-3.5 h-3.5" /> },
    { id: 'sea', label: t.forts.sea, icon: <Waves className="w-3.5 h-3.5" /> },
    { id: 'land', label: t.forts.land, icon: <Landmark className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="gadkille" className="relative py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto">
      <SectionDivider
        heading={t.forts.sectionHeading}
        subheading={t.forts.subheading}
        badge="३००+ अजिंक्य दुर्ग • सह्याद्रीचे वैभव"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold font-mukta tracking-wider transition-all duration-300 uppercase ${
              activeCategory === tab.id
                ? 'bg-gradient-to-r from-saffron to-gold text-charcoal shadow-gold-glow scale-105 font-black'
                : 'bg-white/5 border border-gold/30 text-ivory/80 hover:text-white hover:border-gold hover:bg-white/10'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Ornate Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredForts.map((fort) => (
          <OrnateCard
            key={fort.id}
            title={fort.name}
            titleMr={fort.nameMr}
            categoryTag={`${fort.category.toUpperCase()} • ${fort.district}`}
            imageSrc={fort.imagePath}
            imageAlt={fort.name}
            hoverDescription={language === 'mr' ? fort.summary.mr : fort.summary.en}
            statRibbon={{
              label: language === 'mr' ? fort.statRibbon.labelMr : fort.statRibbon.labelEn,
              value: fort.statRibbon.value,
            }}
            readMoreLabel={t.forts.readMore}
            watchLabel={t.forts.watch}
            onReadMore={() => setSelectedFort(fort)}
            onWatch={() => setSelectedFort(fort)}
          />
        ))}
      </div>

      {/* Explore All Forts Button */}
      <div className="mt-14 text-center">
        <Link
          to="/forts"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-widest text-charcoal bg-gradient-to-r from-gold via-gold-light to-gold hover:from-white hover:to-saffron border border-gold shadow-[0_0_25px_rgba(212,175,55,0.5)] [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_100%,0_100%)] transition-all duration-300 font-mukta"
        >
          <span>{t.forts.viewAllForts}</span>
          <span className="text-base">→</span>
        </Link>
      </div>

      {/* Fort Modal with mini map and history */}
      <FortModal fort={selectedFort} onClose={() => setSelectedFort(null)} />
    </section>
  );
};

