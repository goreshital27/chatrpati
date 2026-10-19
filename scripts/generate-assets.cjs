const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'public', 'assets');
const fortsDir = path.join(assetsDir, 'forts');
const warriorsDir = path.join(assetsDir, 'warriors');
const ministersDir = path.join(assetsDir, 'ministers');
const heroDir = path.join(assetsDir, 'hero');
const uiDir = path.join(assetsDir, 'ui');

[fortsDir, warriorsDir, ministersDir, heroDir, uiDir].forEach(d => {
  fs.mkdirSync(d, { recursive: true });
});

console.log('Ensuring all directories exist:', { fortsDir, warriorsDir, ministersDir });

// 1. FORTS (10 Forts)
const forts = [
  { id: 'raigad', name: 'Raigad Fort', nameMr: 'दुर्गराज रायगड', type: 'Hill Fort', bg: '#3D150B', sky: '#FF7E33', buruj: 820, stat: 'CAPITAL · 1674' },
  { id: 'rajgad', name: 'Rajgad Fort', nameMr: 'किल्ले राजगड', type: 'Hill Fort', bg: '#30120A', sky: '#E87D38', buruj: 1376, stat: 'CAPITAL · 26 YRS' },
  { id: 'torna', name: 'Torna Fort', nameMr: 'तोरणा (प्रचंडगड)', type: 'Hill Fort', bg: '#250E07', sky: '#FFA233', buruj: 1403, stat: 'FIRST WON · 1646' },
  { id: 'pratapgad', name: 'Pratapgad Fort', nameMr: 'प्रतापगड', type: 'Hill Fort', bg: '#3B0C0C', sky: '#E2552B', buruj: 1080, stat: 'AFZAL KHAN · 1659' },
  { id: 'sinhagad', name: 'Sinhagad Fort', nameMr: 'सिंहगड (कोंढाणा)', type: 'Hill Fort', bg: '#2E0909', sky: '#FF6B3D', buruj: 1312, stat: 'TANAJI VALOR · 1670' },
  { id: 'purandar', name: 'Purandar Fort', nameMr: 'किल्ले पुरंदर', type: 'Hill Fort', bg: '#2A0D10', sky: '#D9534F', buruj: 1387, stat: 'MURARBAJI · 1665' },
  { id: 'shivneri', name: 'Shivneri Fort', nameMr: 'शिवनेरी', type: 'Hill Fort', bg: '#3D1A09', sky: '#FFAE42', buruj: 1024, stat: 'BIRTHPLACE · 1630' },
  { id: 'panhala', name: 'Panhala Fort', nameMr: 'पन्हाळगड', type: 'Hill Fort', bg: '#26160D', sky: '#E06B2D', buruj: 845, stat: 'GREAT ESCAPE · 1660' },
  { id: 'sindhudurg', name: 'Sindhudurg Fort', nameMr: 'सिंधुदुर्ग', type: 'Sea Fort', bg: '#0A2540', sky: '#E28743', buruj: 'Kurte', stat: 'NAVY BASE · 1664' },
  { id: 'suvarnadurg', name: 'Suvarnadurg Fort', nameMr: 'सुवर्णदुर्ग', type: 'Sea Fort', bg: '#082032', sky: '#E59866', buruj: 'Harnai', stat: 'GOLDEN FORT · 1660' }
];

forts.forEach(fort => {
  const isSea = fort.type.includes('Sea');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad_${fort.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${fort.sky}" />
      <stop offset="45%" stop-color="#E2552B" />
      <stop offset="85%" stop-color="#2B0E0A" />
      <stop offset="100%" stop-color="#0D0706" />
    </linearGradient>
    <linearGradient id="goldG_${fort.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7E27A" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#8F6B14" />
    </linearGradient>
    <linearGradient id="tealRim_${fort.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#FF9933" />
    </linearGradient>
    <filter id="glow_${fort.id}">
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#38BDF8" flood-opacity="0.4" />
      <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#D4AF37" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Sky Canvas -->
  <rect width="600" height="750" fill="url(#skyGrad_${fort.id})" />

  <!-- Sun Disk with Aureole -->
  <circle cx="300" cy="220" r="110" fill="#FFF2D6" opacity="0.8" />
  <circle cx="300" cy="220" r="140" fill="#FF9933" opacity="0.25" />
  <circle cx="300" cy="220" r="160" stroke="url(#goldG_${fort.id})" stroke-width="1" stroke-dasharray="8 6" opacity="0.3" />

  <!-- Soaring Birds -->
  <path d="M110,130 Q120,120 130,125 Q140,120 150,130" stroke="#0D0A08" stroke-width="2" fill="none" opacity="0.7" />
  <path d="M140,105 Q148,97 156,101 Q164,97 172,105" stroke="#0D0A08" stroke-width="2" fill="none" opacity="0.6" />
  <path d="M440,150 Q450,140 460,145 Q470,140 480,150" stroke="#0D0A08" stroke-width="2" fill="none" opacity="0.6" />

  ${isSea ? `
  <!-- Arabian Sea Horizon & Breakers -->
  <rect y="420" width="600" height="330" fill="#06121F" />
  <path d="M0,450 Q150,430 300,450 T600,450 L600,750 L0,750 Z" fill="#040C15" />
  <path d="M0,500 Q120,485 240,500 T480,500 T600,500" stroke="#38BDF8" stroke-width="1.5" fill="none" opacity="0.3" />
  <path d="M0,560 Q160,545 320,560 T600,560" stroke="#38BDF8" stroke-width="2" fill="none" opacity="0.25" />

  <!-- Sea Fort Ramparts (Island Citadel) with Teal-Gold Edge Glow -->
  <g filter="url(#glow_${fort.id})">
    <path d="M60,470 
             L80,410 L110,410 L110,420 L160,420 L160,400 L200,400 L200,420 L260,420 L260,370 L280,370 L280,360 L320,360 L320,370 L340,370 L340,420 L400,420 L400,400 L440,400 L440,420 L490,420 L490,410 L520,410 L540,470 
             L560,530 L40,530 Z" 
          fill="#080E14" stroke="url(#tealRim_${fort.id})" stroke-width="2.5" />
    <circle cx="110" cy="420" r="14" fill="#060C12" stroke="url(#goldG_${fort.id})" stroke-width="1.5" />
    <circle cx="280" cy="380" r="18" fill="#060C12" stroke="url(#goldG_${fort.id})" stroke-width="1.5" />
    <circle cx="440" cy="420" r="14" fill="#060C12" stroke="url(#goldG_${fort.id})" stroke-width="1.5" />
  </g>
  ` : `
  <!-- Sahyadri Mountain Ridges with Teal-Gold Edge Rim -->
  <path d="M0,360 Q140,310 280,340 T600,300 L600,750 L0,750 Z" fill="#1C090A" />
  <path d="M0,430 C120,400 220,420 330,370 C450,320 520,400 600,360 L600,750 L0,750 Z" fill="#100506" />

  <!-- Mountain Fortress Citadel & Bastions -->
  <g filter="url(#glow_${fort.id})">
    <path d="M110,400 
             L130,360 L155,360 L155,370 L210,370 L210,330 L245,330 L245,320 L265,320 L265,300 L335,300 L335,320 L355,320 L355,330 L390,330 L390,370 L445,370 L445,360 L470,360 L490,400 
             C430,420 320,410 240,430 Z" 
          fill="#090304" stroke="url(#tealRim_${fort.id})" stroke-width="2.5" />
    <!-- Bale Killa & Watchtowers -->
    <rect x="280" y="275" width="40" height="30" rx="2" fill="#090304" stroke="url(#goldG_${fort.id})" stroke-width="1.5" />
  </g>
  `}

  <!-- Flagpole & Flowing Bhagwa Zenda -->
  <line x1="300" y1="300" x2="300" y2="215" stroke="#0D0A08" stroke-width="4" />
  <line x1="300" y1="300" x2="300" y2="215" stroke="#D4AF37" stroke-width="1.5" />
  <path d="M300,215 L350,228 L328,240 L350,252 L300,265 Z" fill="#FF9933" stroke="#F7E27A" stroke-width="1" />

  <!-- Vignette & Bottom Text Plate -->
  <rect y="540" width="600" height="210" fill="#0A0605" opacity="0.95" />
  <line x1="60" y1="540" x2="540" y2="540" stroke="url(#goldG_${fort.id})" stroke-width="2" />

  <!-- Fort Title & Details -->
  <g font-family="'Cinzel Decorative', serif" text-anchor="middle">
    <text x="300" y="605" fill="url(#goldG_${fort.id})" font-size="28" font-weight="900" letter-spacing="3">${fort.name.toUpperCase()}</text>
  </g>
  <g font-family="'Yatra One', 'Mukta', serif" text-anchor="middle">
    <text x="300" y="645" fill="#F5ECD7" font-size="22" font-weight="700">${fort.nameMr}</text>
  </g>
  <g font-family="'Mukta', sans-serif" text-anchor="middle">
    <text x="300" y="685" fill="#E8B4B8" font-size="15" letter-spacing="3">${fort.type.toUpperCase()} • ${fort.stat}</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(fortsDir, `${fort.id}.svg`), svg, 'utf8');
});

// 2. WARRIORS (9 Warriors)
const warriors = [
  { id: 'jijabai', name: 'Rajmata Jijabai', nameMr: 'राजमाता जिजाऊ आऊसाहेब', role: 'Mother of Swarajya', badge: 'SOUL OF SWARAJYA' },
  { id: 'tanaji', name: 'Tanaji Malusare', nameMr: 'सुभेदार तानाजी मालुसरे', role: 'Lion of Sinhagad', badge: 'SINHAGAD 1670' },
  { id: 'baji-prabhu', name: 'Baji Prabhu', nameMr: 'वीर बाजीप्रभू देशपांडे', role: 'Hero of Pavankhind', badge: 'PAVANKHIND 1660' },
  { id: 'hambirrao', name: 'Hambirrao Mohite', nameMr: 'सरसेनापती हंबीरराव', role: 'Commander-in-Chief', badge: 'YELBURGA 1677' },
  { id: 'netaji', name: 'Netaji Palkar', nameMr: 'नेताजी पालकर', role: 'Cavalry General', badge: 'CAVALRY BLITZ' },
  { id: 'murarbaji', name: 'Murarbaji Deshpande', nameMr: 'मुरारबाजी देशपांडे', role: 'Defender of Purandar', badge: 'PURANDAR 1665' },
  { id: 'shiva-kashid', name: 'Shiva Kashid', nameMr: 'वीर शिवा काशिद', role: 'The Loyal Doppelganger', badge: 'PANHALA BREAKOUT' },
  { id: 'jiva-mahala', name: 'Jiva Mahala', nameMr: 'जीवा महाला', role: 'Savior at Pratapgad', badge: 'PRATAPGAD 1659' },
  { id: 'kanhoji-angre', name: 'Kanhoji Angre', nameMr: 'सरखेल कान्होजी आंग्रे', role: 'Grand Admiral', badge: 'ARABIAN SEA 1698' }
];

warriors.forEach(w => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <radialGradient id="wGlow_${w.id}" cx="50%" cy="38%" r="55%">
      <stop offset="0%" stop-color="#3B0C0C" />
      <stop offset="60%" stop-color="#1A0505" />
      <stop offset="100%" stop-color="#080303" />
    </radialGradient>
    <linearGradient id="goldW_${w.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7E27A" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#8F6B14" />
    </linearGradient>
    <linearGradient id="tealRim_${w.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#FF9933" />
    </linearGradient>
    <filter id="warriorFilter_${w.id}">
      <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#38BDF8" flood-opacity="0.45" />
      <feDropShadow dx="0" dy="2" stdDeviation="12" flood-color="#D4AF37" flood-opacity="0.6" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="750" fill="url(#wGlow_${w.id})" />

  <!-- Aura Circles -->
  <circle cx="300" cy="270" r="145" fill="none" stroke="url(#tealRim_${w.id})" stroke-width="1.5" stroke-dasharray="10 6" opacity="0.4" />
  <circle cx="300" cy="270" r="160" fill="none" stroke="url(#goldW_${w.id})" stroke-width="1" opacity="0.3" />

  <!-- Warrior Silhouette Graphic -->
  <g filter="url(#warriorFilter_${w.id})">
    <!-- Spear or Sword held high on flank -->
    <line x1="430" y1="80" x2="380" y2="480" stroke="#0A0404" stroke-width="6" />
    <line x1="430" y1="80" x2="380" y2="480" stroke="url(#tealRim_${w.id})" stroke-width="2" />
    <polygon points="430,70 422,95 438,95" fill="#F7E27A" />

    <!-- Turban Pagadi -->
    <ellipse cx="300" cy="205" rx="52" ry="42" fill="#140606" stroke="url(#tealRim_${w.id})" stroke-width="2.5" />
    <path d="M260,205 C260,160 340,160 340,205 Z" fill="#240A0A" stroke="url(#tealRim_${w.id})" stroke-width="2.5" />
    <polygon points="300,145 292,172 308,172" fill="#F7E27A" />

    <!-- Head Profile & Beard -->
    <ellipse cx="300" cy="225" rx="30" ry="34" fill="#0A0404" />
    <path d="M285,245 C295,260 305,260 315,245" stroke="#D4AF37" stroke-width="2" fill="none" />

    <!-- Body Armor & Shoulders -->
    <path d="M190,380 C205,280 270,260 300,260 C330,260 395,280 410,380 C410,440 380,520 360,560 L240,560 C220,520 190,440 190,380 Z" 
          fill="#0D0404" stroke="url(#tealRim_${w.id})" stroke-width="2.5" />

    <!-- Round Maratha Shield (Dhal) on Left Breast -->
    <circle cx="250" cy="390" r="50" fill="#1A0707" stroke="url(#goldW_${w.id})" stroke-width="3" />
    <circle cx="250" cy="390" r="8" fill="#F7E27A" />
    <circle cx="236" cy="376" r="4" fill="#D4AF37" />
    <circle cx="264" cy="376" r="4" fill="#D4AF37" />
    <circle cx="236" cy="404" r="4" fill="#D4AF37" />
    <circle cx="264" cy="404" r="4" fill="#D4AF37" />
  </g>

  <!-- Bottom Title Plate -->
  <rect y="560" width="600" height="190" fill="#0A0404" opacity="0.96" />
  <line x1="60" y1="560" x2="540" y2="560" stroke="url(#goldW_${w.id})" stroke-width="2" />

  <g font-family="'Cinzel Decorative', serif" text-anchor="middle">
    <text x="300" y="620" fill="url(#goldW_${w.id})" font-size="26" font-weight="900" letter-spacing="2">${w.name.toUpperCase()}</text>
  </g>
  <g font-family="'Yatra One', 'Mukta', serif" text-anchor="middle">
    <text x="300" y="660" fill="#F5ECD7" font-size="22" font-weight="700">${w.nameMr}</text>
  </g>
  <g font-family="'Mukta', sans-serif" text-anchor="middle">
    <text x="300" y="700" fill="#FF9933" font-size="15" letter-spacing="3">${w.role.toUpperCase()} • ${w.badge}</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(warriorsDir, `${w.id}.svg`), svg, 'utf8');
});

// 3. MINISTERS (8 Ashtapradhan Ministers)
const ministers = [
  { id: 'peshwa', name: 'Moropant Pingle', nameMr: 'मोरोपंत त्रिंबक पिंगळे', role: 'Prime Minister (Peshwa)' },
  { id: 'amatya', name: 'Ramchandra Nilkanth', nameMr: 'रामचंद्र नीलकंठ', role: 'Finance Minister (Amatya)' },
  { id: 'sachiv', name: 'Annaji Datto', nameMr: 'अण्णाजी दत्तो', role: 'Chief Secretary (Sachiv)' },
  { id: 'mantri', name: 'Dattaji Trimbak', nameMr: 'दत्ताजी त्रिंबक', role: 'Home Minister (Mantri)' },
  { id: 'senapati', name: 'Hambirrao Mohite', nameMr: 'हंबीरराव मोहिते', role: 'Commander-in-Chief (Senapati)' },
  { id: 'sumant', name: 'Ramchandra Trimbak', nameMr: 'रामचंद्र त्रिंबक', role: 'Foreign Minister (Sumant)' },
  { id: 'nyayadhish', name: 'Niraji Raoji', nameMr: 'निराजी रावजी', role: 'Chief Justice (Nyayadhish)' },
  { id: 'panditrao', name: 'Raghunath Pandit', nameMr: 'रघुनाथ पंडित', role: 'Minister of Religion (Panditrao)' }
];

ministers.forEach(m => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <radialGradient id="mGlow_${m.id}" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#24103D" />
      <stop offset="65%" stop-color="#120621" />
      <stop offset="100%" stop-color="#090312" />
    </radialGradient>
    <linearGradient id="goldM_${m.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7E27A" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#8F6B14" />
    </linearGradient>
    <linearGradient id="purpleRim_${m.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A78BFA" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
    <filter id="mFilter_${m.id}">
      <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#A78BFA" flood-opacity="0.5" />
      <feDropShadow dx="0" dy="2" stdDeviation="12" flood-color="#D4AF37" flood-opacity="0.6" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="750" fill="url(#mGlow_${m.id})" />

  <!-- Royal Darbar Aureole -->
  <circle cx="300" cy="270" r="145" fill="none" stroke="url(#purpleRim_${m.id})" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.45" />
  <circle cx="300" cy="270" r="160" fill="none" stroke="url(#goldM_${m.id})" stroke-width="1" opacity="0.3" />

  <!-- Minister Graphic -->
  <g filter="url(#mFilter_${m.id})">
    <!-- Royal Pagadi Turban -->
    <ellipse cx="300" cy="205" rx="55" ry="42" fill="#1C0E2E" stroke="url(#purpleRim_${m.id})" stroke-width="2.5" />
    <path d="M255,205 C255,155 345,155 345,205 Z" fill="#2D144B" stroke="url(#purpleRim_${m.id})" stroke-width="2.5" />
    <circle cx="300" cy="155" r="5" fill="#F7E27A" />

    <!-- Head Profile -->
    <ellipse cx="300" cy="225" rx="30" ry="32" fill="#0F0619" />
    <path d="M285,240 C295,255 305,255 315,240" stroke="#D4AF37" stroke-width="2" fill="none" />

    <!-- Royal Robe Angarkha -->
    <path d="M185,380 C200,280 270,260 300,260 C330,260 400,280 415,380 C415,440 385,520 365,560 L235,560 C215,520 185,440 185,380 Z" 
          fill="#11071F" stroke="url(#purpleRim_${m.id})" stroke-width="2.5" />

    <!-- Royal Farman / State Ledger in Hand -->
    <rect x="265" y="360" width="70" height="95" rx="4" fill="#25123D" stroke="url(#goldM_${m.id})" stroke-width="2.5" />
    <line x1="280" y1="385" x2="320" y2="385" stroke="#D4AF37" stroke-width="1.5" />
    <line x1="280" y1="405" x2="320" y2="405" stroke="#D4AF37" stroke-width="1.5" />
    <line x1="280" y1="425" x2="310" y2="425" stroke="#D4AF37" stroke-width="1.5" />
  </g>

  <!-- Bottom Title Plate -->
  <rect y="560" width="600" height="190" fill="#0A0412" opacity="0.96" />
  <line x1="60" y1="560" x2="540" y2="560" stroke="url(#goldM_${m.id})" stroke-width="2" />

  <g font-family="'Cinzel Decorative', serif" text-anchor="middle">
    <text x="300" y="620" fill="url(#goldM_${m.id})" font-size="26" font-weight="900" letter-spacing="2">${m.name.toUpperCase()}</text>
  </g>
  <g font-family="'Yatra One', 'Mukta', serif" text-anchor="middle">
    <text x="300" y="660" fill="#F5ECD7" font-size="22" font-weight="700">${m.nameMr}</text>
  </g>
  <g font-family="'Mukta', sans-serif" text-anchor="middle">
    <text x="300" y="700" fill="#A78BFA" font-size="15" letter-spacing="3">${m.role.toUpperCase()}</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(ministersDir, `${m.id}.svg`), svg, 'utf8');
});

console.log('Successfully generated all 10 Forts, 9 Warriors, and 8 Ministers SVG placeholders in public/assets!');

