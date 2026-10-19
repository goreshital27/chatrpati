import React, { useState } from 'react';
import { ASHTAPRADHAN_MEMBERS, AshtapradhanMember } from '../data/ashtapradhan';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionDivider } from '../components/SectionDivider';
import {
  Crown,
  Coins,
  Scroll,
  ShieldAlert,
  Swords,
  Globe,
  Scale,
  BookOpen,
  CheckCircle2,
  GitCommit,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SmartImage } from '../components/SmartImage';

const iconMap: Record<string, React.ReactNode> = {
  Crown: <Crown className="w-5 h-5" />,
  Coins: <Coins className="w-5 h-5" />,
  Scroll: <Scroll className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Swords: <Swords className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
};

export const AshtapradhanSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<AshtapradhanMember>(ASHTAPRADHAN_MEMBERS[0]);

  // Octagonal layout radius
  const radius = 230; // Radius for desktop darbar
  const center = 280; // Center coordinate of SVG canvas (560x560)

  const handleNodeClick = (member: AshtapradhanMember) => {
    setSelectedMember(member);
  };

  return (
    <section
      id="ashtapradhan"
      className="relative py-24 px-4 sm:px-6 w-full overflow-hidden bg-gradient-to-b from-[#100921] via-[#1C1233] to-[#0A0614]"
    >
      {/* Background stardust particles & royal subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionDivider
          heading={t.ashtapradhan.sectionHeading}
          subheading={t.ashtapradhan.subheading}
          badge="१६७४ • अष्टकोनी सार्वभौम राजदरबार"
        />

        {/* ============================================================ */}
        {/* DESKTOP OCTAGONAL DARBAR LAYOUT (hidden on small mobile, visible on md+) */}
        {/* ============================================================ */}
        <div className="hidden md:flex flex-col lg:flex-row items-center justify-between gap-12 my-8">
          {/* Left: The Circular/Octagonal Interactive Darbar SVG Canvas */}
          <div className="relative w-[560px] h-[560px] shrink-0 flex items-center justify-center">
            {/* SVG Connector Lines from Center to each Node */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 560 560"
            >
              <defs>
                <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#FF9933" />
                </linearGradient>
              </defs>

              {/* Background circular guide orbits */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="rgba(212, 175, 55, 0.2)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <circle
                cx={center}
                cy={center}
                r={radius - 70}
                fill="none"
                stroke="rgba(212, 175, 55, 0.1)"
                strokeWidth="1"
              />

              {/* Line connectors to 8 nodes */}
              {ASHTAPRADHAN_MEMBERS.map((member) => {
                const rad = (member.angleDegrees * Math.PI) / 180;
                const nodeX = center + radius * Math.cos(rad);
                const nodeY = center + radius * Math.sin(rad);
                const isSelected = selectedMember.id === member.id;

                return (
                  <line
                    key={member.id}
                    x1={center}
                    y1={center}
                    x2={nodeX}
                    y2={nodeY}
                    stroke={isSelected ? 'url(#activeLineGrad)' : 'rgba(212, 175, 55, 0.3)'}
                    strokeWidth={isSelected ? 3 : 1.5}
                    strokeDasharray={isSelected ? 'none' : '4 4'}
                    className={isSelected ? 'animate-pulse' : ''}
                  />
                );
              })}
            </svg>

            {/* CENTER NODE: RAJMUDRA OF CHHATRAPATI */}
            <div className="relative z-20 w-36 h-36 rounded-full p-1 bg-gradient-to-r from-gold via-saffron to-gold shadow-[0_0_35px_rgba(255,153,51,0.5)] flex items-center justify-center cursor-pointer group hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-[#120719] flex flex-col items-center justify-center p-3 text-center border-2 border-gold/70">
                <img
                  src="/assets/ui/rajmudra.svg"
                  alt="Rajmudra Center"
                  className="w-12 h-12 object-contain filter drop-shadow-[0_0_10px_#D4AF37] group-hover:rotate-12 transition-transform duration-500"
                />
                <span className="font-yatra text-xs font-bold text-saffron mt-1 leading-tight">
                  {t.ashtapradhan.centerTitle}
                </span>
                <span className="font-mukta text-[9px] text-ivory/70 uppercase tracking-widest">
                  {t.ashtapradhan.centerSubtitle}
                </span>
              </div>
            </div>

            {/* 8 SURROUNDING MINISTER NODES */}
            {ASHTAPRADHAN_MEMBERS.map((member) => {
              const rad = (member.angleDegrees * Math.PI) / 180;
              const nodeX = center + radius * Math.cos(rad);
              const nodeY = center + radius * Math.sin(rad);
              const isSelected = selectedMember.id === member.id;

              return (
                <button
                  key={member.id}
                  onClick={() => handleNodeClick(member)}
                  onMouseEnter={() => setSelectedMember(member)}
                  aria-label={`${member.titleEnglish} - ${member.ministerAtCoronation}`}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 flex flex-col items-center group focus:outline-none ${
                    isSelected ? 'scale-115 z-30' : 'hover:scale-110 opacity-85 hover:opacity-100'
                  }`}
                  style={{
                    left: `${nodeX}px`,
                    top: `${nodeY}px`,
                  }}
                >
                  <div
                    className={`w-14 h-14 rounded-full p-[2px] transition-all duration-300 flex items-center justify-center shadow-lg ${
                      isSelected
                        ? 'bg-gradient-to-tr from-saffron via-gold-light to-white shadow-[0_0_20px_#FF9933]'
                        : 'bg-gradient-to-b from-gold/60 to-charcoal border border-gold/40'
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#2B1A4A] text-saffron' : 'bg-[#180E2B] text-gold group-hover:text-white'
                      }`}
                    >
                      {iconMap[member.iconName] || <Crown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Node Label Below */}
                  <span
                    lang={language === 'mr' ? 'mr' : undefined}
                    className={`mt-1.5 px-2 py-0.5 rounded-md text-[11px] font-bold font-mukta whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'bg-saffron text-charcoal shadow-md font-black'
                        : 'bg-black/70 text-ivory/80 group-hover:text-saffron border border-white/10'
                    }`}
                    style={{ letterSpacing: language === 'mr' ? 0 : undefined, textTransform: language === 'mr' ? 'none' : undefined }}
                  >
                    {language === 'mr' ? member.titleDevanagari.split(' ')[0] : member.titleEnglish.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Gold-Framed Council Minister Inspector Panel */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative rounded-2xl p-[2.5px] bg-gradient-to-b from-[#D4AF37] via-[#9370DB] to-[#1C1233] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.25)]">
              <div className="rounded-[14px] bg-gradient-to-b from-[#180E2B] via-[#120A21] to-[#0D0717] p-6 sm:p-8 text-left">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-gold/30 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-saffron/15 border border-saffron/40 text-saffron font-mukta">
                      RANK #{selectedMember.order} • {selectedMember.historicalOffice}
                    </span>
                    <h3
                      lang="mr"
                      className="font-yatra text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory to-gold mt-1"
                      style={{ letterSpacing: 0, textTransform: 'none', lineHeight: 1.35 }}
                    >
                      {selectedMember.titleDevanagari}
                    </h3>
                    <p className="font-cinzel text-xs sm:text-sm text-gold/90 tracking-wider">
                      {selectedMember.titleEnglish}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-royal/50 border border-gold/40 text-saffron">
                    {iconMap[selectedMember.iconName]}
                  </div>
                </div>

                {/* 1674 Coronation Minister + Portrait */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-gold/25 mb-4 flex items-center gap-4">
                  <div className="w-18 h-22 sm:w-20 sm:h-24 shrink-0 rounded-lg overflow-hidden border border-gold/40">
                    <SmartImage
                      src={selectedMember.imagePath}
                      alt={selectedMember.ministerAtCoronation}
                      fallbackType="minister"
                      name={selectedMember.ministerAtCoronationMr}
                      subtitle={selectedMember.titleDevanagari}
                      aspectRatio="4/5"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ivory/60 font-mukta">
                        {t.ashtapradhan.minister1674}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-gold border border-white/10">
                        १६७४
                      </span>
                    </div>
                    <span className="font-yatra text-base sm:text-lg text-saffron font-bold block">
                      {language === 'mr'
                        ? selectedMember.ministerAtCoronationMr
                        : selectedMember.ministerAtCoronation}
                    </span>
                    <span className="text-[11px] text-ivory/70 font-mukta block mt-0.5">
                      {selectedMember.historicalOffice}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-xs sm:text-sm text-ivory/90 font-mukta leading-relaxed mb-4">
                  {language === 'mr'
                    ? selectedMember.roleDescription.mr
                    : selectedMember.roleDescription.en}
                </p>

                {/* Portfolios / Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold font-mukta mb-2">
                    {t.ashtapradhan.responsibilities}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-ivory/80 font-mukta">
                    {(language === 'mr'
                      ? selectedMember.keyResponsibilities.mr
                      : selectedMember.keyResponsibilities.en
                    ).map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-saffron shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Constitutional Seal / Stamp Authority */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mukta">
                  <div>
                    <span className="text-[10px] uppercase text-ivory/50 block">
                      {t.ashtapradhan.constitutionalPower}
                    </span>
                    <span className="text-saffron font-bold">
                      {language === 'mr'
                        ? selectedMember.constitutionalPower.mr
                        : selectedMember.constitutionalPower.en}
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-saffron/10 border border-saffron/40 text-[11px] font-yatra text-gold">
                    मुद्रा: {selectedMember.sealInscription}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE DARBAR LIST CAROUSEL (Visible on mobile screens) */}
        {/* ============================================================ */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            {ASHTAPRADHAN_MEMBERS.map((member) => (
              <button
                key={member.id}
                onClick={() => handleNodeClick(member)}
                className={`p-3 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                  selectedMember.id === member.id
                    ? 'bg-gradient-to-b from-[#2B1A4A] to-[#120A21] border-saffron shadow-gold-glow'
                    : 'bg-[#180E2B]/80 border-gold/30 text-ivory/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-saffron">{iconMap[member.iconName]}</span>
                  <span className="text-[10px] font-mono text-gold">#{member.order}</span>
                </div>
                <div>
                  <h4 className="font-yatra text-sm font-bold text-ivory line-clamp-1">
                    {language === 'mr' ? member.titleDevanagari : member.titleEnglish}
                  </h4>
                  <p className="text-[11px] text-saffron font-mukta line-clamp-1">
                    {language === 'mr' ? member.ministerAtCoronationMr : member.ministerAtCoronation}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Bottom Detail Card */}
          <div className="p-5 rounded-xl bg-[#140A21] border border-gold/50 shadow-xl flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-16 h-20 shrink-0 rounded-lg overflow-hidden border border-gold/40">
                <SmartImage
                  src={selectedMember.imagePath}
                  alt={selectedMember.ministerAtCoronation}
                  fallbackType="minister"
                  name={selectedMember.ministerAtCoronationMr}
                  subtitle={selectedMember.titleDevanagari}
                  aspectRatio="4/5"
                />
              </div>
              <div>
                <h3 className="font-yatra text-base font-bold text-saffron">
                  {selectedMember.titleDevanagari}
                </h3>
                <p className="font-cinzel text-xs text-gold">{selectedMember.titleEnglish}</p>
                <span className="text-[11px] text-ivory/70 font-mukta block mt-1">
                  {t.ashtapradhan.minister1674}:{' '}
                  <strong className="text-white">
                    {language === 'mr'
                      ? selectedMember.ministerAtCoronationMr
                      : selectedMember.ministerAtCoronation}
                  </strong>
                </span>
              </div>
            </div>
            <p className="text-xs text-ivory/90 font-mukta leading-relaxed">
              {language === 'mr'
                ? selectedMember.roleDescription.mr
                : selectedMember.roleDescription.en}
            </p>
            <div className="p-2.5 rounded bg-black/40 border border-white/10 text-xs font-mukta text-ivory/80">
              <span className="text-saffron font-bold block mb-0.5">
                {t.ashtapradhan.constitutionalPower}:
              </span>
              <span>
                {language === 'mr'
                  ? selectedMember.constitutionalPower.mr
                  : selectedMember.constitutionalPower.en}
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* GOVERNANCE FLOW MINI DIAGRAM */}
        {/* ============================================================ */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#140C24]/90 to-[#0A0512]/95 border border-gold/40 shadow-inner">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron font-mukta">
              {t.ashtapradhan.governanceFlowTitle}
            </span>
            <h4 className="font-cinzel text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory to-gold-light mt-1">
              {language === 'mr' ? 'स्वराज्याची पारदर्शक प्रशासकीय उतरंड' : 'The Constitutional Hierarchy of Swarajya'}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {/* Step 1: Chhatrapati */}
            <div className="p-4 rounded-xl bg-black/50 border border-gold/60 text-center flex flex-col items-center justify-between relative group hover:border-saffron transition-colors">
              <Crown className="w-6 h-6 text-saffron mb-2" />
              <div>
                <h5 className="font-yatra text-base font-bold text-gold">छत्रपती</h5>
                <p className="text-[11px] text-ivory/70 font-mukta">Supreme Sovereign & War Council</p>
              </div>
              <span className="mt-2 text-[10px] px-2 py-0.5 rounded bg-saffron/15 text-saffron font-mono">
                सर्वोच्च सत्ता
              </span>
            </div>

            {/* Step 2: Ashtapradhan Mandal */}
            <div className="p-4 rounded-xl bg-black/50 border border-gold/60 text-center flex flex-col items-center justify-between relative group hover:border-saffron transition-colors">
              <ShieldAlert className="w-6 h-6 text-gold mb-2" />
              <div>
                <h5 className="font-yatra text-base font-bold text-gold">अष्टप्रधान मंडळ</h5>
                <p className="text-[11px] text-ivory/70 font-mukta">Council of 8 Ministers</p>
              </div>
              <span className="mt-2 text-[10px] px-2 py-0.5 rounded bg-gold/15 text-gold font-mono">
                मंत्रिमंडळ
              </span>
            </div>

            {/* Step 3: Subedars & Sarkarkuns */}
            <div className="p-4 rounded-xl bg-black/50 border border-gold/60 text-center flex flex-col items-center justify-between relative group hover:border-saffron transition-colors">
              <GitCommit className="w-6 h-6 text-[#9370DB] mb-2" />
              <div>
                <h5 className="font-yatra text-base font-bold text-gold">सुभेदार व कारकुन</h5>
                <p className="text-[11px] text-ivory/70 font-mukta">Provincial Governors & Auditors</p>
              </div>
              <span className="mt-2 text-[10px] px-2 py-0.5 rounded bg-purple-900/30 text-purple-300 font-mono">
                प्रांत कारभार
              </span>
            </div>

            {/* Step 4: Havaldar & Killedar */}
            <div className="p-4 rounded-xl bg-black/50 border border-gold/60 text-center flex flex-col items-center justify-between relative group hover:border-saffron transition-colors">
              <Swords className="w-6 h-6 text-blood-light mb-2" />
              <div>
                <h5 className="font-yatra text-base font-bold text-gold">हवालदार व किल्लेदार</h5>
                <p className="text-[11px] text-ivory/70 font-mukta">Fortresses & Naval Bastions</p>
              </div>
              <span className="mt-2 text-[10px] px-2 py-0.5 rounded bg-blood/20 text-[#FF8585] font-mono">
                दुर्ग संरक्षण
              </span>
            </div>

            {/* Step 5: Gram Panchayat & Ryot */}
            <div className="p-4 rounded-xl bg-black/50 border border-gold/60 text-center flex flex-col items-center justify-between relative group hover:border-saffron transition-colors">
              <Scale className="w-6 h-6 text-[#38BDF8] mb-2" />
              <div>
                <h5 className="font-yatra text-base font-bold text-gold">ग्रामपंचायत व रयत</h5>
                <p className="text-[11px] text-ivory/70 font-mukta">Village Republic & Peasantry</p>
              </div>
              <span className="mt-2 text-[10px] px-2 py-0.5 rounded bg-sky-900/30 text-sky-300 font-mono">
                रयतेचे कल्याण
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/ashtapradhan"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-saffron hover:text-white bg-white/5 hover:bg-saffron/20 border border-gold/40 hover:border-saffron transition-all font-mukta"
            >
              <span>{t.ashtapradhan.viewFullCouncil}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
