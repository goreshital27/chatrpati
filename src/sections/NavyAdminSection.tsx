import React from 'react';
import { POLICIES } from '../data/achievements';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionDivider } from '../components/SectionDivider';
import { Anchor, ShieldAlert, Award, Compass, Heart, Users, Calendar } from 'lucide-react';

export const NavyAdminSection: React.FC = () => {
  const { language, t } = useLanguage();

  const navyPolicies = POLICIES.filter((p) => p.category === 'navy');
  const adminPolicies = POLICIES.filter((p) => p.category === 'admin');

  return (
    <section id="navy" className="relative py-24 px-4 sm:px-6 w-full max-w-7xl mx-auto">
      <SectionDivider
        heading={t.navyAdmin.sectionHeading}
        subheading={t.navyAdmin.subheading}
        badge="सागरी सत्ता आणि सुप्रशासन"
      />

      {/* Split-Screen 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: The Maratha Navy (Father of Indian Navy) */}
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-[#38BDF8]/60 via-[#0A2540] to-[#081826] shadow-xl">
          <div className="h-full rounded-[14px] bg-gradient-to-b from-[#091C2E] to-[#040D17] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#38BDF8]/30 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-500/15 border border-sky-400/40 text-sky-400">
                    <Anchor className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-yatra text-2xl font-bold text-white">
                      {t.navyAdmin.navyTitle}
                    </h3>
                    <p className="text-xs text-sky-300/70 font-mukta uppercase tracking-wider">
                      अरबी समुद्रावरील सार्वभौमत्व • सिंधुदुर्ग व विजयदुर्ग
                    </p>
                  </div>
                </div>
                <Compass className="w-6 h-6 text-sky-400/60 hidden sm:block" />
              </div>

              <p className="text-xs sm:text-sm text-ivory/85 font-mukta leading-relaxed mb-6">
                {language === 'mr'
                  ? "छत्रपती शिवरायांनी परकीय सत्तांची सागरी मक्तेदारी मोडून काढण्यासाठी स्वतंत्र स्वदेशी आरमाराची स्थापना केली. त्यांनी मालवण, हर्णे आणि विजयदुर्ग येथे स्वदेशी जहाज बांधणी उद्योग सुरू केला, ज्यामुळे त्यांना 'भारतीय आरमाराचे जनक' मानले जाते."
                  : 'Recognizing that the sea was the gateway to colonial exploitation, Shivaji Maharaj founded an indigenous navy consisting of shallow-draft Gurabs and swift Galbats, establishing uncontested Maratha authority over the Arabian Sea.'}
              </p>

              {/* Navy Policy Highlights */}
              <div className="space-y-4">
                {navyPolicies.map((policy) => (
                  <div
                    key={policy.id}
                    className="p-4 rounded-xl bg-black/40 border border-sky-400/20 hover:border-sky-400/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-sky-950 text-sky-300 font-mono">
                        {language === 'mr' ? policy.badge.mr : policy.badge.en}
                      </span>
                      <Award className="w-4 h-4 text-sky-400" />
                    </div>
                    <h4 className="font-yatra text-base font-bold text-sky-200 mt-1">
                      {language === 'mr' ? policy.title.mr : policy.title.en}
                    </h4>
                    <p className="text-xs text-ivory/70 font-mukta leading-relaxed mt-1">
                      {language === 'mr' ? policy.description.mr : policy.description.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-400/20 flex items-center justify-between text-xs text-sky-300/80 font-mukta">
              <span>आरमार प्रमुख: मायनाक भंडारी व कान्होजी आंग्रे</span>
              <span className="font-bold text-sky-400">४००+ लढाऊ जहाजे</span>
            </div>
          </div>
        </div>

        {/* Right Column: Civil Administration & Ethical Governance */}
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-[#D4AF37]/60 via-[#4A1D0E] to-[#1F0A06] shadow-xl">
          <div className="h-full rounded-[14px] bg-gradient-to-b from-[#1F0E07] to-[#0F0603] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-gold/30 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gold/15 border border-gold/40 text-gold">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-yatra text-2xl font-bold text-white">
                      {t.navyAdmin.adminTitle}
                    </h3>
                    <p className="text-xs text-gold/70 font-mukta uppercase tracking-wider">
                      रयतेचे कल्याण • निष्पक्ष न्याय • महिलांचा सन्मान
                    </p>
                  </div>
                </div>
                <Users className="w-6 h-6 text-gold/60 hidden sm:block" />
              </div>

              <p className="text-xs sm:text-sm text-ivory/85 font-mukta leading-relaxed mb-6">
                {language === 'mr'
                  ? "शिवरायांचे राज्य हे कोणत्याही एका जाती किंवा धर्माचे नव्हते, तर ते प्रत्येक सामान्य रयतेचे कल्याणकारी राज्य होते. शेतकऱ्यांना मोफत बी-बियाणे, बिनव्याजी तगाई कर्जे आणि दुष्काळात संपूर्ण करमाफी देणारे ते पहिले लोककल्याणकारी राजे होते."
                  : 'Swarajya was rooted in the revolutionary principle that the State exists for the welfare of the poorest peasant (Ryot). Religious freedom, strict judicial equality, and zero tolerance for violence against women made his civil code centuries ahead of its time.'}
              </p>

              {/* Civil Administration Policy Highlights */}
              <div className="space-y-4">
                {adminPolicies.map((policy) => (
                  <div
                    key={policy.id}
                    className="p-4 rounded-xl bg-black/40 border border-gold/20 hover:border-gold/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#2D1609] text-saffron font-mono">
                        {language === 'mr' ? policy.badge.mr : policy.badge.en}
                      </span>
                      <ShieldAlert className="w-4 h-4 text-saffron" />
                    </div>
                    <h4 className="font-yatra text-base font-bold text-gold mt-1">
                      {language === 'mr' ? policy.title.mr : policy.title.en}
                    </h4>
                    <p className="text-xs text-ivory/70 font-mukta leading-relaxed mt-1">
                      {language === 'mr' ? policy.description.mr : policy.description.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-gold/80 font-mukta">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-saffron" />
                शिवराज्याभिषेक शक १६७४
              </span>
              <span className="font-bold text-saffron">१००% रयत संरक्षण</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

