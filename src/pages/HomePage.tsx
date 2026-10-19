import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { TimelineSection } from '../sections/TimelineSection';
import { FortsSection } from '../sections/FortsSection';
import { WarriorsSection } from '../sections/WarriorsSection';
import { AshtapradhanSection } from '../sections/AshtapradhanSection';
import { AchievementsSection } from '../sections/AchievementsSection';
import { NavyAdminSection } from '../sections/NavyAdminSection';
import { QuotesSection } from '../sections/QuotesSection';
import { BigCtaSection } from '../sections/BigCtaSection';
import { Footer } from '../sections/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col">
      <HeroSection />
      <TimelineSection />
      <FortsSection />
      <WarriorsSection />
      <AshtapradhanSection />
      <AchievementsSection />
      <NavyAdminSection />
      <QuotesSection />
      <BigCtaSection />
      <Footer />
    </div>
  );
};

