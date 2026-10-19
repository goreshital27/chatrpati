import React, { useState, useEffect } from 'react';

export type FallbackType = 'warrior' | 'fort' | 'minister' | 'hero';

export interface SmartImageProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackType?: FallbackType;
  name?: string;
  subtitle?: string;
  aspectRatio?: '4/5' | '16/9' | 'square' | 'auto';
  loading?: 'lazy' | 'eager';
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackType = 'warrior',
  name,
  subtitle,
  aspectRatio = '4/5',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset states if src changes
  useEffect(() => {
    setHasError(!src);
    setIsLoading(true);
  }, [src]);

  // Determine aspect ratio class
  const aspectClass =
    aspectRatio === '4/5'
      ? 'aspect-[4/5]'
      : aspectRatio === '16/9'
      ? 'aspect-video'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : '';

  const renderSilhouette = () => {
    switch (fallbackType) {
      case 'warrior':
        return (
          <svg
            viewBox="0 0 200 240"
            className="w-32 h-40 filter drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="warriorRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="40%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#FF9933" />
              </linearGradient>
            </defs>
            {/* Halo ring */}
            <circle cx="100" cy="85" r="55" stroke="url(#warriorRim)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            {/* Spear */}
            <line x1="160" y1="20" x2="140" y2="230" stroke="#0D0A08" strokeWidth="4" />
            <line x1="160" y1="20" x2="140" y2="230" stroke="url(#warriorRim)" strokeWidth="1.5" />
            <polygon points="160,15 155,30 165,30" fill="#F7E27A" />
            {/* Turban & Crest */}
            <ellipse cx="98" cy="65" rx="22" ry="17" fill="#0D0A08" stroke="url(#warriorRim)" strokeWidth="1.5" />
            <path d="M85,60 C85,42 115,42 115,60 Z" fill="#140606" stroke="url(#warriorRim)" strokeWidth="1.5" />
            <polygon points="98,40 94,52 102,52" fill="#FF9933" />
            {/* Face Profile & Beard */}
            <ellipse cx="98" cy="74" rx="13" ry="14" fill="#0A0404" />
            <path d="M103,78 C108,82 106,88 98,92 C92,88 90,82 95,78" fill="#140606" stroke="#D4AF37" strokeWidth="1" />
            {/* Shoulders and Armor */}
            <path
              d="M55,145 C60,105 85,96 98,96 C111,96 136,105 141,145 C141,175 130,210 125,235 L71,235 C66,210 55,175 55,145 Z"
              fill="#0D0A08"
              stroke="url(#warriorRim)"
              strokeWidth="1.5"
            />
            {/* Round Shield (Dhal) */}
            <circle cx="75" cy="150" r="28" fill="#1A0707" stroke="url(#warriorRim)" strokeWidth="2" />
            <circle cx="75" cy="150" r="5" fill="#D4AF37" />
            <circle cx="68" cy="143" r="2.5" fill="#D4AF37" />
            <circle cx="82" cy="143" r="2.5" fill="#D4AF37" />
            <circle cx="68" cy="157" r="2.5" fill="#D4AF37" />
            <circle cx="82" cy="157" r="2.5" fill="#D4AF37" />
          </svg>
        );

      case 'fort':
        return (
          <svg
            viewBox="0 0 200 240"
            className="w-36 h-40 filter drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="fortRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#FF9933" />
              </linearGradient>
            </defs>
            {/* Glowing Moon / Sun Disk */}
            <circle cx="100" cy="75" r="38" fill="#F7E27A" opacity="0.25" />
            <circle cx="100" cy="75" r="42" stroke="url(#fortRim)" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
            {/* Sahyadri Crag Background */}
            <path d="M10,180 Q60,135 100,150 T190,140 L190,230 L10,230 Z" fill="#120606" />
            {/* Stone Bastions & Citadel Ramparts */}
            <path
              d="M35,160 
                 L45,130 L58,130 L58,138 L80,138 L80,120 L92,120 L92,112 L108,112 L108,120 L120,120 L120,138 L142,138 L142,130 L155,130 L165,160 
                 L175,230 L25,230 Z"
              fill="#0A0404"
              stroke="url(#fortRim)"
              strokeWidth="2"
            />
            {/* Watchtower embrasures */}
            <rect x="94" y="125" width="12" height="15" rx="1" fill="#1A0707" stroke="#D4AF37" strokeWidth="1" />
            {/* Flagpole & Bhagwa Saffron Banner */}
            <line x1="100" y1="112" x2="100" y2="78" stroke="#0D0A08" strokeWidth="2.5" />
            <line x1="100" y1="112" x2="100" y2="78" stroke="#D4AF37" strokeWidth="1" />
            <path d="M100,78 L126,85 L114,92 L126,99 L100,106 Z" fill="#FF9933" stroke="#D4AF37" strokeWidth="0.8" />
          </svg>
        );

      case 'minister':
        return (
          <svg
            viewBox="0 0 200 240"
            className="w-32 h-40 filter drop-shadow-[0_0_12px_rgba(147,112,219,0.5)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ministerRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9370DB" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#FF9933" />
              </linearGradient>
            </defs>
            {/* Royal Aureole */}
            <circle cx="100" cy="80" r="50" stroke="url(#ministerRim)" strokeWidth="1" strokeDasharray="5 3" opacity="0.5" />
            {/* Royal Pagadi Turban */}
            <ellipse cx="100" cy="62" rx="26" ry="18" fill="#150824" stroke="url(#ministerRim)" strokeWidth="1.5" />
            <path d="M84,58 C84,38 116,38 116,58 Z" fill="#1E0B33" stroke="url(#ministerRim)" strokeWidth="1.5" />
            <circle cx="100" cy="42" r="3" fill="#F7E27A" />
            {/* Head & Beard */}
            <ellipse cx="100" cy="72" rx="14" ry="15" fill="#0C0514" />
            <path d="M92,80 C96,87 104,87 108,80" stroke="#D4AF37" strokeWidth="1" fill="none" />
            {/* Robe / Angarkha */}
            <path
              d="M50,150 C55,108 85,98 100,98 C115,98 145,108 150,150 C150,185 138,220 132,235 L68,235 C62,220 50,185 50,150 Z"
              fill="#0A040F"
              stroke="url(#ministerRim)"
              strokeWidth="1.5"
            />
            {/* Royal Scroll (Farman) in hand */}
            <rect x="85" y="140" width="30" height="45" rx="3" fill="#1C102E" stroke="#D4AF37" strokeWidth="1.5" />
            <line x1="90" y1="150" x2="110" y2="150" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
            <line x1="90" y1="160" x2="110" y2="160" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
            <line x1="90" y1="170" x2="105" y2="170" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
          </svg>
        );

      case 'hero':
      default:
        return (
          <svg
            viewBox="0 0 240 240"
            className="w-40 h-40 filter drop-shadow-[0_0_15px_rgba(255,153,51,0.6)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#FF9933" />
              </linearGradient>
            </defs>
            {/* Radiant Sun Circle */}
            <circle cx="120" cy="110" r="65" fill="#E2552B" opacity="0.2" />
            <circle cx="120" cy="110" r="70" stroke="url(#heroRim)" strokeWidth="1" strokeDasharray="8 4" opacity="0.4" />
            {/* Horse Body Silhouette */}
            <ellipse cx="120" cy="160" rx="42" ry="22" fill="#0D0A08" stroke="url(#heroRim)" strokeWidth="1.5" />
            {/* Horse Head & Neck */}
            <path d="M145,155 C155,135 158,115 168,100 L178,105 C175,120 168,140 155,160 Z" fill="#0D0A08" stroke="url(#heroRim)" strokeWidth="1.2" />
            {/* Shivaji Maharaj Figure */}
            <path d="M115,145 C112,125 118,105 128,95 C138,98 142,112 140,145 Z" fill="#0A0405" stroke="url(#heroRim)" strokeWidth="1.5" />
            {/* Pagadi & Jigah */}
            <circle cx="128" cy="88" r="8" fill="#0D0A08" stroke="url(#heroRim)" strokeWidth="1" />
            <polygon points="130,82 128,73 133,78" fill="#F7E27A" />
            {/* Raised Bhavani Sword */}
            <line x1="134" y1="100" x2="175" y2="55" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="134" y1="100" x2="175" y2="55" stroke="url(#heroRim)" strokeWidth="0.8" />
            {/* Mountain Cliff Base */}
            <path d="M30,195 Q120,180 210,190 L210,230 L30,230 Z" fill="#0D0506" stroke="url(#heroRim)" strokeWidth="1" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-gradient-to-b from-[#1C0A0A] via-[#120707] to-[#0A0505] border border-gold/30 flex items-center justify-center ${containerClassName}`}
    >
      {/* Shimmer skeleton while loading */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 overflow-hidden bg-[#180F0D]">
          <div className="w-full h-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>
      )}

      {/* Actual Image if provided and not errored */}
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
        />
      ) : (
        /* Designed Custom Fallback with Dark Silhouette & Teal-Gold Glow */
        <div className="relative w-full h-full flex flex-col items-center justify-between p-4 bg-gradient-to-b from-[#240A0A] via-[#140606] to-[#0A0404]">
          {/* Subtle inner gold frame border */}
          <div className="absolute inset-2.5 rounded-lg border border-gold/30 pointer-events-none" />

          {/* Top Label / Tag */}
          <div className="relative z-10 w-full flex items-center justify-between text-[10px] text-gold/70 font-mukta uppercase tracking-widest px-1">
            <span className="flex items-center gap-1">
              <span className="text-saffron">◆</span>
              <span>{fallbackType.toUpperCase()}</span>
            </span>
            <span className="text-gold/50">१६७४</span>
          </div>

          {/* Center Graphic Silhouette */}
          <div className="relative z-10 my-auto flex items-center justify-center">
            {renderSilhouette()}
          </div>

          {/* Bottom Title in Devanagari & English */}
          <div className="relative z-10 w-full text-center pb-1">
            <h4 className="font-yatra text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-light to-saffron line-clamp-1">
              {name || alt}
            </h4>
            {subtitle && (
              <p className="font-mukta text-[11px] text-ivory/70 line-clamp-1 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

