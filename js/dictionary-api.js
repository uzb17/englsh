// English-English Academy - Comprehensive A-Z Vocabulary & Live Dictionary API Engine
// Connects to Free Dictionary API + MyMemory Translation API + Full A-Z Pre-loaded Vocabulary

const DICTIONARY_A_Z_EXTRA = [
  // --- A ---
  {
    id: 'achieve',
    word: 'achieve',
    translation: 'erishmoq, qo‘lga kiritmoq',
    phonetic: '/əˈtʃiːv/',
    pronunciation_uz: '[ə-chiv] — birinchi "ə" qisqa, keyin "ch" va cho‘ziq "i" aytiladi',
    pos: 'verb (fe’l)',
    level: 'B1',
    visual: '🎯',
    definition_en: 'To successfully reach a desired goal, especially by effort or skill.',
    definition_uz: 'Mehnat yoki mahorat orqali ko‘zlangan maqsadga muvaffaqiyatli yetishmoq.',
    example_en: 'With consistent practice, you will achieve fluency in English.',
    example_uz: 'Doimiy mashqlar bilan siz ingliz tilida ravon gapirishga erishasiz.',
    collocations: ['achieve a goal', 'achieve success', 'achieve results']
  },
  {
    id: 'ambition',
    word: 'ambition',
    translation: 'katta maqsad, intilish, orzu',
    phonetic: '/æmˈbɪʃn/',
    pronunciation_uz: '[æm-bi-shn] — jag‘ ochiq "æ", oxiri "shn"',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '🚀',
    definition_en: 'A strong desire to achieve something great, such as success or power.',
    definition_uz: 'Muvaffaqiyat yoki yutuqqa erishishga bo‘lgan kuchli intilish va xohish.',
    example_en: 'His ambition is to study at a top university abroad.',
    example_uz: 'Uning eng katta orzusi — chet eldagi nufuzli universitetda o‘qish.',
    collocations: ['lifelong ambition', 'fulfill an ambition', 'burning ambition']
  },
  {
    id: 'arrive',
    word: 'arrive',
    translation: 'yetib kelmoq, kelmoq',
    phonetic: '/əˈraɪv/',
    pronunciation_uz: '[ə-rayv] — birinchi "ə" qisqa, "rayv" cho‘ziq aytiladi',
    pos: 'verb (fe’l)',
    level: 'A1',
    visual: '🛬',
    definition_en: 'To reach a place at the end of a journey or stage.',
    definition_uz: 'Sayohat yoki yo‘l oxirida ko‘zlangan manzilga yetib kelmoq.',
    example_en: 'The train will arrive at five o’clock sharp.',
    example_uz: 'Poyezd roppa-rosa soat beshda yetib keladi.',
    collocations: ['arrive on time', 'arrive at the station', 'arrive safely']
  },
  {
    id: 'arrow',
    word: 'arrow',
    translation: 'kamalak o‘qi, ko‘rsatkich belgi',
    phonetic: '/ˈærəʊ/',
    pronunciation_uz: '[æ-row] — "æ" keng ochiq unli, "row" diftongi',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '🏹',
    definition_en: 'A pointed weapon shot from a bow, or a symbol used to show direction.',
    definition_uz: 'Kamondan otiladigan o‘tkir uchli qurol, yoki yo‘nalishni ko‘rsatuvchi belgi.',
    example_en: 'Follow the green arrow to locate the exit.',
    example_uz: 'Chiqish eshigini topish uchun yashil ko‘rsatkich belgisiga qarang.',
    collocations: ['bow and arrow', 'green arrow', 'arrow points']
  },
  {
    id: 'arrange',
    word: 'arrange',
    translation: 'rejalashtirmoq, tartibga solmoq',
    phonetic: '/əˈreɪndʒ/',
    pronunciation_uz: '[ə-reynj] — "reynj" diftongi, oxirida yumshoq "j"',
    pos: 'verb (fe’l)',
    level: 'B1',
    visual: '📋',
    definition_en: 'To plan or organize the details of an event, meeting, or objects.',
    definition_uz: 'Uchrashuv yoki tadbir tafsilotlarini tartibli rejalashtirmoq va joylashtirmoq.',
    example_en: 'We need to arrange a study meeting for next Monday.',
    example_uz: 'Biz kelasi dushanbaga dars uchrashuvini rejalashtirishimiz kerak.',
    collocations: ['arrange a meeting', 'arrange in order', 'carefully arrange']
  },

  // --- B ---
  {
    id: 'brave',
    word: 'brave',
    translation: 'jasur, qo‘rqmas',
    phonetic: '/breɪv/',
    pronunciation_uz: '[breyv] — "ey" diftong ohangida aytiladi, oxirida lab tishga tegib "v"',
    pos: 'adjective (sifat)',
    level: 'A2',
    visual: '🦁',
    definition_en: 'Ready to face danger, pain, or difficulty without showing fear.',
    definition_uz: 'Qo‘rqmasdan xavf, og‘riq yoki qiyinchiliklarga qarshi turadigan.',
    example_en: 'It was very brave of him to speak in front of hundreds of people.',
    example_uz: 'Yuzlab odamlar oldida so‘zga chiqishi uning juda jasurligini ko‘rsatdi.',
    collocations: ['brave soldier', 'brave decision', 'act brave']
  },
  {
    id: 'believe',
    word: 'believe',
    translation: 'ishonmoq',
    phonetic: '/bɪˈliːv/',
    pronunciation_uz: '[bi-liv] — ikkinchi bo‘g‘indagi "i" tovushi cho‘ziq talaffuz qilinadi',
    pos: 'verb (fe’l)',
    level: 'A1',
    visual: '✨',
    definition_en: 'To feel sure that something is true or that someone is telling the truth.',
    definition_uz: 'Biror narsaning haqiqiyligiga yoki kimdir to‘g‘ri aytayotganiga ishonch hosil qilmoq.',
    example_en: 'Always believe in your own potential to grow.',
    example_uz: 'Har doim o‘zingizning o‘sish imkoniyatingizga ishoning.',
    collocations: ['believe in yourself', 'hard to believe', 'firmly believe']
  },

  // --- C ---
  {
    id: 'courage',
    word: 'courage',
    translation: 'mardlik, shijoat, jasorat',
    phonetic: '/ˈkʌrɪdʒ/',
    pronunciation_uz: '[ka-rij] — birinchi bo‘g‘inga urg‘u, tomoqdan qisqa "a", oxiri "j"',
    pos: 'noun (ot)',
    level: 'B1',
    visual: '🛡️',
    definition_en: 'The mental or moral strength to face fear, danger, or difficulty.',
    definition_uz: 'Qo‘rquv va qiyinchiliklarni yengish uchun ruhiy matonat va kuch.',
    example_en: 'She found the courage to pursue her creative dreams.',
    example_uz: 'U o‘z ijodiy orzularini ro‘yobga chiqarish uchun o‘zida mardlik topdi.',
    collocations: ['have courage', 'take courage', 'courage to stand up']
  },
  {
    id: 'curious',
    word: 'curious',
    translation: 'qiziquvchan, yangilikka intiluvchan',
    phonetic: '/ˈkjʊəriəs/',
    pronunciation_uz: '[kyu-ri-əs] — "kyu" deb boshlanadi, "u" va "r" yumshoq o‘qiladi',
    pos: 'adjective (sifat)',
    level: 'B1',
    visual: '🧐',
    definition_en: 'Eager to learn or know about things and explore new ideas.',
    definition_uz: 'Har narsani bilishga va yangiliklarni o‘rganishga ishtiyoqmand.',
    example_en: 'Curious learners make rapid progress in languages.',
    example_uz: 'Qiziquvchan o‘quvchilar til o‘rganishda juda tez ilgarilaydilar.',
    collocations: ['stay curious', 'curious mind', 'naturally curious']
  },

  // --- D ---
  {
    id: 'decision',
    word: 'decision',
    translation: 'qaror, to‘xtam',
    phonetic: '/dɪˈsɪʒn/',
    pronunciation_uz: '[di-si-zhn] — ikkinchi bo‘g‘inga urg‘u, "zh" yumshoq "j" kabi aytiladi',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '⚖️',
    definition_en: 'A choice that you make after thinking carefully about options.',
    definition_uz: 'Bir necha yo‘llarni puxta o‘ylab chiqqach qabul qilingan yakuniy tanlov.',
    example_en: 'Making a firm decision is the first step toward action.',
    example_uz: 'Qat’iy qaror qabul qilish — harakat tomon birinchi qadamdir.',
    collocations: ['make a decision', 'important decision', 'final decision']
  },
  {
    id: 'discover',
    word: 'discover',
    translation: 'kashf qilmoq, yangi narsani bilib olmoq',
    phonetic: '/dɪˈskʌvə/',
    pronunciation_uz: '[di-ska-və] — o‘rtada qisqa "a", oxiridagi "r" deyarli tushib qoladi',
    pos: 'verb (fe’l)',
    level: 'A2',
    visual: '🧭',
    definition_en: 'To find or see something before anybody else, or learn it for the first time.',
    definition_uz: 'Yangi ma’lumot yoki hodisani ilk bor topmoq yoki bilib olmoq.',
    example_en: 'Travel helps you discover new perspectives and cultures.',
    example_uz: 'Sayohat sizga yangi dunyoqarash va madaniyatlarni kashf qilishga yordam beradi.',
    collocations: ['discover the truth', 'discover new talents', 'discover by accident']
  },

  // --- E ---
  {
    id: 'effort',
    word: 'effort',
    translation: 'mehnat, tirishqoqlik, harakat',
    phonetic: '/ˈefət/',
    pronunciation_uz: '[e-fət] — birinchi "e"ga urg‘u, oxirgi bo‘g‘in yumshoq "fət"',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '💪',
    definition_en: 'Physical or mental energy needed to do a task or overcome a challenge.',
    definition_uz: 'Biror vazifani bajarish yoki qiyinchilikni yengish uchun sarflangan jismoniy yoki aqliy kuch.',
    example_en: 'Success is the sum of small efforts repeated daily.',
    example_uz: 'Muvaffaqiyat — har kuni takrorlanadigan kichik mehnatlar yig‘indisidir.',
    collocations: ['put in effort', 'make an effort', 'worth the effort']
  },
  {
    id: 'empathy',
    word: 'empathy',
    translation: 'hamdardlik, boshqalarni his qila olish',
    phonetic: '/ˈempəθi/',
    pronunciation_uz: '[em-pə-si] — oxiridagi "th" /θ/ tovushi tilni tishlar orasiga qo‘yib aytiladi',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '❤️',
    definition_en: 'The ability to understand and share the feelings of another person.',
    definition_uz: 'Boshqa insonning his-tuyg‘ularini tushunish va unga hamdard bo‘lish qobiliyati.',
    example_en: 'Great leaders listen with deep empathy and patience.',
    example_uz: 'Buyuk yetakchilar chuqur hamdardlik va sabr bilan tinglaydilar.',
    collocations: ['show empathy', 'feel empathy', 'deep empathy']
  },
  {
    id: 'essential',
    word: 'essential',
    translation: 'muhim, zarur, hayotiy kerakli',
    phonetic: '/ɪˈsenʃl/',
    pronunciation_uz: '[i-sen-shl] — "sen" bo‘g‘iniga urg‘u, oxiri yumshoq "shl"',
    pos: 'adjective (sifat)',
    level: 'B1',
    visual: '⚡',
    definition_en: 'Extremely important and necessary for something to exist or happen.',
    definition_uz: 'Mavjud bo‘lish yoki bajarilish uchun o‘ta muhim va zarur bo‘lgan.',
    example_en: 'Water and good sleep are essential for health.',
    example_uz: 'Suv va yaxshi uyqu inson salomatligi uchun hayotiy zarurdir.',
    collocations: ['essential need', 'essential role', 'absolutely essential']
  },
  {
    id: 'essence',
    word: 'essence',
    translation: 'mohiyat, asl ma’no, negiz',
    phonetic: '/ˈesns/',
    pronunciation_uz: '[e-sns] — birinchi "e"ga urg‘u berib, aniq "sns"',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '✨',
    definition_en: 'The intrinsic nature or indispensable quality of something.',
    definition_uz: 'Biror narsa yoki hodisaning eng tub, ichki va ajralmas mohiyati.',
    example_en: 'Simplicity is the true essence of great design.',
    example_uz: 'Oddiylik — buyuk dizaynning asl mohiyatidir.',
    collocations: ['in essence', 'capture the essence', 'true essence']
  },
  {
    id: 'essay',
    word: 'essay',
    translation: 'insho, esse, maqola',
    phonetic: '/ˈeseɪ/',
    pronunciation_uz: '[e-sey] — birinchi "e"ga urg‘u, "sey" deb tugaydi',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '📝',
    definition_en: 'A short piece of writing on a particular subject.',
    definition_uz: 'Muayyan mavzuga bag‘ishlangan ixcham yozma fikr-mulohaza yoki insho.',
    example_en: 'She wrote an outstanding essay about global climate.',
    example_uz: 'U iqlim o‘zgarishi haqida ajoyib insho yozdi.',
    collocations: ['write an essay', 'essay topic', 'short essay']
  },

  // --- F ---
  {
    id: 'freedom',
    word: 'freedom',
    translation: 'erkinlik, ozodlik',
    phonetic: '/ˈfriːdəm/',
    pronunciation_uz: '[fri-dəm] — "i" cho‘ziq aytiladi, oxiri yumshoq "dəm"',
    pos: 'noun (ot)',
    level: 'B1',
    visual: '🕊️',
    definition_en: 'The power or right to act, speak, or think as one wants without hindrance.',
    definition_uz: 'Hech qanday to‘siqlarsiz xohlagancha harakat qilish, gapirish yoki fikrlash huquqi.',
    example_en: 'Knowledge gives you freedom to choose your own future.',
    example_uz: 'Bilim sizga o‘z kelajagingizni o‘zingiz tanlash erkinligini beradi.',
    collocations: ['freedom of speech', 'personal freedom', 'fight for freedom']
  },
  {
    id: 'focus',
    word: 'focus',
    translation: 'diqqatni jamlamoq, e’tibor qaratmoq',
    phonetic: '/ˈfəʊkəs/',
    pronunciation_uz: '[fow-kəs] — "fow" diftongi bilan boshlanadi, urg‘u boshida',
    pos: 'verb / noun',
    level: 'A2',
    visual: '🎯',
    definition_en: 'To give all your attention and energy to a particular person, subject, or task.',
    definition_uz: 'Barcha diqqat-e’tiborni yagona vazifa yoki mavzuga qaratmoq.',
    example_en: 'Focus on one topic at a time for optimal memory retention.',
    example_uz: 'Xotirada mustahkam saqlash uchun bir vaqtda bitta mavzuga diqqat qarating.',
    collocations: ['focus attention', 'stay focused', 'main focus']
  },

  // --- G ---
  {
    id: 'gratitude',
    word: 'gratitude',
    translation: 'minnatdorchilik, shukronalik',
    phonetic: '/ˈɡrætɪtjuːd/',
    pronunciation_uz: '[græ-ti-tyud] — "græ" ochiq unli, oxiri "tyud"',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '🙏',
    definition_en: 'The feeling of being thankful and appreciative for kindness received.',
    definition_uz: 'Ko‘rsatilgan yaxshilik uchun qalbda minnatdor va shukrli bo‘lish tuyg‘usi.',
    example_en: 'Expressing daily gratitude improves psychological well-being.',
    example_uz: 'Har kuni shukronalik bildirish ruhiy xotirjamlikni oshiradi.',
    collocations: ['express gratitude', 'deep gratitude', 'feel gratitude']
  },
  {
    id: 'generous',
    word: 'generous',
    translation: 'saxiy, qo‘li ochiq',
    phonetic: '/ˈdʒenərəs/',
    pronunciation_uz: '[je-nə-rəs] — yumshoq "j" bilan boshlanadi, urg‘u birinchi bo‘g‘inda',
    pos: 'adjective (sifat)',
    level: 'B1',
    visual: '🎁',
    definition_en: 'Willing to give more money, time, or help than is expected.',
    definition_uz: 'Kutilganidan ko‘proq yordam, vaqt yoki mablag‘ berishga tayyor, himmatli.',
    example_en: 'She is generous with her time when mentoring young students.',
    example_uz: 'U yosh shogirdlarga dars berishda o‘z vaqtini ayamaydigan saxiy inson.',
    collocations: ['generous offer', 'generous donation', 'generous person']
  },

  // --- H ---
  {
    id: 'habit',
    word: 'habit',
    translation: 'odat, ko‘nikma',
    phonetic: '/ˈhæbɪt/',
    pronunciation_uz: '[hæ-bit] — jag‘ ochiq "hæ", qisqa "bit"',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '🔄',
    definition_en: 'A regular practice or routine that is hard to give up.',
    definition_uz: 'Muntazam takrorlanadigan va tark etish oson bo‘lmagan odatiy harakat.',
    example_en: 'Reading 15 minutes a day is an empowering habit.',
    example_uz: 'Kuniga 15 daqiqa kitob o‘qish — insonni kuchli qiluvchi odatdir.',
    collocations: ['good habit', 'break a habit', 'form a habit']
  },
  {
    id: 'honest',
    word: 'honest',
    translation: 'halol, rostgo‘y',
    phonetic: '/ˈɒnɪst/',
    pronunciation_uz: '[o-nist] — DIQQAT: "h" harfi o‘qilmaydi, "o" deb boshlanadi!',
    pos: 'adjective (sifat)',
    level: 'A2',
    visual: '💎',
    definition_en: 'Telling the truth and not cheating or stealing; sincere.',
    definition_uz: 'Faqat haqiqatni aytadigan, aldamaydigan va samimiy inson.',
    example_en: 'Always give an honest answer during personal interviews.',
    example_uz: 'Suhbat davomida har doim halol va samimiy javob bering.',
    collocations: ['honest opinion', 'honest mistake', 'to be honest']
  },

  // --- I ---
  {
    id: 'inspire',
    word: 'inspire',
    translation: 'ilhomlantirmoq, ruhlantirmoq',
    phonetic: '/ɪnˈspaɪə/',
    pronunciation_uz: '[in-spay-ə] — "spay" diftongi, oxirida yumshoq "ə"',
    pos: 'verb (fe’l)',
    level: 'B1',
    visual: '💡',
    definition_en: 'To fill someone with the urge or ability to do something creative or noble.',
    definition_uz: 'Boshqa bir insonda ijodiy yoki ezgu ishlarni qilishga kuchli ishtiyoq uyg‘otmoq.',
    example_en: 'Her dedication inspires everyone in our study group.',
    example_uz: 'Uning fidoyiligi guruhimizdagi barcha o‘quvchilarni ruhlantiradi.',
    collocations: ['inspire others', 'inspire change', 'deeply inspired']
  },
  {
    id: 'integrity',
    word: 'integrity',
    translation: 'soflik, axloqiy poklik, printsipiallik',
    phonetic: '/ɪnˈteɡrəti/',
    pronunciation_uz: '[in-teg-rə-ti] — ikkinchi bo‘g‘inga urg‘u beriladi',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '⚖️',
    definition_en: 'The quality of being honest and having strong moral principles.',
    definition_uz: 'Kuchli axloqiy qoidalarga sodiq, halol va vijdonli bo‘lishlik sifati.',
    example_en: 'He handled the delicate situation with utter integrity and fairness.',
    example_uz: 'U nozik vaziyatni to‘la halollik va adolat bilan hal qildi.',
    collocations: ['moral integrity', 'act with integrity', 'high integrity']
  },

  // --- J ---
  {
    id: 'journey',
    word: 'journey',
    translation: 'sayohat, uzoq yo‘l, hayot yo‘li',
    phonetic: '/ˈdʒɜːni/',
    pronunciation_uz: '[jyo-ni] — cho‘ziq "yo" unlisi, oxirida aniq "i"',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '🛤️',
    definition_en: 'An act of traveling from one place to another over time.',
    definition_uz: 'Bir manzildan ikkinchisiga borish jarayoni yoki maqsad sari bosib o‘tilgan yo‘l.',
    example_en: 'Language acquisition is an exciting lifelong journey.',
    example_uz: 'Til o‘rganish — bu butun umr davom etadigan qiziqarli sayohatdir.',
    collocations: ['safe journey', 'embark on a journey', 'life journey']
  },
  {
    id: 'justice',
    word: 'justice',
    translation: 'adolat, haqqoniylik',
    phonetic: '/ˈdʒʌstɪs/',
    pronunciation_uz: '[jas-tis] — "j" qattiq, o‘rtada qisqa "a", oxiri "tis"',
    pos: 'noun (ot)',
    level: 'B1',
    visual: '⚖️',
    definition_en: 'Fair behavior, treatment, or judgment according to the law.',
    definition_uz: 'Qonun va axloqqa asoslangan odilona muomala va hukm.',
    example_en: 'Courts must operate independently to ensure true justice.',
    example_uz: 'Haqiqiy adolatni ta’minlash uchun sudlar mustaqil faoliyat yuritishi kerak.',
    collocations: ['bring to justice', 'social justice', 'demand justice']
  },

  // --- K ---
  {
    id: 'knowledge',
    word: 'knowledge',
    translation: 'bilim, ma’rifat',
    phonetic: '/ˈnɒlɪdʒ/',
    pronunciation_uz: '[no-lij] — DIQQAT: "k" harfi mutlaqo aytilmaydi, "no-lij" deb talaffuz qilinadi',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '📚',
    definition_en: 'Facts, information, and skills acquired through experience or study.',
    definition_uz: 'O‘qish yoki tajriba orqali o‘zlashtirilgan ma’lumotlar, faktlar va mahorat.',
    example_en: 'Knowledge is power when put into consistent practical action.',
    example_uz: 'Bilim amaliyotda muntazam qo‘llanilgandagina haqiqiy kuchga aylanadi.',
    collocations: ['acquire knowledge', 'gain knowledge', 'broad knowledge']
  },
  {
    id: 'kindness',
    word: 'kindness',
    translation: 'mehribonlik, xushmuomalalik',
    phonetic: '/ˈkaɪndnəs/',
    pronunciation_uz: '[kaynd-nəs] — "kaynd" diftongi, oxirida yumshoq "nəs"',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '🌸',
    definition_en: 'The quality of being friendly, generous, and considerate toward others.',
    definition_uz: 'Boshqalarga nisbatan do‘stona, saxiy va e’tiborli bo‘lish fazilati.',
    example_en: 'A simple act of kindness can completely transform someone’s day.',
    example_uz: 'Kichik bir mehribonlik harakati birovning butun kunini o‘zgartirishi mumkin.',
    collocations: ['act of kindness', 'show kindness', 'treat with kindness']
  },

  // --- L ---
  {
    id: 'leadership',
    word: 'leadership',
    translation: 'yetakchilik, rahbarlik qobiliyati',
    phonetic: '/ˈliːdəʃɪp/',
    pronunciation_uz: '[li-də-ship] — "li" cho‘ziq, o‘rtada "də", oxiri "ship"',
    pos: 'noun (ot)',
    level: 'B1',
    visual: '👑',
    definition_en: 'The action of leading or motivating a group of people toward a shared vision.',
    definition_uz: 'Odamlar guruhini umumiy maqsad sari boshqarish va ilhomlantirish mahorati.',
    example_en: 'True leadership is defined by empowering team members.',
    example_uz: 'Haqiqiy yetakchilik jamoa a’zolarini kuchaytirish bilan o‘lchanadi.',
    collocations: ['strong leadership', 'leadership skills', 'provide leadership']
  },
  {
    id: 'loyal',
    word: 'loyal',
    translation: 'sodiq, vafodor',
    phonetic: '/ˈlɔɪəl/',
    pronunciation_uz: '[loy-əl] — "loy" deb boshlanadi, urg‘u birinchi bo‘g‘inda',
    pos: 'adjective (sifat)',
    level: 'B1',
    visual: '🐕',
    definition_en: 'Giving or showing firm and constant support or allegiance to someone.',
    definition_uz: 'Biror kishiga yoki maqsadga doimiy, sobitqadam va ishonchli sadoqat ko‘rsatuvchi.',
    example_en: 'He remained loyal to his principles despite intense pressure.',
    example_uz: 'U qattiq bosimlarga qaramasdan o‘z tamoyillariga sodiq qoldi.',
    collocations: ['loyal friend', 'stay loyal', 'loyal supporter']
  },

  // --- M ---
  {
    id: 'motivation',
    word: 'motivation',
    translation: 'motivatsiya, ichki rag‘bat, ilhom',
    phonetic: '/ˌməʊtɪˈveɪʃn/',
    pronunciation_uz: '[mow-ti-vey-shn] — "mow" diftongi, asosiy urg‘u "vey" bo‘g‘inida',
    pos: 'noun (ot)',
    level: 'B1',
    visual: '🔥',
    definition_en: 'The internal drive or reason one has for acting or behaving in a particular way.',
    definition_uz: 'Insonni harakat qilishga undovchi ichki ehtiros yoki kuchli sabab.',
    example_en: 'Discipline sustains you when temporary motivation fades away.',
    example_uz: 'Vaqtinchalik motivatsiya pasayganida intizom sizni oldinga yetaklaydi.',
    collocations: ['high motivation', 'lose motivation', 'source of motivation']
  },
  {
    id: 'mindset',
    word: 'mindset',
    translation: 'tafakkur tarzi, dunyoqarash',
    phonetic: '/ˈmaɪndset/',
    pronunciation_uz: '[maynd-set] — "maynd" va aniq "set"',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '🧠',
    definition_en: 'The established set of attitudes and beliefs held by an individual.',
    definition_uz: 'Insonning hayotiy voqealarga nisbatan shakllangan qarashlari va fikrlash tarzi.',
    example_en: 'Cultivating a growth mindset allows you to embrace mistakes as lessons.',
    example_uz: 'Rivojlanuvchi tafakkurni shakllantirish xatolarni saboq sifatida qabul qilishga o‘rgatadi.',
    collocations: ['growth mindset', 'positive mindset', 'change your mindset']
  },

  // --- N ---
  {
    id: 'nature',
    word: 'nature',
    translation: 'tabiat, borliq',
    phonetic: '/ˈneɪtʃə/',
    pronunciation_uz: '[ney-chə] — birinchi "ney", keyin "chə", "r" talaffuz qilinmaydi',
    pos: 'noun (ot)',
    level: 'A1',
    visual: '🌲',
    definition_en: 'The physical world including plants, animals, landscapes, and natural forces.',
    definition_uz: 'O‘simliklar, hayvonlar, tog‘lar va tabiiy hodisalarni o‘z ichiga olgan moddiy borliq.',
    example_en: 'Spending time in nature reduces stress and refreshes the mind.',
    example_uz: 'Tabiat qo‘ynida vaqt o‘tkazish stressni kamaytiradi va ongni tetiklashtiradi.',
    collocations: ['mother nature', 'protect nature', 'human nature']
  },
  {
    id: 'noble',
    word: 'noble',
    translation: 'olijanob, sharafli',
    phonetic: '/ˈnəʊbl/',
    pronunciation_uz: '[now-bl] — "now" diftongi, oxirida yumshoq "bl"',
    pos: 'adjective (sifat)',
    level: 'B2',
    visual: '🏛️',
    definition_en: 'Having or showing fine personal qualities or high moral principles.',
    definition_uz: 'Yuksak axloqiy fazilatlar va ezgu maqsadlarga ega bo‘lgan.',
    example_en: 'Teaching and empowering the next generation is a noble profession.',
    example_uz: 'Kelgusi avlodga ta’lim berish va ularni tarbiyalash — olijanob kasbdir.',
    collocations: ['noble goal', 'noble deed', 'noble character']
  },

  // --- O ---
  {
    id: 'opportunity',
    word: 'opportunity',
    translation: 'imkoniyat, qulay fursat',
    phonetic: '/ˌɒpəˈtjuːnəti/',
    pronunciation_uz: '[o-pə-tyu-nə-ti] — "tyu" bo‘g‘iniga urg‘u beriladi',
    pos: 'noun (ot)',
    level: 'B1',
    visual: '🚪',
    definition_en: 'A set of circumstances that makes it possible to do something desirable.',
    definition_uz: 'Biror ezgu yoki foydali ishni amalga oshirishga imkon beruvchi qulay vaziyat.',
    example_en: 'Every single obstacle presents a hidden opportunity to improve.',
    example_uz: 'Har bir to‘siq o‘zida rivojlanish uchun yashirin imkoniyatni olib keladi.',
    collocations: ['seize an opportunity', 'great opportunity', 'miss an opportunity']
  },
  {
    id: 'optimism',
    word: 'optimism',
    translation: 'nekbinlik, optimizm, yorug‘ kelajakka ishonch',
    phonetic: '/ˈɒptɪmɪzəm/',
    pronunciation_uz: '[op-ti-mi-zəm] — birinchi bo‘g‘inga urg‘u, oxiri yumshoq "zəm"',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '🌅',
    definition_en: 'Hopefulness and confidence about the future or the success of something.',
    definition_uz: 'Kelajakka nisbatan umid, ishonch va doim yaxshilikni kutish ruhiyati.',
    example_en: 'Her boundless optimism inspired the whole team during difficult trials.',
    example_uz: 'Uning cheksiz optimizmi butun jamoani qiyin sinovlarda ruhlantirdi.',
    collocations: ['cautious optimism', 'unwavering optimism', 'express optimism']
  },

  // --- P ---
  {
    id: 'patience',
    word: 'patience',
    translation: 'sabr, toqat, chidam',
    phonetic: '/ˈpeɪʃns/',
    pronunciation_uz: '[pey-shns] — "pey" deb boshlanadi, oxiri "shns"',
    pos: 'noun (ot)',
    level: 'B1',
    visual: '🧘',
    definition_en: 'The capacity to accept or tolerate delay, trouble, or suffering without getting angry.',
    definition_uz: 'Kechikishlar yoki mashaqqatlarga g‘azablanmasdan bardosh bera olish qobiliyati.',
    example_en: 'Mastering an accent requires patience and endless practice.',
    example_uz: 'Talaffuzni mukammallashtirish sabr va tinimsiz mashqni talab etadi.',
    collocations: ['have patience', 'run out of patience', 'test someone’s patience']
  },
  {
    id: 'purpose',
    word: 'purpose',
    translation: 'maqsad, ma’no, hayotiy vazifa',
    phonetic: '/ˈpɜːpəs/',
    pronunciation_uz: '[pyo-pəs] — "pyo" cho‘ziq, oxiri yumshoq "pəs"',
    pos: 'noun (ot)',
    level: 'B1',
    visual: '🎯',
    definition_en: 'The reason for which something is done or created or for which something exists.',
    definition_uz: 'Biror harakatning amalga oshirilishi yoki mavjudligining asl sababi.',
    example_en: 'Living with a clear sense of purpose brings immense energy.',
    example_uz: 'Aniq maqsad bilan yashash insonga katta kuch-g‘ayrat bag‘ishlaydi.',
    collocations: ['sense of purpose', 'main purpose', 'on purpose']
  },

  // --- Q ---
  {
    id: 'quality',
    word: 'quality',
    translation: 'sifat, qadr-qimmat',
    phonetic: '/ˈkwɒləti/',
    pronunciation_uz: '[kwo-lə-ti] — "kwo" deb boshlanadi, lablar yumaloqlanadi',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '⭐',
    definition_en: 'The standard of something as measured against other things of a similar kind.',
    definition_uz: 'Biror narsaning yaxshilik, yaroqlilik va mukammallik darajasi.',
    example_en: 'Focus on the quality of your practice rather than just hours spent.',
    example_uz: 'Faqatgina sarflangan soatlarga emas, balki mashg‘ulot sifatiga e’tibor bering.',
    collocations: ['high quality', 'improve quality', 'quality time']
  },
  {
    id: 'quest',
    word: 'quest',
    translation: 'izlanish, maqsad sari intilish',
    phonetic: '/kwest/',
    pronunciation_uz: '[kwest] — "kw" tovushi tez aytiladi, sof "e" va "st"',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '🗡️',
    definition_en: 'A long or arduous search for something valuable or meaningful.',
    definition_uz: 'Qimmatli haqiqat yoki maqsad sari olib boriladigan uzoq va jiddiy izlanish.',
    example_en: 'Scientists continue their quest to find clean renewable energy.',
    example_uz: 'Olimlar toza qayta tiklanuvchi energiya topish borasidagi izlanishlarini davom ettirmoqdalar.',
    collocations: ['in quest of', 'spiritual quest', 'lifelong quest']
  },

  // --- R ---
  {
    id: 'resilience',
    word: 'resilience',
    translation: 'matonat, sinovlarga bardoshlilik',
    phonetic: '/rɪˈzɪliəns/',
    pronunciation_uz: '[ri-zi-li-əns] — ikkinchi bo‘g‘inga urg‘u, oxiri yumshoq "əns"',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '🌱',
    definition_en: 'The capacity to recover quickly from difficulties; toughness.',
    definition_uz: 'Muvaffaqiyatsizlik yoki qiyinchiliklardan so‘ng tezda o‘zini o‘nglab olish matonati.',
    example_en: 'Resilience is what turns painful setbacks into powerful comebacks.',
    example_uz: 'Matonat — bu kutilmagan mag‘lubiyatlarni ulkan g‘alabalarga aylantiruvchi kuchdir.',
    collocations: ['build resilience', 'emotional resilience', 'test resilience']
  },
  {
    id: 'routine',
    word: 'routine',
    translation: 'kundalik tartib, odatiy rejim',
    phonetic: '/ruːˈtiːn/',
    pronunciation_uz: '[ru-tin] — ikkinchi "tin" bo‘g‘inidagi "i" cho‘ziq talaffuz qilinadi',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '⏰',
    definition_en: 'A sequence of actions regularly followed; a fixed program.',
    definition_uz: 'Har kuni yoki muntazam ravishda bajariladigan aniq rejalashtirilgan harakatlar tartibi.',
    example_en: 'A steady morning routine sets a calm, productive tone for the whole day.',
    example_uz: 'Muntazam ertalabki rejim butun kun uchun sokin va unumdor muhit yaratadi.',
    collocations: ['daily routine', 'morning routine', 'break the routine']
  },

  // --- S ---
  {
    id: 'sincere',
    word: 'sincere',
    translation: 'samimiy, dildan aytilgan, xolis',
    phonetic: '/sɪnˈsɪə/',
    pronunciation_uz: '[sin-siə] — ikkinchi bo‘g‘inga urg‘u, "si-ə", "r" yumshatiladi',
    pos: 'adjective (sifat)',
    level: 'B1',
    visual: '🤝',
    definition_en: 'Free from pretense or deceit; proceeding from genuine feelings.',
    definition_uz: 'Soxtalik va riyodan xoli, qalb tubidan chiqqan xolis niyat.',
    example_en: 'He offered a sincere apology for arriving late to the seminar.',
    example_uz: 'U seminarga kechikib kelgani uchun chin dildan samimiy uzr so‘radi.',
    collocations: ['sincere apology', 'sincere thanks', 'remain sincere']
  },
  {
    id: 'strength',
    word: 'strength',
    translation: 'kuch, qudrat, matonat',
    phonetic: '/streŋkθ/',
    pronunciation_uz: '[streng-s] — "ng" burun orqali, oxirgi "th" tishlar orasida',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '🏋️',
    definition_en: 'The quality or state of being physically, mentally, or morally strong.',
    definition_uz: 'Jismoniy, aqliy yoki ruhiy baquvvatlik va qat’iyat holati.',
    example_en: 'Overcoming adversity gives you quiet inner strength.',
    example_uz: 'Qiyinchiliklarni yengib o‘tish insonga xotirjam ichki kuch bag‘ishlaydi.',
    collocations: ['inner strength', 'physical strength', 'build strength']
  },

  // --- T ---
  {
    id: 'trust',
    word: 'trust',
    translation: 'ishonch, ishonmoq',
    phonetic: '/trʌst/',
    pronunciation_uz: '[trast] — "t" va "r" birlashib, qisqa tomoq "a" tovushi bilan aytiladi',
    pos: 'noun / verb',
    level: 'A2',
    visual: '🤝',
    definition_en: 'Firm belief in the reliability, truth, ability, or strength of someone.',
    definition_uz: 'Biror insonning sadoqati, halolligi va qobiliyatiga bo‘lgan mustahkam ishonch.',
    example_en: 'Mutual trust is the foundational bedrock of lasting friendships.',
    example_uz: 'O‘zaro ishonch — uzoq davom etuvchi do‘stlikning eng mustahkam poydevoridir.',
    collocations: ['mutual trust', 'gain trust', 'break trust']
  },
  {
    id: 'talent',
    word: 'talent',
    translation: 'iqtidor, iste’dod',
    phonetic: '/ˈtælənt/',
    pronunciation_uz: '[tæ-lənt] — birinchi "tæ" ochiq unli, urg‘u boshida',
    pos: 'noun (ot)',
    level: 'A2',
    visual: '🎨',
    definition_en: 'Natural aptitude, flair, or skill for doing something exceptionally well.',
    definition_uz: 'Biror san’at yoki sohada tug‘ma qobiliyat va yuksak mahorat.',
    example_en: 'Taland combined with hard work produces mastery.',
    example_uz: 'Tirik mehnat bilan birlashgan iste’dod buyuk mahoratni yaratadi.',
    collocations: ['natural talent', 'hidden talent', 'develop a talent']
  },

  // --- U ---
  {
    id: 'understand',
    word: 'understand',
    translation: 'tushunmoq, anglamoq',
    phonetic: '/ˌʌndəˈstænd/',
    pronunciation_uz: '[an-də-stænd] — oxirgi bo‘g‘inga kuchli urg‘u beriladi',
    pos: 'verb (fe’l)',
    level: 'A1',
    visual: '💡',
    definition_en: 'To perceive the intended meaning of words, language, or concepts.',
    definition_uz: 'So‘zlar, nutq yoki ma’nolarning asl mohiyatini ong bilan idrok etmoq.',
    example_en: 'I understand English well when speakers talk clearly.',
    example_uz: 'Suhbatdoshlar aniq gapirishsa, men ingliz tilini juda yaxshi tushunaman.',
    collocations: ['fully understand', 'hard to understand', 'easy to understand']
  },
  {
    id: 'unique',
    word: 'unique',
    translation: 'yagona, betakror, noyob',
    phonetic: '/juːˈniːk/',
    pronunciation_uz: '[yu-nik] — "yu" deb boshlanib, "nik" cho‘ziq "i" bilan tugaydi',
    pos: 'adjective (sifat)',
    level: 'B1',
    visual: '🦄',
    definition_en: 'Being the only one of its kind; unlike anything else.',
    definition_uz: 'O‘ziga o‘xshashi bo‘lmagan, yagona va o‘zgacha bo‘lgan.',
    example_en: 'Every individual possesses a unique voice and perspective.',
    example_uz: 'Har bir inson o‘ziga xos betakror ovoz va qarashga ega.',
    collocations: ['unique perspective', 'totally unique', 'unique opportunity']
  },

  // --- V ---
  {
    id: 'valuable',
    word: 'valuable',
    translation: 'qimmatli, qadrli, foydali',
    phonetic: '/ˈvæljuəbl/',
    pronunciation_uz: '[væl-yu-əbl] — birinchi bo‘g‘inga urg‘u, "væl"',
    pos: 'adjective (sifat)',
    level: 'B1',
    visual: '💎',
    definition_en: 'Worth a great deal of money or having immense practical usefulness.',
    definition_uz: 'Katta moddiy qiymatga yoki yuksak amaliy foydaga ega bo‘lgan.',
    example_en: 'Time is the most valuable asset that can never be recovered.',
    example_uz: 'Vaqt — hech qachon qaytarib bo‘lmaydigan eng qimmatli boylikdir.',
    collocations: ['valuable lesson', 'valuable experience', 'valuable advice']
  },
  {
    id: 'virtue',
    word: 'virtue',
    translation: 'fazilat, ezgulik, yuksak axloq',
    phonetic: '/ˈvɜːtʃuː/',
    pronunciation_uz: '[vyo-chu] — "vyo" cho‘ziq, oxiri yumshoq "chu"',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '🕊️',
    definition_en: 'Behavior showing high moral standards and ethical goodness.',
    definition_uz: 'Yuksak axloqiy me’yorlar va yaxshilikni ifodalovchi insoniy fazilat.',
    example_en: 'Patience has long been recognized as a supreme virtue.',
    example_uz: 'Sabr-toqat qadimdan buyuk insoniy fazilat deb e’tirof etilgan.',
    collocations: ['cardinal virtue', 'patience is a virtue', 'by virtue of']
  },

  // --- W ---
  {
    id: 'wisdom',
    word: 'wisdom',
    translation: 'donolik, hikmat, aql-zakovat',
    phonetic: '/ˈwɪzdəm/',
    pronunciation_uz: '[wiz-dəm] — "w" lab doirasi, o‘rtada "z", oxiri "dəm"',
    pos: 'noun (ot)',
    level: 'B2',
    visual: '🦉',
    definition_en: 'The quality of having experience, deep knowledge, and sound judgment.',
    definition_uz: 'Hayotiy tajriba, teran bilim va adolatli to‘g‘ri xulosa chiqarish qobiliyati.',
    example_en: 'Wisdom comes not just from age, but from deep reflection.',
    example_uz: 'Donolik nafaqat yoshdan, balki teran mushohadadan kelib chiqadi.',
    collocations: ['words of wisdom', 'ancient wisdom', 'gain wisdom']
  },
  {
    id: 'willing',
    word: 'willing',
    translation: 'tayyor, xohishli, rozi',
    phonetic: '/ˈwɪlɪŋ/',
    pronunciation_uz: '[wi-ling] — lablar yumaloq, oxiridagi "ng" burundan aytiladi',
    pos: 'adjective (sifat)',
    level: 'A2',
    visual: '👍',
    definition_en: 'Ready, eager, or prepared to do something without hesitation.',
    definition_uz: 'Biror ishni ikkilanmasdan qilishga tayyor va rozi bo‘lgan.',
    example_en: 'If you are willing to learn, nobody can stop you.',
    example_uz: 'Agar siz o‘rganishga tayyor bo‘lsangiz, sizni hech kim to‘xtata olmaydi.',
    collocations: ['willing to help', 'more than willing', 'willing participant']
  },

  // --- X ---
  {
    id: 'xenon',
    word: 'xenon',
    translation: 'ksenon (kimyoviy element, yorug‘lik gazi)',
    phonetic: '/ˈzenɒn/',
    pronunciation_uz: '[ze-non] — DIQQAT: "x" harfi "z" deb o‘qiladi!',
    pos: 'noun (ot)',
    level: 'C1',
    visual: '💡',
    definition_en: 'A chemical element which is an odorless, colorless noble gas used in lamps.',
    definition_uz: 'Kuchli yorituvchi lampalarda ishlatiladigan hidsiz va rangsiz inert gaz.',
    example_en: 'Modern car headlights often utilize xenon bulbs for illumination.',
    example_uz: 'Zamonaviy avtomobillar chiroqlarida kuchli yoritish uchun ksenon lampalar qo‘llaniladi.',
    collocations: ['xenon gas', 'xenon headlight', 'xenon flash']
  },
  {
    id: 'x-ray',
    word: 'x-ray',
    translation: 'rentgen nuri, rentgen surati',
    phonetic: '/ˈeks reɪ/',
    pronunciation_uz: '[eks-rey] — "eks" va "rey" aniq ajratib talaffuz qilinadi',
    pos: 'noun / verb',
    level: 'A2',
    visual: '🩻',
    definition_en: 'A type of radiation that can pass through matter to photograph internal bones.',
    definition_uz: 'Inson ichki suyaklari va a’zolarini suratga olish uchun ishlatiladigan nur.',
    example_en: 'The doctor examined the chest x-ray carefully before diagnosing.',
    example_uz: 'Shifokor tashxis qo‘yishdan oldin ko‘krak qafasi rentgenini sinchiklab ko‘rdi.',
    collocations: ['take an x-ray', 'chest x-ray', 'x-ray vision']
  },

  // --- Y ---
  {
    id: 'yield',
    word: 'yield',
    translation: 'hosil bermoq; yo‘l bermoq, yon bermoq',
    phonetic: '/jiːld/',
    pronunciation_uz: '[yild] — "y" yumshoq, "i" cho‘ziq, oxiri "ld"',
    pos: 'verb / noun',
    level: 'B2',
    visual: '🌾',
    definition_en: 'To produce or provide a natural, agricultural, or financial product; or give way.',
    definition_uz: 'Mahsulot yoki daromad keltirmoq, yoxud boshqalarga yo‘l berib yon bosmoq.',
    example_en: 'Persistent diligent effort will yield remarkable results.',
    example_uz: 'Doimiy tirishqoq mehnat ajoyib natijalarni beradi.',
    collocations: ['yield results', 'yield to traffic', 'high yield']
  },
  {
    id: 'yearn',
    word: 'yearn',
    translation: 'qumsamoq, qattiq sog‘inmoq, orziqmoq',
    phonetic: '/jɜːn/',
    pronunciation_uz: '[yyo-n] — "yyo" cho‘ziq aytiladi, "r" deyarli sezilmaydi',
    pos: 'verb (fe’l)',
    level: 'B2',
    visual: '💭',
    definition_en: 'To have an intense, deep feeling of longing for something unattainable.',
    definition_uz: 'Biror aziz narsa yoki manzilni qalb tubidan qattiq sog‘inmoq va orziqmoq.',
    example_en: 'Students far away from home often yearn for family meals.',
    example_uz: 'Oila bag‘ridan uzoqda o‘qiyotgan talabalar ko‘pincha ota-ona taomlarini qumsaydilar.',
    collocations: ['yearn for home', 'yearn to learn', 'deep yearning']
  },

  // --- Z ---
  {
    id: 'zeal',
    word: 'zeal',
    translation: 'shijoat, qizg‘in g‘ayrat, fidoiylik',
    phonetic: '/ziːl/',
    pronunciation_uz: '[zil] — "z" aniq, "i" cho‘ziq talaffuz qilinadi',
    pos: 'noun (ot)',
    level: 'C1',
    visual: '🔥',
    definition_en: 'Great energy, enthusiasm, or dedication in pursuit of a cause or objective.',
    definition_uz: 'Biror maqsad yoki g‘oya yo‘lidagi ulkan g‘ayrat, shijoat va fidoyilik.',
    example_en: 'He pursued his education with remarkable zeal and determination.',
    example_uz: 'U o‘z ta’limini aql bovar qilmas shijoat va qat’iyat bilan davom ettirdi.',
    collocations: ['religious zeal', 'youthful zeal', 'boundless zeal']
  },
  {
    id: 'zenith',
    word: 'zenith',
    translation: 'cho‘qqi, eng yuqori nuqta, avj pallasi',
    phonetic: '/ˈzenɪθ/',
    pronunciation_uz: '[ze-nis] — birinchi bo‘g‘inga urg‘u, oxirgi "th" tishlar orasida',
    pos: 'noun (ot)',
    level: 'C1',
    visual: '🏔️',
    definition_en: 'The time at which something is most powerful, successful, or at its highest peak.',
    definition_uz: 'Biror jarayon yoki martabaning eng qudratli, gullab-yashnagan yuqori cho‘qqisi.',
    example_en: 'At the zenith of his career, he inspired millions worldwide.',
    example_uz: 'Karyerasining eng yuqori cho‘qqisida u butun dunyo bo‘ylab millionlarni ilhomlantirdi.',
    collocations: ['reach the zenith', 'at the zenith', 'zenith of power']
  }
];

// Combine the databases into the global DICTIONARY_DATABASE
if (typeof DICTIONARY_DATABASE !== 'undefined') {
  // Merge unique items by id
  const existingIds = new Set(DICTIONARY_DATABASE.map(item => item.id.toLowerCase()));
  DICTIONARY_A_Z_EXTRA.forEach(item => {
    if (!existingIds.has(item.id.toLowerCase())) {
      DICTIONARY_DATABASE.push(item);
      existingIds.add(item.id.toLowerCase());
    }
  });
}

// ==========================================
// ONLINE DICTIONARY & TRANSLATION API SERVICE
// ==========================================
class DictionaryApiService {
  constructor() {
    this.cacheKey = 'eea_api_word_cache_v2';
    this.customWordsKey = 'eea_custom_words_v2';
    this.cachedWords = this.loadCache();
    this.injectCachedWordsToDatabase();
  }

  loadCache() {
    try {
      const saved = localStorage.getItem(this.cacheKey);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  saveCache() {
    try {
      localStorage.setItem(this.cacheKey, JSON.stringify(this.cachedWords));
    } catch (e) {}
  }

  injectCachedWordsToDatabase() {
    if (typeof DICTIONARY_DATABASE === 'undefined') return;
    const existingIds = new Set(DICTIONARY_DATABASE.map(w => w.id.toLowerCase()));
    Object.values(this.cachedWords).forEach(wordObj => {
      if (!existingIds.has(wordObj.id.toLowerCase())) {
        DICTIONARY_DATABASE.push(wordObj);
        existingIds.add(wordObj.id.toLowerCase());
      }
    });
  }

  // Synthesize Uzbek pronunciation description from phonetic string
  generateUzbekPronunciationGuide(word, phonetic) {
    if (!phonetic) return `[${word}] — so‘zni ravon va aniq talaffuz qiling`;
    
    let cleanPhonetic = phonetic.replace(/[\/\[\]]/g, '');
    let guide = `[${cleanPhonetic}]`;

    let notes = [];
    if (phonetic.includes('æ')) notes.push('jag‘ pastga tushirilib "e-a" oralig‘idagi ochiq unli');
    if (phonetic.includes('θ')) notes.push('tilsiz "s" (til tishlar orasiga qo‘yiladi)');
    if (phonetic.includes('ð')) notes.push('tilsiz "z" (til tishlar orasida titraydi)');
    if (phonetic.includes('ŋ')) notes.push('burundagi "ng"');
    if (phonetic.includes('ʃ')) notes.push('yumshoq "sh"');
    if (phonetic.includes('tʃ')) notes.push('aniq "ch"');
    if (phonetic.includes('dʒ')) notes.push('yumshoq "j"');
    if (phonetic.includes('ɜː') || phonetic.includes('ɜ')) notes.push('tomoqdan cho‘ziq "yo" ohangi');
    if (phonetic.includes('iː')) notes.push('cho‘ziq "i"');
    if (phonetic.includes('uː')) notes.push('cho‘ziq "u"');
    if (phonetic.includes('ɔː')) notes.push('cho‘ziq "o"');
    if (phonetic.includes('w')) notes.push('lablar oldinga doira qilinib "w"');

    if (notes.length > 0) {
      guide += ` — ${notes.slice(0, 2).join(', ')}`;
    } else {
      guide += ` — urg‘uga e’tibor berib aytiladi`;
    }

    return guide;
  }

  // Fetch with strict timeout to prevent UI freezes
  async fetchWithTimeout(url, timeoutMs = 3500) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      return response;
    } catch (err) {
      clearTimeout(timer);
      throw err;
    }
  }

  // Fetch word translation using MyMemory API
  async fetchUzbekTranslation(text) {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.trim())}&langpair=en|uz`;
      const res = await this.fetchWithTimeout(url, 3000);
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data.responseData && data.responseData.translatedText) {
        let t = data.responseData.translatedText.trim();
        // Discard low quality match errors
        if (!t.toLowerCase().includes('mymemory') && !t.toLowerCase().includes('quota')) {
          return t;
        }
      }
    } catch (e) {
      // Graceful timeout or network failure
    }
    return null;
  }

  // Primary API lookup function
  async lookupWordOnline(rawWord) {
    const word = rawWord.trim().toLowerCase();
    if (!word) return { success: false, error: 'So‘z kiritilmadi' };

    // 1. Check in-memory / cache first
    if (this.cachedWords[word]) {
      return { success: true, wordData: this.cachedWords[word], source: 'cache' };
    }

    // 2. Query Free Dictionary API
    try {
      const dictUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
      let dictRes = null;
      try {
        dictRes = await this.fetchWithTimeout(dictUrl, 3500);
      } catch (err) {
        dictRes = null;
      }

      if (!dictRes || !dictRes.ok) {
        // If not found in English Dictionary API, try simple translation
        const uzTrans = await this.fetchUzbekTranslation(word);
        if (uzTrans) {
          const fallbackEntry = {
            id: word,
            word: word,
            translation: uzTrans,
            phonetic: `/${word}/`,
            pronunciation_uz: `[${word}] — talaffuz qilinishi`,
            pos: 'word (so‘z)',
            level: 'B1',
            visual: '🌐',
            definition_en: `The English word "${word}".`,
            definition_uz: `Inglizcha so‘z, o‘zbekcha tarjimasi: ${uzTrans}.`,
            example_en: `Practice using "${word}" in daily sentences.`,
            example_uz: `Har kuni "${uzTrans}" so‘zini gaplarda qo‘llab mashq qiling.`,
            collocations: [`learn ${word}`, `use ${word}`],
            isApiFetched: true
          };

          this.cachedWords[word] = fallbackEntry;
          this.saveCache();
          if (typeof DICTIONARY_DATABASE !== 'undefined') {
            DICTIONARY_DATABASE.push(fallbackEntry);
          }
          return { success: true, wordData: fallbackEntry, source: 'translation_api' };
        }

        return {
          success: false,
          error: `"${word}" so‘zi onlayn lug‘atda topilmadi. Imlosini tekshirib qayta urinib ko‘ring.`
        };
      }

      const dictData = await dictRes.json();
      const firstEntry = Array.isArray(dictData) ? dictData[0] : dictData;

      // Extract phonetics & audio
      let phonetic = firstEntry.phonetic || '';
      let audioUrl = '';

      if (firstEntry.phonetics && firstEntry.phonetics.length > 0) {
        for (const p of firstEntry.phonetics) {
          if (!phonetic && p.text) phonetic = p.text;
          if (p.audio && !audioUrl) audioUrl = p.audio;
        }
      }

      if (!phonetic) phonetic = `/${word}/`;

      // Extract meanings & definitions
      let partOfSpeech = 'noun';
      let defEn = `Meaning of ${word}.`;
      let exampleEn = `He studied the word "${word}".`;
      let collocations = [];

      if (firstEntry.meanings && firstEntry.meanings.length > 0) {
        const m = firstEntry.meanings[0];
        partOfSpeech = m.partOfSpeech || 'word';

        if (m.definitions && m.definitions.length > 0) {
          defEn = m.definitions[0].definition || defEn;
          if (m.definitions[0].example) {
            exampleEn = m.definitions[0].example;
          }
        }

        if (m.synonyms && m.synonyms.length > 0) {
          collocations = m.synonyms.slice(0, 3);
        }
      }

      // 3. Fetch Uzbek translation for word & definition & example
      let uzWord = null;
      let uzDef = null;
      let uzEx = null;
      try {
        [uzWord, uzDef, uzEx] = await Promise.all([
          this.fetchUzbekTranslation(word),
          this.fetchUzbekTranslation(defEn.slice(0, 100)),
          this.fetchUzbekTranslation(exampleEn)
        ]);
      } catch (e) {}

      const uzbekTranslation = uzWord || 'tarjimasi';
      const uzbekDefinition = uzDef || 'Ushbu so‘zning rasmiy ta’rifi';
      const uzbekExample = uzEx || `Ushbu gapda "${uzbekTranslation}" ma’nosi ifodalangan.`;
      const pronunciationUz = this.generateUzbekPronunciationGuide(word, phonetic);

      // Determine level estimate
      let level = 'B1';
      if (word.length <= 4) level = 'A1';
      else if (word.length <= 6) level = 'A2';
      else if (word.length <= 8) level = 'B1';
      else if (word.length <= 11) level = 'B2';
      else level = 'C1';

      const wordObj = {
        id: word,
        word: word,
        translation: uzbekTranslation,
        phonetic: phonetic,
        pronunciation_uz: pronunciationUz,
        pos: `${partOfSpeech}`,
        level: level,
        visual: '🌐',
        definition_en: defEn,
        definition_uz: uzbekDefinition,
        example_en: exampleEn,
        example_uz: uzbekExample,
        collocations: collocations.length > 0 ? collocations : [`use ${word}`, `learn ${word}`],
        audioUrl: audioUrl,
        isApiFetched: true
      };

      // Cache it
      this.cachedWords[word] = wordObj;
      this.saveCache();

      // Add to DICTIONARY_DATABASE if not already there
      if (typeof DICTIONARY_DATABASE !== 'undefined') {
        const exists = DICTIONARY_DATABASE.some(w => w.id.toLowerCase() === word);
        if (!exists) {
          DICTIONARY_DATABASE.push(wordObj);
        }
      }

      return { success: true, wordData: wordObj, source: 'dictionary_api' };

    } catch (err) {
      console.error('Online lookup error:', err);
      return { success: false, error: 'Internet ulanishi yoki API serverida uzilish yuz berdi.' };
    }
  }
}

window.dictionaryApi = new DictionaryApiService();
