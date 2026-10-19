export interface TimelineEvent {
  year: number;
  dateStr: { en: string; mr: string };
  title: { en: string; mr: string };
  location: { en: string; mr: string };
  summary: { en: string; mr: string };
  detailedHistory: { en: string; mr: string };
  significance: { en: string; mr: string };
  quote?: { text: { en: string; mr: string }; source: string };
  tag: { en: string; mr: string };
  badgeText: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1630,
    dateStr: { en: "19 February 1630", mr: "१९ फेब्रुवारी १६३०" },
    title: { en: "Birth at Shivneri Fort", mr: "शिवनेरीवर शिवजन्मोत्सव" },
    location: { en: "Shivneri, Junnar", mr: "शिवनेरी किल्ला, जुन्नर" },
    summary: {
      en: "Born to Rajmata Jijabai and Shahaji Raje Bhosale. Named after Goddess Shivai, destined to establish Hindavi Swarajya.",
      mr: "राजमाता जिजाऊ आणि शहाजीराजे यांच्या पोटी जन्म. शिवाई देवीच्या आशीर्वादाने हिंदवी स्वराज्याची पहाट उगवली."
    },
    detailedHistory: {
      en: "Amidst an era of relentless foreign oppression in the Deccan, Jijabai prayed to Goddess Shivai for a valiant son who would protect Dharma, justice, and the common people. Born in the hill fortress of Shivneri, the young prince grew up hearing tales of the Ramayana and Mahabharata, instilled with unparalleled integrity and military acumen.",
      mr: "दख्खनमधील जुलमी सत्तांच्या काळात रयतेच्या रक्षणासाठी जिजाऊंनी शिवाई देवीला नवस केला. शिवनेरीच्या दुर्गम कड्यांवर बाल शिवबांनी रामायण-महाभारताचे संस्कार आणि युद्धकलेचे धडे घेतले."
    },
    significance: { en: "The inception of an independent indigenous sovereign dream.", mr: "स्वातंत्र्य आणि स्वराज्याचा आरंभबिंदू." },
    tag: { en: "GENESIS", mr: "शिवजन्म" },
    badgeText: "1630"
  },
  {
    year: 1645,
    dateStr: { en: "26 April 1645", mr: "२६ एप्रिल १६४५" },
    title: { en: "Oath of Swarajya & Torna", mr: "रायरेश्वरावर शपथ व तोरणा विजय" },
    location: { en: "Raireshwar & Torna Fort", mr: "रायरेश्वर पठार व तोरणा किल्ला" },
    summary: {
      en: "At age 15, Shivaji Maharaj and his young Mavla companions took the sacred blood oath of Hindavi Swarajya at Raireshwar Temple, capturing Torna fort.",
      mr: "वयाच्या अवघ्या १५ व्या वर्षी रायरेश्वराच्या पिंडीवर रक्ताभिषेक करून हिंदवी स्वराज्याची शपथ घेतली आणि तोरणा किल्ला जिंकला."
    },
    detailedHistory: {
      en: "Gathering the fiercely loyal youth of the Maval hills, Shivaji declared: 'The kingdom is God's will; Hindavi Swarajya must be established!' Soon after, they unfurled the saffron flag over Torna (Prachandagad), uncovering hidden treasure used to fortify Rajgad.",
      mr: "'हे राज्य व्हावे, हे तो श्रींची इच्छा!' अशी सिंहगर्जना करत शिवरायांनी तोरणा जिंकून स्वराज्याचे तोरण बांधले. सापडलेल्या द्रव्याने राजगडाची उभारणी केली."
    },
    significance: { en: "Proclamation of divine sovereign independence for the people.", mr: "रयतेच्या सार्वभौम स्वराज्याची प्रत्यक्ष घोषणा." },
    tag: { en: "SWARAJYA OATH", mr: "स्वराज्य शपथ" },
    badgeText: "1645"
  },
  {
    year: 1659,
    dateStr: { en: "10 November 1659", mr: "१० नोव्हेंबर १६५९" },
    title: { en: "Battle of Pratapgad", mr: "प्रतापगडाचा रणसंग्राम" },
    location: { en: "Pratapgad Foothills", mr: "प्रतापगड पायथा, जावळी" },
    summary: {
      en: "The annihilation of Bijapur's gargantuan general Afzal Khan through unmatched tactical brilliance and personal bravery.",
      mr: "स्वराज्यावर चालून आलेल्या बलाढ्य अफझलखानाचा प्रतापगडाच्या पायथ्याशी वध करून विजापुरी सैन्याचा धुव्वा उडवला."
    },
    detailedHistory: {
      en: "Afzal Khan marched with 30,000 elite troops, desecrating temples to provoke Shivaji into open plains. Instead, Shivaji drew him into the impenetrable Jawali jungles. When Khan attempted treachery during the sham peace meeting, Shivaji neutralized him with the Wagh Nakh (tiger claws) and Bichawa.",
      mr: "अफझलखानाने दगाफटका करण्याचा प्रयत्न करताच महाराजांनी वाघनखे आणि बिचव्याच्या साहाय्याने त्याचा कोथळा बाहेर काढला. जावळीच्या खोऱ्यात मराठ्यांनी खानाच्या सेनेला धूळ चारली."
    },
    significance: { en: "First major military triumph that shocked the entire subcontinent.", mr: "आदिलशाहीची कंबरडे मोडणारा महापराक्रम." },
    tag: { en: "VICTORY", mr: "रणविजय" },
    badgeText: "1659"
  },
  {
    year: 1660,
    dateStr: { en: "13 July 1660", mr: "१३ जुलै १६६०" },
    title: { en: "Battle of Pavankhind", mr: "पावनखिंडीचा अमर संग्राम" },
    location: { en: "Ghodkhind (Pavankhind)", mr: "घोडखिंड (पावनखिंड)" },
    summary: {
      en: "Baji Prabhu Deshpande and 300 Bandal warriors held back Siddi Johar's overwhelming army until Maharaj reached safety at Vishalgad.",
      mr: "बाजीप्रभू देशपांडे व ३०० बांदल मावळ्यांनी सिद्दीच्या हजारो फौजांना रोखून धरत महाराजांना सुरक्षित विशाळगडी पोहोचवले."
    },
    detailedHistory: {
      en: "Trapped in Panhala during the monsoon siege, Shivaji executed a daring night breakout. Shiva Kashid made the supreme sacrifice by masquerading as Maharaj. Baji Prabhu fought while mortally wounded at Ghodkhind, refusing to breathe his last until the 3 cannon shots boomed from Vishalgad.",
      mr: "पन्हाळगडाच्या वेढ्यातून शिवा काशिद यांनी शिवरायांचे रूप घेऊन प्राणांचे बलिदान दिले. बाजीप्रभूंनी रक्ताच्या शेवटच्या थेंबापर्यंत खिंड लढवली व तोफांचा आवाज ऐकूनच प्राण सोडले."
    },
    significance: { en: "The gold standard of loyalty, sacrifice, and rearguard tactics in world military history.", mr: "मावळ्यांच्या निष्ठेचा व बलिदानाचा सर्वोच्च आदर्श." },
    tag: { en: "VALOR", mr: "अमर शौर्य" },
    badgeText: "1660"
  },
  {
    year: 1664,
    dateStr: { en: "6–10 January 1664", mr: "६–१० जानेवारी १६६४" },
    title: { en: "Strategic Raid on Surat", mr: "सुरतेची पहिली स्वारी" },
    location: { en: "Surat Port, Gujarat", mr: "सुरत बंदर, गुजरात" },
    summary: {
      en: "Surgical raid on the Mughal Empire's wealthiest mercantile port to recoup wartime damages inflicted by Shaista Khan.",
      mr: "शाइस्तेखानाने महाराष्ट्रात केलेल्या नासधुशीची भरपाई म्हणून मुघलांच्या सर्वात श्रीमंत व्यापारी बंदरावर यशस्वी मोहीम."
    },
    detailedHistory: {
      en: "After Shaista Khan ravaged Pune for 3 years, Shivaji struck Mughal finances at their absolute jugular. Surat yielded immense gold and resources for the Swarajya treasury, strictly exempting civilian homes, foreign missionaries, and poor citizens from harm.",
      mr: "मराठ्यांनी सुरतेतील मुघल खजिन्यावर नियंत्रण मिळवले, परंतु सामान्य नागरिक, गरिबांची घरे व धार्मिक स्थळांना अजिबात धक्का लावू दिला नाही."
    },
    significance: { en: "Exposed Mughal economic vulnerability and funded Maratha naval fortifications.", mr: "मुघल साम्राज्याला आर्थिक हादरा व मराठा आरमाराची उभारणी." },
    tag: { en: "STRATEGY", mr: "आर्थिक रणनीती" },
    badgeText: "1664"
  },
  {
    year: 1665,
    dateStr: { en: "11 June 1665", mr: "११ जून १६६५" },
    title: { en: "Treaty of Purandar", mr: "पुरंदरचा तह" },
    location: { en: "Purandar Fort", mr: "पुरंदर किल्ला" },
    summary: {
      en: "Following Murarbaji's epic defense, a calculated diplomatic retreat ceding 23 forts temporarily to regroup for greater victory.",
      mr: "मुरारबाजींच्या अभूतपूर्व शौर्यानंतर, रयतेच्या रक्षणासाठी २३ किल्ले तात्पुरते मुघलांना देऊन धोरणात्मक माघार घेतली."
    },
    detailedHistory: {
      en: "Confronted by Mirza Raja Jai Singh's imperial artillery and Diler Khan's ruthless assaults, Shivaji chose tactical survival over futile attrition. Surrendering 23 forts while retaining 12, he bided his time to launch an unstoppable counter-offensive 5 years later.",
      mr: "राजा जयसिंगाच्या बलाढ्य सैन्याविरुद्ध लढताना शक्तीपेक्षा युक्ती श्रेष्ठ मानून महाराजांनी तह केला. पुढे अवघ्या काही वर्षांत सर्व किल्ले पुन्हा जिंकून घेतले."
    },
    significance: { en: "A masterclass in strategic retreat and diplomatic patience.", mr: "धोरणात्मक माघार आणि मुत्सद्देगिरीचा अद्वितीय नमुना." },
    tag: { en: "DIPLOMACY", mr: "मुत्सद्देगिरी" },
    badgeText: "1665"
  },
  {
    year: 1666,
    dateStr: { en: "17 August 1666", mr: "१७ ऑगस्ट १६६६" },
    title: { en: "Daring Escape from Agra", mr: "आग्र्याहून अद्भूत सुटका" },
    location: { en: "Agra, North India", mr: "आग्रा दरबार व महाल" },
    summary: {
      en: "Outwitted Aurangzeb right under imperial nose and escaped house arrest in sweetmeat baskets, traversing 1,000 miles back to Maharashtra.",
      mr: "औरंगजेबाच्या कडेकोट पह stand ला चकवून मिठाईच्या पेट्यांमधून बाल संभाजीराजांसह निसटून महाराष्ट्रात सुखरूप पुनरागमन."
    },
    detailedHistory: {
      en: "Insulted in Aurangzeb's court, Shivaji Maharaj openly protested and was placed under lethal house arrest. Feigning illness, he began donating massive baskets of sweets and fruits to holy men. On 17 August, Shivaji and Prince Sambhaji escaped inside the baskets, disguising as ascetics to return to Raigad.",
      mr: "दरबारात झालेल्या अपमानाचा जाब विचारल्यामुळे नजरकैदेत ठेवले. आजारी असल्याचे भासवून गरिबांना मिठाई वाटण्यास सुरुवात केली आणि अखेर एका पेट्यात बसून आग्र्यातून निसटले."
    },
    significance: { en: "One of the most audacious, celebrated intelligence escapes in world espionage lore.", mr: "जगातील सर्वात धाडसी व बुद्धिकौशल्याची गुप्त सुटका." },
    tag: { en: "ESCAPE", mr: "अद्भूत सुटका" },
    badgeText: "1666"
  },
  {
    year: 1670,
    dateStr: { en: "4 February 1670", mr: "४ फेब्रुवारी १६७०" },
    title: { en: "Recapture of Sinhagad", mr: "सिंहगडाची शौर्यगाथा" },
    location: { en: "Sinhagad (Kondhana)", mr: "सिंहगड (कोंढाणा)" },
    summary: {
      en: "Subedar Tanaji Malusare scale the sheer precipice of Kondhana with ghorpad rope and captured the fort, becoming immortal.",
      mr: "सुभेदार तानाजी मालुसरे यांनी घोरपडीच्या साहाय्याने द्रोणागिरी कडा चढून सिंहगड सर केला आणि वीरमरण पत्करले."
    },
    detailedHistory: {
      en: "Leaving his son Rayaba's wedding uncelebrated, Tanaji proclaimed 'Aadhi lagin Kondhanacha, mag maajhya Rayabacha!' With brother Suryaji and 500 Mavlas, they scaled the impossible sheer western cliff at midnight, slew Mughal fortress commander Udaybhan, and secured the fort.",
      mr: "'आधी लगीन कोंढाण्याचं, मग माझ्या रायबाचं!' अशी गर्जना करत तानाजींनी उदयभानविरुद्ध अखेरपर्यंत झुंज दिली. महाराज म्हणाले: 'गड आला पण सिंह गेला!'"
    },
    significance: { en: "Triggered the grand reconquest campaign recovering all 23 lost forts with interest.", mr: "सर्व २३ किल्ले परत मिळवणाऱ्या महामोहिमेचा शंखनाद." },
    tag: { en: "RECONQUEST", mr: "गड विजय" },
    badgeText: "1670"
  },
  {
    year: 1674,
    dateStr: { en: "6 June 1674", mr: "६ जून १६७४" },
    title: { en: "Shivrajyabhishek (Coronation)", mr: "भव्य शिवराज्याभिषेक सोहळा" },
    location: { en: "Raigad Fort", mr: "दुर्गराज रायगड" },
    summary: {
      en: "The historic coronation at Raigad Fort as sovereign Chhatrapati, founding the Rajyabhishek Shaka calendar and sovereign currency.",
      mr: "रायगडावर पंडित गागाभट्टांच्या उपस्थितीत छत्रपती पदावर राज्याभिषेक; स्वतंत्र शक आणि शिवराई-होन नाण्यांची निर्मिती."
    },
    detailedHistory: {
      en: "Over 50,000 dignitaries from across India, Europe, and the Orient gathered at Raigad. Shivaji Maharaj ascended the 32-maund golden throne (Suvarna Simhasana), proclaimed an independent Hindu sovereign monarchy for all faiths, minting gold 'Hon' and copper 'Shivrai'.",
      mr: "३२ मण सोन्याच्या सिंहासनावर आरूढ होऊन महाराजांनी 'क्षत्रियकुलावतंस छत्रपती' ही पदवी धारण केली. रयतेला सर्वंकष न्यायाची हमी देणारे स्वतंत्र राज्य निर्माण केले."
    },
    significance: { en: "The formal constitutional birth of the independent Maratha Empire.", mr: "सार्वभौम हिंदवी स्वराज्याची अधिकृत संस्थापना." },
    tag: { en: "CORONATION", mr: "राज्याभिषेक" },
    badgeText: "1674"
  },
  {
    year: 1680,
    dateStr: { en: "3 April 1680", mr: "३ एप्रिल १६८०" },
    title: { en: "Mahasamadhi at Raigad", mr: "रायगडावर महासमाधी" },
    location: { en: "Raigad Fort", mr: "रायगड किल्ला" },
    summary: {
      en: "The passing of the Great King, leaving behind an invincible sovereign spirit, 300+ forts, a dominant navy, and an eternal flame of liberty.",
      mr: "दुर्गराज रायगडावर छत्रपती शिवरायांचे निर्वाण. मागे ३०० हून अधिक अभेद्य किल्ले, मराठा आरमार आणि अढळ स्वराज्याची मशाल ठेवून गेले."
    },
    detailedHistory: {
      en: "Even as the physical presence of Shivaji Maharaj departed on Hanuman Jayanti, his administrative blueprints, moral integrity, naval supremacy, and guerrilla doctrine (Ganimi Kava) galvanized the Marathas to fight and eventually defeat the mighty Mughal empire over 27 heroic years.",
      mr: "शिवरायांच्या देहाचे निर्वाण झाले तरी त्यांनी पेटवलेली स्वातंत्र्याची ज्योत तेवत राहिली. त्यांच्याच प्रेरणेने मराठ्यांनी सलग २७ वर्षे मुघल साम्राज्याला झुकवले."
    },
    significance: { en: "Immortal legacy that laid the foundation for Indian independence.", mr: "भारताच्या स्वातंत्र्यलढ्याला दिशा देणारा शाश्वत प्रेरणास्रोत." },
    tag: { en: "ETERNAL", mr: "शाश्वत वारसा" },
    badgeText: "1680"
  }
];

