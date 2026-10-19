import React, { useState } from 'react';
import { useTilt } from '../hooks/useTilt';
import { ExternalLink, Play, Eye } from 'lucide-react';

import { SmartImage, FallbackType } from './SmartImage';

interface OrnateCardProps {
  id?: string;
  title: string;
  titleMr?: string;
  categoryTag?: string;
  imageSrc: string;
  imageAlt: string;
  hoverDescription: string;
  fallbackType?: FallbackType;
  statRibbon?: {
    label: string;
    value: string;
  };
  onReadMore?: () => void;
  onWatch?: () => void;
  readMoreLabel?: string;
  watchLabel?: string;
  disabled?: boolean;
}

export const OrnateCard: React.FC<OrnateCardProps> = ({
  title,
  titleMr,
  categoryTag,
  imageSrc,
  imageAlt,
  hoverDescription,
  fallbackType = 'fort',
  statRibbon,
  onReadMore,
  onWatch,
  readMoreLabel = 'READ MORE',
  watchLabel = 'WATCH',
  disabled = false,
}) => {
  const { elementRef, tilt, handleMouseMove, handleMouseLeave } = useTilt(6);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={elementRef}
      onMouseMove={(e) => {
        handleMouseMove(e);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className={`relative group flex flex-col w-full max-w-sm mx-auto transition-all duration-300 ${
        disabled ? 'opacity-60 grayscale' : ''
      }`}
    >
      {/* 1. Crown / Chevron Peak Ornament Top */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
        <div className="w-8 h-4 bg-gradient-to-t from-[#D4AF37] to-[#F7E27A] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] shadow-gold-glow" />
        <div className="w-2.5 h-1 bg-[#8F6B14] rounded-full -mt-0.5" />
      </div>

      {/* 2. Main Beveled Gold Border Container */}
      <div
        className={`relative p-[2.5px] rounded-xl transition-all duration-300 ${
          isHovered
            ? 'shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.45)]'
            : 'shadow-[0_10px_25px_rgba(0,0,0,0.7)]'
        }`}
        style={{
          background: isHovered
            ? 'linear-gradient(135deg, #FF9933 0%, #D4AF37 30%, #FFF2D6 50%, #D4AF37 70%, #8F6B14 100%)'
            : 'linear-gradient(135deg, #8F6B14 0%, #D4AF37 35%, #F7E27A 50%, #D4AF37 65%, #8F6B14 100%)',
        }}
      >
        {/* Inner Card Face */}
        <div className="bg-[#120F0D] rounded-[10px] overflow-hidden flex flex-col">
          {/* Top Tag & Header */}
          <div className="px-4 pt-4 pb-2 flex items-center justify-between bg-gradient-to-b from-[#1C1714] to-transparent">
            {categoryTag ? (
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F5ECD7] font-mukta">
                {categoryTag}
              </span>
            ) : <span />}
            <span className="text-gold text-xs">◆</span>
          </div>

          {/* 3. Image Area (4:5 ratio) with Hover Description Fade */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0A0706]">
            <SmartImage
              src={imageSrc}
              alt={imageAlt}
              fallbackType={fallbackType}
              name={title}
              subtitle={titleMr}
              aspectRatio="4/5"
              className={`transition-transform duration-700 ease-out ${
                isHovered ? 'scale-108 brightness-105' : 'scale-100'
              }`}
            />

            {/* Inner Dark Shadow Vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(0,0,0,0.85)] pointer-events-none" />

            {/* Overlay description fading from bottom on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[#0D0A08] via-[#140D0B]/90 to-transparent p-5 flex flex-col justify-end transition-opacity duration-300 ${
                isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-xs sm:text-sm text-ivory/95 font-mukta leading-relaxed line-clamp-5 drop-shadow-md">
                {hoverDescription}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-saffron text-xs font-bold uppercase tracking-wider">
                <Eye className="w-3.5 h-3.5" />
                <span>{titleMr || title}</span>
              </div>
            </div>
          </div>

          {/* 4. Title Section on Ivory Accent Plate */}
          <div className="p-4 bg-gradient-to-b from-[#14100E] to-[#1A1411] border-t border-gold/30">
            <h3
              lang={/[\u0900-\u097F]/.test(title) ? 'mr' : undefined}
              className={`${
                /[\u0900-\u097F]/.test(title) ? 'font-yatra' : 'font-cinzel'
              } text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-ivory to-gold line-clamp-1`}
              style={{
                letterSpacing: /[\u0900-\u097F]/.test(title) ? 0 : undefined,
                textTransform: /[\u0900-\u097F]/.test(title) ? 'none' : undefined,
                lineHeight: 1.35,
              }}
            >
              {title}
            </h3>
            {titleMr && (
              <p
                lang="mr"
                className="font-yatra text-xs sm:text-sm text-saffron mt-0.5 line-clamp-1"
                style={{ letterSpacing: 0, textTransform: 'none', lineHeight: 1.35 }}
              >
                {titleMr}
              </p>
            )}

            {/* 5. Button Pair: Angular READ MORE and WATCH */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                onClick={onReadMore}
                className="relative group/btn py-2 px-3 text-xs font-bold tracking-wider uppercase text-ivory bg-transparent border border-gold/70 hover:border-saffron hover:text-saffron transition-all duration-200 [clip-path:polygon(8px_0,100%_0,calc(100%-8px)_100%,0_100%)] flex items-center justify-center gap-1.5"
              >
                <span>{readMoreLabel}</span>
                <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onWatch}
                className="relative group/btn py-2 px-3 text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-maroon to-maroon-dark hover:from-blood hover:to-maroon border border-maroon-light transition-all duration-200 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_100%,8px_100%)] flex items-center justify-center gap-1.5 shadow-md"
              >
                <Play className="w-3 h-3 fill-current group-hover/btn:scale-110 transition-transform" />
                <span>{watchLabel}</span>
              </button>
            </div>
          </div>

          {/* 6. Red Stat Ribbon Bar (like the reference prize-pool bar) */}
          {statRibbon && (
            <div className="relative py-1.5 px-4 bg-gradient-to-r from-[#6E1212] via-[#8B1A1A] to-[#6E1212] border-t border-[#A82525] flex items-center justify-between text-white font-mukta">
              <span className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase opacity-90">
                {statRibbon.label}
              </span>
              <span className="text-xs sm:text-sm font-black tracking-wider text-[#FFD670] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                {statRibbon.value}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

