import React from 'react';
import { AshtapradhanSection } from '../sections/AshtapradhanSection';
import { Footer } from '../sections/Footer';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowLeft, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AshtapradhanPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen pt-28 bg-[#100921]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron hover:text-white transition-colors font-mukta"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'mr' ? '← मुख्यपृष्ठावर परत जा' : '← Back to Home'}</span>
        </Link>
      </div>

      <AshtapradhanSection />

      {/* Additional Historical Notes on the Council */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-16 p-8 rounded-2xl bg-black/40 border border-gold/40 text-left font-mukta">
        <div className="flex items-center gap-3 mb-4">
          <Crown className="w-6 h-6 text-gold" />
          <h3 className="font-yatra text-2xl text-saffron">
            {language === 'mr' ? 'अष्टप्रधान मंडळाची निर्मिती व आदर्श' : 'The Ashtapradhan Constitutional Legacy'}
          </h3>
        </div>
        <div className="space-y-4 text-xs sm:text-sm text-ivory/80 leading-relaxed">
          <p>
            {language === 'mr'
              ? "छत्रपती शिवाजी महाराजांनी १६७४ च्या राज्याभिषेकावेळी केवळ राज्य घोषित केले नाही, तर आधुनिक लोकशाही मंत्रिमंडळाप्रमाणे संपूर्ण प्रशासनाचे ८ स्वतंत्र विभागांमध्ये विभाजन केले. या ८ प्रधानांची पदे वंशपरंपरागत नव्हती, तर ती केवळ गुणवत्तेवर आधारित होती. कोणत्याही प्रधानाला जहागीर देण्याची प्रथा शिवरायांनी बंद केली आणि त्याऐवजी रोख वेतन (कॅश सॅलरी) सुरू केली."
              : "During the 1674 coronation, Shivaji Maharaj established an institutional governance architecture comprising eight specialized ministers. Crucially, ministerial positions were strictly non-hereditary and meritocratic. Feudal fiefs (Jagirs) were replaced with direct treasury salaries to prevent regional warlordism."}
          </p>
          <p>
            {language === 'mr'
              ? "न्यायाधीश आणि पंडितराव वगळता इतर सर्व ६ प्रधानांना युद्धकाळात स्वतः सैन्याचे नेतृत्व करणे बंधनकारक होते. छत्रपतींच्या राजमुद्रेसह या सर्व प्रधानांच्या स्वतःच्या स्वतंत्र अधिकृत मुद्रा व शिक्के होते, जे राज्यकारभारातील पारदर्शकता आणि जबाबदारीचे प्रतीक होते."
              : "Except for the Nyayadhish (Chief Justice) and Panditrao (Charity Minister), all other six ministers were trained warriors required to command troops during war. Each minister possessed a distinct state seal, reflecting strict institutional checks and balances."}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

