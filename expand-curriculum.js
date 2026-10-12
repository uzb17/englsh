// expand-curriculum.js
const fs = require('fs');

const NEW_MODULES_DATA = {
  // ==========================================
  // LEVEL A1: 2 NEW MODULES
  // ==========================================
  'a1-family-people': {
    id: 'a1-family-people',
    levelId: 'a1',
    title: 'Family Members & Character (Oila va Xarakter)',
    category: 'People & Relationships',
    icon: 'fa-people-roof',
    description: 'Describe family trees, personal appearances, and personality traits naturally in English.',
    overview: 'Oila a’zolari, insonlarning tashqi ko‘rinishi va fe’l-atvori.',
    flashcards: [
      { word: 'Sibling', uz: 'Aka-uka yoki opa-singil', phonetic: '/ˈsɪb.lɪŋ/', pronunciation_uz: '[sib-ling]', pos: 'Noun', definition: 'A brother or sister.', example: 'I have two siblings: an older brother and a younger sister.', chunk: 'have two siblings' },
      { word: 'Generous', uz: 'Saxiy, qo‘li ochiq', phonetic: '/ˈdʒen.ər.əs/', pronunciation_uz: '[jen-er-as]', pos: 'Adjective', definition: 'Willing to give money, help, or kindness freely.', example: 'My grandfather is very generous and always helps neighbors.', chunk: 'a generous person' },
      { word: 'Patient', uz: 'Sabrli, bosiq', phonetic: '/ˈpeɪ.ʃənt/', pronunciation_uz: '[pey-shent]', pos: 'Adjective', definition: 'Able to accept delays or problems without becoming angry.', example: 'A good teacher must be extremely patient with young learners.', chunk: 'stay calm and patient' },
      { word: 'Resemble', uz: 'O‘xshamoq', phonetic: '/rɪˈzem.bəl/', pronunciation_uz: '[ri-zem-bl]', pos: 'Verb', definition: 'To look like or be similar to an older relative.', example: 'She resembles her mother in both looks and smile.', chunk: 'resemble closely' }
    ],
    grammar: {
      rule: 'Possessive \'s and Adjectives of Appearance',
      formula: 'Subject + have/has got + [Adjective] + [Noun]  |  [Name]\'s + [Family member]',
      explanation_uz: 'Egalik qo‘shimchasi (\'s) va tashqi ko‘rinishni ifodalashda "have/has got" yoki "is/are" ishlatiladi.',
      examples: [
        { en: 'My brother\'s hair is wavy and brown.', uz: 'Akamning sochi to‘lqinsimon va jigarrang.', breakdown: 'brother\'s (akamning) + wavy hair' },
        { en: 'She is friendly, outgoing, and very hardworking.', uz: 'U samimiy, kirishimli va juda mehnatkash.', breakdown: 'is + character adjectives' }
      ]
    },
    ccqs: [
      {
        question: 'If someone is "generous", do they keep all their money to themselves?',
        options: [
          { text: 'No, they share and help others freely', correct: true, feedback: 'To‘g‘ri! Saxiy inson ulashadi.' },
          { text: 'Yes, they never share anything', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '👨‍👧 Father and Daughter', right: 'Close family bond' },
      { left: '🎁 Generous friend', right: 'Loves giving and helping' },
      { left: '⏳ Patient teacher', right: 'Never loses temper' },
      { left: '👥 Sibling connection', right: 'Brother or sister' }
    ],
    fillBlank: {
      sentence: 'My uncle is very ___; he always listens to everyone calmly.',
      options: ['patient', 'angry', 'lazy'],
      correct: 'patient',
      explanation: 'Bosiqlik bilan eshitish sabrli (patient) insonga xos.'
    },
    teacherNotes: {
      elicitation: 'Show family photo: "Who is this person in relation to you?"',
      commonMistake: 'Using "have" instead of "is" for age: "I have 20 years" (Say: "I am 20").',
      quickCcq: 'Does your sibling have to be older than you?'
    }
  },

  'a1-places-directions': {
    id: 'a1-places-directions',
    levelId: 'a1',
    title: 'Town Places & Directions (Shahar va Yo‘nalishlar)',
    category: 'Places & Navigation',
    icon: 'fa-map-location-dot',
    description: 'Navigate modern cities, identify public buildings, and ask for directions politely.',
    overview: 'Shahar binolari, manzilni so‘rash va yo‘l ko‘rsatish iboralari.',
    flashcards: [
      { word: 'Crossroads', uz: 'Chorraha', phonetic: '/ˈkrɒs.rəʊdz/', pronunciation_uz: '[kros-roudz]', pos: 'Noun', definition: 'A place where two or more roads intersect.', example: 'Turn right at the next busy crossroads.', chunk: 'at the crossroads' },
      { word: 'Pedestrian', uz: 'Piyoda yo‘lovchi', phonetic: '/pəˈdes.tri.ən/', pronunciation_uz: '[pe-des-tri-an]', pos: 'Noun', definition: 'A person walking along a street rather than in a vehicle.', example: 'Vehicles must stop for pedestrians at the zebra crossing.', chunk: 'pedestrian crossing' },
      { word: 'Opposite', uz: 'Ro‘parasida, qarshisida', phonetic: '/ˈɒp.ə.zɪt/', pronunciation_uz: '[op-o-zit]', pos: 'Preposition', definition: 'Directly across from something or facing it.', example: 'The national museum is located opposite the central bank.', chunk: 'opposite the station' },
      { word: 'Straight ahead', uz: 'To‘g‘riga', phonetic: '/streɪt əˈhed/', pronunciation_uz: '[streyt e-hed]', pos: 'Phrase', definition: 'Continuing in the same forward direction without turning.', example: 'Go straight ahead for 200 meters until you see the park.', chunk: 'go straight ahead' }
    ],
    grammar: {
      rule: 'Imperatives for Giving Directions & Prepositions of Place',
      formula: 'Turn [left/right] + at the [place]  |  Go straight ahead  |  It is [next to / opposite / between]',
      explanation_uz: 'Yo‘l ko‘rsatishda buyruq mayli (Turn left, Go straight) va joy predloglari (opposite, next to) qo‘llanadi.',
      examples: [
        { en: 'Excuse me, how do I get to the pharmacy?', uz: 'Kechirasiz, dorixonaga qanday borsam bo‘ladi?', breakdown: 'Excuse me + how do I get to...' },
        { en: 'Go straight ahead and turn right at the traffic lights.', uz: 'To‘g‘riga boring va svetofordan o‘ngga buriling.', breakdown: 'Go straight + turn right' }
      ]
    },
    ccqs: [
      {
        question: 'If a bank is "opposite" the library, is it on the same side or across the street?',
        options: [
          { text: 'Across the street facing it', correct: true, feedback: 'To‘g‘ri! Ro‘parasida, yo‘lning narigi tomonida.' },
          { text: 'Inside the library building', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '➡️ Turn right', right: 'Change direction to the right' },
      { left: '⬆️ Go straight ahead', right: 'Continue forward without turning' },
      { left: '🏬 Opposite the mall', right: 'Across the street from the mall' },
      { left: '🚦 Traffic lights', right: 'Signal for stopping and going' }
    ],
    fillBlank: {
      sentence: 'Excuse me, could you tell me where the nearest ___ is? I need some medicine.',
      options: ['pharmacy', 'cinema', 'gym'],
      correct: 'pharmacy',
      explanation: 'Dori-darmon dorixonadan (pharmacy) olinadi.'
    },
    teacherNotes: {
      elicitation: 'Draw simple map on board: "Where is the post office relative to the bank?"',
      commonMistake: 'Saying "turn to left" instead of natural "turn left".',
      quickCcq: 'Can you go straight ahead if there is a wall in front of you?'
    }
  },

  // ==========================================
  // LEVEL A2: 5 NEW MODULES
  // ==========================================
  'a2-past-continuous': {
    id: 'a2-past-continuous',
    levelId: 'a2',
    title: 'Past Continuous vs Past Simple (O‘tgan Davomiy Zamon)',
    category: 'Grammar & Narratives',
    icon: 'fa-timeline',
    description: 'Master interrupted actions, background scenes, and storytelling using was/were + V-ing.',
    overview: 'O‘tmishda davom etayotgan jarayonlar va ularni to‘xtatgan voqealar.',
    flashcards: [
      { word: 'Simultaneous', uz: 'Bir vaqtda sodir bo‘ladigan', phonetic: '/ˌsɪm.əlˈteɪ.ni.əs/', pronunciation_uz: '[sim-ul-tey-ni-as]', pos: 'Adjective', definition: 'Happening or existing at exactly the same time.', example: 'The two explosions were simultaneous.', chunk: 'simultaneous actions' },
      { word: 'Interrupt', uz: 'Bo‘lmoq, to‘xtatib qo‘ymoq', phonetic: '/ˌɪn.təˈrʌpt/', pronunciation_uz: '[in-ter-rapt]', pos: 'Verb', definition: 'To stop an ongoing process or speaker suddenly.', example: 'A loud phone call interrupted our study session.', chunk: 'interrupt the flow' },
      { word: 'Background', uz: 'Orqa fon, sharoit', phonetic: '/ˈbæk.ɡraʊnd/', pronunciation_uz: '[bek-graund]', pos: 'Noun', definition: 'The conditions or situation that form the setting for an event.', example: 'Birds were singing in the background as we spoke.', chunk: 'background scene' },
      { word: 'While', uz: 'Davomida, -ayotgan paytda', phonetic: '/waɪl/', pronunciation_uz: '[wayl]', pos: 'Conjunction', definition: 'During the time that something else is occurring.', example: 'While I was cooking dinner, the doorbell rang.', chunk: 'while I was reading' }
    ],
    grammar: {
      rule: 'Past Continuous for Background Actions Interrupted by Past Simple',
      formula: 'While + [Subject + was/were + V-ing], [Subject + V2 (Past Simple)]',
      explanation_uz: 'Uzoq davom etayotgan harakat (Past Continuous) to‘satdan sodir bo‘lgan qisqa harakat (Past Simple) bilan to‘qnashadi.',
      examples: [
        { en: 'I was driving home when it suddenly started to snow heavily.', uz: 'Uyga mashinada ketayotgan edim, birdan qor yog‘a boshladi.', breakdown: 'was driving (uzoq jarayon) + started (keskin to‘xtash)' },
        { en: 'While she was studying in the library, her phone vibrated.', uz: 'U kutubxonada dars qilayotgan paytda, telefoni jiringladi.', breakdown: 'was studying + vibrated' }
      ]
    },
    ccqs: [
      {
        question: 'In "I was sleeping when the alarm rang", which action started first and took longer?',
        options: [
          { text: 'Sleeping was the continuous ongoing action', correct: true, feedback: 'To‘g‘ri! Uyqu davom etayotgan jarayon edi.' },
          { text: 'The alarm was ringing for hours first', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '📖 Was reading a book', right: 'Long background action' },
      { left: '⚡ Suddenly lights went out', right: 'Short interrupting event' },
      { left: '⏳ While we were walking', right: 'Continuous time connector' },
      { left: '🔔 When the phone rang', right: 'Point in time marker' }
    ],
    fillBlank: {
      sentence: 'While they ___ dinner, someone knocked loudly on the door.',
      options: ['were having', 'had', 'have'],
      correct: 'were having',
      explanation: '"While" dan keyin o‘tgan zamondagi davomli jarayon uchun "were having" kerak.'
    },
    teacherNotes: {
      elicitation: 'Mime reading a book, then drop your keys loudly: "What was I doing when the keys fell?"',
      commonMistake: 'Using "when" with continuous and "while" with past simple backwards.',
      quickCcq: 'Can you use Past Continuous for an instantaneous action like blinking?'
    }
  },

  'a2-comparatives-superlatives': {
    id: 'a2-comparatives-superlatives',
    levelId: 'a2',
    title: 'Comparatives & Superlatives (Qiyosiy va Orttirma Sifatlar)',
    category: 'Descriptive Mastery',
    icon: 'fa-scale-balanced',
    description: 'Compare items, people, and cities accurately using -er/more than and the -est/most.',
    overview: 'Narsalarni bir-biri bilan solishtirish va eng ustun darajani ifodalash.',
    flashcards: [
      { word: 'Superior', uz: 'Ustunroq, sifatliroq', phonetic: '/suːˈpɪə.ri.ər/', pronunciation_uz: '[su-pi-ri-or]', pos: 'Adjective', definition: 'Better in quality or value than others.', example: 'This laptop model is clearly superior to the older version.', chunk: 'superior quality' },
      { word: 'Considerably', uz: 'Ancha, sezilarli darajada', phonetic: '/kənˈsɪd.ər.ə.bli/', pronunciation_uz: '[kon-sid-er-eb-li]', pos: 'Adverb', definition: 'By a notable or large degree.', example: 'The new express train is considerably faster than the bus.', chunk: 'considerably faster' },
      { word: 'Identical', uz: 'Bir xil, aynan o‘zi', phonetic: '/aɪˈden.tɪ.kəl/', pronunciation_uz: '[ay-den-ti-kl]', pos: 'Adjective', definition: 'Exactly the same in appearance or nature.', example: 'The two twin sisters wore identical green dresses.', chunk: 'identical twins' },
      { word: 'Crowded', uz: 'Gavjum, odam ko‘p', phonetic: '/ˈkraʊ.dɪd/', pronunciation_uz: '[krau-did]', pos: 'Adjective', definition: 'Full of people, leaving little empty room.', example: 'Tokyo has some of the most crowded subways in the world.', chunk: 'extremely crowded' }
    ],
    grammar: {
      rule: 'Comparative (-er / more than) and Superlative (the -est / the most)',
      formula: 'Short adj: [adj]-er than  |  the [adj]-est  ||  Long adj: more [adj] than  |  the most [adj]',
      explanation_uz: 'Bir bo‘g‘inli sifatlarga "-er / -est", ko‘p bo‘g‘inlilar oldiga esa "more / the most" qo‘shiladi.',
      examples: [
        { en: 'Tashkent is much bigger than Samarkand.', uz: 'Toshkent Samarqanddan ancha kattaroq.', breakdown: 'big -> bigger (undosh ikkilanadi)' },
        { en: 'Mount Everest is the highest mountain on Earth.', uz: 'Everest Yer yuzidagi eng baland tog‘dir.', breakdown: 'high -> the highest' }
      ]
    },
    ccqs: [
      {
        question: 'If City A is "more expensive than" City B, which one requires more money?',
        options: [
          { text: 'City A requires more money', correct: true, feedback: 'To‘g‘ri! Qimmatrog‘i A shahar.' },
          { text: 'City B is more costly', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '📈 Better than', right: 'Irregular comparative of good' },
      { left: '📉 Worse than', right: 'Irregular comparative of bad' },
      { left: '🏆 The best in the world', right: 'Top superlative ranking' },
      { left: '⚖️ As tall as', right: 'Equal comparison structure' }
    ],
    fillBlank: {
      sentence: 'This smartphone is the ___ modern gadget currently available on the market.',
      options: ['most', 'more', 'much'],
      correct: 'most',
      explanation: 'Orttirma darajada "the most modern" deyiladi.'
    },
    teacherNotes: {
      elicitation: 'Hold two pens of different lengths: "Which pen is longer?"',
      commonMistake: 'Saying "more better" or forgetting "the" in superlatives ("He is tallest").',
      quickCcq: 'Can you say "more cheap" instead of "cheaper"?'
    }
  },

  'a2-countable-uncountable': {
    id: 'a2-countable-uncountable',
    levelId: 'a2',
    title: 'Countable vs Uncountable & Quantifiers (Sanaladigan va Sanalmaydigan Otlar)',
    category: 'Grammar & Quantity',
    icon: 'fa-cubes-stacked',
    description: 'Master some, any, much, many, a lot of, a few, and a little with precision.',
    overview: 'Miqdor so‘zlari: sanaladigan va sanalmaydigan narsalarni to‘g‘ri ifodalash.',
    flashcards: [
      { word: 'Quantity', uz: 'Miqdor, hajm', phonetic: '/ˈkwɒn.tə.ti/', pronunciation_uz: '[kwon-ti-ti]', pos: 'Noun', definition: 'The amount or number of a material or object.', example: 'We need a large quantity of fresh drinking water.', chunk: 'a huge quantity' },
      { word: 'Ingredient', uz: 'Masalliq, tarkibiy qism', phonetic: '/ɪnˈɡriː.di.ənt/', pronunciation_uz: '[in-gri-di-ent]', pos: 'Noun', definition: 'A food component used to prepare a dish.', example: 'Flour and eggs are essential ingredients for baking bread.', chunk: 'fresh ingredients' },
      { word: 'Sufficient', uz: 'Yetarli, yetarli darajada', phonetic: '/səˈfɪʃ.ənt/', pronunciation_uz: '[se-fish-ent]', pos: 'Adjective', definition: 'Enough for a particular purpose or need.', example: 'Make sure you have sufficient sleep before the exam.', chunk: 'sufficient time' },
      { word: 'Scarcity', uz: 'Taqchillik, kamyoblik', phonetic: '/ˈskeə.sə.ti/', pronunciation_uz: '[skeo-si-ti]', pos: 'Noun', definition: 'A situation in which something is difficult to find.', example: 'Water scarcity is a major global ecological concern.', chunk: 'water scarcity' }
    ],
    grammar: {
      rule: 'Countable (many, a few) vs Uncountable (much, a little)',
      formula: 'Countable: many books, a few friends  |  Uncountable: much water, a little sugar',
      explanation_uz: 'Sanaladigan otlar donalab hisoblanadi (many, few). Sanalmaydigan otlar hajm bilan o‘lchanadi (much, little).',
      examples: [
        { en: 'There are a lot of students in the lecture hall.', uz: 'Ma’ruzalar zalida ko‘plab talabalar bor.', breakdown: 'a lot of (ham sanaladigan, ham sanalmaydigan bilan keladi)' },
        { en: 'I have very little time left to catch my flight.', uz: 'Parvozimga yetib olish uchun juda oz vaqtim qoldi.', breakdown: 'little time (vaqt sanalmaydi)' }
      ]
    },
    ccqs: [
      {
        question: 'Is "money" grammatically countable or uncountable in English?',
        options: [
          { text: 'Uncountable (we say "much money", not "many moneys")', correct: true, feedback: 'To‘g‘ri! Dollar va so‘m sanaladi, ammo "money" so‘zi o‘zi sanalmaydi.' },
          { text: 'Countable (one money, two moneys)', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '🍎 Many apples', right: 'Plural countable items' },
      { left: '💧 Much water', right: 'Non-countable liquid' },
      { left: '⏳ A little patience', right: 'Small amount of non-countable quality' },
      { left: '👥 A few teammates', right: 'Small number of countable people' }
    ],
    fillBlank: {
      sentence: 'Could you lend me ___ dollars until tomorrow morning?',
      options: ['a few', 'a little', 'much'],
      correct: 'a few',
      explanation: 'Dollar sanaladigan ot bo‘lgani uchun "a few dollars" deyiladi.'
    },
    teacherNotes: {
      elicitation: 'Show a handful of coins vs a glass of water: "Which can I count 1, 2, 3?"',
      commonMistake: 'Saying "an advice" or "informations" (both are strictly uncountable).',
      quickCcq: 'Can you count furniture?'
    }
  },

  'a2-health-feelings': {
    id: 'a2-health-feelings',
    levelId: 'a2',
    title: 'Health, Illnesses & Wellbeing (Salomatlik va Hissiyotlar)',
    category: 'Daily Living',
    icon: 'fa-heart-pulse',
    description: 'Explain symptoms at the doctor, express emotions, and offer compassionate health advice.',
    overview: 'Shifokor qabulida alomatlarni tushuntirish, hissiyotlar va salomatlik tavsiyalari.',
    flashcards: [
      { word: 'Symptom', uz: 'Alomat, simptom', phonetic: '/ˈsɪmp.təm/', pronunciation_uz: '[simp-tem]', pos: 'Noun', definition: 'A physical sign of an illness or medical condition.', example: 'A persistent high fever is a common symptom of the flu.', chunk: 'show mild symptoms' },
      { word: 'Prescription', uz: 'Retsept (shifokor yozgan)', phonetic: '/prɪˈskrɪp.ʃən/', pronunciation_uz: '[pri-skrip-shen]', pos: 'Noun', definition: 'A written paper from a doctor for medical treatment.', example: 'The pharmacist carefully prepared my antibiotic prescription.', chunk: 'write a prescription' },
      { word: 'Exhausted', uz: 'O‘ta charchagan, darmonsiz', phonetic: '/ɪɡˈzɔː.stɪd/', pronunciation_uz: '[ig-zost-id]', pos: 'Adjective', definition: 'Completely drained of energy and strength.', example: 'After running the marathon, the athlete was utterly exhausted.', chunk: 'feel totally exhausted' },
      { word: 'Anxious', uz: 'Xavotirlangan, bezovta', phonetic: '/ˈæŋk.ʃəs/', pronunciation_uz: '[enk-shes]', pos: 'Adjective', definition: 'Worried, uneasy, and nervous about future events.', example: 'He felt slightly anxious before walking into the interview.', chunk: 'anxious about results' }
    ],
    grammar: {
      rule: 'Expressing Symptoms with "Have got" and Giving Advice with "Should"',
      formula: 'I have got a [headache/fever/cough]  |  You should [rest / see a doctor]',
      explanation_uz: 'Kasallik alomatlarida "I have got a...", maslahat berishda esa "You should..." ishlatiladi.',
      examples: [
        { en: 'I have got a sore throat and a mild headache.', uz: 'Tog‘og‘im og‘riyapti va yengil bosh og‘rig‘i bor.', breakdown: 'have got + illness' },
        { en: 'You should drink plenty of warm herbal tea and rest.', uz: 'Ko‘p iliq giyohli choy ichishingiz va dam olishingiz kerak.', breakdown: 'should + V1' }
      ]
    },
    ccqs: [
      {
        question: 'If you "should" take medication, is it mandatory by police law or recommended advice?',
        options: [
          { text: 'It is recommended medical advice for your benefit', correct: true, feedback: 'To‘g‘ri! Maslahat va tavsiya.' },
          { text: 'You will go to prison if you do not', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '🤕 Splitting headache', right: 'Severe head pain' },
      { left: '💊 Painkiller tablet', right: 'Medicine that reduces aches' },
      { left: '🛌 Bed rest', right: 'Staying in bed to recover' },
      { left: '🌡️ High temperature', right: 'Fever above normal body heat' }
    ],
    fillBlank: {
      sentence: 'You look very pale and unwell. You ___ see a physician immediately.',
      options: ['should', 'might to', 'can to'],
      correct: 'should',
      explanation: 'Tavsiya bildirishda "should" modal fe’li to‘g‘ri keladi.'
    },
    teacherNotes: {
      elicitation: 'Hold forehead and grimace: "What is the matter with me?" (Headache).',
      commonMistake: 'Saying "I have headache" without article "a" (Correct: "I have a headache").',
      quickCcq: 'Does "exhausted" mean just a little bit sleepy?'
    }
  },

  'a2-travel-transport': {
    id: 'a2-travel-transport',
    levelId: 'a2',
    title: 'Travel, Transport & Booking (Sayohat va Transport)',
    category: 'Travel & Mobility',
    icon: 'fa-plane-departure',
    description: 'Book accommodations, navigate airports and train stations, and arrange holiday journeys.',
    overview: 'Chipta xarid qilish, vokzal va aeroportda muloqot, mehmonxona bron qilish.',
    flashcards: [
      { word: 'Reservation', uz: 'Oldindan band qilish (bron)', phonetic: '/ˌrez.əˈveɪ.ʃən/', pronunciation_uz: '[rez-er-vey-shen]', pos: 'Noun', definition: 'An arrangement to secure a seat, room, or table in advance.', example: 'I have made a hotel reservation under the name Alimov.', chunk: 'make a reservation' },
      { word: 'Departure', uz: 'Jo‘nab ketish', phonetic: '/dɪˈpɑː.tʃər/', pronunciation_uz: '[di-par-cher]', pos: 'Noun', definition: 'The act of leaving a place at the start of a trip.', example: 'The flight departure is scheduled for exactly 10:15 AM.', chunk: 'departure lounge' },
      { word: 'Destination', uz: 'Boradigan manzil', phonetic: '/ˌdes.tɪˈneɪ.ʃən/', pronunciation_uz: '[des-ti-ney-shen]', pos: 'Noun', definition: 'The ultimate place to which someone is traveling.', example: 'Paris is one of the most visited tourist destinations.', chunk: 'final destination' },
      { word: 'Delay', uz: 'Kechikish', phonetic: '/dɪˈleɪ/', pronunciation_uz: '[di-ley]', pos: 'Noun', definition: 'A period of time by which something is late.', example: 'We apologize for the 30-minute delay due to mechanical inspection.', chunk: 'flight delay' }
    ],
    grammar: {
      rule: 'Present Continuous for Fixed Travel Arrangements & Prepositions of Transport',
      formula: 'Subject + am/is/are + V-ing + [future time]  |  By train / by plane / on foot',
      explanation_uz: 'Oldindan aniq chiptasi olingan sayohatlar uchun Present Continuous ishlatiladi.',
      examples: [
        { en: 'We are flying to Istanbul next Tuesday morning.', uz: 'Kelasi seshanba ertalab Istanbulga uchib ketayapmiz.', breakdown: 'are flying (aniq chipta olingan reja)' },
        { en: 'I usually travel to the historical center on foot.', uz: 'Tarixiy markazga odatda piyoda boraman.', breakdown: 'on foot (piyoda)' }
      ]
    },
    ccqs: [
      {
        question: 'If you travel "on foot", are you riding a bus or walking with your shoes?',
        options: [
          { text: 'Walking on your own feet', correct: true, feedback: 'To‘g‘ri! Piyoda yurish.' },
          { text: 'Riding a bicycle', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '🛫 Flight departure', right: 'Plane leaving the runway' },
      { left: '🛬 Plane arrival', right: 'Plane landing safely' },
      { left: '🏨 Hotel check-in', right: 'Registering at the front reception' },
      { left: '🎫 Round-trip ticket', right: 'Ticket for going and coming back' }
    ],
    fillBlank: {
      sentence: 'I would like to book a ___ ticket to London and back to Tashkent.',
      options: ['round-trip', 'one-way', 'single'],
      correct: 'round-trip',
      explanation: 'Borib-qaytish chiptasi "round-trip" (yoki "return ticket") deyiladi.'
    },
    teacherNotes: {
      elicitation: 'Show a passport and airplane boarding pass: "Where am I going?"',
      commonMistake: 'Saying "by foot" instead of the standard "on foot".',
      quickCcq: 'Does a one-way ticket bring you back home?'
    }
  },

  // ==========================================
  // LEVEL B1: 4 NEW MODULES
  // ==========================================
  'b1-passive-voice': {
    id: 'b1-passive-voice',
    levelId: 'b1',
    title: 'Passive Voice (Majhul Nisbat: Jarayon va Ixtirolar)',
    category: 'Grammar in Depth',
    icon: 'fa-gears',
    description: 'Shift focus from the doer to the action, processes, and historical discoveries.',
    overview: 'Ish-harakat ijrochisi emas, uning o‘zi va natijasi muhim bo‘lganda qo‘llanadigan tuzilma.',
    flashcards: [
      { word: 'Manufacture', uz: 'Ishlab chiqarmoq, tayyorlamoq', phonetic: '/ˌmæn.jəˈfæk.tʃər/', pronunciation_uz: '[men-yu-fek-cher]', pos: 'Verb', definition: 'To produce goods in large quantities using machinery.', example: 'These microchips are manufactured in specialized cleanrooms.', chunk: 'manufactured locally' },
      { word: 'Discover', uz: 'Kashf qilmoq, topmoq', phonetic: '/dɪˈskʌv.ər/', pronunciation_uz: '[di-skav-er]', pos: 'Verb', definition: 'To find something unexpectedly or in the course of a search.', example: 'Penicillin was discovered by Alexander Fleming in 1928.', chunk: 'discovered by chance' },
      { word: 'Construct', uz: 'Qurmoq, bino qilmoq', phonetic: '/kənˈstrʌkt/', pronunciation_uz: '[kon-strakt]', pos: 'Verb', definition: 'To build or erect something large like a bridge or building.', example: 'The high-speed rail line was constructed within two years.', chunk: 'constructed rapidly' },
      { word: 'Distribute', uz: 'Tarqatmoq, yetkazmoq', phonetic: '/dɪˈstrɪb.juːt/', pronunciation_uz: '[di-strib-yut]', pos: 'Verb', definition: 'To deliver or supply goods to retailers and customers.', example: 'The textbooks are distributed to schools every September.', chunk: 'widely distributed' }
    ],
    grammar: {
      rule: 'Passive Voice Formula: Subject + to be + Past Participle (V3)',
      formula: 'Present: am/is/are + V3  |  Past: was/were + V3  |  Agent: by [person]',
      explanation_uz: 'Majhul nisbatda asosiy e’tibor harakat ob’yektiga qaratiladi: "The bridge was built in 1995".',
      examples: [
        { en: 'English is spoken by millions of people across the globe.', uz: 'Ingliz tili butun dunyo bo‘ylab millionlab insonlar tomonidan so‘zlashiladi.', breakdown: 'is spoken (gapiriladi)' },
        { en: 'The electricity was invented over a century ago.', uz: 'Elektr energiyasi bir asrdan ko‘proq vaqt oldin kashf etilgan.', breakdown: 'was invented' }
      ]
    },
    ccqs: [
      {
        question: 'In "The window was broken by a soccer ball", did the window break itself?',
        options: [
          { text: 'No, the ball acted upon the window (Passive)', correct: true, feedback: 'To‘g‘ri! Oyna majhul nisbatda harakat qabul qildi.' },
          { text: 'Yes, the window broke on its own decision', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '🏛️ Was built in 1400', right: 'Past simple passive history' },
      { left: '📦 Is delivered daily', right: 'Present simple passive routine' },
      { left: '👤 By the author', right: 'Agent introducing the original creator' },
      { left: '✉️ Was sent yesterday', right: 'Completed action received' }
    ],
    fillBlank: {
      sentence: 'Millions of smartphones ___ every year in modern automated factories.',
      options: ['are produced', 'produced', 'is producing'],
      correct: 'are produced',
      explanation: 'Ko‘plikdagi ot bilan Present Passive "are produced" bo‘ladi.'
    },
    teacherNotes: {
      elicitation: 'Hold up a smartphone: "Who made this? Is the maker or the phone our main topic?"',
      commonMistake: 'Forgetting the "to be" verb and saying "The car made in Japan" (Correct: "was made").',
      quickCcq: 'Do we always need to mention "by someone" in passive voice?'
    }
  },

  'b1-relative-clauses': {
    id: 'b1-relative-clauses',
    levelId: 'b1',
    title: 'Defining & Non-Defining Relative Clauses (Nisbiy Ergash Gaplar)',
    category: 'Sentence Architecture',
    icon: 'fa-link',
    description: 'Combine sentences seamlessly using who, which, that, whose, and where.',
    overview: 'Gaplarni "who, which, where, whose" orqali birlashtirib, aniq ma’lumot berish.',
    flashcards: [
      { word: 'Acquaintance', uz: 'Tanish inson', phonetic: '/əˈkweɪn.təns/', pronunciation_uz: '[e-kweyn-tens]', pos: 'Noun', definition: 'A person one knows slightly, but who is not a close friend.', example: 'He is an acquaintance who works in international trade.', chunk: 'a casual acquaintance' },
      { word: 'Colleague', uz: 'Hamkasb', phonetic: '/ˈkɒl.iːɡ/', pronunciation_uz: '[kol-ig]', pos: 'Noun', definition: 'A person with whom one works in a profession or business.', example: 'The colleague whose presentation won the award is very modest.', chunk: 'trusted colleague' },
      { word: 'Landmark', uz: 'Mo‘ljal bino, diqqatga sazovor joy', phonetic: '/ˈlænd.mɑːk/', pronunciation_uz: '[lend-mark]', pos: 'Noun', definition: 'An easily recognizable feature of a landscape or city.', example: 'The clock tower, which was built in 1859, is a famous landmark.', chunk: 'historic landmark' },
      { word: 'Residence', uz: 'Turar-joy, qarorgoh', phonetic: '/ˈrez.ɪ.dəns/', pronunciation_uz: '[rez-i-dens]', pos: 'Noun', definition: 'A person\'s home; the place where someone lives.', example: 'This is the peaceful residence where the writer penned his novel.', chunk: 'official residence' }
    ],
    grammar: {
      rule: 'Relative Pronouns: Who (people), Which/That (things), Where (places), Whose (possession)',
      formula: 'Person + WHO + [verb]  |  Thing + WHICH/THAT + [verb]  |  Place + WHERE  |  Owner + WHOSE',
      explanation_uz: 'Insonlar uchun "who", buyumlar uchun "which/that", joylar uchun "where", egalik uchun "whose" qo‘llanadi.',
      examples: [
        { en: 'The student who scored highest in the olympiad received a scholarship.', uz: 'Olimpiadada eng yuqori ball olgan talaba stipendiya oldi.', breakdown: 'student + who' },
        { en: 'That is the cozy restaurant where we had our first meeting.', uz: 'Bu biz birinchi uchrashuvimizni o‘tkazgan shinam restorandir.', breakdown: 'restaurant + where' }
      ]
    },
    ccqs: [
      {
        question: 'Can you use "who" to refer to a brand new car?',
        options: [
          { text: 'No, "who" is strictly for human beings', correct: true, feedback: 'To‘g‘ri! Mashinalar uchun "which" yoki "that" ishlatiladi.' },
          { text: 'Yes, cars have personalities', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '👤 The doctor WHO treated me', right: 'Person relative pronoun' },
      { left: '📱 The device THAT I purchased', right: 'Inanimate object pronoun' },
      { left: '📍 The town WHERE I was born', right: 'Geographical location pronoun' },
      { left: '💼 The author WHOSE book became famous', right: 'Possession relative pronoun' }
    ],
    fillBlank: {
      sentence: 'This is the dedicated teacher ___ inspired me to study linguistics.',
      options: ['who', 'which', 'where'],
      correct: 'who',
      explanation: 'O‘qituvchi inson bo‘lgani uchun "who" nisbiy olmoshi qo‘yiladi.'
    },
    teacherNotes: {
      elicitation: 'Point to a student: "This is Jasur. He solved the hardest riddle." -> "This is Jasur who..."',
      commonMistake: 'Using commas in defining relative clauses or using "what" instead of "that".',
      quickCcq: 'Does "where" require a preposition at the end of the clause?'
    }
  },

  'b1-modals-deduction': {
    id: 'b1-modals-deduction',
    levelId: 'b1',
    title: 'Modals of Deduction & Probability (Mantiqiy Xulosa Modal Fe’llari)',
    category: 'Advanced Logic',
    icon: 'fa-magnifying-glass-chart',
    description: 'Deduce facts with certainty using must be (99%), might/could be (50%), and can\'t be (0%).',
    overview: 'Dalillarga asoslanib mantiqiy xulosa chiqarish: aniq (must), ehtimol (might), imkonsiz (can\'t).',
    flashcards: [
      { word: 'Deduction', uz: 'Mantiqiy xulosa', phonetic: '/dɪˈdʌk.ʃən/', pronunciation_uz: '[di-dak-shen]', pos: 'Noun', definition: 'The process of reaching a logical conclusion based on evidence.', example: 'Sherlock Holmes made a brilliant deduction from the wet footprints.', chunk: 'logical deduction' },
      { word: 'Inconceivable', uz: 'Aqlga sig‘maydigan, imkonsiz', phonetic: '/ˌɪn.kənˈsiː.və.bəl/', pronunciation_uz: '[in-kon-si-vebl]', pos: 'Adjective', definition: 'Not capable of being imagined or believed; impossible.', example: 'It is inconceivable that he committed the crime; he has an alibi.', chunk: 'utterly inconceivable' },
      { word: 'Plausible', uz: 'Haqiqatga yaqin, ehtimoliy', phonetic: '/ˈplɔː.zə.bəl/', pronunciation_uz: '[plo-zibl]', pos: 'Adjective', definition: 'Seeming reasonable, probable, or likely to be true.', example: 'His explanation for the flight delay sounded completely plausible.', chunk: 'plausible explanation' },
      { word: 'Certainty', uz: 'Ishonch, qat’iylik', phonetic: '/ˈsɜː.tən.ti/', pronunciation_uz: '[ser-ten-ti]', pos: 'Noun', definition: 'Firm conviction that something is unquestionably the case.', example: 'We can say with absolute certainty that water boils at 100°C.', chunk: 'with complete certainty' }
    ],
    grammar: {
      rule: 'Degrees of Certainty: Must (99% sure) vs Might/May (50% sure) vs Can\'t (Impossible)',
      formula: 'Must be + [adj/noun]  |  Might/Could be + [adj/noun]  |  Can\'t be + [adj/noun]',
      explanation_uz: 'Aniq shunday bo‘lsa "must", ehtimol bo‘lsa "might/could", bo‘lishi mutlaqo imkonsiz bo‘lsa "can\'t" ishlatiladi.',
      examples: [
        { en: 'He has worked for 14 hours straight; he must be exhausted.', uz: 'U ketma-ket 14 soat ishladi; shubhasiz juda charchagan bo‘lsa kerak.', breakdown: 'must be (99% ishonch)' },
        { en: 'That woman can\'t be his grandmother; she looks only 30 years old!', uz: 'U ayol uning buvisi bo‘lishi mumkin emas; 30 yoshdek ko‘rinyapti!', breakdown: 'can\'t be (mantiqan imkonsiz)' }
      ]
    },
    ccqs: [
      {
        question: 'If you say "He can\'t be at home", do you think he is probably at home or definitely not?',
        options: [
          { text: 'Definitely NOT at home based on evidence', correct: true, feedback: 'To‘g‘ri! Imkonsiz xulosa.' },
          { text: 'He is definitely sleeping in his bed', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '💯 Must be true', right: 'Almost 100% logical certainty' },
      { left: '❓ Might be true', right: '50% possibility, uncertain' },
      { left: '🚫 Can\'t be true', right: 'Logically impossible based on facts' },
      { left: '🕵️ Detective clue', right: 'Evidence leading to deduction' }
    ],
    fillBlank: {
      sentence: 'The lights are off and their car is gone; they ___ be away on holiday.',
      options: ['must', 'can\'t', 'should to'],
      correct: 'must',
      explanation: 'Uydagi chiroqlar o‘chiq va mashina yo‘qligi ularning ketganligini (must be) bildiradi.'
    },
    teacherNotes: {
      elicitation: 'Knock on door: "Who is that? It is 3 AM." -> "It can\'t be the postman!"',
      commonMistake: 'Using "mustn\'t" for impossible deduction (Say "can\'t be", not "mustn\'t be").',
      quickCcq: 'Does "could be" mean you are 100% certain?'
    }
  },

  'b1-gerunds-infinitives': {
    id: 'b1-gerunds-infinitives',
    levelId: 'b1',
    title: 'Verb Patterns: Gerunds vs Infinitives (Gerundiy va Infinitiv)',
    category: 'Grammar Precision',
    icon: 'fa-shuffle',
    description: 'Distinguish between verbs followed by -ing and verbs followed by to + V1 with meaning shifts.',
    overview: 'Qaysi fe’llardan keyin "-ing" va qaysilaridan keyin "to" kelishi va ularning ma’no farqi.',
    flashcards: [
      { word: 'Postpone', uz: 'Keyinga qoldirmoq', phonetic: '/pəʊstˈpəʊn/', pronunciation_uz: '[poust-poun]', pos: 'Verb', definition: 'To delay an event until a later date (followed by Gerund).', example: 'They decided to postpone signing the contract until next week.', chunk: 'postpone doing something' },
      { word: 'Hesitate', uz: 'Ikkilanmoq', phonetic: '/ˈhez.ɪ.teɪt/', pronunciation_uz: '[hez-i-teyt]', pos: 'Verb', definition: 'To pause before saying or doing something (followed by Infinitive).', example: 'Do not hesitate to ask any questions during our lecture.', chunk: 'hesitate to ask' },
      { word: 'Attempt', uz: 'Urinmoq, harakat qilmoq', phonetic: '/əˈtempt/', pronunciation_uz: '[e-tempt]', pos: 'Verb', definition: 'To try to do something, typically without guaranteed success.', example: 'She attempted to climb the rocky peak without safety ropes.', chunk: 'attempt to achieve' },
      { word: 'Regret', uz: 'Afsuslanmoq', phonetic: '/rɪˈɡret/', pronunciation_uz: '[ri-gret]', pos: 'Verb', definition: 'To feel sad or remorseful about an action or decision.', example: 'I regret telling him the confidential secret.', chunk: 'regret doing something' }
    ],
    grammar: {
      rule: 'Verbs + Gerund (-ing) vs Verbs + Infinitive (to + V1)',
      formula: 'Enjoy/Avoid/Mind + V-ing  |  Decide/Promise/Hope + to V1  |  Stop to do vs Stop doing',
      explanation_uz: '"Enjoy, avoid" doimo "-ing" oladi. "Decide, want" doimo "to" oladi. "Stop" ikkala shaklda turlicha ma’noga ega.',
      examples: [
        { en: 'I stopped smoking five years ago.', uz: 'Men chekishni 5 yil oldin tashladim (butunlay to‘xtatdim).', breakdown: 'stop + V-ing (odatni to‘xtatish)' },
        { en: 'While driving, he stopped to buy a bottle of water.', uz: 'Mashina haydab ketayotib, suv sotib olish uchun to‘xtadi.', breakdown: 'stop + to V1 (boshqa ish uchun to‘xtash)' }
      ]
    },
    ccqs: [
      {
        question: 'If you "remember to lock" the door, did you lock it before or after remembering?',
        options: [
          { text: 'You remembered first, then locked it (duty)', correct: true, feedback: 'To‘g‘ri! Eslab, so‘ng qulfladingiz.' },
          { text: 'You locked it first, then had a childhood memory', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '🏊 Enjoy swimming', right: 'Verb followed by gerund (-ing)' },
      { left: '🎯 Decide to participate', right: 'Verb followed by infinitive (to)' },
      { left: '🛑 Stop smoking', right: 'Permanently quit a habit' },
      { left: '☕ Stop to drink tea', right: 'Pause ongoing motion in order to do' }
    ],
    fillBlank: {
      sentence: 'He promised ___ me with my university research paper this weekend.',
      options: ['to help', 'helping', 'help'],
      correct: 'to help',
      explanation: '"Promise" fe’li o‘zidan keyin infinitiv (to help) talab qiladi.'
    },
    teacherNotes: {
      elicitation: 'Act out smoking, then throw cigarette away: "I stopped smoking" vs "I stopped to smoke".',
      commonMistake: 'Saying "I enjoy to play tennis" instead of "I enjoy playing tennis".',
      quickCcq: 'Does "avoid" take gerund or infinitive?'
    }
  },

  // ==========================================
  // LEVEL B2: 4 NEW MODULES
  // ==========================================
  'b2-third-mixed-conditionals': {
    id: 'b2-third-mixed-conditionals',
    levelId: 'b2',
    title: 'Third & Mixed Conditionals (Uchinchi va Aralash Shart Ergash Gaplar)',
    category: 'Complex Grammar',
    icon: 'fa-clock-rotate-left',
    description: 'Express profound past regrets and connect past decisions to present realities.',
    overview: 'O‘tmishdagi afsuslar va o‘tmishdagi qarorlarning bugungi kundagi oqibatlari.',
    flashcards: [
      { word: 'Remorse', uz: 'Chuqur vijdon azobi, afsus', phonetic: '/rɪˈmɔːs/', pronunciation_uz: '[ri-mors]', pos: 'Noun', definition: 'Deep regret or guilt for a wrong committed.', example: 'He felt overwhelming remorse for not studying harder.', chunk: 'feel deep remorse' },
      { word: 'Hypothetical', uz: 'Faraziy, taxminiy', phonetic: '/ˌhaɪ.pəˈθet.ɪ.kəl/', pronunciation_uz: '[hay-po-tet-i-kl]', pos: 'Adjective', definition: 'Based on a situation that is not real but imagined.', example: 'Let us consider a hypothetical situation where resources are endless.', chunk: 'hypothetical scenario' },
      { word: 'Repercussion', uz: 'Aks sado, uzoq muddatli oqibat', phonetic: '/ˌriː.pəˈkʌʃ.ən/', pronunciation_uz: '[ri-per-kash-en]', pos: 'Noun', definition: 'An unintended consequence occurring some time after an event.', example: 'His hasty decision had serious financial repercussions.', chunk: 'severe repercussions' },
      { word: 'Retrospect', uz: 'O‘tmishga nazar', phonetic: '/ˈret.rə.spekt/', pronunciation_uz: '[ret-ro-spekt]', pos: 'Noun', definition: 'A survey or review of a past course of events.', example: 'In retrospect, moving abroad was the best decision of my life.', chunk: 'in retrospect' }
    ],
    grammar: {
      rule: 'Third Conditional (Past -> Past) and Mixed Conditional (Past -> Present)',
      formula: 'Third: If + had V3, would have V3  ||  Mixed: If + had V3, would V1 (now)',
      explanation_uz: 'Uchinchi shart o‘tmishdagi afsusni bildiradi. Aralash shart esa o‘tmishdagi xatoning hozirgi oqibatini ko‘rsatadi.',
      examples: [
        { en: 'If I had studied medicine, I would be a doctor right now.', uz: 'Agar o‘shanda tibbiyotda o‘qiganimda, hozir shifokor bo‘lar edim.', breakdown: 'Mixed: had studied (past) -> would be (present)' },
        { en: 'If we had taken the taxi, we would not have missed our flight.', uz: 'Agar taksiga o‘tirganimizda edi, parvozimizni o‘tkazib yubormagan bo‘lardik.', breakdown: 'Third: had taken -> would not have missed' }
      ]
    },
    ccqs: [
      {
        question: 'In "If I had set my alarm, I wouldn\'t be late now", did the person set the alarm in the past?',
        options: [
          { text: 'No, they forgot to set it, and now they are late', correct: true, feedback: 'To‘g‘ri! O‘tmishdagi xato tufayli hozir kechikmoqda.' },
          { text: 'Yes, they arrived perfectly on time', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '⏳ If I had known the truth', right: 'Past hypothetical condition' },
      { left: '✈️ Would have joined you', right: 'Past hypothetical result' },
      { left: '💼 Would be rich today', right: 'Present result of a past condition (Mixed)' },
      { left: '😔 Regret about missed chances', right: 'Emotional driver of third conditional' }
    ],
    fillBlank: {
      sentence: 'If she had listened to her mentor, she ___ in this complicated predicament today.',
      options: ['would not be', 'would not have been', 'will not be'],
      correct: 'would not be',
      explanation: 'Hozirgi kundagi oqibat (today) bo‘lgani uchun aralash shart "would not be" qo‘llanadi.'
    },
    teacherNotes: {
      elicitation: 'Tell a short story: "I didn\'t study -> I failed -> I am sad now. Connect them!"',
      commonMistake: 'Putting "would have" inside the "if" clause ("If I would have known").',
      quickCcq: 'Can third conditional change anything in real life today?'
    }
  },

  'b2-reported-speech': {
    id: 'b2-reported-speech',
    levelId: 'b2',
    title: 'Reported Speech & Reporting Verbs (O‘zlashtirma Gap va Fe’llar)',
    category: 'Communication Nuance',
    icon: 'fa-comments',
    description: 'Transform direct quotes into natural reported speech using verbs like insist, deny, and suggest.',
    overview: 'Birovning gapini yetkazish va "say/tell" o‘rniga boy fe’llardan (warn, admit, advise) foydalanish.',
    flashcards: [
      { word: 'Admit', uz: 'Tan olmoq, iqror bo‘lmoq', phonetic: '/ədˈmɪt/', pronunciation_uz: '[ed-mit]', pos: 'Verb', definition: 'To confess to be true or to be one\'s fault (followed by -ing).', example: 'The driver admitted exceeding the speed limit on the highway.', chunk: 'admit making a mistake' },
      { word: 'Deny', uz: 'Inkor qilmoq, rad etmoq', phonetic: '/dɪˈnaɪ/', pronunciation_uz: '[di-nay]', pos: 'Verb', definition: 'To state that one refuses to admit the truth of an accusation.', example: 'The suspect firmly denied stealing the valuable jewelry.', chunk: 'deny any involvement' },
      { word: 'Urge', uz: 'Undamoq, qistamoq', phonetic: '/ɜːdʒ/', pronunciation_uz: '[erj]', pos: 'Verb', definition: 'To strongly encourage someone to take a specific action.', example: 'The doctor urged him to adopt a healthier diet immediately.', chunk: 'urge caution' },
      { word: 'Confidential', uz: 'Maxfiy, sir saqlanadigan', phonetic: '/ˌkɒn.fɪˈden.ʃəl/', pronunciation_uz: '[kon-fi-den-shl]', pos: 'Adjective', definition: 'Intended to be kept secret and private.', example: 'She informed me that the financial report was strictly confidential.', chunk: 'confidential information' }
    ],
    grammar: {
      rule: 'Tense Backshifting & Advanced Reporting Verb Patterns',
      formula: 'Direct: Present -> Reported: Past  ||  Verb + that / Verb + someone to do / Verb + V-ing',
      explanation_uz: 'Ko‘chirma gap o‘zlashtirilganda zamonlar bir pog‘ona orqaga suriladi (Present -> Past). "Advise, warn, insist" kabi fe’llar nutqni boyitadi.',
      examples: [
        { en: '"I will assist you tomorrow," he said -> He promised that he would assist me the following day.', uz: '"Ertaga yordam beraman," dedi -> U ertasi kuni yordam berishga va’da berdi.', breakdown: 'will -> would, tomorrow -> the following day' },
        { en: 'The officer warned us not to venture into the foggy mountains.', uz: 'Zobit bizni tumanli tog‘larga bormaslikdan ogohlantirdi.', breakdown: 'warned + object + not to V1' }
      ]
    },
    ccqs: [
      {
        question: 'In reported speech, what does the time expression "now" typically shift into?',
        options: [
          { text: '"Then" or "at that time"', correct: true, feedback: 'To‘g‘ri! "Now" so‘zi "then" ga aylanadi.' },
          { text: 'It remains "now" without any change', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '🗣️ She promised to help', right: 'Verb + to-infinitive pattern' },
      { left: '🛑 He denied taking the funds', right: 'Verb + gerund pattern' },
      { left: '⚠️ They warned us against the risk', right: 'Verb + preposition pattern' },
      { left: '📜 Said -> Had said', right: 'Tense backshift rule' }
    ],
    fillBlank: {
      sentence: 'The defense attorney firmly ___ that his client was present at the crime scene.',
      options: ['denied', 'insisted to', 'refused'],
      correct: 'denied',
      explanation: 'Voqeani rad etishda "denied that" to‘g‘ri keladi.'
    },
    teacherNotes: {
      elicitation: 'Whisper to student: "I am hungry." Ask class: "What did he just say?"',
      commonMistake: 'Using "said me" instead of "told me" or "said to me".',
      quickCcq: 'Does "suggest" take an infinitive with "to"? (No: suggest doing or suggest that).'
    }
  },

  'b2-future-aspects': {
    id: 'b2-future-aspects',
    levelId: 'b2',
    title: 'Future Continuous & Future Perfect (Kelasi Davomiy va Tugallangan Zamonlar)',
    category: 'Time Perspectives',
    icon: 'fa-forward-fast',
    description: 'Project future moments and achievements using will be doing and will have done by a deadline.',
    overview: 'Kelajakdagi ma’lum vaqtda davom etayotgan jarayon va belgilangan muddatga qadar yakunlanadigan ishlar.',
    flashcards: [
      { word: 'Milestone', uz: 'Muhim bosqich, burilish nuqtasi', phonetic: '/ˈmaɪl.stəʊn/', pronunciation_uz: '[mayl-stoun]', pos: 'Noun', definition: 'A significant stage or event in the development of something.', example: 'Graduating from medical school is a massive career milestone.', chunk: 'reach a milestone' },
      { word: 'Deadline', uz: 'Oxirgi qat’iy muddat', phonetic: '/ˈded.laɪn/', pronunciation_uz: '[ded-layn]', pos: 'Noun', definition: 'The latest time or date by which something must be completed.', example: 'By the midnight deadline, all project drafts will have been submitted.', chunk: 'meet the deadline' },
      { word: 'Projected', uz: 'Bashorat qilingan, kutilayotgan', phonetic: '/prəˈdʒek.tɪd/', pronunciation_uz: '[pro-jek-tid]', pos: 'Adjective', definition: 'Estimated or forecasted based on current trends.', example: 'The projected economic growth will be climbing steadily.', chunk: 'projected timeline' },
      { word: 'Accomplishment', uz: 'Muvaffaqiyat, erishilgan natija', phonetic: '/əˈkʌm.plɪʃ.mənt/', pronunciation_uz: '[e-kam-plish-ment]', pos: 'Noun', definition: 'Something that has been achieved successfully.', example: 'Publishing two books before age thirty was an extraordinary accomplishment.', chunk: 'notable accomplishment' }
    ],
    grammar: {
      rule: 'Future Continuous (will be + V-ing) vs Future Perfect (will have + V3)',
      formula: 'Continuous: At this time tomorrow, I will be flying  ||  Perfect: By 2030, I will have graduated',
      explanation_uz: '"Future Continuous" kelajakdagi aniq lahzada davom etayotgan harakat. "Future Perfect" esa "by" (gacha) ko‘rsatkichi bilan tugallanadigan ishdir.',
      examples: [
        { en: 'This time tomorrow, we will be flying over the Atlantic Ocean.', uz: 'Ertaga ayni shu vaqtda biz Atlantika okeani ustidan uchib ketayotgan bo‘lamiz.', breakdown: 'will be flying (jarayon)' },
        { en: 'By the end of this semester, they will have completed all modules.', uz: 'Ushbu semestr oxirigacha ular barcha modullarni tugatib bo‘lgan bo‘ladilar.', breakdown: 'will have completed (yakunlangan natija)' }
      ]
    },
    ccqs: [
      {
        question: 'If you say "By Friday I will have finished my essay", will the essay still be unwritten on Saturday?',
        options: [
          { text: 'No, it will already be complete before Friday ends', correct: true, feedback: 'To‘g‘ri! Juma kunigacha tayyor bo‘ladi.' },
          { text: 'Yes, you will just start writing on Saturday', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '🛫 Will be flying at 3 PM', right: 'Action in progress at a future moment' },
      { left: '🏁 Will have finished by Friday', right: 'Action completed prior to a future deadline' },
      { left: '📅 By next year', right: 'Future perfect time indicator' },
      { left: '⏰ At this exact time tomorrow', right: 'Future continuous time indicator' }
    ],
    fillBlank: {
      sentence: 'By the time you wake up tomorrow morning, our flight ___ in London.',
      options: ['will have landed', 'will be landing', 'will land'],
      correct: 'will have landed',
      explanation: '"By the time you wake up" natijasi oldin yakunlanganini bildirib "will have landed" bo‘ladi.'
    },
    teacherNotes: {
      elicitation: 'Draw a timeline: "Where will you be at 8 PM tonight? What will you have achieved by 2030?"',
      commonMistake: 'Using "by" with simple future instead of future perfect.',
      quickCcq: 'Can you use Future Perfect without a deadline point in time?'
    }
  },

  'b2-essay-cohesion': {
    id: 'b2-essay-cohesion',
    levelId: 'b2',
    title: 'Essay Writing & Discourse Markers (Insho Yozish va Mantiqiy Bog‘lovchilar)',
    category: 'Academic Writing',
    icon: 'fa-feather-pointed',
    description: 'Structure cohesive IELTS/TOEFL essays using contrasting, conceding, and summarizing markers.',
    overview: 'Akademik insho tuzilishi, argumentlarni asoslash va "however, although, consequently" bog‘lovchilari.',
    flashcards: [
      { word: 'Furthermore', uz: 'Bundan tashqari, yana shuni aytish joizki', phonetic: '/ˌfɜː.ðəˈmɔː/', pronunciation_uz: '[fer-zer-mor]', pos: 'Adverb', definition: 'In addition; introducing a fresh point that reinforces the argument.', example: 'The proposal is cost-effective; furthermore, it reduces carbon emissions.', chunk: 'furthermore, it is vital' },
      { word: 'Nevertheless', uz: 'Shunga qaramasdan', phonetic: '/ˌnev.ə.ðəˈles/', pronunciation_uz: '[nev-er-ze-les]', pos: 'Adverb', definition: 'In spite of that; nonetheless.', example: 'The experiment faced early hurdles; nevertheless, it proved triumphant.', chunk: 'nevertheless, we continued' },
      { word: 'Consequently', uz: 'Oqibatda, natijada', phonetic: '/ˈkɒn.sɪ.kwənt.li/', pronunciation_uz: '[kon-si-kwent-li]', pos: 'Adverb', definition: 'As a result; therefore.', example: 'He missed several vital lectures; consequently, his exam score dropped.', chunk: 'consequently, results improved' },
      { word: 'Cohesion', uz: 'Mantiqiy bog‘liqlik, yaxlitlik', phonetic: '/kəʊˈhiː.ʒən/', pronunciation_uz: '[kou-hi-zhen]', pos: 'Noun', definition: 'The quality of being logical, consistent, and cleanly unified.', example: 'Use clear transitional phrases to ensure paragraph cohesion.', chunk: 'textual cohesion' }
    ],
    grammar: {
      rule: 'Paragraph Architecture: Topic Sentence -> Supporting Evidence -> Concluding Thought',
      formula: 'Contrast: On the one hand... On the other hand  |  Result: Therefore / Hence  |  Summary: In conclusion',
      explanation_uz: 'Akademik matnda fikrlar bir-biriga mantiqiy bog‘lovchilar (transitional phrases) orqali uzviy ulanadi.',
      examples: [
        { en: 'Although technological advancements offer convenience, they also present cybersecurity dilemmas.', uz: 'Texnologik yutuqlar qulaylik yaratsa-da, ular kiberxavfsizlik muammolarini ham keltirib chiqaradi.', breakdown: 'Although (qarama-qarshilik) + comma' },
        { en: 'In conclusion, governments must allocate substantial funding toward renewable infrastructure.', uz: 'Xulosa qilib aytganda, hukumatlar qayta tiklanuvchi infratuzilmaga salmoqli mablag‘ ajratishi lozim.', breakdown: 'In conclusion (xulosa kiritish)' }
      ]
    },
    ccqs: [
      {
        question: 'Does "Furthermore" introduce an opposing argument or reinforce the current point?',
        options: [
          { text: 'It reinforces and adds supporting evidence', correct: true, feedback: 'To‘g‘ri! Fikrni qo‘shimcha mustahkamlaydi.' },
          { text: 'It contradicts the previous sentence completely', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '➕ Furthermore / In addition', right: 'Adding reinforcing information' },
      { left: '⚖️ However / On the contrary', right: 'Introducing contrasting viewpoint' },
      { left: '🎯 Consequently / Therefore', right: 'Showing cause and effect consequence' },
      { left: '🏁 To summarize / In conclusion', right: 'Wrapping up final essay verdict' }
    ],
    fillBlank: {
      sentence: 'Renewable energy is becoming cheaper; ___, solar installations are soaring worldwide.',
      options: ['consequently', 'although', 'despite'],
      correct: 'consequently',
      explanation: 'Sabab-oqibat natijasini ko‘rsatish uchun "consequently" (natijada) to‘g‘ri.'
    },
    teacherNotes: {
      elicitation: 'Give students two unrelated sentences: "How can we glue these thoughts together logically?"',
      commonMistake: 'Overusing "Moreover" at the start of every single sentence.',
      quickCcq: 'Can you use "In conclusion" at the beginning of the introductory paragraph?'
    }
  },

  // ==========================================
  // LEVEL C1: 3 NEW MODULES
  // ==========================================
  'c1-cleft-sentences': {
    id: 'c1-cleft-sentences',
    levelId: 'c1',
    title: 'Cleft Sentences & Rhetorical Emphasis (Fikrni Urg‘ulash Tuzilmalari)',
    category: 'Stylistic Mastery',
    icon: 'fa-highlighter',
    description: 'Direct the listener’s attention with precision using "It is/was... that" and "What I admire is...".',
    overview: 'Ingliz tilida ma’lum so‘z yoki fikrga diqqatni qaratish uchun gapni ikkiga bo‘lib urg‘ulash san’ati.',
    flashcards: [
      { word: 'Emphasis', uz: 'Urg‘u, e’tibor qaratish', phonetic: '/ˈem.fə.sɪs/', pronunciation_uz: '[em-fe-sis]', pos: 'Noun', definition: 'Special importance, value, or prominence given to something.', example: 'The CEO placed immense emphasis on user privacy and data security.', chunk: 'place heavy emphasis' },
      { word: 'Rhetoric', uz: 'Ritorika, notiqlik san’ati', phonetic: '/ˈret.ər.ɪk/', pronunciation_uz: '[ret-er-ik]', pos: 'Noun', definition: 'The art of effective or persuasive speaking or writing.', example: 'His persuasive rhetoric swayed the skeptical parliamentary jury.', chunk: 'rhetorical device' },
      { word: 'Prominence', uz: 'Ko‘zga tashlanuvchanlik, nufuz', phonetic: '/ˈprɒm.ɪ.nəns/', pronunciation_uz: '[prom-i-nens]', pos: 'Noun', definition: 'The state of being widely noticed or important.', example: 'The candidate’s stance on education rose to national prominence.', chunk: 'gain prominence' },
      { word: 'Foreground', uz: 'Oldingi planga chiqarmoq', phonetic: '/ˈfɔː.ɡraʊnd/', pronunciation_uz: '[for-graund]', pos: 'Verb', definition: 'To make something the most prominent feature.', example: 'The essay foregrounds the ethical responsibilities of AI developers.', chunk: 'foreground the issue' }
    ],
    grammar: {
      rule: 'It-Cleft and Wh-Cleft (Pseudo-cleft) Constructions',
      formula: 'It is/was + [Emphasized Element] + that/who...  ||  What + [Subject + Verb] + is/was + [Focus]',
      explanation_uz: '"John broke the window" o‘rniga urg‘u berish uchun: "It was John who broke the window" yoki "What John broke was the window" deyiladi.',
      examples: [
        { en: 'It was his profound honesty that earned our unwavering respect.', uz: 'Bizning cheksiz hurmatimizga sazovor bo‘lgan narsa uning chuqur halolligi edi.', breakdown: 'It was + honesty + that...' },
        { en: 'What impressed the admissions committee was her original research methodology.', uz: 'Qabul komissiyasini hayratda qoldirgan narsa uning noyob tadqiqot metodologiyasi bo‘ldi.', breakdown: 'What impressed + was + methodology' }
      ]
    },
    ccqs: [
      {
        question: 'Does "It was Sarah who solved the equation" emphasize Sarah herself or the equation?',
        options: [
          { text: 'It places direct focus and spotlight on Sarah', correct: true, feedback: 'To‘g‘ri! Diqqat aynan Sarahga qaratilgan.' },
          { text: 'It emphasizes only the blackboard', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '✨ It was the CEO WHO made the announcement', right: 'It-cleft emphasizing the human agent' },
      { left: '💡 What we need IS constructive feedback', right: 'Wh-cleft emphasizing the requirement' },
      { left: '📍 All I want IS a peaceful workspace', right: 'All-cleft restricting the focus' },
      { left: '🎭 Dramatic stylistic transformation', right: 'Goal of cleft sentence usage' }
    ],
    fillBlank: {
      sentence: '___ really astonished the audience was her virtuoso violin improvisation.',
      options: ['What', 'That', 'Which'],
      correct: 'What',
      explanation: 'Pseudo-cleft boshida "What really astonished..." to‘g‘ri keladi.'
    },
    teacherNotes: {
      elicitation: 'Say: "I love your courage." Ask: "How can I make courage the dramatic spotlight?"',
      commonMistake: 'Using "What was it that" inappropriately in neutral casual speech.',
      quickCcq: 'Can you use "It were" in an it-cleft with plural objects? (No, always "It is" or "It was").'
    }
  },

  'c1-participle-clauses': {
    id: 'c1-participle-clauses',
    levelId: 'c1',
    title: 'Complex Participle Clauses (Sifatdoshli Qisqartma Ergash Gaplar)',
    category: 'Elite Syntax',
    icon: 'fa-scissors',
    description: 'Compress compound sentences into concise, literary prose using present and perfect participles.',
    overview: 'Gaplarni qisqartirib, yuqori darajadagi ixcham va nafis akademik uslubda yozish (Having finished, Seen from afar).',
    flashcards: [
      { word: 'Concise', uz: 'Ixcham, lo‘nda, qisqa', phonetic: '/kənˈsaɪs/', pronunciation_uz: '[kon-says]', pos: 'Adjective', definition: 'Giving a lot of information clearly and in few words.', example: 'Her executive summary was admirably concise yet thorough.', chunk: 'concise summary' },
      { word: 'Compress', uz: 'Qisqartirmoq, zichlamoq', phonetic: '/kəmˈpres/', pronunciation_uz: '[kom-pres]', pos: 'Verb', definition: 'To reduce the volume or length of something efficiently.', example: 'Participle clauses compress two long sentences into one elegant clause.', chunk: 'compress information' },
      { word: 'Eloquent', uz: 'Notiqona, chiroyli va ta’sirchan', phonetic: '/ˈel.ə.kwənt/', pronunciation_uz: '[el-o-kwent]', pos: 'Adjective', definition: 'Fluent or persuasive in speaking or writing.', example: 'The diplomat delivered an eloquent plea for international peace.', chunk: 'eloquent speech' },
      { word: 'Simultaneity', uz: 'Bir vaqtdalik, hamohanglik', phonetic: '/ˌsɪm.əl.təˈneɪ.ə.ti/', pronunciation_uz: '[sim-ul-te-ney-i-ti]', pos: 'Noun', definition: 'The property of two or more events happening at the same time.', example: 'Present participles convey temporal simultaneity naturally.', chunk: 'temporal simultaneity' }
    ],
    grammar: {
      rule: 'Present Participle (V-ing), Past Participle (V3), and Perfect Participle (Having + V3)',
      formula: 'Active sequential: Having completed the thesis, he traveled  ||  Passive: Built in 1890, the castle stands',
      explanation_uz: '"Because/After he had completed..." o‘rniga "Having completed..." qo‘llash matnni o‘ta professional va akademik qiladi.',
      examples: [
        { en: 'Having reviewed all empirical findings, the board approved the budget.', uz: 'Barcha amaliy natijalarni ko‘rib chiqqach, kengash byudjetni ma’qulladi.', breakdown: 'Having reviewed = After they had reviewed' },
        { en: 'Exhausted by the transatlantic flight, she fell asleep immediately.', uz: 'Transatlantik parvozdan tinkasi qurigan holda, u darhol uxlab qoldi.', breakdown: 'Exhausted = Because she was exhausted' }
      ]
    },
    ccqs: [
      {
        question: 'In "Having eaten breakfast, John left", who ate breakfast?',
        options: [
          { text: 'John ate breakfast (subject of participle must match main clause)', correct: true, feedback: 'To‘g‘ri! Sifatdosh egasi bosh gap egasi bilan bir xil bo‘lishi shart.' },
          { text: 'An anonymous stranger', correct: false, feedback: 'Noto‘g‘ri (dangling participle xatosi).' }
        ]
      }
    ],
    matching: [
      { left: '🏃 Walking along the river, I saw an owl', right: 'Simultaneous action participle' },
      { left: '🏆 Having won the tournament, she wept', right: 'Prior completed action participle' },
      { left: '🏰 Damaged by the storm, the roof leaked', right: 'Passive cause participle' },
      { left: '⚠️ Dangling participle trap', right: 'Grammatical error where subjects mismatch' }
    ],
    fillBlank: {
      sentence: '___ all her funds in the venture, she had to seek emergency loans.',
      options: ['Having invested', 'Invested', 'Invest'],
      correct: 'Having invested',
      explanation: 'Oldin sodir bo‘lgan faol harakat uchun "Having invested" to‘g‘ri keladi.'
    },
    teacherNotes: {
      elicitation: 'Write: "Because he was tired, he slept." -> "Being tired, he slept." Ask: "Can we go further?"',
      commonMistake: 'Dangling participles: "Walking down the street, the trees were beautiful" (The trees were not walking!).',
      quickCcq: 'Does a participle clause have its own explicit finite verb?'
    }
  },

  'c1-rhetoric-subtlety': {
    id: 'c1-rhetoric-subtlety',
    levelId: 'c1',
    title: 'Nuances of Rhetoric, Irony & Tone (Ritorika, Kinoya va Nozik Uslub)',
    category: 'Mastery & Artistry',
    icon: 'fa-masks-theater',
    description: 'Interpret sarcasm, British understatement, metaphorical depth, and philosophical rhetoric.',
    overview: 'Ingliz tilidagi yashirin kinoya (irony), nozik understatement va falsafiy ritorika qirralari.',
    flashcards: [
      { word: 'Understatement', uz: 'Vaziyatni kamaytirib ko‘rsatish (Britancha bosiqlik)', phonetic: '/ˈʌn.dəˌsteɪt.mənt/', pronunciation_uz: '[an-der-steyt-ment]', pos: 'Noun', definition: 'The presentation of something as being smaller or less important than it actually is.', example: 'Calling a category-5 hurricane "a bit of breezy weather" is a classic British understatement.', chunk: 'classic understatement' },
      { word: 'Sarcasm', uz: 'Piching, kesatiq', phonetic: '/ˈsɑː.kæz.əm/', pronunciation_uz: '[sar-kez-em]', pos: 'Noun', definition: 'The use of irony to mock, convey contempt, or amuse.', example: '"Oh, brilliant work!" he said sarcastically after dropping the vase.', chunk: 'cutting sarcasm' },
      { word: 'Euphemism', uz: 'Evfemizm (yumshoq ifoda)', phonetic: '/ˈjuː.fə.mɪ.zəm/', pronunciation_uz: '[yu-fe-mi-zem]', pos: 'Noun', definition: 'A mild or indirect word substituted for one considered too harsh.', example: '"Passed away" is a gentle euphemism for "died".', chunk: 'polite euphemism' },
      { word: 'Metaphorical', uz: 'Ko‘chma ma’noli, majoziy', phonetic: '/ˌmet.əˈfɒr.ɪ.kəl/', pronunciation_uz: '[met-e-for-i-kl]', pos: 'Adjective', definition: 'Characteristic of a metaphor; figurative rather than literal.', example: 'The novel is a metaphorical journey through human disillusionment.', chunk: 'metaphorical meaning' }
    ],
    grammar: {
      rule: 'Stylistic Hedging & Sophisticated Register Inversions',
      formula: 'Hedging: It could be plausibly argued that...  |  Irony: Far from being a triumph, it was...'
    },
    ccqs: [
      {
        question: 'When a British speaker says a terrible disaster is "not ideal", are they happy or deeply distressed?',
        options: [
          { text: 'They are facing serious adversity (understatement)', correct: true, feedback: 'To‘g‘ri! "Not ideal" ingliz madaniyatida juda yomon vaziyatni bildiradi.' },
          { text: 'They are thrilled and celebrating', correct: false, feedback: 'Noto‘g‘ri.' }
        ]
      }
    ],
    matching: [
      { left: '🌧️ A spot of rain (in a flood)', right: 'British understatement' },
      { left: '🕊️ Passed away', right: 'Compassionate euphemism' },
      { left: '🎭 Dramatic irony', right: 'Audience knows truth while character does not' },
      { left: '🛡️ Diplomatic hedging', right: 'Cautious tone avoiding absolute claims' }
    ],
    fillBlank: {
      sentence: 'Calling an catastrophic market crash "a slight economic hiccup" is a textbook ___.',
      options: ['understatement', 'exaggeration', 'metaphor'],
      correct: 'understatement',
      explanation: 'Katta fojiani arzimasdek ko‘rsatish "understatement" deyiladi.'
    },
    teacherNotes: {
      elicitation: 'Pour water over head: "Just slightly damp!" What kind of humor is this?',
      commonMistake: 'Taking British irony literally and misunderstanding the true emotional tone.',
      quickCcq: 'Is euphemism meant to insult or soften harsh reality?'
    }
  }
};

console.log('New modules to inject:', Object.keys(NEW_MODULES_DATA).length);
if (typeof module !== 'undefined') module.exports = NEW_MODULES_DATA;
