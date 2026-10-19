export type FortCategory = 'all' | 'hill' | 'sea' | 'land';

export interface Fort {
  id: string;
  name: string;
  nameMr: string;
  category: 'hill' | 'sea' | 'land';
  elevation: string;
  district: string;
  districtMr: string;
  yearCapturedOrBuilt: string;
  statRibbon: {
    labelEn: string;
    labelMr: string;
    value: string;
  };
  summary: {
    en: string;
    mr: string;
  };
  history: {
    en: string;
    mr: string;
  };
  architecturalHighlights: {
    en: string[];
    mr: string[];
  };
  keyBattles: {
    en: string[];
    mr: string[];
  };
  imagePath: string;
  coordinates: {
    lat: string;
    lng: string;
  };
}

export const FORTS: Fort[] = [
  {
    id: 'raigad',
    name: 'Raigad Fort',
    nameMr: 'दुर्गराज रायगड',
    category: 'hill',
    elevation: '820 m (2,700 ft)',
    district: 'Raigad',
    districtMr: 'रायगड',
    yearCapturedOrBuilt: '1656 / 1674',
    statRibbon: {
      labelEn: 'CAPITAL',
      labelMr: 'राजधानी',
      value: '1674'
    },
    summary: {
      en: 'The Gibraltar of the East and sovereign capital of Swarajya, where Chhatrapati Shivaji Maharaj was crowned on the 32-maund golden throne.',
      mr: 'स्वराज्याची अजिंक्य राजधानी, जिथे छत्रपती शिवरायांचा ३२ मण सुवर्ण सिंहासनावर भव्य राज्याभिषेक सोहळा संपन्न झाला.'
    },
    history: {
      en: 'Originally known as Rairi, Shivaji Maharaj captured it from Chandrarao More in 1656. Recognizing its impregnable Sahyadri cliffs, he entrusted chief architect Hiroji Indulkar to construct over 300 structures, including the royal palace, bazaar peth, Jagdishwar temple, and the Queen’s chambers.',
      mr: 'पूर्वीचे नाव "रायरि". चंद्रराव मोऱ्यांकडून १६५६ मध्ये जिंकून घेतले. मुख्य वास्तुविशारद हिरोजी इंदुलकर यांनी येथे राजदरबार, बाजारपेठ, नगारखाना व जगदीश्वर मंदिराची अप्रतिम निर्मिती केली.'
    },
    architecturalHighlights: {
      en: ['Nagar Khana with acoustic amplification', 'Hirakani Bastion (Buruj)', 'Maha Darwaja with defensive curtain walls', '1-mile stone market promenade'],
      mr: ['ध्वनिशास्त्राचा अद्भुत नमुना असलेला नगारखाना', 'अथांग कड्यावर उभारलेला हिरा Broadwayकणी बुरूज', 'गोमुखी पद्धतीचा महादरवाजा', 'दोन मजली भव्य बाजारपेठ']
    },
    keyBattles: {
      en: ['Capture of Rairi (1656)', 'Grand Shivrajyabhishek (1674)', 'Siege of Raigad (1689)'],
      mr: ['रायरिचा ताबा (१६५६)', 'शिवराज्याभिषेक (१६७४)', 'रायगड वेढा (१६८९)']
    },
    imagePath: '/assets/forts/raigad.svg',
    coordinates: { lat: '18.2347° N', lng: '73.4414° E' }
  },
  {
    id: 'rajgad',
    name: 'Rajgad Fort',
    nameMr: 'किल्ले राजगड',
    category: 'hill',
    elevation: '1,376 m (4,514 ft)',
    district: 'Pune',
    districtMr: 'पुणे',
    yearCapturedOrBuilt: '1647',
    statRibbon: {
      labelEn: 'CAPITAL FOR',
      labelMr: 'राजधानी काळ',
      value: '26 YEARS'
    },
    summary: {
      en: 'Known as the "King of Forts", Rajgad served as Shivaji Maharaj’s sovereign capital for over 26 years, witnessing crucial historical milestones.',
      mr: 'किल्ल्यांचा राजा आणि राजांचा किल्ला. सलग २६ वर्षे स्वराज्याची पहिली राजधानी म्हणून धुरंधर कारभार पाहणारा महादुर्ग.'
    },
    history: {
      en: 'Constructed on the Murumbdev hill with the treasure unearthed from Torna, Rajgad features three formidable spurs (Padmavati, Suvela, Sanjivani Machi) and a crowning Bale Killa. Chhatrapati Rajaram Maharaj was born here.',
      mr: 'तोरण्यावर सापडलेल्या द्रव्याने मुरुंबदेवाच्या डोंगरावर उभारणी केली. संजीवनी, पद्मावती आणि सुवेळा माची या तीन भक्कम तटबंदींनी वेढलेला हा दुर्ग अभेद्य राहिला.'
    },
    architecturalHighlights: {
      en: ['Sanjivani Machi triple-tier double fortified walls', 'Nedhe (natural rock needle hole) on Suvela Machi', 'Padmavati water cisterns and temple', 'Steep climb Bale Killa with Maha Darwaja'],
      mr: ['संजीवनी माचीची दुहेरी तटबंदी व चिलखती बुरूज', 'सुवेळा माचीवरील नैसर्गिक "नेढे"', 'पद्मावती तळे व महाल', 'अजिंक्य बालेकिल्ल्याची सरळ चढण']
    },
    keyBattles: {
      en: ['Base for Pratapgad campaign (1659)', 'Defense against Mughal assaults (1662)', 'Safe haven after Agra escape (1666)'],
      mr: ['प्रतापगड मोहिमेचे मुख्य केंद्र (१६५९)', 'मुघल आक्रमणांचा यशस्वी प्रतिकार (१६६२)', 'आग्र्याहून सुटकेनंतरचे पुनरागमन (१६६६)']
    },
    imagePath: '/assets/forts/rajgad.svg',
    coordinates: { lat: '18.2464° N', lng: '73.6828° E' }
  },
  {
    id: 'torna',
    name: 'Torna Fort (Prachandagad)',
    nameMr: 'तोरणा (प्रचंडगड)',
    category: 'hill',
    elevation: '1,403 m (4,603 ft)',
    district: 'Pune',
    districtMr: 'पुणे',
    yearCapturedOrBuilt: '1646',
    statRibbon: {
      labelEn: 'FIRST FORT WON',
      labelMr: 'पहिले तोरण',
      value: '1646'
    },
    summary: {
      en: 'The cradle of Swarajya conquest. The very first fort captured by 16-year-old Shivaji Maharaj, igniting the revolution.',
      mr: 'स्वराज्याची पहिली मुहूर्तमेढ! वयाच्या १६ व्या वर्षी शिवरायांनी जिंकून स्वराज्याचे तोरण बांधलेला प्रचंडगड.'
    },
    history: {
      en: 'Perched high in the Sahyadris, Torna justified its name Prachandagad with its enormous expanse. Shivaji captured it from the Adilshahi sultanate without bloodshed, discovering hidden gold that financed the construction of Rajgad.',
      mr: 'आदिलशाहीकडून अतिशय कौशल्याने एकाही थेंब रक्ताशिवाय जिंकला. गडावर सापडलेल्या गुप्त धनाचा उपयोग शेजारील राजगडाच्या बांधकामासाठी करण्यात आला.'
    },
    architecturalHighlights: {
      en: ['Zunjar Machi razor-thin knife-edge ridge', 'Budhla Machi resembling an overturned vessel', 'Menghai Devi shrine', 'Bini Darwaja entrance'],
      mr: ['झुंजार माचीची थरारक व अरुंद कडा', 'बुधला माचीची विशिष्ट वाटीसारखी रचना', 'मेंगाई देवीचे प्राचीन मंदिर', 'बिनी दरवाजा व चिलखती बुरूज']
    },
    keyBattles: {
      en: ['Capture of Torna (1646)', 'Defense against Shaista Khan’s advance (1662)'],
      mr: ['तोरणा विजय (१६४६)', 'शाइस्तेखानाच्या फौजांविरुद्ध बचाव (१६६२)']
    },
    imagePath: '/assets/forts/torna.svg',
    coordinates: { lat: '18.2764° N', lng: '73.6214° E' }
  },
  {
    id: 'pratapgad',
    name: 'Pratapgad Fort',
    nameMr: 'प्रतापगड',
    category: 'hill',
    elevation: '1,080 m (3,540 ft)',
    district: 'Satara',
    districtMr: 'सातारा',
    yearCapturedOrBuilt: '1656',
    statRibbon: {
      labelEn: 'AFZAL KHAN WON',
      labelMr: 'खानाची कबर',
      value: '1659'
    },
    summary: {
      en: 'The fortress of valor where the mighty Bijapuri titan Afzal Khan met his destiny at the hands of Shivaji Maharaj.',
      mr: 'शौर्य आणि न्यायाचे प्रतीक! जेथे बलाढ्य अफझलखानाचा कोथळा काढून विजापुरी आक्रमणाचा बिमोड केला.'
    },
    history: {
      en: 'Commissioned by Shivaji Maharaj and built by Moropant Pingle in 1656 atop Bhorpya hill to control the strategic Radtondi pass through Jawali forest. Famous for the Bhavani Mata temple with a crystal sphatika idol gifted by Maharaj.',
      mr: 'जावळीच्या घनदाट खोऱ्यावर नियंत्रण ठेवण्यासाठी मोरोपंत पिंगळे यांच्या देखरेखीखाली १६५६ मध्ये बांधला गेला. गडावर महाराजांनी तुळजापूरच्या भवानी मातेची स्थापना केली.'
    },
    architecturalHighlights: {
      en: ['Double line of defense with upper Bale Killa', 'Bhavani Mata Temple with crystal shrine', 'Afzal Buruj where Khan was repelled', 'Hidden sally ports (Chor Darwaja)'],
      mr: ['दुहेरी तटबंदी असलेला बालेकिल्ला', 'स्फटिकाची मूर्ती असलेले भवानी माता मंदिर', 'अफझल बुरूज व ऐतिहासिक बैठक जागा', 'गुप्त चोरदिंड्या व निसटण्याचे मार्ग']
    },
    keyBattles: {
      en: ['Battle of Pratapgad (10 Nov 1659)', 'Subsequent rout of Bijapuri reinforcements'],
      mr: ['प्रतापगडची ऐतिहासिक लढाई (१० नोव्हेंबर १६५९)', 'विजापुरी सेनेचा संपूर्ण पराभव']
    },
    imagePath: '/assets/forts/pratapgad.svg',
    coordinates: { lat: '17.9333° N', lng: '73.5833° E' }
  },
  {
    id: 'sinhagad',
    name: 'Sinhagad (Kondhana)',
    nameMr: 'सिंहगड (कोंढाणा)',
    category: 'hill',
    elevation: '1,312 m (4,304 ft)',
    district: 'Pune',
    districtMr: 'पुणे',
    yearCapturedOrBuilt: '1670',
    statRibbon: {
      labelEn: 'TANAJI VALOR',
      labelMr: 'तानाजींचे शौर्य',
      value: '1670'
    },
    summary: {
      en: 'The Lion’s Fort immortalized by Subedar Tanaji Malusare’s supreme sacrifice, prompting Maharaj to say: "Gad aala pan sinh gela".',
      mr: "'गड आला पण सिंह गेला!' सुभेदार तानाजी मालुसरे यांच्या असीम त्यागाने व पराक्रमाने अमर झालेला सिंहदुर्ग."
    },
    history: {
      en: 'Commanding the approaches to Pune, Kondhana was surrendered under the Treaty of Purandar. In 1670, Tanaji led 500 Mavlas scaling the sheer Dronagiri cliff at night, vanquishing Udaybhan Rathore and winning the fortress.',
      mr: 'पुरंदरच्या तहात मुघलांकडे गेलेला हा किल्ला परत मिळवण्यासाठी तानाजी मालुसरे यांनी स्वतःच्या मुलाचे लग्न बाजूला ठेवून रात्रीच्या वेळी कडा चढून गड सर केला.'
    },
    architecturalHighlights: {
      en: ['Pune Darwaja and Kalyan Darwaja', 'Dronagiri cliff vertical precipice', 'Tanaji Malusare Samadhi monument', 'Tanaji’s legendary bastion & water tanks (Amruteshwar)'],
      mr: ['पुणे दरवाजा व कल्याण दरवाजा', 'द्रोणागिरीचा ९० अंशाचा सरळ कडा', 'सुभेदार तानाजी मालुसरे समाधी स्मारक', 'देवटाके व अमृततुल्य थंड पाण्याचे साठे']
    },
    keyBattles: {
      en: ['Midnight assault on Kondhana (1670)', 'Siege of 1700 by Aurangzeb'],
      mr: ['कोंढाण्यावरील मध्यरात्रीची धडक (१६७०)', 'औरंगजेबाचा वेढा (१७००)']
    },
    imagePath: '/assets/forts/sinhagad.svg',
    coordinates: { lat: '18.3663° N', lng: '73.7558° E' }
  },
  {
    id: 'purandar',
    name: 'Purandar Fort',
    nameMr: 'किल्ले पुरंदर',
    category: 'hill',
    elevation: '1,387 m (4,551 ft)',
    district: 'Pune',
    districtMr: 'पुणे',
    yearCapturedOrBuilt: '1646 / 1670',
    statRibbon: {
      labelEn: 'MURARBAJI STAND',
      labelMr: 'मुरारबाजींची झुंज',
      value: '1665'
    },
    summary: {
      en: 'Birthplace of Chhatrapati Sambhaji Maharaj and ground of Murarbaji Deshpande’s historic resistance against Mughal commander Diler Khan.',
      mr: 'छत्रपती संभाजी महाराजांचे जन्मस्थान आणि मुरारबाजी देशपांडे यांनी मुघल फौजांविरुद्ध दाखवलेल्या अद्भूत पराक्रमाची रणभूमी.'
    },
    history: {
      en: 'Twin fort with Vajragad (Rudra Mahal), Purandar was heroically defended by Murarbaji and 700 Mavlas against 50,000 imperial troops in 1665. Murarbaji refused Diler Khan’s bribe of riches and fought to his last breath.',
      mr: 'वज्रगड आणि पुरंदर या जुळ्या किल्ल्यांच्या संरक्षणासाठी मुरारबाजींनी मूठभर सैन्यासह दिलेरखानाच्या अजस्र सेनेचा थरकाप उडवला. लाच नाकारून देशधर्मासाठी प्राण अर्पण केले.'
    },
    architecturalHighlights: {
      en: ['Twin fort Rudra Mahal (Vajragad) bastion', 'Delhi Darwaja entrance', 'Kedareshwar temple at summit', 'Bale Killa citadel with panoramic Deccan views'],
      mr: ['वज्रगड (रुद्रमाळ) दुहेरी संरक्षण यंत्रणा', 'दिल्ली दरवाजा व खंदक', 'शिखरावरील प्राचीन केदारेश्वर मंदिर', 'बालेकिल्ल्यावरील भक्कम बुरूज']
    },
    keyBattles: {
      en: ['Epic Defense of Purandar (1665)', 'Recapture by Maratha forces (1670)'],
      mr: ['पुरंदरचा महासंग्राम (१६६५)', 'मराठ्यांचा पुनर्विजय (१६७०)']
    },
    imagePath: '/assets/forts/purandar.svg',
    coordinates: { lat: '18.2833° N', lng: '73.9833° E' }
  },
  {
    id: 'shivneri',
    name: 'Shivneri Fort',
    nameMr: 'शिवनेरी',
    category: 'hill',
    elevation: '1,024 m (3,360 ft)',
    district: 'Pune (Junnar)',
    districtMr: 'पुणे (जुन्नर)',
    yearCapturedOrBuilt: '1630 (Birthplace)',
    statRibbon: {
      labelEn: 'BIRTHPLACE',
      labelMr: 'जन्मभूमी',
      value: '1630'
    },
    summary: {
      en: 'The sacred birthplace of Chhatrapati Shivaji Maharaj, guarded by seven fortified gates and the blessings of Goddess Shivai.',
      mr: 'छत्रपती शिवरायांचे पवित्र जन्मस्थान! सात अभेद्य दरवाज्यांनी सुरक्षित आणि शिवाई देवीच्या आशीर्वादाने पुनीत झालेला गड.'
    },
    history: {
      en: 'Guarded by Junnar’s trade routes, Shahaji Raje placed pregnant Jijabai here under the care of trusted lieutenant Vishwasrao. On 19 Feb 1630, Shivaji Maharaj was born here. The fort features deep Buddhist rock-cut cisterns (Ganga-Jamuna).',
      mr: 'शहाजीराजांनी गरोदर जिजाऊंच्या सुरक्षिततेसाठी शिवनेरीची निवड केली. येथेच १९ फेब्रुवारी १६३० रोजी बाल शिवबांचा जन्म झाला. गडावर गंगा-जमुना पाण्याचे टाके आजही वाहते आहेत.'
    },
    architecturalHighlights: {
      en: ['Seven layered security gates (Maha, Pir, Parwangi, etc.)', 'Shivai Devi cave temple', 'Birth chamber memorial palace', 'Kadelot Point execution cliff'],
      mr: ['सात संरक्षणात्मक दरवाजे (महादरवाजा, पीर दरवाजा, इ.)', 'शिवाई देवीचे शैलकृत मंदिर', 'शिवजन्मस्थान स्मारक महाल', 'कडेकोट कडेलोट कडा']
    },
    keyBattles: {
      en: ['Defense against Mughal sieges (1630s)', 'Maratha reconquest attempts (1670)'],
      mr: ['मुघल वेढ्यांचा यशस्वी बचाव (१६३० चे दशक)', 'मराठ्यांचे स्वातंत्र्य प्रयत्न (१६७०)']
    },
    imagePath: '/assets/forts/shivneri.svg',
    coordinates: { lat: '19.1969° N', lng: '73.8606° E' }
  },
  {
    id: 'panhala',
    name: 'Panhala Fort (Panhalgad)',
    nameMr: 'पन्हाळगड',
    category: 'hill',
    elevation: '845 m (2,772 ft)',
    district: 'Kolhapur',
    districtMr: 'कोल्हापूर',
    yearCapturedOrBuilt: '1659 / 1673',
    statRibbon: {
      labelEn: 'GREAT ESCAPE',
      labelMr: 'साहसी सुटका',
      value: '1660'
    },
    summary: {
      en: 'The grand Deccan plateau fortress from where Shivaji Maharaj staged his miraculous midnight breakout during the monsoon siege of 1660.',
      mr: 'कोल्हापूरचे वैभव! जेथून १६६० च्या मुसळधार पावसाच्या रात्री महाराजांनी सिद्दी जोहरच्या वेढ्यातून साहसी सुटका करून घेतली.'
    },
    history: {
      en: 'Built originally by Shilahara rulers and expanded by Adilshah, Shivaji Maharaj captured it in 1659. Besieged by Siddi Johar for months, Shivaji escaped under torrential rains to Vishalgad while Shiva Kashid and Baji Prabhu held the enemy at bay.',
      mr: 'शिलाहार राजांनी बांधलेला व आदिलशाहीकडून जिंकलेला हा किल्ला. १६६० मध्ये सिद्दी जोहरच्या ५ महिन्यांच्या वेढ्यातून सुटण्यासाठी याच गडावरून थरारक निसटण्याची योजना आखली गेली.'
    },
    architecturalHighlights: {
      en: ['Teen Darwaza with double lintels', 'Sajja Kothi watchtower palace', 'Andhar Bavadi hidden three-storey well', 'Amberkhana granaries capable of holding 50,000 bushels'],
      mr: ['तीन दरवाजा स्थापत्य रचना', 'सज्जा कोठी निरीक्षण महाल', 'अंधार बावडी गुप्त विहीर', '५०,००० खंडी धान्य साठवणारे अंबरखाना कोठार']
    },
    keyBattles: {
      en: ['Siege of Panhala (1660)', 'Kondaji Farzand’s 60-warrior capture (1673)'],
      mr: ['पन्हाळा वेढा (१६६०)', 'कोंडाजी फर्जंदांनी ६० मावळ्यांसह केलेला विजय (१६७३)']
    },
    imagePath: '/assets/forts/panhala.svg',
    coordinates: { lat: '16.8122° N', lng: '74.1089° E' }
  },
  {
    id: 'sindhudurg',
    name: 'Sindhudurg Fort',
    nameMr: 'सिंधुदुर्ग',
    category: 'sea',
    elevation: 'Sea Level (Kurte Island)',
    district: 'Sindhudurg (Malvan)',
    districtMr: 'सिंधुदुर्ग (मालवण)',
    yearCapturedOrBuilt: '1664–1667',
    statRibbon: {
      labelEn: 'NAVY BASE',
      labelMr: 'आरमार दुर्ग',
      value: '1664'
    },
    summary: {
      en: 'The flagship ocean citadel conceived and supervised by Shivaji Maharaj, with foundations cast in molten lead upon rocky ocean reefs.',
      mr: 'छत्रपती शिवरायांच्या दूरदृष्टीचे सागरी शिखर! मालवणच्या समुद्रात खडकांवर वितळलेल्या शिशाचा पाया घालून उभारलेला अजिंक्य जलदुर्ग.'
    },
    history: {
      en: 'To check Portuguese, British, and Siddis piracy along the Konkan coast, Shivaji personally selected the Kurte island in 1664. Over 100 Portuguese and local stonemasons used 70,000 kilograms of iron and molten lead to anchor the ramparts directly into submerged granite bedrock.',
      mr: 'परकीय सागरी आक्रमकांना पायबंद घालण्यासाठी १६६४ मध्ये मालवणजवळ कुर्टे बेटावर पायाभरणी केली. ७० हजार किलो शिसे ओतून समुद्रात तटबंदीचे चिरे जोडले गेले.'
    },
    architecturalHighlights: {
      en: ['Foundations laid in 70 tons of molten lead', 'Concealed main gate invisible from the sea', 'Shivaji Maharaj palm and footprint impressions', 'Sweetwater wells surrounded by salty Arabian sea (Dudh Bav, Dahi Bav)'],
      mr: ['वितळलेल्या शिशातील पायाभरणी', 'समुद्रातून न दिसणारा गुप्त महादरवाजा', 'शिवरायांच्या हस्त व पदकमलांचे ठसे', 'खाऱ्या समुद्रातही गोड्या पाण्याचे झरे (दूध-दही बावडी)']
    },
    keyBattles: {
      en: ['Naval skirmishes with Portuguese armadas (1668)', 'Repulsion of Siddi sea raiders'],
      mr: ['पोर्तुगीज आरमdistinctाराविरुद्ध सागरी संघर्ष (१६६८)', 'सिद्दींच्या चाच्यांचा प्रतिकार']
    },
    imagePath: '/assets/forts/sindhudurg.svg',
    coordinates: { lat: '16.0592° N', lng: '73.4636° E' }
  },
  {
    id: 'suvarnadurg',
    name: 'Suvarnadurg Fort',
    nameMr: 'सुवर्णदुर्ग',
    category: 'sea',
    elevation: 'Sea Level (Harnai)',
    district: 'Ratnagiri',
    districtMr: 'रत्नागिरी (हर्णे)',
    yearCapturedOrBuilt: '1660',
    statRibbon: {
      labelEn: 'GOLDEN FORT',
      labelMr: 'सुवर्ण जलदुर्ग',
      value: '1660'
    },
    summary: {
      en: 'The Golden Marine Fortress of Harnai coast, key naval shipbuilding yard and bastion of Maratha Admiral Kanhoji Angre.',
      mr: 'हर्णेच्या किनाऱ्यावरील सुवर्ण जलदुर्ग! मराठा आरमाराचे प्रमुख जहाज बांधणी केंद्र आणि सरखेल कान्होजी आंग्रे यांचा बालेकिल्ला.'
    },
    history: {
      en: 'Captured from the Adilshahi in 1660, Shivaji Maharaj extensively refortified Suvarnadurg to serve as the naval shipbuilding yard for Maratha Gurabs and Galbats. Surrounded by sea on all sides, it commanded the trade lanes between Mumbai and Goa.',
      mr: '१६६० मध्ये शिवरायांनी जिंकून या जलदुर्गाची पुनर्बांधणी केली. येथे मराठा आरमारासाठी लढाऊ गुराबा आणि गलबतांची निर्मिती व डागडुजी केली जात असे.'
    },
    architecturalHighlights: {
      en: ['Ramparts carved straight out of natural sea reefs', 'Sea-facing Maha Darwaja carved with lion motif', 'Naval cannon embrasures covering 360 degrees', 'Protected inner dry docks and boat moorings'],
      mr: ['नैसर्गिक कातळातून कोरलेली अभेद्य तटबंदी', 'सिंहाचे शिल्प कोरलेला सागरी महादरवाजा', '३६० अंश तोफांचा मारा करणारी जंग्यांची रचना', 'जहाजांसाठी सुरक्षित अंतर्गत गोदी']
    },
    keyBattles: {
      en: ['Maratha Navy defense against British squadrons', 'Naval engagement under Kanhoji Angre'],
      mr: ['ब्रिटिश आरमाराविरुद्ध यशस्वी संरक्षण', 'कान्होजी आंग्रे यांच्या नेतृत्वाखालील सागरी विजय']
    },
    imagePath: '/assets/forts/suvarnadurg.svg',
    coordinates: { lat: '17.8156° N', lng: '73.0883° E' }
  }
];
