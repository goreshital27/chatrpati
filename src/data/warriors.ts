export interface Warrior {
  id: string;
  name: string;
  nameMr: string;
  roleTitle: { en: string; mr: string };
  legend: { en: string; mr: string };
  battleBadge: string;
  battleBadgeMr: string;
  historicDeed: { en: string; mr: string };
  sacrificeOrAchievement: { en: string; mr: string };
  quoteOrMotto?: { en: string; mr: string };
  imagePath: string;
}

export const WARRIORS: Warrior[] = [
  {
    id: 'jijabai',
    name: 'Rajmata Jijabai Bhosale',
    nameMr: 'राजमाता जिजाऊ आऊसाहेब',
    roleTitle: {
      en: 'The Guiding Mother & Fountainhead of Swarajya',
      mr: 'स्वराज्याची जननी व मार्गदर्शक दीपस्तंभ'
    },
    legend: {
      en: 'The divine matriarch whose wisdom, unyielding resolve, and spiritual guidance sculpted Shivaji Maharaj into the sovereign Chhatrapati.',
      mr: 'ज्यांच्या संस्कारांनी आणि अढळ ध्येयवादाने हिंदवी स्वराज्याची निर्मिती घडवून आणली अशा राष्ट्रमाता जिजाऊ.'
    },
    battleBadge: 'SOUL OF SWARAJYA',
    battleBadgeMr: 'स्वराज्याची प्रेरणा',
    historicDeed: {
      en: 'Rebuilt war-torn Pune with a golden plow, administered justice in Maharaj’s absence, and remained the moral backbone during the darkest Mughal onslaughts.',
      mr: 'उध्वस्त पुण्यात सोन्याचा नांगर फिरवून रयतेला धीर दिला, महाराजांच्या गैरहजेरीत निपक्ष न्याय केला आणि स्वराज्याचे संरक्षण केले.'
    },
    sacrificeOrAchievement: {
      en: 'Lived to see the coronation of her son on 6 June 1674, fulfilling the dream of an independent realm before departing peacefully 12 days later.',
      mr: 'शिवरायांचा भव्य राज्याभिषेक सोहळा डोळे भरून पाहिला आणि स्वतंत्र स्वराज्याची गुढी उभारून समाधी घेतली.'
    },
    quoteOrMotto: {
      en: '"Shivba, this land is not meant to serve foreign sultans; this land belongs to its people!"',
      mr: '"शिवबा, ही भूमी परकीय सुलतानांच्या दास्यात राहण्यासाठी नाही; हे रयतेचे स्वतंत्र स्वराज्य झाले पाहिजे!"'
    },
    imagePath: '/assets/warriors/jijabai.svg'
  },
  {
    id: 'tanaji',
    name: 'Subedar Tanaji Malusare',
    nameMr: 'सुभेदार तानाजी मालुसरे',
    roleTitle: {
      en: 'The Lion of Sinhagad',
      mr: 'सिंहगडाचा सिंह'
    },
    legend: {
      en: 'Proclaimed "First the wedding of Kondhana, then my son Rayaba!" and scaled the sheer Dronagiri precipice to seize victory with his life.',
      mr: "'आधी लगीन कोंढाण्याचं, मग माझ्या रायबाचं!' अशी गर्जना करून द्रोणागिरीचा कडा चढून गड जिंकणारा महायोद्धा."
    },
    battleBadge: 'SINHAGAD 1670',
    battleBadgeMr: 'सिंहगड १६७०',
    historicDeed: {
      en: 'Led 500 Mavlas up the 90-degree western cliff at midnight, duel with fortress commander Udaybhan Rathore after his shield shattered, wrapping his turban cloth around his arm to parry blows.',
      mr: 'मध्यरात्री घोरपडीच्या साहाय्याने सरळ कडा चढून उदयभानविरुद्ध तुंबळ युद्ध केले. ढाल तुटल्यावर हाताला शेला गुंडाळून अखेरपर्यंत घाव झेलले.'
    },
    sacrificeOrAchievement: {
      en: 'Martyred in triumph. Shivaji Maharaj wept upon the victory: "Gad aala pan sinh gela" (The fort is won, but my lion is gone).',
      mr: 'गडावर विजय मिळवला परंतु स्वतः वीरगती पावले. महाराजांनी अत्यंत दुःखाने उद्गार काढले: "गड आला पण सिंह गेला!"'
    },
    quoteOrMotto: {
      en: '"Aadhi lagin Kondhanacha, mag maajhya Rayabacha!"',
      mr: '"आधी लगीन कोंढाण्याचं, मग माझ्या रायबाचं!"'
    },
    imagePath: '/assets/warriors/tanaji.svg'
  },
  {
    id: 'baji-prabhu',
    name: 'Baji Prabhu Deshpande',
    nameMr: 'वीर बाजीप्रभू देशपांडे',
    roleTitle: {
      en: 'The Immortal Shield of Pavankhind',
      mr: 'पावनखिंडीचे अमर संरक्षक'
    },
    legend: {
      en: 'Held Ghodkhind with 300 Bandal warriors against 10,000 Siddi infantry for six grueling hours until cannon fire signaled Shivaji Maharaj was safe.',
      mr: 'सिद्दी जोहरच्या १०,००० फौजांना अवघ्या ३०० मावळ्यांसह ६ तास रोखून धरून शिवरायांना सुरक्षित विशाळगडावर पोहोचवणारे अमर वीर.'
    },
    battleBadge: 'PAVANKHIND 1660',
    battleBadgeMr: 'पावनखिंड १६६०',
    historicDeed: {
      en: 'Wielded twin dandpatta swords with both hands, sustaining fatal wounds while refusing to collapse until the three cannon shots reverberated across the Sahyadri mountains.',
      mr: 'दोन्ही हातांत दानपट्टा घेऊन रक्ताने न्हाऊन निघेपर्यंत लढले. विशाळगडावरून ३ तोफांचे आवाज आल्यावरच समाधानाने प्राण सोडले.'
    },
    sacrificeOrAchievement: {
      en: 'The narrow gorge of Ghodkhind was sanctified with his blood and re-christened "Pavankhind" (The Sacred Pass) by Shivaji Maharaj.',
      mr: 'त्यांच्या पवित्र रक्ताने पावन झालेल्या घोडखिंडीला छत्रपती शिवरायांनी "पावनखिंड" हे अमर नाव दिले.'
    },
    quoteOrMotto: {
      en: '"Maharaj, proceed safely to Vishalgad! As long as Baji breathes, not a single enemy shall cross this gorge!"',
      mr: '"महाराज, आपण सुखरूप विशाळगडावर जावे! जोवर बाजीच्या अंगात रक्ताचा एकही थेंब आहे, तोवर शत्रू खिंड पार करू शकणार नाही!"'
    },
    imagePath: '/assets/warriors/baji-prabhu.svg'
  },
  {
    id: 'hambirrao',
    name: 'Hambirrao Mohite',
    nameMr: 'हंबीरराव मोहिते',
    roleTitle: {
      en: 'Sarnaubat (Supreme Commander of the Armed Forces)',
      mr: 'सरसेनापती हंबीरराव'
    },
    legend: {
      en: 'The towering commander who humbled imperial Mughal armies at Yelburga and Burhanpur with lightning Maratha cavalry blitzes.',
      mr: 'मराठा घोडदळाचे महानायक, ज्यांनी मुघल फौजांचा येळबुर्गा व बऱ्हाणपूरच्या मोहिमांमध्ये धुव्वा उडवला.'
    },
    battleBadge: 'YELBURGA 1677',
    battleBadgeMr: 'येळबुर्गा १६७७',
    historicDeed: {
      en: 'Appointed Senapati during the 1674 coronation, led the triumphant Southern Campaign (Dakshin Digvijay) across Karnataka and Tamil Nadu.',
      mr: '१६७४ मध्ये सरसेनापती पद स्वीकारले. शिवरायांच्या दक्षिण दिग्विजय मोहिमेत तामिळनाडू व कर्नाटकात स्वराज्याचा भगवा फडकवला.'
    },
    sacrificeOrAchievement: {
      en: 'Later martyred in the Battle of Wai (1687) after neutralizing Mughal commander Sarja Khan with a cannon strike.',
      mr: 'पुढील काळात वाईच्या लढाईत मुघल सरदार सर्जाखानाचा पाडाव करताना तोफेचा गोळा लागून वीरगती प्राप्त झाली.'
    },
    quoteOrMotto: {
      en: '"When the Saffron Flag advances, empires crumble!"',
      mr: '"भगवा ध्वज पुढे निघाला की बादशाहीचे तख्तही डळमळते!"'
    },
    imagePath: '/assets/warriors/hambirrao.svg'
  },
  {
    id: 'netaji',
    name: 'Netaji Palkar',
    nameMr: 'नेताजी पालकर',
    roleTitle: {
      en: 'The "Second Shivaji" & Cavalry General',
      mr: 'प्रति-शिवाजी व घोडदळ प्रमुख'
    },
    legend: {
      en: 'Renowned as the whirlwind cavalry commander whose rapid mobility strikes left imperial generals bewildered and panicked.',
      mr: 'विजेच्या वेगाने धावणाऱ्या मराठा घोडदळाचे आद्य सेनापती, ज्यांच्या युद्धकौशल्यामुळे शत्रू त्यांना "प्रति-शिवाजी" म्हणत असे.'
    },
    battleBadge: 'CAVALRY BLITZ',
    battleBadgeMr: 'विद्युत घोडदळ',
    historicDeed: {
      en: 'Conducted devastating cavalry sweeps across Bijapur and Mughal territories, creating a cordon of absolute deterrence.',
      mr: 'दख्खनच्या पठारावर गनिमी काव्याचा वापर करून आदिलशाही व मुघल छावण्यांवर अचूक छापे घालून शत्रूचे मनोधैर्य खचवले.'
    },
    sacrificeOrAchievement: {
      en: 'Captured and forcibly converted by Aurangzeb, he was later reconverted to Hinduism by Shivaji Maharaj through a historic Shuddhikaran ceremony in 1676.',
      mr: 'मुघलांनी कैदेत ठेवून सक्तीने धर्मांतर करवले; परंतु शिवरायांनी १६७६ मध्ये त्यांचे शुद्धीकरण करून सन्मानाने स्वराज्यात पुन्हा सामावून घेतले.'
    },
    quoteOrMotto: {
      en: '"Swift as the wind, decisive as lightning."',
      mr: '"वाऱ्यासारखा वेग आणि विजेसारखा प्रहार!"'
    },
    imagePath: '/assets/warriors/netaji.svg'
  },
  {
    id: 'murarbaji',
    name: 'Murarbaji Deshpande',
    nameMr: 'मुरारबाजी देशपांडे',
    roleTitle: {
      en: 'The Unyielding Lion of Purandar',
      mr: 'पुरंदरचे दुर्दम्य रक्षक'
    },
    legend: {
      en: 'Refused Mughal commander Diler Khan’s offer of a princely jagir and imperial title, answering with steel until death.',
      mr: 'दिलेरखानाने देऊ केलेली बादशाही सरदारकी आणि जहागीर धुडकावून स्वराज्याच्या सन्मानासाठी अखेरपर्यंत लढणारे महापराक्रमी वीर.'
    },
    battleBadge: 'PURANDAR 1665',
    battleBadgeMr: 'पुरंदर संग्राम १६६५',
    historicDeed: {
      en: 'When Diler Khan assaulted Machi with Afghan shock troops, Murarbaji surged out with 700 Mavlas, butchering 500 pathans and forcing Khan to retreat to his elephant.',
      mr: '७०० मावळ्यांसह पुरंदरच्या माचीवरून मुघल सैन्यावर तुटून पडले आणि शेकडो शत्रूंना यमसदनी धाडत दिलेरखानाच्या हत्तीपर्यंत धडक मारली.'
    },
    sacrificeOrAchievement: {
      en: 'Diler Khan exclaimed in awe: "What a warrior! If he accepted our service, he would be the greatest general in Hindustan!"',
      mr: 'दिलेरखानाने चकित होऊन म्हटले: "असा शूर योद्धा मी संपूर्ण हिंदुस्तानात पाहिला नाही!"'
    },
    quoteOrMotto: {
      en: '"We are the servants of Shivaji Maharaj; your sultanates have not enough gold to buy our loyalty!"',
      mr: '"आम्ही शिवरायांचे निष्ठावंत मावळे आहोत; तुमची बादशाही आमची निष्ठा विकत घेऊ शकत नाही!"'
    },
    imagePath: '/assets/warriors/murarbaji.svg'
  },
  {
    id: 'shiva-kashid',
    name: 'Shiva Kashid',
    nameMr: 'वीर शिवा काशिद',
    roleTitle: {
      en: 'The Loyal Doppelgänger',
      mr: 'स्वामिनिष्ठ प्रतिरूप'
    },
    legend: {
      en: 'The brave royal barber of Panhala who dressed in Shivaji Maharaj’s royal robes and palanquin, willingly stepping into death so the King could live.',
      mr: 'पन्हाळगडावर स्वतः शिवरायांचा शाही पोशाख परिधान करून पालखीत बसणारे आणि महाराजांच्या संरक्षणासाठी प्राणाची आहुती देणारे निष्ठावंत वीर.'
    },
    battleBadge: 'PANHALA BREAKOUT',
    battleBadgeMr: 'पन्हाळा वेढा १६६०',
    historicDeed: {
      en: 'Knowing with mathematical certainty that discovery meant torture and execution, Shiva Kashid led the decoy palanquin right into Siddi Johar’s command camp, buying 4 hours of precious lead time.',
      mr: 'मृत्यू अटळ असल्याचे माहीत असूनही शत्रूच्या छावणीत शिरून सिद्दी जोहरला संभ्रमात ठेवले आणि खऱ्या महाराजांना निसटण्यास मोलाचा वेळ मिळवून दिला.'
    },
    sacrificeOrAchievement: {
      en: 'When Johar discovered the truth and executed him, Shiva’s last words were a triumph: "I lived like a servant, but I die as the King!"',
      mr: 'शत्रूने ओळखल्यावरही न डगमगता म्हणाले: "जगलो तर शिवा नाव्ही म्हणून, पण मरेन तर छत्रपती म्हणून!"'
    },
    quoteOrMotto: {
      en: '"If the King lives, million Swarajyas will arise; if I die, only a humble barber passes."',
      mr: '"राजे जगले तर लाखो स्वराज्ये उभी राहतील; मी मेलो तर फक्त एक शिवा जाईल!"'
    },
    imagePath: '/assets/warriors/shiva-kashid.svg'
  },
  {
    id: 'jiva-mahala',
    name: 'Jiva Mahala',
    nameMr: 'जीवा महाला',
    roleTitle: {
      en: 'The Life-Saving Bodyguard',
      mr: 'शिवरायांचे रक्षक'
    },
    legend: {
      en: 'Immortalized in the Marathi proverb: "Hota Jiva mhanun vachla Shiva" (Because Jiva was there, Shiva was saved).',
      mr: "'होता जीवा म्हणून वाचला शिवा!' या म्हणीने महाराष्ट्राच्या इतिहासात अमर झालेले विश्वासू अंगरक्षक."
    },
    battleBadge: 'PRATAPGAD 1659',
    battleBadgeMr: 'प्रतापगड १६५९',
    historicDeed: {
      en: 'When Afzal Khan’s dreaded swordsman Sayyad Banda raised his heavy patta to strike down Shivaji Maharaj in the sham tent, Jiva leaped forward and severed Banda’s arm mid-air with lightning reflex.',
      mr: 'अफझलखानाच्या वधानंतर सय्यद बंडाने महाराजांवर पाठीमागून जोरदार वार केला; त्याच क्षणी जीवाने हवेतच त्याचा हात उडवून शिवरायांचे प्राण वाचवले.'
    },
    sacrificeOrAchievement: {
      en: 'His singular split-second strike preserved the entire future of Swarajya at Pratapgad.',
      mr: 'त्या एका अचूक क्षणाच्या वाराने संपूर्ण स्वराज्याचे भविष्य आणि इतिहास सुरक्षित ठेवला.'
    },
    quoteOrMotto: {
      en: '"Not a single shadow of danger shall touch Maharaj as long as Jiva stands!"',
      mr: '"जीवाच्या अंगात श्वास असेपर्यंत महाराजांच्या केसालाही धक्का लागू देणार नाही!"'
    },
    imagePath: '/assets/warriors/jiva-mahala.svg'
  },
  {
    id: 'kanhoji-angre',
    name: 'Sarkhel Kanhoji Angre',
    nameMr: 'सरखेल कान्होजी आंग्रे',
    roleTitle: {
      en: 'Undefeated Grand Admiral of the Maratha Navy',
      mr: 'मराठा आरमाराचे अजिंक्य सरखेल'
    },
    legend: {
      en: 'The maritime scourge of colonial empires who maintained total naval mastery of the Konkan coast against British, Dutch, and Portuguese armadas.',
      mr: 'ब्रिटिश, डच आणि पोर्तुगीज आरमdistinctारांचा कर्दनकाळ, ज्यांनी अरबी समुद्रावर मराठ्यांचे निर्विवाद सार्वभौमत्व प्रस्थापित केले.'
    },
    battleBadge: 'ARABIAN SEA SOVEREIGN',
    battleBadgeMr: 'सागराचा राजा',
    historicDeed: {
      en: 'Trained under Shivaji Maharaj’s naval doctrine, he turned Vijaydurg, Suvarnadurg, and Khanderi into impenetrable sea fortresses, collecting "Chauth" sea-transit tax from European ships.',
      mr: 'शिवरायांच्या सागरी संकल्पनेला मूर्त रूप देत विजयदुर्ग आणि खांदेरी-उंदेरी बंदरांवरून युरोपीय व्यापारी जहाजांवर कर लादला.'
    },
    sacrificeOrAchievement: {
      en: 'Remained undefeated in every naval battle across a 40-year career on the high seas, inspiring generations of Indian naval heritage.',
      mr: 'सागरी युद्धात सलग ४० वर्षे अजिंक्य राहणारा जगातील मोजक्या दुर्मीळ नौदल सेनापतींपैकी एक.'
    },
    quoteOrMotto: {
      en: '"He who rules the sea commands the land."',
      mr: '"ज्यांचे आरमार, त्याचा समुद्र!"'
    },
    imagePath: '/assets/warriors/kanhoji-angre.svg'
  }
];
