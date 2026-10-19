import React, { useState } from 'react';
import { FORTS, Fort, FortCategory } from '../data/forts';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionDivider } from '../components/SectionDivider';
import { OrnateCard } from '../components/OrnateCard';
import { FortModal } from '../components/FortModal';
import { Footer } from '../sections/Footer';
import { Search, Mountain, Waves, Landmark, Layers, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FortsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FortCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFort, setSelectedFort] = useState<Fort | null>(null);

  const filteredForts = FORTS.filter((fort) => {
    const matchesCategory = activeCategory === 'all' || fort.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      fort.name.toLowerCase().includes(query) ||
      fort.nameMr.includes(query) ||
      fort.district.toLowerCase().includes(query) ||
      fort.districtMr.includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-12 bg-gradient-to-b from-[#1A0F0A] via-[#120906] to-[#0D0A08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron hover:text-white transition-colors mb-6 font-mukta"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'mr' ? '← मुख्यपृष्ठावर परत जा' : '← Back to Home'}</span>
        </Link>

        <SectionDivider
          heading={language === 'mr' ? 'दुर्गदर्शन व गडकिल्ले' : 'THE FORTS OF SWARAJYA'}
          subheading={
            language === 'mr'
              ? 'छत्रपती शिवाजी महाराजांचे ३०० हून अधिक गिरिदुर्ग, जलदुर्ग आणि भुईकोट'
              : 'Explore the 300+ citadels that guarded Hindavi Swarajya across Sahyadri and Konkan'
          }
          badge="दुर्गपती • सह्याद्री"
        />

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'mr' ? 'किल्ला किंवा जिल्हा शोधा...' : 'Search fort or district...'}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/50 border border-gold/40 text-ivory text-xs font-mukta placeholder:text-ivory/40 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: 'all', label: t.forts.all, icon: <Layers className="w-3.5 h-3.5" /> },
                { id: 'hill', label: t.forts.hill, icon: <Mountain className="w-3.5 h-3.5" /> },
                { id: 'sea', label: t.forts.sea, icon: <Waves className="w-3.5 h-3.5" /> },
                { id: 'land', label: t.forts.land, icon: <Landmark className="w-3.5 h-3.5" /> },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold font-mukta transition-all ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-saffron to-gold text-charcoal shadow-gold-glow'
                    : 'bg-white/5 border border-white/10 text-ivory/70 hover:border-gold hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Forts Grid */}
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

        {filteredForts.length === 0 && (
          <div className="text-center py-16 text-ivory/60 font-mukta">
            <p className="text-lg">कोणताही किल्ला सापडला नाही (No fort matched your search).</p>
          </div>
        )}
      </div>

      <div className="mt-20">
        <Footer />
      </div>

      <FortModal fort={selectedFort} onClose={() => setSelectedFort(null)} />
    </div>
  );
};

