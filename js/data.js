// English-English Academy - Comprehensive Immersion & Bilingual Curriculum Database
// Includes Uzbek pronunciation guides (Aytilishi), rich CEFR progression & Integrated Dictionary

const DICTIONARY_DATABASE = [
  // ================= A0 LEVEL =================
  {
    id: 'book',
    word: 'book',
    translation: 'kitob',
    phonetic: '/bʊk/',
    pronunciation_uz: '[buk] — lablar oldinga cho‘zilib, qisqa yumshoq "u" aytiladi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '📖',
    definition_en: 'A set of printed or written pages bound together inside a cover.',
    definition_uz: 'Muqovaga biriktirilgan, yozilgan yoki chop etilgan sahifalar to‘plami.',
    example_en: 'I read books every day.',
    example_uz: 'Men har kuni kitoblar o‘qiyman.',
    collocations: ['read a book', 'open a book', 'favorite book']
  },
  {
    id: 'pen',
    word: 'pen',
    translation: 'ruchka',
    phonetic: '/pen/',
    pronunciation_uz: '[pen] — lablar biroz yoyilib, sof "e" tovushi aytiladi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '🖊️',
    definition_en: 'A tool filled with ink used for writing on paper.',
    definition_uz: 'Qog‘ozga yozish uchun siyoh bilan to‘ldirilgan qurol.',
    example_en: 'She writes her name with a black pen.',
    example_uz: 'U o‘z ismini qora ruchka bilan yozadi.',
    collocations: ['ballpoint pen', 'blue pen', 'write with a pen']
  },
  {
    id: 'water',
    word: 'water',
    translation: 'suv',
    phonetic: '/ˈwɔːtə/',
    pronunciation_uz: '[vo-tə] yoki [wo-ter] — lablar doira qilinib "w", oxirida "r" deyarli aytilmaydi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '💧',
    definition_en: 'The clear liquid that has no color or taste, essential for all living things.',
    definition_uz: 'Rangsiz, ta’msiz shaffof suyuqlik, barcha tirik mavjudotlar uchun zarur.',
    example_en: 'Please drink plenty of fresh water.',
    example_uz: 'Iltimos, ko‘proq toza suv iching.',
    collocations: ['fresh water', 'glass of water', 'cold water']
  },
  {
    id: 'apple',
    word: 'apple',
    translation: 'olma',
    phonetic: '/ˈæpl/',
    pronunciation_uz: '[æ-pl] — jag‘ pastga tushirilib "e-a" oralig‘idagi ochiq tovush aytiladi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '🍎',
    definition_en: 'A round fruit with red, green, or yellow skin and sweet, firm white flesh.',
    definition_uz: 'Qizil, yashil yoki sariq po‘stli, shirin va qattiq meva.',
    example_en: 'He eats a red apple every morning.',
    example_uz: 'U har kuni ertalab qizil olma yeydi.',
    collocations: ['green apple', 'eat an apple', 'sweet apple']
  },
  {
    id: 'sun',
    word: 'sun',
    translation: 'quyosh',
    phonetic: '/sʌn/',
    pronunciation_uz: '[san] — tomoqdan qisqa "a" nafas bilan chiqariladi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '☀️',
    definition_en: 'The bright star at the center of our solar system that gives Earth heat and light.',
    definition_uz: 'Quyosh sistemasining markazidagi yorug‘ yulduz, Yerga issiqlik va nur beradi.',
    example_en: 'The sun is shining brightly in the sky.',
    example_uz: 'Quyosh osmonda yorqin porlamoqda.',
    collocations: ['morning sun', 'sun shines', 'bright sun']
  },
  {
    id: 'friend',
    word: 'friend',
    translation: 'do‘st',
    phonetic: '/frend/',
    pronunciation_uz: '[frend] — "i" harfi o‘qilmaydi, to‘g‘ridan-to‘g‘ri "e" tovushi aytiladi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '🤝',
    definition_en: 'A person whom one knows, likes, and trusts well.',
    definition_uz: 'Inson yaxshi taniydigan, yoqtiradigan va ishonadigan kishi.',
    example_en: 'Sarah is my best friend at school.',
    example_uz: 'Sara maktabdagi eng yaqin do‘stim.',
    collocations: ['best friend', 'good friend', 'make friends']
  },
  {
    id: 'house',
    word: 'house',
    translation: 'uy (bino)',
    phonetic: '/haʊs/',
    pronunciation_uz: '[haus] — "h" yengil nafas bilan boshlanib, "au" diftongiga ulanadi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '🏡',
    definition_en: 'A building for human habitation, especially one that is lived in by a family.',
    definition_uz: 'Odamlar yashashi uchun mo‘ljallangan bino, ayniqsa bitta oila yashaydigan uy.',
    example_en: 'They live in a beautiful white house.',
    example_uz: 'Ular chiroyli oq uyda yashaydilar.',
    collocations: ['big house', 'live in a house', 'new house']
  },
  {
    id: 'cat',
    word: 'cat',
    translation: 'mushuk',
    phonetic: '/kæt/',
    pronunciation_uz: '[kæt] — jag‘ni keng ochib, "k" dan keyin keng "e-a" tovushi aytiladi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '🐱',
    definition_en: 'A small domesticated carnivorous mammal with soft fur and sharp claws.',
    definition_uz: 'Yumshoq yungli, tirnoqli kichik xonaki yirtqich hayvon.',
    example_en: 'The cat sleeps on the warm sofa.',
    example_uz: 'Mushuk issiq divanda uxlamoqda.',
    collocations: ['black cat', 'cute cat', 'pet cat']
  },
  {
    id: 'dog',
    word: 'dog',
    translation: 'kuchuk, it',
    phonetic: '/dɒɡ/',
    pronunciation_uz: '[dog] — ochiq yumaloq "o" tovushi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '🐶',
    definition_en: 'A domesticated canine mammal often kept as a loyal household pet.',
    definition_uz: 'Sodiq uy hayvoni yoki qo‘riqchi sifatida boqiladigan xonaki it.',
    example_en: 'My dog barks when the bell rings.',
    example_uz: 'Qo‘ng‘iroq chalinganda kuchugim huradi.',
    collocations: ['loyal dog', 'walk the dog', 'feed the dog']
  },
  {
    id: 'clock',
    word: 'clock',
    translation: 'soat (devor yoki stol soati)',
    phonetic: '/klɒk/',
    pronunciation_uz: '[klok] — qisqa aniq "o" va "k" tovushi',
    pos: 'noun (ot)',
    level: 'A0',
    visual: '⏰',
    definition_en: 'An instrument used for measuring, keeping, and indicating time.',
    definition_uz: 'Vaqtni o‘lchash, ko‘rsatish va saqlash uchun asbob.',
    example_en: 'The wall clock shows three o\'clock.',
    example_uz: 'Devor soati soat uchni ko‘rsatmoqda.',
    collocations: ['alarm clock', 'wall clock', 'look at the clock']
  },

  // ================= A1 LEVEL =================
  {
    id: 'routine',
    word: 'routine',
    translation: 'kun tartibi, odat',
    phonetic: '/ruːˈtiːn/',
    pronunciation_uz: '[ru-tiyn] — ikkinchi bo‘g‘inga urg‘u tushadi, "i" cho‘ziq aytiladi',
    pos: 'noun (ot)',
    level: 'A1',
    visual: '🔄',
    definition_en: 'A regular way of doing things in a fixed, predictable order.',
    definition_uz: 'Ishlarni qat’iy belgilangan tartibda muntazam bajarish odati.',
    example_en: 'My morning routine starts with stretching and coffee.',
    example_uz: 'Ertalabki odatim jismoniy mashq va qahva bilan boshlanadi.',
    collocations: ['daily routine', 'morning routine', 'stick to a routine']
  },
  {
    id: 'commute',
    word: 'commute',
    translation: 'qatnamoq (ishga/o‘qishga)',
    phonetic: '/kəˈmjuːt/',
    pronunciation_uz: '[kə-myut] — birinchi bo‘g‘in sust "kə", ikkinchisi urg‘uli "myut"',
    pos: 'verb / noun',
    level: 'A1',
    visual: '🚆',
    definition_en: 'To travel some distance to and from one’s place of work on a regular basis.',
    definition_uz: 'Har kuni uy bilan ishxona yoki o‘qish o‘rtasida qatnamoq.',
    example_en: 'I commute by train for forty minutes every weekday.',
    example_uz: 'Men har ish kuni poyezdda 40 daqiqa qatnayman.',
    collocations: ['commute to work', 'long commute', 'commute by bus']
  },
  {
    id: 'delicious',
    word: 'delicious',
    translation: 'mazali, juda shirin',
    phonetic: '/dɪˈlɪʃəs/',
    pronunciation_uz: '[di-li-shəs] — o‘rtadagi "c" harfi "sh" deb talaffuz qilinadi',
    pos: 'adjective (sifat)',
    level: 'A1',
    visual: '😋',
    definition_en: 'Having a very pleasant, delightful taste or smell.',
    definition_uz: 'Juda yoqimli, lazzatli ta’m yoki hidga ega.',
    example_en: 'This homemade soup is absolutely delicious.',
    example_uz: 'Ushbu uy sho‘rvasi juda ham mazali.',
    collocations: ['delicious meal', 'delicious food', 'smell delicious']
  },
  {
    id: 'polite',
    word: 'polite',
    translation: 'xushmuomala, odobli',
    phonetic: '/pəˈlaɪt/',
    pronunciation_uz: '[pə-layt] — "o" qisqa noaniq, "layt" qismi urg‘uli aytiladi',
    pos: 'adjective (sifat)',
    level: 'A1',
    visual: '🙏',
    definition_en: 'Having or showing good manners and respect for others.',
    definition_uz: 'Boshqalarning his-tuyg‘ularini hurmat qiladigan va chiroyli muomalali.',
    example_en: 'It is important to be polite to everyone.',
    example_uz: 'Har bir insonga xushmuomala bo‘lish juda muhim.',
    collocations: ['polite request', 'polite person', 'speak politely']
  },
  {
    id: 'healthy',
    word: 'healthy',
    translation: 'sog‘lom, foydali',
    phonetic: '/ˈhelθi/',
    pronunciation_uz: '[hel-si/hel-thi] — o‘rtadagi "th" da til uchi tishlar orasiga qo‘yiladi',
    pos: 'adjective (sifat)',
    level: 'A1',
    visual: '🥗',
    definition_en: 'In good physical condition; not diseased or injured.',
    definition_uz: 'Jismoniy holati yaxshi, kasal bo‘lmagan; salomatlikka foydali.',
    example_en: 'Eating fresh green vegetables keeps you healthy.',
    example_uz: 'Yangi yashil sabzavotlar yeyish sizni sog‘lom saqlaydi.',
    collocations: ['healthy food', 'healthy lifestyle', 'stay healthy']
  },

  // ================= A2 LEVEL =================
  {
    id: 'yesterday',
    word: 'yesterday',
    translation: 'kecha',
    phonetic: '/ˈjestədeɪ/',
    pronunciation_uz: '[yes-tə-dey] — birinchi bo‘g‘inga urg‘u beriladi',
    pos: 'adverb / noun',
    level: 'A2',
    visual: '⏮️',
    definition_en: 'On the day before today.',
    definition_uz: 'Bugundan oldingi kunda.',
    example_en: 'Yesterday, we visited our grandparents in Samarkand.',
    example_uz: 'Kecha biz Samarqanddagi bobo-buvimizni ziyorat qildik.',
    collocations: ['yesterday morning', 'just yesterday', 'since yesterday']
  },
  {
    id: 'improve',
    word: 'improve',
    translation: 'yaxshilamoq, rivojlantirmoq',
    phonetic: '/ɪmˈpruːv/',
    pronunciation_uz: '[im-pruv] — "u" cho‘ziq va jarangli "v" bilan tugaydi',
    pos: 'verb (fe’l)',
    level: 'A2',
    visual: '📈',
    definition_en: 'To make or become better in quality, condition, or skill.',
    definition_uz: 'Sifat, holat yoki mahorat jihatidan yaxshiroq holatga keltirmoq.',
    example_en: 'Listening to English podcasts will improve your speaking.',
    example_uz: 'Inglizcha podkastlarni tinglash sizning nutqingizni yaxshilaydi.',
    collocations: ['improve skills', 'improve rapidly', 'greatly improve']
  },
  {
    id: 'opportunity',
    word: 'opportunity',
    translation: 'imkoniyat',
    phonetic: '/ˌɒpəˈtjuːnəti/',
    pronunciation_uz: '[o-pər-tyu-niti] — "tyu" bo‘g‘iniga kuchli urg‘u beriladi',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '🚪',
    definition_en: 'A set of circumstances that makes it possible to do something desirable.',
    definition_uz: 'Biror foydali ishni amalga oshirishga yo‘l ochadigan qulay vaziyat.',
    example_en: 'This online course is a great opportunity to master English.',
    example_uz: 'Bu onlayn kurs ingliz tilini o‘rganish uchun ajoyib imkoniyatdir.',
    collocations: ['great opportunity', 'miss an opportunity', 'grab the opportunity']
  },

  // ================= B1 LEVEL =================
  {
    id: 'experience',
    word: 'experience',
    translation: 'tajriba',
    phonetic: '/ɪkˈspɪəriəns/',
    pronunciation_uz: '[ik-spi-ri-əns] — "ik" dan keyin "spirians" ravon o‘qiladi',
    pos: 'noun / verb',
    level: 'B1',
    visual: '🌏',
    definition_en: 'Knowledge or practical wisdom gained through involvement in events over time.',
    definition_uz: 'Vaqt o‘tishi bilan turli vaziyatlarda ishtirok etish orqali olingan bilim va ko‘nikma.',
    example_en: 'Living abroad was an unforgettable learning experience.',
    example_uz: 'Chet elda yashash unutilmas ta’limiy tajriba bo‘ldi.',
    collocations: ['work experience', 'gain experience', 'valuable experience']
  },
  {
    id: 'convenient',
    word: 'convenient',
    translation: 'qulay (vaqt yoki joy jihatidan)',
    phonetic: '/kənˈviːniənt/',
    pronunciation_uz: '[kən-vi-ni-ənt] — "vi" qismi cho‘ziq aytiladi',
    pos: 'adjective (sifat)',
    level: 'B1',
    visual: '🛋️',
    definition_en: 'Fitting in well with a person’s needs, activities, and plans; easy to use.',
    definition_uz: 'Kishining ehtiyoji, faoliyati va rejalariga to‘liq mos keladigan, foydalanishga qulay.',
    example_en: 'Online learning is very convenient for busy students.',
    example_uz: 'Onlayn ta’lim band talabalar uchun juda qulaydir.',
    collocations: ['convenient time', 'convenient location', 'highly convenient']
  },

  // ================= B2 LEVEL =================
  {
    id: 'feasible',
    word: 'feasible',
    translation: 'amalga oshirsa bo‘ladigan, real',
    phonetic: '/ˈfiːzəbl/',
    pronunciation_uz: '[fiy-zi-bl] — birinchi bo‘g‘indagi "ee" cho‘ziq, oxiri "zibl"',
    pos: 'adjective (sifat)',
    level: 'B2',
    visual: '📊',
    definition_en: 'Possible to do easily or conveniently; practical and workable.',
    definition_uz: 'Oson yoki qulay tarzda amalga oshirish mumkin bo‘lgan; amaliy jihatdan real.',
    example_en: 'Is this project timeline feasible with our current resources?',
    example_uz: 'Ushbu loyiha muddatini hozirgi resurslarimiz bilan amalga oshirish mumkinmi?',
    collocations: ['economically feasible', 'feasible solution', 'feasible plan']
  },
  {
    id: 'resilient',
    word: 'resilient',
    translation: 'bardoshli, qiyinchilikka chidamli',
    phonetic: '/rɪˈzɪliənt/',
    pronunciation_uz: '[ri-zi-li-ənt] — o‘rtadagi "s" harfi "z" deb jarangli aytiladi',
    pos: 'adjective (sifat)',
    level: 'B2',
    visual: '🛡️',
    definition_en: 'Able to withstand or recover quickly from difficult conditions.',
    definition_uz: 'Qiyin vaziyatlarga dosh bera oladigan va tezda o‘zini tiklay oladigan.',
    example_en: 'Resilient students view mistakes as valuable lessons.',
    example_uz: 'Chidamli talabalar xatolarga qimmatli saboq sifatida qaraydilar.',
    collocations: ['highly resilient', 'resilient economy', 'resilient mindset']
  },

  // ================= C1 LEVEL =================
  {
    id: 'mitigate',
    word: 'mitigate',
    translation: 'yumshatmoq, zararini kamaytirmoq',
    phonetic: '/ˈmɪtɪɡeɪt/',
    pronunciation_uz: '[mi-ti-geyt] — birinchi bo‘g‘inga urg‘u, oxiri "geyt"',
    pos: 'verb (fe’l)',
    level: 'C1',
    visual: '🛡️',
    definition_en: 'To make something bad or harmful less severe, serious, or painful.',
    definition_uz: 'Biror salbiy yoki zararli holatning og‘irligini kamaytirmoq, xavfni yumshatmoq.',
    example_en: 'The government enacted strict laws to mitigate environmental risks.',
    example_uz: 'Hukumat ekologik xavflarni yumshatish uchun qat’iy qonunlar qabul qildi.',
    collocations: ['mitigate risk', 'mitigate impact', 'mitigate damage']
  },
  {
    id: 'ubiquitous',
    word: 'ubiquitous',
    translation: 'hamma yerda hozir, ommalashgan',
    phonetic: '/juːˈbɪkwɪtəs/',
    pronunciation_uz: '[yu-bik-vi-təs] — "u" harfi "yu" deb boshlanadi, "bik-vi-təs"',
    pos: 'adjective (sifat)',
    level: 'C1',
    visual: '🌐',
    definition_en: 'Present, appearing, or found universally everywhere at once.',
    definition_uz: 'Barcha joyda birdaniga mavjud bo‘lgan, har qadamda uchraydigan, yalpi tarqalgan.',
    example_en: 'High-speed wireless connectivity has become ubiquitous across urban metropolises.',
    example_uz: 'Tezkor simsiz aloqa yirik shaharlar bo‘ylab hamma yerda odatiy holga aylandi.',
    collocations: ['ubiquitous presence', 'become ubiquitous', 'almost ubiquitous']
  },
  {
    id: 'meticulous',
    word: 'meticulous',
    translation: 'o‘ta sinchkov, mayda detallargacha e’tiborli',
    phonetic: '/məˈtɪkjələs/',
    pronunciation_uz: '[mə-tik-yu-ləs] — ikkinchi bo‘g‘inga urg‘u beriladi',
    pos: 'adjective (sifat)',
    level: 'C1',
    visual: '🔬',
    definition_en: 'Showing immense, painstaking care and attention to minute details.',
    definition_uz: 'Har bir kichik tafsilotga o‘ta sinchkovlik va katta e’tibor bilan yondashadigan.',
    example_en: 'The scientist conducted meticulous forensic experiments before publishing.',
    example_uz: 'Olim maqola chop etishdan oldin o‘ta sinchkovlik bilan sud-tibbiy tajribalarni o‘tkazdi.',
    collocations: ['meticulous research', 'meticulous planning', 'meticulously clean']
  }
];

// Complete 0% to 100% Curriculum structure with CEFR progression
const CURRICULUM_DATA = {
  levels: [
    {
      id: 'a0',
      badge: 'A0',
      title: 'Beginner Foundations',
      subtitle: 'Noldan boshlovchilar: Fonetika, Tovushlar, To Be, Harflar va Asosiy so‘zlar',
      color: 'from-emerald-500 to-teal-600',
      accentColor: 'text-emerald-500',
      bgLight: 'bg-emerald-50 dark:bg-emerald-950/40',
      borderLight: 'border-emerald-200 dark:border-emerald-800',
      modules: ['a0-phonics', 'a0-alphabet-tobe', 'a0-greetings', 'a0-objects', 'a0-verbs', 'a0-numbers-colors']
    },
    {
      id: 'a1',
      badge: 'A1',
      title: 'Elementary English',
      subtitle: 'Boshlang‘ich bosqich: Odatlar, Kundalik hayot, O‘tgan zamon, Oila va Yo‘nalishlar',
      color: 'from-cyan-500 to-blue-600',
      accentColor: 'text-cyan-500',
      bgLight: 'bg-cyan-50 dark:bg-cyan-950/40',
      borderLight: 'border-cyan-200 dark:border-cyan-800',
      modules: ['a1-present-simple-continuous', 'a1-daily-routines', 'a1-past-simple', 'a1-expressing-needs', 'a1-family-people', 'a1-places-directions']
    },
    {
      id: 'a2',
      badge: 'A2',
      title: 'Pre-Intermediate English',
      subtitle: 'O‘rta-quyi bosqich: Davomiy o‘tgan zamon, Sifat darajalari, Sayohat, Salomatlik va Miqdorlar',
      color: 'from-blue-600 to-indigo-600',
      accentColor: 'text-blue-500',
      bgLight: 'bg-blue-50 dark:bg-blue-950/40',
      borderLight: 'border-blue-200 dark:border-blue-800',
      modules: ['a2-past-continuous', 'a2-comparatives-superlatives', 'a2-future-modals', 'a2-countable-uncountable', 'a2-health-feelings', 'a2-travel-transport']
    },
    {
      id: 'b1',
      badge: 'B1',
      title: 'Intermediate English',
      subtitle: 'O‘rta daraja: Present Perfect, Shart ergash gaplar, Majhul nisbat va Nisbiy bog‘lovchilar',
      color: 'from-amber-500 to-orange-600',
      accentColor: 'text-amber-500',
      bgLight: 'bg-amber-50 dark:bg-amber-950/40',
      borderLight: 'border-amber-200 dark:border-amber-800',
      modules: ['b1-present-past-perfect', 'b1-conditionals', 'b1-passive-voice', 'b1-relative-clauses', 'b1-modals-deduction', 'b1-gerunds-infinitives']
    },
    {
      id: 'b2',
      badge: 'B2',
      title: 'Upper-Intermediate English',
      subtitle: 'O‘rta-yuqori daraja: Aralash shartlar, Iboraviy fe’llar, Biznes ingliz tili va Insho yozish',
      color: 'from-orange-600 to-rose-600',
      accentColor: 'text-orange-500',
      bgLight: 'bg-orange-50 dark:bg-orange-950/40',
      borderLight: 'border-orange-200 dark:border-orange-800',
      modules: ['b2-third-mixed-conditionals', 'b2-phrasal-verbs', 'b2-business-travel', 'b2-reported-speech', 'b2-future-aspects', 'b2-essay-cohesion']
    },
    {
      id: 'c1',
      badge: 'C1',
      title: 'Advanced Immersion',
      subtitle: 'Mukammal daraja: Inversiya, Cleft urg‘ulash, Sifatdoshli qisqartmalar, Idiomalar va Ritorika',
      color: 'from-purple-600 to-pink-600',
      accentColor: 'text-purple-500',
      bgLight: 'bg-purple-50 dark:bg-purple-950/40',
      borderLight: 'border-purple-200 dark:border-purple-800',
      modules: ['c1-inversions', 'c1-cleft-sentences', 'c1-participle-clauses', 'c1-idioms', 'c1-nuanced-register', 'c1-rhetoric-subtlety']
    }
  ],

  modules: {
    // A0 Foundations
    'a0-phonics': {
      id: 'a0-phonics',
      levelId: 'a0',
      title: 'Phonics & Vocal Sound Foundations (Tovushlar)',
      category: 'Phonology & Pronunciation',
      icon: 'fa-volume-high',
      description: 'Master English vowel & consonant sounds through mouth shapes and minimal sound pairs.',
      overview: 'Ingliz tilidagi 44 ta tovushni og‘iz holati va tovushlar juftligi orqali to‘g‘ri talaffuz qilishni o‘rganing.',
      flashcards: [
        {
          word: 'Cat /kæt/',
          uz: 'Mushuk',
          phonetic: '/æ/ short vowel',
          pronunciation_uz: 'Aytilishi: [kæt] — Jag‘ni olma tishlayotgandek pastga tushirib, "e" va "a" oralig‘idagi ochiq unli aytiladi',
          meaning: 'Open mouth wide, tongue flat and low. (Og‘izni katta ochib, pastki jag‘ni tushiring).',
          visual: '🐱',
          example: 'The black cat sits on the mat.',
          example_uz: 'Qora mushuk gilamcha ustida o‘tiribdi.',
          tips: 'Drop your jaw down like taking a bite of an apple.'
        },
        {
          word: 'Bed /bed/',
          uz: 'Krovat, yotoq',
          phonetic: '/e/ short vowel',
          pronunciation_uz: 'Aytilishi: [bed] — Lablar yarim ochiq, tabassum holatida qisqa "e" aytiladi',
          meaning: 'Mouth relaxed, half-open smiling lips. (Yarim ochiq, tabassum holatidagi lablar).',
          visual: '🛏️',
          example: 'A warm bed for sleeping at night.',
          example_uz: 'Kechasi uxlash uchun issiq yotoq.',
          tips: 'Corners of mouth pull gently outward.'
        },
        {
          word: 'Sit /sɪt/',
          uz: 'O‘tirmoq',
          phonetic: '/ɪ/ short relaxed vowel',
          pronunciation_uz: 'Aytilishi: [sit] — Yengil, cho‘zilmagan qisqa "i" tovushi',
          meaning: 'Short, quick sound inside the mouth. (Qisqa va yengil "i" tovushi).',
          visual: '🪑',
          example: 'Please sit down on the wooden chair.',
          example_uz: 'Iltimos, yog‘och stulga o‘tiring.',
          tips: 'Relax your facial muscles completely.'
        },
        {
          word: 'Hot /hɒt/',
          uz: 'Issiq, qaynoq',
          phonetic: '/ɒ/ open round vowel',
          pronunciation_uz: 'Aytilishi: [hot] — Lablar ochiq doira shaklida qisqa "o" aytiladi',
          meaning: 'Lips form an open circle shape. (Lablar ochiq doira shaklini oladi).',
          visual: '☕',
          example: 'Careful! The hot coffee is steaming.',
          example_uz: 'Ehtiyot bo‘ling! Qaynoq qahvadan bug‘ chiqmoqda.',
          tips: 'Round your lips as if blowing a candle gently.'
        },
        {
          word: 'Cup /kʌp/',
          uz: 'Fincan, piyola',
          phonetic: '/ʌ/ central vowel',
          pronunciation_uz: 'Aytilishi: [kap] — Qorindan qisqa kuchli nafas zarbi bilan "a" aytiladi',
          meaning: 'Short breath released from chest. (Ko‘krakdan chiqadigan qisqa tovush).',
          visual: '🍵',
          example: 'Pour water into the glass cup.',
          example_uz: 'Shisha finjonga suv quying.',
          tips: 'Neutral jaw, gentle punch sound.'
        },
        {
          word: 'Think /θɪŋk/ vs This /ðɪs/',
          uz: 'O‘ylamoq vs Bu',
          phonetic: 'Voiceless /θ/ vs Voiced /ð/',
          pronunciation_uz: 'Aytilishi: /θ/ [think] — Til uchi tishlar orasida havoni puflovchi "s/th"; /ð/ [this] — Tomoq dildiraydigan jarangli "z/th"',
          meaning: 'Tongue tip between teeth. (Til uchi tishlar orasiga qo‘yiladi).',
          visual: '👅',
          example: 'I think that this feather is light.',
          example_uz: 'O‘ylaymanki, bu pat juda yengil.',
          tips: '/θ/ jarangsiz havoda aytiladi; /ð/ da tomoq dildiraydi.'
        }
      ],
      grammarInteractive: {
        type: 'phonics-toggle',
        title: 'Tovushlar Farqini Eshitish Laboratoriyasi',
        description: 'So‘zlarni alohida-alohida eshiting va ularning talaffuzidagi nozik farqni o‘rganing:',
        pairs: [
          {
            word1: 'Ship',
            uz1: 'Kema',
            emoji1: '🚢',
            guide1: 'Qisqa "i" (ship)',
            word2: 'Sheep',
            uz2: 'Qo‘y',
            emoji2: '🐑',
            guide2: 'Cho‘ziq "i-i" (shiyp)',
            contrast: 'Qisqa "i" va Cho‘ziq "i" farqi'
          },
          {
            word1: 'Pen',
            uz1: 'Ruchka',
            emoji1: '🖊️',
            guide1: 'Oddiy "e" (pen)',
            word2: 'Pan',
            uz2: 'Tova',
            emoji2: '🍳',
            guide2: 'Keng ochiq "e-a" (pæn)',
            contrast: 'Oddiy "e" va Keng "æ" farqi'
          },
          {
            word1: 'Three',
            uz1: '3 soni',
            emoji1: '🔢',
            guide1: 'Til tishlar orasida (thriy)',
            word2: 'Tree',
            uz2: 'Daraxt',
            emoji2: '🌳',
            guide2: 'Qattiq "t" (triy)',
            contrast: 'Tilsiz "th" va Qattiq "t" farqi'
          }
        ]
      },
      ccqs: [
        {
          question: 'In the sound /æ/ (as in "cat"), is your mouth opened wide or almost closed?',
          question_uz: '"Cat" so‘zidagi /æ/ tovushida og‘iz katta ochiladimi yoki deyarli yopiq turadimi?',
          options: [
            { text: 'Opened wide with dropped jaw (Katta ochiladi)', correct: true, feedback: 'Correct! Pastki jag‘ pastga tushadi.' },
            { text: 'Almost closed and round (Deyarli yopiq)', correct: false, feedback: 'Noto‘g‘ri. /æ/ da jag‘ keng ochiladi.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which word contains the long smiling vowel /iː/?',
          options: ['Sit', 'Sheep', 'Cup', 'Bed'],
          answer: 1,
          explanation: '"Sheep" /ʃiːp/ so‘zida cho‘ziq "ee" tovushi bor.'
        }
      ],
      matching: [
        { left: '🐱 Cat', right: 'Short /æ/ sound' },
        { left: '🛏️ Bed', right: 'Mid /e/ sound' },
        { left: '🚢 Ship', right: 'Short /ɪ/ sound' },
        { left: '🐑 Sheep', right: 'Long /iː/ sound' }
      ],
      fillBlank: {
        sentence: 'The hot steam rises from the coffee ___ on the table.',
        options: ['cup', 'cap', 'cape'],
        correct: 'cup',
        explanation: '"Cup" /kʌp/ — issiq ichimliklar uchun finjon/piyola.'
      },
      teacherNotes: {
        elicitation: 'Tomoqqa qo‘l tekkizdirib /θ/ va /ð/ ni ayttiring. "Asalari vuvullashini his qilyapsizmi?" deb so‘rang.',
        commonMistake: 'Talabalar /θ/ ni /s/ yoki /f/ deb aytishadi ("sink" yoki "fink").',
        quickCcq: 'Is "sheep" a short sound or a stretched sound?'
      }
    },

    'a0-alphabet-tobe': {
      id: 'a0-alphabet-tobe',
      levelId: 'a0',
      title: 'Subject Pronouns & "To Be" (I am / You are / He is)',
      category: 'Core Sentence Architecture',
      icon: 'fa-user-group',
      description: 'Learn the primary English foundation: Who are you? (I am a student, He is happy, We are ready).',
      overview: 'Ingliz tilida ega va "To Be" (bo‘lmoq) fe’lining hozirgi zamon shakllari: am, is, are.',
      flashcards: [
        {
          word: 'I am (I\'m)',
          uz: 'Men (bo‘laman)',
          phonetic: '/aɪ æm/',
          pronunciation_uz: 'Aytilishi: [ay em] yoki qisqartmasi [aym]',
          meaning: 'Used only when speaking about yourself.',
          visual: '🙋‍♂️',
          example: 'I am a student at the academy.',
          example_uz: 'Men akademiyada talabaman.',
          tips: 'Always capitalize "I" in English.'
        },
        {
          word: 'You are (You\'re)',
          uz: 'Siz / Sen',
          phonetic: '/juː ɑː/',
          pronunciation_uz: 'Aytilishi: [yu a:] yoki qisqartmasi [yo:]',
          meaning: 'Used for one person or a group you speak to.',
          visual: '👉',
          example: 'You are very kind and smart.',
          example_uz: 'Siz juda mehribon va aqllisiz.',
          tips: 'Used for both singular and plural.'
        },
        {
          word: 'He is / She is / It is',
          uz: 'U (erkak / ayol / jonsiz yoki hayvon)',
          phonetic: '/hiː ɪz/ /ʃiː ɪz/ /ɪt ɪz/',
          pronunciation_uz: 'Aytilishi: [hiy iz] / [shiy iz] / [it iz] — "s" jarangli "z" bo‘lib yangraydi',
          meaning: 'Used for a third singular subject.',
          visual: '👤',
          example: 'She is a talented doctor.',
          example_uz: 'U iqtidorli shifokor.',
          tips: 'He (men), She (women), It (objects/animals).'
        },
        {
          word: 'We are / They are',
          uz: 'Biz / Ular',
          phonetic: '/wiː ɑː/ /ðeɪ ɑː/',
          pronunciation_uz: 'Aytilishi: [wiy a:] / [zey a:] — "they" so‘zida jarangli th',
          meaning: 'Used for plural groups.',
          visual: '👥',
          example: 'They are ready to learn English.',
          example_uz: 'Ular ingliz tilini o‘rganishga tayyorlar.',
          tips: 'Plural always pairs with "are".'
        }
      ],
      grammarInteractive: {
        type: 'tobe-conjugation',
        title: 'To Be Formula Conjugation',
        description: 'Ega va fe’l moslashuvini ko‘ring:',
        items: [
          { item: 'I + am [ay em]', purpose: 'I am ready (Men tayyorman)' },
          { item: 'You / We / They + are [yu / wiy / zey a:]', purpose: 'We are happy (Biz xursandmiz)' },
          { item: 'He / She / It + is [hiy / shiy / it iz]', purpose: 'He is at home (U uyda)' },
          { item: 'Negative: not', purpose: 'I am not tired (Men charchagan emasman)' }
        ]
      },
      ccqs: [
        {
          question: 'Do we say "She are a teacher" or "She is a teacher"?',
          options: [
            { text: 'She is a teacher (To‘g‘ri)', correct: true, feedback: 'Barakalla! He/She/It har doim "is" oladi.' },
            { text: 'She are a teacher', correct: false, feedback: 'Noto‘g‘ri. "Are" faqat You/We/They uchun.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Fill in the blank: "They ___ my good friends."',
          options: ['is', 'are', 'am', 'be'],
          answer: 1,
          explanation: 'They ko‘plik shakli bo‘lgani uchun "are" ishlatiladi.'
        }
      ],
      matching: [
        { left: 'I', right: 'am' },
        { left: 'You / We / They', right: 'are' },
        { left: 'He / She / It', right: 'is' },
        { left: 'Negative particle', right: 'not' }
      ],
      fillBlank: {
        sentence: 'My brother ___ an engineer.',
        options: ['is', 'are', 'am'],
        correct: 'is',
        explanation: 'My brother (He) birlik shaxs, shuning uchun "is" ishlatiladi.'
      },
      teacherNotes: {
        elicitation: 'O‘zingizni ko‘rsatib: "I am... teacher." Talabani ko‘rsatib: "You are... student."',
        commonMistake: '"I is" yoki "He are" deb aytish.',
        quickCcq: 'Does "He" take am, is, or are?'
      }
    },

    'a0-greetings': {
      id: 'a0-greetings',
      levelId: 'a0',
      title: 'Greetings & Introductions (Salomlashuv)',
      category: 'Social Interaction',
      icon: 'fa-handshake',
      description: 'Learn how English speakers greet, introduce, and say goodbye across day and night context.',
      overview: 'Kun vaqti va vaziyatga qarab to‘g‘ri salomlashish va xayrlashish qoidalari.',
      flashcards: [
        {
          word: 'Good morning',
          uz: 'Xayrli tong',
          phonetic: '/ɡʊd ˈmɔːnɪŋ/',
          pronunciation_uz: 'Aytilishi: [gud mo-ning] — "d" va "m" silliq ulanadi',
          meaning: 'Used from sunrise (6:00 AM) until noon (12:00 PM).',
          visual: '🌅',
          example: 'Good morning, class! The sun is shining.',
          example_uz: 'Xayrli tong, darsdoshlar! Quyosh charaqlab turibdi.',
          tips: 'Friendly, polite greeting for the morning hours.'
        },
        {
          word: 'Good afternoon',
          uz: 'Xayrli kun',
          phonetic: '/ɡʊd ˌɑːftəˈnuːn/',
          pronunciation_uz: 'Aytilishi: [gud af-tə-nuun] — "nuun" cho‘ziq aytiladi',
          meaning: 'Used from 12:00 PM until around 5:00 PM.',
          visual: '☀️',
          example: 'Good afternoon, Mr. Smith. Welcome back.',
          example_uz: 'Xayrli kun, janob Smit. Qaytganingiz bilan.',
          tips: 'Formal and courteous daytime greeting.'
        },
        {
          word: 'Good evening',
          uz: 'Xayrli kech (Salomlashish)',
          phonetic: '/ɡʊd ˈiːvnɪŋ/',
          pronunciation_uz: 'Aytilishi: [gud iyv-ning] — "iyv" cho‘ziq aytiladi',
          meaning: 'Used when arriving or meeting someone after 5:00 PM.',
          visual: '🌆',
          example: 'Good evening everyone, thank you for coming tonight.',
          example_uz: 'Barchaga xayrli kech, bugun kelganingiz uchun rahmat.',
          tips: 'Used when arriving to say hello in the evening!'
        },
        {
          word: 'Good night',
          uz: 'Xayrli tun (Xayrlashish / Uxlash oldidan)',
          phonetic: '/ɡʊd naɪt/',
          pronunciation_uz: 'Aytilishi: [gud nayt] — "gh" harflari o‘qilmaydi',
          meaning: 'Used ONLY when parting ways or going to sleep at night.',
          visual: '🌙',
          example: 'I am tired. Good night and sweet dreams!',
          example_uz: 'Men charchadim. Xayrli tun va shirin tushlar!',
          tips: 'Never use this to say hello! Only to say goodbye before bed.'
        },
        {
          word: 'Nice to meet you',
          uz: 'Tanishganimdan xursandman',
          phonetic: '/naɪs tuː miːt juː/',
          pronunciation_uz: 'Aytilishi: [nays tu miyt yu] — so‘zlar ravon qo‘shilib aytiladi',
          meaning: 'Polite formula said the FIRST time you meet a new person.',
          visual: '🤝',
          example: 'My name is Elena. Nice to meet you, David!',
          example_uz: 'Mening ismim Elena. Tanishganimdan xursandman, Devid!',
          tips: 'Shake hands or smile warmly.'
        }
      ],
      grammarInteractive: {
        type: 'timeline-clock',
        title: 'Time of Day Greeting Navigator',
        description: 'Vaqtga qarab to‘g‘ri salomlashish:',
        clocks: [
          { time: '08:30 AM', situation: 'Quyosh chiqayotganda', greeting: 'Good morning! [gud mo-ning]' },
          { time: '02:00 PM', situation: 'Tushlikdan so‘ng', greeting: 'Good afternoon! [gud af-tə-nuun]' },
          { time: '07:30 PM', situation: 'Kechki uchrashuvda salomlashish', greeting: 'Good evening! [gud iyv-ning]' },
          { time: '11:00 PM', situation: 'Uxlashga ketayotganda xayrlashuv', greeting: 'Good night! [gud nayt]' }
        ]
      },
      ccqs: [
        {
          question: 'You arrive at a dinner party at 7:30 PM. Do you greet the host with "Good night"?',
          options: [
            { text: 'No! Say "Good evening" when arriving. (Yo‘q, kelganda Good evening deyiladi)', correct: true, feedback: 'To‘g‘ri! "Good night" faqat xayrlashganda yoki uxlash oldidan aytiladi.' },
            { text: 'Yes, because it is night.', correct: false, feedback: 'Noto‘g‘ri. Good night salomlashish emas, xayrlashishdir.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'The clock shows 10:00 AM. What is the correct polite greeting?',
          options: ['Good afternoon', 'Good morning', 'Good night', 'Goodbye'],
          answer: 1,
          explanation: 'Kunduzgi soat 12:00 gacha har doim "Good morning" deyiladi.'
        }
      ],
      matching: [
        { left: '🌅 09:00 AM', right: 'Good morning' },
        { left: '☀️ 02:00 PM', right: 'Good afternoon' },
        { left: '🌆 07:00 PM Hello', right: 'Good evening' },
        { left: '🌙 11:00 PM Bedtime', right: 'Good night' }
      ],
      fillBlank: {
        sentence: 'Hello, my name is Arthur. Nice to ___ you!',
        options: ['meet', 'look', 'find'],
        correct: 'meet',
        explanation: '"Nice to meet you" — tanishuvdagi odobli ibora.'
      },
      teacherNotes: {
        elicitation: 'Esnash va ko‘rpa tortish harakatini qiling: "Uxlashdan oldin nima deyiladi?"',
        commonMistake: 'Kechki payt darsga kirganda "Good night teacher" deb kirish. "Good evening" deb to‘g‘rilang.',
        quickCcq: 'Is "Good night" a hello or a goodbye?'
      }
    },

    'a0-objects': {
      id: 'a0-objects',
      levelId: 'a0',
      title: 'Everyday Objects in Context (Buyumlar)',
      category: 'Visual Vocabulary',
      icon: 'fa-cube',
      description: 'Acquire common tangible items through functional English definitions and visual attributes.',
      overview: 'Har kungi kerakli buyumlar: ruchka, daftar, soat, kalit va boshqalar.',
      flashcards: [
        {
          word: 'Pen',
          uz: 'Ruchka',
          phonetic: '/pen/',
          pronunciation_uz: 'Aytilishi: [pen] — oddiy va qisqa "e"',
          meaning: 'A handheld tool filled with colored ink used for writing words on paper.',
          visual: '🖊️',
          example: 'I sign the contract with a black pen.',
          example_uz: 'Men shartnomaga qora ruchka bilan imzo chekaman.',
          tips: 'Ink inside, hard tip on outside.'
        },
        {
          word: 'Notebook',
          uz: 'Daftar, bloknot',
          phonetic: '/ˈnəʊtbʊk/',
          pronunciation_uz: 'Aytilishi: [nout-buk] — birinchi bo‘g‘in "nout", ikkinchisi "buk"',
          meaning: 'A collection of blank paper pages bound together to write notes.',
          visual: '📓',
          example: 'Write the new words in your notebook.',
          example_uz: 'Yangi so‘zlarni daftaringizga yozing.',
          tips: 'Made of paper sheets for learning.'
        },
        {
          word: 'Clock',
          uz: 'Devor yoki stol soati',
          phonetic: '/klɒk/',
          pronunciation_uz: 'Aytilishi: [klok] — qisqa ochiq "o"',
          meaning: 'An instrument on the wall or desk that shows the current hour and minute.',
          visual: '⏰',
          example: 'Look at the clock: it is 3 o\'clock.',
          example_uz: 'Soatga qarang: soat 3 bo‘ldi.',
          tips: 'Has two moving hands and numbers 1 to 12.'
        },
        {
          word: 'Key',
          uz: 'Kalit',
          phonetic: '/kiː/',
          pronunciation_uz: 'Aytilishi: [kiy] — cho‘ziq "i" tovushi',
          meaning: 'A small piece of shaped metal used to lock and unlock doors.',
          visual: '🔑',
          example: 'Turn the key to open the front door.',
          example_uz: 'Old eshikni ochish uchun kalitni buring.',
          tips: 'Metal teeth match the door lock.'
        }
      ],
      grammarInteractive: {
        type: 'object-function',
        title: 'Function & Purpose Matching',
        description: 'Vazifasi bo‘yicha tushunish:',
        items: [
          { item: '🖊️ Pen [pen]', purpose: 'To write letters on paper (Qog‘ozga yozish uchun)' },
          { item: '🔑 Key [kiy]', purpose: 'To unlock and lock doors (Eshikni ochish va qulflash)' },
          { item: '⏰ Clock [klok]', purpose: 'To show time (Vaqtni ko‘rsatish)' }
        ]
      },
      ccqs: [
        {
          question: 'Can you write ink on a page using a door key?',
          options: [
            { text: 'No, a pen has ink to write. (Yo‘q, ruchka yozadi)', correct: true, feedback: 'To‘g‘ri! Ruchka yozadi, kalit qulf ochadi.' },
            { text: 'Yes, both do the same job.', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which object shows you if it is 9:00 or 10:00?',
          options: ['Notebook', 'Clock', 'Key', 'Pen'],
          answer: 1,
          explanation: 'Soat (clock) vaqtni ko‘rsatadi.'
        }
      ],
      matching: [
        { left: '🖊️ Pen', right: 'Writes with ink' },
        { left: '📓 Notebook', right: 'Pages for notes' },
        { left: '🔑 Key', right: 'Unlocks doors' },
        { left: '⏰ Clock', right: 'Shows time' }
      ],
      fillBlank: {
        sentence: 'Please take your ___ and write your name on the paper.',
        options: ['pen', 'key', 'clock'],
        correct: 'pen',
        explanation: 'Yozish uchun ruchka (pen) ishlatiladi.'
      },
      teacherNotes: {
        elicitation: 'Qo‘lingizdagi ruchkani ko‘rsatib so‘rang: "What is this? What does it do?"',
        commonMistake: '"Watch" (qo‘l soati) bilan "Clock" (devor soati)ni adashtirish.',
        quickCcq: 'Does a notebook tell you the time?'
      }
    },

    'a0-verbs': {
      id: 'a0-verbs',
      levelId: 'a0',
      title: 'Action Verbs in Motion (Harakat fe’llari)',
      category: 'Dynamic Vocabulary',
      icon: 'fa-person-running',
      description: 'Acquire physical body movements and vital human actions through dynamic demonstrations.',
      overview: 'Asosiy harakat fe’llari: yurmoq, yugurmoq, ichmoq, yemoq, uxlamoq.',
      flashcards: [
        {
          word: 'Walk',
          uz: 'Yurmoq, piyoda yurmoq',
          phonetic: '/wɔːk/',
          pronunciation_uz: 'Aytilishi: [wook] — "L" harfi o‘qilmaydi, "w" lab doirasi bilan boshlanadi',
          meaning: 'To move forward on foot at a calm, natural speed.',
          visual: '🚶',
          example: 'I walk in the quiet park every morning.',
          example_uz: 'Men har kuni ertalab sokin bog‘da piyoda yuraman.',
          tips: 'Silent "l" sound: pronounce /wɔːk/.'
        },
        {
          word: 'Run',
          uz: 'Yugurmoq',
          phonetic: '/rʌn/',
          pronunciation_uz: 'Aytilishi: [ran] — "r" yumshoq, "a" qisqa nafas bilan',
          meaning: 'To move very quickly using legs and feet, faster than walking.',
          visual: '🏃',
          example: 'He runs fast to catch the moving bus.',
          example_uz: 'U ketayotgan avtobusga yetib olish uchun tez yuguradi.',
          tips: 'High energy, rapid foot steps.'
        },
        {
          word: 'Drink',
          uz: 'Ichmoq',
          phonetic: '/drɪŋk/',
          pronunciation_uz: 'Aytilishi: [drink] — "i" qisqa, oxirida burun orqali "nk"',
          meaning: 'To take liquid into your mouth and swallow it.',
          visual: '🥤',
          example: 'Drink fresh water when you feel thirsty.',
          example_uz: 'Chanqaganingizda toza suv iching.',
          tips: 'Liquid goes into throat.'
        },
        {
          word: 'Eat',
          uz: 'Yemoq',
          phonetic: '/iːt/',
          pronunciation_uz: 'Aytilishi: [iyt] — cho‘ziq smiling "i" tovushi',
          meaning: 'To put solid food into mouth, chew with teeth, and swallow.',
          visual: '🍎',
          example: 'They eat fresh red apples for breakfast.',
          example_uz: 'Ular nonushtaga yangi qizil olmalarni yeydilar.',
          tips: 'Chew solid food.'
        },
        {
          word: 'Sleep',
          uz: 'Uxlamoq',
          phonetic: '/sliːp/',
          pronunciation_uz: 'Aytilishi: [sliyp] — cho‘ziq "i" tovushi',
          meaning: 'To rest in bed with closed eyes while the body recharges.',
          visual: '😴',
          example: 'Babies sleep eight to ten hours every night.',
          example_uz: 'Chaqaloqlar har kecha 8 dan 10 soatgacha uxlaydilar.',
          tips: 'Eyes closed, resting mind and body.'
        }
      ],
      grammarInteractive: {
        type: 'action-comparison',
        title: 'Action Speed & Function Spectrum',
        description: 'Harakatlarning farqi:',
        actions: [
          { verb: '🚶 Walk [wook]', speed: 'Oshiqmasdan piyoda yurish' },
          { verb: '🏃 Run [ran]', speed: 'Tezkor yugurish' },
          { verb: '🥤 Drink [drink]', item: 'Suyuqliklar (suv, choy)' },
          { verb: '🍎 Eat [iyt]', item: 'Qattiq taomlar (non, meva)' }
        ]
      },
      ccqs: [
        {
          question: 'Do you "drink" an apple or "eat" an apple?',
          options: [
            { text: 'Eat the apple (Olma chaynaladi va yeyiladi)', correct: true, feedback: 'To‘g‘ri! Qattiq ovqatlar eat, suyuqliklar drink qilinadi.' },
            { text: 'Drink the apple', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which action requires closing your eyes and resting in bed?',
          options: ['Run', 'Sleep', 'Walk', 'Eat'],
          answer: 1,
          explanation: '"Sleep" — uxlamoq.'
        }
      ],
      matching: [
        { left: '🚶 Walk', right: 'Calm foot steps' },
        { left: '🏃 Run', right: 'Rapid fast speed' },
        { left: '🥤 Drink', right: 'Swallow liquid' },
        { left: '🍎 Eat', right: 'Chew solid food' }
      ],
      fillBlank: {
        sentence: 'When I am thirsty in the summer heat, I ___ cold water.',
        options: ['drink', 'sleep', 'walk'],
        correct: 'drink',
        explanation: 'Chanqaganda suv ichiladi (drink).'
      },
      teacherNotes: {
        elicitation: 'Piyoladan suv ichish harakatini ko‘rsating: "Am I eating or drinking?"',
        commonMistake: '"Walk" so‘zidagi L harfini talaffuz qilish (L o‘qilmaydi: /wɔːk/).',
        quickCcq: 'Can you run while sleeping?'
      }
    },

    'a0-numbers-colors': {
      id: 'a0-numbers-colors',
      levelId: 'a0',
      title: 'Numbers & Vivid Colors (Sonlar va Ranglar)',
      category: 'Descriptive Basics',
      icon: 'fa-palette',
      description: 'Identify quantities and real-world colors through visual swatches and natural associations.',
      overview: 'Asosiy ranglar va 1 dan 10 gacha bo‘lgan sonlar.',
      flashcards: [
        {
          word: 'Red',
          uz: 'Qizil',
          phonetic: '/red/',
          pronunciation_uz: 'Aytilishi: [red] — sof qisqa "e"',
          meaning: 'The color of ripe strawberries, red roses, and fire engines.',
          visual: '🔴',
          example: 'A red apple hangs on the tree.',
          example_uz: 'Daraxtda qizil olma osilib turibdi.',
          tips: 'Warm, intense color.'
        },
        {
          word: 'Blue',
          uz: 'Ko‘k, moviy',
          phonetic: '/bluː/',
          pronunciation_uz: 'Aytilishi: [bluu] — cho‘ziq "u" tovushi',
          meaning: 'The color of a clear sky on a sunny day and deep ocean water.',
          visual: '🔵',
          example: 'The blue ocean sparkles in sunlight.',
          example_uz: 'Moviy ummon quyosh nurida yaltiramoqda.',
          tips: 'Cool, calm color.'
        },
        {
          word: 'Green',
          uz: 'Yashil',
          phonetic: '/ɡriːn/',
          pronunciation_uz: 'Aytilishi: [griyn] — cho‘ziq tabassum "i" tovushi',
          meaning: 'The color of growing grass, tree leaves, and fresh cucumbers.',
          visual: '🟢',
          example: 'Green leaves flourish in spring.',
          example_uz: 'Bahorda yashil barglar unib chiqadi.',
          tips: 'The color of living plants.'
        },
        {
          word: 'Yellow',
          uz: 'Sariq',
          phonetic: '/ˈjeləʊ/',
          pronunciation_uz: 'Aytilishi: [yelou] — "ye" bilan boshlanib "lou" bilan tugaydi',
          meaning: 'The color of bright sunshine, ripe bananas, and lemon fruit.',
          visual: '🟡',
          example: 'Ripe bananas turn bright yellow.',
          example_uz: 'Pishgan bananlar yorqin sariq rangga kiradi.',
          tips: 'Brightest daytime color.'
        }
      ],
      grammarInteractive: {
        type: 'color-nature',
        title: 'Color to Nature Association',
        description: 'Ranglarni tabiat bilan bog‘lang:',
        associations: [
          { color: '🔴 Red [red]', association: 'Qulupnay va olov (Strawberries & Fire)' },
          { color: '🔵 Blue [bluu]', association: 'Ochiq osmon va dengiz (Sky & Ocean)' },
          { color: '🟢 Green [griyn]', association: 'Yashil o‘t va barglar (Grass & Leaves)' },
          { color: '🟡 Yellow [yelou]', association: 'Quyosh va limon (Sun & Lemon)' }
        ]
      },
      ccqs: [
        {
          question: 'What color is natural healthy grass in the park?',
          options: [
            { text: 'Green (Yashil)', correct: true, feedback: 'To‘g‘ri! Maysalar yashil bo‘ladi.' },
            { text: 'Blue (Ko‘k)', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'What color is a ripe banana?',
          options: ['Blue', 'Yellow', 'Red', 'Purple'],
          answer: 1,
          explanation: 'Pishgan banan sariq (yellow) bo‘ladi.'
        }
      ],
      matching: [
        { left: '🔴 Red', right: 'Fire & Strawberries' },
        { left: '🔵 Blue', right: 'Ocean & Clear Sky' },
        { left: '🟢 Green', right: 'Grass & Fresh Leaves' },
        { left: '🟡 Yellow', right: 'Sun & Ripe Lemons' }
      ],
      fillBlank: {
        sentence: 'Look up at the clear sky; it is beautiful and ___.',
        options: ['blue', 'green', 'black'],
        correct: 'blue',
        explanation: 'Kunduzgi ochiq osmon moviy (blue) bo‘ladi.'
      },
      teacherNotes: {
        elicitation: 'Kiyimingiz yoki xonadagi buyumni ko‘rsatib: "What color is this shirt?"',
        commonMistake: '"Three" (3) bilan "Tree" (daraxt) ni adashtirish.',
        quickCcq: 'Is the sun blue or yellow?'
      }
    },

    // A1 - A2 Modules
    'a1-present-simple-continuous': {
      id: 'a1-present-simple-continuous',
      levelId: 'a1',
      title: 'Present Simple vs Present Continuous (Oddiy va Davomli hozirgi zamon)',
      category: 'Core Grammar & Aspect',
      icon: 'fa-sliders',
      description: 'Master routines vs current actions using our live subject & aspect interactive switch.',
      overview: 'Present Simple = Doimiy odatlar (har kuni). Present Continuous = Ayni damda sodir bo‘layotgan ish-harakatlar (hozir).',
      flashcards: [
        {
          word: 'Routine (Present Simple)',
          uz: 'Doimiy odat (Oddiy hozirgi zamon)',
          phonetic: '/ˈruːtiːn/',
          pronunciation_uz: 'Aytilishi: [ru-tiyn] — ikkinchi bo‘g‘inga urg‘u',
          meaning: 'Things you do repeatedly: every day, usually, always.',
          visual: '🔄',
          example: 'I drink coffee every morning at 8:00 AM.',
          example_uz: 'Men har kuni ertalab soat 8:00 da qahva ichaman.',
          tips: 'Kalit so‘zlar: every day, usually, always, often.'
        },
        {
          word: 'Moment (Present Continuous)',
          uz: 'Ayni damda bo‘layotgan ish (Davomli hozirgi zamon)',
          phonetic: '/ˈməʊmənt/',
          pronunciation_uz: 'Aytilishi: [mou-mənt] — "mou" diftong',
          meaning: 'Actions occurring at this very instant: am/is/are + verb-ing.',
          visual: '⏱️',
          example: 'I am drinking a hot latte right now.',
          example_uz: 'Men ayni damda issiq latte ichyapman.',
          tips: 'Kalit so‘zlar: right now, at the moment, currently, look!'
        },
        {
          word: 'Third Person -s Rule',
          uz: 'Uchinchi shaxs birlik qoidasi (He/She/It + verb-s)',
          phonetic: 'He / She / It + verb-s',
          pronunciation_uz: 'Aytilishi: [hiy iyts], [shiy gouz] — fe’l oxiriga -s yoki -es qo‘shiladi',
          meaning: 'When the subject is He, She, or It in the Present Simple, add -s or -es.',
          visual: '👤',
          example: 'He eats breakfast, but they eat breakfast.',
          example_uz: 'U nonushta qiladi (-s), ular nonushta qiladilar.',
          tips: 'Never forget the -s for single third person!'
        }
      ],
      grammarInteractive: {
        type: 'live-grammar-switcher',
        title: 'Live Sentence Transformer',
        description: 'Ega va zamonni o‘zgartirib, fe’l qanday o‘zgarishini jonli kuzating:',
        subjects: ['I', 'You', 'He', 'She', 'We', 'They'],
        aspects: ['Routine (Every Day)', 'Happening Now (Right Now)'],
        polarity: ['Positive', 'Negative']
      },
      ccqs: [
        {
          question: '"She is driving a car." Is she driving right now, or is this just mentioning her hobby?',
          options: [
            { text: 'Right now at this moment (Ayni damda rulda)', correct: true, feedback: 'To‘g‘ri! "is driving" ayni shu lahzada bo‘layotganini bildiradi.' },
            { text: 'Only a general fact about her life', correct: false, feedback: 'Noto‘g‘ri. Umumiy ma’lumot uchun "She drives" deyiladi.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Listen! The phone ___ in the living room right now.',
          options: ['rings', 'is ringing', 'rang', 'ring'],
          answer: 1,
          explanation: '"Right now" hozirgi davomli zamonni bildiradi: "is ringing".'
        },
        {
          question: 'My brother ___ to university every Monday by bicycle.',
          options: ['is going', 'go', 'goes', 'going'],
          answer: 2,
          explanation: '"Every Monday" doimiy odat, 3-shaxs birlik uchun "goes" bo‘ladi.'
        }
      ],
      matching: [
        { left: '🔄 Every morning', right: 'Present Simple (Routine)' },
        { left: '⏱️ At this moment', right: 'Present Continuous (-ing)' },
        { left: '👤 He / She / It', right: 'Takes -s / -es in Simple' },
        { left: '🚫 Negative Routine', right: 'don\'t / doesn\'t + base verb' }
      ],
      fillBlank: {
        sentence: 'Be quiet please! The baby ___ in the cradle right now.',
        options: ['is sleeping', 'sleeps', 'sleep'],
        correct: 'is sleeping',
        explanation: 'Ayni damda bo‘layotgani sababli "is sleeping".'
      },
      teacherNotes: {
        elicitation: 'Daftarga qarab turing: "I teach English." Keyin doskaga yozishni boshlang: "What am I doing right now?"',
        commonMistake: 'Talabalar yordamchi fe’lni unutib qo‘yishadi ("I eating" o‘rniga "I am eating").',
        quickCcq: 'Does "I work" mean right this second or your general job?'
      }
    },

    'a1-daily-routines': {
      id: 'a1-daily-routines',
      levelId: 'a1',
      title: 'Daily Routines & Prepositions (Kun tartibi va Predloglar)',
      category: 'Practical Living',
      icon: 'fa-calendar-days',
      description: 'Sequence your day chronologically with accurate time prepositions (at 7:00, in the morning, on Monday).',
      overview: 'Kun tartibini ketma-ket tasvirlash va vaqt predloglarini (at, in, on) to‘g‘ri qo‘llash.',
      flashcards: [
        {
          word: 'Wake up / Get up',
          uz: 'Uyg‘onmoq / O‘rindan turmoq',
          phonetic: '/weɪk ʌp/',
          pronunciation_uz: 'Aytilishi: [weyk ap] / [get ap]',
          meaning: 'Wake up = open your eyes. Get up = physically leave the bed.',
          visual: '⏰',
          example: 'I wake up at 7:00 AM every morning.',
          example_uz: 'Men har kuni ertalab soat 7:00 da uyg‘onaman.',
          tips: 'Use "at" with clock times (at 7:00 AM).'
        },
        {
          word: 'Commute',
          uz: 'Ishga/O‘qishga qatnamoq',
          phonetic: '/kəˈmjuːt/',
          pronunciation_uz: 'Aytilishi: [kə-myut] — ikkinchi bo‘g‘inga urg‘u',
          meaning: 'The journey traveling from home to office or school.',
          visual: '🚆',
          example: 'I commute by train for 30 minutes every morning.',
          example_uz: 'Men har kuni ertalab poyezdda 30 daqiqa qatnayman.',
          tips: 'Use "by" with vehicles: by train, by bus, by car.'
        }
      ],
      grammarInteractive: {
        type: 'sequence-stepper',
        title: 'Time Prepositions (Predloglar formulasi)',
        description: 'Vaqt predloglarini eslab qoling:',
        steps: [
          { order: 'AT [et]', text: 'Aniq soat vaqtlari: at 7:00, at noon, at night' },
          { order: 'IN [in]', text: 'Kun qismlari, oylar, yillar: in the morning, in July, in 2026' },
          { order: 'ON [on]', text: 'Hafta kunlari va sanalar: on Monday, on my birthday' }
        ]
      },
      ccqs: [
        {
          question: 'Do we say "at 8 o\'clock" or "in 8 o\'clock"?',
          options: [
            { text: 'at 8 o\'clock (To‘g‘ri)', correct: true, feedback: 'To‘g‘ri! Soat vaqtlari bilan har doim "at" ishlatiladi.' },
            { text: 'in 8 o\'clock', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which preposition precedes exact clock times (e.g. 7:30 AM)?',
          options: ['On', 'In', 'At', 'For'],
          answer: 2,
          explanation: 'Soat vaqtlari bilan har doim "at" predlogi ishlatiladi.'
        }
      ],
      matching: [
        { left: '⏰ At 7:00 AM', right: 'Specific clock time' },
        { left: '🚆 By train', right: 'Mode of transportation' },
        { left: '📅 On Monday', right: 'Day of the week' },
        { left: '🌅 In the morning', right: 'Part of the day' }
      ],
      fillBlank: {
        sentence: 'I always start my work day ___ 9:00 AM sharp.',
        options: ['at', 'on', 'in'],
        correct: 'at',
        explanation: 'Aniq soat vaqti uchun "at" ishlatiladi.'
      },
      teacherNotes: {
        elicitation: 'Ask: "What is the very first thing your eyes do when the sun rises?"',
        commonMistake: '"in 8 o\'clock" deb aytish.',
        quickCcq: 'Do you commute before work or while sleeping?'
      }
    },

    'a1-past-simple': {
      id: 'a1-past-simple',
      levelId: 'a1',
      title: 'Past Simple & Irregular Verbs (O‘tgan zamon)',
      category: 'Timeline Grammar',
      icon: 'fa-clock-rotate-left',
      description: 'Describe finished moments in past time with regular (-ed) and irregular verbs.',
      overview: 'Tugallangan o‘tgan zamon: to‘g‘ri fe’llar (-ed) va noto‘g‘ri fe’llar (go -> went, see -> saw).',
      flashcards: [
        {
          word: 'Finished Time (Past Simple)',
          uz: 'Tugallangan o‘tgan zamon',
          phonetic: '/ˈfɪnɪʃt taɪm/',
          pronunciation_uz: 'Aytilishi: [fi-nisht taym] — "-ed" bu yerda "t" deb aytiladi',
          meaning: 'Action started and 100% finished in the past (yesterday, last year).',
          visual: '⏮️',
          example: 'I visited Samarkand in 2023.',
          example_uz: 'Men 2023 yilda Samarqandga bordim.',
          tips: 'Kalit so‘zlar: yesterday, last night, two days ago, in 2020.'
        },
        {
          word: 'Irregular Verbs',
          uz: 'Noto‘g‘ri fe’llar',
          phonetic: 'go -> went, eat -> ate, see -> saw',
          pronunciation_uz: 'Aytilishi: [went], [eyt], [soo] — o‘zak unlisi o‘zgaradi',
          meaning: 'Verbs that change their root vowels in the past.',
          visual: '⚡',
          example: 'Yesterday she went to the market and bought fruit.',
          example_uz: 'Kecha u bozorga bordi va meva sotib oldi.',
          tips: 'Must be memorized through rhythm.'
        }
      ],
      grammarInteractive: {
        type: 'past-irregular-switch',
        title: 'Present to Past Verb Shifter',
        description: 'Hozirgi zamondan o‘tgan zamonga o‘tish:',
        verbs: [
          { present: 'Go [gou]', past: 'Went [went]', type: 'Irregular (Noto‘g‘ri)' },
          { present: 'See [siy]', past: 'Saw [soo]', type: 'Irregular (Noto‘g‘ri)' },
          { present: 'Eat [iyt]', past: 'Ate [eyt]', type: 'Irregular (Noto‘g‘ri)' },
          { present: 'Play [pley]', past: 'Played [pleyd]', type: 'Regular (-ed to‘g‘ri)' }
        ]
      },
      ccqs: [
        {
          question: '"Yesterday, Mark bought a new car." Is Mark buying the car right now?',
          options: [
            { text: 'No, it finished completely yesterday. (Kecha tugagan)', correct: true, feedback: 'To‘g‘ri! Kecha boshlangan va kecha tugagan.' },
            { text: 'Yes, he is at the shop now.', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the past simple form of the verb "go"?',
          options: ['Goed', 'Gone', 'Went', 'Going'],
          answer: 2,
          explanation: '"Go" noto‘g‘ri fe’l: go -> went -> gone.'
        }
      ],
      matching: [
        { left: 'Go', right: 'Went' },
        { left: 'See', right: 'Saw' },
        { left: 'Eat', right: 'Ate' },
        { left: 'Buy', right: 'Bought' }
      ],
      fillBlank: {
        sentence: 'Two days ago, Sarah ___ a delicious chocolate cake.',
        options: ['baked', 'bakes', 'baking'],
        correct: 'baked',
        explanation: '"Two days ago" o‘tgan zamon bo‘lgani uchun "baked".'
      },
      teacherNotes: {
        elicitation: 'Doskaga vaqt o‘qini chizing: O‘tgan zamon (X) ------ Hozir (NOW).',
        commonMistake: '"Did you went?" deb qo‘shaloq o‘tgan zamon ishlatish ("Did you go?" to‘g‘ri).',
        quickCcq: 'Can yesterday happen again today?'
      }
    },

    'a1-expressing-needs': {
      id: 'a1-expressing-needs',
      levelId: 'a1',
      title: 'Expressing Needs & Polite Requests (Xushmuomala iltimoslar)',
      category: 'Real-world Pragmatics',
      icon: 'fa-comments',
      description: 'Navigate cafes, airports, and stores politely using "I would like" and "Could you please".',
      overview: 'Madaniy va xushmuomala iltimoslar: "I would like..." (xohlardim), "Could you please...?" (qilib bera olasizmi?).',
      flashcards: [
        {
          word: 'I would like... (I\'d like)',
          uz: 'Menga ... bersangiz (Iltimos)',
          phonetic: '/aɪ wʊd laɪk/',
          pronunciation_uz: 'Aytilishi: [ay wud layk] yoki qisqa [ayd layk] — "L" o‘qilmaydi',
          meaning: 'Polite way to say "I want". Essential in restaurants and stores.',
          visual: '☕',
          example: 'I would like a cup of green tea, please.',
          example_uz: 'Menga bir finjon ko‘k choy bersangiz, iltimos.',
          tips: 'Much more courteous than demanding "I want".'
        },
        {
          word: 'Could you please...?',
          uz: 'Iltimos, ... qila olasizmi?',
          phonetic: '/kʊd juː pliːz/',
          pronunciation_uz: 'Aytilishi: [kud yu pliiz] — "could" dagi "L" o‘qilmaydi',
          meaning: 'Polite request asking someone to do an action for you.',
          visual: '🙏',
          example: 'Could you please pass the salt?',
          example_uz: 'Iltimos, tuzni uzatib yubora olasizmi?',
          tips: 'Very polite and respectful.'
        }
      ],
      grammarInteractive: {
        type: 'politeness-meter',
        title: 'Politeness Scale Meter',
        description: 'Qo‘pollikdan xushmuomalalikka qarab o‘sish:',
        levels: [
          { tone: 'Qo‘pol ⚠️', phrase: '"Give me coffee!" (Menga qahva ber!)' },
          { tone: 'Oddiy 🟡', phrase: '"Can I have coffee?" (Qahva olsam bo‘ladimi?)' },
          { tone: 'Xushmuomala 🟢', phrase: '"I would like a coffee, please." (Qahva bersangiz, iltimos)' },
          { tone: 'Oliyjanob 🌟', phrase: '"Could I possibly have a coffee, please?"' }
        ]
      },
      ccqs: [
        {
          question: 'Is "I would like a ticket" more polite than shouting "I want a ticket!"?',
          options: [
            { text: 'Yes, "would like" is much more polite. (Ha, ancha odobli)', correct: true, feedback: 'To‘g‘ri! "Would like" juda xushmuomala ohang yaratadi.' },
            { text: 'No, both sound identical.', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'You want to order at a cafe. What is the best phrase?',
          options: ['Give me espresso!', 'I would like an espresso, please.', 'Bring me espresso now.', 'I take espresso.'],
          answer: 1,
          explanation: '"I would like..., please" eng xushmuomala buyurtma usulidir.'
        }
      ],
      matching: [
        { left: '🙋 Excuse me', right: 'Polite attention grabber' },
        { left: '☕ I would like...', right: 'Polite form of "I want"' },
        { left: '🙏 Could you please...?', right: 'Courteous request for action' },
        { left: '👋 Pardon me', right: 'Apology / asking to repeat' }
      ],
      fillBlank: {
        sentence: 'Excuse me, could you ___ speak a little slower, please?',
        options: ['please', 'must', 'want'],
        correct: 'please',
        explanation: 'Xushmuomalalik uchun "please" qo‘shiladi.'
      },
      teacherNotes: {
        elicitation: 'Xaridor rolini o‘ynab: "Bread! Now!" deb baqiring. "Buni qanday chiroyli aytsa bo‘ladi?" deb so‘rang.',
        commonMistake: 'Imperativ buyruq ("Give me") ishlatish.',
        quickCcq: 'Does "I would like" mean you already have it?'
      }
    },

    'a2-future-modals': {
      id: 'a2-future-modals',
      levelId: 'a2',
      title: 'Future Tenses & Modal Verbs (Kelasi zamon va Modal fe’llar)',
      category: 'Future & Modality',
      icon: 'fa-wand-magic-sparkles',
      description: 'Differentiate "Going to" (plans) from "Will" (spontaneous decisions), plus Can, Should, Must.',
      overview: 'Kelasi zamon rejalari (be going to) va kutilmagan qarorlar (will), hamda modal fe’llar.',
      flashcards: [
        {
          word: 'Be going to (Planned future)',
          uz: 'Rejalashtirilgan kelasi zamon (-moqchiman)',
          phonetic: '/biː ˈɡəʊɪŋ tuː/',
          pronunciation_uz: 'Aytilishi: [biy gou-ing tu] — reja',
          meaning: 'A plan or intention decided BEFORE the moment of speaking.',
          visual: '📝',
          example: 'I am going to study abroad next autumn.',
          example_uz: 'Men kelasi kuzda chet elda o‘qimoqchiman.',
          tips: 'Oldindan tuzilgan aniq reja.'
        },
        {
          word: 'Will (Instant decision / Promise)',
          uz: 'Shu lahzada qabul qilingan qaror yoki va’da',
          phonetic: '/wɪl/',
          pronunciation_uz: 'Aytilishi: [wil] — qisqa "i"',
          meaning: 'Decided right at the moment of speaking.',
          visual: '⚡',
          example: 'The phone is ringing. I will answer it!',
          example_uz: 'Telefon jiringlayapti. Men javob beraman!',
          tips: 'Quick instant reaction.'
        },
        {
          word: 'Should (Advice)',
          uz: 'Maslahat (qilsangiz yaxshi bo‘lardi)',
          phonetic: '/ʃʊd/',
          pronunciation_uz: 'Aytilishi: [shud] — "L" harfi mutlaqo o‘qilmaydi',
          meaning: 'Used to give friendly advice or recommendation.',
          visual: '💡',
          example: 'You should sleep at least eight hours.',
          example_uz: 'Siz kamida 8 soat uxlasangiz yaxshi bo‘lardi.',
          tips: 'Silent "L" sound: /ʃʊd/.'
        }
      ],
      grammarInteractive: {
        type: 'future-comparison',
        title: 'Will vs Going to vs Modals',
        description: 'Kelasi zamon va modal fe’llar farqi:',
        items: [
          { item: 'Going to [gou-ing tu]', purpose: 'Aniq reja: I am going to buy a car next month.' },
          { item: 'Will [wil]', purpose: 'Ayni damdagi qaror: I will help you with bags!' },
          { item: 'Should [shud]', purpose: 'Maslahat: You should read more books.' },
          { item: 'Must [mast]', purpose: 'Qat’iy qoida: You must wear a seatbelt.' }
        ]
      },
      ccqs: [
        {
          question: 'If you bought airplane tickets yesterday, do you say "I will fly" or "I am going to fly"?',
          options: [
            { text: 'I am going to fly (Oldindan reja qilingan)', correct: true, feedback: 'To‘g‘ri! Chipta olingan, rejalashtirilgan ishlar uchun "going to" ishlatiladi.' },
            { text: 'I will fly', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which modal verb is best for giving friendly advice?',
          options: ['Must', 'Should', 'Will', 'Am'],
          answer: 1,
          explanation: '"Should" do‘stona maslahat berish uchun ishlatiladi.'
        }
      ],
      matching: [
        { left: '📝 Going to', right: 'Pre-planned intention' },
        { left: '⚡ Will', right: 'Instant decision right now' },
        { left: '💡 Should', right: 'Friendly advice' },
        { left: '⛔ Must', right: 'Strict obligation' }
      ],
      fillBlank: {
        sentence: 'Look at those dark clouds! It ___ rain soon.',
        options: ['is going to', 'will to', 'should to'],
        correct: 'is going to',
        explanation: 'Ko‘z oldidagi aniq dalil bor bo‘lsa "is going to" ishlatiladi.'
      },
      teacherNotes: {
        elicitation: 'Cho‘ntagingizdan samolyot chiptasini chiqaring: "I bought this. I am going to..."',
        commonMistake: '"Should" dagi L harfini talaffuz qilish.',
        quickCcq: 'Does "Should" force you by law?'
      }
    },

    // B1 - B2 Modules
    'b1-present-past-perfect': {
      id: 'b1-present-past-perfect',
      levelId: 'b1',
      title: 'Present Perfect vs Past Simple (Hozirgi tugallangan zamon)',
      category: 'Timeline Architecture',
      icon: 'fa-timeline',
      description: 'Differentiate life experience / present result from past historical moments.',
      overview: 'Past Simple = Aniq o‘tgan vaqt (kecha, 2021). Present Perfect = Hayotiy tajriba yoki hozirga ta’siri bo‘lgan natija.',
      flashcards: [
        {
          word: 'Life Experience (Present Perfect)',
          uz: 'Hayotiy tajriba (Present Perfect: have/has + V3)',
          phonetic: 'have/has + past participle (V3)',
          pronunciation_uz: 'Aytilishi: [həv / həz] + V3 shakli',
          meaning: 'Something you have done at least once in your life up to NOW.',
          visual: '🌏',
          example: 'I have traveled to five different countries.',
          example_uz: 'Men hayotim davomida 5 ta davlatga sayohat qilganman.',
          tips: 'Exact date is NOT specified or important.'
        },
        {
          word: 'Recent Result',
          uz: 'Hozirgi natija (kalit so‘zlar: just, already, yet)',
          phonetic: 'just / already / yet',
          pronunciation_uz: 'Aytilishi: [jast] / [ol-redi] / [yet]',
          meaning: 'Action happened moments ago and affects the current situation.',
          visual: '🔑',
          example: 'I have lost my key! (Result: I cannot enter right now).',
          example_uz: 'Men kalitimni yo‘qotib qo‘ydim! (Natija: hozir kira olmayman).',
          tips: 'Focus is on the present consequence.'
        }
      ],
      grammarInteractive: {
        type: 'timeline-perfect',
        title: 'Interactive Tense Timeline Map',
        description: 'Vaqt xaritasi:',
        timeline: [
          {
            label: 'Past Simple',
            anchor: '2021 (Yopiq quti 📦)',
            sentence: 'I visited Rome in 2021.',
            detail: '2021 yil tugagan, vaqt oynasi yopiq.'
          },
          {
            label: 'Present Perfect',
            anchor: 'Hozirgacha bo‘lgan ko‘prik 🌉',
            sentence: 'I have visited Rome three times.',
            detail: 'Butun umrim davomida hozirgacha 3 marta borganman.'
          }
        ]
      },
      ccqs: [
        {
          question: '"She has lived here for 10 years." Does she still live here now?',
          options: [
            { text: 'Yes! She lives here right now. (Ha, hozir ham shu yerda yashaydi)', correct: true, feedback: 'To‘g‘ri! for/since bilan Present Perfect hozirgacha davom etayotganini bildiradi.' },
            { text: 'No, she moved away years ago.', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Choose the correct sentence:',
          options: [
            'I have been to Paris in 2019.',
            'I went to Paris in 2019.',
            'I have gone to Paris yesterday.',
            'I went to Paris three times in my life.'
          ],
          answer: 1,
          explanation: '"In 2019" aniq o‘tgan vaqt bo‘lgani sababli Past Simple "went" talab qilinadi.'
        }
      ],
      matching: [
        { left: '📅 Finished past time', right: 'Past Simple (V2)' },
        { left: '🌏 Life experience up to now', right: 'Present Perfect (have/has + V3)' },
        { left: '⏰ Just / Already', right: 'Recent event with present impact' },
        { left: '⏳ Since 2015', right: 'Starting point up to present' }
      ],
      fillBlank: {
        sentence: 'Have you ever ___ sushi with spicy tuna?',
        options: ['eaten', 'ate', 'eat'],
        correct: 'eaten',
        explanation: 'Present perfect formulasida V3 (eaten) ishlatiladi.'
      },
      teacherNotes: {
        elicitation: 'Yuvilgan toza finjonni ko‘rsatib: "I have washed it. Is it clean right now?"',
        commonMistake: 'Present Perfect bilan "yesterday" so‘zini qo‘shish.',
        quickCcq: 'Is the time period finished or still open?'
      }
    },

    'b1-conditionals': {
      id: 'b1-conditionals',
      levelId: 'b1',
      title: 'The 4 Conditionals Spectrum (Shart ergash gaplar)',
      category: 'Logical & Hypothetical Structures',
      icon: 'fa-code-branch',
      description: 'Slide through reality levels: Zero (100% Fact), First (Real Future), Second (Imaginary Present), Third (Past Regret).',
      overview: '0, 1, 2, 3-shart ergash gaplar: ilmiy haqiqatlardan xayoliy orzular va o‘tgan zamon afsuslarigacha.',
      flashcards: [
        {
          word: 'Zero Conditional (100% Truth)',
          uz: '0-shart: Ilmiy qonuniyat (If + Present, Present)',
          phonetic: 'If + Present Simple, Present Simple',
          pronunciation_uz: 'Aytilishi: [if ... smelts]',
          meaning: 'Scientific laws and natural constants.',
          visual: '🧊',
          example: 'If you heat ice, it melts into water.',
          example_uz: 'Muzni qizdirsangiz, u suvga aylanadi.',
          tips: 'Har doim 100% shunday bo‘ladi.'
        },
        {
          word: 'First Conditional (Real Future 50%)',
          uz: '1-shart: Haqiqiy kelajak ehtimoli (If + Present, Will + V1)',
          phonetic: 'If + Present Simple, will + base verb',
          pronunciation_uz: 'Aytilishi: [if it reyns ... ay wil stey]',
          meaning: 'A real possibility in the future.',
          visual: '🌧️',
          example: 'If it rains tomorrow, I will stay at home.',
          example_uz: 'Ertaga yomg‘ir yog‘sa, men uyda qolaman.',
          tips: 'Real hayotiy ehtimol.'
        },
        {
          word: 'Second Conditional (Imaginary 5%)',
          uz: '2-shart: Xayoliy orzu (If + Past, Would + V1)',
          phonetic: 'If + Past Simple, would + base verb',
          pronunciation_uz: 'Aytilishi: [if ay wan ... ay wud trevl] — "would" dagi "L" o‘qilmaydi',
          meaning: 'Unreal, hypothetical present or daydream.',
          visual: '🦄',
          example: 'If I won a million dollars, I would travel the world.',
          example_uz: 'Agar bir million dollar yutib olganimda, dunyoni aylanar edim.',
          tips: 'Ayni damda haqiqat emas, faqat xayol.'
        },
        {
          word: 'Third Conditional (Impossible Past 0%)',
          uz: '3-shart: O‘tgan zamon afsusi (If + Had + V3, Would have + V3)',
          phonetic: 'If + Past Perfect, would have + V3',
          pronunciation_uz: 'Aytilishi: [if ay həd stadid ... ay wud həv past]',
          meaning: 'Hypothetical past; cannot change what already happened.',
          visual: '⏮️',
          example: 'If I had studied harder, I would have passed the exam.',
          example_uz: 'Agar qattiqroq o‘qiganimda edi, imtihondan o‘tgan bo‘lardim.',
          tips: 'Endi kech, o‘tmishni o‘zgartirib bo‘lmaydi.'
        }
      ],
      grammarInteractive: {
        type: 'conditional-slider',
        title: 'Conditional Reality Spectrum Slider',
        description: 'Ehtimollik darajasini ko‘ring:',
        levels: [
          { name: 'Zero (100% Fact)', formula: 'If + Present, Present', example: 'If you touch fire, it burns you.', reality: 'Ilmiy haqiqat.' },
          { name: 'First (Real Future)', formula: 'If + Present, will + Verb', example: 'If I finish work early, I will call you.', reality: 'Kelajakdagi real imkoniyat.' },
          { name: 'Second (Dream / Unreal)', formula: 'If + Past, would + Verb', example: 'If I had wings, I would fly across mountains.', reality: 'Hozirgi xayoliy orzu.' },
          { name: 'Third (Past Regret 0%)', formula: 'If + Past Perfect, would have + V3', example: 'If we had taken the train, we wouldn\'t have been late.', reality: 'O‘tmishdagi afsus.' }
        ]
      },
      ccqs: [
        {
          question: '"If I won the lottery, I would buy an island." Do I have the winning lottery ticket right now?',
          options: [
            { text: 'No, it is an imaginary daydream (2-shart orzusi).', correct: true, feedback: 'To‘g‘ri! Bu xayoliy faraz.' },
            { text: 'Yes, I am going to buy it tomorrow.', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'If you boil water to 100 degrees Celsius, it ___.',
          options: ['will boil', 'boils', 'would boil', 'boiled'],
          answer: 1,
          explanation: 'Ilmiy fakt Zero Conditional bo‘lib, ikkala qismda ham Present Simple (boils) bo‘ladi.'
        }
      ],
      matching: [
        { left: '🧊 Zero Conditional', right: '100% Scientific certainty' },
        { left: '🌧️ First Conditional', right: 'Realistic future chance' },
        { left: '🦄 Second Conditional', right: 'Imaginary present dream' },
        { left: '⏮️ Third Conditional', right: 'Past regret contrary to fact' }
      ],
      fillBlank: {
        sentence: 'If it ___ sunny tomorrow, we will have a picnic in the park.',
        options: ['is', 'will be', 'was'],
        correct: 'is',
        explanation: '1-shartda if qismida kelasi zamon ("will") emas, Present Simple ("is") ishlatiladi.'
      },
      teacherNotes: {
        elicitation: 'Lotereya chiptasini ko‘rsatib: "If I won a million dollars, what would I buy?"',
        commonMistake: 'If qismiga "will" yoki "would" qo‘yish ("If I will go" xato).',
        quickCcq: 'Can third conditional change history?'
      }
    },

    'b2-phrasal-verbs': {
      id: 'b2-phrasal-verbs',
      levelId: 'b2',
      title: 'Phrasal Verbs in Authentic Context (Iborali fe’llar)',
      category: 'Idiomatic Mechanics',
      icon: 'fa-puzzle-piece',
      description: 'Break down, Turn up, Look forward to, Call off, Put off in authentic context.',
      overview: 'Fe’l + predlog qo‘shilib yangi ma’no hosil qilishi (Break down = buzilib qolmoq, Call off = bekor qilmoq).',
      flashcards: [
        {
          word: 'Break down',
          uz: 'Buzilib qolmoq (mashina / texnika)',
          phonetic: '/breɪk daʊn/',
          pronunciation_uz: 'Aytilishi: [breyk daun]',
          meaning: '1. Machine stops functioning. 2. A person loses emotional control.',
          visual: '🚗',
          example: 'Our car broke down on the highway due to engine failure.',
          example_uz: 'Motor nosozligi sababli mashinamiz trassada buzilib qoldi.',
          tips: 'Think of machinery collapsing.'
        },
        {
          word: 'Look forward to',
          uz: 'Intizorlik bilan kutmoq (+ verb-ing)',
          phonetic: '/lʊk ˈfɔːwəd tuː/',
          pronunciation_uz: 'Aytilishi: [luk fo-wəd tu] — doimo -ing bilan',
          meaning: 'To feel eager excitement about a future event (+ verb-ing).',
          visual: '🎉',
          example: 'I am looking forward to seeing you next weekend!',
          example_uz: 'Kelasi dam olish kunlari sizni ko‘rishni intizorlik bilan kutyapman!',
          tips: 'Always followed by -ing: look forward to meeting, not meet.'
        },
        {
          word: 'Call off',
          uz: 'Bekor qilmoq (tadbirlar)',
          phonetic: '/kɔːl ɒf/',
          pronunciation_uz: 'Aytilishi: [kool of]',
          meaning: 'To cancel an organized event or agreement completely.',
          visual: '❌',
          example: 'The referee called off the soccer match due to heavy thunderstorms.',
          example_uz: 'Hakam kuchli chaqmoq sababli futbol o‘yinini bekor qildi.',
          tips: 'Permanently cancelled, unlike "put off" (postponed).'
        }
      ],
      grammarInteractive: {
        type: 'phrasal-breakdown',
        title: 'Particle Meaning Shift',
        description: 'Predlog qo‘shilganda ma’no o‘zgarishi:',
        shifts: [
          { base: 'Look (qaramoq)', particle: '+ for', result: 'Qidirmoq (Search) 🔍' },
          { base: 'Look (qaramoq)', particle: '+ after', result: 'G‘amxo‘rlik qilmoq (Take care) 👶' },
          { base: 'Put (qo‘ymoq)', particle: '+ off', result: 'Kechiktirmoq / Keyinga qoldirmoq ⏳' },
          { base: 'Put (qo‘ymoq)', particle: '+ up with', result: 'Sabr qilmoq / Chidamoq 🧘' }
        ]
      },
      ccqs: [
        {
          question: 'If a concert is "called off", will it happen tomorrow?',
          options: [
            { text: 'No, it is cancelled completely. (Butunlay bekor qilingan)', correct: true, feedback: 'To‘g‘ri! Call off = bekor qilmoq.' },
            { text: 'Yes, it was just delayed.', correct: false, feedback: 'Noto‘g‘ri. Kechiktirilgani "put off" deyiladi.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'The flight was ___ due to dense winter fog.',
          options: ['called off', 'broken down', 'turned up', 'looked after'],
          answer: 0,
          explanation: '"Called off" bekor qilindi degani.'
        }
      ],
      matching: [
        { left: '❌ Call off', right: 'Cancel completely' },
        { left: '⏳ Put off', right: 'Postpone / Delay' },
        { left: '🚗 Break down', right: 'Machine stops working' },
        { left: '🚪 Turn up', right: 'Arrive / Appear' }
      ],
      fillBlank: {
        sentence: 'I am really looking forward to ___ my grandparents this summer.',
        options: ['visiting', 'visit', 'visited'],
        correct: 'visiting',
        explanation: '"Look forward to" dan keyin har doim fe’lga -ing qo‘shiladi (visiting).'
      },
      teacherNotes: {
        elicitation: 'Buzilgan mashinani ko‘rsatib: "Did it break down or turn up?"',
        commonMistake: '"Call off" (bekor qilish) bilan "Put off" (keyinga surish)ni adashtirish.',
        quickCcq: 'Does "give up" mean to hand something upward?'
      }
    },

    'b2-business-travel': {
      id: 'b2-business-travel',
      levelId: 'b2',
      title: 'Business Negotiation & Travel (Biznes va Sayohat)',
      category: 'Professional Discourse',
      icon: 'fa-briefcase',
      description: 'Diplomatic disagreement, feasible proposals, consensus, and airport layovers.',
      overview: 'Biznes muzokaralari, xushmuomala e’tirozlar va sayohatdagi professional nutq.',
      flashcards: [
        {
          word: 'Feasible',
          uz: 'Amalga oshirsa bo‘ladigan, real',
          phonetic: '/ˈfiːzəbl/',
          pronunciation_uz: 'Aytilishi: [fiy-zi-bl] — birinchi bo‘g‘in cho‘ziq "fiy", keyin "zibl"',
          meaning: 'Possible, realistic, and practical to achieve successfully.',
          visual: '📊',
          example: 'Is this delivery deadline feasible for our team?',
          example_uz: 'Ushbu topshirish muddati jamoamiz uchun realmi?',
          tips: 'Synonyms: workable, achievable.'
        },
        {
          word: 'Tactful Disagreement',
          uz: 'Xushmuomala e’tiroz bildirish',
          phonetic: '/ˈtæktfʊl/',
          pronunciation_uz: 'Aytilishi: [tekt-ful] — "tactful"',
          meaning: 'Disagreeing professionally without offending the other party.',
          visual: '🤝',
          example: 'I see your point; however, our budget is limited.',
          example_uz: 'Fikringizni tushunib turibman; biroq byudjetimiz cheklangan.',
          tips: 'Acknowledge first ("I see..."), then counter ("however...").'
        }
      ],
      grammarInteractive: {
        type: 'diplomacy-negotiation',
        title: 'Diplomatic Tone Shifter',
        description: 'Qo‘pollikdan professional diplomatiyaga:',
        phrases: [
          { blunt: '"That is wrong."', professional: '"I see it somewhat differently, let\'s examine the data."' },
          { blunt: '"You must hurry."', professional: '"Would it be possible to expedite this deliverable?"' }
        ]
      },
      ccqs: [
        {
          question: 'If a project timeline is "not feasible", can the team easily finish it on time?',
          options: [
            { text: 'No, it is unrealistic given the constraints. (Yo‘q, imkonsiz)', correct: true, feedback: 'To‘g‘ri! Feasible = real bajariladigan.' },
            { text: 'Yes, it takes 5 minutes.', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the most professional way to disagree in an executive meeting?',
          options: [
            'You are completely wrong!',
            'I see your perspective; however, we should consider alternative options.',
            'That is a terrible idea.',
            'Be quiet.'
          ],
          answer: 1,
          explanation: 'Diplomatik ohang hurmat bilan qarshi fikr bildiradi.'
        }
      ],
      matching: [
        { left: '🤝 Feasible', right: 'Practical & achievable' },
        { left: '✈️ Layover', right: 'Airport connection stop' },
        { left: '💼 Agenda', right: 'List of meeting topics' },
        { left: '⚖️ Consensus', right: 'General agreement' }
      ],
      fillBlank: {
        sentence: 'I appreciate your input; ___, we must strictly adhere to the project deadline.',
        options: ['however', 'because', 'so that'],
        correct: 'however',
        explanation: '"However" (biroq/ammo) professional kontrast hosil qiladi.'
      },
      teacherNotes: {
        elicitation: 'Muzokara simulyatsiyasi o‘tkazing: qimmat taklifga xushmuomala "yo‘q" deb javob berish.',
        commonMistake: 'Juda keskin inkor etish.',
        quickCcq: 'Does "I see your point" mean I agree 100%?'
      }
    },

    // C1 Advanced Modules
    'c1-inversions': {
      id: 'c1-inversions',
      levelId: 'c1',
      title: 'Dramatic Inversions (Grammatik Inversiya)',
      category: 'Stylistic Mastery',
      icon: 'fa-wand-magic-sparkles',
      description: 'Seldom have I seen..., Under no circumstances should you..., Not only did she deliver...',
      overview: 'Ritorik va adabiy joziba uchun gap boshida inkor so‘zlaridan so‘ng ega va yordamchi fe’l o‘rnini almashtirish.',
      flashcards: [
        {
          word: 'Seldom have I...',
          uz: 'Kamdan-kam hollarda ... ko‘rganman',
          phonetic: 'Negative adverb + Aux + Subject + Verb',
          pronunciation_uz: 'Aytilishi: [sel-dəm həv ay] — tantanali ohang',
          meaning: 'Used to strongly emphasize that something almost never occurs.',
          visual: '🌟',
          example: 'Seldom have I witnessed such extraordinary resilience.',
          example_uz: 'Bunday favqulodda matonatga kamdan-kam hollarda guvoh bo‘lganman.',
          tips: 'Normal order: "I have seldom witnessed...". Inversion adds grandeur.'
        },
        {
          word: 'Under no circumstances...',
          uz: 'Qanday holatda bo‘lmasin, aslo ... mumkin emas',
          phonetic: 'Restricted condition + Aux + Subject',
          pronunciation_uz: 'Aytilishi: [an-dər nou sər-kəm-sten-siz]',
          meaning: 'Absolute prohibition with maximum authority.',
          visual: '⛔',
          example: 'Under no circumstances should you disclose this password.',
          example_uz: 'Qanday holatda bo‘lmasin, bu parolni oshkor qilmasligingiz shart.',
          tips: 'Much stronger than "You should never disclose".'
        }
      ],
      grammarInteractive: {
        type: 'inversion-builder',
        title: 'Dramatic Inversion Engine',
        description: 'Oddiy gapning inversiyaga aylanishi:',
        examples: [
          { standard: 'I have never heard such an argument.', inverted: 'Never have I heard such an argument.' },
          { standard: 'He had hardly arrived when it rained.', inverted: 'Hardly had he arrived when it rained.' }
        ]
      },
      ccqs: [
        {
          question: 'In "Rarely do we see such dedication", does the order look like a question format?',
          options: [
            { text: 'Yes, auxiliary verb comes before the subject. (Ha, so‘roq tartibida)', correct: true, feedback: 'To‘g‘ri! Inversiyada yordamchi fe’l egadan oldinga chiqadi.' },
            { text: 'No, standard order.', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Complete the inverted sentence: "Seldom ___ such an awe-inspiring performance."',
          options: ['we have seen', 'have we seen', 'we saw', 'did we saw'],
          answer: 1,
          explanation: '"Seldom" dan keyin yordamchi fe’l egadan oldinga o‘tadi: "have we seen".'
        }
      ],
      matching: [
        { left: '⛔ Under no circumstances', right: 'Absolute formal prohibition' },
        { left: '⚡ Not only did...', right: 'Dual simultaneous achievement' },
        { left: '🌟 Seldom have I...', right: 'Rarity of extraordinary event' },
        { left: '⏳ Hardly had we...', right: 'Immediate rapid succession' }
      ],
      fillBlank: {
        sentence: 'Hardly ___ the station when the express train departed.',
        options: ['had we reached', 'we had reached', 'did we reached'],
        correct: 'had we reached',
        explanation: 'Hardly inversiyasi: hardly had + ega + V3.'
      },
      teacherNotes: {
        elicitation: 'Ikkita gapni ohang bilan o‘qing: 1) "I rarely eat sugar." 2) "Rarely do I eat sugar." Qaysi biri ulug‘vorroq yangraydi?',
        commonMistake: 'Yordamchi fe’lni unutib to‘g‘ridan-to‘g‘ri egani qo‘yish.',
        quickCcq: 'Does "Under no circumstances should you" mean permission?'
      }
    },

    'c1-idioms': {
      id: 'c1-idioms',
      levelId: 'c1',
      title: 'Nuanced Idiomatic Eloquence (Yuqori darajadagi idiomalari)',
      category: 'Figurative Mastery',
      icon: 'fa-feather-pointed',
      description: 'Bite the bullet, A blessing in disguise, Burn the midnight oil, Cut corners with historical context.',
      overview: 'Ingliz xalqining madaniy va ko‘chma ma’noli eng boy iboralari.',
      flashcards: [
        {
          word: 'Bite the bullet',
          uz: 'Qiyinchilikka chidamoq, noxush ishga mardona kirishmoq',
          phonetic: '/baɪt ðə ˈbʊlɪt/',
          pronunciation_uz: 'Aytilishi: [bayt zə bu-lit]',
          meaning: 'To face a grim, unavoidable situation with courage.',
          visual: '🛡️',
          example: 'I dread surgery, but I have to bite the bullet and get it done.',
          example_uz: 'Operatsiyadan qo‘rqaman, lekin chidab, buni qildirishim kerak.',
          tips: 'Kelib chiqishi: Og‘riqsizlantirish bo‘lmagan vaqtda jangchilar qo‘rg‘oshin o‘qni tishlab operatsiyaga chidashgan.'
        },
        {
          word: 'A blessing in disguise',
          uz: 'Yomonlik ortidagi yaxshilik (Har yomonning bir yaxshisi bor)',
          phonetic: '/ə ˈblesɪŋ ɪn dɪsˈɡaɪz/',
          pronunciation_uz: 'Aytilishi: [ə ble-sing in dis-gayz]',
          meaning: 'An apparent misfortune that unexpectedly leads to a great outcome.',
          visual: '🎭',
          example: 'Losing that job was a blessing in disguise; I founded my own firm.',
          example_uz: 'U ishdan bo‘shash aslida yaxshilikka bo‘lgan ekan; o‘z firmamga asos soldim.',
          tips: 'Boshida kulfatdek tuyulgan, lekin keyin katta foyda keltirgan voqea.'
        }
      ],
      grammarInteractive: {
        type: 'idiom-story-visualizer',
        title: 'Idiom Context & Origin Storyboard',
        description: 'Iboralarning chuqur ma’nosi:',
        stories: [
          { idiom: 'Bite the bullet 🛡️', context: 'Noiloj qiyinchilikka shikoyatsiz chidash.' },
          { idiom: 'A blessing in disguise 🎭', context: 'Kutilmagan yaxshi natija bergan musibat.' }
        ]
      },
      ccqs: [
        {
          question: 'If an engineer "cuts corners" on bridge construction, is the bridge safer?',
          options: [
            { text: 'No, cutting corners compromises quality and safety. (Sifat pasayadi)', correct: true, feedback: 'To‘g‘ri! "Cut corners" sifatdan qochib, arzon-garov qilish.' },
            { text: 'Yes, it makes it stronger.', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which idiom best describes an initially bad event that turned out beneficial?',
          options: ['Bite the bullet', 'A blessing in disguise', 'Cut corners', 'Burn the midnight oil'],
          answer: 1,
          explanation: '"A blessing in disguise" — boshida yomon ko‘ringan, keyin yaxshilik keltirgan holat.'
        }
      ],
      matching: [
        { left: '🛡️ Bite the bullet', right: 'Endure hardship stoically' },
        { left: '🎭 Blessing in disguise', right: 'Misfortune that yields benefit' },
        { left: '🕯️ Burn midnight oil', right: 'Work tirelessly into night' },
        { left: '✂️ Cut corners', right: 'Take harmful quality shortcuts' }
      ],
      fillBlank: {
        sentence: 'Failing the entrance exam was a ___ in disguise, as it led me to a better path.',
        options: ['blessing', 'fortune', 'miracle'],
        correct: 'blessing',
        explanation: 'Iboraning aniq shakli: "a blessing in disguise".'
      },
      teacherNotes: {
        elicitation: 'Ask: "Biror noxush voqea keyinchalik sizga foyda keltirganmi? Buni inglizcha nima deymiz?"',
        commonMistake: 'So‘zma-so‘z tarjima qilish (o‘q tishlash deb tushunish).',
        quickCcq: 'Is cutting corners praised or criticized?'
      }
    },

    'c1-nuanced-register': {
      id: 'c1-nuanced-register',
      levelId: 'c1',
      title: 'Nuanced Register & Academic Collocations (Akademik so‘zlar)',
      category: 'Lexical Sophistication',
      icon: 'fa-book-bookmark',
      description: 'Mitigate risk, Ubiquitous presence, Meticulous research, Catalyze transformation.',
      overview: 'Oddiy so‘zlardan akademik va yuksak rasmiy nutqqa o‘tish.',
      flashcards: [
        {
          word: 'Mitigate (vs Reduce)',
          uz: 'Zararini yumshatmoq, xavfni kamaytirmoq',
          phonetic: '/ˈmɪtɪɡeɪt/',
          pronunciation_uz: 'Aytilishi: [mi-ti-geyt] — birinchi bo‘g‘inga urg‘u, oxirgi qismi "geyt"',
          meaning: 'To make something bad or harmful less severe, intense, or painful.',
          visual: '🛡️',
          example: 'Policies were designed to mitigate environmental pollution.',
          example_uz: 'Siyosat atrof-muhit ifloslanishining zararini yumshatish uchun ishlab chiqildi.',
          tips: 'Collocates with: risk, damage, circumstances, impact.'
        },
        {
          word: 'Ubiquitous (vs Everywhere)',
          uz: 'Hamma yerda uchraydigan, yalpi tarqalgan',
          phonetic: '/juːˈbɪkwɪtəs/',
          pronunciation_uz: 'Aytilishi: [yu-bik-vi-təs] — "yu" deb boshlanadi',
          meaning: 'Present, appearing, or found in all places universally.',
          visual: '🌐',
          example: 'Smartphones have become ubiquitous across modern human society.',
          example_uz: 'Smartfonlar zamonaviy insoniyat jamiyatida hamma yerda odatiy bo‘lib qoldi.',
          tips: 'High academic register for universal presence.'
        }
      ],
      grammarInteractive: {
        type: 'register-ladder',
        title: 'Register Sophistication Ladder',
        description: 'Oddiydan akademik darajagacha:',
        ladders: [
          { casual: 'Fix / Lower a problem', neutral: 'Reduce the problem', academic: 'Mitigate the adverse repercussions' },
          { casual: 'It is everywhere', neutral: 'Very common', academic: 'Ubiquitous across society' }
        ]
      },
      ccqs: [
        {
          question: 'Does "mitigate" mean to completely erase to zero or make its severity milder?',
          options: [
            { text: 'To make its severity milder. (Zararini yumshatmoq)', correct: true, feedback: 'To‘g‘ri! Mitigate = xavf yoki zararni kamaytirish.' },
            { text: 'To completely erase to zero.', correct: false, feedback: 'Noto‘g‘ri.' }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which word best collocates with "mitigate"?',
          options: ['Risk', 'Cake', 'Sunset', 'Bicycle'],
          answer: 0,
          explanation: '"Mitigate risk" akademik va biznesda eng muhim birikmadir.'
        }
      ],
      matching: [
        { left: '🛡️ Mitigate', right: 'Lessen severity of harm' },
        { left: '🌐 Ubiquitous', right: 'Found universally everywhere' },
        { left: '🔬 Meticulous', right: 'Painstaking attention to detail' },
        { left: '⚡ Catalyze', right: 'Accelerate or stimulate change' }
      ],
      fillBlank: {
        sentence: 'Engineers designed barriers to ___ the devastating impact of storms.',
        options: ['mitigate', 'destroy', 'postpone'],
        correct: 'mitigate',
        explanation: '"Mitigate the impact" — zararni kamaytirmoq.'
      },
      teacherNotes: {
        elicitation: '"Everywhere" so‘zini o‘rniga C1 darajadagi akademik so‘z qaysi?',
        commonMistake: 'Rasmiy inshoda oddiy "good", "bad", "big" so‘zlarini ko‘p ishlatish.',
        quickCcq: 'Does meticulous work involve sloppy haste?'
      }
    }
,

    'a1-family-people': {
      "id": "a1-family-people",
      "levelId": "a1",
      "title": "Family Members & Character (Oila va Xarakter)",
      "category": "People & Relationships",
      "icon": "fa-people-roof",
      "description": "Describe family trees, personal appearances, and personality traits naturally in English.",
      "overview": "Oila a’zolari, insonlarning tashqi ko‘rinishi va fe’l-atvori.",
      "flashcards": [
            {
                  "word": "Sibling",
                  "uz": "Aka-uka yoki opa-singil",
                  "phonetic": "/ˈsɪb.lɪŋ/",
                  "pronunciation_uz": "[sib-ling]",
                  "pos": "Noun",
                  "definition": "A brother or sister.",
                  "example": "I have two siblings: an older brother and a younger sister.",
                  "chunk": "have two siblings"
            },
            {
                  "word": "Generous",
                  "uz": "Saxiy, qo‘li ochiq",
                  "phonetic": "/ˈdʒen.ər.əs/",
                  "pronunciation_uz": "[jen-er-as]",
                  "pos": "Adjective",
                  "definition": "Willing to give money, help, or kindness freely.",
                  "example": "My grandfather is very generous and always helps neighbors.",
                  "chunk": "a generous person"
            },
            {
                  "word": "Patient",
                  "uz": "Sabrli, bosiq",
                  "phonetic": "/ˈpeɪ.ʃənt/",
                  "pronunciation_uz": "[pey-shent]",
                  "pos": "Adjective",
                  "definition": "Able to accept delays or problems without becoming angry.",
                  "example": "A good teacher must be extremely patient with young learners.",
                  "chunk": "stay calm and patient"
            },
            {
                  "word": "Resemble",
                  "uz": "O‘xshamoq",
                  "phonetic": "/rɪˈzem.bəl/",
                  "pronunciation_uz": "[ri-zem-bl]",
                  "pos": "Verb",
                  "definition": "To look like or be similar to an older relative.",
                  "example": "She resembles her mother in both looks and smile.",
                  "chunk": "resemble closely"
            }
      ],
      "grammar": {
            "rule": "Possessive 's and Adjectives of Appearance",
            "formula": "Subject + have/has got + [Adjective] + [Noun]  |  [Name]'s + [Family member]",
            "explanation_uz": "Egalik qo‘shimchasi ('s) va tashqi ko‘rinishni ifodalashda \"have/has got\" yoki \"is/are\" ishlatiladi.",
            "examples": [
                  {
                        "en": "My brother's hair is wavy and brown.",
                        "uz": "Akamning sochi to‘lqinsimon va jigarrang.",
                        "breakdown": "brother's (akamning) + wavy hair"
                  },
                  {
                        "en": "She is friendly, outgoing, and very hardworking.",
                        "uz": "U samimiy, kirishimli va juda mehnatkash.",
                        "breakdown": "is + character adjectives"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If someone is \"generous\", do they keep all their money to themselves?",
                  "options": [
                        {
                              "text": "No, they share and help others freely",
                              "correct": true,
                              "feedback": "To‘g‘ri! Saxiy inson ulashadi."
                        },
                        {
                              "text": "Yes, they never share anything",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "👨‍👧 Father and Daughter",
                  "right": "Close family bond"
            },
            {
                  "left": "🎁 Generous friend",
                  "right": "Loves giving and helping"
            },
            {
                  "left": "⏳ Patient teacher",
                  "right": "Never loses temper"
            },
            {
                  "left": "👥 Sibling connection",
                  "right": "Brother or sister"
            }
      ],
      "fillBlank": {
            "sentence": "My uncle is very ___; he always listens to everyone calmly.",
            "options": [
                  "patient",
                  "angry",
                  "lazy"
            ],
            "correct": "patient",
            "explanation": "Bosiqlik bilan eshitish sabrli (patient) insonga xos."
      },
      "teacherNotes": {
            "elicitation": "Show family photo: \"Who is this person in relation to you?\"",
            "commonMistake": "Using \"have\" instead of \"is\" for age: \"I have 20 years\" (Say: \"I am 20\").",
            "quickCcq": "Does your sibling have to be older than you?"
      }
},

    'a1-places-directions': {
      "id": "a1-places-directions",
      "levelId": "a1",
      "title": "Town Places & Directions (Shahar va Yo‘nalishlar)",
      "category": "Places & Navigation",
      "icon": "fa-map-location-dot",
      "description": "Navigate modern cities, identify public buildings, and ask for directions politely.",
      "overview": "Shahar binolari, manzilni so‘rash va yo‘l ko‘rsatish iboralari.",
      "flashcards": [
            {
                  "word": "Crossroads",
                  "uz": "Chorraha",
                  "phonetic": "/ˈkrɒs.rəʊdz/",
                  "pronunciation_uz": "[kros-roudz]",
                  "pos": "Noun",
                  "definition": "A place where two or more roads intersect.",
                  "example": "Turn right at the next busy crossroads.",
                  "chunk": "at the crossroads"
            },
            {
                  "word": "Pedestrian",
                  "uz": "Piyoda yo‘lovchi",
                  "phonetic": "/pəˈdes.tri.ən/",
                  "pronunciation_uz": "[pe-des-tri-an]",
                  "pos": "Noun",
                  "definition": "A person walking along a street rather than in a vehicle.",
                  "example": "Vehicles must stop for pedestrians at the zebra crossing.",
                  "chunk": "pedestrian crossing"
            },
            {
                  "word": "Opposite",
                  "uz": "Ro‘parasida, qarshisida",
                  "phonetic": "/ˈɒp.ə.zɪt/",
                  "pronunciation_uz": "[op-o-zit]",
                  "pos": "Preposition",
                  "definition": "Directly across from something or facing it.",
                  "example": "The national museum is located opposite the central bank.",
                  "chunk": "opposite the station"
            },
            {
                  "word": "Straight ahead",
                  "uz": "To‘g‘riga",
                  "phonetic": "/streɪt əˈhed/",
                  "pronunciation_uz": "[streyt e-hed]",
                  "pos": "Phrase",
                  "definition": "Continuing in the same forward direction without turning.",
                  "example": "Go straight ahead for 200 meters until you see the park.",
                  "chunk": "go straight ahead"
            }
      ],
      "grammar": {
            "rule": "Imperatives for Giving Directions & Prepositions of Place",
            "formula": "Turn [left/right] + at the [place]  |  Go straight ahead  |  It is [next to / opposite / between]",
            "explanation_uz": "Yo‘l ko‘rsatishda buyruq mayli (Turn left, Go straight) va joy predloglari (opposite, next to) qo‘llanadi.",
            "examples": [
                  {
                        "en": "Excuse me, how do I get to the pharmacy?",
                        "uz": "Kechirasiz, dorixonaga qanday borsam bo‘ladi?",
                        "breakdown": "Excuse me + how do I get to..."
                  },
                  {
                        "en": "Go straight ahead and turn right at the traffic lights.",
                        "uz": "To‘g‘riga boring va svetofordan o‘ngga buriling.",
                        "breakdown": "Go straight + turn right"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If a bank is \"opposite\" the library, is it on the same side or across the street?",
                  "options": [
                        {
                              "text": "Across the street facing it",
                              "correct": true,
                              "feedback": "To‘g‘ri! Ro‘parasida, yo‘lning narigi tomonida."
                        },
                        {
                              "text": "Inside the library building",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "➡️ Turn right",
                  "right": "Change direction to the right"
            },
            {
                  "left": "⬆️ Go straight ahead",
                  "right": "Continue forward without turning"
            },
            {
                  "left": "🏬 Opposite the mall",
                  "right": "Across the street from the mall"
            },
            {
                  "left": "🚦 Traffic lights",
                  "right": "Signal for stopping and going"
            }
      ],
      "fillBlank": {
            "sentence": "Excuse me, could you tell me where the nearest ___ is? I need some medicine.",
            "options": [
                  "pharmacy",
                  "cinema",
                  "gym"
            ],
            "correct": "pharmacy",
            "explanation": "Dori-darmon dorixonadan (pharmacy) olinadi."
      },
      "teacherNotes": {
            "elicitation": "Draw simple map on board: \"Where is the post office relative to the bank?\"",
            "commonMistake": "Saying \"turn to left\" instead of natural \"turn left\".",
            "quickCcq": "Can you go straight ahead if there is a wall in front of you?"
      }
},

    'a2-past-continuous': {
      "id": "a2-past-continuous",
      "levelId": "a2",
      "title": "Past Continuous vs Past Simple (O‘tgan Davomiy Zamon)",
      "category": "Grammar & Narratives",
      "icon": "fa-timeline",
      "description": "Master interrupted actions, background scenes, and storytelling using was/were + V-ing.",
      "overview": "O‘tmishda davom etayotgan jarayonlar va ularni to‘xtatgan voqealar.",
      "flashcards": [
            {
                  "word": "Simultaneous",
                  "uz": "Bir vaqtda sodir bo‘ladigan",
                  "phonetic": "/ˌsɪm.əlˈteɪ.ni.əs/",
                  "pronunciation_uz": "[sim-ul-tey-ni-as]",
                  "pos": "Adjective",
                  "definition": "Happening or existing at exactly the same time.",
                  "example": "The two explosions were simultaneous.",
                  "chunk": "simultaneous actions"
            },
            {
                  "word": "Interrupt",
                  "uz": "Bo‘lmoq, to‘xtatib qo‘ymoq",
                  "phonetic": "/ˌɪn.təˈrʌpt/",
                  "pronunciation_uz": "[in-ter-rapt]",
                  "pos": "Verb",
                  "definition": "To stop an ongoing process or speaker suddenly.",
                  "example": "A loud phone call interrupted our study session.",
                  "chunk": "interrupt the flow"
            },
            {
                  "word": "Background",
                  "uz": "Orqa fon, sharoit",
                  "phonetic": "/ˈbæk.ɡraʊnd/",
                  "pronunciation_uz": "[bek-graund]",
                  "pos": "Noun",
                  "definition": "The conditions or situation that form the setting for an event.",
                  "example": "Birds were singing in the background as we spoke.",
                  "chunk": "background scene"
            },
            {
                  "word": "While",
                  "uz": "Davomida, -ayotgan paytda",
                  "phonetic": "/waɪl/",
                  "pronunciation_uz": "[wayl]",
                  "pos": "Conjunction",
                  "definition": "During the time that something else is occurring.",
                  "example": "While I was cooking dinner, the doorbell rang.",
                  "chunk": "while I was reading"
            }
      ],
      "grammar": {
            "rule": "Past Continuous for Background Actions Interrupted by Past Simple",
            "formula": "While + [Subject + was/were + V-ing], [Subject + V2 (Past Simple)]",
            "explanation_uz": "Uzoq davom etayotgan harakat (Past Continuous) to‘satdan sodir bo‘lgan qisqa harakat (Past Simple) bilan to‘qnashadi.",
            "examples": [
                  {
                        "en": "I was driving home when it suddenly started to snow heavily.",
                        "uz": "Uyga mashinada ketayotgan edim, birdan qor yog‘a boshladi.",
                        "breakdown": "was driving (uzoq jarayon) + started (keskin to‘xtash)"
                  },
                  {
                        "en": "While she was studying in the library, her phone vibrated.",
                        "uz": "U kutubxonada dars qilayotgan paytda, telefoni jiringladi.",
                        "breakdown": "was studying + vibrated"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In \"I was sleeping when the alarm rang\", which action started first and took longer?",
                  "options": [
                        {
                              "text": "Sleeping was the continuous ongoing action",
                              "correct": true,
                              "feedback": "To‘g‘ri! Uyqu davom etayotgan jarayon edi."
                        },
                        {
                              "text": "The alarm was ringing for hours first",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "📖 Was reading a book",
                  "right": "Long background action"
            },
            {
                  "left": "⚡ Suddenly lights went out",
                  "right": "Short interrupting event"
            },
            {
                  "left": "⏳ While we were walking",
                  "right": "Continuous time connector"
            },
            {
                  "left": "🔔 When the phone rang",
                  "right": "Point in time marker"
            }
      ],
      "fillBlank": {
            "sentence": "While they ___ dinner, someone knocked loudly on the door.",
            "options": [
                  "were having",
                  "had",
                  "have"
            ],
            "correct": "were having",
            "explanation": "\"While\" dan keyin o‘tgan zamondagi davomli jarayon uchun \"were having\" kerak."
      },
      "teacherNotes": {
            "elicitation": "Mime reading a book, then drop your keys loudly: \"What was I doing when the keys fell?\"",
            "commonMistake": "Using \"when\" with continuous and \"while\" with past simple backwards.",
            "quickCcq": "Can you use Past Continuous for an instantaneous action like blinking?"
      }
},

    'a2-comparatives-superlatives': {
      "id": "a2-comparatives-superlatives",
      "levelId": "a2",
      "title": "Comparatives & Superlatives (Qiyosiy va Orttirma Sifatlar)",
      "category": "Descriptive Mastery",
      "icon": "fa-scale-balanced",
      "description": "Compare items, people, and cities accurately using -er/more than and the -est/most.",
      "overview": "Narsalarni bir-biri bilan solishtirish va eng ustun darajani ifodalash.",
      "flashcards": [
            {
                  "word": "Superior",
                  "uz": "Ustunroq, sifatliroq",
                  "phonetic": "/suːˈpɪə.ri.ər/",
                  "pronunciation_uz": "[su-pi-ri-or]",
                  "pos": "Adjective",
                  "definition": "Better in quality or value than others.",
                  "example": "This laptop model is clearly superior to the older version.",
                  "chunk": "superior quality"
            },
            {
                  "word": "Considerably",
                  "uz": "Ancha, sezilarli darajada",
                  "phonetic": "/kənˈsɪd.ər.ə.bli/",
                  "pronunciation_uz": "[kon-sid-er-eb-li]",
                  "pos": "Adverb",
                  "definition": "By a notable or large degree.",
                  "example": "The new express train is considerably faster than the bus.",
                  "chunk": "considerably faster"
            },
            {
                  "word": "Identical",
                  "uz": "Bir xil, aynan o‘zi",
                  "phonetic": "/aɪˈden.tɪ.kəl/",
                  "pronunciation_uz": "[ay-den-ti-kl]",
                  "pos": "Adjective",
                  "definition": "Exactly the same in appearance or nature.",
                  "example": "The two twin sisters wore identical green dresses.",
                  "chunk": "identical twins"
            },
            {
                  "word": "Crowded",
                  "uz": "Gavjum, odam ko‘p",
                  "phonetic": "/ˈkraʊ.dɪd/",
                  "pronunciation_uz": "[krau-did]",
                  "pos": "Adjective",
                  "definition": "Full of people, leaving little empty room.",
                  "example": "Tokyo has some of the most crowded subways in the world.",
                  "chunk": "extremely crowded"
            }
      ],
      "grammar": {
            "rule": "Comparative (-er / more than) and Superlative (the -est / the most)",
            "formula": "Short adj: [adj]-er than  |  the [adj]-est  ||  Long adj: more [adj] than  |  the most [adj]",
            "explanation_uz": "Bir bo‘g‘inli sifatlarga \"-er / -est\", ko‘p bo‘g‘inlilar oldiga esa \"more / the most\" qo‘shiladi.",
            "examples": [
                  {
                        "en": "Tashkent is much bigger than Samarkand.",
                        "uz": "Toshkent Samarqanddan ancha kattaroq.",
                        "breakdown": "big -> bigger (undosh ikkilanadi)"
                  },
                  {
                        "en": "Mount Everest is the highest mountain on Earth.",
                        "uz": "Everest Yer yuzidagi eng baland tog‘dir.",
                        "breakdown": "high -> the highest"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If City A is \"more expensive than\" City B, which one requires more money?",
                  "options": [
                        {
                              "text": "City A requires more money",
                              "correct": true,
                              "feedback": "To‘g‘ri! Qimmatrog‘i A shahar."
                        },
                        {
                              "text": "City B is more costly",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "📈 Better than",
                  "right": "Irregular comparative of good"
            },
            {
                  "left": "📉 Worse than",
                  "right": "Irregular comparative of bad"
            },
            {
                  "left": "🏆 The best in the world",
                  "right": "Top superlative ranking"
            },
            {
                  "left": "⚖️ As tall as",
                  "right": "Equal comparison structure"
            }
      ],
      "fillBlank": {
            "sentence": "This smartphone is the ___ modern gadget currently available on the market.",
            "options": [
                  "most",
                  "more",
                  "much"
            ],
            "correct": "most",
            "explanation": "Orttirma darajada \"the most modern\" deyiladi."
      },
      "teacherNotes": {
            "elicitation": "Hold two pens of different lengths: \"Which pen is longer?\"",
            "commonMistake": "Saying \"more better\" or forgetting \"the\" in superlatives (\"He is tallest\").",
            "quickCcq": "Can you say \"more cheap\" instead of \"cheaper\"?"
      }
},

    'a2-countable-uncountable': {
      "id": "a2-countable-uncountable",
      "levelId": "a2",
      "title": "Countable vs Uncountable & Quantifiers (Sanaladigan va Sanalmaydigan Otlar)",
      "category": "Grammar & Quantity",
      "icon": "fa-cubes-stacked",
      "description": "Master some, any, much, many, a lot of, a few, and a little with precision.",
      "overview": "Miqdor so‘zlari: sanaladigan va sanalmaydigan narsalarni to‘g‘ri ifodalash.",
      "flashcards": [
            {
                  "word": "Quantity",
                  "uz": "Miqdor, hajm",
                  "phonetic": "/ˈkwɒn.tə.ti/",
                  "pronunciation_uz": "[kwon-ti-ti]",
                  "pos": "Noun",
                  "definition": "The amount or number of a material or object.",
                  "example": "We need a large quantity of fresh drinking water.",
                  "chunk": "a huge quantity"
            },
            {
                  "word": "Ingredient",
                  "uz": "Masalliq, tarkibiy qism",
                  "phonetic": "/ɪnˈɡriː.di.ənt/",
                  "pronunciation_uz": "[in-gri-di-ent]",
                  "pos": "Noun",
                  "definition": "A food component used to prepare a dish.",
                  "example": "Flour and eggs are essential ingredients for baking bread.",
                  "chunk": "fresh ingredients"
            },
            {
                  "word": "Sufficient",
                  "uz": "Yetarli, yetarli darajada",
                  "phonetic": "/səˈfɪʃ.ənt/",
                  "pronunciation_uz": "[se-fish-ent]",
                  "pos": "Adjective",
                  "definition": "Enough for a particular purpose or need.",
                  "example": "Make sure you have sufficient sleep before the exam.",
                  "chunk": "sufficient time"
            },
            {
                  "word": "Scarcity",
                  "uz": "Taqchillik, kamyoblik",
                  "phonetic": "/ˈskeə.sə.ti/",
                  "pronunciation_uz": "[skeo-si-ti]",
                  "pos": "Noun",
                  "definition": "A situation in which something is difficult to find.",
                  "example": "Water scarcity is a major global ecological concern.",
                  "chunk": "water scarcity"
            }
      ],
      "grammar": {
            "rule": "Countable (many, a few) vs Uncountable (much, a little)",
            "formula": "Countable: many books, a few friends  |  Uncountable: much water, a little sugar",
            "explanation_uz": "Sanaladigan otlar donalab hisoblanadi (many, few). Sanalmaydigan otlar hajm bilan o‘lchanadi (much, little).",
            "examples": [
                  {
                        "en": "There are a lot of students in the lecture hall.",
                        "uz": "Ma’ruzalar zalida ko‘plab talabalar bor.",
                        "breakdown": "a lot of (ham sanaladigan, ham sanalmaydigan bilan keladi)"
                  },
                  {
                        "en": "I have very little time left to catch my flight.",
                        "uz": "Parvozimga yetib olish uchun juda oz vaqtim qoldi.",
                        "breakdown": "little time (vaqt sanalmaydi)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "Is \"money\" grammatically countable or uncountable in English?",
                  "options": [
                        {
                              "text": "Uncountable (we say \"much money\", not \"many moneys\")",
                              "correct": true,
                              "feedback": "To‘g‘ri! Dollar va so‘m sanaladi, ammo \"money\" so‘zi o‘zi sanalmaydi."
                        },
                        {
                              "text": "Countable (one money, two moneys)",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🍎 Many apples",
                  "right": "Plural countable items"
            },
            {
                  "left": "💧 Much water",
                  "right": "Non-countable liquid"
            },
            {
                  "left": "⏳ A little patience",
                  "right": "Small amount of non-countable quality"
            },
            {
                  "left": "👥 A few teammates",
                  "right": "Small number of countable people"
            }
      ],
      "fillBlank": {
            "sentence": "Could you lend me ___ dollars until tomorrow morning?",
            "options": [
                  "a few",
                  "a little",
                  "much"
            ],
            "correct": "a few",
            "explanation": "Dollar sanaladigan ot bo‘lgani uchun \"a few dollars\" deyiladi."
      },
      "teacherNotes": {
            "elicitation": "Show a handful of coins vs a glass of water: \"Which can I count 1, 2, 3?\"",
            "commonMistake": "Saying \"an advice\" or \"informations\" (both are strictly uncountable).",
            "quickCcq": "Can you count furniture?"
      }
},

    'a2-health-feelings': {
      "id": "a2-health-feelings",
      "levelId": "a2",
      "title": "Health, Illnesses & Wellbeing (Salomatlik va Hissiyotlar)",
      "category": "Daily Living",
      "icon": "fa-heart-pulse",
      "description": "Explain symptoms at the doctor, express emotions, and offer compassionate health advice.",
      "overview": "Shifokor qabulida alomatlarni tushuntirish, hissiyotlar va salomatlik tavsiyalari.",
      "flashcards": [
            {
                  "word": "Symptom",
                  "uz": "Alomat, simptom",
                  "phonetic": "/ˈsɪmp.təm/",
                  "pronunciation_uz": "[simp-tem]",
                  "pos": "Noun",
                  "definition": "A physical sign of an illness or medical condition.",
                  "example": "A persistent high fever is a common symptom of the flu.",
                  "chunk": "show mild symptoms"
            },
            {
                  "word": "Prescription",
                  "uz": "Retsept (shifokor yozgan)",
                  "phonetic": "/prɪˈskrɪp.ʃən/",
                  "pronunciation_uz": "[pri-skrip-shen]",
                  "pos": "Noun",
                  "definition": "A written paper from a doctor for medical treatment.",
                  "example": "The pharmacist carefully prepared my antibiotic prescription.",
                  "chunk": "write a prescription"
            },
            {
                  "word": "Exhausted",
                  "uz": "O‘ta charchagan, darmonsiz",
                  "phonetic": "/ɪɡˈzɔː.stɪd/",
                  "pronunciation_uz": "[ig-zost-id]",
                  "pos": "Adjective",
                  "definition": "Completely drained of energy and strength.",
                  "example": "After running the marathon, the athlete was utterly exhausted.",
                  "chunk": "feel totally exhausted"
            },
            {
                  "word": "Anxious",
                  "uz": "Xavotirlangan, bezovta",
                  "phonetic": "/ˈæŋk.ʃəs/",
                  "pronunciation_uz": "[enk-shes]",
                  "pos": "Adjective",
                  "definition": "Worried, uneasy, and nervous about future events.",
                  "example": "He felt slightly anxious before walking into the interview.",
                  "chunk": "anxious about results"
            }
      ],
      "grammar": {
            "rule": "Expressing Symptoms with \"Have got\" and Giving Advice with \"Should\"",
            "formula": "I have got a [headache/fever/cough]  |  You should [rest / see a doctor]",
            "explanation_uz": "Kasallik alomatlarida \"I have got a...\", maslahat berishda esa \"You should...\" ishlatiladi.",
            "examples": [
                  {
                        "en": "I have got a sore throat and a mild headache.",
                        "uz": "Tog‘og‘im og‘riyapti va yengil bosh og‘rig‘i bor.",
                        "breakdown": "have got + illness"
                  },
                  {
                        "en": "You should drink plenty of warm herbal tea and rest.",
                        "uz": "Ko‘p iliq giyohli choy ichishingiz va dam olishingiz kerak.",
                        "breakdown": "should + V1"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you \"should\" take medication, is it mandatory by police law or recommended advice?",
                  "options": [
                        {
                              "text": "It is recommended medical advice for your benefit",
                              "correct": true,
                              "feedback": "To‘g‘ri! Maslahat va tavsiya."
                        },
                        {
                              "text": "You will go to prison if you do not",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🤕 Splitting headache",
                  "right": "Severe head pain"
            },
            {
                  "left": "💊 Painkiller tablet",
                  "right": "Medicine that reduces aches"
            },
            {
                  "left": "🛌 Bed rest",
                  "right": "Staying in bed to recover"
            },
            {
                  "left": "🌡️ High temperature",
                  "right": "Fever above normal body heat"
            }
      ],
      "fillBlank": {
            "sentence": "You look very pale and unwell. You ___ see a physician immediately.",
            "options": [
                  "should",
                  "might to",
                  "can to"
            ],
            "correct": "should",
            "explanation": "Tavsiya bildirishda \"should\" modal fe’li to‘g‘ri keladi."
      },
      "teacherNotes": {
            "elicitation": "Hold forehead and grimace: \"What is the matter with me?\" (Headache).",
            "commonMistake": "Saying \"I have headache\" without article \"a\" (Correct: \"I have a headache\").",
            "quickCcq": "Does \"exhausted\" mean just a little bit sleepy?"
      }
},

    'a2-travel-transport': {
      "id": "a2-travel-transport",
      "levelId": "a2",
      "title": "Travel, Transport & Booking (Sayohat va Transport)",
      "category": "Travel & Mobility",
      "icon": "fa-plane-departure",
      "description": "Book accommodations, navigate airports and train stations, and arrange holiday journeys.",
      "overview": "Chipta xarid qilish, vokzal va aeroportda muloqot, mehmonxona bron qilish.",
      "flashcards": [
            {
                  "word": "Reservation",
                  "uz": "Oldindan band qilish (bron)",
                  "phonetic": "/ˌrez.əˈveɪ.ʃən/",
                  "pronunciation_uz": "[rez-er-vey-shen]",
                  "pos": "Noun",
                  "definition": "An arrangement to secure a seat, room, or table in advance.",
                  "example": "I have made a hotel reservation under the name Alimov.",
                  "chunk": "make a reservation"
            },
            {
                  "word": "Departure",
                  "uz": "Jo‘nab ketish",
                  "phonetic": "/dɪˈpɑː.tʃər/",
                  "pronunciation_uz": "[di-par-cher]",
                  "pos": "Noun",
                  "definition": "The act of leaving a place at the start of a trip.",
                  "example": "The flight departure is scheduled for exactly 10:15 AM.",
                  "chunk": "departure lounge"
            },
            {
                  "word": "Destination",
                  "uz": "Boradigan manzil",
                  "phonetic": "/ˌdes.tɪˈneɪ.ʃən/",
                  "pronunciation_uz": "[des-ti-ney-shen]",
                  "pos": "Noun",
                  "definition": "The ultimate place to which someone is traveling.",
                  "example": "Paris is one of the most visited tourist destinations.",
                  "chunk": "final destination"
            },
            {
                  "word": "Delay",
                  "uz": "Kechikish",
                  "phonetic": "/dɪˈleɪ/",
                  "pronunciation_uz": "[di-ley]",
                  "pos": "Noun",
                  "definition": "A period of time by which something is late.",
                  "example": "We apologize for the 30-minute delay due to mechanical inspection.",
                  "chunk": "flight delay"
            }
      ],
      "grammar": {
            "rule": "Present Continuous for Fixed Travel Arrangements & Prepositions of Transport",
            "formula": "Subject + am/is/are + V-ing + [future time]  |  By train / by plane / on foot",
            "explanation_uz": "Oldindan aniq chiptasi olingan sayohatlar uchun Present Continuous ishlatiladi.",
            "examples": [
                  {
                        "en": "We are flying to Istanbul next Tuesday morning.",
                        "uz": "Kelasi seshanba ertalab Istanbulga uchib ketayapmiz.",
                        "breakdown": "are flying (aniq chipta olingan reja)"
                  },
                  {
                        "en": "I usually travel to the historical center on foot.",
                        "uz": "Tarixiy markazga odatda piyoda boraman.",
                        "breakdown": "on foot (piyoda)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you travel \"on foot\", are you riding a bus or walking with your shoes?",
                  "options": [
                        {
                              "text": "Walking on your own feet",
                              "correct": true,
                              "feedback": "To‘g‘ri! Piyoda yurish."
                        },
                        {
                              "text": "Riding a bicycle",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🛫 Flight departure",
                  "right": "Plane leaving the runway"
            },
            {
                  "left": "🛬 Plane arrival",
                  "right": "Plane landing safely"
            },
            {
                  "left": "🏨 Hotel check-in",
                  "right": "Registering at the front reception"
            },
            {
                  "left": "🎫 Round-trip ticket",
                  "right": "Ticket for going and coming back"
            }
      ],
      "fillBlank": {
            "sentence": "I would like to book a ___ ticket to London and back to Tashkent.",
            "options": [
                  "round-trip",
                  "one-way",
                  "single"
            ],
            "correct": "round-trip",
            "explanation": "Borib-qaytish chiptasi \"round-trip\" (yoki \"return ticket\") deyiladi."
      },
      "teacherNotes": {
            "elicitation": "Show a passport and airplane boarding pass: \"Where am I going?\"",
            "commonMistake": "Saying \"by foot\" instead of the standard \"on foot\".",
            "quickCcq": "Does a one-way ticket bring you back home?"
      }
},

    'b1-passive-voice': {
      "id": "b1-passive-voice",
      "levelId": "b1",
      "title": "Passive Voice (Majhul Nisbat: Jarayon va Ixtirolar)",
      "category": "Grammar in Depth",
      "icon": "fa-gears",
      "description": "Shift focus from the doer to the action, processes, and historical discoveries.",
      "overview": "Ish-harakat ijrochisi emas, uning o‘zi va natijasi muhim bo‘lganda qo‘llanadigan tuzilma.",
      "flashcards": [
            {
                  "word": "Manufacture",
                  "uz": "Ishlab chiqarmoq, tayyorlamoq",
                  "phonetic": "/ˌmæn.jəˈfæk.tʃər/",
                  "pronunciation_uz": "[men-yu-fek-cher]",
                  "pos": "Verb",
                  "definition": "To produce goods in large quantities using machinery.",
                  "example": "These microchips are manufactured in specialized cleanrooms.",
                  "chunk": "manufactured locally"
            },
            {
                  "word": "Discover",
                  "uz": "Kashf qilmoq, topmoq",
                  "phonetic": "/dɪˈskʌv.ər/",
                  "pronunciation_uz": "[di-skav-er]",
                  "pos": "Verb",
                  "definition": "To find something unexpectedly or in the course of a search.",
                  "example": "Penicillin was discovered by Alexander Fleming in 1928.",
                  "chunk": "discovered by chance"
            },
            {
                  "word": "Construct",
                  "uz": "Qurmoq, bino qilmoq",
                  "phonetic": "/kənˈstrʌkt/",
                  "pronunciation_uz": "[kon-strakt]",
                  "pos": "Verb",
                  "definition": "To build or erect something large like a bridge or building.",
                  "example": "The high-speed rail line was constructed within two years.",
                  "chunk": "constructed rapidly"
            },
            {
                  "word": "Distribute",
                  "uz": "Tarqatmoq, yetkazmoq",
                  "phonetic": "/dɪˈstrɪb.juːt/",
                  "pronunciation_uz": "[di-strib-yut]",
                  "pos": "Verb",
                  "definition": "To deliver or supply goods to retailers and customers.",
                  "example": "The textbooks are distributed to schools every September.",
                  "chunk": "widely distributed"
            }
      ],
      "grammar": {
            "rule": "Passive Voice Formula: Subject + to be + Past Participle (V3)",
            "formula": "Present: am/is/are + V3  |  Past: was/were + V3  |  Agent: by [person]",
            "explanation_uz": "Majhul nisbatda asosiy e’tibor harakat ob’yektiga qaratiladi: \"The bridge was built in 1995\".",
            "examples": [
                  {
                        "en": "English is spoken by millions of people across the globe.",
                        "uz": "Ingliz tili butun dunyo bo‘ylab millionlab insonlar tomonidan so‘zlashiladi.",
                        "breakdown": "is spoken (gapiriladi)"
                  },
                  {
                        "en": "The electricity was invented over a century ago.",
                        "uz": "Elektr energiyasi bir asrdan ko‘proq vaqt oldin kashf etilgan.",
                        "breakdown": "was invented"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In \"The window was broken by a soccer ball\", did the window break itself?",
                  "options": [
                        {
                              "text": "No, the ball acted upon the window (Passive)",
                              "correct": true,
                              "feedback": "To‘g‘ri! Oyna majhul nisbatda harakat qabul qildi."
                        },
                        {
                              "text": "Yes, the window broke on its own decision",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🏛️ Was built in 1400",
                  "right": "Past simple passive history"
            },
            {
                  "left": "📦 Is delivered daily",
                  "right": "Present simple passive routine"
            },
            {
                  "left": "👤 By the author",
                  "right": "Agent introducing the original creator"
            },
            {
                  "left": "✉️ Was sent yesterday",
                  "right": "Completed action received"
            }
      ],
      "fillBlank": {
            "sentence": "Millions of smartphones ___ every year in modern automated factories.",
            "options": [
                  "are produced",
                  "produced",
                  "is producing"
            ],
            "correct": "are produced",
            "explanation": "Ko‘plikdagi ot bilan Present Passive \"are produced\" bo‘ladi."
      },
      "teacherNotes": {
            "elicitation": "Hold up a smartphone: \"Who made this? Is the maker or the phone our main topic?\"",
            "commonMistake": "Forgetting the \"to be\" verb and saying \"The car made in Japan\" (Correct: \"was made\").",
            "quickCcq": "Do we always need to mention \"by someone\" in passive voice?"
      }
},

    'b1-relative-clauses': {
      "id": "b1-relative-clauses",
      "levelId": "b1",
      "title": "Defining & Non-Defining Relative Clauses (Nisbiy Ergash Gaplar)",
      "category": "Sentence Architecture",
      "icon": "fa-link",
      "description": "Combine sentences seamlessly using who, which, that, whose, and where.",
      "overview": "Gaplarni \"who, which, where, whose\" orqali birlashtirib, aniq ma’lumot berish.",
      "flashcards": [
            {
                  "word": "Acquaintance",
                  "uz": "Tanish inson",
                  "phonetic": "/əˈkweɪn.təns/",
                  "pronunciation_uz": "[e-kweyn-tens]",
                  "pos": "Noun",
                  "definition": "A person one knows slightly, but who is not a close friend.",
                  "example": "He is an acquaintance who works in international trade.",
                  "chunk": "a casual acquaintance"
            },
            {
                  "word": "Colleague",
                  "uz": "Hamkasb",
                  "phonetic": "/ˈkɒl.iːɡ/",
                  "pronunciation_uz": "[kol-ig]",
                  "pos": "Noun",
                  "definition": "A person with whom one works in a profession or business.",
                  "example": "The colleague whose presentation won the award is very modest.",
                  "chunk": "trusted colleague"
            },
            {
                  "word": "Landmark",
                  "uz": "Mo‘ljal bino, diqqatga sazovor joy",
                  "phonetic": "/ˈlænd.mɑːk/",
                  "pronunciation_uz": "[lend-mark]",
                  "pos": "Noun",
                  "definition": "An easily recognizable feature of a landscape or city.",
                  "example": "The clock tower, which was built in 1859, is a famous landmark.",
                  "chunk": "historic landmark"
            },
            {
                  "word": "Residence",
                  "uz": "Turar-joy, qarorgoh",
                  "phonetic": "/ˈrez.ɪ.dəns/",
                  "pronunciation_uz": "[rez-i-dens]",
                  "pos": "Noun",
                  "definition": "A person's home; the place where someone lives.",
                  "example": "This is the peaceful residence where the writer penned his novel.",
                  "chunk": "official residence"
            }
      ],
      "grammar": {
            "rule": "Relative Pronouns: Who (people), Which/That (things), Where (places), Whose (possession)",
            "formula": "Person + WHO + [verb]  |  Thing + WHICH/THAT + [verb]  |  Place + WHERE  |  Owner + WHOSE",
            "explanation_uz": "Insonlar uchun \"who\", buyumlar uchun \"which/that\", joylar uchun \"where\", egalik uchun \"whose\" qo‘llanadi.",
            "examples": [
                  {
                        "en": "The student who scored highest in the olympiad received a scholarship.",
                        "uz": "Olimpiadada eng yuqori ball olgan talaba stipendiya oldi.",
                        "breakdown": "student + who"
                  },
                  {
                        "en": "That is the cozy restaurant where we had our first meeting.",
                        "uz": "Bu biz birinchi uchrashuvimizni o‘tkazgan shinam restorandir.",
                        "breakdown": "restaurant + where"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "Can you use \"who\" to refer to a brand new car?",
                  "options": [
                        {
                              "text": "No, \"who\" is strictly for human beings",
                              "correct": true,
                              "feedback": "To‘g‘ri! Mashinalar uchun \"which\" yoki \"that\" ishlatiladi."
                        },
                        {
                              "text": "Yes, cars have personalities",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "👤 The doctor WHO treated me",
                  "right": "Person relative pronoun"
            },
            {
                  "left": "📱 The device THAT I purchased",
                  "right": "Inanimate object pronoun"
            },
            {
                  "left": "📍 The town WHERE I was born",
                  "right": "Geographical location pronoun"
            },
            {
                  "left": "💼 The author WHOSE book became famous",
                  "right": "Possession relative pronoun"
            }
      ],
      "fillBlank": {
            "sentence": "This is the dedicated teacher ___ inspired me to study linguistics.",
            "options": [
                  "who",
                  "which",
                  "where"
            ],
            "correct": "who",
            "explanation": "O‘qituvchi inson bo‘lgani uchun \"who\" nisbiy olmoshi qo‘yiladi."
      },
      "teacherNotes": {
            "elicitation": "Point to a student: \"This is Jasur. He solved the hardest riddle.\" -> \"This is Jasur who...\"",
            "commonMistake": "Using commas in defining relative clauses or using \"what\" instead of \"that\".",
            "quickCcq": "Does \"where\" require a preposition at the end of the clause?"
      }
},

    'b1-modals-deduction': {
      "id": "b1-modals-deduction",
      "levelId": "b1",
      "title": "Modals of Deduction & Probability (Mantiqiy Xulosa Modal Fe’llari)",
      "category": "Advanced Logic",
      "icon": "fa-magnifying-glass-chart",
      "description": "Deduce facts with certainty using must be (99%), might/could be (50%), and can't be (0%).",
      "overview": "Dalillarga asoslanib mantiqiy xulosa chiqarish: aniq (must), ehtimol (might), imkonsiz (can't).",
      "flashcards": [
            {
                  "word": "Deduction",
                  "uz": "Mantiqiy xulosa",
                  "phonetic": "/dɪˈdʌk.ʃən/",
                  "pronunciation_uz": "[di-dak-shen]",
                  "pos": "Noun",
                  "definition": "The process of reaching a logical conclusion based on evidence.",
                  "example": "Sherlock Holmes made a brilliant deduction from the wet footprints.",
                  "chunk": "logical deduction"
            },
            {
                  "word": "Inconceivable",
                  "uz": "Aqlga sig‘maydigan, imkonsiz",
                  "phonetic": "/ˌɪn.kənˈsiː.və.bəl/",
                  "pronunciation_uz": "[in-kon-si-vebl]",
                  "pos": "Adjective",
                  "definition": "Not capable of being imagined or believed; impossible.",
                  "example": "It is inconceivable that he committed the crime; he has an alibi.",
                  "chunk": "utterly inconceivable"
            },
            {
                  "word": "Plausible",
                  "uz": "Haqiqatga yaqin, ehtimoliy",
                  "phonetic": "/ˈplɔː.zə.bəl/",
                  "pronunciation_uz": "[plo-zibl]",
                  "pos": "Adjective",
                  "definition": "Seeming reasonable, probable, or likely to be true.",
                  "example": "His explanation for the flight delay sounded completely plausible.",
                  "chunk": "plausible explanation"
            },
            {
                  "word": "Certainty",
                  "uz": "Ishonch, qat’iylik",
                  "phonetic": "/ˈsɜː.tən.ti/",
                  "pronunciation_uz": "[ser-ten-ti]",
                  "pos": "Noun",
                  "definition": "Firm conviction that something is unquestionably the case.",
                  "example": "We can say with absolute certainty that water boils at 100°C.",
                  "chunk": "with complete certainty"
            }
      ],
      "grammar": {
            "rule": "Degrees of Certainty: Must (99% sure) vs Might/May (50% sure) vs Can't (Impossible)",
            "formula": "Must be + [adj/noun]  |  Might/Could be + [adj/noun]  |  Can't be + [adj/noun]",
            "explanation_uz": "Aniq shunday bo‘lsa \"must\", ehtimol bo‘lsa \"might/could\", bo‘lishi mutlaqo imkonsiz bo‘lsa \"can't\" ishlatiladi.",
            "examples": [
                  {
                        "en": "He has worked for 14 hours straight; he must be exhausted.",
                        "uz": "U ketma-ket 14 soat ishladi; shubhasiz juda charchagan bo‘lsa kerak.",
                        "breakdown": "must be (99% ishonch)"
                  },
                  {
                        "en": "That woman can't be his grandmother; she looks only 30 years old!",
                        "uz": "U ayol uning buvisi bo‘lishi mumkin emas; 30 yoshdek ko‘rinyapti!",
                        "breakdown": "can't be (mantiqan imkonsiz)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you say \"He can't be at home\", do you think he is probably at home or definitely not?",
                  "options": [
                        {
                              "text": "Definitely NOT at home based on evidence",
                              "correct": true,
                              "feedback": "To‘g‘ri! Imkonsiz xulosa."
                        },
                        {
                              "text": "He is definitely sleeping in his bed",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "💯 Must be true",
                  "right": "Almost 100% logical certainty"
            },
            {
                  "left": "❓ Might be true",
                  "right": "50% possibility, uncertain"
            },
            {
                  "left": "🚫 Can't be true",
                  "right": "Logically impossible based on facts"
            },
            {
                  "left": "🕵️ Detective clue",
                  "right": "Evidence leading to deduction"
            }
      ],
      "fillBlank": {
            "sentence": "The lights are off and their car is gone; they ___ be away on holiday.",
            "options": [
                  "must",
                  "can't",
                  "should to"
            ],
            "correct": "must",
            "explanation": "Uydagi chiroqlar o‘chiq va mashina yo‘qligi ularning ketganligini (must be) bildiradi."
      },
      "teacherNotes": {
            "elicitation": "Knock on door: \"Who is that? It is 3 AM.\" -> \"It can't be the postman!\"",
            "commonMistake": "Using \"mustn't\" for impossible deduction (Say \"can't be\", not \"mustn't be\").",
            "quickCcq": "Does \"could be\" mean you are 100% certain?"
      }
},

    'b1-gerunds-infinitives': {
      "id": "b1-gerunds-infinitives",
      "levelId": "b1",
      "title": "Verb Patterns: Gerunds vs Infinitives (Gerundiy va Infinitiv)",
      "category": "Grammar Precision",
      "icon": "fa-shuffle",
      "description": "Distinguish between verbs followed by -ing and verbs followed by to + V1 with meaning shifts.",
      "overview": "Qaysi fe’llardan keyin \"-ing\" va qaysilaridan keyin \"to\" kelishi va ularning ma’no farqi.",
      "flashcards": [
            {
                  "word": "Postpone",
                  "uz": "Keyinga qoldirmoq",
                  "phonetic": "/pəʊstˈpəʊn/",
                  "pronunciation_uz": "[poust-poun]",
                  "pos": "Verb",
                  "definition": "To delay an event until a later date (followed by Gerund).",
                  "example": "They decided to postpone signing the contract until next week.",
                  "chunk": "postpone doing something"
            },
            {
                  "word": "Hesitate",
                  "uz": "Ikkilanmoq",
                  "phonetic": "/ˈhez.ɪ.teɪt/",
                  "pronunciation_uz": "[hez-i-teyt]",
                  "pos": "Verb",
                  "definition": "To pause before saying or doing something (followed by Infinitive).",
                  "example": "Do not hesitate to ask any questions during our lecture.",
                  "chunk": "hesitate to ask"
            },
            {
                  "word": "Attempt",
                  "uz": "Urinmoq, harakat qilmoq",
                  "phonetic": "/əˈtempt/",
                  "pronunciation_uz": "[e-tempt]",
                  "pos": "Verb",
                  "definition": "To try to do something, typically without guaranteed success.",
                  "example": "She attempted to climb the rocky peak without safety ropes.",
                  "chunk": "attempt to achieve"
            },
            {
                  "word": "Regret",
                  "uz": "Afsuslanmoq",
                  "phonetic": "/rɪˈɡret/",
                  "pronunciation_uz": "[ri-gret]",
                  "pos": "Verb",
                  "definition": "To feel sad or remorseful about an action or decision.",
                  "example": "I regret telling him the confidential secret.",
                  "chunk": "regret doing something"
            }
      ],
      "grammar": {
            "rule": "Verbs + Gerund (-ing) vs Verbs + Infinitive (to + V1)",
            "formula": "Enjoy/Avoid/Mind + V-ing  |  Decide/Promise/Hope + to V1  |  Stop to do vs Stop doing",
            "explanation_uz": "\"Enjoy, avoid\" doimo \"-ing\" oladi. \"Decide, want\" doimo \"to\" oladi. \"Stop\" ikkala shaklda turlicha ma’noga ega.",
            "examples": [
                  {
                        "en": "I stopped smoking five years ago.",
                        "uz": "Men chekishni 5 yil oldin tashladim (butunlay to‘xtatdim).",
                        "breakdown": "stop + V-ing (odatni to‘xtatish)"
                  },
                  {
                        "en": "While driving, he stopped to buy a bottle of water.",
                        "uz": "Mashina haydab ketayotib, suv sotib olish uchun to‘xtadi.",
                        "breakdown": "stop + to V1 (boshqa ish uchun to‘xtash)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you \"remember to lock\" the door, did you lock it before or after remembering?",
                  "options": [
                        {
                              "text": "You remembered first, then locked it (duty)",
                              "correct": true,
                              "feedback": "To‘g‘ri! Eslab, so‘ng qulfladingiz."
                        },
                        {
                              "text": "You locked it first, then had a childhood memory",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🏊 Enjoy swimming",
                  "right": "Verb followed by gerund (-ing)"
            },
            {
                  "left": "🎯 Decide to participate",
                  "right": "Verb followed by infinitive (to)"
            },
            {
                  "left": "🛑 Stop smoking",
                  "right": "Permanently quit a habit"
            },
            {
                  "left": "☕ Stop to drink tea",
                  "right": "Pause ongoing motion in order to do"
            }
      ],
      "fillBlank": {
            "sentence": "He promised ___ me with my university research paper this weekend.",
            "options": [
                  "to help",
                  "helping",
                  "help"
            ],
            "correct": "to help",
            "explanation": "\"Promise\" fe’li o‘zidan keyin infinitiv (to help) talab qiladi."
      },
      "teacherNotes": {
            "elicitation": "Act out smoking, then throw cigarette away: \"I stopped smoking\" vs \"I stopped to smoke\".",
            "commonMistake": "Saying \"I enjoy to play tennis\" instead of \"I enjoy playing tennis\".",
            "quickCcq": "Does \"avoid\" take gerund or infinitive?"
      }
},

    'b2-third-mixed-conditionals': {
      "id": "b2-third-mixed-conditionals",
      "levelId": "b2",
      "title": "Third & Mixed Conditionals (Uchinchi va Aralash Shart Ergash Gaplar)",
      "category": "Complex Grammar",
      "icon": "fa-clock-rotate-left",
      "description": "Express profound past regrets and connect past decisions to present realities.",
      "overview": "O‘tmishdagi afsuslar va o‘tmishdagi qarorlarning bugungi kundagi oqibatlari.",
      "flashcards": [
            {
                  "word": "Remorse",
                  "uz": "Chuqur vijdon azobi, afsus",
                  "phonetic": "/rɪˈmɔːs/",
                  "pronunciation_uz": "[ri-mors]",
                  "pos": "Noun",
                  "definition": "Deep regret or guilt for a wrong committed.",
                  "example": "He felt overwhelming remorse for not studying harder.",
                  "chunk": "feel deep remorse"
            },
            {
                  "word": "Hypothetical",
                  "uz": "Faraziy, taxminiy",
                  "phonetic": "/ˌhaɪ.pəˈθet.ɪ.kəl/",
                  "pronunciation_uz": "[hay-po-tet-i-kl]",
                  "pos": "Adjective",
                  "definition": "Based on a situation that is not real but imagined.",
                  "example": "Let us consider a hypothetical situation where resources are endless.",
                  "chunk": "hypothetical scenario"
            },
            {
                  "word": "Repercussion",
                  "uz": "Aks sado, uzoq muddatli oqibat",
                  "phonetic": "/ˌriː.pəˈkʌʃ.ən/",
                  "pronunciation_uz": "[ri-per-kash-en]",
                  "pos": "Noun",
                  "definition": "An unintended consequence occurring some time after an event.",
                  "example": "His hasty decision had serious financial repercussions.",
                  "chunk": "severe repercussions"
            },
            {
                  "word": "Retrospect",
                  "uz": "O‘tmishga nazar",
                  "phonetic": "/ˈret.rə.spekt/",
                  "pronunciation_uz": "[ret-ro-spekt]",
                  "pos": "Noun",
                  "definition": "A survey or review of a past course of events.",
                  "example": "In retrospect, moving abroad was the best decision of my life.",
                  "chunk": "in retrospect"
            }
      ],
      "grammar": {
            "rule": "Third Conditional (Past -> Past) and Mixed Conditional (Past -> Present)",
            "formula": "Third: If + had V3, would have V3  ||  Mixed: If + had V3, would V1 (now)",
            "explanation_uz": "Uchinchi shart o‘tmishdagi afsusni bildiradi. Aralash shart esa o‘tmishdagi xatoning hozirgi oqibatini ko‘rsatadi.",
            "examples": [
                  {
                        "en": "If I had studied medicine, I would be a doctor right now.",
                        "uz": "Agar o‘shanda tibbiyotda o‘qiganimda, hozir shifokor bo‘lar edim.",
                        "breakdown": "Mixed: had studied (past) -> would be (present)"
                  },
                  {
                        "en": "If we had taken the taxi, we would not have missed our flight.",
                        "uz": "Agar taksiga o‘tirganimizda edi, parvozimizni o‘tkazib yubormagan bo‘lardik.",
                        "breakdown": "Third: had taken -> would not have missed"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In \"If I had set my alarm, I wouldn't be late now\", did the person set the alarm in the past?",
                  "options": [
                        {
                              "text": "No, they forgot to set it, and now they are late",
                              "correct": true,
                              "feedback": "To‘g‘ri! O‘tmishdagi xato tufayli hozir kechikmoqda."
                        },
                        {
                              "text": "Yes, they arrived perfectly on time",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "⏳ If I had known the truth",
                  "right": "Past hypothetical condition"
            },
            {
                  "left": "✈️ Would have joined you",
                  "right": "Past hypothetical result"
            },
            {
                  "left": "💼 Would be rich today",
                  "right": "Present result of a past condition (Mixed)"
            },
            {
                  "left": "😔 Regret about missed chances",
                  "right": "Emotional driver of third conditional"
            }
      ],
      "fillBlank": {
            "sentence": "If she had listened to her mentor, she ___ in this complicated predicament today.",
            "options": [
                  "would not be",
                  "would not have been",
                  "will not be"
            ],
            "correct": "would not be",
            "explanation": "Hozirgi kundagi oqibat (today) bo‘lgani uchun aralash shart \"would not be\" qo‘llanadi."
      },
      "teacherNotes": {
            "elicitation": "Tell a short story: \"I didn't study -> I failed -> I am sad now. Connect them!\"",
            "commonMistake": "Putting \"would have\" inside the \"if\" clause (\"If I would have known\").",
            "quickCcq": "Can third conditional change anything in real life today?"
      }
},

    'b2-reported-speech': {
      "id": "b2-reported-speech",
      "levelId": "b2",
      "title": "Reported Speech & Reporting Verbs (O‘zlashtirma Gap va Fe’llar)",
      "category": "Communication Nuance",
      "icon": "fa-comments",
      "description": "Transform direct quotes into natural reported speech using verbs like insist, deny, and suggest.",
      "overview": "Birovning gapini yetkazish va \"say/tell\" o‘rniga boy fe’llardan (warn, admit, advise) foydalanish.",
      "flashcards": [
            {
                  "word": "Admit",
                  "uz": "Tan olmoq, iqror bo‘lmoq",
                  "phonetic": "/ədˈmɪt/",
                  "pronunciation_uz": "[ed-mit]",
                  "pos": "Verb",
                  "definition": "To confess to be true or to be one's fault (followed by -ing).",
                  "example": "The driver admitted exceeding the speed limit on the highway.",
                  "chunk": "admit making a mistake"
            },
            {
                  "word": "Deny",
                  "uz": "Inkor qilmoq, rad etmoq",
                  "phonetic": "/dɪˈnaɪ/",
                  "pronunciation_uz": "[di-nay]",
                  "pos": "Verb",
                  "definition": "To state that one refuses to admit the truth of an accusation.",
                  "example": "The suspect firmly denied stealing the valuable jewelry.",
                  "chunk": "deny any involvement"
            },
            {
                  "word": "Urge",
                  "uz": "Undamoq, qistamoq",
                  "phonetic": "/ɜːdʒ/",
                  "pronunciation_uz": "[erj]",
                  "pos": "Verb",
                  "definition": "To strongly encourage someone to take a specific action.",
                  "example": "The doctor urged him to adopt a healthier diet immediately.",
                  "chunk": "urge caution"
            },
            {
                  "word": "Confidential",
                  "uz": "Maxfiy, sir saqlanadigan",
                  "phonetic": "/ˌkɒn.fɪˈden.ʃəl/",
                  "pronunciation_uz": "[kon-fi-den-shl]",
                  "pos": "Adjective",
                  "definition": "Intended to be kept secret and private.",
                  "example": "She informed me that the financial report was strictly confidential.",
                  "chunk": "confidential information"
            }
      ],
      "grammar": {
            "rule": "Tense Backshifting & Advanced Reporting Verb Patterns",
            "formula": "Direct: Present -> Reported: Past  ||  Verb + that / Verb + someone to do / Verb + V-ing",
            "explanation_uz": "Ko‘chirma gap o‘zlashtirilganda zamonlar bir pog‘ona orqaga suriladi (Present -> Past). \"Advise, warn, insist\" kabi fe’llar nutqni boyitadi.",
            "examples": [
                  {
                        "en": "\"I will assist you tomorrow,\" he said -> He promised that he would assist me the following day.",
                        "uz": "\"Ertaga yordam beraman,\" dedi -> U ertasi kuni yordam berishga va’da berdi.",
                        "breakdown": "will -> would, tomorrow -> the following day"
                  },
                  {
                        "en": "The officer warned us not to venture into the foggy mountains.",
                        "uz": "Zobit bizni tumanli tog‘larga bormaslikdan ogohlantirdi.",
                        "breakdown": "warned + object + not to V1"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In reported speech, what does the time expression \"now\" typically shift into?",
                  "options": [
                        {
                              "text": "\"Then\" or \"at that time\"",
                              "correct": true,
                              "feedback": "To‘g‘ri! \"Now\" so‘zi \"then\" ga aylanadi."
                        },
                        {
                              "text": "It remains \"now\" without any change",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🗣️ She promised to help",
                  "right": "Verb + to-infinitive pattern"
            },
            {
                  "left": "🛑 He denied taking the funds",
                  "right": "Verb + gerund pattern"
            },
            {
                  "left": "⚠️ They warned us against the risk",
                  "right": "Verb + preposition pattern"
            },
            {
                  "left": "📜 Said -> Had said",
                  "right": "Tense backshift rule"
            }
      ],
      "fillBlank": {
            "sentence": "The defense attorney firmly ___ that his client was present at the crime scene.",
            "options": [
                  "denied",
                  "insisted to",
                  "refused"
            ],
            "correct": "denied",
            "explanation": "Voqeani rad etishda \"denied that\" to‘g‘ri keladi."
      },
      "teacherNotes": {
            "elicitation": "Whisper to student: \"I am hungry.\" Ask class: \"What did he just say?\"",
            "commonMistake": "Using \"said me\" instead of \"told me\" or \"said to me\".",
            "quickCcq": "Does \"suggest\" take an infinitive with \"to\"? (No: suggest doing or suggest that)."
      }
},

    'b2-future-aspects': {
      "id": "b2-future-aspects",
      "levelId": "b2",
      "title": "Future Continuous & Future Perfect (Kelasi Davomiy va Tugallangan Zamonlar)",
      "category": "Time Perspectives",
      "icon": "fa-forward-fast",
      "description": "Project future moments and achievements using will be doing and will have done by a deadline.",
      "overview": "Kelajakdagi ma’lum vaqtda davom etayotgan jarayon va belgilangan muddatga qadar yakunlanadigan ishlar.",
      "flashcards": [
            {
                  "word": "Milestone",
                  "uz": "Muhim bosqich, burilish nuqtasi",
                  "phonetic": "/ˈmaɪl.stəʊn/",
                  "pronunciation_uz": "[mayl-stoun]",
                  "pos": "Noun",
                  "definition": "A significant stage or event in the development of something.",
                  "example": "Graduating from medical school is a massive career milestone.",
                  "chunk": "reach a milestone"
            },
            {
                  "word": "Deadline",
                  "uz": "Oxirgi qat’iy muddat",
                  "phonetic": "/ˈded.laɪn/",
                  "pronunciation_uz": "[ded-layn]",
                  "pos": "Noun",
                  "definition": "The latest time or date by which something must be completed.",
                  "example": "By the midnight deadline, all project drafts will have been submitted.",
                  "chunk": "meet the deadline"
            },
            {
                  "word": "Projected",
                  "uz": "Bashorat qilingan, kutilayotgan",
                  "phonetic": "/prəˈdʒek.tɪd/",
                  "pronunciation_uz": "[pro-jek-tid]",
                  "pos": "Adjective",
                  "definition": "Estimated or forecasted based on current trends.",
                  "example": "The projected economic growth will be climbing steadily.",
                  "chunk": "projected timeline"
            },
            {
                  "word": "Accomplishment",
                  "uz": "Muvaffaqiyat, erishilgan natija",
                  "phonetic": "/əˈkʌm.plɪʃ.mənt/",
                  "pronunciation_uz": "[e-kam-plish-ment]",
                  "pos": "Noun",
                  "definition": "Something that has been achieved successfully.",
                  "example": "Publishing two books before age thirty was an extraordinary accomplishment.",
                  "chunk": "notable accomplishment"
            }
      ],
      "grammar": {
            "rule": "Future Continuous (will be + V-ing) vs Future Perfect (will have + V3)",
            "formula": "Continuous: At this time tomorrow, I will be flying  ||  Perfect: By 2030, I will have graduated",
            "explanation_uz": "\"Future Continuous\" kelajakdagi aniq lahzada davom etayotgan harakat. \"Future Perfect\" esa \"by\" (gacha) ko‘rsatkichi bilan tugallanadigan ishdir.",
            "examples": [
                  {
                        "en": "This time tomorrow, we will be flying over the Atlantic Ocean.",
                        "uz": "Ertaga ayni shu vaqtda biz Atlantika okeani ustidan uchib ketayotgan bo‘lamiz.",
                        "breakdown": "will be flying (jarayon)"
                  },
                  {
                        "en": "By the end of this semester, they will have completed all modules.",
                        "uz": "Ushbu semestr oxirigacha ular barcha modullarni tugatib bo‘lgan bo‘ladilar.",
                        "breakdown": "will have completed (yakunlangan natija)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you say \"By Friday I will have finished my essay\", will the essay still be unwritten on Saturday?",
                  "options": [
                        {
                              "text": "No, it will already be complete before Friday ends",
                              "correct": true,
                              "feedback": "To‘g‘ri! Juma kunigacha tayyor bo‘ladi."
                        },
                        {
                              "text": "Yes, you will just start writing on Saturday",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🛫 Will be flying at 3 PM",
                  "right": "Action in progress at a future moment"
            },
            {
                  "left": "🏁 Will have finished by Friday",
                  "right": "Action completed prior to a future deadline"
            },
            {
                  "left": "📅 By next year",
                  "right": "Future perfect time indicator"
            },
            {
                  "left": "⏰ At this exact time tomorrow",
                  "right": "Future continuous time indicator"
            }
      ],
      "fillBlank": {
            "sentence": "By the time you wake up tomorrow morning, our flight ___ in London.",
            "options": [
                  "will have landed",
                  "will be landing",
                  "will land"
            ],
            "correct": "will have landed",
            "explanation": "\"By the time you wake up\" natijasi oldin yakunlanganini bildirib \"will have landed\" bo‘ladi."
      },
      "teacherNotes": {
            "elicitation": "Draw a timeline: \"Where will you be at 8 PM tonight? What will you have achieved by 2030?\"",
            "commonMistake": "Using \"by\" with simple future instead of future perfect.",
            "quickCcq": "Can you use Future Perfect without a deadline point in time?"
      }
},

    'b2-essay-cohesion': {
      "id": "b2-essay-cohesion",
      "levelId": "b2",
      "title": "Essay Writing & Discourse Markers (Insho Yozish va Mantiqiy Bog‘lovchilar)",
      "category": "Academic Writing",
      "icon": "fa-feather-pointed",
      "description": "Structure cohesive IELTS/TOEFL essays using contrasting, conceding, and summarizing markers.",
      "overview": "Akademik insho tuzilishi, argumentlarni asoslash va \"however, although, consequently\" bog‘lovchilari.",
      "flashcards": [
            {
                  "word": "Furthermore",
                  "uz": "Bundan tashqari, yana shuni aytish joizki",
                  "phonetic": "/ˌfɜː.ðəˈmɔː/",
                  "pronunciation_uz": "[fer-zer-mor]",
                  "pos": "Adverb",
                  "definition": "In addition; introducing a fresh point that reinforces the argument.",
                  "example": "The proposal is cost-effective; furthermore, it reduces carbon emissions.",
                  "chunk": "furthermore, it is vital"
            },
            {
                  "word": "Nevertheless",
                  "uz": "Shunga qaramasdan",
                  "phonetic": "/ˌnev.ə.ðəˈles/",
                  "pronunciation_uz": "[nev-er-ze-les]",
                  "pos": "Adverb",
                  "definition": "In spite of that; nonetheless.",
                  "example": "The experiment faced early hurdles; nevertheless, it proved triumphant.",
                  "chunk": "nevertheless, we continued"
            },
            {
                  "word": "Consequently",
                  "uz": "Oqibatda, natijada",
                  "phonetic": "/ˈkɒn.sɪ.kwənt.li/",
                  "pronunciation_uz": "[kon-si-kwent-li]",
                  "pos": "Adverb",
                  "definition": "As a result; therefore.",
                  "example": "He missed several vital lectures; consequently, his exam score dropped.",
                  "chunk": "consequently, results improved"
            },
            {
                  "word": "Cohesion",
                  "uz": "Mantiqiy bog‘liqlik, yaxlitlik",
                  "phonetic": "/kəʊˈhiː.ʒən/",
                  "pronunciation_uz": "[kou-hi-zhen]",
                  "pos": "Noun",
                  "definition": "The quality of being logical, consistent, and cleanly unified.",
                  "example": "Use clear transitional phrases to ensure paragraph cohesion.",
                  "chunk": "textual cohesion"
            }
      ],
      "grammar": {
            "rule": "Paragraph Architecture: Topic Sentence -> Supporting Evidence -> Concluding Thought",
            "formula": "Contrast: On the one hand... On the other hand  |  Result: Therefore / Hence  |  Summary: In conclusion",
            "explanation_uz": "Akademik matnda fikrlar bir-biriga mantiqiy bog‘lovchilar (transitional phrases) orqali uzviy ulanadi.",
            "examples": [
                  {
                        "en": "Although technological advancements offer convenience, they also present cybersecurity dilemmas.",
                        "uz": "Texnologik yutuqlar qulaylik yaratsa-da, ular kiberxavfsizlik muammolarini ham keltirib chiqaradi.",
                        "breakdown": "Although (qarama-qarshilik) + comma"
                  },
                  {
                        "en": "In conclusion, governments must allocate substantial funding toward renewable infrastructure.",
                        "uz": "Xulosa qilib aytganda, hukumatlar qayta tiklanuvchi infratuzilmaga salmoqli mablag‘ ajratishi lozim.",
                        "breakdown": "In conclusion (xulosa kiritish)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "Does \"Furthermore\" introduce an opposing argument or reinforce the current point?",
                  "options": [
                        {
                              "text": "It reinforces and adds supporting evidence",
                              "correct": true,
                              "feedback": "To‘g‘ri! Fikrni qo‘shimcha mustahkamlaydi."
                        },
                        {
                              "text": "It contradicts the previous sentence completely",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "➕ Furthermore / In addition",
                  "right": "Adding reinforcing information"
            },
            {
                  "left": "⚖️ However / On the contrary",
                  "right": "Introducing contrasting viewpoint"
            },
            {
                  "left": "🎯 Consequently / Therefore",
                  "right": "Showing cause and effect consequence"
            },
            {
                  "left": "🏁 To summarize / In conclusion",
                  "right": "Wrapping up final essay verdict"
            }
      ],
      "fillBlank": {
            "sentence": "Renewable energy is becoming cheaper; ___, solar installations are soaring worldwide.",
            "options": [
                  "consequently",
                  "although",
                  "despite"
            ],
            "correct": "consequently",
            "explanation": "Sabab-oqibat natijasini ko‘rsatish uchun \"consequently\" (natijada) to‘g‘ri."
      },
      "teacherNotes": {
            "elicitation": "Give students two unrelated sentences: \"How can we glue these thoughts together logically?\"",
            "commonMistake": "Overusing \"Moreover\" at the start of every single sentence.",
            "quickCcq": "Can you use \"In conclusion\" at the beginning of the introductory paragraph?"
      }
},

    'c1-cleft-sentences': {
      "id": "c1-cleft-sentences",
      "levelId": "c1",
      "title": "Cleft Sentences & Rhetorical Emphasis (Fikrni Urg‘ulash Tuzilmalari)",
      "category": "Stylistic Mastery",
      "icon": "fa-highlighter",
      "description": "Direct the listener’s attention with precision using \"It is/was... that\" and \"What I admire is...\".",
      "overview": "Ingliz tilida ma’lum so‘z yoki fikrga diqqatni qaratish uchun gapni ikkiga bo‘lib urg‘ulash san’ati.",
      "flashcards": [
            {
                  "word": "Emphasis",
                  "uz": "Urg‘u, e’tibor qaratish",
                  "phonetic": "/ˈem.fə.sɪs/",
                  "pronunciation_uz": "[em-fe-sis]",
                  "pos": "Noun",
                  "definition": "Special importance, value, or prominence given to something.",
                  "example": "The CEO placed immense emphasis on user privacy and data security.",
                  "chunk": "place heavy emphasis"
            },
            {
                  "word": "Rhetoric",
                  "uz": "Ritorika, notiqlik san’ati",
                  "phonetic": "/ˈret.ər.ɪk/",
                  "pronunciation_uz": "[ret-er-ik]",
                  "pos": "Noun",
                  "definition": "The art of effective or persuasive speaking or writing.",
                  "example": "His persuasive rhetoric swayed the skeptical parliamentary jury.",
                  "chunk": "rhetorical device"
            },
            {
                  "word": "Prominence",
                  "uz": "Ko‘zga tashlanuvchanlik, nufuz",
                  "phonetic": "/ˈprɒm.ɪ.nəns/",
                  "pronunciation_uz": "[prom-i-nens]",
                  "pos": "Noun",
                  "definition": "The state of being widely noticed or important.",
                  "example": "The candidate’s stance on education rose to national prominence.",
                  "chunk": "gain prominence"
            },
            {
                  "word": "Foreground",
                  "uz": "Oldingi planga chiqarmoq",
                  "phonetic": "/ˈfɔː.ɡraʊnd/",
                  "pronunciation_uz": "[for-graund]",
                  "pos": "Verb",
                  "definition": "To make something the most prominent feature.",
                  "example": "The essay foregrounds the ethical responsibilities of AI developers.",
                  "chunk": "foreground the issue"
            }
      ],
      "grammar": {
            "rule": "It-Cleft and Wh-Cleft (Pseudo-cleft) Constructions",
            "formula": "It is/was + [Emphasized Element] + that/who...  ||  What + [Subject + Verb] + is/was + [Focus]",
            "explanation_uz": "\"John broke the window\" o‘rniga urg‘u berish uchun: \"It was John who broke the window\" yoki \"What John broke was the window\" deyiladi.",
            "examples": [
                  {
                        "en": "It was his profound honesty that earned our unwavering respect.",
                        "uz": "Bizning cheksiz hurmatimizga sazovor bo‘lgan narsa uning chuqur halolligi edi.",
                        "breakdown": "It was + honesty + that..."
                  },
                  {
                        "en": "What impressed the admissions committee was her original research methodology.",
                        "uz": "Qabul komissiyasini hayratda qoldirgan narsa uning noyob tadqiqot metodologiyasi bo‘ldi.",
                        "breakdown": "What impressed + was + methodology"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "Does \"It was Sarah who solved the equation\" emphasize Sarah herself or the equation?",
                  "options": [
                        {
                              "text": "It places direct focus and spotlight on Sarah",
                              "correct": true,
                              "feedback": "To‘g‘ri! Diqqat aynan Sarahga qaratilgan."
                        },
                        {
                              "text": "It emphasizes only the blackboard",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "✨ It was the CEO WHO made the announcement",
                  "right": "It-cleft emphasizing the human agent"
            },
            {
                  "left": "💡 What we need IS constructive feedback",
                  "right": "Wh-cleft emphasizing the requirement"
            },
            {
                  "left": "📍 All I want IS a peaceful workspace",
                  "right": "All-cleft restricting the focus"
            },
            {
                  "left": "🎭 Dramatic stylistic transformation",
                  "right": "Goal of cleft sentence usage"
            }
      ],
      "fillBlank": {
            "sentence": "___ really astonished the audience was her virtuoso violin improvisation.",
            "options": [
                  "What",
                  "That",
                  "Which"
            ],
            "correct": "What",
            "explanation": "Pseudo-cleft boshida \"What really astonished...\" to‘g‘ri keladi."
      },
      "teacherNotes": {
            "elicitation": "Say: \"I love your courage.\" Ask: \"How can I make courage the dramatic spotlight?\"",
            "commonMistake": "Using \"What was it that\" inappropriately in neutral casual speech.",
            "quickCcq": "Can you use \"It were\" in an it-cleft with plural objects? (No, always \"It is\" or \"It was\")."
      }
},

    'c1-participle-clauses': {
      "id": "c1-participle-clauses",
      "levelId": "c1",
      "title": "Complex Participle Clauses (Sifatdoshli Qisqartma Ergash Gaplar)",
      "category": "Elite Syntax",
      "icon": "fa-scissors",
      "description": "Compress compound sentences into concise, literary prose using present and perfect participles.",
      "overview": "Gaplarni qisqartirib, yuqori darajadagi ixcham va nafis akademik uslubda yozish (Having finished, Seen from afar).",
      "flashcards": [
            {
                  "word": "Concise",
                  "uz": "Ixcham, lo‘nda, qisqa",
                  "phonetic": "/kənˈsaɪs/",
                  "pronunciation_uz": "[kon-says]",
                  "pos": "Adjective",
                  "definition": "Giving a lot of information clearly and in few words.",
                  "example": "Her executive summary was admirably concise yet thorough.",
                  "chunk": "concise summary"
            },
            {
                  "word": "Compress",
                  "uz": "Qisqartirmoq, zichlamoq",
                  "phonetic": "/kəmˈpres/",
                  "pronunciation_uz": "[kom-pres]",
                  "pos": "Verb",
                  "definition": "To reduce the volume or length of something efficiently.",
                  "example": "Participle clauses compress two long sentences into one elegant clause.",
                  "chunk": "compress information"
            },
            {
                  "word": "Eloquent",
                  "uz": "Notiqona, chiroyli va ta’sirchan",
                  "phonetic": "/ˈel.ə.kwənt/",
                  "pronunciation_uz": "[el-o-kwent]",
                  "pos": "Adjective",
                  "definition": "Fluent or persuasive in speaking or writing.",
                  "example": "The diplomat delivered an eloquent plea for international peace.",
                  "chunk": "eloquent speech"
            },
            {
                  "word": "Simultaneity",
                  "uz": "Bir vaqtdalik, hamohanglik",
                  "phonetic": "/ˌsɪm.əl.təˈneɪ.ə.ti/",
                  "pronunciation_uz": "[sim-ul-te-ney-i-ti]",
                  "pos": "Noun",
                  "definition": "The property of two or more events happening at the same time.",
                  "example": "Present participles convey temporal simultaneity naturally.",
                  "chunk": "temporal simultaneity"
            }
      ],
      "grammar": {
            "rule": "Present Participle (V-ing), Past Participle (V3), and Perfect Participle (Having + V3)",
            "formula": "Active sequential: Having completed the thesis, he traveled  ||  Passive: Built in 1890, the castle stands",
            "explanation_uz": "\"Because/After he had completed...\" o‘rniga \"Having completed...\" qo‘llash matnni o‘ta professional va akademik qiladi.",
            "examples": [
                  {
                        "en": "Having reviewed all empirical findings, the board approved the budget.",
                        "uz": "Barcha amaliy natijalarni ko‘rib chiqqach, kengash byudjetni ma’qulladi.",
                        "breakdown": "Having reviewed = After they had reviewed"
                  },
                  {
                        "en": "Exhausted by the transatlantic flight, she fell asleep immediately.",
                        "uz": "Transatlantik parvozdan tinkasi qurigan holda, u darhol uxlab qoldi.",
                        "breakdown": "Exhausted = Because she was exhausted"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In \"Having eaten breakfast, John left\", who ate breakfast?",
                  "options": [
                        {
                              "text": "John ate breakfast (subject of participle must match main clause)",
                              "correct": true,
                              "feedback": "To‘g‘ri! Sifatdosh egasi bosh gap egasi bilan bir xil bo‘lishi shart."
                        },
                        {
                              "text": "An anonymous stranger",
                              "correct": false,
                              "feedback": "Noto‘g‘ri (dangling participle xatosi)."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🏃 Walking along the river, I saw an owl",
                  "right": "Simultaneous action participle"
            },
            {
                  "left": "🏆 Having won the tournament, she wept",
                  "right": "Prior completed action participle"
            },
            {
                  "left": "🏰 Damaged by the storm, the roof leaked",
                  "right": "Passive cause participle"
            },
            {
                  "left": "⚠️ Dangling participle trap",
                  "right": "Grammatical error where subjects mismatch"
            }
      ],
      "fillBlank": {
            "sentence": "___ all her funds in the venture, she had to seek emergency loans.",
            "options": [
                  "Having invested",
                  "Invested",
                  "Invest"
            ],
            "correct": "Having invested",
            "explanation": "Oldin sodir bo‘lgan faol harakat uchun \"Having invested\" to‘g‘ri keladi."
      },
      "teacherNotes": {
            "elicitation": "Write: \"Because he was tired, he slept.\" -> \"Being tired, he slept.\" Ask: \"Can we go further?\"",
            "commonMistake": "Dangling participles: \"Walking down the street, the trees were beautiful\" (The trees were not walking!).",
            "quickCcq": "Does a participle clause have its own explicit finite verb?"
      }
},

    'c1-rhetoric-subtlety': {
      "id": "c1-rhetoric-subtlety",
      "levelId": "c1",
      "title": "Nuances of Rhetoric, Irony & Tone (Ritorika, Kinoya va Nozik Uslub)",
      "category": "Mastery & Artistry",
      "icon": "fa-masks-theater",
      "description": "Interpret sarcasm, British understatement, metaphorical depth, and philosophical rhetoric.",
      "overview": "Ingliz tilidagi yashirin kinoya (irony), nozik understatement va falsafiy ritorika qirralari.",
      "flashcards": [
            {
                  "word": "Understatement",
                  "uz": "Vaziyatni kamaytirib ko‘rsatish (Britancha bosiqlik)",
                  "phonetic": "/ˈʌn.dəˌsteɪt.mənt/",
                  "pronunciation_uz": "[an-der-steyt-ment]",
                  "pos": "Noun",
                  "definition": "The presentation of something as being smaller or less important than it actually is.",
                  "example": "Calling a category-5 hurricane \"a bit of breezy weather\" is a classic British understatement.",
                  "chunk": "classic understatement"
            },
            {
                  "word": "Sarcasm",
                  "uz": "Piching, kesatiq",
                  "phonetic": "/ˈsɑː.kæz.əm/",
                  "pronunciation_uz": "[sar-kez-em]",
                  "pos": "Noun",
                  "definition": "The use of irony to mock, convey contempt, or amuse.",
                  "example": "\"Oh, brilliant work!\" he said sarcastically after dropping the vase.",
                  "chunk": "cutting sarcasm"
            },
            {
                  "word": "Euphemism",
                  "uz": "Evfemizm (yumshoq ifoda)",
                  "phonetic": "/ˈjuː.fə.mɪ.zəm/",
                  "pronunciation_uz": "[yu-fe-mi-zem]",
                  "pos": "Noun",
                  "definition": "A mild or indirect word substituted for one considered too harsh.",
                  "example": "\"Passed away\" is a gentle euphemism for \"died\".",
                  "chunk": "polite euphemism"
            },
            {
                  "word": "Metaphorical",
                  "uz": "Ko‘chma ma’noli, majoziy",
                  "phonetic": "/ˌmet.əˈfɒr.ɪ.kəl/",
                  "pronunciation_uz": "[met-e-for-i-kl]",
                  "pos": "Adjective",
                  "definition": "Characteristic of a metaphor; figurative rather than literal.",
                  "example": "The novel is a metaphorical journey through human disillusionment.",
                  "chunk": "metaphorical meaning"
            }
      ],
      "grammar": {
            "rule": "Stylistic Hedging & Sophisticated Register Inversions",
            "formula": "Hedging: It could be plausibly argued that...  |  Irony: Far from being a triumph, it was..."
      },
      "ccqs": [
            {
                  "question": "When a British speaker says a terrible disaster is \"not ideal\", are they happy or deeply distressed?",
                  "options": [
                        {
                              "text": "They are facing serious adversity (understatement)",
                              "correct": true,
                              "feedback": "To‘g‘ri! \"Not ideal\" ingliz madaniyatida juda yomon vaziyatni bildiradi."
                        },
                        {
                              "text": "They are thrilled and celebrating",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🌧️ A spot of rain (in a flood)",
                  "right": "British understatement"
            },
            {
                  "left": "🕊️ Passed away",
                  "right": "Compassionate euphemism"
            },
            {
                  "left": "🎭 Dramatic irony",
                  "right": "Audience knows truth while character does not"
            },
            {
                  "left": "🛡️ Diplomatic hedging",
                  "right": "Cautious tone avoiding absolute claims"
            }
      ],
      "fillBlank": {
            "sentence": "Calling an catastrophic market crash \"a slight economic hiccup\" is a textbook ___.",
            "options": [
                  "understatement",
                  "exaggeration",
                  "metaphor"
            ],
            "correct": "understatement",
            "explanation": "Katta fojiani arzimasdek ko‘rsatish \"understatement\" deyiladi."
      },
      "teacherNotes": {
            "elicitation": "Pour water over head: \"Just slightly damp!\" What kind of humor is this?",
            "commonMistake": "Taking British irony literally and misunderstanding the true emotional tone.",
            "quickCcq": "Is euphemism meant to insult or soften harsh reality?"
      }
}
,

    'a1-family-people': {
      "id": "a1-family-people",
      "levelId": "a1",
      "title": "Family Members & Character (Oila va Xarakter)",
      "category": "People & Relationships",
      "icon": "fa-people-roof",
      "description": "Describe family trees, personal appearances, and personality traits naturally in English.",
      "overview": "Oila a’zolari, insonlarning tashqi ko‘rinishi va fe’l-atvori.",
      "flashcards": [
            {
                  "word": "Sibling",
                  "uz": "Aka-uka yoki opa-singil",
                  "phonetic": "/ˈsɪb.lɪŋ/",
                  "pronunciation_uz": "[sib-ling]",
                  "pos": "Noun",
                  "definition": "A brother or sister.",
                  "example": "I have two siblings: an older brother and a younger sister.",
                  "chunk": "have two siblings"
            },
            {
                  "word": "Generous",
                  "uz": "Saxiy, qo‘li ochiq",
                  "phonetic": "/ˈdʒen.ər.əs/",
                  "pronunciation_uz": "[jen-er-as]",
                  "pos": "Adjective",
                  "definition": "Willing to give money, help, or kindness freely.",
                  "example": "My grandfather is very generous and always helps neighbors.",
                  "chunk": "a generous person"
            },
            {
                  "word": "Patient",
                  "uz": "Sabrli, bosiq",
                  "phonetic": "/ˈpeɪ.ʃənt/",
                  "pronunciation_uz": "[pey-shent]",
                  "pos": "Adjective",
                  "definition": "Able to accept delays or problems without becoming angry.",
                  "example": "A good teacher must be extremely patient with young learners.",
                  "chunk": "stay calm and patient"
            },
            {
                  "word": "Resemble",
                  "uz": "O‘xshamoq",
                  "phonetic": "/rɪˈzem.bəl/",
                  "pronunciation_uz": "[ri-zem-bl]",
                  "pos": "Verb",
                  "definition": "To look like or be similar to an older relative.",
                  "example": "She resembles her mother in both looks and smile.",
                  "chunk": "resemble closely"
            }
      ],
      "grammar": {
            "rule": "Possessive 's and Adjectives of Appearance",
            "formula": "Subject + have/has got + [Adjective] + [Noun]  |  [Name]'s + [Family member]",
            "explanation_uz": "Egalik qo‘shimchasi ('s) va tashqi ko‘rinishni ifodalashda \"have/has got\" yoki \"is/are\" ishlatiladi.",
            "examples": [
                  {
                        "en": "My brother's hair is wavy and brown.",
                        "uz": "Akamning sochi to‘lqinsimon va jigarrang.",
                        "breakdown": "brother's (akamning) + wavy hair"
                  },
                  {
                        "en": "She is friendly, outgoing, and very hardworking.",
                        "uz": "U samimiy, kirishimli va juda mehnatkash.",
                        "breakdown": "is + character adjectives"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If someone is \"generous\", do they keep all their money to themselves?",
                  "options": [
                        {
                              "text": "No, they share and help others freely",
                              "correct": true,
                              "feedback": "To‘g‘ri! Saxiy inson ulashadi."
                        },
                        {
                              "text": "Yes, they never share anything",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "👨‍👧 Father and Daughter",
                  "right": "Close family bond"
            },
            {
                  "left": "🎁 Generous friend",
                  "right": "Loves giving and helping"
            },
            {
                  "left": "⏳ Patient teacher",
                  "right": "Never loses temper"
            },
            {
                  "left": "👥 Sibling connection",
                  "right": "Brother or sister"
            }
      ],
      "fillBlank": {
            "sentence": "My uncle is very ___; he always listens to everyone calmly.",
            "options": [
                  "patient",
                  "angry",
                  "lazy"
            ],
            "correct": "patient",
            "explanation": "Bosiqlik bilan eshitish sabrli (patient) insonga xos."
      },
      "teacherNotes": {
            "elicitation": "Show family photo: \"Who is this person in relation to you?\"",
            "commonMistake": "Using \"have\" instead of \"is\" for age: \"I have 20 years\" (Say: \"I am 20\").",
            "quickCcq": "Does your sibling have to be older than you?"
      }
},

    'a1-places-directions': {
      "id": "a1-places-directions",
      "levelId": "a1",
      "title": "Town Places & Directions (Shahar va Yo‘nalishlar)",
      "category": "Places & Navigation",
      "icon": "fa-map-location-dot",
      "description": "Navigate modern cities, identify public buildings, and ask for directions politely.",
      "overview": "Shahar binolari, manzilni so‘rash va yo‘l ko‘rsatish iboralari.",
      "flashcards": [
            {
                  "word": "Crossroads",
                  "uz": "Chorraha",
                  "phonetic": "/ˈkrɒs.rəʊdz/",
                  "pronunciation_uz": "[kros-roudz]",
                  "pos": "Noun",
                  "definition": "A place where two or more roads intersect.",
                  "example": "Turn right at the next busy crossroads.",
                  "chunk": "at the crossroads"
            },
            {
                  "word": "Pedestrian",
                  "uz": "Piyoda yo‘lovchi",
                  "phonetic": "/pəˈdes.tri.ən/",
                  "pronunciation_uz": "[pe-des-tri-an]",
                  "pos": "Noun",
                  "definition": "A person walking along a street rather than in a vehicle.",
                  "example": "Vehicles must stop for pedestrians at the zebra crossing.",
                  "chunk": "pedestrian crossing"
            },
            {
                  "word": "Opposite",
                  "uz": "Ro‘parasida, qarshisida",
                  "phonetic": "/ˈɒp.ə.zɪt/",
                  "pronunciation_uz": "[op-o-zit]",
                  "pos": "Preposition",
                  "definition": "Directly across from something or facing it.",
                  "example": "The national museum is located opposite the central bank.",
                  "chunk": "opposite the station"
            },
            {
                  "word": "Straight ahead",
                  "uz": "To‘g‘riga",
                  "phonetic": "/streɪt əˈhed/",
                  "pronunciation_uz": "[streyt e-hed]",
                  "pos": "Phrase",
                  "definition": "Continuing in the same forward direction without turning.",
                  "example": "Go straight ahead for 200 meters until you see the park.",
                  "chunk": "go straight ahead"
            }
      ],
      "grammar": {
            "rule": "Imperatives for Giving Directions & Prepositions of Place",
            "formula": "Turn [left/right] + at the [place]  |  Go straight ahead  |  It is [next to / opposite / between]",
            "explanation_uz": "Yo‘l ko‘rsatishda buyruq mayli (Turn left, Go straight) va joy predloglari (opposite, next to) qo‘llanadi.",
            "examples": [
                  {
                        "en": "Excuse me, how do I get to the pharmacy?",
                        "uz": "Kechirasiz, dorixonaga qanday borsam bo‘ladi?",
                        "breakdown": "Excuse me + how do I get to..."
                  },
                  {
                        "en": "Go straight ahead and turn right at the traffic lights.",
                        "uz": "To‘g‘riga boring va svetofordan o‘ngga buriling.",
                        "breakdown": "Go straight + turn right"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If a bank is \"opposite\" the library, is it on the same side or across the street?",
                  "options": [
                        {
                              "text": "Across the street facing it",
                              "correct": true,
                              "feedback": "To‘g‘ri! Ro‘parasida, yo‘lning narigi tomonida."
                        },
                        {
                              "text": "Inside the library building",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "➡️ Turn right",
                  "right": "Change direction to the right"
            },
            {
                  "left": "⬆️ Go straight ahead",
                  "right": "Continue forward without turning"
            },
            {
                  "left": "🏬 Opposite the mall",
                  "right": "Across the street from the mall"
            },
            {
                  "left": "🚦 Traffic lights",
                  "right": "Signal for stopping and going"
            }
      ],
      "fillBlank": {
            "sentence": "Excuse me, could you tell me where the nearest ___ is? I need some medicine.",
            "options": [
                  "pharmacy",
                  "cinema",
                  "gym"
            ],
            "correct": "pharmacy",
            "explanation": "Dori-darmon dorixonadan (pharmacy) olinadi."
      },
      "teacherNotes": {
            "elicitation": "Draw simple map on board: \"Where is the post office relative to the bank?\"",
            "commonMistake": "Saying \"turn to left\" instead of natural \"turn left\".",
            "quickCcq": "Can you go straight ahead if there is a wall in front of you?"
      }
},

    'a2-past-continuous': {
      "id": "a2-past-continuous",
      "levelId": "a2",
      "title": "Past Continuous vs Past Simple (O‘tgan Davomiy Zamon)",
      "category": "Grammar & Narratives",
      "icon": "fa-timeline",
      "description": "Master interrupted actions, background scenes, and storytelling using was/were + V-ing.",
      "overview": "O‘tmishda davom etayotgan jarayonlar va ularni to‘xtatgan voqealar.",
      "flashcards": [
            {
                  "word": "Simultaneous",
                  "uz": "Bir vaqtda sodir bo‘ladigan",
                  "phonetic": "/ˌsɪm.əlˈteɪ.ni.əs/",
                  "pronunciation_uz": "[sim-ul-tey-ni-as]",
                  "pos": "Adjective",
                  "definition": "Happening or existing at exactly the same time.",
                  "example": "The two explosions were simultaneous.",
                  "chunk": "simultaneous actions"
            },
            {
                  "word": "Interrupt",
                  "uz": "Bo‘lmoq, to‘xtatib qo‘ymoq",
                  "phonetic": "/ˌɪn.təˈrʌpt/",
                  "pronunciation_uz": "[in-ter-rapt]",
                  "pos": "Verb",
                  "definition": "To stop an ongoing process or speaker suddenly.",
                  "example": "A loud phone call interrupted our study session.",
                  "chunk": "interrupt the flow"
            },
            {
                  "word": "Background",
                  "uz": "Orqa fon, sharoit",
                  "phonetic": "/ˈbæk.ɡraʊnd/",
                  "pronunciation_uz": "[bek-graund]",
                  "pos": "Noun",
                  "definition": "The conditions or situation that form the setting for an event.",
                  "example": "Birds were singing in the background as we spoke.",
                  "chunk": "background scene"
            },
            {
                  "word": "While",
                  "uz": "Davomida, -ayotgan paytda",
                  "phonetic": "/waɪl/",
                  "pronunciation_uz": "[wayl]",
                  "pos": "Conjunction",
                  "definition": "During the time that something else is occurring.",
                  "example": "While I was cooking dinner, the doorbell rang.",
                  "chunk": "while I was reading"
            }
      ],
      "grammar": {
            "rule": "Past Continuous for Background Actions Interrupted by Past Simple",
            "formula": "While + [Subject + was/were + V-ing], [Subject + V2 (Past Simple)]",
            "explanation_uz": "Uzoq davom etayotgan harakat (Past Continuous) to‘satdan sodir bo‘lgan qisqa harakat (Past Simple) bilan to‘qnashadi.",
            "examples": [
                  {
                        "en": "I was driving home when it suddenly started to snow heavily.",
                        "uz": "Uyga mashinada ketayotgan edim, birdan qor yog‘a boshladi.",
                        "breakdown": "was driving (uzoq jarayon) + started (keskin to‘xtash)"
                  },
                  {
                        "en": "While she was studying in the library, her phone vibrated.",
                        "uz": "U kutubxonada dars qilayotgan paytda, telefoni jiringladi.",
                        "breakdown": "was studying + vibrated"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In \"I was sleeping when the alarm rang\", which action started first and took longer?",
                  "options": [
                        {
                              "text": "Sleeping was the continuous ongoing action",
                              "correct": true,
                              "feedback": "To‘g‘ri! Uyqu davom etayotgan jarayon edi."
                        },
                        {
                              "text": "The alarm was ringing for hours first",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "📖 Was reading a book",
                  "right": "Long background action"
            },
            {
                  "left": "⚡ Suddenly lights went out",
                  "right": "Short interrupting event"
            },
            {
                  "left": "⏳ While we were walking",
                  "right": "Continuous time connector"
            },
            {
                  "left": "🔔 When the phone rang",
                  "right": "Point in time marker"
            }
      ],
      "fillBlank": {
            "sentence": "While they ___ dinner, someone knocked loudly on the door.",
            "options": [
                  "were having",
                  "had",
                  "have"
            ],
            "correct": "were having",
            "explanation": "\"While\" dan keyin o‘tgan zamondagi davomli jarayon uchun \"were having\" kerak."
      },
      "teacherNotes": {
            "elicitation": "Mime reading a book, then drop your keys loudly: \"What was I doing when the keys fell?\"",
            "commonMistake": "Using \"when\" with continuous and \"while\" with past simple backwards.",
            "quickCcq": "Can you use Past Continuous for an instantaneous action like blinking?"
      }
},

    'a2-comparatives-superlatives': {
      "id": "a2-comparatives-superlatives",
      "levelId": "a2",
      "title": "Comparatives & Superlatives (Qiyosiy va Orttirma Sifatlar)",
      "category": "Descriptive Mastery",
      "icon": "fa-scale-balanced",
      "description": "Compare items, people, and cities accurately using -er/more than and the -est/most.",
      "overview": "Narsalarni bir-biri bilan solishtirish va eng ustun darajani ifodalash.",
      "flashcards": [
            {
                  "word": "Superior",
                  "uz": "Ustunroq, sifatliroq",
                  "phonetic": "/suːˈpɪə.ri.ər/",
                  "pronunciation_uz": "[su-pi-ri-or]",
                  "pos": "Adjective",
                  "definition": "Better in quality or value than others.",
                  "example": "This laptop model is clearly superior to the older version.",
                  "chunk": "superior quality"
            },
            {
                  "word": "Considerably",
                  "uz": "Ancha, sezilarli darajada",
                  "phonetic": "/kənˈsɪd.ər.ə.bli/",
                  "pronunciation_uz": "[kon-sid-er-eb-li]",
                  "pos": "Adverb",
                  "definition": "By a notable or large degree.",
                  "example": "The new express train is considerably faster than the bus.",
                  "chunk": "considerably faster"
            },
            {
                  "word": "Identical",
                  "uz": "Bir xil, aynan o‘zi",
                  "phonetic": "/aɪˈden.tɪ.kəl/",
                  "pronunciation_uz": "[ay-den-ti-kl]",
                  "pos": "Adjective",
                  "definition": "Exactly the same in appearance or nature.",
                  "example": "The two twin sisters wore identical green dresses.",
                  "chunk": "identical twins"
            },
            {
                  "word": "Crowded",
                  "uz": "Gavjum, odam ko‘p",
                  "phonetic": "/ˈkraʊ.dɪd/",
                  "pronunciation_uz": "[krau-did]",
                  "pos": "Adjective",
                  "definition": "Full of people, leaving little empty room.",
                  "example": "Tokyo has some of the most crowded subways in the world.",
                  "chunk": "extremely crowded"
            }
      ],
      "grammar": {
            "rule": "Comparative (-er / more than) and Superlative (the -est / the most)",
            "formula": "Short adj: [adj]-er than  |  the [adj]-est  ||  Long adj: more [adj] than  |  the most [adj]",
            "explanation_uz": "Bir bo‘g‘inli sifatlarga \"-er / -est\", ko‘p bo‘g‘inlilar oldiga esa \"more / the most\" qo‘shiladi.",
            "examples": [
                  {
                        "en": "Tashkent is much bigger than Samarkand.",
                        "uz": "Toshkent Samarqanddan ancha kattaroq.",
                        "breakdown": "big -> bigger (undosh ikkilanadi)"
                  },
                  {
                        "en": "Mount Everest is the highest mountain on Earth.",
                        "uz": "Everest Yer yuzidagi eng baland tog‘dir.",
                        "breakdown": "high -> the highest"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If City A is \"more expensive than\" City B, which one requires more money?",
                  "options": [
                        {
                              "text": "City A requires more money",
                              "correct": true,
                              "feedback": "To‘g‘ri! Qimmatrog‘i A shahar."
                        },
                        {
                              "text": "City B is more costly",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "📈 Better than",
                  "right": "Irregular comparative of good"
            },
            {
                  "left": "📉 Worse than",
                  "right": "Irregular comparative of bad"
            },
            {
                  "left": "🏆 The best in the world",
                  "right": "Top superlative ranking"
            },
            {
                  "left": "⚖️ As tall as",
                  "right": "Equal comparison structure"
            }
      ],
      "fillBlank": {
            "sentence": "This smartphone is the ___ modern gadget currently available on the market.",
            "options": [
                  "most",
                  "more",
                  "much"
            ],
            "correct": "most",
            "explanation": "Orttirma darajada \"the most modern\" deyiladi."
      },
      "teacherNotes": {
            "elicitation": "Hold two pens of different lengths: \"Which pen is longer?\"",
            "commonMistake": "Saying \"more better\" or forgetting \"the\" in superlatives (\"He is tallest\").",
            "quickCcq": "Can you say \"more cheap\" instead of \"cheaper\"?"
      }
},

    'a2-countable-uncountable': {
      "id": "a2-countable-uncountable",
      "levelId": "a2",
      "title": "Countable vs Uncountable & Quantifiers (Sanaladigan va Sanalmaydigan Otlar)",
      "category": "Grammar & Quantity",
      "icon": "fa-cubes-stacked",
      "description": "Master some, any, much, many, a lot of, a few, and a little with precision.",
      "overview": "Miqdor so‘zlari: sanaladigan va sanalmaydigan narsalarni to‘g‘ri ifodalash.",
      "flashcards": [
            {
                  "word": "Quantity",
                  "uz": "Miqdor, hajm",
                  "phonetic": "/ˈkwɒn.tə.ti/",
                  "pronunciation_uz": "[kwon-ti-ti]",
                  "pos": "Noun",
                  "definition": "The amount or number of a material or object.",
                  "example": "We need a large quantity of fresh drinking water.",
                  "chunk": "a huge quantity"
            },
            {
                  "word": "Ingredient",
                  "uz": "Masalliq, tarkibiy qism",
                  "phonetic": "/ɪnˈɡriː.di.ənt/",
                  "pronunciation_uz": "[in-gri-di-ent]",
                  "pos": "Noun",
                  "definition": "A food component used to prepare a dish.",
                  "example": "Flour and eggs are essential ingredients for baking bread.",
                  "chunk": "fresh ingredients"
            },
            {
                  "word": "Sufficient",
                  "uz": "Yetarli, yetarli darajada",
                  "phonetic": "/səˈfɪʃ.ənt/",
                  "pronunciation_uz": "[se-fish-ent]",
                  "pos": "Adjective",
                  "definition": "Enough for a particular purpose or need.",
                  "example": "Make sure you have sufficient sleep before the exam.",
                  "chunk": "sufficient time"
            },
            {
                  "word": "Scarcity",
                  "uz": "Taqchillik, kamyoblik",
                  "phonetic": "/ˈskeə.sə.ti/",
                  "pronunciation_uz": "[skeo-si-ti]",
                  "pos": "Noun",
                  "definition": "A situation in which something is difficult to find.",
                  "example": "Water scarcity is a major global ecological concern.",
                  "chunk": "water scarcity"
            }
      ],
      "grammar": {
            "rule": "Countable (many, a few) vs Uncountable (much, a little)",
            "formula": "Countable: many books, a few friends  |  Uncountable: much water, a little sugar",
            "explanation_uz": "Sanaladigan otlar donalab hisoblanadi (many, few). Sanalmaydigan otlar hajm bilan o‘lchanadi (much, little).",
            "examples": [
                  {
                        "en": "There are a lot of students in the lecture hall.",
                        "uz": "Ma’ruzalar zalida ko‘plab talabalar bor.",
                        "breakdown": "a lot of (ham sanaladigan, ham sanalmaydigan bilan keladi)"
                  },
                  {
                        "en": "I have very little time left to catch my flight.",
                        "uz": "Parvozimga yetib olish uchun juda oz vaqtim qoldi.",
                        "breakdown": "little time (vaqt sanalmaydi)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "Is \"money\" grammatically countable or uncountable in English?",
                  "options": [
                        {
                              "text": "Uncountable (we say \"much money\", not \"many moneys\")",
                              "correct": true,
                              "feedback": "To‘g‘ri! Dollar va so‘m sanaladi, ammo \"money\" so‘zi o‘zi sanalmaydi."
                        },
                        {
                              "text": "Countable (one money, two moneys)",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🍎 Many apples",
                  "right": "Plural countable items"
            },
            {
                  "left": "💧 Much water",
                  "right": "Non-countable liquid"
            },
            {
                  "left": "⏳ A little patience",
                  "right": "Small amount of non-countable quality"
            },
            {
                  "left": "👥 A few teammates",
                  "right": "Small number of countable people"
            }
      ],
      "fillBlank": {
            "sentence": "Could you lend me ___ dollars until tomorrow morning?",
            "options": [
                  "a few",
                  "a little",
                  "much"
            ],
            "correct": "a few",
            "explanation": "Dollar sanaladigan ot bo‘lgani uchun \"a few dollars\" deyiladi."
      },
      "teacherNotes": {
            "elicitation": "Show a handful of coins vs a glass of water: \"Which can I count 1, 2, 3?\"",
            "commonMistake": "Saying \"an advice\" or \"informations\" (both are strictly uncountable).",
            "quickCcq": "Can you count furniture?"
      }
},

    'a2-health-feelings': {
      "id": "a2-health-feelings",
      "levelId": "a2",
      "title": "Health, Illnesses & Wellbeing (Salomatlik va Hissiyotlar)",
      "category": "Daily Living",
      "icon": "fa-heart-pulse",
      "description": "Explain symptoms at the doctor, express emotions, and offer compassionate health advice.",
      "overview": "Shifokor qabulida alomatlarni tushuntirish, hissiyotlar va salomatlik tavsiyalari.",
      "flashcards": [
            {
                  "word": "Symptom",
                  "uz": "Alomat, simptom",
                  "phonetic": "/ˈsɪmp.təm/",
                  "pronunciation_uz": "[simp-tem]",
                  "pos": "Noun",
                  "definition": "A physical sign of an illness or medical condition.",
                  "example": "A persistent high fever is a common symptom of the flu.",
                  "chunk": "show mild symptoms"
            },
            {
                  "word": "Prescription",
                  "uz": "Retsept (shifokor yozgan)",
                  "phonetic": "/prɪˈskrɪp.ʃən/",
                  "pronunciation_uz": "[pri-skrip-shen]",
                  "pos": "Noun",
                  "definition": "A written paper from a doctor for medical treatment.",
                  "example": "The pharmacist carefully prepared my antibiotic prescription.",
                  "chunk": "write a prescription"
            },
            {
                  "word": "Exhausted",
                  "uz": "O‘ta charchagan, darmonsiz",
                  "phonetic": "/ɪɡˈzɔː.stɪd/",
                  "pronunciation_uz": "[ig-zost-id]",
                  "pos": "Adjective",
                  "definition": "Completely drained of energy and strength.",
                  "example": "After running the marathon, the athlete was utterly exhausted.",
                  "chunk": "feel totally exhausted"
            },
            {
                  "word": "Anxious",
                  "uz": "Xavotirlangan, bezovta",
                  "phonetic": "/ˈæŋk.ʃəs/",
                  "pronunciation_uz": "[enk-shes]",
                  "pos": "Adjective",
                  "definition": "Worried, uneasy, and nervous about future events.",
                  "example": "He felt slightly anxious before walking into the interview.",
                  "chunk": "anxious about results"
            }
      ],
      "grammar": {
            "rule": "Expressing Symptoms with \"Have got\" and Giving Advice with \"Should\"",
            "formula": "I have got a [headache/fever/cough]  |  You should [rest / see a doctor]",
            "explanation_uz": "Kasallik alomatlarida \"I have got a...\", maslahat berishda esa \"You should...\" ishlatiladi.",
            "examples": [
                  {
                        "en": "I have got a sore throat and a mild headache.",
                        "uz": "Tog‘og‘im og‘riyapti va yengil bosh og‘rig‘i bor.",
                        "breakdown": "have got + illness"
                  },
                  {
                        "en": "You should drink plenty of warm herbal tea and rest.",
                        "uz": "Ko‘p iliq giyohli choy ichishingiz va dam olishingiz kerak.",
                        "breakdown": "should + V1"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you \"should\" take medication, is it mandatory by police law or recommended advice?",
                  "options": [
                        {
                              "text": "It is recommended medical advice for your benefit",
                              "correct": true,
                              "feedback": "To‘g‘ri! Maslahat va tavsiya."
                        },
                        {
                              "text": "You will go to prison if you do not",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🤕 Splitting headache",
                  "right": "Severe head pain"
            },
            {
                  "left": "💊 Painkiller tablet",
                  "right": "Medicine that reduces aches"
            },
            {
                  "left": "🛌 Bed rest",
                  "right": "Staying in bed to recover"
            },
            {
                  "left": "🌡️ High temperature",
                  "right": "Fever above normal body heat"
            }
      ],
      "fillBlank": {
            "sentence": "You look very pale and unwell. You ___ see a physician immediately.",
            "options": [
                  "should",
                  "might to",
                  "can to"
            ],
            "correct": "should",
            "explanation": "Tavsiya bildirishda \"should\" modal fe’li to‘g‘ri keladi."
      },
      "teacherNotes": {
            "elicitation": "Hold forehead and grimace: \"What is the matter with me?\" (Headache).",
            "commonMistake": "Saying \"I have headache\" without article \"a\" (Correct: \"I have a headache\").",
            "quickCcq": "Does \"exhausted\" mean just a little bit sleepy?"
      }
},

    'a2-travel-transport': {
      "id": "a2-travel-transport",
      "levelId": "a2",
      "title": "Travel, Transport & Booking (Sayohat va Transport)",
      "category": "Travel & Mobility",
      "icon": "fa-plane-departure",
      "description": "Book accommodations, navigate airports and train stations, and arrange holiday journeys.",
      "overview": "Chipta xarid qilish, vokzal va aeroportda muloqot, mehmonxona bron qilish.",
      "flashcards": [
            {
                  "word": "Reservation",
                  "uz": "Oldindan band qilish (bron)",
                  "phonetic": "/ˌrez.əˈveɪ.ʃən/",
                  "pronunciation_uz": "[rez-er-vey-shen]",
                  "pos": "Noun",
                  "definition": "An arrangement to secure a seat, room, or table in advance.",
                  "example": "I have made a hotel reservation under the name Alimov.",
                  "chunk": "make a reservation"
            },
            {
                  "word": "Departure",
                  "uz": "Jo‘nab ketish",
                  "phonetic": "/dɪˈpɑː.tʃər/",
                  "pronunciation_uz": "[di-par-cher]",
                  "pos": "Noun",
                  "definition": "The act of leaving a place at the start of a trip.",
                  "example": "The flight departure is scheduled for exactly 10:15 AM.",
                  "chunk": "departure lounge"
            },
            {
                  "word": "Destination",
                  "uz": "Boradigan manzil",
                  "phonetic": "/ˌdes.tɪˈneɪ.ʃən/",
                  "pronunciation_uz": "[des-ti-ney-shen]",
                  "pos": "Noun",
                  "definition": "The ultimate place to which someone is traveling.",
                  "example": "Paris is one of the most visited tourist destinations.",
                  "chunk": "final destination"
            },
            {
                  "word": "Delay",
                  "uz": "Kechikish",
                  "phonetic": "/dɪˈleɪ/",
                  "pronunciation_uz": "[di-ley]",
                  "pos": "Noun",
                  "definition": "A period of time by which something is late.",
                  "example": "We apologize for the 30-minute delay due to mechanical inspection.",
                  "chunk": "flight delay"
            }
      ],
      "grammar": {
            "rule": "Present Continuous for Fixed Travel Arrangements & Prepositions of Transport",
            "formula": "Subject + am/is/are + V-ing + [future time]  |  By train / by plane / on foot",
            "explanation_uz": "Oldindan aniq chiptasi olingan sayohatlar uchun Present Continuous ishlatiladi.",
            "examples": [
                  {
                        "en": "We are flying to Istanbul next Tuesday morning.",
                        "uz": "Kelasi seshanba ertalab Istanbulga uchib ketayapmiz.",
                        "breakdown": "are flying (aniq chipta olingan reja)"
                  },
                  {
                        "en": "I usually travel to the historical center on foot.",
                        "uz": "Tarixiy markazga odatda piyoda boraman.",
                        "breakdown": "on foot (piyoda)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you travel \"on foot\", are you riding a bus or walking with your shoes?",
                  "options": [
                        {
                              "text": "Walking on your own feet",
                              "correct": true,
                              "feedback": "To‘g‘ri! Piyoda yurish."
                        },
                        {
                              "text": "Riding a bicycle",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🛫 Flight departure",
                  "right": "Plane leaving the runway"
            },
            {
                  "left": "🛬 Plane arrival",
                  "right": "Plane landing safely"
            },
            {
                  "left": "🏨 Hotel check-in",
                  "right": "Registering at the front reception"
            },
            {
                  "left": "🎫 Round-trip ticket",
                  "right": "Ticket for going and coming back"
            }
      ],
      "fillBlank": {
            "sentence": "I would like to book a ___ ticket to London and back to Tashkent.",
            "options": [
                  "round-trip",
                  "one-way",
                  "single"
            ],
            "correct": "round-trip",
            "explanation": "Borib-qaytish chiptasi \"round-trip\" (yoki \"return ticket\") deyiladi."
      },
      "teacherNotes": {
            "elicitation": "Show a passport and airplane boarding pass: \"Where am I going?\"",
            "commonMistake": "Saying \"by foot\" instead of the standard \"on foot\".",
            "quickCcq": "Does a one-way ticket bring you back home?"
      }
},

    'b1-passive-voice': {
      "id": "b1-passive-voice",
      "levelId": "b1",
      "title": "Passive Voice (Majhul Nisbat: Jarayon va Ixtirolar)",
      "category": "Grammar in Depth",
      "icon": "fa-gears",
      "description": "Shift focus from the doer to the action, processes, and historical discoveries.",
      "overview": "Ish-harakat ijrochisi emas, uning o‘zi va natijasi muhim bo‘lganda qo‘llanadigan tuzilma.",
      "flashcards": [
            {
                  "word": "Manufacture",
                  "uz": "Ishlab chiqarmoq, tayyorlamoq",
                  "phonetic": "/ˌmæn.jəˈfæk.tʃər/",
                  "pronunciation_uz": "[men-yu-fek-cher]",
                  "pos": "Verb",
                  "definition": "To produce goods in large quantities using machinery.",
                  "example": "These microchips are manufactured in specialized cleanrooms.",
                  "chunk": "manufactured locally"
            },
            {
                  "word": "Discover",
                  "uz": "Kashf qilmoq, topmoq",
                  "phonetic": "/dɪˈskʌv.ər/",
                  "pronunciation_uz": "[di-skav-er]",
                  "pos": "Verb",
                  "definition": "To find something unexpectedly or in the course of a search.",
                  "example": "Penicillin was discovered by Alexander Fleming in 1928.",
                  "chunk": "discovered by chance"
            },
            {
                  "word": "Construct",
                  "uz": "Qurmoq, bino qilmoq",
                  "phonetic": "/kənˈstrʌkt/",
                  "pronunciation_uz": "[kon-strakt]",
                  "pos": "Verb",
                  "definition": "To build or erect something large like a bridge or building.",
                  "example": "The high-speed rail line was constructed within two years.",
                  "chunk": "constructed rapidly"
            },
            {
                  "word": "Distribute",
                  "uz": "Tarqatmoq, yetkazmoq",
                  "phonetic": "/dɪˈstrɪb.juːt/",
                  "pronunciation_uz": "[di-strib-yut]",
                  "pos": "Verb",
                  "definition": "To deliver or supply goods to retailers and customers.",
                  "example": "The textbooks are distributed to schools every September.",
                  "chunk": "widely distributed"
            }
      ],
      "grammar": {
            "rule": "Passive Voice Formula: Subject + to be + Past Participle (V3)",
            "formula": "Present: am/is/are + V3  |  Past: was/were + V3  |  Agent: by [person]",
            "explanation_uz": "Majhul nisbatda asosiy e’tibor harakat ob’yektiga qaratiladi: \"The bridge was built in 1995\".",
            "examples": [
                  {
                        "en": "English is spoken by millions of people across the globe.",
                        "uz": "Ingliz tili butun dunyo bo‘ylab millionlab insonlar tomonidan so‘zlashiladi.",
                        "breakdown": "is spoken (gapiriladi)"
                  },
                  {
                        "en": "The electricity was invented over a century ago.",
                        "uz": "Elektr energiyasi bir asrdan ko‘proq vaqt oldin kashf etilgan.",
                        "breakdown": "was invented"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In \"The window was broken by a soccer ball\", did the window break itself?",
                  "options": [
                        {
                              "text": "No, the ball acted upon the window (Passive)",
                              "correct": true,
                              "feedback": "To‘g‘ri! Oyna majhul nisbatda harakat qabul qildi."
                        },
                        {
                              "text": "Yes, the window broke on its own decision",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🏛️ Was built in 1400",
                  "right": "Past simple passive history"
            },
            {
                  "left": "📦 Is delivered daily",
                  "right": "Present simple passive routine"
            },
            {
                  "left": "👤 By the author",
                  "right": "Agent introducing the original creator"
            },
            {
                  "left": "✉️ Was sent yesterday",
                  "right": "Completed action received"
            }
      ],
      "fillBlank": {
            "sentence": "Millions of smartphones ___ every year in modern automated factories.",
            "options": [
                  "are produced",
                  "produced",
                  "is producing"
            ],
            "correct": "are produced",
            "explanation": "Ko‘plikdagi ot bilan Present Passive \"are produced\" bo‘ladi."
      },
      "teacherNotes": {
            "elicitation": "Hold up a smartphone: \"Who made this? Is the maker or the phone our main topic?\"",
            "commonMistake": "Forgetting the \"to be\" verb and saying \"The car made in Japan\" (Correct: \"was made\").",
            "quickCcq": "Do we always need to mention \"by someone\" in passive voice?"
      }
},

    'b1-relative-clauses': {
      "id": "b1-relative-clauses",
      "levelId": "b1",
      "title": "Defining & Non-Defining Relative Clauses (Nisbiy Ergash Gaplar)",
      "category": "Sentence Architecture",
      "icon": "fa-link",
      "description": "Combine sentences seamlessly using who, which, that, whose, and where.",
      "overview": "Gaplarni \"who, which, where, whose\" orqali birlashtirib, aniq ma’lumot berish.",
      "flashcards": [
            {
                  "word": "Acquaintance",
                  "uz": "Tanish inson",
                  "phonetic": "/əˈkweɪn.təns/",
                  "pronunciation_uz": "[e-kweyn-tens]",
                  "pos": "Noun",
                  "definition": "A person one knows slightly, but who is not a close friend.",
                  "example": "He is an acquaintance who works in international trade.",
                  "chunk": "a casual acquaintance"
            },
            {
                  "word": "Colleague",
                  "uz": "Hamkasb",
                  "phonetic": "/ˈkɒl.iːɡ/",
                  "pronunciation_uz": "[kol-ig]",
                  "pos": "Noun",
                  "definition": "A person with whom one works in a profession or business.",
                  "example": "The colleague whose presentation won the award is very modest.",
                  "chunk": "trusted colleague"
            },
            {
                  "word": "Landmark",
                  "uz": "Mo‘ljal bino, diqqatga sazovor joy",
                  "phonetic": "/ˈlænd.mɑːk/",
                  "pronunciation_uz": "[lend-mark]",
                  "pos": "Noun",
                  "definition": "An easily recognizable feature of a landscape or city.",
                  "example": "The clock tower, which was built in 1859, is a famous landmark.",
                  "chunk": "historic landmark"
            },
            {
                  "word": "Residence",
                  "uz": "Turar-joy, qarorgoh",
                  "phonetic": "/ˈrez.ɪ.dəns/",
                  "pronunciation_uz": "[rez-i-dens]",
                  "pos": "Noun",
                  "definition": "A person's home; the place where someone lives.",
                  "example": "This is the peaceful residence where the writer penned his novel.",
                  "chunk": "official residence"
            }
      ],
      "grammar": {
            "rule": "Relative Pronouns: Who (people), Which/That (things), Where (places), Whose (possession)",
            "formula": "Person + WHO + [verb]  |  Thing + WHICH/THAT + [verb]  |  Place + WHERE  |  Owner + WHOSE",
            "explanation_uz": "Insonlar uchun \"who\", buyumlar uchun \"which/that\", joylar uchun \"where\", egalik uchun \"whose\" qo‘llanadi.",
            "examples": [
                  {
                        "en": "The student who scored highest in the olympiad received a scholarship.",
                        "uz": "Olimpiadada eng yuqori ball olgan talaba stipendiya oldi.",
                        "breakdown": "student + who"
                  },
                  {
                        "en": "That is the cozy restaurant where we had our first meeting.",
                        "uz": "Bu biz birinchi uchrashuvimizni o‘tkazgan shinam restorandir.",
                        "breakdown": "restaurant + where"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "Can you use \"who\" to refer to a brand new car?",
                  "options": [
                        {
                              "text": "No, \"who\" is strictly for human beings",
                              "correct": true,
                              "feedback": "To‘g‘ri! Mashinalar uchun \"which\" yoki \"that\" ishlatiladi."
                        },
                        {
                              "text": "Yes, cars have personalities",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "👤 The doctor WHO treated me",
                  "right": "Person relative pronoun"
            },
            {
                  "left": "📱 The device THAT I purchased",
                  "right": "Inanimate object pronoun"
            },
            {
                  "left": "📍 The town WHERE I was born",
                  "right": "Geographical location pronoun"
            },
            {
                  "left": "💼 The author WHOSE book became famous",
                  "right": "Possession relative pronoun"
            }
      ],
      "fillBlank": {
            "sentence": "This is the dedicated teacher ___ inspired me to study linguistics.",
            "options": [
                  "who",
                  "which",
                  "where"
            ],
            "correct": "who",
            "explanation": "O‘qituvchi inson bo‘lgani uchun \"who\" nisbiy olmoshi qo‘yiladi."
      },
      "teacherNotes": {
            "elicitation": "Point to a student: \"This is Jasur. He solved the hardest riddle.\" -> \"This is Jasur who...\"",
            "commonMistake": "Using commas in defining relative clauses or using \"what\" instead of \"that\".",
            "quickCcq": "Does \"where\" require a preposition at the end of the clause?"
      }
},

    'b1-modals-deduction': {
      "id": "b1-modals-deduction",
      "levelId": "b1",
      "title": "Modals of Deduction & Probability (Mantiqiy Xulosa Modal Fe’llari)",
      "category": "Advanced Logic",
      "icon": "fa-magnifying-glass-chart",
      "description": "Deduce facts with certainty using must be (99%), might/could be (50%), and can't be (0%).",
      "overview": "Dalillarga asoslanib mantiqiy xulosa chiqarish: aniq (must), ehtimol (might), imkonsiz (can't).",
      "flashcards": [
            {
                  "word": "Deduction",
                  "uz": "Mantiqiy xulosa",
                  "phonetic": "/dɪˈdʌk.ʃən/",
                  "pronunciation_uz": "[di-dak-shen]",
                  "pos": "Noun",
                  "definition": "The process of reaching a logical conclusion based on evidence.",
                  "example": "Sherlock Holmes made a brilliant deduction from the wet footprints.",
                  "chunk": "logical deduction"
            },
            {
                  "word": "Inconceivable",
                  "uz": "Aqlga sig‘maydigan, imkonsiz",
                  "phonetic": "/ˌɪn.kənˈsiː.və.bəl/",
                  "pronunciation_uz": "[in-kon-si-vebl]",
                  "pos": "Adjective",
                  "definition": "Not capable of being imagined or believed; impossible.",
                  "example": "It is inconceivable that he committed the crime; he has an alibi.",
                  "chunk": "utterly inconceivable"
            },
            {
                  "word": "Plausible",
                  "uz": "Haqiqatga yaqin, ehtimoliy",
                  "phonetic": "/ˈplɔː.zə.bəl/",
                  "pronunciation_uz": "[plo-zibl]",
                  "pos": "Adjective",
                  "definition": "Seeming reasonable, probable, or likely to be true.",
                  "example": "His explanation for the flight delay sounded completely plausible.",
                  "chunk": "plausible explanation"
            },
            {
                  "word": "Certainty",
                  "uz": "Ishonch, qat’iylik",
                  "phonetic": "/ˈsɜː.tən.ti/",
                  "pronunciation_uz": "[ser-ten-ti]",
                  "pos": "Noun",
                  "definition": "Firm conviction that something is unquestionably the case.",
                  "example": "We can say with absolute certainty that water boils at 100°C.",
                  "chunk": "with complete certainty"
            }
      ],
      "grammar": {
            "rule": "Degrees of Certainty: Must (99% sure) vs Might/May (50% sure) vs Can't (Impossible)",
            "formula": "Must be + [adj/noun]  |  Might/Could be + [adj/noun]  |  Can't be + [adj/noun]",
            "explanation_uz": "Aniq shunday bo‘lsa \"must\", ehtimol bo‘lsa \"might/could\", bo‘lishi mutlaqo imkonsiz bo‘lsa \"can't\" ishlatiladi.",
            "examples": [
                  {
                        "en": "He has worked for 14 hours straight; he must be exhausted.",
                        "uz": "U ketma-ket 14 soat ishladi; shubhasiz juda charchagan bo‘lsa kerak.",
                        "breakdown": "must be (99% ishonch)"
                  },
                  {
                        "en": "That woman can't be his grandmother; she looks only 30 years old!",
                        "uz": "U ayol uning buvisi bo‘lishi mumkin emas; 30 yoshdek ko‘rinyapti!",
                        "breakdown": "can't be (mantiqan imkonsiz)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you say \"He can't be at home\", do you think he is probably at home or definitely not?",
                  "options": [
                        {
                              "text": "Definitely NOT at home based on evidence",
                              "correct": true,
                              "feedback": "To‘g‘ri! Imkonsiz xulosa."
                        },
                        {
                              "text": "He is definitely sleeping in his bed",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "💯 Must be true",
                  "right": "Almost 100% logical certainty"
            },
            {
                  "left": "❓ Might be true",
                  "right": "50% possibility, uncertain"
            },
            {
                  "left": "🚫 Can't be true",
                  "right": "Logically impossible based on facts"
            },
            {
                  "left": "🕵️ Detective clue",
                  "right": "Evidence leading to deduction"
            }
      ],
      "fillBlank": {
            "sentence": "The lights are off and their car is gone; they ___ be away on holiday.",
            "options": [
                  "must",
                  "can't",
                  "should to"
            ],
            "correct": "must",
            "explanation": "Uydagi chiroqlar o‘chiq va mashina yo‘qligi ularning ketganligini (must be) bildiradi."
      },
      "teacherNotes": {
            "elicitation": "Knock on door: \"Who is that? It is 3 AM.\" -> \"It can't be the postman!\"",
            "commonMistake": "Using \"mustn't\" for impossible deduction (Say \"can't be\", not \"mustn't be\").",
            "quickCcq": "Does \"could be\" mean you are 100% certain?"
      }
},

    'b1-gerunds-infinitives': {
      "id": "b1-gerunds-infinitives",
      "levelId": "b1",
      "title": "Verb Patterns: Gerunds vs Infinitives (Gerundiy va Infinitiv)",
      "category": "Grammar Precision",
      "icon": "fa-shuffle",
      "description": "Distinguish between verbs followed by -ing and verbs followed by to + V1 with meaning shifts.",
      "overview": "Qaysi fe’llardan keyin \"-ing\" va qaysilaridan keyin \"to\" kelishi va ularning ma’no farqi.",
      "flashcards": [
            {
                  "word": "Postpone",
                  "uz": "Keyinga qoldirmoq",
                  "phonetic": "/pəʊstˈpəʊn/",
                  "pronunciation_uz": "[poust-poun]",
                  "pos": "Verb",
                  "definition": "To delay an event until a later date (followed by Gerund).",
                  "example": "They decided to postpone signing the contract until next week.",
                  "chunk": "postpone doing something"
            },
            {
                  "word": "Hesitate",
                  "uz": "Ikkilanmoq",
                  "phonetic": "/ˈhez.ɪ.teɪt/",
                  "pronunciation_uz": "[hez-i-teyt]",
                  "pos": "Verb",
                  "definition": "To pause before saying or doing something (followed by Infinitive).",
                  "example": "Do not hesitate to ask any questions during our lecture.",
                  "chunk": "hesitate to ask"
            },
            {
                  "word": "Attempt",
                  "uz": "Urinmoq, harakat qilmoq",
                  "phonetic": "/əˈtempt/",
                  "pronunciation_uz": "[e-tempt]",
                  "pos": "Verb",
                  "definition": "To try to do something, typically without guaranteed success.",
                  "example": "She attempted to climb the rocky peak without safety ropes.",
                  "chunk": "attempt to achieve"
            },
            {
                  "word": "Regret",
                  "uz": "Afsuslanmoq",
                  "phonetic": "/rɪˈɡret/",
                  "pronunciation_uz": "[ri-gret]",
                  "pos": "Verb",
                  "definition": "To feel sad or remorseful about an action or decision.",
                  "example": "I regret telling him the confidential secret.",
                  "chunk": "regret doing something"
            }
      ],
      "grammar": {
            "rule": "Verbs + Gerund (-ing) vs Verbs + Infinitive (to + V1)",
            "formula": "Enjoy/Avoid/Mind + V-ing  |  Decide/Promise/Hope + to V1  |  Stop to do vs Stop doing",
            "explanation_uz": "\"Enjoy, avoid\" doimo \"-ing\" oladi. \"Decide, want\" doimo \"to\" oladi. \"Stop\" ikkala shaklda turlicha ma’noga ega.",
            "examples": [
                  {
                        "en": "I stopped smoking five years ago.",
                        "uz": "Men chekishni 5 yil oldin tashladim (butunlay to‘xtatdim).",
                        "breakdown": "stop + V-ing (odatni to‘xtatish)"
                  },
                  {
                        "en": "While driving, he stopped to buy a bottle of water.",
                        "uz": "Mashina haydab ketayotib, suv sotib olish uchun to‘xtadi.",
                        "breakdown": "stop + to V1 (boshqa ish uchun to‘xtash)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you \"remember to lock\" the door, did you lock it before or after remembering?",
                  "options": [
                        {
                              "text": "You remembered first, then locked it (duty)",
                              "correct": true,
                              "feedback": "To‘g‘ri! Eslab, so‘ng qulfladingiz."
                        },
                        {
                              "text": "You locked it first, then had a childhood memory",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🏊 Enjoy swimming",
                  "right": "Verb followed by gerund (-ing)"
            },
            {
                  "left": "🎯 Decide to participate",
                  "right": "Verb followed by infinitive (to)"
            },
            {
                  "left": "🛑 Stop smoking",
                  "right": "Permanently quit a habit"
            },
            {
                  "left": "☕ Stop to drink tea",
                  "right": "Pause ongoing motion in order to do"
            }
      ],
      "fillBlank": {
            "sentence": "He promised ___ me with my university research paper this weekend.",
            "options": [
                  "to help",
                  "helping",
                  "help"
            ],
            "correct": "to help",
            "explanation": "\"Promise\" fe’li o‘zidan keyin infinitiv (to help) talab qiladi."
      },
      "teacherNotes": {
            "elicitation": "Act out smoking, then throw cigarette away: \"I stopped smoking\" vs \"I stopped to smoke\".",
            "commonMistake": "Saying \"I enjoy to play tennis\" instead of \"I enjoy playing tennis\".",
            "quickCcq": "Does \"avoid\" take gerund or infinitive?"
      }
},

    'b2-third-mixed-conditionals': {
      "id": "b2-third-mixed-conditionals",
      "levelId": "b2",
      "title": "Third & Mixed Conditionals (Uchinchi va Aralash Shart Ergash Gaplar)",
      "category": "Complex Grammar",
      "icon": "fa-clock-rotate-left",
      "description": "Express profound past regrets and connect past decisions to present realities.",
      "overview": "O‘tmishdagi afsuslar va o‘tmishdagi qarorlarning bugungi kundagi oqibatlari.",
      "flashcards": [
            {
                  "word": "Remorse",
                  "uz": "Chuqur vijdon azobi, afsus",
                  "phonetic": "/rɪˈmɔːs/",
                  "pronunciation_uz": "[ri-mors]",
                  "pos": "Noun",
                  "definition": "Deep regret or guilt for a wrong committed.",
                  "example": "He felt overwhelming remorse for not studying harder.",
                  "chunk": "feel deep remorse"
            },
            {
                  "word": "Hypothetical",
                  "uz": "Faraziy, taxminiy",
                  "phonetic": "/ˌhaɪ.pəˈθet.ɪ.kəl/",
                  "pronunciation_uz": "[hay-po-tet-i-kl]",
                  "pos": "Adjective",
                  "definition": "Based on a situation that is not real but imagined.",
                  "example": "Let us consider a hypothetical situation where resources are endless.",
                  "chunk": "hypothetical scenario"
            },
            {
                  "word": "Repercussion",
                  "uz": "Aks sado, uzoq muddatli oqibat",
                  "phonetic": "/ˌriː.pəˈkʌʃ.ən/",
                  "pronunciation_uz": "[ri-per-kash-en]",
                  "pos": "Noun",
                  "definition": "An unintended consequence occurring some time after an event.",
                  "example": "His hasty decision had serious financial repercussions.",
                  "chunk": "severe repercussions"
            },
            {
                  "word": "Retrospect",
                  "uz": "O‘tmishga nazar",
                  "phonetic": "/ˈret.rə.spekt/",
                  "pronunciation_uz": "[ret-ro-spekt]",
                  "pos": "Noun",
                  "definition": "A survey or review of a past course of events.",
                  "example": "In retrospect, moving abroad was the best decision of my life.",
                  "chunk": "in retrospect"
            }
      ],
      "grammar": {
            "rule": "Third Conditional (Past -> Past) and Mixed Conditional (Past -> Present)",
            "formula": "Third: If + had V3, would have V3  ||  Mixed: If + had V3, would V1 (now)",
            "explanation_uz": "Uchinchi shart o‘tmishdagi afsusni bildiradi. Aralash shart esa o‘tmishdagi xatoning hozirgi oqibatini ko‘rsatadi.",
            "examples": [
                  {
                        "en": "If I had studied medicine, I would be a doctor right now.",
                        "uz": "Agar o‘shanda tibbiyotda o‘qiganimda, hozir shifokor bo‘lar edim.",
                        "breakdown": "Mixed: had studied (past) -> would be (present)"
                  },
                  {
                        "en": "If we had taken the taxi, we would not have missed our flight.",
                        "uz": "Agar taksiga o‘tirganimizda edi, parvozimizni o‘tkazib yubormagan bo‘lardik.",
                        "breakdown": "Third: had taken -> would not have missed"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In \"If I had set my alarm, I wouldn't be late now\", did the person set the alarm in the past?",
                  "options": [
                        {
                              "text": "No, they forgot to set it, and now they are late",
                              "correct": true,
                              "feedback": "To‘g‘ri! O‘tmishdagi xato tufayli hozir kechikmoqda."
                        },
                        {
                              "text": "Yes, they arrived perfectly on time",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "⏳ If I had known the truth",
                  "right": "Past hypothetical condition"
            },
            {
                  "left": "✈️ Would have joined you",
                  "right": "Past hypothetical result"
            },
            {
                  "left": "💼 Would be rich today",
                  "right": "Present result of a past condition (Mixed)"
            },
            {
                  "left": "😔 Regret about missed chances",
                  "right": "Emotional driver of third conditional"
            }
      ],
      "fillBlank": {
            "sentence": "If she had listened to her mentor, she ___ in this complicated predicament today.",
            "options": [
                  "would not be",
                  "would not have been",
                  "will not be"
            ],
            "correct": "would not be",
            "explanation": "Hozirgi kundagi oqibat (today) bo‘lgani uchun aralash shart \"would not be\" qo‘llanadi."
      },
      "teacherNotes": {
            "elicitation": "Tell a short story: \"I didn't study -> I failed -> I am sad now. Connect them!\"",
            "commonMistake": "Putting \"would have\" inside the \"if\" clause (\"If I would have known\").",
            "quickCcq": "Can third conditional change anything in real life today?"
      }
},

    'b2-reported-speech': {
      "id": "b2-reported-speech",
      "levelId": "b2",
      "title": "Reported Speech & Reporting Verbs (O‘zlashtirma Gap va Fe’llar)",
      "category": "Communication Nuance",
      "icon": "fa-comments",
      "description": "Transform direct quotes into natural reported speech using verbs like insist, deny, and suggest.",
      "overview": "Birovning gapini yetkazish va \"say/tell\" o‘rniga boy fe’llardan (warn, admit, advise) foydalanish.",
      "flashcards": [
            {
                  "word": "Admit",
                  "uz": "Tan olmoq, iqror bo‘lmoq",
                  "phonetic": "/ədˈmɪt/",
                  "pronunciation_uz": "[ed-mit]",
                  "pos": "Verb",
                  "definition": "To confess to be true or to be one's fault (followed by -ing).",
                  "example": "The driver admitted exceeding the speed limit on the highway.",
                  "chunk": "admit making a mistake"
            },
            {
                  "word": "Deny",
                  "uz": "Inkor qilmoq, rad etmoq",
                  "phonetic": "/dɪˈnaɪ/",
                  "pronunciation_uz": "[di-nay]",
                  "pos": "Verb",
                  "definition": "To state that one refuses to admit the truth of an accusation.",
                  "example": "The suspect firmly denied stealing the valuable jewelry.",
                  "chunk": "deny any involvement"
            },
            {
                  "word": "Urge",
                  "uz": "Undamoq, qistamoq",
                  "phonetic": "/ɜːdʒ/",
                  "pronunciation_uz": "[erj]",
                  "pos": "Verb",
                  "definition": "To strongly encourage someone to take a specific action.",
                  "example": "The doctor urged him to adopt a healthier diet immediately.",
                  "chunk": "urge caution"
            },
            {
                  "word": "Confidential",
                  "uz": "Maxfiy, sir saqlanadigan",
                  "phonetic": "/ˌkɒn.fɪˈden.ʃəl/",
                  "pronunciation_uz": "[kon-fi-den-shl]",
                  "pos": "Adjective",
                  "definition": "Intended to be kept secret and private.",
                  "example": "She informed me that the financial report was strictly confidential.",
                  "chunk": "confidential information"
            }
      ],
      "grammar": {
            "rule": "Tense Backshifting & Advanced Reporting Verb Patterns",
            "formula": "Direct: Present -> Reported: Past  ||  Verb + that / Verb + someone to do / Verb + V-ing",
            "explanation_uz": "Ko‘chirma gap o‘zlashtirilganda zamonlar bir pog‘ona orqaga suriladi (Present -> Past). \"Advise, warn, insist\" kabi fe’llar nutqni boyitadi.",
            "examples": [
                  {
                        "en": "\"I will assist you tomorrow,\" he said -> He promised that he would assist me the following day.",
                        "uz": "\"Ertaga yordam beraman,\" dedi -> U ertasi kuni yordam berishga va’da berdi.",
                        "breakdown": "will -> would, tomorrow -> the following day"
                  },
                  {
                        "en": "The officer warned us not to venture into the foggy mountains.",
                        "uz": "Zobit bizni tumanli tog‘larga bormaslikdan ogohlantirdi.",
                        "breakdown": "warned + object + not to V1"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In reported speech, what does the time expression \"now\" typically shift into?",
                  "options": [
                        {
                              "text": "\"Then\" or \"at that time\"",
                              "correct": true,
                              "feedback": "To‘g‘ri! \"Now\" so‘zi \"then\" ga aylanadi."
                        },
                        {
                              "text": "It remains \"now\" without any change",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🗣️ She promised to help",
                  "right": "Verb + to-infinitive pattern"
            },
            {
                  "left": "🛑 He denied taking the funds",
                  "right": "Verb + gerund pattern"
            },
            {
                  "left": "⚠️ They warned us against the risk",
                  "right": "Verb + preposition pattern"
            },
            {
                  "left": "📜 Said -> Had said",
                  "right": "Tense backshift rule"
            }
      ],
      "fillBlank": {
            "sentence": "The defense attorney firmly ___ that his client was present at the crime scene.",
            "options": [
                  "denied",
                  "insisted to",
                  "refused"
            ],
            "correct": "denied",
            "explanation": "Voqeani rad etishda \"denied that\" to‘g‘ri keladi."
      },
      "teacherNotes": {
            "elicitation": "Whisper to student: \"I am hungry.\" Ask class: \"What did he just say?\"",
            "commonMistake": "Using \"said me\" instead of \"told me\" or \"said to me\".",
            "quickCcq": "Does \"suggest\" take an infinitive with \"to\"? (No: suggest doing or suggest that)."
      }
},

    'b2-future-aspects': {
      "id": "b2-future-aspects",
      "levelId": "b2",
      "title": "Future Continuous & Future Perfect (Kelasi Davomiy va Tugallangan Zamonlar)",
      "category": "Time Perspectives",
      "icon": "fa-forward-fast",
      "description": "Project future moments and achievements using will be doing and will have done by a deadline.",
      "overview": "Kelajakdagi ma’lum vaqtda davom etayotgan jarayon va belgilangan muddatga qadar yakunlanadigan ishlar.",
      "flashcards": [
            {
                  "word": "Milestone",
                  "uz": "Muhim bosqich, burilish nuqtasi",
                  "phonetic": "/ˈmaɪl.stəʊn/",
                  "pronunciation_uz": "[mayl-stoun]",
                  "pos": "Noun",
                  "definition": "A significant stage or event in the development of something.",
                  "example": "Graduating from medical school is a massive career milestone.",
                  "chunk": "reach a milestone"
            },
            {
                  "word": "Deadline",
                  "uz": "Oxirgi qat’iy muddat",
                  "phonetic": "/ˈded.laɪn/",
                  "pronunciation_uz": "[ded-layn]",
                  "pos": "Noun",
                  "definition": "The latest time or date by which something must be completed.",
                  "example": "By the midnight deadline, all project drafts will have been submitted.",
                  "chunk": "meet the deadline"
            },
            {
                  "word": "Projected",
                  "uz": "Bashorat qilingan, kutilayotgan",
                  "phonetic": "/prəˈdʒek.tɪd/",
                  "pronunciation_uz": "[pro-jek-tid]",
                  "pos": "Adjective",
                  "definition": "Estimated or forecasted based on current trends.",
                  "example": "The projected economic growth will be climbing steadily.",
                  "chunk": "projected timeline"
            },
            {
                  "word": "Accomplishment",
                  "uz": "Muvaffaqiyat, erishilgan natija",
                  "phonetic": "/əˈkʌm.plɪʃ.mənt/",
                  "pronunciation_uz": "[e-kam-plish-ment]",
                  "pos": "Noun",
                  "definition": "Something that has been achieved successfully.",
                  "example": "Publishing two books before age thirty was an extraordinary accomplishment.",
                  "chunk": "notable accomplishment"
            }
      ],
      "grammar": {
            "rule": "Future Continuous (will be + V-ing) vs Future Perfect (will have + V3)",
            "formula": "Continuous: At this time tomorrow, I will be flying  ||  Perfect: By 2030, I will have graduated",
            "explanation_uz": "\"Future Continuous\" kelajakdagi aniq lahzada davom etayotgan harakat. \"Future Perfect\" esa \"by\" (gacha) ko‘rsatkichi bilan tugallanadigan ishdir.",
            "examples": [
                  {
                        "en": "This time tomorrow, we will be flying over the Atlantic Ocean.",
                        "uz": "Ertaga ayni shu vaqtda biz Atlantika okeani ustidan uchib ketayotgan bo‘lamiz.",
                        "breakdown": "will be flying (jarayon)"
                  },
                  {
                        "en": "By the end of this semester, they will have completed all modules.",
                        "uz": "Ushbu semestr oxirigacha ular barcha modullarni tugatib bo‘lgan bo‘ladilar.",
                        "breakdown": "will have completed (yakunlangan natija)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "If you say \"By Friday I will have finished my essay\", will the essay still be unwritten on Saturday?",
                  "options": [
                        {
                              "text": "No, it will already be complete before Friday ends",
                              "correct": true,
                              "feedback": "To‘g‘ri! Juma kunigacha tayyor bo‘ladi."
                        },
                        {
                              "text": "Yes, you will just start writing on Saturday",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🛫 Will be flying at 3 PM",
                  "right": "Action in progress at a future moment"
            },
            {
                  "left": "🏁 Will have finished by Friday",
                  "right": "Action completed prior to a future deadline"
            },
            {
                  "left": "📅 By next year",
                  "right": "Future perfect time indicator"
            },
            {
                  "left": "⏰ At this exact time tomorrow",
                  "right": "Future continuous time indicator"
            }
      ],
      "fillBlank": {
            "sentence": "By the time you wake up tomorrow morning, our flight ___ in London.",
            "options": [
                  "will have landed",
                  "will be landing",
                  "will land"
            ],
            "correct": "will have landed",
            "explanation": "\"By the time you wake up\" natijasi oldin yakunlanganini bildirib \"will have landed\" bo‘ladi."
      },
      "teacherNotes": {
            "elicitation": "Draw a timeline: \"Where will you be at 8 PM tonight? What will you have achieved by 2030?\"",
            "commonMistake": "Using \"by\" with simple future instead of future perfect.",
            "quickCcq": "Can you use Future Perfect without a deadline point in time?"
      }
},

    'b2-essay-cohesion': {
      "id": "b2-essay-cohesion",
      "levelId": "b2",
      "title": "Essay Writing & Discourse Markers (Insho Yozish va Mantiqiy Bog‘lovchilar)",
      "category": "Academic Writing",
      "icon": "fa-feather-pointed",
      "description": "Structure cohesive IELTS/TOEFL essays using contrasting, conceding, and summarizing markers.",
      "overview": "Akademik insho tuzilishi, argumentlarni asoslash va \"however, although, consequently\" bog‘lovchilari.",
      "flashcards": [
            {
                  "word": "Furthermore",
                  "uz": "Bundan tashqari, yana shuni aytish joizki",
                  "phonetic": "/ˌfɜː.ðəˈmɔː/",
                  "pronunciation_uz": "[fer-zer-mor]",
                  "pos": "Adverb",
                  "definition": "In addition; introducing a fresh point that reinforces the argument.",
                  "example": "The proposal is cost-effective; furthermore, it reduces carbon emissions.",
                  "chunk": "furthermore, it is vital"
            },
            {
                  "word": "Nevertheless",
                  "uz": "Shunga qaramasdan",
                  "phonetic": "/ˌnev.ə.ðəˈles/",
                  "pronunciation_uz": "[nev-er-ze-les]",
                  "pos": "Adverb",
                  "definition": "In spite of that; nonetheless.",
                  "example": "The experiment faced early hurdles; nevertheless, it proved triumphant.",
                  "chunk": "nevertheless, we continued"
            },
            {
                  "word": "Consequently",
                  "uz": "Oqibatda, natijada",
                  "phonetic": "/ˈkɒn.sɪ.kwənt.li/",
                  "pronunciation_uz": "[kon-si-kwent-li]",
                  "pos": "Adverb",
                  "definition": "As a result; therefore.",
                  "example": "He missed several vital lectures; consequently, his exam score dropped.",
                  "chunk": "consequently, results improved"
            },
            {
                  "word": "Cohesion",
                  "uz": "Mantiqiy bog‘liqlik, yaxlitlik",
                  "phonetic": "/kəʊˈhiː.ʒən/",
                  "pronunciation_uz": "[kou-hi-zhen]",
                  "pos": "Noun",
                  "definition": "The quality of being logical, consistent, and cleanly unified.",
                  "example": "Use clear transitional phrases to ensure paragraph cohesion.",
                  "chunk": "textual cohesion"
            }
      ],
      "grammar": {
            "rule": "Paragraph Architecture: Topic Sentence -> Supporting Evidence -> Concluding Thought",
            "formula": "Contrast: On the one hand... On the other hand  |  Result: Therefore / Hence  |  Summary: In conclusion",
            "explanation_uz": "Akademik matnda fikrlar bir-biriga mantiqiy bog‘lovchilar (transitional phrases) orqali uzviy ulanadi.",
            "examples": [
                  {
                        "en": "Although technological advancements offer convenience, they also present cybersecurity dilemmas.",
                        "uz": "Texnologik yutuqlar qulaylik yaratsa-da, ular kiberxavfsizlik muammolarini ham keltirib chiqaradi.",
                        "breakdown": "Although (qarama-qarshilik) + comma"
                  },
                  {
                        "en": "In conclusion, governments must allocate substantial funding toward renewable infrastructure.",
                        "uz": "Xulosa qilib aytganda, hukumatlar qayta tiklanuvchi infratuzilmaga salmoqli mablag‘ ajratishi lozim.",
                        "breakdown": "In conclusion (xulosa kiritish)"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "Does \"Furthermore\" introduce an opposing argument or reinforce the current point?",
                  "options": [
                        {
                              "text": "It reinforces and adds supporting evidence",
                              "correct": true,
                              "feedback": "To‘g‘ri! Fikrni qo‘shimcha mustahkamlaydi."
                        },
                        {
                              "text": "It contradicts the previous sentence completely",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "➕ Furthermore / In addition",
                  "right": "Adding reinforcing information"
            },
            {
                  "left": "⚖️ However / On the contrary",
                  "right": "Introducing contrasting viewpoint"
            },
            {
                  "left": "🎯 Consequently / Therefore",
                  "right": "Showing cause and effect consequence"
            },
            {
                  "left": "🏁 To summarize / In conclusion",
                  "right": "Wrapping up final essay verdict"
            }
      ],
      "fillBlank": {
            "sentence": "Renewable energy is becoming cheaper; ___, solar installations are soaring worldwide.",
            "options": [
                  "consequently",
                  "although",
                  "despite"
            ],
            "correct": "consequently",
            "explanation": "Sabab-oqibat natijasini ko‘rsatish uchun \"consequently\" (natijada) to‘g‘ri."
      },
      "teacherNotes": {
            "elicitation": "Give students two unrelated sentences: \"How can we glue these thoughts together logically?\"",
            "commonMistake": "Overusing \"Moreover\" at the start of every single sentence.",
            "quickCcq": "Can you use \"In conclusion\" at the beginning of the introductory paragraph?"
      }
},

    'c1-cleft-sentences': {
      "id": "c1-cleft-sentences",
      "levelId": "c1",
      "title": "Cleft Sentences & Rhetorical Emphasis (Fikrni Urg‘ulash Tuzilmalari)",
      "category": "Stylistic Mastery",
      "icon": "fa-highlighter",
      "description": "Direct the listener’s attention with precision using \"It is/was... that\" and \"What I admire is...\".",
      "overview": "Ingliz tilida ma’lum so‘z yoki fikrga diqqatni qaratish uchun gapni ikkiga bo‘lib urg‘ulash san’ati.",
      "flashcards": [
            {
                  "word": "Emphasis",
                  "uz": "Urg‘u, e’tibor qaratish",
                  "phonetic": "/ˈem.fə.sɪs/",
                  "pronunciation_uz": "[em-fe-sis]",
                  "pos": "Noun",
                  "definition": "Special importance, value, or prominence given to something.",
                  "example": "The CEO placed immense emphasis on user privacy and data security.",
                  "chunk": "place heavy emphasis"
            },
            {
                  "word": "Rhetoric",
                  "uz": "Ritorika, notiqlik san’ati",
                  "phonetic": "/ˈret.ər.ɪk/",
                  "pronunciation_uz": "[ret-er-ik]",
                  "pos": "Noun",
                  "definition": "The art of effective or persuasive speaking or writing.",
                  "example": "His persuasive rhetoric swayed the skeptical parliamentary jury.",
                  "chunk": "rhetorical device"
            },
            {
                  "word": "Prominence",
                  "uz": "Ko‘zga tashlanuvchanlik, nufuz",
                  "phonetic": "/ˈprɒm.ɪ.nəns/",
                  "pronunciation_uz": "[prom-i-nens]",
                  "pos": "Noun",
                  "definition": "The state of being widely noticed or important.",
                  "example": "The candidate’s stance on education rose to national prominence.",
                  "chunk": "gain prominence"
            },
            {
                  "word": "Foreground",
                  "uz": "Oldingi planga chiqarmoq",
                  "phonetic": "/ˈfɔː.ɡraʊnd/",
                  "pronunciation_uz": "[for-graund]",
                  "pos": "Verb",
                  "definition": "To make something the most prominent feature.",
                  "example": "The essay foregrounds the ethical responsibilities of AI developers.",
                  "chunk": "foreground the issue"
            }
      ],
      "grammar": {
            "rule": "It-Cleft and Wh-Cleft (Pseudo-cleft) Constructions",
            "formula": "It is/was + [Emphasized Element] + that/who...  ||  What + [Subject + Verb] + is/was + [Focus]",
            "explanation_uz": "\"John broke the window\" o‘rniga urg‘u berish uchun: \"It was John who broke the window\" yoki \"What John broke was the window\" deyiladi.",
            "examples": [
                  {
                        "en": "It was his profound honesty that earned our unwavering respect.",
                        "uz": "Bizning cheksiz hurmatimizga sazovor bo‘lgan narsa uning chuqur halolligi edi.",
                        "breakdown": "It was + honesty + that..."
                  },
                  {
                        "en": "What impressed the admissions committee was her original research methodology.",
                        "uz": "Qabul komissiyasini hayratda qoldirgan narsa uning noyob tadqiqot metodologiyasi bo‘ldi.",
                        "breakdown": "What impressed + was + methodology"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "Does \"It was Sarah who solved the equation\" emphasize Sarah herself or the equation?",
                  "options": [
                        {
                              "text": "It places direct focus and spotlight on Sarah",
                              "correct": true,
                              "feedback": "To‘g‘ri! Diqqat aynan Sarahga qaratilgan."
                        },
                        {
                              "text": "It emphasizes only the blackboard",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "✨ It was the CEO WHO made the announcement",
                  "right": "It-cleft emphasizing the human agent"
            },
            {
                  "left": "💡 What we need IS constructive feedback",
                  "right": "Wh-cleft emphasizing the requirement"
            },
            {
                  "left": "📍 All I want IS a peaceful workspace",
                  "right": "All-cleft restricting the focus"
            },
            {
                  "left": "🎭 Dramatic stylistic transformation",
                  "right": "Goal of cleft sentence usage"
            }
      ],
      "fillBlank": {
            "sentence": "___ really astonished the audience was her virtuoso violin improvisation.",
            "options": [
                  "What",
                  "That",
                  "Which"
            ],
            "correct": "What",
            "explanation": "Pseudo-cleft boshida \"What really astonished...\" to‘g‘ri keladi."
      },
      "teacherNotes": {
            "elicitation": "Say: \"I love your courage.\" Ask: \"How can I make courage the dramatic spotlight?\"",
            "commonMistake": "Using \"What was it that\" inappropriately in neutral casual speech.",
            "quickCcq": "Can you use \"It were\" in an it-cleft with plural objects? (No, always \"It is\" or \"It was\")."
      }
},

    'c1-participle-clauses': {
      "id": "c1-participle-clauses",
      "levelId": "c1",
      "title": "Complex Participle Clauses (Sifatdoshli Qisqartma Ergash Gaplar)",
      "category": "Elite Syntax",
      "icon": "fa-scissors",
      "description": "Compress compound sentences into concise, literary prose using present and perfect participles.",
      "overview": "Gaplarni qisqartirib, yuqori darajadagi ixcham va nafis akademik uslubda yozish (Having finished, Seen from afar).",
      "flashcards": [
            {
                  "word": "Concise",
                  "uz": "Ixcham, lo‘nda, qisqa",
                  "phonetic": "/kənˈsaɪs/",
                  "pronunciation_uz": "[kon-says]",
                  "pos": "Adjective",
                  "definition": "Giving a lot of information clearly and in few words.",
                  "example": "Her executive summary was admirably concise yet thorough.",
                  "chunk": "concise summary"
            },
            {
                  "word": "Compress",
                  "uz": "Qisqartirmoq, zichlamoq",
                  "phonetic": "/kəmˈpres/",
                  "pronunciation_uz": "[kom-pres]",
                  "pos": "Verb",
                  "definition": "To reduce the volume or length of something efficiently.",
                  "example": "Participle clauses compress two long sentences into one elegant clause.",
                  "chunk": "compress information"
            },
            {
                  "word": "Eloquent",
                  "uz": "Notiqona, chiroyli va ta’sirchan",
                  "phonetic": "/ˈel.ə.kwənt/",
                  "pronunciation_uz": "[el-o-kwent]",
                  "pos": "Adjective",
                  "definition": "Fluent or persuasive in speaking or writing.",
                  "example": "The diplomat delivered an eloquent plea for international peace.",
                  "chunk": "eloquent speech"
            },
            {
                  "word": "Simultaneity",
                  "uz": "Bir vaqtdalik, hamohanglik",
                  "phonetic": "/ˌsɪm.əl.təˈneɪ.ə.ti/",
                  "pronunciation_uz": "[sim-ul-te-ney-i-ti]",
                  "pos": "Noun",
                  "definition": "The property of two or more events happening at the same time.",
                  "example": "Present participles convey temporal simultaneity naturally.",
                  "chunk": "temporal simultaneity"
            }
      ],
      "grammar": {
            "rule": "Present Participle (V-ing), Past Participle (V3), and Perfect Participle (Having + V3)",
            "formula": "Active sequential: Having completed the thesis, he traveled  ||  Passive: Built in 1890, the castle stands",
            "explanation_uz": "\"Because/After he had completed...\" o‘rniga \"Having completed...\" qo‘llash matnni o‘ta professional va akademik qiladi.",
            "examples": [
                  {
                        "en": "Having reviewed all empirical findings, the board approved the budget.",
                        "uz": "Barcha amaliy natijalarni ko‘rib chiqqach, kengash byudjetni ma’qulladi.",
                        "breakdown": "Having reviewed = After they had reviewed"
                  },
                  {
                        "en": "Exhausted by the transatlantic flight, she fell asleep immediately.",
                        "uz": "Transatlantik parvozdan tinkasi qurigan holda, u darhol uxlab qoldi.",
                        "breakdown": "Exhausted = Because she was exhausted"
                  }
            ]
      },
      "ccqs": [
            {
                  "question": "In \"Having eaten breakfast, John left\", who ate breakfast?",
                  "options": [
                        {
                              "text": "John ate breakfast (subject of participle must match main clause)",
                              "correct": true,
                              "feedback": "To‘g‘ri! Sifatdosh egasi bosh gap egasi bilan bir xil bo‘lishi shart."
                        },
                        {
                              "text": "An anonymous stranger",
                              "correct": false,
                              "feedback": "Noto‘g‘ri (dangling participle xatosi)."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🏃 Walking along the river, I saw an owl",
                  "right": "Simultaneous action participle"
            },
            {
                  "left": "🏆 Having won the tournament, she wept",
                  "right": "Prior completed action participle"
            },
            {
                  "left": "🏰 Damaged by the storm, the roof leaked",
                  "right": "Passive cause participle"
            },
            {
                  "left": "⚠️ Dangling participle trap",
                  "right": "Grammatical error where subjects mismatch"
            }
      ],
      "fillBlank": {
            "sentence": "___ all her funds in the venture, she had to seek emergency loans.",
            "options": [
                  "Having invested",
                  "Invested",
                  "Invest"
            ],
            "correct": "Having invested",
            "explanation": "Oldin sodir bo‘lgan faol harakat uchun \"Having invested\" to‘g‘ri keladi."
      },
      "teacherNotes": {
            "elicitation": "Write: \"Because he was tired, he slept.\" -> \"Being tired, he slept.\" Ask: \"Can we go further?\"",
            "commonMistake": "Dangling participles: \"Walking down the street, the trees were beautiful\" (The trees were not walking!).",
            "quickCcq": "Does a participle clause have its own explicit finite verb?"
      }
},

    'c1-rhetoric-subtlety': {
      "id": "c1-rhetoric-subtlety",
      "levelId": "c1",
      "title": "Nuances of Rhetoric, Irony & Tone (Ritorika, Kinoya va Nozik Uslub)",
      "category": "Mastery & Artistry",
      "icon": "fa-masks-theater",
      "description": "Interpret sarcasm, British understatement, metaphorical depth, and philosophical rhetoric.",
      "overview": "Ingliz tilidagi yashirin kinoya (irony), nozik understatement va falsafiy ritorika qirralari.",
      "flashcards": [
            {
                  "word": "Understatement",
                  "uz": "Vaziyatni kamaytirib ko‘rsatish (Britancha bosiqlik)",
                  "phonetic": "/ˈʌn.dəˌsteɪt.mənt/",
                  "pronunciation_uz": "[an-der-steyt-ment]",
                  "pos": "Noun",
                  "definition": "The presentation of something as being smaller or less important than it actually is.",
                  "example": "Calling a category-5 hurricane \"a bit of breezy weather\" is a classic British understatement.",
                  "chunk": "classic understatement"
            },
            {
                  "word": "Sarcasm",
                  "uz": "Piching, kesatiq",
                  "phonetic": "/ˈsɑː.kæz.əm/",
                  "pronunciation_uz": "[sar-kez-em]",
                  "pos": "Noun",
                  "definition": "The use of irony to mock, convey contempt, or amuse.",
                  "example": "\"Oh, brilliant work!\" he said sarcastically after dropping the vase.",
                  "chunk": "cutting sarcasm"
            },
            {
                  "word": "Euphemism",
                  "uz": "Evfemizm (yumshoq ifoda)",
                  "phonetic": "/ˈjuː.fə.mɪ.zəm/",
                  "pronunciation_uz": "[yu-fe-mi-zem]",
                  "pos": "Noun",
                  "definition": "A mild or indirect word substituted for one considered too harsh.",
                  "example": "\"Passed away\" is a gentle euphemism for \"died\".",
                  "chunk": "polite euphemism"
            },
            {
                  "word": "Metaphorical",
                  "uz": "Ko‘chma ma’noli, majoziy",
                  "phonetic": "/ˌmet.əˈfɒr.ɪ.kəl/",
                  "pronunciation_uz": "[met-e-for-i-kl]",
                  "pos": "Adjective",
                  "definition": "Characteristic of a metaphor; figurative rather than literal.",
                  "example": "The novel is a metaphorical journey through human disillusionment.",
                  "chunk": "metaphorical meaning"
            }
      ],
      "grammar": {
            "rule": "Stylistic Hedging & Sophisticated Register Inversions",
            "formula": "Hedging: It could be plausibly argued that...  |  Irony: Far from being a triumph, it was..."
      },
      "ccqs": [
            {
                  "question": "When a British speaker says a terrible disaster is \"not ideal\", are they happy or deeply distressed?",
                  "options": [
                        {
                              "text": "They are facing serious adversity (understatement)",
                              "correct": true,
                              "feedback": "To‘g‘ri! \"Not ideal\" ingliz madaniyatida juda yomon vaziyatni bildiradi."
                        },
                        {
                              "text": "They are thrilled and celebrating",
                              "correct": false,
                              "feedback": "Noto‘g‘ri."
                        }
                  ]
            }
      ],
      "matching": [
            {
                  "left": "🌧️ A spot of rain (in a flood)",
                  "right": "British understatement"
            },
            {
                  "left": "🕊️ Passed away",
                  "right": "Compassionate euphemism"
            },
            {
                  "left": "🎭 Dramatic irony",
                  "right": "Audience knows truth while character does not"
            },
            {
                  "left": "🛡️ Diplomatic hedging",
                  "right": "Cautious tone avoiding absolute claims"
            }
      ],
      "fillBlank": {
            "sentence": "Calling an catastrophic market crash \"a slight economic hiccup\" is a textbook ___.",
            "options": [
                  "understatement",
                  "exaggeration",
                  "metaphor"
            ],
            "correct": "understatement",
            "explanation": "Katta fojiani arzimasdek ko‘rsatish \"understatement\" deyiladi."
      },
      "teacherNotes": {
            "elicitation": "Pour water over head: \"Just slightly damp!\" What kind of humor is this?",
            "commonMistake": "Taking British irony literally and misunderstanding the true emotional tone.",
            "quickCcq": "Is euphemism meant to insult or soften harsh reality?"
      }
}
  },
  speakingWheelPrompts: [
    { text: 'Describe what is on your table right now without pausing for 60 seconds!', level: 'A0-A1', icon: '☕' },
    { text: 'Tell a story about the last time you lost your keys or phone.', level: 'A2-B1', icon: '🔑' },
    { text: 'If you could design a brand new city from scratch, what 3 rules would you enforce?', level: 'B1-B2', icon: '🏙️' },
    { text: 'Explain how coffee is made, pretending your listener has never seen a coffee bean.', level: 'A1-A2', icon: '☕' },
    { text: 'Defend this position: "Artificial Intelligence will revitalize human creativity."', level: 'C1', icon: '🤖' },
    { text: 'What is one daily habit that completely changed your mood or energy?', level: 'B1-B2', icon: '🌅' },
    { text: 'Describe your favorite season using sensory words (scents, sounds, colors).', level: 'A2-B1', icon: '🍂' },
    { text: 'If you had a time machine with only one round trip, which century would you visit and why?', level: 'B2-C1', icon: '⏳' },
    { text: 'Explain the difference between a house and a home without translation.', level: 'B1', icon: '🏡' },
    { text: 'Argue whether remote work has fundamentally improved or deteriorated human community.', level: 'C1', icon: '💼' }
  ]
};

window.DICTIONARY_DATABASE = DICTIONARY_DATABASE;
window.CURRICULUM_DATA = CURRICULUM_DATA;
