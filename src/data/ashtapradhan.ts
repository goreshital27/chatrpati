export interface AshtapradhanMember {
  id: string;
  order: number;
  titleDevanagari: string;
  titleEnglish: string;
  historicalOffice: string;
  ministerAtCoronation: string;
  ministerAtCoronationMr: string;
  roleDescription: {
    en: string;
    mr: string;
  };
  keyResponsibilities: {
    en: string[];
    mr: string[];
  };
  constitutionalPower: {
    en: string;
    mr: string;
  };
  sealInscription: string;
  iconName: string;
  colorAccent: string;
  angleDegrees: number; // for circular/octagonal positioning
  imagePath?: string;
}

export const ASHTAPRADHAN_MEMBERS: AshtapradhanMember[] = [
  {
    id: 'peshwa',
    order: 1,
    titleDevanagari: 'पंतप्रधान (पेशवा)',
    titleEnglish: 'Prime Minister (Peshwa)',
    historicalOffice: 'Mukhya Pradhan',
    ministerAtCoronation: 'Moropant Trimbak Pingle',
    ministerAtCoronationMr: 'मोरोपंत त्रिंबक पिंगळे',
    roleDescription: {
      en: 'The foremost minister of the Swarajya realm, exercising general executive authority over civil administration, public welfare, and military campaigns in the absence of the Chhatrapati.',
      mr: 'स्वराज्याचे मुख्य कारभारी; राजांच्या अनुपस्थितीत संपूर्ण मुलकी व लष्करी कारभारावर नियंत्रण ठेवणारे सर्वोच्च प्रधान.'
    },
    keyResponsibilities: {
      en: [
        'Supreme executive oversight over all provincial governors (Subedars)',
        'Sign and validate all major state treaties alongside the Chhatrapati',
        'Direct command over forts construction and major military expeditions',
        'Ensure welfare and justice for the common peasantry (Ryot)'
      ],
      mr: [
        'सर्व सुभेदारांवर आणि मुलकी कारभारावर सर्वोच्च देखरेख',
        'छत्रपतींनंतर सर्व महत्त्वाच्या राज्य करारांवर सही व शिक्का',
        'प्रमुख किल्ल्यांचे बांधकाम व लष्करी मोहिमांचे नेतृत्व',
        'रयतेच्या सुख आणि न्यायाची सुनिश्चिती'
      ]
    },
    constitutionalPower: {
      en: 'Second only to the Chhatrapati; possessed the authority to sign royal edicts with the formula "Murtasud" (Approved).',
      mr: 'छत्रपतींनंतरचे सर्वोच्च अधिकार; राजाज्ञांवर "मान्य" शिक्का मारण्याचा अधिकार.'
    },
    sealInscription: 'मोरोपंत त्रिंबक मुख्य प्रधान',
    iconName: 'Crown',
    colorAccent: '#FF9933',
    angleDegrees: 0,
    imagePath: '/assets/ministers/peshwa.svg'
  },
  {
    id: 'amatya',
    order: 2,
    titleDevanagari: 'पंत अमात्य (मजुमदार)',
    titleEnglish: 'Finance Minister (Amatya)',
    historicalOffice: 'Mahamatya / Mazumdar',
    ministerAtCoronation: 'Ramchandra Nilkanth',
    ministerAtCoronationMr: 'रामचंद्र नीलकंठ (बावडेकर)',
    roleDescription: {
      en: 'The custodian of the royal treasury and sovereign economy, responsible for budgeting, auditing provincial revenue, and financing the army and navy.',
      mr: 'स्वराज्याचे अर्थमंत्री; खजिना, महसूल, वार्षिक अंदाजपत्रक आणि लष्करी-सागरी खर्चाचे अचूक हिशोब ठेवणारे धुरंधर.'
    },
    keyResponsibilities: {
      en: [
        'Manage the central treasury (Koshaghar) and precious gemstone reserves',
        'Audit accounts of all 300+ forts and regional karkhanas annually',
        'Establish fair agricultural taxation based on crop yields, not estimates',
        'Regulate trade tariffs and foreign merchant duties'
      ],
      mr: [
        'मध्यवर्ती खजिना आणि मौल्यवान रत्नांचे संरक्षण व व्यवस्थापन',
        'सर्व ३००+ किल्ल्यांचे व शासकीय कारखान्यांचे वार्षिक लेखापरीक्षण',
        'पिकांच्या प्रत्यक्ष उत्पादनावर आधारित न्याय्य शेतसारा आकारणी',
        'व्यापारी कर आणि परकीय वस्तूंवरील जकात नियंत्रण'
      ]
    },
    constitutionalPower: {
      en: 'Inspected and counter-signed every expenditure ledger of Swarajya before disbursement.',
      mr: 'स्वराज्यातील प्रत्येक खर्चाच्या खतावणीवर स्वाक्षरी करण्याचा अनिर्बंध अधिकार.'
    },
    sealInscription: 'रामचंद्र नीलकंठ अमात्य',
    iconName: 'Coins',
    colorAccent: '#D4AF37',
    angleDegrees: 45,
    imagePath: '/assets/ministers/amatya.svg'
  },
  {
    id: 'sachiv',
    order: 3,
    titleDevanagari: 'पंत सचिव (सुरनिस)',
    titleEnglish: 'Comptroller & Chief Secretary (Sachiv)',
    historicalOffice: 'Surnis / Rajyachitnis',
    ministerAtCoronation: 'Annaji Datto',
    ministerAtCoronationMr: 'अण्णाजी दत्तो',
    roleDescription: {
      en: 'Overseer of royal correspondence, state land records, and the imperial secretariat. Conducted the historic progressive land revenue survey of Swarajya.',
      mr: 'शासकीय पत्रव्यवहार, दस्तऐवज आणि भूमी महसुलाचे प्रमुख; ज्यांनी स्वराज्यात ऐतिहासिक "अण्णाजी दत्तो पाहणी" महसूल पद्धत लागू केली.'
    },
    keyResponsibilities: {
      en: [
        'Formulate and vet all royal orders (Farman) and diplomatic letters',
        'Administer the Annaji Datto Cadastral Survey protecting farmer land rights',
        'Ensure accuracy of state registers and prevent bureaucratic corruption',
        'Command strategic fortress garrisons during wartime'
      ],
      mr: [
        'सर्व शाही फर्मान आणि राजनैतिक पत्रांचे सूक्ष्म परीक्षण व लेखन',
        'शेतकऱ्यांचे हक्क सुरक्षित ठेवणारी जमीन मोजणी व वर्गीकरण पद्धत',
        'दप्तरखान्याची अचूकता आणि भ्रष्टाचाराला आळा घालण्याची जबाबदारी',
        'युद्धकाळात सैन्याचे नेतृत्व आणि किल्ल्यांची व्यवस्था'
      ]
    },
    constitutionalPower: {
      en: 'Authenticated each royal letter with the word "Nivadla" (Scrutinized & Verified).',
      mr: 'प्रत्येक सरकारी पत्रावर "निवाडला" (तपासले) असा शेरा मारण्याचा कायदेशीर अधिकार.'
    },
    sealInscription: 'अण्णाजी दत्तो सचिव',
    iconName: 'Scroll',
    colorAccent: '#E8B4B8',
    angleDegrees: 90,
    imagePath: '/assets/ministers/sachiv.svg'
  },
  {
    id: 'mantri',
    order: 4,
    titleDevanagari: 'पंत मंत्री (वाकेनीस)',
    titleEnglish: 'Home Minister & Chronicler (Mantri)',
    historicalOffice: 'Waqenavis',
    ministerAtCoronation: 'Dattaji Trimbak',
    ministerAtCoronationMr: 'दत्ताजी त्रिंबक',
    roleDescription: {
      en: 'In charge of the sovereign court’s internal affairs, the royal daily diary (Roznamcha), espionage intelligence networks, and personal royal security.',
      mr: 'अंतर्गत सुरक्षा, दरबाराचे कामकाज, गुप्तहेर खात्याचा समन्वय आणि छत्रपतींच्या दैनंदिन सुरक्षिततेचे प्रमुख.'
    },
    keyResponsibilities: {
      en: [
        'Maintain the official daily record of the Chhatrapati’s court proceedings',
        'Liaise with Bahirji Naik’s legendary intelligence network (Guptahar Khate)',
        'Oversee the royal household, banquet inspections, and personal protection',
        'Monitor civil order across all Swarajya towns and settlements'
      ],
      mr: [
        'दरबारातील दैनंदिन घटनांची अधिकृत नोंद (रोजनिशी) ठेवणे',
        'बहिर्जी नाईक यांच्या गुप्तहेर यंत्रणेशी थेट समन्वय',
        'राजवाडा, भोजन व्यवस्था व छत्रपतींच्या अंगरक्षकांची देखरेख',
        'स्वराज्यातील अंतर्गत शांतता व कायदा सुव्यवस्था'
      ]
    },
    constitutionalPower: {
      en: 'Vetted all internal palace appointments and supervised imperial counter-intelligence.',
      mr: 'राजवाड्यातील सर्व नियुक्त्यांची पडताळणी आणि गुप्त माहितीचे विश्लेषण.'
    },
    sealInscription: 'दत्ताजी त्रिंबक मंत्री',
    iconName: 'ShieldAlert',
    colorAccent: '#FF7F50',
    angleDegrees: 135,
    imagePath: '/assets/ministers/mantri.svg'
  },
  {
    id: 'senapati',
    order: 5,
    titleDevanagari: 'सेनापती (सरनौबत)',
    titleEnglish: 'Commander-in-Chief (Senapati)',
    historicalOffice: 'Sar-i-Naubat',
    ministerAtCoronation: 'Hambirrao Mohite',
    ministerAtCoronationMr: 'हंबीरराव मोहिते',
    roleDescription: {
      en: 'Supreme military commander of all infantry (Hasham) and cavalry (Paga & Shiledar), responsible for troop recruitment, tactical readiness, and theater combat.',
      mr: 'स्वराज्याच्या संपूर्ण पायदळ व घोडदळाचे सरसेनापती; सैन्याची भरती, प्रशिक्षण, शिस्त आणि युद्ध मोहिमांचे धुरंधर सेनानी.'
    },
    keyResponsibilities: {
      en: [
        'Direct command of the mobile cavalry striking forces and mountain infantry',
        'Execute the military doctrine of Ganimi Kava (guerrilla blitzkrieg)',
        'Strict enforcement of military ethics: no looting of civilians, women, or farms',
        'Strategic maintenance of border outposts and supply lines'
      ],
      mr: [
        'मराठा घोडदळ आणि दुर्गम डोंगरी पायदळाचे प्रत्यक्ष नेतृत्व',
        'गनिमी कावा युद्धनीतीचा अचूक व घातक वापर',
        'कडक लष्करी आचारसंहिता: रयत, स्त्रिया व पिकांना धक्का न लावण्याचे नियम',
        'सीमाभागातील ठाणी व युद्धसामग्री पुरवठ्याचे नियोजन'
      ]
    },
    constitutionalPower: {
      en: 'Had absolute tactical autonomy on the battlefield under the Chhatrapati’s war council directives.',
      mr: 'रणभूमीवर युद्ध डावपेचांचे संपूर्ण स्वायत्त अधिकार.'
    },
    sealInscription: 'हंबीरराव मोहिते सेनापती',
    iconName: 'Swords',
    colorAccent: '#8B1A1A',
    angleDegrees: 180,
    imagePath: '/assets/ministers/senapati.svg'
  },
  {
    id: 'sumant',
    order: 6,
    titleDevanagari: 'पंत सुमंत (दबीर)',
    titleEnglish: 'Foreign Minister (Sumant)',
    historicalOffice: 'Dabir',
    ministerAtCoronation: 'Ramchandra Trimbak',
    ministerAtCoronationMr: 'रामचंद्र त्रिंबक',
    roleDescription: {
      en: 'Architect of external affairs, handling alliances, foreign ambassadors (Vakils), negotiations with European trading companies, and intelligence from rival sultanates.',
      mr: 'स्वराज्याचे परराष्ट्र मंत्री; इतर साम्राज्ये, युरोपीय वखारी व मुघल-आदिलशाही दरबारांशी मुत्सद्देगिरीचे संबंध सांभाळणारे राजनयिक.'
    },
    keyResponsibilities: {
      en: [
        'Receive and examine foreign ambassadors from England, Portugal, France, etc.',
        'Negotiate peace treaties, war pacts, and maritime commercial agreements',
        'Deploy confidential diplomatic envoys across India',
        'Advise the Chhatrapati on geopolitical shifts and balance of power'
      ],
      mr: [
        'ब्रिटिश, पोर्तुगीज, फ्रेंच इत्यादी परकीय वकिलांशी वाटाघाटी व स्वागत',
        'शांतता तह, युतीचे करार आणि सागरी व्यापारी नियम ठरवणे',
        'दिल्ली, विजापूर, गोवळकोंडा येथे विश्वासू मुत्सद्दी पाठवणे',
        'दख्खन व भारताच्या आंतरराष्ट्रीय राजकारणाचा अचूक अंदाज देणे'
      ]
    },
    constitutionalPower: {
      en: 'Drafted all foreign communique with foreign powers, requiring ministerial seal.',
      mr: 'परकीय सत्तांशी होणाऱ्या सर्व अधिकृत पत्रव्यवहारावर मुत्सद्दी सहीचा अधिकार.'
    },
    sealInscription: 'रामचंद्र त्रिंबक सुमंत',
    iconName: 'Globe',
    colorAccent: '#4682B4',
    angleDegrees: 225,
    imagePath: '/assets/ministers/sumant.svg'
  },
  {
    id: 'nyayadhish',
    order: 7,
    titleDevanagari: 'न्यायाधीश (काझी/प्रधान)',
    titleEnglish: 'Chief Justice (Nyayadhish)',
    historicalOffice: 'Chief Justice of Swarajya',
    ministerAtCoronation: 'Niraji Raoji',
    ministerAtCoronationMr: 'निराजी रावजी',
    roleDescription: {
      en: 'The guardian of righteousness and constitutional law, presiding over civil, criminal, and military tribunals without discrimination of caste, creed, or status.',
      mr: 'स्वराज्याचे मुख्य न्यायाधीश; जात, धर्म किंवा पदाचा भेद न करता सर्वांना निःपक्षपाती न्याय देणारे धर्मधुरंधर.'
    },
    keyResponsibilities: {
      en: [
        'Highest appellate court under the Chhatrapati (Hajir Majlis)',
        'Ensure the rule of law: even royal relatives faced equal consequences',
        'Codify customary village Panchayats and resolve boundary disputes',
        'Protect human rights, religious freedom, and civil liberties'
      ],
      mr: [
        'छत्रपतींच्या उपस्थितीत चालणाऱ्या सर्वोच्च न्यायसभेचे (हाजीर मजलिस) संचलन',
        'कायद्याचे राज्य: अपराध्याला कठोर शिक्षा, भले तो नातेवाईक का असेना',
        'ग्रामपंचायतींचे न्यायनिवाडे व सीमा तंटे सोडवणे',
        'रयतेचे मूलभूत हक्क व धार्मिक स्वातंत्र्याचे रक्षण'
      ]
    },
    constitutionalPower: {
      en: 'Possessed legal authority to pronounce verdicts and issue the "Nivadpatra" (Judgment Decree).',
      mr: 'अंतिम न्यायनिवाडा करून अधिकृत "निवाडपत्र" देण्याचा कायदेशीर अधिकार.'
    },
    sealInscription: 'निराजी रावजी न्यायाधीश',
    iconName: 'Scale',
    colorAccent: '#9370DB',
    angleDegrees: 270,
    imagePath: '/assets/ministers/nyayadhish.svg'
  },
  {
    id: 'panditrao',
    order: 8,
    titleDevanagari: 'पंडितराव (दानाध्यक्ष)',
    titleEnglish: 'Minister of Religion & Charity (Panditrao)',
    historicalOffice: 'Danadhyaksha',
    ministerAtCoronation: 'Raghunath Pandit',
    ministerAtCoronationMr: 'रघुनाथ पंडित (हणमंते)',
    roleDescription: {
      en: 'The minister of cultural integrity, religious harmony, educational endowments, and state charities, ensuring the preservation of indigenous arts and knowledge.',
      mr: 'धर्मादाय, संस्कृती व विद्वत्तेचे प्रमुख; सर्व धर्मांचा आदर करत शिक्षण, विद्वान आणि समाजसेवेला राजाश्रय देणारे मंत्री.'
    },
    keyResponsibilities: {
      en: [
        'Dispense state charities, famine relief, and temple grants regardless of faith',
        'Commission the Rajya Vyavahara Kosha (Sanskrit glossary replacing Persian terms)',
        'Settle religious and moral disputes through Vedic and ethical scholarship',
        'Honor scholars, poets, astronomers, and philosophers across the nation'
      ],
      mr: [
        'दुष्काळ निवारण, दानधर्म आणि सर्वधर्मीय प्रार्थनास्थळांना वार्षिक सनदा',
        'फारसी शब्दांऐवजी मराठी-संस्कृत शब्दकोश "राज्यव्यवहार कोश" निर्मिती',
        'धार्मिक व नैतिक वादांचे विद्वत्तेने निराकरण',
        'विद्वान, कवी, ज्योतिषी व कलावंतांना मानाचे पुरस्कार व मदत'
      ]
    },
    constitutionalPower: {
      en: 'Sanctioned all religious charters and cultural edicts with the seal "Sammati" (Approved).',
      mr: 'सर्व धर्मादाय व सांस्कृतिक आज्ञापत्रांवर "संमती" शिक्का मारण्याचा अधिकार.'
    },
    sealInscription: 'रघुनाथ पंडित दानाध्यक्ष',
    iconName: 'BookOpen',
    colorAccent: '#E6BE8A',
    angleDegrees: 315,
    imagePath: '/assets/ministers/panditrao.svg'
  }
];
