export interface Achievement {
  id: string;
  count: number;
  suffix: string;
  title: { en: string; mr: string };
  subtitle: { en: string; mr: string };
  description: { en: string; mr: string };
  citation: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'forts',
    count: 370,
    suffix: '+',
    title: { en: 'Impregnable Fortresses', mr: 'अभेद्य किल्ले' },
    subtitle: { en: 'Hill, Sea & Land Forts', mr: 'गिरी, जल व भुईकोट दुर्ग' },
    description: {
      en: 'Built 111 new fortresses and renovated over 240 existing citadels across Maharashtra, Goa, Karnataka, and Tamil Nadu.',
      mr: '१११ नवीन किल्ल्यांची निर्मिती आणि २४० हून अधिक जुन्या किल्ल्यांचे नूतनीकरण करून सह्याद्रीला अजिंक्य तटबंदीचे रूप दिले.'
    },
    citation: 'Sabhasad Bakhar (1697) & Ramchandra Nilkanth’s Adnyapatra'
  },
  {
    id: 'navy',
    count: 400,
    suffix: '+',
    title: { en: 'Naval Warships', mr: 'लढाऊ युद्धनौका' },
    subtitle: { en: 'Father of Indian Navy', mr: 'भारतीय आरमाराचे जनक' },
    description: {
      en: 'Pioneered an indigenous ocean armada consisting of Gurabs, Galbats, Machvas, and Tarandes, defending 300 miles of coastline.',
      mr: 'गुराबा, गलबते, पाल व तरांडी अशा ४०० हून अधिक लढाऊ जहाजांचे आरमार उभारून पश्चिमेकडील सागरी मक्तेदारी मोडून काढली.'
    },
    citation: 'British East India Company Factory Records & Portuguese Goa Archives'
  },
  {
    id: 'cavalry',
    count: 45000,
    suffix: '+',
    title: { en: 'Elite Maratha Cavalry', mr: 'विद्युत घोडदळ' },
    subtitle: { en: 'Paga & Shiledar Warriors', mr: 'पागा व शिलेदार सेना' },
    description: {
      en: 'A lightning mobile strike force operating on the revolutionary doctrine of Ganimi Kava (guerrilla blitzkrieg).',
      mr: 'गनिमी काव्याच्या तत्त्वावर आधारलेले, वाऱ्याच्या वेगाने मुघल छावण्यांवर अचूक प्रहार करणारे अत्यंत शिस्तबद्ध घोडदळ.'
    },
    citation: 'Chitnis Bakhar & Khafi Khan’s Muntakhab-ul Lubab'
  },
  {
    id: 'coronation',
    count: 1674,
    suffix: '',
    title: { en: 'Shivrajyabhishek', mr: 'सार्वभौम राज्याभिषेक' },
    subtitle: { en: 'Founding of the Realm', mr: 'स्वतंत्र शक व सार्वभौमत्व' },
    description: {
      en: 'Crowned on the 32-maund golden throne at Raigad; introduced the sovereign Rajyabhishek Shaka calendar and gold Hon currency.',
      mr: 'रायगडावर ३२ मण सोन्याच्या सिंहासनावर राज्याभिषेक; स्वतंत्र राज्याभिषेक शक आणि सुवर्ण "होन" व तांब्याची "शिवराई" नाणी जारी केली.'
    },
    citation: 'Contemporary eyewitness accounts by English ambassador Henry Oxinden'
  },
  {
    id: 'ryotwari',
    count: 100,
    suffix: '%',
    title: { en: 'Welfare Administration', mr: 'रयतेचे कल्याणकारी राज्य' },
    subtitle: { en: 'Fair Taxation & Farmer Protection', mr: 'शेतकरी संरक्षण व कडक कायदे' },
    description: {
      en: 'A strict decree prohibiting troops from touching even a vegetable stalk of the peasantry, ensuring zero exploitation.',
      mr: "'रयतेच्या भाजीच्या देठालाही हात लावू नका!' असा कडक लष्करी नियम घालून शेतकऱ्यांची संपूर्ण पिळवणूक बंद केली."
    },
    citation: 'Royal Letter to Chiplun Cantonment Officers (1674)'
  }
];

export interface PolicyHighlight {
  id: string;
  category: 'navy' | 'admin';
  title: { en: string; mr: string };
  description: { en: string; mr: string };
  badge: { en: string; mr: string };
}

export const POLICIES: PolicyHighlight[] = [
  {
    id: 'navy-1',
    category: 'navy',
    title: { en: 'Indigenous Shipyards & Fortress Ports', mr: 'स्वदेशी जहाज बांधणी व जलदुर्ग' },
    description: {
      en: 'Established modern naval docks at Malvan, Vijaydurg, and Kalyan, constructing ships engineered specifically for shallow coastal reef navigation.',
      mr: 'मालवण, विजयदुर्ग व कल्याण येथे स्वदेशी गोद्या उभारल्या. उथळ पाण्यातही सहज हालचाल करू शकणाऱ्या चपळ जहाजांची निर्मिती केली.'
    },
    badge: { en: 'NAVAL SOVEREIGNTY', mr: 'सागरी सार्वभौमत्व' }
  },
  {
    id: 'navy-2',
    category: 'navy',
    title: { en: 'Chauth Maritime Customs Control', mr: 'सागरी जकात व व्यापारी संरक्षण' },
    description: {
      en: 'Challenged European monopoly by requiring British and Portuguese vessels to purchase Maratha transit passes (Dastak), protecting local trade.',
      mr: 'युरोपीय सत्तांच्या मक्तेदारीला लगाम घालत त्यांच्या जहाजांवर दस्तक (परवाना) सक्तीचा केला आणि भारतीय व्यापाऱ्यांचे रक्षण केले.'
    },
    badge: { en: 'TRADE DEFENSE', mr: 'व्यापारी संरक्षण' }
  },
  {
    id: 'admin-1',
    category: 'admin',
    title: { en: 'Sanctity and Protection of Women', mr: 'महिलांचा सर्वोच्च सन्मान व कडक शिक्षा' },
    description: {
      en: 'Unbending judicial code: any insult or disrespect to women—regardless of enemy status or faith—resulted in immediate severe punishment (exemplified in the Subedar of Kalyan incident).',
      mr: 'कल्याणच्या सुभेदाराच्या सुनेला मानाची साडी-चोळी देऊन सुखरूप परत पाठवले. महिलांचा अवमान करणाऱ्या अपराध्याला तात्काळ देहांत शासन देण्याची कठोर नियमावली.'
    },
    badge: { en: 'ETHICAL GOVERNANCE', mr: 'नैतिक आचारसंहिता' }
  },
  {
    id: 'admin-2',
    category: 'admin',
    title: { en: 'Universal Religious Harmony', mr: 'सर्वधर्मसमभाव व सांस्कृतिक स्वातंत्र्य' },
    description: {
      en: 'Guaranteed total protection to mosques, churches, and scriptures during war. Employed trusted Muslim generals like Siddi Hilal, Darya Sarang, and Madari Mehtar.',
      mr: 'युद्धातही कुराण व मशिदींचा सन्मान करण्याचा स्पष्ट हुकूम. दर्यासारंग, सिद्दी हिलाल, मदारी मेहतर अशा विश्वासू मुस्लिमांना सैन्यात सर्वोच्च पदे दिली.'
    },
    badge: { en: 'RELIGIOUS FREEDOM', mr: 'सर्वधर्मसमभाव' }
  },
  {
    id: 'admin-3',
    category: 'admin',
    title: { en: 'The Shivrajyabhishek Shaka Calendar', mr: 'शिवराज्याभिषेक शक व भाषा पुनरुज्जीवन' },
    description: {
      en: 'Abolished dependence on foreign Hijri and Persian calendars by inaugurating an indigenous era, commissioning the Rajya Vyavahara Kosha dictionary.',
      mr: 'परकीय कालगणना आणि फारसी भाषेचा प्रभाव कमी करण्यासाठी स्वतःचे "शिवराज्याभिषेक शक" सुरू केले आणि मराठी-संस्कृत शब्दकोश तयार करवला.'
    },
    badge: { en: 'CULTURAL REVIVAL', mr: 'सांस्कृतिक पुनरुज्जीवन' }
  }
];
