import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Total animation: ~1.8s then fade out
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(onComplete, 400);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setFading(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D0A08] transition-opacity duration-500 cursor-pointer ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated SVG drawing of the Rajmudra Seal */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]"
          >
            {/* Octagon Border animated stroke */}
            <polygon
              points="146,20 354,20 480,146 480,354 354,480 146,480 20,354 20,146"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="6"
              className="animate-[dash_1.8s_ease-in-out_forwards]"
              style={{
                strokeDasharray: 1400,
                strokeDashoffset: 1400,
                animation: 'dash 1.6s ease-in-out forwards',
              }}
            />

            {/* Inner Ring */}
            <polygon
              points="152,36 348,36 464,152 464,348 348,464 152,464 36,348 36,152"
              fill="#140707"
              stroke="#FF9933"
              strokeWidth="2"
              strokeDasharray="6 4"
            />

            {/* Sanskrit text fading in */}
            <g
              fill="#F7E27A"
              fontFamily="'Yatra One', 'Tiro Devanagari Marathi', serif"
              textAnchor="middle"
              className="transition-opacity duration-700 delay-300"
            >
              <text x="250" y="170" fontSize="26">प्रतिपच्चन्द्रलेखेव</text>
              <text x="250" y="230" fontSize="25">वर्धिष्णुर्विश्ववन्दिता ।</text>
              <text x="250" y="290" fontSize="25">शाहसूनोः शिवस्यैषा</text>
              <text x="250" y="350" fontSize="24">मुद्रा भद्राय राजते ॥</text>
            </g>
          </svg>
        </div>

        {/* Title reveal */}
        <h2 className="mt-6 font-yatra text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold-light to-saffron tracking-wider animate-pulse">
          छत्रपती शिवाजी महाराज
        </h2>
        <p className="mt-1 text-xs text-ivory/60 font-mukta tracking-widest uppercase">
          हिंदवी स्वराज्याची अखंड प्रेरणा
        </p>

        <span className="mt-8 text-[11px] text-ivory/40 font-mukta border border-white/10 px-3 py-1 rounded-full hover:border-gold/50 transition-colors">
          क्लिक करून पुढे जा (Click to Skip)
        </span>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

