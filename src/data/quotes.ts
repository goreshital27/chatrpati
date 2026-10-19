export interface HistoricalQuote {
  id: string;
  quoteEn: string;
  quoteMr: string;
  author: string;
  authorMr: string;
  source: string;
  context: string;
}

export const HISTORICAL_QUOTES: HistoricalQuote[] = [
  {
    id: 'rajmudra',
    quoteEn: 'The glory of this mudra of Shiva, son of Shahaji, will grow like the crescent moon. It will be worshipped by the world and it shines solely for the well-being of the people.',
    quoteMr: 'प्रतिपच्चन्द्रलेखेव वर्धिष्णुर्विश्ववन्दिता । शाहसूनोः शिवस्यैषा मुद्रा भद्राय राजते ॥',
    author: 'Royal Rajmudra Seal',
    authorMr: 'छत्रपतींची राजमुद्रा',
    source: 'Royal Sanskrit Inscription of Swarajya (1645)',
    context: 'The constitutional motto of Hindavi Swarajya etched into the royal seal.'
  },
  {
    id: 'divine-will',
    quoteEn: 'This kingdom should come into being; this is the Divine Will itself!',
    quoteMr: 'हे राज्य व्हावे, हे तो श्रींची इच्छा!',
    author: 'Chhatrapati Shivaji Maharaj',
    authorMr: 'छत्रपती शिवाजी महाराज',
    source: 'Letter to Dadaji Naras Prabhu (1645)',
    context: 'Proclamation during the youth oath at Raireshwar temple.'
  },
  {
    id: 'ryot-care',
    quoteEn: 'Ensure you do not cause even the slightest affliction to the peasant. Do not touch even a stalk of their vegetables. Provide for them as a parent protects their own child.',
    quoteMr: 'रयतेला काडीचाही उपद्रव न देणे. भाजीच्या देठालाही हात लावू नये. रयतेची काळजी स्वतःच्या लेकरासारखी घ्यावी.',
    author: 'Chhatrapati Shivaji Maharaj',
    authorMr: 'छत्रपती शिवाजी महाराज',
    source: 'Royal Decree to Military Commanders at Chiplun (1674)',
    context: 'Direct orders enforcing absolute moral discipline and peasant protection.'
  },
  {
    id: 'sinhagad',
    quoteEn: 'The fortress of Kondhana is won, but my lion Tanaji is gone forever.',
    quoteMr: 'गड आला पण माझा सिंह गेला!',
    author: 'Chhatrapati Shivaji Maharaj',
    authorMr: 'छत्रपती शिवाजी महाराज',
    source: 'Sabhasad Bakhar (1697)',
    context: 'Grief-stricken words upon hearing of Tanaji Malusare’s supreme sacrifice at Sinhagad.'
  },
  {
    id: 'khafi-khan',
    quoteEn: 'He made it an unalterable rule that wherever his followers went, they should do no harm to mosques, the holy Quran, or to the women of anyone. Whenever a copy of the holy book came into his hands, he treated it with deep reverence and gave it to his Muslim followers.',
    quoteMr: 'त्यांनी असा कठोर नियम केला होता की त्यांच्या सैन्याने मशिदी, पवित्र कुराण आणि कोणत्याही स्त्रीचा अनादर करू नये. कुराणाची प्रत हाती आल्यास ते अत्यंत आदराने आपल्या मुस्लिम सैनिकांकडे सुपूर्द करत.',
    author: 'Khafi Khan (Contemporary Mughal Court Chronicler)',
    authorMr: 'खाफी खान (मुघल दरबारी इतिहासकार)',
    source: 'Muntakhab-ul Lubab (Persian Imperial Chronicles)',
    context: 'Written by a Mughal historian who fought against Shivaji, admitting his impeccable chivalry.'
  },
  {
    id: 'jadunath-sarkar',
    quoteEn: 'Shivaji was not merely a military genius and daring warrior; he was a profound nation-builder who created order out of chaos, teaching an oppressed people to hold their heads high.',
    quoteMr: 'शिवरायांनी केवळ लढाया जिंकल्या नाहीत, तर पारतंत्र्यात पिचलेल्या जनतेत आत्मसन्मान निर्माण करून एका अजिंक्य राष्ट्राची पायाभरणी केली.',
    author: 'Sir Jadunath Sarkar',
    authorMr: 'सर जदुनाथ सरकार',
    source: 'Shivaji and His Times (1919)',
    context: 'Modern critical historical assessment by India’s foremost medieval historian.'
  },
  {
    id: 'tagore',
    quoteEn: 'In a distant age, into this land of Maharashtra, what great message of Unity did Shivaji bring! He welded the fragmented people into a single noble soul dedicated to liberty.',
    quoteMr: 'दूरच्या एका युगात, महाराष्ट्राच्या या भूमीत, शिवरायांनी एकतेचा काय महान संदेश आणला! त्यांनी विखुरलेल्या लोकांना एकत्र आणून एका स्वतंत्र आत्म्यात सामावून घेतले.',
    author: 'Rabindranath Tagore',
    authorMr: 'रवींद्रनाथ टागोर',
    source: 'Poem "Shivaji" (1904)',
    context: 'Nobel Laureate Rabindranath Tagore’s iconic poetic tribute to Shivaji Maharaj.'
  }
];

