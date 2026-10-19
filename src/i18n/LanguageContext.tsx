import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'mr' | 'en';

interface TranslationLabels {
  nav: {
    itahas: string;
    gadkille: string;
    ashtapradhan: string;
    mohima: string;
    varsa: string;
    newBadge: string;
    timelinePage: string;
    fortsPage: string;
    councilPage: string;
  };
  hero: {
    title: string;
    tagline: string;
    scrollDown: string;
    exploreBtn: string;
    watchBtn: string;
  };
  timeline: {
    sectionHeading: string;
    subheading: string;
    viewAllTimeline: string;
  };
  forts: {
    sectionHeading: string;
    subheading: string;
    all: string;
    hill: string;
    sea: string;
    land: string;
    readMore: string;
    watch: string;
    viewAllForts: string;
    elevation: string;
    district: string;
    closeModal: string;
    features: string;
    battles: string;
  };
  warriors: {
    sectionHeading: string;
    subheading: string;
    flipPrompt: string;
  };
  ashtapradhan: {
    sectionHeading: string;
    subheading: string;
    centerTitle: string;
    centerSubtitle: string;
    minister1674: string;
    responsibilities: string;
    constitutionalPower: string;
    closeDetail: string;
    governanceFlowTitle: string;
    viewFullCouncil: string;
  };
  achievements: {
    sectionHeading: string;
    subheading: string;
  };
  navyAdmin: {
    sectionHeading: string;
    subheading: string;
    navyTitle: string;
    adminTitle: string;
  };
  quotes: {
    sectionHeading: string;
    subheading: string;
  };
  cta: {
    title: string;
    tagline: string;
    countdownTitle: string;
    joinBtn: string;
    days: string;
    hours: string;
    mins: string;
    secs: string;
    pill1: string;
    pill2: string;
    pill3: string;
  };
  footer: {
    salutation: string;
    rights: string;
    sources: string;
    backToTop: string;
  };
}

const translations: Record<Language, TranslationLabels> = {
  mr: {
    nav: {
      itahas: "इतिहास",
      gadkille: "गडकिल्ले",
      ashtapradhan: "अष्टप्रधान",
      mohima: "मोहिमा",
      varsa: "वारसा",
      newBadge: "नवीन",
      timelinePage: "कालपट",
      fortsPage: "दुर्गदर्शन",
      councilPage: "अष्टप्रधान मंडळ"
    },
    hero: {
      title: "छत्रपती शिवाजी महाराज",
      tagline: "हिंदवी स्वराज्याचे शिल्पकार • दुर्गपती • छत्रपती",
      scrollDown: "खाली स्क्रोल करा",
      exploreBtn: "स्वराज्य दर्शन",
      watchBtn: "शौर्यगाथा"
    },
    timeline: {
      sectionHeading: "इतिहास कालपट",
      subheading: "१६३० ते १६८०: शिवनेरीच्या जन्मापासून ते सार्वभौम राज्याभिषेकापर्यंतचा सुवर्णप्रवास",
      viewAllTimeline: "संपूर्ण कालपट उघडा"
    },
    forts: {
      sectionHeading: "दुर्गवैभव गडकिल्ले",
      subheading: "सह्याद्रीच्या उत्तुंग कड्यांवर वसलेले ३००+ अजिंक्य दुर्ग आणि सागरी जलदुर्ग",
      all: "सर्व किल्ले",
      hill: "गिरीदुर्ग (पर्वतीय)",
      sea: "जलदुर्ग (सागरी)",
      land: "भुईकोट",
      readMore: "सविस्तर माहिती",
      watch: "दुर्ग दर्शन",
      viewAllForts: "सर्व किल्ले एक्सप्लोर करा",
      elevation: "उंची",
      district: "जिल्हा",
      closeModal: "बंद करा",
      features: "वास्तुवैशिष्ट्ये",
      battles: "ऐतिहासिक लढाया"
    },
    warriors: {
      sectionHeading: "मावळे आणि रणयोध्ये",
      subheading: "ज्यांच्या असीम त्यागाने आणि रक्तातून स्वराज्याचा भगवा ध्वज फडकला",
      flipPrompt: "अधिक माहितीसाठी कार्ड पलटा"
    },
    ashtapradhan: {
      sectionHeading: "अष्टप्रधान मंडळ",
      subheading: "स्वराज्याची अष्टकोनी प्रशासकीय महाव्यवस्था • १६७४ चा ऐतिहासिक राजदरबार",
      centerTitle: "राजमुद्रा",
      centerSubtitle: "सार्वभौम छत्रपती",
      minister1674: "१६७४ चे प्रधान",
      responsibilities: "मुख्य कार्ये व जबाबदाऱ्या",
      constitutionalPower: "घटनात्मक अधिकार व शिक्का",
      closeDetail: "तपशील बंद करा",
      governanceFlowTitle: "स्वराज्य शासन प्रवाह (Governance Flow)",
      viewFullCouncil: "संपूर्ण दरबाराचा अभ्यास करा"
    },
    achievements: {
      sectionHeading: "स्वराज्य उपलब्धी",
      subheading: "अशक्य ते शक्य करणारी ३५० वर्षांची प्रेरणादायी आकडेवारी",
    },
    navyAdmin: {
      sectionHeading: "आरमार आणि प्रशासन",
      subheading: "सागरावर स्वतंत्र ताबा आणि रयतेच्या भाजीच्या देठालाही धक्का न लावणारी न्यायव्यवस्था",
      navyTitle: "मराठा आरमार (The Maratha Navy)",
      adminTitle: "रयतेचे सुराज्य (Civil Administration)"
    },
    quotes: {
      sectionHeading: "ऐतिहासिक वचने व विचार",
      subheading: "समकालीन इतिहासकार, बखरी आणि जागतिक विद्वानांचे गौरवपूर्ण उद्गार",
    },
    cta: {
      title: "स्वराज्य",
      tagline: "हे राज्य व्हावे, हे तो श्रींची इच्छा! आजच या अमर वारशाचा भाग व्हा.",
      countdownTitle: "शिवराज्याभिषेक सोहळा",
      joinBtn: "वारसा स्वीकारा (JOIN THE LEGACY)",
      days: "दिवस",
      hours: "तास",
      mins: "मिनिटे",
      secs: "सेकंद",
      pill1: "३५०+ वर्षे अखंड प्रेरणा",
      pill2: "३००+ अजिंक्य किल्ले",
      pill3: "न्याय व लोककल्याण"
    },
    footer: {
      salutation: "॥ जय भवानी • जय शिवाजी ॥",
      rights: "सर्व हक्क राखीव. हिंदवी स्वराज्याच्या अमर स्मृतीस विनम्र अभिवादन.",
      sources: "आधार: सभासद बखर, चितणीस बखर, ब्रिटिश फॅक्टरी रेकॉर्ड्स आणि ऐतिहासिक पुरावे.",
      backToTop: "शीर्षाकडे जा"
    }
  },
  en: {
    nav: {
      itahas: "ITIHAS",
      gadkille: "GADKILLE",
      ashtapradhan: "ASHTAPRADHAN",
      mohima: "MOHIMA",
      varsa: "VARSA",
      newBadge: "NEW",
      timelinePage: "TIMELINE",
      fortsPage: "FORTS",
      councilPage: "COUNCIL"
    },
    hero: {
      title: "CHHATRAPATI SHIVAJI MAHARAJ",
      tagline: "ARCHITECT OF HINDAVI SWARAJYA • SOVEREIGN MONARCH",
      scrollDown: "SCROLL TO DISCOVER",
      exploreBtn: "EXPLORE EMPIRE",
      watchBtn: "WATCH VALOR"
    },
    timeline: {
      sectionHeading: "HISTORICAL TIMELINE",
      subheading: "1630 TO 1680: THE SAGA FROM SHIVNERI TO THE CORONATION AT RAIGAD",
      viewAllTimeline: "OPEN COMPLETE TIMELINE"
    },
    forts: {
      sectionHeading: "MAJESTIC FORTRESSES",
      subheading: "OVER 300 SAHYADRI CITADELS AND UNCONQUERABLE OCEAN FORTS",
      all: "ALL FORTS",
      hill: "HILL FORTS",
      sea: "SEA FORTS",
      land: "LAND FORTS",
      readMore: "READ MORE",
      watch: "WATCH",
      viewAllForts: "EXPLORE ALL FORTS",
      elevation: "Elevation",
      district: "District",
      closeModal: "Close",
      features: "Architectural Features",
      battles: "Historical Battles"
    },
    warriors: {
      sectionHeading: "MAVLE & WARRIORS",
      subheading: "THE IMMORTAL LIONS WHOSE BLOOD AND HONOR UPHELD THE SAFFRON BANNER",
      flipPrompt: "Hover or tap card to flip"
    },
    ashtapradhan: {
      sectionHeading: "ASHTAPRADHAN MANDAL",
      subheading: "THE REVOLUTIONARY COUNCIL OF EIGHT • THE 1674 CORONATION DARBAR",
      centerTitle: "RAJMUDRA",
      centerSubtitle: "THE SOVEREIGN",
      minister1674: "1674 Minister",
      responsibilities: "Portfolios & Responsibilities",
      constitutionalPower: "Constitutional Seal & Authority",
      closeDetail: "Close Details",
      governanceFlowTitle: "Governance Hierarchy & Constitutional Flow",
      viewFullCouncil: "STUDY FULL DARBAR"
    },
    achievements: {
      sectionHeading: "SWARAJYA ACHIEVEMENTS",
      subheading: "QUANTIFIABLE TRIUMPHS THAT RESHAPED 17TH CENTURY INDIA",
    },
    navyAdmin: {
      sectionHeading: "NAVY & ADMINISTRATION",
      subheading: "MARITIME SUPREMACY BALANCED WITH UNCOMPROMISING CIVIC ETHICS",
      navyTitle: "MARATHA NAVY (Ocean Mastery)",
      adminTitle: "RYOTWARI & JUSTICE (Civil Code)"
    },
    quotes: {
      sectionHeading: "AUTHENTIC VOICES & QUOTES",
      subheading: "VERIFIED TESTIMONIALS FROM CONTEMPORARY HISTORIANS AND WORLD LEADERS",
    },
    cta: {
      title: "SWARAJYA",
      tagline: "THIS KINGDOM IS THE DIVINE WILL! COMMEMORATE THE ETERNAL LEGACY.",
      countdownTitle: "SHIVRAJYABHISHEK DIN IN",
      joinBtn: "JOIN THE LEGACY",
      days: "DAYS",
      hours: "HOURS",
      mins: "MINS",
      secs: "SECS",
      pill1: "350+ Years of Glory",
      pill2: "300+ Unbroken Forts",
      pill3: "Dharma & People First"
    },
    footer: {
      salutation: "॥ JAI BHAVANI • JAI SHIVAJI ॥",
      rights: "All rights reserved. Dedicated to the eternal legacy of Hindavi Swarajya.",
      sources: "Sources: Sabhasad Bakhar, Chitnis Bakhar, English Factory Records & State Archives.",
      backToTop: "BACK TO TOP"
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: TranslationLabels;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('mr');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'mr' ? 'en' : 'mr');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

