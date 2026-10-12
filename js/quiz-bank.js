// English-English Academy - Comprehensive 20-Question Pool per Module (All 18 Modules)
// Pedagogically structured: Phonics, Vocabulary, Grammar, Reading, Error Correction, Real-Life Contexts
// Contains Socratic Thinking Hints for every question (Never gives the direct answer)

const MODULE_QUIZ_BANK = {
  // ========================================================
  // 1. A0: PHONICS & VOCAL SOUND FOUNDATIONS (20 QUESTIONS)
  // ========================================================
  'a0-phonics': [
    {
      question: 'Which word contains the long smiling vowel sound /iː/?',
      options: ['Sit', 'Sheep', 'Cup', 'Bed'],
      answer: 1,
      explanation: '"Sheep" /ʃiːp/ so‘zida cho‘ziq tabassum "ee" (/iː/) tovushi bor. "Sit" da esa qisqa /ɪ/.',
      socraticHint: 'Lablaringizni ikki tomonga tabassumdek cho‘zib, uzoqroq aytiladigan "ee" tovushiga e’tibor bering.'
    },
    {
      question: 'In the sound /æ/ (as in "cat"), what should your jaw do?',
      options: ['Drop down wide like biting an apple', 'Stay completely closed', 'Make a round circle like a pipe', 'Pull inside without moving'],
      answer: 0,
      explanation: '/æ/ tovushida jag‘ olma tishlayotgandek pastga keng tushiriladi.',
      socraticHint: 'Olma yeyayotganda og‘zingiz qanday ochilishini eslang — pastki jag‘ pastga tushadi.'
    },
    {
      question: 'Which pair of words contains the difference between short /ɪ/ and long /iː/?',
      options: ['Ship vs Sheep', 'Cat vs Cut', 'Bed vs Bad', 'Pen vs Pan'],
      answer: 0,
      explanation: '"Ship" — qisqa /ɪ/, "Sheep" — cho‘ziq /iː/. Bu mashhur minimal juftlikdir.',
      socraticHint: 'Dengizdagi kema (qisqa) va daladagi qo‘y (cho‘ziq) so‘zlarini solishtiring.'
    },
    {
      question: 'Which word contains the short punchy central sound /ʌ/?',
      options: ['Cup', 'Car', 'Cool', 'Cat'],
      answer: 0,
      explanation: '"Cup" /kʌp/ so‘zida ko‘krakdan chiqadigan qisqa zarbli "a" (/ʌ/) tovushi bor.',
      socraticHint: 'Qorindan to‘satdan chiqadigan qisqa, xiyol nafas zarbi bilan aytiladigan so‘zni qidiring.'
    },
    {
      question: 'How is the voiceless /θ/ pronounced in words like "Think" and "Three"?',
      options: ['Tongue tip gently between upper and lower teeth, blowing air', 'Lips tightly pressed together', 'Back of the tongue touching the throat', 'Biting the bottom lip with teeth'],
      answer: 0,
      explanation: '/θ/ da til uchi tishlar orasiga qo‘yiladi va jaranglatmasdan havo puflandi.',
      socraticHint: 'Til uchini tishlar orasiga chiqarib shamoldek puflaydigan harakatni tasavvur qiling.'
    },
    {
      question: 'What is the main difference between /θ/ (think) and /ð/ (this)?',
      options: ['/ð/ has vocal cord vibration (buzzing), /θ/ is just air', '/θ/ is louder than /ð/', '/ð/ is pronounced with closed lips', 'There is no difference in sound'],
      answer: 0,
      explanation: '/ð/ (this) jarangli bo‘lib, bo‘g‘izda asalari vuvullashidek titrash bor; /θ/ faqat havo.',
      socraticHint: 'Bo‘g‘zingizga qo‘lingizni qo‘yib ko‘ring: qaysi birida tomoqda titrash (vibratsiya) seziladi?'
    },
    {
      question: 'Which word has the open front vowel sound /e/ as in "red"?',
      options: ['Bed', 'Bad', 'Bud', 'Bead'],
      answer: 0,
      explanation: '"Bed" /bed/ so‘zida yumshoq o‘rtacha "e" tovushi aytiladi. "Bad" da /æ/, "Bead" da /iː/.',
      socraticHint: 'To‘shak ma’nosidagi so‘zda oddiy o‘zbekcha "e" ga juda yaqin tovush mavjud.'
    },
    {
      question: 'Which consonant sound in English is unvoiced (vocal cords do NOT vibrate)?',
      options: ['/p/ as in "pen"', '/b/ as in "book"', '/d/ as in "door"', '/g/ as in "go"'],
      answer: 0,
      explanation: '/p/ labdan faqat havo portlashi bilan chiqadi, ovoz pardalari tebranmaydi.',
      socraticHint: 'Kaftingizni labingiz oldiga qo‘ying: faqatgina havo pufi seziladigan, tomoqda ovoz bo‘lmagan harfni tanlang.'
    },
    {
      question: 'Which word contains the diphthong (double sound) /aɪ/?',
      options: ['Sky', 'See', 'Sit', 'Sun'],
      answer: 0,
      explanation: '"Sky" /skaɪ/ so‘zida "a" dan "y" ga o‘tuvchi ikki unlili birikma (/aɪ/) mavjud.',
      socraticHint: '"Osmonda" aytiladigan so‘zdagi "ay" ikki tovushli cho‘ziq tovushga diqqat qiling.'
    },
    {
      question: 'In the word "Knife", which letter is completely silent?',
      options: ['The letter "K"', 'The letter "N"', 'The letter "F"', 'The letter "I"'],
      answer: 0,
      explanation: 'Ingliz tilida "kn" bilan boshlangan so‘zlarda (knife, know, knee) "k" o‘qilmaydi.',
      socraticHint: '"Kn" birikmasi bilan boshlangan so‘zlarda qaysi bosh harf sirli ravishda jim turadi?'
    },
    {
      question: 'Which word has the round back vowel sound /ɔː/ as in "door"?',
      options: ['Water', 'Wait', 'Wet', 'Wit'],
      answer: 0,
      explanation: '"Water" /ˈwɔːtə/ so‘zida doirasimon lab bilan cho‘ziq "o" (/ɔː/) aytiladi.',
      socraticHint: 'Lablaringiz trubka kabi yumaloqlanib, cho‘ziqroq "o" aytiladigan ichimlik so‘zini o‘ylang.'
    },
    {
      question: 'What is the phonetic sound at the end of the word "Sing"?',
      options: ['The nasal sound /ŋ/', 'The hard sound /g/', 'The soft sound /k/', 'The silent letter /n/'],
      answer: 0,
      explanation: '"-ng" birikmasida alohida "g" aytilmaydi, balki burundan /ŋ/ tovushi chiqariladi.',
      socraticHint: 'Burun orqali rezonans berib aytiladigan, o‘zbek tilidagi "ng" (bodring) tovushini eslang.'
    },
    {
      question: 'Which word rhymes (has the exact same vowel sound) with "Cat"?',
      options: ['Hat', 'Hot', 'Hut', 'Hit'],
      answer: 0,
      explanation: '"Hat" /hæt/ va "Cat" /kæt/ ikkalasi ham bir xil keng /æ/ unlisiga ega.',
      socraticHint: 'Bosh kiyim so‘zida ham mushuk kabi jag‘ keng tushib "æ" aytiladi.'
    },
    {
      question: 'Which word contains the short round vowel /ɒ/ as in "clock"?',
      options: ['Box', 'Book', 'Bark', 'Boat'],
      answer: 0,
      explanation: '"Box" /bɒks/ so‘zida qisqa ochiq "o" (/ɒ/) mavjud.',
      socraticHint: 'Quti ma’nosidagi so‘zda og‘iz vertikal ochilib qisqa "o" talaffuz qilinadi.'
    },
    {
      question: 'In the word "Doubt", which letter is silent?',
      options: ['The letter "B"', 'The letter "D"', 'The letter "T"', 'The letter "O"'],
      answer: 0,
      explanation: '"Doubt" [daut] so‘zida "b" harfi aytilmaydi.',
      socraticHint: '"Daut" deb aytilganida yozuvdagi qaysi harf talaffuzda eshitilmay qoladi?'
    },
    {
      question: 'Which word has the long /uː/ sound like "moon"?',
      options: ['Food', 'Foot', 'Fit', 'Fat'],
      answer: 0,
      explanation: '"Food" /fuːd/ cho‘ziq "u" tovushiga ega, "foot" da esa qisqa /ʊ/.',
      socraticHint: 'Ovqat so‘zi qadam (foot) so‘zidan farqli o‘laroq lab oldinga cho‘zilib uzoqroq aytiladi.'
    },
    {
      question: 'Which word begins with the soft aspiration sound /h/?',
      options: ['House', 'Hour', 'Honest', 'Heir'],
      answer: 0,
      explanation: '"House" da "h" nafas bilan eshitiladi. "Hour", "honest" da esa "h" o‘qilmaydi.',
      socraticHint: 'Qaysi bino so‘zida boshidagi "h" nafas chiqarib aniq aytiladi?'
    },
    {
      question: 'What is the vowel sound in "Pen" versus "Pan"?',
      options: ['Pen has mid /e/, Pan has open wide /æ/', 'Pen has /æ/, Pan has /e/', 'Both have the exact same sound', 'Pen is longer than Pan'],
      answer: 0,
      explanation: '"Pen" da oddiy o‘rtacha /e/, "Pan" da esa jag‘ keng tushadigan /æ/.',
      socraticHint: 'Ruchka (pen) teshik ochilmay aytiladi, tova (pan) da esa og‘iz keng ochiladi.'
    },
    {
      question: 'Which sound is heard at the start of "Chair" and "Cheese"?',
      options: ['The affricate /tʃ/', 'The fricative /ʃ/', 'The plosive /k/', 'The dental /θ/'],
      answer: 0,
      explanation: '"Ch-" ingliz tilida /tʃ/ ("ch") tovushini ifodalaydi.',
      socraticHint: 'O‘zbek tilidagi "choy" so‘zidagi "ch" bilan bir xil bo‘lgan fonetik belgi qaysi?'
    },
    {
      question: 'Why are minimal pairs like "Bit" and "Beat" important in English?',
      options: ['A tiny vowel length difference completely changes the word meaning', 'They only exist in songs', 'They sound identical to native speakers', 'They are only used in British slang'],
      answer: 0,
      explanation: 'Unlining qisqa yoki cho‘ziqligi so‘z ma’nosini 100% o‘zgartirib yuboradi (bit = tishladi, beat = yengdi).',
      socraticHint: 'Bitta tovush sal cho‘zilsa yoki qisqartirilsa, so‘zning ma’nosi nima bo‘ladi?'
    }
  ],

  // ========================================================
  // 2. A0: SUBJECT PRONOUNS & "TO BE" (20 QUESTIONS)
  // ========================================================
  'a0-alphabet-tobe': [
    {
      question: 'Choose the correct form: "I ___ a language student at this academy."',
      options: ['am', 'is', 'are', 'be'],
      answer: 0,
      explanation: 'Birinchi shaxs birlik "I" bilan faqatgina "am" ishlatiladi.',
      socraticHint: '"I" olmoshi bilan hozirgi zamonda har doim faqat bitta maxsus fe’l juftlashadi.'
    },
    {
      question: 'Choose the correct form: "She ___ very happy to see her new teacher."',
      options: ['is', 'are', 'am', 'be'],
      answer: 0,
      explanation: 'Uchinchi shaxs birlik (He, She, It) bilan "is" ishlatiladi.',
      socraticHint: 'Birlikdagi ayol kishi (she) haqida gapirganda qaysi qisqa shakl to‘g‘ri keladi?'
    },
    {
      question: 'Choose the correct form: "They ___ from Tashkent, Uzbekistan."',
      options: ['are', 'is', 'am', 'be'],
      answer: 0,
      explanation: 'Ko‘plikdagi olmoshlar (We, You, They) bilan "are" qo‘llaniladi.',
      socraticHint: 'Ular (they) ko‘plikda bo‘lgani uchun ko‘plikka xos shaklni tanlang.'
    },
    {
      question: 'What is the correct negative sentence?',
      options: ['He is not at home.', 'He not is at home.', 'He isn\'t not at home.', 'He are not at home.'],
      answer: 0,
      explanation: 'Inkor shaklida "not" to‘g‘ridan-to‘g‘ri "is/am/are" dan keyin keladi.',
      socraticHint: '"Not" inkor yuklamasi "to be" fe’lidan oldin emas, aynan qayerida turishi kerak?'
    },
    {
      question: 'What is the correct short question form?',
      options: ['Are you ready?', 'You are ready?', 'Is you ready?', 'Am you ready?'],
      answer: 0,
      explanation: 'So‘roq gapda "to be" egadan oldinga o‘tadi: "Are you...?"',
      socraticHint: 'Ingliz tilida so‘roq tuzish uchun fe’lni gapning eng boshiga chiqarish qoidasini eslang.'
    },
    {
      question: 'Which pronoun can replace: "Ali and Madina"?',
      options: ['They', 'We', 'He', 'She'],
      answer: 0,
      explanation: 'Ali va Madina — ikki kishi (ular), demak "They" olmoshi to‘g‘ri keladi.',
      socraticHint: 'Siz o‘zingiz yo‘q bo‘lgan ikki kishilik guruhni bir so‘z bilan qanday ataysiz?'
    },
    {
      question: 'Which pronoun can replace: "My brother and I"?',
      options: ['We', 'They', 'You', 'He'],
      answer: 0,
      explanation: '"Akam va men" birgalikda "Biz" ("We") bo‘ladi.',
      socraticHint: 'Agar ro‘yxatda "men" (I) ham bor bo‘lsa, u "ular" emas, balki kim bo‘ladi?'
    },
    {
      question: 'Choose the correct form: "The book ___ on the wooden table."',
      options: ['is', 'are', 'am', 'were'],
      answer: 0,
      explanation: '"The book" birlikda bitta jonsiz buyum (It), shuning uchun "is" ishlatiladi.',
      socraticHint: 'Kitob bitta (birlikda). Bitta buyumga "is" mos keladimi yoki "are"?'
    },
    {
      question: 'Choose the correct form: "The keys ___ inside my black bag."',
      options: ['are', 'is', 'am', 'be'],
      answer: 0,
      explanation: '"The keys" ko‘plikda (kalitlar), shuning uchun "are" tanlanadi.',
      socraticHint: '"Keys" so‘zining oxiridagi "-s" ko‘plikni bildiradi. Ko‘plikka qaysi fe’l mos?'
    },
    {
      question: 'What is the correct short contraction for "We are"?',
      options: ['We\'re', 'Were', 'We\'s', 'We\'am'],
      answer: 0,
      explanation: '"We are" ning qisqartmasi "We\'re" tarzida yoziladi va [wi-er] aytiladi.',
      socraticHint: 'Apostrof qaysi tushib qolgan "a" harfi o‘rniga qo‘yiladi?'
    },
    {
      question: 'Complete the short answer: "Is he a doctor?" — "Yes, he ___."',
      options: ['is', 'is a doctor', 'are', 'does'],
      answer: 0,
      explanation: 'Qisqa tasdiq javobda: "Yes, he is." deb javob beriladi.',
      socraticHint: 'Savol "Is" bilan berilganda, qisqa javob ham o‘sha "is" bilan tugaydi.'
    },
    {
      question: 'Complete the short answer: "Are they tired?" — "No, they ___."',
      options: ['aren\'t', 'isn\'t', 'not', 'don\'t'],
      answer: 0,
      explanation: 'Qisqa inkor javobda: "No, they aren\'t." (yoki "are not").',
      socraticHint: '"They" bilan inkor qilinganda qaysi qisqartma ishlatiladi?'
    },
    {
      question: 'Find the sentence with an error:',
      options: ['You is my best friend.', 'I am fine, thank you.', 'She is our new teacher.', 'They are excited.'],
      answer: 0,
      explanation: '"You" bilan "is" emas, "are" ishlatilishi shart: "You are my best friend."',
      socraticHint: '"You" olmoshi bilan hech qachon "is" kelmasligi qoidasiga e’tibor bering.'
    },
    {
      question: 'Choose the correct pronoun: "___ is raining outside."',
      options: ['It', 'He', 'She', 'They'],
      answer: 0,
      explanation: 'Ob-havo, tabiat hodisalari va vaqt uchun "It" egasi qo‘yiladi.',
      socraticHint: 'Yomg‘ir yoki ob-havoni shaxs bo‘lmagan qaysi neytral olmosh bilan ifodalaymiz?'
    },
    {
      question: 'Choose the correct form: "My sister and brother ___ tall."',
      options: ['are', 'is', 'am', 'be'],
      answer: 0,
      explanation: 'Ikki kishi birikkanida ega ko‘plikka aylanadi, demak "are".',
      socraticHint: 'Singlim va akam — jami ikki kishi. Demak fe’l ko‘plikda bo‘lishi lozim.'
    },
    {
      question: 'What is the full form of the contraction "It\'s"?',
      options: ['It is', 'It has not', 'It was', 'It are'],
      answer: 0,
      explanation: '"It\'s" asosan "It is" ning kundalik nutqdagi qisqartmasidir.',
      socraticHint: 'Ushbu keng tarqalgan qisqartma nimaning qisqargan shakli?'
    },
    {
      question: 'Choose the correct form: "Where ___ you from?"',
      options: ['are', 'is', 'am', 'do'],
      answer: 0,
      explanation: '"You" bilan savol so‘zidan keyin "are" keladi: "Where are you from?"',
      socraticHint: 'Suhbatdoshga (you) qayerdan ekanligini so‘raganda qaysi "to be" fe’li o‘rtaga tushadi?'
    },
    {
      question: 'Choose the correct form: "Who ___ that boy over there?"',
      options: ['is', 'are', 'am', 'be'],
      answer: 0,
      explanation: '"That boy" birlikda bitta bola, shuning uchun "is" qo‘llaniladi.',
      socraticHint: 'Anavi yigit bitta kishi. Bitta kishining shaxsini so‘raganda nima ishlatiladi?'
    },
    {
      question: 'Which sentence is grammatically correct?',
      options: ['I am not hungry right now.', 'I not am hungry right now.', 'I am no hungry.', 'I amn\'t hungry.'],
      answer: 0,
      explanation: '"I am not hungry" — grammatik jihatdan to‘g‘ri inkor shakli.',
      socraticHint: '"I am" birikmasida "not" qayerda turishini tekshiring.'
    },
    {
      question: 'Choose the correct form: "London and Paris ___ European cities."',
      options: ['are', 'is', 'am', 'be'],
      answer: 0,
      explanation: 'London va Parij ikkita shahar (ko‘plik), shuning uchun "are" to‘g‘ri.',
      socraticHint: 'Ikkita yirik shahar birgalikda ko‘plikni hosil qiladi.'
    }
  ],

  // ========================================================
  // 3. A0: GREETINGS & INTRODUCTIONS (20 QUESTIONS)
  // ========================================================
  'a0-greetings': [
    {
      question: 'What is the most polite response to: "Nice to meet you"?',
      options: ['Nice to meet you too!', 'Yes, I am.', 'Goodbye.', 'No problem.'],
      answer: 0,
      explanation: '"Nice to meet you" ga "Nice to meet you too!" (Sizni ko‘rganimdan men ham xursandman) deb javob beriladi.',
      socraticHint: 'Siz bilan tanishganidan xursand bo‘lgan insonga o‘zingiz ham xursand ekaningizni bildiruvchi "too" so‘zini qidiring.'
    },
    {
      question: 'Which greeting is used specifically in the morning before 12:00 PM?',
      options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
      answer: 0,
      explanation: 'Ertalab soat 12 gacha bo‘lgan vaqtda "Good morning" deyiladi.',
      socraticHint: 'Kunning boshlanishi, ertalabki salomlashuv qanday ataladi?'
    },
    {
      question: 'When someone says "Thank you very much!", what is the standard polite reply?',
      options: ['You\'re welcome!', 'Never mind.', 'I am fine.', 'See you soon.'],
      answer: 0,
      explanation: 'Rahmatga javoban "Arzimas / Marhamat" ma’nosida "You\'re welcome!" deyiladi.',
      socraticHint: 'Minnatdorchilik bildirilganda doimo aytiladigan odobli iborani toping.'
    },
    {
      question: 'Which phrase is used when saying goodbye before going to sleep at night?',
      options: ['Good night', 'Good evening', 'Good day', 'Good morning'],
      answer: 0,
      explanation: '"Good night" faqatgina uxlashga yotishdan oldin yoki tunda xayrlashayotganda ishlatiladi.',
      socraticHint: 'Uxlashga ketayotganda "xayrli tun" tilagini bildiruvchi ibora qaysi?'
    },
    {
      question: 'How do you ask someone for their name politely?',
      options: ['What is your name?', 'Who are you name?', 'How is your name called?', 'Where is your name?'],
      answer: 0,
      explanation: 'Ismni so‘rashning standart to‘g‘ri shakli: "What is your name?"',
      socraticHint: 'Ism so‘rashda "Nima" so‘rog‘i (What) ishlatilishiga e’tibor bering.'
    },
    {
      question: 'How do you politely introduce another person: "This ___ my friend, John."',
      options: ['is', 'are', 'am', 'be'],
      answer: 0,
      explanation: 'Yondagi bir kishini tanishtirishda: "This is my friend, [Ism]."',
      socraticHint: '"This" ko‘rsatish olmoshi bilan bitta kishini tanishtirganda qaysi fe’l keladi?'
    },
    {
      question: 'What do you say if you accidentally bump into someone on the bus?',
      options: ['Excuse me / I\'m sorry', 'You\'re welcome', 'Good afternoon', 'Congratulations'],
      answer: 0,
      explanation: 'Kechirim so‘rash yoki e’tiborni jalb qilishda "Excuse me" yoki "I\'m sorry" deyiladi.',
      socraticHint: 'Kutilmaganda noqulaylik tug‘dirganda kechirim so‘rash so‘zini tanlang.'
    },
    {
      question: 'Which of the following is an informal, casual greeting between close friends?',
      options: ['Hey! / Hi!', 'Good evening, sir.', 'How do you do?', 'Pleasure to make your acquaintance.'],
      answer: 0,
      explanation: '"Hey" va "Hi" do‘stlar orasidagi norasmiy samimiy salomlashuvdir.',
      socraticHint: 'Do‘stlar o‘rtasida aytiladigan eng qisqa va qulay salomni tanlang.'
    },
    {
      question: 'Complete the dialogue: "How are you today?" — "___"',
      options: ['I\'m doing great, thanks! And you?', 'I am 20 years old.', 'My name is Sarah.', 'I live in Samarkand.'],
      answer: 0,
      explanation: '"Qalaysiz?" degan savolga hol-ahvolni bildiruvchi javob beriladi.',
      socraticHint: 'Hol-ahvol so‘ralganda yosh yoki yashash joyi emas, o‘zingizni qanday his qilayotganingiz aytiladi.'
    },
    {
      question: 'What does "See you later!" mean?',
      options: ['Keyinroq ko‘rishguncha!', 'Xush kelibsiz!', 'Ertalab ko‘rishamiz!', 'Salom, qalaysiz?'],
      answer: 0,
      explanation: '"See you later" — keyinroq yana uchrashguncha degan ma’noni bildiradi.',
      socraticHint: '"Later" (keyinroq) so‘zining ma’nosiga e’tibor qarating.'
    },
    {
      question: 'Which title is used to address a married woman politely in formal English?',
      options: ['Mrs.', 'Mr.', 'Sir', 'Master'],
      answer: 0,
      explanation: 'Turmushga chiqqan ayol familiyasi oldidan "Mrs." [misiz] ishlatiladi.',
      socraticHint: 'Erkaklar uchun Mr. bo‘lsa, oilali ayol uchun qaysi unvon qo‘llanadi?'
    },
    {
      question: 'What is the meaning of "How do you do?" in formal British English?',
      options: ['It is a very formal greeting (Rasmiy salomlashuv)', 'It means "How do you work?"', 'It means "Where are you going?"', 'It means "Can you help me?"'],
      answer: 0,
      explanation: '"How do you do?" rasmiy tanishuv salomidir, unga javoban ham "How do you do?" deyiladi.',
      socraticHint: 'Bu savol ish qilish haqida emas, balki yuqori martabali kishilar bilan ilk salomlashuvdir.'
    },
    {
      question: 'Complete the sentence: "Please ___ a seat and feel comfortable."',
      options: ['have', 'make', 'do', 'run'],
      answer: 0,
      explanation: '"Have a seat" yoki "take a seat" — marhamat o‘tiring degan ibora.',
      socraticHint: 'Mehmonni o‘tirishga taklif qilganda qaysi fe’l "seat" (o‘rindiq) bilan juftlashadi?'
    },
    {
      question: 'When departing for the weekend on Friday afternoon, what do colleagues say?',
      options: ['Have a great weekend!', 'Good morning!', 'Happy birthday!', 'Welcome back!'],
      answer: 0,
      explanation: 'Hafta oxiri dam olish kunlari oldidan "Have a great weekend!" tilanadi.',
      socraticHint: 'Shanba va yakshanba kunlari oldidan qanday yoqimli tilak bildiriladi?'
    },
    {
      question: 'What is the polite phrase to ask someone to repeat what they said?',
      options: ['Could you please repeat that?', 'Speak again now!', 'What you said?', 'I don\'t want to listen.'],
      answer: 0,
      explanation: '"Could you please repeat that?" — tushunmay qolgan gapni qaytarishni odob bilan so‘rash.',
      socraticHint: '"Please" (iltimos) so‘zi qatnashgan muloyim iltimos shaklini tanlang.'
    },
    {
      question: 'How do you reply to: "Have a nice day!"?',
      options: ['Thanks, you too!', 'Yes, I am a day.', 'I don\'t think so.', 'Hello my friend.'],
      answer: 0,
      explanation: '"Kuningiz yaxshi o‘tsin" degan kishiga "Rahmat, sizga ham!" deb javob beriladi.',
      socraticHint: 'Rahmat aytib, qarshi tomonga ham o‘sha tilakni qaytaruvchi "you too" ni toping.'
    },
    {
      question: 'Which word completes the introduction: "My ___ name is Jasur."',
      options: ['first', 'one', 'early', 'starter'],
      answer: 0,
      explanation: '"First name" — kishining asosiy ismi (familiya esa "last name / surname").',
      socraticHint: 'Familiya emas, aynan shaxsiy ism "first..." bilan boshlanishini eslang.'
    },
    {
      question: 'What does "Pleased to meet you" mean?',
      options: ['Tanishganimdan juda xursandman', 'Iltimos, menga yordam bering', 'Xayr, salomat bo‘ling', 'Kechirasiz, shoshyapman'],
      answer: 0,
      explanation: '"Pleased to meet you" — "Nice to meet you" ning rasmiyroq sinonimi.',
      socraticHint: '"Pleased" so‘zi xursandlik va mamnuniyatni bildiradi.'
    },
    {
      question: 'What should you say when answering an official business phone call?',
      options: ['Hello, this is [Name] speaking. How may I help you?', 'Who is this? Tell me!', 'Yeah, what do you want?', 'Bye bye!'],
      answer: 0,
      explanation: 'Rasmiy qo‘ng‘iroqlarda o‘zini tanishtirib, qanday yordam bera olishini so‘rash odobdir.',
      socraticHint: 'Telefon orqali xushmuomala xizmat ko‘rsatish qoidasini tanlang.'
    },
    {
      question: 'Which phrase is appropriate when welcoming a guest into your classroom or home?',
      options: ['Welcome! Please come in.', 'Why are you here?', 'Wait outside.', 'Goodbye friend.'],
      answer: 0,
      explanation: 'Mehmon yoki o‘quvchini kutib olishda: "Welcome! Please come in." (Xush kelibsiz, kiring).',
      socraticHint: 'Xush kelibsiz degan iliq so‘z qaysi javobda bor?'
    }
  ],

  // ========================================================
  // 4. A0: EVERYDAY CLASSROOM & HOME OBJECTS (20 QUESTIONS)
  // ========================================================
  'a0-objects': [
    {
      question: 'Which article is correct before the word "Apple"?',
      options: ['An', 'A', 'Them', 'Those'],
      answer: 0,
      explanation: 'Unli tovush bilan boshlangan so‘zlar oldidan "an" ishlatiladi (an apple).',
      socraticHint: 'So‘z unli tovush bilan boshlansa, talaffuz qulay bo‘lishi uchun "a" ga qaysi harf qo‘shiladi?'
    },
    {
      question: 'Which article is correct before the word "Pen"?',
      options: ['A', 'An', 'Those', 'These'],
      answer: 0,
      explanation: 'Undosh tovush bilan boshlangan birlikdagi otlar oldidan "a" qo‘yiladi (a pen).',
      socraticHint: '"P" undosh tovush. Undoshlar oldidan "a" keladimi yoki "an"?'
    },
    {
      question: 'What is the regular plural form of the word "Box"?',
      options: ['Boxes', 'Boxs', 'Boxies', 'Boxen'],
      answer: 0,
      explanation: '-x, -s, -sh, -ch bilan tugagan so‘zlarga ko‘plikda "-es" qo‘shiladi.',
      socraticHint: 'Oxiri "x" bilan tugagan so‘zlarning ko‘pligi talaffuz uchun "-es" qo‘shimchasini oladi.'
    },
    {
      question: 'Which demonstrative pronoun is used for ONE object CLOSE to you?',
      options: ['This', 'That', 'These', 'Those'],
      answer: 0,
      explanation: 'Yaqindagi bitta narsa uchun "This" (bu) qo‘llaniladi.',
      socraticHint: 'Qo‘lingiz yetib turgan bitta buyumga ishora qiluvchi so‘zni tanlang.'
    },
    {
      question: 'Which demonstrative pronoun is used for MULTIPLE objects FAR from you?',
      options: ['Those', 'These', 'That', 'This'],
      answer: 0,
      explanation: 'Uzoqdagi ko‘plik buyumlar uchun "Those" (anavilar) ishlatiladi.',
      socraticHint: 'Uzoqda turgan ko‘p sonli narsalarni ko‘rsatuvchi ko‘plik shaklini toping.'
    },
    {
      question: 'What is the plural of "Child"?',
      options: ['Children', 'Childs', 'Childrens', 'Childes'],
      answer: 0,
      explanation: '"Child" noto‘g‘ri ot bo‘lib, ko‘plik shakli "children" bo‘ladi.',
      socraticHint: 'Ushbu so‘zga "-s" qo‘shilmaydi, tubdan o‘zgarib "bolalar" bo‘ladi.'
    },
    {
      question: 'What is an object you use specifically to erase pencil marks from paper?',
      options: ['Eraser / Rubber', 'Ruler', 'Stapler', 'Notebook'],
      answer: 0,
      explanation: 'Qalam yozuvini o‘chirish uchun "eraser" (o‘chirg‘ich) ishlatiladi.',
      socraticHint: 'Ingliz tilida "o‘chirmoq" (erase) fe’lidan yasalgan buyum nomini toping.'
    },
    {
      question: 'Choose the correct form: "___ is a whiteboard on the wall."',
      options: ['There', 'Their', 'They', 'Them'],
      answer: 0,
      explanation: 'Mavjudlikni ifodalashda "There is..." konstruksiyasi qo‘llanadi.',
      socraticHint: '"Biror joyda bor" ma’nosini beruvchi kirish so‘zini tanlang.'
    },
    {
      question: 'Choose the correct form: "There ___ ten desks in this classroom."',
      options: ['are', 'is', 'am', 'be'],
      answer: 0,
      explanation: '"Ten desks" ko‘plikda bo‘lgani uchun "There are" ishlatiladi.',
      socraticHint: 'O‘nta parta ko‘p sonli ekanligiga e’tibor qiling.'
    },
    {
      question: 'What is the plural of "Knife"?',
      options: ['Knives', 'Knifes', 'Knivs', 'Knifees'],
      answer: 0,
      explanation: '-fe bilan tugagan so‘zlarda ko‘plikda "-ves" ga aylanadi: knife -> knives.',
      socraticHint: '"F" harfi ko‘plikda jarangli "v" ga aylanib ketish qoidasini eslang.'
    },
    {
      question: 'Which of the following needs the article "An"?',
      options: ['An umbrella', 'An table', 'An chair', 'An student'],
      answer: 0,
      explanation: '"Umbrella" unli /ʌ/ tovushi bilan boshlangani sababli "an" oladi.',
      socraticHint: 'Tovushi unli bilan boshlangan yagona variantni qidiring.'
    },
    {
      question: 'What is the object used to measure straight lines in millimeters or inches?',
      options: ['Ruler', 'Scissors', 'Glue', 'Backpack'],
      answer: 0,
      explanation: 'To‘g‘ri chiziq chizish va o‘lchash uchun "ruler" (chizg‘ich) ishlatiladi.',
      socraticHint: 'O‘quvchilar chizish uchun ishlatadigan chizg‘ich qanday ataladi?'
    },
    {
      question: 'Choose the correct sentence:',
      options: ['These books are very heavy.', 'This books are very heavy.', 'These book is very heavy.', 'Those book are very heavy.'],
      answer: 0,
      explanation: '"These" ko‘plik bo‘lib, "books" va "are" bilan to‘liq mos keladi.',
      socraticHint: 'Ko‘rsatish olmoshi, ot va fe’l birgalikda bir xil ko‘plikda bo‘lishi lozim.'
    },
    {
      question: 'What do you use to cut paper or cloth in class?',
      options: ['Scissors', 'Pen', 'Pencil case', 'Calculator'],
      answer: 0,
      explanation: 'Qog‘oz kesish uchun "scissors" (qaychi) ishlatiladi va u doimo ko‘plikda bo‘ladi.',
      socraticHint: 'Ikkita tig‘ga ega bo‘lgan kesuvchi asbob nomini toping.'
    },
    {
      question: 'What is the plural of "City"?',
      options: ['Cities', 'Citys', 'Cityes', 'Cites'],
      answer: 0,
      explanation: 'Undoshdan keyingi "-y" ko‘plikda "-ies" ga o‘zgaradi: city -> cities.',
      socraticHint: '"Y" harfi oldida undosh "t" turgani sababli u qanday qo‘shimchaga aylanadi?'
    },
    {
      question: 'Where do students usually keep their pens, pencils, and erasers?',
      options: ['In a pencil case', 'In a teapot', 'In a refrigerator', 'In a mirror'],
      answer: 0,
      explanation: 'Qalam va ruchkalar "pencil case" (penal) ichida saqlanadi.',
      socraticHint: 'Maktab qurollarini solib yuriladigan qalamdon qanday ataladi?'
    },
    {
      question: 'Choose the correct form: "Look at ___ bird high up in the tree."',
      options: ['that', 'this', 'these', 'them'],
      answer: 0,
      explanation: 'Uzoqda va balanddagi bitta qush uchun "that" (anavi) qo‘llanadi.',
      socraticHint: 'Daraxt tepasida uzoqda turgan bitta jonzotga qanday ishora qilinadi?'
    },
    {
      question: 'What is the plural of "Man"?',
      options: ['Men', 'Mans', 'Mens', 'Manes'],
      answer: 0,
      explanation: '"Man" ko‘plikda ichki unli o‘zgarishi bilan "men" bo‘ladi.',
      socraticHint: 'O‘rtadagi "a" harfi "e" ga aylanadigan noto‘g‘ri otni toping.'
    },
    {
      question: 'Choose the correct option: "I need ___ paper to write my homework."',
      options: ['a sheet of', 'an', 'many', 'a papers'],
      answer: 0,
      explanation: '"Paper" sanalmaydigan ot, bitta varaq uchun "a piece of" yoki "a sheet of paper" deyiladi.',
      socraticHint: 'Qog‘oz sanalmaydi, uning bir varag‘ini ifodalovchi maxsus iborani tanlang.'
    },
    {
      question: 'What device shows the time on the classroom wall?',
      options: ['Clock', 'Watch', 'Mirror', 'Picture'],
      answer: 0,
      explanation: 'Devor soati "clock", qo‘l soati esa "watch" deyiladi.',
      socraticHint: 'Devorga osiladigan soat va qo‘lga taqiladigan soat farqini eslang.'
    }
  ],
  // ========================================================
  // MODULE: A0-VERBS (20 QUESTIONS)
  // ========================================================
  'a0-verbs': [
    {
      question: "Which action verb means to take food into your mouth and chew it?",
      options: ["Drink","Eat","Sleep","Run"],
      answer: 1,
      explanation: "\"Eat\" — ovqat yemoq ma’nosini bildiradi.",
      socraticHint: "Qattiq taomlarni tishlar bilan chaynab yutish harakatini eslang."
    },
    {
      question: "What do you do with fresh water or hot tea?",
      options: ["Sleep","Write","Drink","Open"],
      answer: 2,
      explanation: "Suyuqliklar \"drink\" (ichmoq) fe’li bilan qo‘llanadi.",
      socraticHint: "Suyuqliklarni tanaga qabul qilish harakati qanday ataladi?"
    },
    {
      question: "When you are in bed at night with your eyes closed, you ___ .",
      options: ["walk","speak","listen","sleep"],
      answer: 3,
      explanation: "\"Sleep\" — uxlamoq.",
      socraticHint: "Kechasi charchaganda yotoqda dam olish holatini ifodalovchi so‘zni tanlang."
    },
    {
      question: "Choose the correct verb: \"Every morning, I ___ my English book.\"",
      options: ["read","eat","drive","swim"],
      answer: 0,
      explanation: "Kitob mutolaa qilish uchun \"read\" (o‘qimoq) fe’li ishlatiladi.",
      socraticHint: "Ko‘z bilan matnga qarab harflarni tushunish faoliyati."
    },
    {
      question: "Which verb describes moving your legs rapidly, faster than walking?",
      options: ["Sit","Run","Stand","Sleep"],
      answer: 1,
      explanation: "\"Run\" — yugurmoq (yurishdan ancha tez harakat).",
      socraticHint: "Piyoda yurishdan ko‘ra ancha tez va shoshilib qilinadigan harakat."
    },
    {
      question: "You use a pen or pencil to ___ notes in your notebook.",
      options: ["sing","drink","write","jump"],
      answer: 2,
      explanation: "Qalam yoki ruchka bilan daftarga \"write\" (yozmoq) qilinadi.",
      socraticHint: "Qog‘ozga so‘zlarni tushirish faoliyatini tanlang."
    },
    {
      question: "Before entering a classroom, you gently ___ the door.",
      options: ["eat","fly","sleep","open"],
      answer: 3,
      explanation: "\"Open\" — ochmoq (eshikni ochmoq).",
      socraticHint: "Yopiq xonaga kirish uchun eshik bilan qanday harakat qilinadi?"
    },
    {
      question: "What is the opposite of \"Open the window\"?",
      options: ["Close the window","Clean the window","Paint the window","See the window"],
      answer: 0,
      explanation: "\"Open\" ning teskarisi \"Close\" (yopmoq).",
      socraticHint: "Ochish harakatining to‘liq aksi bo‘lgan fe’lni toping."
    },
    {
      question: "You use your ears to ___ to your English teacher.",
      options: ["taste","listen","smell","touch"],
      answer: 1,
      explanation: "Quloqlar eshitish va tinglash (\"listen\") a’zosi hisoblanadi.",
      socraticHint: "Quloq orqali tovushlarni qabul qilish harakati qaysi?"
    },
    {
      question: "I want to ___ fluent English with my international friends.",
      options: ["swim","cook","speak","kick"],
      answer: 2,
      explanation: "Til bilan gaplashish \"speak\" fe’li orqali ifodalanadi.",
      socraticHint: "Ovoz chiqarib so‘zlar orqali fikr almashish fe’li."
    },
    {
      question: "Which verb means to travel from home to school on foot calmly?",
      options: ["Fly","Drink","Sleep","Walk"],
      answer: 3,
      explanation: "\"Walk\" — xotirjam piyoda yurmoq (/wɔːk/).",
      socraticHint: "Oshiqmasdan qadam tashlab borish harakati."
    },
    {
      question: "When the teacher enters, students ___ up from their chairs.",
      options: ["stand","sit","lie","fall"],
      answer: 0,
      explanation: "\"Stand up\" — o‘rnidan tik turmoq.",
      socraticHint: "Stuldan turib oyoqda tik turish birikmasini eslang."
    },
    {
      question: "Please ___ down on this comfortable armchair.",
      options: ["run","sit","jump","fly"],
      answer: 1,
      explanation: "\"Sit down\" — o‘tirmoq.",
      socraticHint: "Kreslo yoki stulga joylashish harakati."
    },
    {
      question: "In the store, you use money to ___ delicious fresh bread.",
      options: ["sell","steal","buy","throw"],
      answer: 2,
      explanation: "\"Buy\" — pul berib sotib olmoq.",
      socraticHint: "Pul evaziga mahsulot olish harakati qanday ataladi?"
    },
    {
      question: "Every afternoon, the children ___ football in the green park.",
      options: ["cook","read","sleep","play"],
      answer: 3,
      explanation: "O‘yinlar va sport turlari bilan \"play\" (o‘ynamoq) ishlatiladi.",
      socraticHint: "To‘p yoki o‘yinlar bilan qilinadigan mashg‘ulot fe’li."
    },
    {
      question: "I ___ in a beautiful house in Tashkent with my parents.",
      options: ["live","fly","burn","swim"],
      answer: 0,
      explanation: "\"Live\" — yashamoq, istiqomat qilmoq.",
      socraticHint: "Biror manzilda doimiy yashashni bildiruvchi fe’lni tanlang."
    },
    {
      question: "Every evening, I ___ hard for my university exam.",
      options: ["dance","study","sleep","shout"],
      answer: 1,
      explanation: "\"Study\" — o‘qimoq, dars tayyorlamoq, o‘rganmoq.",
      socraticHint: "Imtihonga tayyorgarlik ko‘rib bilim olish harakati."
    },
    {
      question: "My mother loves to ___ tasty vegetable soup for dinner.",
      options: ["drive","ride","cook","wear"],
      answer: 2,
      explanation: "\"Cook\" — taom pishirmoq.",
      socraticHint: "Oshxonada ovqat tayyorlash jarayoni."
    },
    {
      question: "Which verb completes: \"Can you ___ the bird in that tree?\" (using your eyes)",
      options: ["hear","smell","taste","see"],
      answer: 3,
      explanation: "Ko‘z orqali ko‘rish \"see\" deyiladi.",
      socraticHint: "Ko‘z vositasida narsani payqash harakati."
    },
    {
      question: "I ___ a cup of hot black tea every breakfast.",
      options: ["have","play","run","drive"],
      answer: 0,
      explanation: "\"Have tea\" yoki \"drink tea\" — choy ichmoq / tanovul qilmoq.",
      socraticHint: "Ovqat va ichimliklarni qabul qilishda ko‘p ishlatiladigan universal fe’l."
    }
  ],
  // ========================================================
  // MODULE: A0-NUMBERS-COLORS (20 QUESTIONS)
  // ========================================================
  'a0-numbers-colors': [
    {
      question: "What color is the bright sun on a clear summer day?",
      options: ["Blue","Yellow","Black","Purple"],
      answer: 1,
      explanation: "Quyosh sariq rangda (\"Yellow\").",
      socraticHint: "Quyosh va bananning asosiy rangini eslang."
    },
    {
      question: "What is the sum of Five (5) and Four (4)?",
      options: ["Seven (7)","Eight (8)","Nine (9)","Ten (10)"],
      answer: 2,
      explanation: "5 + 4 = 9 (Nine).",
      socraticHint: "Beshga to‘rtni qo‘shing."
    },
    {
      question: "What color do you get if you mix Red and Yellow?",
      options: ["Brown","Green","Blue","Orange"],
      answer: 3,
      explanation: "Qizil va sariq aralashsa to‘q sariq (\"Orange\") hosil bo‘ladi.",
      socraticHint: "Apelsin rangini tasavvur qiling."
    },
    {
      question: "How many days are there in one complete week?",
      options: ["Seven","Six","Five","Eight"],
      answer: 0,
      explanation: "Bir haftada 7 (Seven) kun bor.",
      socraticHint: "Dushanbadan yakshanbagacha bo‘lgan kunlar soni."
    },
    {
      question: "What color is fresh green grass in spring?",
      options: ["Red","Green","Grey","Black"],
      answer: 1,
      explanation: "Bahorgi o‘t-o‘lanlar yashil (\"Green\") rangda bo‘ladi.",
      socraticHint: "Tabiatdagi barglar va maysalarning asosiy rangi."
    },
    {
      question: "What is the correct English word for the number 12?",
      options: ["Ten-two","Twenty","Twelve","Twelveth"],
      answer: 2,
      explanation: "12 soni ingliz tilida \"Twelve\" deb ataladi.",
      socraticHint: "O‘n ikkining inglizcha yozilishini tanlang."
    },
    {
      question: "What color is fresh pure milk and clean snow?",
      options: ["Black","Brown","Pink","White"],
      answer: 3,
      explanation: "Qor va sut oq (\"White\") rangdadir.",
      socraticHint: "Oq qor va sut rangini ifodalovchi so‘z."
    },
    {
      question: "What is the plural form of the word \"apple\"?",
      options: ["Apples","Applies","Appless","An apple"],
      answer: 0,
      explanation: "Oddiy ko‘plik shakli \"-s\" bilan yasaladi: \"apples\".",
      socraticHint: "Ingliz tilida ko‘pchilik otlarga ko‘plikda \"-s\" qo‘shiladi."
    },
    {
      question: "How do you say the number 20 in English?",
      options: ["Twelve","Twenty","Two-ten","Thirteen"],
      answer: 1,
      explanation: "20 — \"Twenty\".",
      socraticHint: "Yigirma sonining to‘g‘ri shaklini tanlang."
    },
    {
      question: "What color is the deep ocean and clear daytime sky?",
      options: ["Red","Yellow","Blue","Black"],
      answer: 2,
      explanation: "Moviy osmon va dengiz \"Blue\" rangda bo‘ladi.",
      socraticHint: "Musaffo osmon rangini eslang."
    },
    {
      question: "What is the plural form of \"box\"?",
      options: ["Boxs","Boxies","Boxen","Boxes"],
      answer: 3,
      explanation: "-x bilan tugagan so‘zlarga ko‘plikda \"-es\" qo‘shiladi: \"boxes\".",
      socraticHint: "-s, -sh, -ch, -x bilan tugagan otlarga qaysi ko‘plik qo‘shimchasi qo‘shiladi?"
    },
    {
      question: "Which number comes immediately after nineteen (19)?",
      options: ["Twenty","Eighteen","Twenty-one","Thirty"],
      answer: 0,
      explanation: "19 dan keyin 20 (Twenty) keladi.",
      socraticHint: "O‘n to‘qqizdan keyingi yaxlit son."
    },
    {
      question: "What color is chocolate and coffee beans?",
      options: ["Green","Brown","Yellow","Pink"],
      answer: 1,
      explanation: "Shokolad va qahva jigarrang (\"Brown\").",
      socraticHint: "Jigarrang so‘zining inglizcha tarjimasi."
    },
    {
      question: "What is the sum of Six (6) plus Six (6)?",
      options: ["Eleven (11)","Thirteen (13)","Twelve (12)","Ten (10)"],
      answer: 2,
      explanation: "6 + 6 = 12 (Twelve).",
      socraticHint: "Oltiga oltini qo‘shing."
    },
    {
      question: "Which word is the number 100?",
      options: ["One thousand","One million","Ten ten","One hundred"],
      answer: 3,
      explanation: "100 — \"One hundred\".",
      socraticHint: "Yuz sonining inglizcha atalishi."
    },
    {
      question: "What color is a ripe red tomato?",
      options: ["Red","Blue","White","Black"],
      answer: 0,
      explanation: "Pishgan pomidor qizil (\"Red\").",
      socraticHint: "Qizil rangning inglizcha nomi."
    },
    {
      question: "How many wheels does a standard passenger car have?",
      options: ["Two","Four","Three","Six"],
      answer: 1,
      explanation: "Odatdagi yengil mashinada 4 ta g‘ildirak (Four) bo‘ladi.",
      socraticHint: "To‘rt sonining inglizchasini tanlang."
    },
    {
      question: "What is the plural form of the noun \"child\"?",
      options: ["Childs","Childrens","Children","Childes"],
      answer: 2,
      explanation: "\"Child\" noto‘g‘ri ko‘plikka ega: \"Children\" (bolalar).",
      socraticHint: "Bu so‘z qoidadan mustasno bo‘lib, o‘zagidan o‘zgaradi."
    },
    {
      question: "Which number is spelled \"Fifteen\"?",
      options: ["5","55","50","15"],
      answer: 3,
      explanation: "\"Fifteen\" — 15 soni.",
      socraticHint: "O‘n besh raqamini tanlang."
    },
    {
      question: "What color do you get by mixing black and white?",
      options: ["Grey","Brown","Purple","Orange"],
      answer: 0,
      explanation: "Qora va oq aralashmasi kulrang (\"Grey\") hosil qiladi.",
      socraticHint: "Kulrangning inglizcha atalishi."
    }
  ],
  // ========================================================
  // MODULE: A1-PRESENT-SIMPLE-CONTINUOUS (20 QUESTIONS)
  // ========================================================
  'a1-present-simple-continuous': [
    {
      question: "Look outside! It ___ heavily right now.",
      options: ["rains","is raining","rained","will rain"],
      answer: 1,
      explanation: "\"Right now\" ko‘rsatkichi ayni paytda sodir bo‘layotgan jarayonni (Present Continuous) bildiradi.",
      socraticHint: "Ayni damda ko‘z o‘ngingizda davom etayotgan harakat uchun \"is/am/are + V-ing\" kerak."
    },
    {
      question: "My father ___ in a bank from Monday to Friday.",
      options: ["work","is working","works","working"],
      answer: 2,
      explanation: "Uchinchi shaxs birlik (He) uchun Present Simple da fe’lga \"-s\" qo‘shiladi: \"works\".",
      socraticHint: "He/She/It bilan oddiy hozirgi zamonda fe’l oxiriga nima qo‘shiladi?"
    },
    {
      question: "Listen! Someone ___ on the front door.",
      options: ["knocks","will knock","knocked","is knocking"],
      answer: 3,
      explanation: "\"Listen!\" (Eshiting!) ayni vaqtdagi davomli harakatga diqqatni qaratadi.",
      socraticHint: "Hozir eshitilayotgan jarayon ifodasi."
    },
    {
      question: "They ___ play computer games on weekdays.",
      options: ["don't","doesn't","not","aren't"],
      answer: 0,
      explanation: "\"They\" olmoshi bilan Present Simple inkorida \"don't\" ishlatiladi.",
      socraticHint: "\"They\" uchun inkor yordamchi fe’li qaysi?"
    },
    {
      question: "___ she speak French or Spanish fluently?",
      options: ["Do","Does","Is","Are"],
      answer: 1,
      explanation: "She bilan Present Simple so‘roq gapida \"Does\" ishlatiladi.",
      socraticHint: "Uchinchi shaxs birlikdagi so‘roq yordamchi fe’li."
    },
    {
      question: "I usually have tea, but today I ___ black coffee.",
      options: ["drink","drinks","am drinking","drank"],
      answer: 2,
      explanation: "\"Today\" (vaqtincha bugun) sodir bo‘layotgan o‘zgarish uchun Present Continuous tanlanadi.",
      socraticHint: "Bugungi istisno harakat davomiy zamonda ifodalanadi."
    },
    {
      question: "Water ___ at 100 degrees Celsius.",
      options: ["boil","boiled","is boiling","boils"],
      answer: 3,
      explanation: "Umumiy ilmiy faktlar doimo Present Simple da ifodalanadi: \"boils\".",
      socraticHint: "Tabiiy qonuniyat va doimiy haqiqat uchun oddiy hozirgi zamon qo‘llanadi."
    },
    {
      question: "Where is Aziza? — She is in her room, she ___ an essay.",
      options: ["is writing","wrote","writes","has written"],
      answer: 0,
      explanation: "Xonada ayni daqiqada insho yozish bilan mashg‘ul bo‘lgani uchun \"is writing\".",
      socraticHint: "Uning ayni damdagi mashg‘ulotini ifodalovchi shakl."
    },
    {
      question: "Which time word is typically used with Present Simple?",
      options: ["Right now","Always","At the moment","Currently"],
      answer: 1,
      explanation: "\"Always\" (doimo) odat va takroriylikni bildirib, Present Simple ga xosdir.",
      socraticHint: "Doimiy odatlarni bildiruvchi chastota ravishini toping."
    },
    {
      question: "Why ___ you crying? Is everything alright?",
      options: ["do","is","are","did"],
      answer: 2,
      explanation: "\"you crying\" bilan \"are\" yordamchi fe’li mos keladi (Present Continuous).",
      socraticHint: "V-ing bilan qaysi \"to be\" shakli ishlatiladi?"
    },
    {
      question: "I ___ this grammar rule very clearly now.",
      options: ["understanding","am understanding","understands","understand"],
      answer: 3,
      explanation: "\"Understand\" hissiy/aqliy fe’l (stative verb) bo‘lib, Continuous da kamdan-kam ishlatiladi.",
      socraticHint: "Aqliy faoliyat fe’llari odatda \"-ing\" olmaydi."
    },
    {
      question: "The train to Samarkand ___ at 8:00 AM every morning.",
      options: ["leaves","is leaving","leave","leaving"],
      answer: 0,
      explanation: "Jadval va transport harakatlari Present Simple da aytiladi: \"leaves\".",
      socraticHint: "Qat’iy jadval bo‘yicha yuradigan poyezd vaqti."
    },
    {
      question: "What ___ at the moment? Can you help me?",
      options: ["do you do","are you doing","did you do","have you done"],
      answer: 1,
      explanation: "\"At the moment\" (ayni daqiqada) so‘rog‘i Present Continuous da bo‘ladi.",
      socraticHint: "Hozirgi lahzadagi ish-harakat so‘rovi."
    },
    {
      question: "He never ___ to lock the front door.",
      options: ["forget","is forgetting","forgets","forgetting"],
      answer: 2,
      explanation: "\"He\" bilan Present Simple da \"forgets\" qo‘llanadi.",
      socraticHint: "Uchinchi shaxs birlikdagi fe’l shakli."
    },
    {
      question: "Do you ___ where the library is located?",
      options: ["are knowing","knowing","knows","know"],
      answer: 3,
      explanation: "\"Do you\" dan keyin fe’lning asl bosh shakli (V1) keladi: \"know\".",
      socraticHint: "\"Do\" yordamchi fe’lidan keyin fe’l qanday shaklda bo‘ladi?"
    },
    {
      question: "Be quiet! The baby ___ in the cradle.",
      options: ["is sleeping","sleeps","slept","sleep"],
      answer: 0,
      explanation: "\"Be quiet!\" (Jim bo‘ling!) ayni paytdagi uyqu holatini ko‘rsatadi.",
      socraticHint: "Hozir sodir bo‘layotgan jarayon."
    },
    {
      question: "I ___ living in this quiet neighborhood.",
      options: ["am loving","love","loves","loving"],
      answer: 1,
      explanation: "\"Love\" holat fe’li (stative verb) bo‘lib, Present Simple da ishlatiladi.",
      socraticHint: "Tuyg‘u va munosabat bildiruvchi fe’l oddiy shaklda bo‘ladi."
    },
    {
      question: "How often ___ you go to the gym each week?",
      options: ["are","does","do","did"],
      answer: 2,
      explanation: "\"you\" bilan takroriylik savolida \"do\" ishlatiladi.",
      socraticHint: "Odatlar haqidagi so‘roqda \"you\" bilan nima keladi?"
    },
    {
      question: "She ___ like spicy Mexican food at all.",
      options: ["don't","not","isn't","doesn't"],
      answer: 3,
      explanation: "\"She\" uchun Present Simple inkorida \"doesn't\" qo‘llanadi.",
      socraticHint: "Uchinchi shaxs birlikning inkor yordamchisi."
    },
    {
      question: "We ___ for our final exam this whole week.",
      options: ["are studying","study","studies","studied"],
      answer: 0,
      explanation: "Vaqtincha davom etayotgan haftalik jarayon uchun Present Continuous qo‘llanadi.",
      socraticHint: "Ushbu haftadagi vaqtinchalik qizg‘in jarayon."
    }
  ],
  // ========================================================
  // MODULE: A1-DAILY-ROUTINES (20 QUESTIONS)
  // ========================================================
  'a1-daily-routines': [
    {
      question: "I usually wake up ___ 7:00 AM every single morning.",
      options: ["in","at","on","by"],
      answer: 1,
      explanation: "Aniq soat vaqtlari oldidan doimo \"at\" predlogi ishlatiladi.",
      socraticHint: "Soat vaqtlari (masalan, 7:00) oldidan qaysi predlog qo‘yiladi?"
    },
    {
      question: "We usually have our main English class ___ Mondays and Wednesdays.",
      options: ["at","in","on","to"],
      answer: 2,
      explanation: "Hafta kunlari oldidan \"on\" predlogi ishlatiladi.",
      socraticHint: "Haftaning kunlari bilan qaysi vaqt predlogi kelishini eslang."
    },
    {
      question: "Most people feel energized and productive ___ the morning.",
      options: ["at","on","from","in"],
      answer: 3,
      explanation: "Kun qismlari (in the morning, in the afternoon, in the evening) bilan \"in\" ishlatiladi.",
      socraticHint: "\"The morning / the evening\" birikmalarida qaysi predlog bor?"
    },
    {
      question: "Which activity happens immediately after getting out of bed?",
      options: ["Brushing teeth","Driving to work","Falling asleep","Watching late TV"],
      answer: 0,
      explanation: "Uyqudan turgach birinchi bo‘lib tish yuviladi (brushing teeth).",
      socraticHint: "Ertalabki gigiyena odatini tanlang."
    },
    {
      question: "Stars shine brightly in the dark sky ___ night.",
      options: ["in","at","on","with"],
      answer: 1,
      explanation: "Kechasi uchun \"at night\" birikmasi to‘g‘ri hisoblanadi.",
      socraticHint: "\"Night\" so‘zi bilan istisno tariqasida qaysi predlog keladi?"
    },
    {
      question: "After breakfast, I ___ my coat and leave the house.",
      options: ["turn on","take off","put on","give up"],
      answer: 2,
      explanation: "\"Put on\" — kiyimni kiyib olmoq.",
      socraticHint: "Kiyimni ustiga kiyish ma’nosidagi iboraviy fe’l."
    },
    {
      question: "Which word means the journey from home to your workplace and back?",
      options: ["Flight","Vacation","Picnic","Commute"],
      answer: 3,
      explanation: "\"Commute\" — har kuni ishga/o‘qishga qatnash.",
      socraticHint: "Kundalik qatnovni ifodalovchi maxsus so‘z."
    },
    {
      question: "I usually take a quick hot shower ___ going to sleep.",
      options: ["before","after","during","while"],
      answer: 0,
      explanation: "\"Before going to sleep\" — uxlashga yotishdan oldin.",
      socraticHint: "Uyquga ketishdan oldin qilinadigan ish."
    },
    {
      question: "On weekends, I like to sleep in ___ 9:30 AM.",
      options: ["since","until","from","between"],
      answer: 1,
      explanation: "\"Until\" — gacha (soat 9:30 gacha uxlayman).",
      socraticHint: "Biror vaqtga qadar davom etishni bildiruvchi so‘z."
    },
    {
      question: "First, I wash my face. ___, I prepare a healthy breakfast.",
      options: ["Never","Yesterday","Then","Ago"],
      answer: 2,
      explanation: "\"Then\" — so‘ngra, keyin (ketma-ketlikni ifodalaydi).",
      socraticHint: "Harakatlar ketma-ketligini bog‘lovchi so‘z."
    },
    {
      question: "What time is \"a quarter past eight\"?",
      options: ["7:45","8:45","8:30","8:15"],
      answer: 3,
      explanation: "\"Quarter past eight\" — sakkizdan 15 daqiqa o‘tdi (8:15).",
      socraticHint: "\"Past\" o‘tganini, \"quarter\" esa 15 daqiqani bildiradi."
    },
    {
      question: "What time is \"half past six\"?",
      options: ["6:30","6:15","6:45","7:30"],
      answer: 0,
      explanation: "\"Half past six\" — olti yarim (6:30).",
      socraticHint: "\"Half\" yarim soatni (30 daqiqa) anglatadi."
    },
    {
      question: "I usually do my homework ___ the afternoon.",
      options: ["at","in","on","to"],
      answer: 1,
      explanation: "\"In the afternoon\" — tushdan keyin.",
      socraticHint: "Kunning ikkinchi yarmidagi vaqt predlogi."
    },
    {
      question: "She ___ walks to the office because it is only 5 minutes away.",
      options: ["rarely","never","always","seldom"],
      answer: 2,
      explanation: "5 daqiqalik yaqin yo‘l bo‘lgani uchun \"always\" (doimo) piyoda yuradi.",
      socraticHint: "Yaqin masofaga doimiy harakat qilinadi."
    },
    {
      question: "He goes to the gym twice ___ week.",
      options: ["in","on","the","a"],
      answer: 3,
      explanation: "\"Twice a week\" — haftasiga ikki marta.",
      socraticHint: "Chastota birikmasida \"haftasiga\" qanday aytiladi?"
    },
    {
      question: "At noon (12:00 PM), we usually have our delicious ___ .",
      options: ["lunch","breakfast","dinner","midnight snack"],
      answer: 0,
      explanation: "Tushlik ovqati \"lunch\" deyiladi.",
      socraticHint: "Kunning o‘rtasidagi taomlanish."
    },
    {
      question: "How do you say: \"Men soat 11 da uxlashga yotaman\"?",
      options: ["I wake up at 11:00.","I go to bed at 11:00.","I leave home at 11:00.","I eat dinner at 11:00."],
      answer: 1,
      explanation: "\"Go to bed\" — yotoqqa yotmoq / uxlagani bormoq.",
      socraticHint: "Uxlash uchun o‘ringa yotish iborasi."
    },
    {
      question: "We celebrate New Year’s Day ___ January 1st.",
      options: ["at","in","on","by"],
      answer: 2,
      explanation: "Aniq sana (kun va oy) oldidan \"on\" ishlatiladi.",
      socraticHint: "To‘liq sanalar (kun + oy) bilan qaysi predlog keladi?"
    },
    {
      question: "In our city, heavy snow falls ___ winter.",
      options: ["to","at","on","in"],
      answer: 3,
      explanation: "Fasllar oldidan \"in\" qo‘llanadi (in winter, in summer).",
      socraticHint: "Yil fasllari bilan qaysi predlog qo‘yiladi?"
    },
    {
      question: "I need to set my alarm clock so I don't ___ in the morning.",
      options: ["oversleep","overeat","overwork","overthink"],
      answer: 0,
      explanation: "\"Oversleep\" — ortiqcha uxlab qolmoq / kech uyg‘onmoq.",
      socraticHint: "Uyg‘onmay rejalashtirilgandan ko‘proq uxlab qolish."
    }
  ],
  // ========================================================
  // MODULE: A1-PAST-SIMPLE (20 QUESTIONS)
  // ========================================================
  'a1-past-simple': [
    {
      question: "Yesterday, I ___ to the central library to borrow a book.",
      options: ["go","went","gone","going"],
      answer: 1,
      explanation: "\"Go\" ning Past Simple shakli \"went\".",
      socraticHint: "\"Go\" noto‘g‘ri fe’lining o‘tgan zamon shaklini eslang."
    },
    {
      question: "She ___ a very interesting English movie last night.",
      options: ["watch","watches","watched","watching"],
      answer: 2,
      explanation: "To‘g‘ri fe’lga o‘tgan zamonda \"-ed\" qo‘shiladi: \"watched\".",
      socraticHint: "Oddiy to‘g‘ri fe’lga qanday qo‘shimcha qo‘shiladi?"
    },
    {
      question: "We ___ not go to the seaside last summer.",
      options: ["were","do","does","did"],
      answer: 3,
      explanation: "Past Simple inkorida \"did not\" (didn't) qo‘llanadi.",
      socraticHint: "O‘tgan zamon inkor yordamchi fe’li."
    },
    {
      question: "Did you ___ your homework on time yesterday?",
      options: ["finish","finished","finishes","finishing"],
      answer: 0,
      explanation: "\"Did\" savolida asosiy fe’l bosh shaklda (V1) qoladi: \"finish\".",
      socraticHint: "\"Did\" kelganda asosiy fe’ldan \"-ed\" tushib qoladi."
    },
    {
      question: "What is the past form of the irregular verb \"Buy\"?",
      options: ["Buyed","Bought","Brought","Buying"],
      answer: 1,
      explanation: "\"Buy\" ning o‘tgan zamon shakli \"bought\".",
      socraticHint: "\"Buy\" fe’lining 2-shaklini eslang."
    },
    {
      question: "They ___ at home all day yesterday because it was freezing.",
      options: ["stole","stay","stayed","stood"],
      answer: 2,
      explanation: "\"Stay\" to‘g‘ri fe’l bo‘lib, \"-ed\" oladi: \"stayed\".",
      socraticHint: "Uyda qolish fe’lining o‘tgan zamon shakli."
    },
    {
      question: "He ___ a famous soccer player at the stadium two days ago.",
      options: ["see","seeing","seen","saw"],
      answer: 3,
      explanation: "\"See\" ning o‘tgan zamon shakli \"saw\".",
      socraticHint: "\"See\" noto‘g‘ri fe’lining 2-shakli."
    },
    {
      question: "How is the \"-ed\" ending pronounced in the word \"Visited\"?",
      options: ["/ɪd/","/d/","/t/","/ed/"],
      answer: 0,
      explanation: "-t yoki -d tovushlaridan keyin \"-ed\" /ɪd/ deb o‘qiladi (vizit-id).",
      socraticHint: "\"t\" va \"d\" dan keyingi \"-ed\" talaffuz qoidasi."
    },
    {
      question: "I ___ an email to my overseas professor yesterday afternoon.",
      options: ["write","wrote","written","writing"],
      answer: 1,
      explanation: "\"Write\" ning o‘tgan zamoni \"wrote\".",
      socraticHint: "\"Write\" fe’lining 2-shakli."
    },
    {
      question: "Where ___ you go on your last summer vacation?",
      options: ["were","do","did","had"],
      answer: 2,
      explanation: "O‘tgan zamon maxsus so‘rog‘ida harakat fe’li bilan \"did\" qo‘llanadi.",
      socraticHint: "O‘tgan zamondagi so‘roq so‘zi."
    },
    {
      question: "The weather ___ warm and sunny throughout the weekend.",
      options: ["be","were","is","was"],
      answer: 3,
      explanation: "\"The weather\" (birlik) bilan \"was\" ishlatiladi.",
      socraticHint: "Birlikdagi ot bilan \"to be\" ning o‘tgan zamoni."
    },
    {
      question: "My friends ___ very happy to see each other after years.",
      options: ["were","was","are","been"],
      answer: 0,
      explanation: "\"Friends\" (ko‘plik) bilan \"were\" ishlatiladi.",
      socraticHint: "Ko‘plikdagi ot bilan \"to be\" ning o‘tgan zamoni."
    },
    {
      question: "I ___ delicious traditional plov for lunch yesterday.",
      options: ["eat","ate","eaten","eating"],
      answer: 1,
      explanation: "\"Eat\" ning o‘tgan zamoni \"ate\" /et/ yoki /eɪt/.",
      socraticHint: "\"Eat\" fe’lining 2-shaklini toping."
    },
    {
      question: "What is the past form of the irregular verb \"Make\"?",
      options: ["Maked","Mad","Made","Making"],
      answer: 2,
      explanation: "\"Make\" ning o‘tgan zamoni \"made\".",
      socraticHint: "\"Make\" ning 2-shakli."
    },
    {
      question: "She ___ not understand the speaker’s fast accent at first.",
      options: ["does","has","was","did"],
      answer: 3,
      explanation: "O‘tgan zamondagi inkor uchun \"did not understand\" deyiladi.",
      socraticHint: "O‘tgan zamon inkorida qaysi yordamchi fe’l ishlatiladi?"
    },
    {
      question: "Three weeks ___, we moved into our brand new apartment.",
      options: ["ago","before","last","since"],
      answer: 0,
      explanation: "Vaqt oralig‘idan keyin \"ago\" (avval) qo‘yiladi (three weeks ago).",
      socraticHint: "Vaqt birligidan so‘ng kelib \"avval\" ma’nosini beruvchi so‘z."
    },
    {
      question: "He ___ his house keys and had to wait outside.",
      options: ["losing","lost","loss","losed"],
      answer: 1,
      explanation: "\"Lose\" ning o‘tgan zamon shakli \"lost\".",
      socraticHint: "Yo‘qotib qo‘ymoq fe’lining 2-shakli."
    },
    {
      question: "We ___ our grandparents in Bukhara last month.",
      options: ["visit","visiting","visited","visits"],
      answer: 2,
      explanation: "\"Visit\" to‘g‘ri fe’l: \"visited\".",
      socraticHint: "To‘g‘ri fe’lga o‘tgan zamon qo‘shimchasini qo‘shing."
    },
    {
      question: "Why ___ she leave the party so early last night?",
      options: ["has","was","does","did"],
      answer: 3,
      explanation: "\"Why did she leave...\" — o‘tgan zamon so‘rog‘i.",
      socraticHint: "O‘tgan zamonda fe’l bor gapda qaysi so‘roq yordamchisi kerak?"
    },
    {
      question: "I ___ up at 6:00 AM yesterday and did morning exercises.",
      options: ["got","get","gotten","getting"],
      answer: 0,
      explanation: "\"Get up\" ning o‘tgan zamoni \"got up\".",
      socraticHint: "\"Get\" ning 2-shaklini tanlang."
    }
  ],
  // ========================================================
  // MODULE: A1-EXPRESSING-NEEDS (20 QUESTIONS)
  // ========================================================
  'a1-expressing-needs': [
    {
      question: "At a cafe, which is the most polite way to order coffee?",
      options: ["I want coffee now.","I would like a cup of coffee, please.","Give me coffee.","Coffee to me."],
      answer: 1,
      explanation: "\"I would like...\" — xushmuomala buyurtma berishning eng to‘g‘ri shakli.",
      socraticHint: "Eng muloyim va madaniyatli iborani tanlang."
    },
    {
      question: "Do you have ___ fresh apples in the kitchen?",
      options: ["some","much","any","an"],
      answer: 2,
      explanation: "So‘roq va inkor gaplarda sanaladigan ko‘plik otlar bilan \"any\" ishlatiladi.",
      socraticHint: "So‘roq gaplarda qaysi noaniqlik olmoshi keladi?"
    },
    {
      question: "Would you like ___ hot green tea? (An offer of hospitality)",
      options: ["a","any","many","some"],
      answer: 3,
      explanation: "Muloyim taklif (offer) gaplarida so‘roq bo‘lsa ham \"some\" ishlatiladi.",
      socraticHint: "Mehmon kutish va taklif qilishda \"some\" qo‘llanadi."
    },
    {
      question: "How ___ sugar do you take in your morning tea?",
      options: ["much","many","few","any"],
      answer: 0,
      explanation: "Shakar sanalmaydigan ot bo‘lgani uchun \"How much\" so‘raladi.",
      socraticHint: "Sanalmaydigan otlar miqdorini so‘rash shakli."
    },
    {
      question: "How ___ students are present in the classroom today?",
      options: ["much","many","long","often"],
      answer: 1,
      explanation: "Talabalar sanaladigan ko‘plik ot bo‘lgani uchun \"How many\" deyiladi.",
      socraticHint: "Donalab sanaladigan narsalar uchun qaysi so‘roq so‘zi ishlatiladi?"
    },
    {
      question: "Could you please pass me ___ salt from the table?",
      options: ["an","a","the","many"],
      answer: 2,
      explanation: "Stoldagi aniq tuzdon nazarda tutilgani uchun \"the\" artikli qo‘yiladi.",
      socraticHint: "Aniq ko‘rinib turgan narsa oldidan qaysi artikl keladi?"
    },
    {
      question: "I feel very cold. Could you please ___ the window?",
      options: ["throw","open","break","close"],
      answer: 3,
      explanation: "Sovuq qotganda derazani yopish (\"close\") iltimos qilinadi.",
      socraticHint: "Sovuq bo‘lsa, derazani nima qilish kerak?"
    },
    {
      question: "We don't have ___ milk left in the refrigerator.",
      options: ["any","some","many","no"],
      answer: 0,
      explanation: "Inkor gapda sanalmaydigan ot oldidan \"any\" qo‘yiladi.",
      socraticHint: "Inkor gapda \"hech qanday\" ma’nosida qaysi so‘z keladi?"
    },
    {
      question: "I have ___ friends who study medicine abroad.",
      options: ["a little","a few","much","any"],
      answer: 1,
      explanation: "Sanaladigan ko‘plik otlar bilan \"a few\" (bir nechta) ishlatiladi.",
      socraticHint: "Sanaladigan do‘stlar bilan \"bir nechta\" qanday aytiladi?"
    },
    {
      question: "There is only ___ water left in the glass.",
      options: ["a few","many","a little","any"],
      answer: 2,
      explanation: "Sanalmaydigan suyuqliklar bilan \"a little\" (ozgina) qo‘llanadi.",
      socraticHint: "Sanalmaydigan suv bilan \"ozgina\" ma’nosidagi so‘z."
    },
    {
      question: "How ___ does this leather jacket cost?",
      options: ["many","number","price","much"],
      answer: 3,
      explanation: "Narxni so‘rashda \"How much does it cost?\" deb so‘raladi.",
      socraticHint: "Narx so‘rash iborasi."
    },
    {
      question: "Excuse me, ___ I have the bill, please?",
      options: ["can","must","should","will"],
      answer: 0,
      explanation: "Restoranda hisobni so‘rashda \"Can I have the bill, please?\" qo‘llanadi.",
      socraticHint: "Xushmuomala so‘rov modal fe’li."
    },
    {
      question: "I would like to make an appointment ___ Dr. Alimov.",
      options: ["to","with","for","at"],
      answer: 1,
      explanation: "Kim bilandir uchrashuv belgilashda \"an appointment with...\" deyiladi.",
      socraticHint: "Shifokor bilan uchrashuv tayinlash predlogi."
    },
    {
      question: "Do you need ___ help with those heavy luggage bags?",
      options: ["a","many","any","an"],
      answer: 2,
      explanation: "\"Help\" sanalmaydi, so‘roqda \"any help\" deyiladi.",
      socraticHint: "So‘roq gapda sanalmaydigan ot oldidagi so‘z."
    },
    {
      question: "Can I pay ___ credit card or cash?",
      options: ["on","in","with","by"],
      answer: 3,
      explanation: "Plastik karta orqali to‘lov qilish \"by credit card\" deyiladi.",
      socraticHint: "Karta bilan to‘lash predlogi."
    },
    {
      question: "I am so hungry! I ___ eat a huge bowl of soup.",
      options: ["could","should","must","am"],
      answer: 0,
      explanation: "\"I could eat...\" — qobiliyat va istakni xushmuomala ifodalash.",
      socraticHint: "Kuchli ishtahani muloyim bildirish."
    },
    {
      question: "There aren't ___ chairs in this meeting room.",
      options: ["too","enough","much","a little"],
      answer: 1,
      explanation: "\"Not enough\" — yetarli emas.",
      socraticHint: "\"Yetarlicha emas\" ma’nosidagi so‘z."
    },
    {
      question: "May I ___ your pen for one minute, please?",
      options: ["give","lend","borrow","lose"],
      answer: 2,
      explanation: "\"Borrow\" — vaqtincha olib turmoq.",
      socraticHint: "Birovdan narsani vaqtincha so‘rab turish fe’li."
    },
    {
      question: "Where is the fitting room? I want to ___ on these pants.",
      options: ["wear","put","take","try"],
      answer: 3,
      explanation: "\"Try on\" — kiyimni kiyib ko‘rmoq (o‘lchamini bilish uchun).",
      socraticHint: "Kiyimni sotib olishdan oldin kiyib ko‘rish iborasi."
    },
    {
      question: "Everything was delicious! Keep the ___ , please.",
      options: ["change","coin","money","price"],
      answer: 0,
      explanation: "\"Keep the change\" — qaytimi kerak emas / qaytim sizga.",
      socraticHint: "Ofitsiantga qaytimni choypuli sifatida qoldirish iborasi."
    }
  ],
  // ========================================================
  // MODULE: A2-FUTURE-MODALS (20 QUESTIONS)
  // ========================================================
  'a2-future-modals': [
    {
      question: "Look at those dark clouds! It ___ rain very soon.",
      options: ["will","is going to","must","should"],
      answer: 1,
      explanation: "Ko‘z o‘ngimizdagi yaqqol dalil (qora bulutlar) bo‘lsa, \"be going to\" ishlatiladi.",
      socraticHint: "Hozirgi dalilga asoslangan aniq kelajak bashorati."
    },
    {
      question: "I promise I ___ help you with your homework tonight.",
      options: ["am","going to","will","can"],
      answer: 2,
      explanation: "Va’da (promise) va o‘sha lahzada qabul qilingan qarorlar uchun \"will\" qo‘llanadi.",
      socraticHint: "Va’da berishda qaysi kelasi zamon yordamchisi ishlatiladi?"
    },
    {
      question: "You ___ wear a seatbelt while driving; it is the law.",
      options: ["may","might","could","must"],
      answer: 3,
      explanation: "Qonuniy qat’iy majburiyat uchun \"must\" ishlatiladi.",
      socraticHint: "Qonun bilan belgilangan qat’iy talab modal fe’li."
    },
    {
      question: "You look very pale and tired. You ___ see a doctor.",
      options: ["should","might","would","will"],
      answer: 0,
      explanation: "Maslahat (advice) berishda \"should\" modal fe’li qo‘llanadi.",
      socraticHint: "Tavsiya va maslahat modal fe’li."
    },
    {
      question: "Take an umbrella with you. It ___ rain later in the evening.",
      options: ["must","might","shall","ought"],
      answer: 1,
      explanation: "Ehtimollik (taxminan 40-50% ehtimol) uchun \"might\" ishlatiladi.",
      socraticHint: "Noaniq ehtimollikni bildiruvchi modal fe’l."
    },
    {
      question: "When I was seven years old, I ___ swim very fast.",
      options: ["can","must","could","should"],
      answer: 2,
      explanation: "O‘tmishdagi umumiy qobiliyat uchun \"could\" ishlatiladi.",
      socraticHint: "\"Can\" ning o‘tgan zamon shakli."
    },
    {
      question: "We ___ to study hard if we want to pass the exam.",
      options: ["can","must","should","have"],
      answer: 3,
      explanation: "\"Have to\" — majbur bo‘lmoq (to bilan birga faqat have to keladi).",
      socraticHint: "Orqasidan \"to\" talab qiladigan majburiyat fe’li."
    },
    {
      question: "Students ___ not use smartphones during the official exam.",
      options: ["must","might","would","need"],
      answer: 0,
      explanation: "\"Must not\" (mustn't) — qat’iy taqiq (prohibition).",
      socraticHint: "Qat’iy man qilish, taqiqlash modal fe’li."
    },
    {
      question: "Next Saturday, we ___ visit our grandparents in the village.",
      options: ["will to","are going to","must to","should to"],
      answer: 1,
      explanation: "Oldindan rejalashtirilgan niyat uchun \"are going to visit\" to‘g‘ri.",
      socraticHint: "Oldindan tuzilgan reja ifodasi."
    },
    {
      question: "Excuse me, ___ you please tell me the way to the train station?",
      options: ["must","should","could","might"],
      answer: 2,
      explanation: "\"Could you please...\" — muloyim iltimos shakli.",
      socraticHint: "Muloyim iltimos modal fe’li."
    },
    {
      question: "Tomorrow is a holiday, so I ___ wake up early.",
      options: ["can't","mustn't","shouldn't","don't have to"],
      answer: 3,
      explanation: "\"Don't have to\" — majburiyat yo‘q (xohlasa turadi, xohlamasa yo‘q).",
      socraticHint: "Majburiyatning yo‘qligini bildiruvchi shakl."
    },
    {
      question: "I think tomorrow ___ be a pleasant and warm day.",
      options: ["will","is going","shall","can"],
      answer: 0,
      explanation: "\"I think / I believe\" bilan shaxsiy fikriy bashoratda \"will\" keladi.",
      socraticHint: "Shaxsiy taxmin va fikr bildirishda kelasi zamon shakli."
    },
    {
      question: "You ___ eat so much sugary candy; it is bad for your teeth.",
      options: ["must","shouldn't","might","would"],
      answer: 1,
      explanation: "Yomon odatga nisbatan maslahat: \"shouldn't\" (qilmasliging kerak).",
      socraticHint: "Salbiy oqibatdan ogohlantiruvchi maslahat."
    },
    {
      question: "___ you open the window for some fresh air, please?",
      options: ["Should","Must","Will","Shall"],
      answer: 2,
      explanation: "\"Will you open...\" — norasmiy muloyim so‘rov.",
      socraticHint: "Iltimos so‘rog‘i."
    },
    {
      question: "We ___ leave now, otherwise we will miss our flight.",
      options: ["could","would","might","had better"],
      answer: 3,
      explanation: "\"Had better\" — zudlik bilan qilish lozim bo‘lgan ogohlantiruvchi maslahat.",
      socraticHint: "Qilmasa yomon oqibat kelib chiqadigan qat’iy tavsiya."
    },
    {
      question: "He is not answering his phone; he ___ be in a meeting.",
      options: ["might","should","must to","have"],
      answer: 0,
      explanation: "Hozirgi paytdagi ehtimollik taxmini uchun \"might\" yoki \"may\" keladi.",
      socraticHint: "Ehtimollik bildirish."
    },
    {
      question: "Shall I ___ you carry those heavy shopping bags?",
      options: ["helped","help","helping","to help"],
      answer: 1,
      explanation: "\"Shall I\" dan keyin fe’lning bosh shakli (V1) keladi.",
      socraticHint: "Yordam taklif qilishda \"Shall I\" dan keyingi fe’l shakli."
    },
    {
      question: "She ___ play the piano beautifully when she was younger.",
      options: ["might","can","could","must"],
      answer: 2,
      explanation: "O‘tmishdagi qobiliyat uchun \"could\".",
      socraticHint: "O‘tgan zamondagi qobiliyat."
    },
    {
      question: "You ___ pay for parking here; it is completely free.",
      options: ["ought not","mustn't","cannot","needn't"],
      answer: 3,
      explanation: "\"Needn't\" — hojat yo‘q, bepul bo‘lgani uchun to‘lash shart emas.",
      socraticHint: "Ehtiyoj va zarurat yo‘qligi ifodasi."
    },
    {
      question: "I ___ travel to London next year if I save enough money.",
      options: ["will","was","am","did"],
      answer: 0,
      explanation: "Kelajakdagi real reja/istak uchun \"will travel\".",
      socraticHint: "Shartli kelasi zamon ifodasi."
    }
  ],
  // ========================================================
  // MODULE: B1-PRESENT-PAST-PERFECT (20 QUESTIONS)
  // ========================================================
  'b1-present-past-perfect': [
    {
      question: "I have lived in this historic city ___ 2015.",
      options: ["ago","for","since","in"],
      answer: 2,
      explanation: "Harakat boshlangan aniq sana/nuqta (2015) bilan \"since\" ishlatiladi.",
      socraticHint: "Boshlanish nuqtasi bilan qaysi so‘z keladi?"
    },
    {
      question: "She has been studying English ___ five consecutive years.",
      options: ["while","since","during","for"],
      answer: 3,
      explanation: "Vaqt davomiyligi (davri) bilan \"for\" qo‘llanadi (for five years).",
      socraticHint: "Vaqt oralig‘i/muddati bilan qaysi predlog keladi?"
    },
    {
      question: "Have you ___ flown in a commercial airplane before?",
      options: ["ever","never","already","yet"],
      answer: 0,
      explanation: "Hayotiy tajriba haqidagi so‘roqlarda \"ever\" (hech qachon) ishlatiladi.",
      socraticHint: "Hayotingizda biror marta qilib ko‘rganmisiz deb so‘rashda ishlatiladigan so‘z."
    },
    {
      question: "I have ___ finished reading this 500-page novel; it was brilliant!",
      options: ["yet","just","ever","still"],
      answer: 1,
      explanation: "\"Just\" — hozirgina, sal avval (yaqinda yakunlangan harakat).",
      socraticHint: "Hozirgina yakunlangan ish-harakat belgisi."
    },
    {
      question: "Has the delivery courier arrived ___ ?",
      options: ["just","already","yet","since"],
      answer: 2,
      explanation: "Present Perfect so‘roq va inkor gaplarining oxirida \"yet\" keladi.",
      socraticHint: "Hali ham / allaqachon so‘rog‘ida gap oxiriga nima qo‘yiladi?"
    },
    {
      question: "By the time the police arrived, the burglar ___ escaped.",
      options: ["did","has","was","had"],
      answer: 3,
      explanation: "O‘tmishdagi boshqa bir harakatdan oldin sodir bo‘lgani uchun Past Perfect (\"had escaped\") kerak.",
      socraticHint: "O‘tgan zamondan ham oldinroq bo‘lib o‘tgan harakat."
    },
    {
      question: "I ___ to Italy three times in my life so far.",
      options: ["have been","have gone","was gone","went to"],
      answer: 0,
      explanation: "Borib qaytgan hayotiy tajriba uchun \"have been to\" ishlatiladi.",
      socraticHint: "Borib orqaga qaytib kelganlik tajribasi qanday aytiladi?"
    },
    {
      question: "Where is John? — He ___ to the post office; he will be back in an hour.",
      options: ["has been","has gone","went","had gone"],
      answer: 1,
      explanation: "\"Has gone\" — ketgan va hali qaytib kelmagan.",
      socraticHint: "Ketib hali qaytmagan holat ifodasi."
    },
    {
      question: "She couldn't open the door because she ___ her keys at the office.",
      options: ["forgotten","has forgotten","had forgotten","forgets"],
      answer: 2,
      explanation: "Eshikni ocha olmaslikdan avval kalitni unutib qoldirgan: Past Perfect (\"had forgotten\").",
      socraticHint: "O‘tmishdagi natijadan oldingi sabab zamoni."
    },
    {
      question: "We ___ each other since our elementary school days.",
      options: ["are knowing","know","knew","have known"],
      answer: 3,
      explanation: "\"Since\" bilan davom etib kelayotgan holat uchun Present Perfect: \"have known\".",
      socraticHint: "O‘tmishdan hozirgacha davom etayotgan tanishlik."
    },
    {
      question: "When ___ you purchase that brand new sports car?",
      options: ["did","have","were","had"],
      answer: 0,
      explanation: "\"When\" bilan aniq vaqt so‘ralganda Present Perfect EMAS, Past Simple (\"did\") ishlatiladi.",
      socraticHint: "\"When\" so‘rog‘i bilan qaysi o‘tgan zamon kelishini eslang."
    },
    {
      question: "I ___ my mobile phone; I can't call my parents right now.",
      options: ["lost","have lost","had lost","lose"],
      answer: 1,
      explanation: "Hozirgi lahzada oqibati ko‘rinib turgan harakat uchun Present Perfect: \"have lost\".",
      socraticHint: "Hozirgi daqiqaga ta’sir qiluvchi natija."
    },
    {
      question: "Up to now, our dedicated team ___ all quarterly objectives.",
      options: ["had achieved","achieved","has achieved","achieve"],
      answer: 2,
      explanation: "\"Up to now\" (hozirgacha) Present Perfect ni talab qiladi.",
      socraticHint: "Hozirgi kunga qadar erishilgan natija."
    },
    {
      question: "They were exhausted because they ___ running for two hours.",
      options: ["did be","have been","were been","had been"],
      answer: 3,
      explanation: "O‘tmishdagi charchoqdan oldin davom etgan jarayon: Past Perfect Continuous (\"had been running\").",
      socraticHint: "O‘tmishdagi jarayon davomiyligi."
    },
    {
      question: "She ___ finished her bachelor’s thesis already.",
      options: ["has","had","is","did"],
      answer: 0,
      explanation: "\"Already\" bilan \"has finished\".",
      socraticHint: "Allaqachon tugatganlik ifodasi."
    },
    {
      question: "This is the most mesmerizing painting I have ___ seen.",
      options: ["never","ever","already","yet"],
      answer: 1,
      explanation: "Orttirma daraja (the most...) bilan \"ever\" ishlatiladi.",
      socraticHint: "Eng ajoyib narsani ta’riflashda \"ever\" qo‘llanadi."
    },
    {
      question: "The film ___ by the time we finally reached our cinema seats.",
      options: ["starts","has already started","had already started","was starting"],
      answer: 2,
      explanation: "Yetib borganimizda allaqachon boshlanib bo‘lgan edi: Past Perfect.",
      socraticHint: "O‘tgan zamondagi kechikishdan oldingi hodisa."
    },
    {
      question: "I have never ___ such an intriguing cultural tradition.",
      options: ["saw","witness","witnessing","witnessed"],
      answer: 3,
      explanation: "\"Have never\" dan keyin fe’lning 3-shakli (V3/Past Participle) keladi.",
      socraticHint: "Present Perfect da fe’l nechanchi shaklda bo‘ladi?"
    },
    {
      question: "How long ___ you been learning foreign languages?",
      options: ["have","did","are","were"],
      answer: 0,
      explanation: "\"How long have you been...\" — qancha vaqtdan beri davom etmoqda.",
      socraticHint: "Davom etayotgan jarayon muddati so‘rovi."
    },
    {
      question: "He told me that he ___ in Europe for five years before returning home.",
      options: ["has lived","had lived","lives","was living"],
      answer: 1,
      explanation: "O‘tmishdagi qaytishdan oldingi yashash davri: Past Perfect (\"had lived\").",
      socraticHint: "Qaytishdan avvalgi yashash davri zamoni."
    }
  ],
  // ========================================================
  // MODULE: B1-CONDITIONALS (20 QUESTIONS)
  // ========================================================
  'b1-conditionals': [
    {
      question: "If you heat pure ice cubes above zero degrees, they ___ .",
      options: ["melted","will melt","melt","would melt"],
      answer: 2,
      explanation: "Zero Conditional (ilmiy qonuniyat): If + Present Simple, Present Simple (\"melt\").",
      socraticHint: "O‘zgarmas ilmiy haqiqatlarda har ikkala qism qaysi zamonda bo‘ladi?"
    },
    {
      question: "If it ___ sunny tomorrow morning, we will have a picnic in the park.",
      options: ["were","will be","was","is"],
      answer: 3,
      explanation: "First Conditional shart ergash gapida kelasi zamon o‘rniga Present Simple qo‘llanadi.",
      socraticHint: "\"If\" li qismda kelasi zamon (\"will\") o‘rniga nima ishlatiladi?"
    },
    {
      question: "If I ___ a million dollars, I would travel all around the world.",
      options: ["had","have","will have","would have"],
      answer: 0,
      explanation: "Second Conditional (xayoliy hozirgi shart): If + Past Simple, would + V1.",
      socraticHint: "Xayoliy orzularda \"if\" dan keyin qaysi zamon keladi?"
    },
    {
      question: "If I ___ you, I would take that prestigious job offer immediately.",
      options: ["am","were","was being","will be"],
      answer: 1,
      explanation: "Maslahat va norasmiy xayolda \"If I were you\" qolipi ishlatiladi.",
      socraticHint: "\"Sizning o‘rningizda bo‘lganimda\" iborasini eslang."
    },
    {
      question: "We will miss our flight ___ we leave for the airport right now.",
      options: ["provided","if","unless","as long as"],
      answer: 2,
      explanation: "\"Unless\" = \"if not\" (agar hoziroq yo‘lga chiqmasak).",
      socraticHint: "\"Agar ... bo‘lmasa\" ma’nosidagi inkor bog‘lovchi."
    },
    {
      question: "If she studied more diligently, she ___ get higher test scores.",
      options: ["is going to","will","can","would"],
      answer: 3,
      explanation: "Second Conditional bosh gapida \"would + V1\" ishlatiladi.",
      socraticHint: "Second Conditional bosh gapining yordamchisi."
    },
    {
      question: "Water evaporates if you ___ it to boiling temperature.",
      options: ["boil","will boil","boiled","would boil"],
      answer: 0,
      explanation: "Zero conditional: tabiiy qonuniyat Present Simple da.",
      socraticHint: "Faktik tabiiy hodisa zamoni."
    },
    {
      question: "What ___ you do if you encountered a wild bear in the forest?",
      options: ["will","would","do","are"],
      answer: 1,
      explanation: "Noreal vaziyat so‘rog‘i (encountered = past): \"What would you do?\".",
      socraticHint: "Noreal taxminiy vaziyat savoli."
    },
    {
      question: "As long as you ___ the rules, you can join our soccer tournament.",
      options: ["followed","will follow","follow","are following"],
      answer: 2,
      explanation: "\"As long as\" (modomiki, sharti bilan) dan keyin Present Simple keladi.",
      socraticHint: "Shart bog‘lovchisidan keyingi zamon qoidasi."
    },
    {
      question: "If I had known about the traffic jam, I ___ another route.",
      options: ["took","would take","will take","would have taken"],
      answer: 3,
      explanation: "Third Conditional (o‘tmishdagi afsus): If had known, would have taken.",
      socraticHint: "O‘tib ketgan voqeaga afsuslanish tuzilishi."
    },
    {
      question: "If you mix blue and yellow paint, you ___ green.",
      options: ["get","will get","got","would get"],
      answer: 0,
      explanation: "Zero Conditional ilmiy fakt: doimo \"get\".",
      socraticHint: "Ranglar aralashmasi qoidasi."
    },
    {
      question: "I will lend you my laptop provided that you ___ good care of it.",
      options: ["will take","take","took","would take"],
      answer: 1,
      explanation: "\"Provided that\" shartida Present Simple ishlatiladi: \"take\".",
      socraticHint: "Shart ergash gapidagi fe’l zamoni."
    },
    {
      question: "If he ___ the truth earlier, he wouldn't have been punished.",
      options: ["tells","told","had told","would tell"],
      answer: 2,
      explanation: "Third conditional shart qismi: Past Perfect (\"had told\").",
      socraticHint: "O‘tmishdagi amalga oshmagan shart qismi."
    },
    {
      question: "Unless it ___ heavily, our outdoor match will proceed as planned.",
      options: ["is raining","will rain","rained","rains"],
      answer: 3,
      explanation: "\"Unless\" dan keyin Present Simple keladi (\"rains\").",
      socraticHint: "\"Unless\" dan keyin qaysi zamon keladi?"
    },
    {
      question: "If I were fluent in four languages, I ___ as an international diplomat.",
      options: ["would work","will work","worked","work"],
      answer: 0,
      explanation: "Second conditional orzusi: \"would work\".",
      socraticHint: "Xayoliy holatning natija qismi."
    },
    {
      question: "Plants wither and die if they ___ receive sufficient sunlight.",
      options: ["won't","don't","didn't","wouldn't"],
      answer: 1,
      explanation: "Biologik fakt inkorida Present Simple: \"don't\".",
      socraticHint: "Tabiiy qonuniyat inkori."
    },
    {
      question: "If you press this red emergency button, the siren ___ .",
      options: ["would sound","sounded","sounds","was sounding"],
      answer: 2,
      explanation: "Doimiy texnik mexanizm (Zero conditional): \"sounds\".",
      socraticHint: "Tugma bosilgandagi aniq natija."
    },
    {
      question: "Where would you live if you ___ choose any country on Earth?",
      options: ["may","can","will","could"],
      answer: 3,
      explanation: "Second conditional shartida: \"if you could choose\".",
      socraticHint: "Noreal orzudagi \"qila olsangiz\" shakli."
    },
    {
      question: "If we hurry up, we ___ catch the express train.",
      options: ["might","would","could have","are"],
      answer: 0,
      explanation: "First conditional da \"will\" o‘rniga ehtimollik uchun \"might\" kelishi mumkin.",
      socraticHint: "Real kelajakdagi imkoniyat."
    },
    {
      question: "Supposing you won the lottery jackpot, what ___ you purchase first?",
      options: ["will","would","do","did"],
      answer: 1,
      explanation: "\"Supposing\" (faraz qiling) xayoliy shart bo‘lib, \"would\" bilan keladi.",
      socraticHint: "Faraziy savol yordamchisi."
    }
  ],
  // ========================================================
  // MODULE: B2-PHRASAL-VERBS (20 QUESTIONS)
  // ========================================================
  'b2-phrasal-verbs': [
    {
      question: "Never ___ on your dreams, no matter how arduous the challenge is.",
      options: ["give away","give in","give up","give out"],
      answer: 2,
      explanation: "\"Give up\" — taslim bo‘lmoq / to‘xtatmoq. \"Never give up\" — aslo taslim bo‘lmang.",
      socraticHint: "Kuchsizlik qilib taslim bo‘lish ma’nosidagi iboraviy fe’l."
    },
    {
      question: "I am really looking forward ___ meeting you in London next week.",
      options: ["with","for","at","to"],
      answer: 3,
      explanation: "\"Look forward to + V-ing\" — intiqlik bilan kutmoq.",
      socraticHint: "\"Look forward\" qaysi predlog bilan birikadi?"
    },
    {
      question: "We need to ___ off the meeting until next Friday due to bad weather.",
      options: ["put","take","call","set"],
      answer: 0,
      explanation: "\"Put off\" — biror tadbirni kechiktirmoq / boshqa vaqtga qoldirmoq.",
      socraticHint: "Kechiktirmoq, keyinga qoldirmoq ma’nosidagi fe’l."
    },
    {
      question: "Because of the heavy snowstorm, the airline had to ___ off the flight completely.",
      options: ["put","call","take","run"],
      answer: 1,
      explanation: "\"Call off\" — butunlay bekor qilmoq (cancel).",
      socraticHint: "Tadbirni yoki reysni bekor qilish iborasi."
    },
    {
      question: "Please fasten your seatbelts; the plane is about to ___ off.",
      options: ["get","put","take","turn"],
      answer: 2,
      explanation: "\"Take off\" — samolyotning yerdan ko‘tarilishi (uchib ketishi).",
      socraticHint: "Samolyotning havoga ko‘tarilish harakati."
    },
    {
      question: "We have ___ out of printer paper; could you order some more?",
      options: ["made","taken","put","run"],
      answer: 3,
      explanation: "\"Run out of\" — tugab qolmoq (zahira qolmasligi).",
      socraticHint: "Narsaning tugab qolishini bildiruvchi ibora."
    },
    {
      question: "Our research team will ___ out a comprehensive survey next month.",
      options: ["carry","take","give","hold"],
      answer: 0,
      explanation: "\"Carry out\" — reja yoki tadqiqotni amalga oshirmoq / o‘tkazmoq.",
      socraticHint: "Tadqiqotni o‘tkazish, ijro etish fe’li."
    },
    {
      question: "She unexpectedly ___ down the generous job offer because of the salary.",
      options: ["took","turned","put","gave"],
      answer: 1,
      explanation: "\"Turn down\" — taklifni rad etmoq (refuse).",
      socraticHint: "Taklifni rad etish ma’nosidagi ibora."
    },
    {
      question: "It took him several hours to ___ out the complicated math formula.",
      options: ["turn","make","figure","put"],
      answer: 2,
      explanation: "\"Figure out\" — tushunib yetmoq / yechimini topmoq.",
      socraticHint: "Muammoning yechimini aql bilan topish."
    },
    {
      question: "Don't hesitate to ___ up any concerns during tomorrow’s meeting.",
      options: ["call","take","put","bring"],
      answer: 3,
      explanation: "\"Bring up\" — mavzuni muhokamaga ko‘tarmoq / tilga olmoq.",
      socraticHint: "Muhokama uchun mavzu ko‘tarish iborasi."
    },
    {
      question: "She was ___ up by her supportive grandparents in the countryside.",
      options: ["brought","grown","taken","made"],
      answer: 0,
      explanation: "\"Bring up\" — bolani tarbiyalamoq, voyaga yetkazmoq.",
      socraticHint: "Bolani tarbiya qilib o‘stirish iborasi."
    },
    {
      question: "You should ___ up this unfamiliar word in your English dictionary.",
      options: ["search","look","find","watch"],
      answer: 1,
      explanation: "\"Look up\" — lug‘atdan yoki kitobdan ma’lumot qidirmoq.",
      socraticHint: "Lug‘atdan so‘z qidirish iborasi."
    },
    {
      question: "I accidentally ___ into my former high school teacher at the supermarket.",
      options: ["hit","knocked","bumped","touched"],
      answer: 2,
      explanation: "\"Bump into\" (yoki \"run into\") — tasodifan uchrashib qolmoq.",
      socraticHint: "Kutilmaganda duch kelib qolish."
    },
    {
      question: "He promised to quit smoking and decided to ___ it up for good.",
      options: ["turn","take","put","give"],
      answer: 3,
      explanation: "\"Give up\" — zararli odatni tashlamoq.",
      socraticHint: "Yomon odatni tashlash iborasi."
    },
    {
      question: "The car suddenly ___ down in the middle of the remote highway.",
      options: ["broke","fell","cut","dropped"],
      answer: 0,
      explanation: "\"Break down\" — mashina yoki mexanizmning buzilib qolishi.",
      socraticHint: "Mashinaning ishdan chiqishi."
    },
    {
      question: "Can you please ___ after my cat while I am traveling abroad?",
      options: ["take","look","care","see"],
      answer: 1,
      explanation: "\"Look after\" — g‘amxo‘rlik qilmoq / qarab turmoq.",
      socraticHint: "Qarab turmoq, parvarishlamoq iborasi."
    },
    {
      question: "I need to ___ up with a creative topic for my marketing presentation.",
      options: ["put","make","come","get"],
      answer: 2,
      explanation: "\"Come up with\" — yangi g‘oya yoki fikr o‘ylab topmoq.",
      socraticHint: "Yangi g‘oya topish iborasi."
    },
    {
      question: "How do you ___ along with your new colleagues at work?",
      options: ["stand","make","go","get"],
      answer: 3,
      explanation: "\"Get along with\" — kim bilandir yaxshi chiqishmoq / munosabat o‘rnatmoq.",
      socraticHint: "Odamlar bilan yaxshi munosabatda bo‘lish."
    },
    {
      question: "They had to ___ with terrible noise throughout the renovation period.",
      options: ["put up","take up","keep up","make up"],
      answer: 0,
      explanation: "\"Put up with\" — chidamoq / sabr qilmoq (tolerate).",
      socraticHint: "Noxush holatga chidash, bardosh berish."
    },
    {
      question: "Please remember to ___ in the registration form before the deadline.",
      options: ["write","fill","complete","make"],
      answer: 1,
      explanation: "\"Fill in\" (yoki \"fill out\") — anketani to‘ldirmoq.",
      socraticHint: "Hujjat va shakllarni to‘ldirish iborasi."
    }
  ],
  // ========================================================
  // MODULE: B2-BUSINESS-TRAVEL (20 QUESTIONS)
  // ========================================================
  'b2-business-travel': [
    {
      question: "In formal business emails, what is the best opening when writing to an unknown recipient?",
      options: ["What's up,","Hey there,","Dear Sir or Madam,","Hi buddy,"],
      answer: 2,
      explanation: "\"Dear Sir or Madam,\" — rasmiy xat yozishmada eng xushmuomala standart boshlanish.",
      socraticHint: "Rasmiy biznes etikasiga mos keluvchi murojaat."
    },
    {
      question: "Which phrase indicates that a document is included with your email?",
      options: ["See what I brought.","Look at the file I put below.","I threw a document inside.","Please find attached the quarterly financial report."],
      answer: 3,
      explanation: "\"Please find attached...\" — fayl biriktirilganini bildirishning professional standarti.",
      socraticHint: "Fayl biriktirilganini professional bildirish iborasi."
    },
    {
      question: "At the international airport, you must show your passport and ___ to board.",
      options: ["boarding pass","shopping receipt","library card","gym membership"],
      answer: 0,
      explanation: "\"Boarding pass\" — samolyotga chiqish taloni.",
      socraticHint: "Samolyotga chiqishda talab etiladigan chipta hujjati."
    },
    {
      question: "We need to reschedule our conference because the director has a conflicting ___ .",
      options: ["hobby","schedule","appetite","weather"],
      answer: 1,
      explanation: "\"Conflicting schedule\" — bir vaqtga to‘g‘ri kelib qolgan bandlik / ish jadvali.",
      socraticHint: "Ish rejasining to‘qnash kelishi."
    },
    {
      question: "What is the written list of topics to be discussed in a business meeting called?",
      options: ["Catalog","Menu","Agenda","Diary"],
      answer: 2,
      explanation: "\"Agenda\" — yig‘ilish kun tartibi.",
      socraticHint: "Majlisda ko‘riladigan masalalar ro‘yxati."
    },
    {
      question: "Both companies held intense talks to ___ a mutually beneficial contract.",
      options: ["postpone","refuse","destroy","negotiate"],
      answer: 3,
      explanation: "\"Negotiate\" — muzokara olib bormoq.",
      socraticHint: "Shartnoma tuzish uchun tomonlar olib boradigan muzokara."
    },
    {
      question: "I would be grateful if you could ___ the receipt of this email.",
      options: ["acknowledge","ignore","forget","delete"],
      answer: 0,
      explanation: "\"Acknowledge receipt\" — xat yetib kelganini tasdiqlamoq.",
      socraticHint: "Xat olganini tasdiqlash uchun ishlatiladigan professional so‘z."
    },
    {
      question: "During your hotel stay, where do you inform the staff that you are departing?",
      options: ["Elevator","Check-out desk","Basement","Gymnasium"],
      answer: 1,
      explanation: "\"Check-out\" — mehmonxonadan hisob-kitob qilib chiqib ketish.",
      socraticHint: "Mehmonxonadan chiqib ketish jarayoni."
    },
    {
      question: "Which closing is most suitable for a formal business letter?",
      options: ["Catch you later,","Cheers,","Yours sincerely,","Hugs and kisses,"],
      answer: 2,
      explanation: "\"Yours sincerely,\" — rasmiy xat yakunining standarti.",
      socraticHint: "Rasmiy xat yakunidagi xushmuomala so‘z."
    },
    {
      question: "The flight was delayed due to severe atmospheric ___ over the mountains.",
      options: ["warmth","gravity","silence","turbulence"],
      answer: 3,
      explanation: "\"Turbulence\" — havo tebranishi / turbulentlik.",
      socraticHint: "Parvozdagi qattiq havo silkinishi."
    },
    {
      question: "Could you please send me a detailed price ___ for 50 laptop units?",
      options: ["quotation","poetry","fiction","gossip"],
      answer: 0,
      explanation: "\"Quotation\" (quote) — rasmiy tijoriy narx taklifi.",
      socraticHint: "Tijoriy narxlar ro‘yxati taklifi."
    },
    {
      question: "I would like to ___ an inquiry regarding your international shipping rates.",
      options: ["take","make","do","bring"],
      answer: 1,
      explanation: "\"Make an inquiry\" — so‘rov yubormoq / surishtirmoq.",
      socraticHint: "\"Inquiry\" so‘zi qaysi fe’l bilan bog‘lanadi?"
    },
    {
      question: "Passengers are allowed one piece of carry-on ___ in the cabin.",
      options: ["vehicle","furniture","luggage","machine"],
      answer: 2,
      explanation: "\"Carry-on luggage\" — qo‘l yuki.",
      socraticHint: "Salonga olib kiriladigan shaxsiy yuk."
    },
    {
      question: "We sincerely apologize for any ___ caused by this temporary server outage.",
      options: ["pleasure","joy","laughter","inconvenience"],
      answer: 3,
      explanation: "\"Inconvenience\" — noqulaylik (apologize for any inconvenience).",
      socraticHint: "Mijozlarga yetkazilgan noqulaylik uchun uzr so‘rash."
    },
    {
      question: "Our quarterly sales target was exceeded by 15 ___ .",
      options: ["percent","century","meter","gram"],
      answer: 0,
      explanation: "\"Percent\" — foiz (15 percent).",
      socraticHint: "Ko‘rsatkichlar foizda ifodalanadi."
    },
    {
      question: "What is the process of going through customs and declaring imported goods called?",
      options: ["Security selfie","Customs clearance","Passport picnic","Baggage race"],
      answer: 1,
      explanation: "\"Customs clearance\" — bojxona ko‘rigidan o‘tish va rasmiylashtirish.",
      socraticHint: "Bojxona nazoratidan o‘tish atamasi."
    },
    {
      question: "We need to meet our project ___ by midnight on Friday.",
      options: ["baseline","guideline","deadline","headline"],
      answer: 2,
      explanation: "\"Deadline\" — topshirishning oxirgi qat’iy muddati.",
      socraticHint: "Topshirishning so‘nggi muddati."
    },
    {
      question: "All travel and meal expenses will be ___ by our company upon return.",
      options: ["accused","punished","forgotten","reimbursed"],
      answer: 3,
      explanation: "\"Reimbursed\" — xarajatlar qoplab berilishi (reimbursement).",
      socraticHint: "Xarajatlarning qaytarib to‘lab berilishi."
    },
    {
      question: "Could we set up a video conference call to discuss the ___ proposal?",
      options: ["partnership","wedding","hobby","lottery"],
      answer: 0,
      explanation: "\"Partnership proposal\" — hamkorlik taklifi.",
      socraticHint: "Kompaniyalar o‘rtasidagi hamkorlik taklifi."
    },
    {
      question: "Thank you for your prompt response and valuable ___ .",
      options: ["hostility","cooperation","competition","delay"],
      answer: 1,
      explanation: "\"Valuable cooperation\" — qimmatli hamkorlik.",
      socraticHint: "Birgalikdagi samarali ishlash uchun minnatdorchilik."
    }
  ],
  // ========================================================
  // MODULE: C1-INVERSIONS (20 QUESTIONS)
  // ========================================================
  'c1-inversions': [
    {
      question: "Hardly ___ entered the room when the telephone rang violently.",
      options: ["was I","I had","did I","had I"],
      answer: 3,
      explanation: "\"Hardly had + Subject + V3... when\" — inversiya qoidasi bo‘yicha yordamchi fe’l egadan oldinga o‘tadi.",
      socraticHint: "Inversiyada yordamchi fe’l egadan oldin turishi kerak."
    },
    {
      question: "Seldom ___ witnessed such an extraordinary display of talent.",
      options: ["have we","we have","did we","are we"],
      answer: 0,
      explanation: "Inkor ravish \"Seldom\" gap boshida kelsa: \"Seldom have we witnessed\".",
      socraticHint: "Gap \"Seldom\" bilan boshlanganda inversiya yasaladi."
    },
    {
      question: "Not only ___ arrive late, but he also forgot the key documents.",
      options: ["he did","did he","was he","has he"],
      answer: 1,
      explanation: "\"Not only did he arrive...\" — qat’iy inversiya tuzilishi.",
      socraticHint: "\"Not only\" bilan boshlangan gapda ega va fe’l o‘rni almashadi."
    },
    {
      question: "Under no circumstances ___ leave emergency exits blocked.",
      options: ["must staff to","staff should","should staff","staff must"],
      answer: 2,
      explanation: "\"Under no circumstances\" man qiluvchi inversiya: yordamchi fe’l egadan oldinda.",
      socraticHint: "Qat’iy inkor iborasi bilan boshlanganda yordamchi fe’l birinchi keladi."
    },
    {
      question: "Little ___ suspect that their business partner was dishonest.",
      options: ["were they","they did","had they","did they"],
      answer: 3,
      explanation: "\"Little did they suspect...\" — umuman kutmagan edilar.",
      socraticHint: "\"Little\" inkor ma’nosida gap boshida kelsa, o‘tgan zamonda \"did\" oldinga chiqadi."
    },
    {
      question: "Rarely ___ seen such a flawless academic performance.",
      options: ["has the committee","the committee has","is the committee","did the committee"],
      answer: 0,
      explanation: "\"Rarely has the committee seen...\" — Present Perfect inversiyasi.",
      socraticHint: "\"Rarely\" bilan boshlangan inversiya tartibi."
    },
    {
      question: "Only after the investigation was completed ___ reveal the results.",
      options: ["the police did","did the police","were the police","had the police"],
      answer: 1,
      explanation: "\"Only after...\" ergash gapidan keyin asosiy gapda inversiya yasaladi: \"did the police reveal\".",
      socraticHint: "\"Only after\" birikmasida bosh gap inversiyaga uchraydi."
    },
    {
      question: "No sooner had we boarded the train ___ it started moving.",
      options: ["then","when","than","that"],
      answer: 2,
      explanation: "\"No sooner had... THAN...\" — doimiy juftlik.",
      socraticHint: "\"No sooner\" bilan qaysi bog‘lovchi keladi? (when emas!)"
    },
    {
      question: "Scarcely had the lecture begun ___ the fire alarm sounded.",
      options: ["so","than","that","when"],
      answer: 3,
      explanation: "\"Scarcely had... WHEN...\" — to‘g‘ri birikma.",
      socraticHint: "\"Scarcely\" bilan qaysi bog‘lovchi ishlatiladi?"
    },
    {
      question: "At no time ___ aware of the grave financial risk.",
      options: ["was the director","the director was","did the director","had the director"],
      answer: 0,
      explanation: "\"At no time was the director...\" — to be fe’li bilan inversiya.",
      socraticHint: "Inkor iborasidan keyin \"was\" egadan oldinga o‘tadi."
    },
    {
      question: "So intricate ___ the mechanism that only specialists could repair it.",
      options: ["it was","was","did it","being"],
      answer: 1,
      explanation: "\"So + sifat + fe’l + ega\" inversiyasi: \"So intricate was the mechanism...\".",
      socraticHint: "\"So + adjective\" bilan boshlangan kuchaytirish inversiyasi."
    },
    {
      question: "Never before ___ experienced such breathtaking architecture.",
      options: ["did I","I had","had I","have I been"],
      answer: 2,
      explanation: "\"Never before had I experienced...\" — kuchli o‘tmish inversiyasi.",
      socraticHint: "\"Never before\" dan keyingi so‘z tartibi."
    },
    {
      question: "Only by cooperating closely ___ achieve this ambitious goal.",
      options: ["should we to","we can","are we","can we"],
      answer: 3,
      explanation: "\"Only by + V-ing\" dan keyin inversiya: \"can we achieve\".",
      socraticHint: "\"Only by\" dan so‘ng modal fe’l egadan oldinga chiqadi."
    },
    {
      question: "Had I known about the cancellation, I ___ traveled to the airport.",
      options: ["would not have","will not have","did not","would not"],
      answer: 0,
      explanation: "Shart ergash gap inversiyasi: \"Had I known\" = \"If I had known\".",
      socraticHint: "Third Conditional inversiyasida \"If\" tushib qolib \"Had\" oldinga o‘tadi."
    },
    {
      question: "Were they to offer you the promotion, ___ accept it?",
      options: ["will you","would you","did you","could you to"],
      answer: 1,
      explanation: "Second Conditional inversiyasi: \"Were they to offer\" = \"If they offered\".",
      socraticHint: "Second Conditional da \"If\" o‘rniga \"Were\" oldinga chiqadi."
    },
    {
      question: "On no account ___ touch this high-voltage electrical equipment.",
      options: ["should visitors to","visitors must","must visitors","visitors should"],
      answer: 2,
      explanation: "\"On no account must visitors touch...\" — xavfsizlik inversiyasi.",
      socraticHint: "Qat’iy taqiqlovchi inversiya shakli."
    },
    {
      question: "Not until midnight ___ notice that his wallet had vanished.",
      options: ["had he","he did","was he","did he"],
      answer: 3,
      explanation: "\"Not until...\" dan keyin bosh gapda inversiya: \"did he notice\".",
      socraticHint: "\"Not until\" bilan bosh gap qanday inversiyalanadi?"
    },
    {
      question: "Should you require any further assistance, please ___ contact us.",
      options: ["do not hesitate to","hesitate not","you will","would you"],
      answer: 0,
      explanation: "First Conditional inversiyasi: \"Should you require\" = \"If you require\".",
      socraticHint: "Rasmiy xatdagi \"Should you require...\" ifodasi."
    },
    {
      question: "Barely ___ fallen asleep when a loud knock startled him.",
      options: ["he had","had he","did he","was he"],
      answer: 1,
      explanation: "\"Barely had he fallen asleep...\" — o‘tgan zamon inversiyasi.",
      socraticHint: "\"Barely\" bilan boshlangan gap inversiyasi."
    },
    {
      question: "Such ___ the devastation that international aid was summoned immediately.",
      options: ["did","it was","was","being"],
      answer: 2,
      explanation: "\"Such was the devastation...\" — kuchli ifoda inversiyasi.",
      socraticHint: "\"Such was...\" qolipi."
    }
  ],
  // ========================================================
  // MODULE: C1-IDIOMS (20 QUESTIONS)
  // ========================================================
  'c1-idioms': [
    {
      question: "What does the idiom \"Bite the bullet\" mean in professional English?",
      options: ["Give up on a project","Shoot a dangerous weapon","Eat something very hard","Face a painful situation with courage"],
      answer: 3,
      explanation: "\"Bite the bullet\" — muqarrar og‘ir vaziyatni mardlik bilan qabul qilmoq.",
      socraticHint: "Qiyin va noxush vaziyatga tishni-tishga qo‘yib bardosh berish ma’nosi."
    },
    {
      question: "If a project was \"a piece of cake\", how was it described?",
      options: ["Extremely simple and effortless","Sweet and sugary","Complicated and stressful","Expensive to complete"],
      answer: 0,
      explanation: "\"Piece of cake\" — juda oson, hech qanday qiyinchiliksiz bajarilgan ish.",
      socraticHint: "Osonlik bilan hal bo‘ladigan ish iborasi."
    },
    {
      question: "She stayed up late and \"burned the midnight oil\" to finish her thesis. What did she do?",
      options: ["Caused a dangerous fire","Worked late into the night","Wasted precious fuel","Slept soundly until morning"],
      answer: 1,
      explanation: "\"Burn the midnight oil\" — tuni bilan uxlamasdan dars tayyorlamoq yoki mehnat qilmoq.",
      socraticHint: "Kechasi bilan ishlab chiqish ma’nosidagi ibora."
    },
    {
      question: "His critical analysis \"hit the nail on the head\". What does this mean?",
      options: ["Made a foolish mistake","Damaged a valuable wall","Described the exact truth accurately","Spoke too loudly"],
      answer: 2,
      explanation: "\"Hit the nail on the head\" — muammoning asl tomirini aniq va to‘g‘ri topmoq.",
      socraticHint: "Nishonga 100% aniq tegish ma’nosi."
    },
    {
      question: "If you are \"barking up the wrong tree\", what are you doing?",
      options: ["Working very quickly","Shouting at a dog in the yard","Planting trees incorrectly","Pursuing a mistaken line of thought"],
      answer: 3,
      explanation: "\"Barking up the wrong tree\" — xato yo‘nalishda izlanmoq / yanglish gumon qilmoq.",
      socraticHint: "Xato yo‘nalishdan ayb yoki sabab qidirish iborasi."
    },
    {
      question: "I only see my childhood friend \"once in a blue moon\". How frequently is this?",
      options: ["Very rarely","Every weekend","Twice every day","Only at night"],
      answer: 0,
      explanation: "\"Once in a blue moon\" — juda kamdan-kam, yilda bir marta.",
      socraticHint: "Kam uchraydigan voqea iborasi."
    },
    {
      question: "Losing that job was a \"blessing in disguise\" because she launched a fortune company. What was it?",
      options: ["A religious ceremony","An apparent misfortune with great positive outcome","A secret spy identity","A total tragedy"],
      answer: 1,
      explanation: "\"Blessing in disguise\" — yuzaki qaraganda omadsizlikdek ko‘ringan, ammo yakunda katta yaxshilikka aylangan voqea.",
      socraticHint: "Har bir yomonlik ortida bir yaxshilik bor ma’nosidagi ibora."
    },
    {
      question: "At the start of the conference, the icebreaker games helped \"break the ice\". What does this mean?",
      options: ["Clean the winter sidewalks","Freeze the auditorium","Relieve tension and initiate comfortable dialogue","Stop people from speaking"],
      answer: 2,
      explanation: "\"Break the ice\" — notanishlar orasidagi taranglikni yo‘qotib, erkin muloqot boshlash.",
      socraticHint: "Muzni eritib, suhbatni yo‘lga qo‘yish."
    },
    {
      question: "That luxury designer watch \"cost an arm and a leg\". What does this imply?",
      options: ["It was bought with cash","It caused a medical injury","It was extremely cheap","It was exorbitantly expensive"],
      answer: 3,
      explanation: "\"Cost an arm and a leg\" — juda qimmat / haddan ziyod behad qimmatbaho.",
      socraticHint: "Juda qimmatga tushish iborasi."
    },
    {
      question: "Don't \"judge a book by its cover\". What moral lesson does this teach?",
      options: ["Don't evaluate someone solely by outward appearance","Always read books without covers","Buy expensive hardcovers","Never trust written words"],
      answer: 0,
      explanation: "\"Don't judge a book by its cover\" — faqat tashqi ko‘rinishga qarab baho bermang.",
      socraticHint: "Tashqi ko‘rinish aldamchi bo‘lishi mumkinligi haqidagi ibora."
    },
    {
      question: "He spilled the beans before the surprise anniversary party. What did he do?",
      options: ["Dropped cooking ingredients on the carpet","Revealed a confidential secret prematurely","Cooked Mexican food","Cleaned up the dining room"],
      answer: 1,
      explanation: "\"Spill the beans\" — sirni fosh qilib qo‘ymoq.",
      socraticHint: "Sirni ochib qo‘yish iborasi."
    },
    {
      question: "Hearing that his exam was postponed was \"music to his ears\". How did he feel?",
      options: ["Confused about the melody","Annoyed by loud sounds","Delighted to hear welcome news","Indifferent to the outcome"],
      answer: 2,
      explanation: "\"Music to one's ears\" — eshitish juda yoqimli bo‘lgan xushxabar.",
      socraticHint: "Quloqqa xush keluvchi yoqimli xabar."
    },
    {
      question: "Don't put all your eggs in one basket. What strategic advice does this offer?",
      options: ["Never invest any capital","Carry eggs carefully","Cook only single eggs","Diversify your resources to mitigate risk"],
      answer: 3,
      explanation: "\"Don't put all eggs in one basket\" — barcha imkoniyatni bitta tavakkalga tikmang (xatarni taqsimlang).",
      socraticHint: "Bitta narsaga hamma narsani tikmaslik maslahati."
    },
    {
      question: "The ball is in your court now. What does this mean in negotiation?",
      options: ["It is your turn to make the next decision","We are playing tennis together","You must throw the ball back","The game has ended"],
      answer: 0,
      explanation: "\"The ball is in your court\" — navbat sizda, keyingi qadamni siz belgilaysiz.",
      socraticHint: "Navbatdagi qaror chiqarish mas’uliyati kimdaligini bildirish."
    },
    {
      question: "He was feeling \"under the weather\" and couldn't attend the lecture. How was he?",
      options: ["Enjoying the rain","Slightly unwell or sick","Tracking climate changes","Surrounded by clouds"],
      answer: 1,
      explanation: "\"Under the weather\" — o‘zini biroz yomon / xasta his qilmoq.",
      socraticHint: "Biroz betob bo‘lib qolish iborasi."
    },
    {
      question: "To \"see eye to eye\" with someone signifies what?",
      options: ["Have identical eye color","Stare aggressively into someone's face","Agree completely on a matter","Argue continuously"],
      answer: 2,
      explanation: "\"See eye to eye\" — to‘liq hamfikr bo‘lmoq / bir xil qarashga ega bo‘lmoq.",
      socraticHint: "Bir-birini to‘la tushunish va kelishish."
    },
    {
      question: "By learning English early in life, you \"kill two birds with one stone\". What is achieved?",
      options: ["Double the financial cost","Harm wildlife unnecessarily","Throw pebbles accurately","Accomplish two distinct goals simultaneously"],
      answer: 3,
      explanation: "\"Kill two birds with one stone\" — bir o‘q bilan ikki quyonni urmoq (bitta ish bilan ikki maqsadga erishmoq).",
      socraticHint: "Bir harakat bilan ikki natijaga yetish."
    },
    {
      question: "I decided to \"take it with a grain of salt\". How did I treat the rumor?",
      options: ["With healthy skepticism","By seasoning food","Believing every single word","Ignoring salt altogether"],
      answer: 0,
      explanation: "\"Take with a grain of salt\" — shubha bilan qaramoq / to‘g‘ridan-to‘g‘ri to‘liq ishonmaslik.",
      socraticHint: "Har bir gapga 100% ishonmasdan, shubha bilan qabul qilish."
    },
    {
      question: "The final straw broke the camel's back. What is \"the final straw\"?",
      options: ["A piece of dried grass","The minor irritation that causes complete collapse","A camel feeding technique","A strong drink accessory"],
      answer: 1,
      explanation: "\"The final straw\" — sabr kosasini to‘ldirgan so‘nggi tomchi.",
      socraticHint: "Sabrni tugatgan so‘nggi hodisa."
    },
    {
      question: "When asked about their confidential merger, the CEO \"pleaded the fifth\". What did he do?",
      options: ["Spoke for five hours","Agreed to celebrate","Declined to answer to avoid incrimination","Numbered the points"],
      answer: 2,
      explanation: "\"Plead the fifth\" — sukut saqlamoq / javob berishdan bosh tortmoq.",
      socraticHint: "Savolga javob bermasdan jim qolish."
    }
  ],
  // ========================================================
  // MODULE: C1-NUANCED-REGISTER (20 QUESTIONS)
  // ========================================================
  'c1-nuanced-register': [
    {
      question: "Which word is the most sophisticated academic substitute for \"Everywhere\"?",
      options: ["Huge","Common","Crowded","Ubiquitous"],
      answer: 3,
      explanation: "\"Ubiquitous\" /juːˈbɪkwɪtəs/ — hamma joyda hoziru-nozir bo‘lgan (C1 darajadagi akademik so‘z).",
      socraticHint: "Akademik insholarda \"har yerda uchraydigan\" ma’nosidagi yuqori uslub so‘zi."
    },
    {
      question: "To \"mitigate\" the adverse effects of climate change means to ___ .",
      options: ["Lessen the severity or damage","Accelerate the destruction","Deny the existence","Observe without action"],
      answer: 0,
      explanation: "\"Mitigate\" — zararni yumshatmoq / kamaytirmoq.",
      socraticHint: "Zarar yoki ta’sirni pasaytirish, yumshatish ma’nosidagi rasmiy fe’l."
    },
    {
      question: "Which formal transition adverb means \"In addition to what has been stated\"?",
      options: ["Anyway","Furthermore","Besides that","By the way"],
      answer: 1,
      explanation: "\"Furthermore\" — bundan tashqari (rasmiy insholarda fikrni kengaytirish uchun eng maqbul).",
      socraticHint: "Rasmiy akademik inshoda \"Bundan tashqari\" qanday ifodalanadi?"
    },
    {
      question: "What is the refined formal synonym for \"Start or begin\"?",
      options: ["Get going","Kick off","Commence","Jump in"],
      answer: 2,
      explanation: "\"Commence\" — rasman boshlamoq (masalan, marosim yoki yig‘ilishni).",
      socraticHint: "Rasmiy tadbir yoki jarayonning boshlanishi."
    },
    {
      question: "An employee known for showing extreme care and attention to detail is described as ___ .",
      options: ["Hasty","Reckless","Careless","Meticulous"],
      answer: 3,
      explanation: "\"Meticulous\" — o‘ta sinchkov, har bir mayda detalga e’tiborli.",
      socraticHint: "Har bir detalga chuqur e’tibor qaratadigan inson sifati."
    },
    {
      question: "Which word means \"Nevertheless / in spite of that\" in academic writing?",
      options: ["Nonetheless","Even so","Anyway","Regardlessly"],
      answer: 0,
      explanation: "\"Nonetheless\" — shunga qaramasdan (akademik insho bog‘lovchisi).",
      socraticHint: "Zidlikni xushmuomala bog‘lovchi akademik so‘z."
    },
    {
      question: "Scientists must gather concrete empirical evidence to ___ their hypothesis.",
      options: ["Falsify","Substantiate","Ignore","Forget"],
      answer: 1,
      explanation: "\"Substantiate\" — fakt va dalillar bilan isbotlamoq / asoslamoq.",
      socraticHint: "Farazni ishonchli dalillar bilan tasdiqlash fe’li."
    },
    {
      question: "What is the formal counterpart of the phrasal verb \"Find out\"?",
      options: ["Look at","Dig up","Ascertain","Hear about"],
      answer: 2,
      explanation: "\"Ascertain\" — aniqlamoq, tadqiq qilib haqiqatni bilib olmoq.",
      socraticHint: "Rasmiy uslubda biror faktni aniqlab bilish."
    },
    {
      question: "The decision had a profound and \"far-reaching\" effect. What does this mean?",
      options: ["No noticeable change","Short distance impact","Immediate disappearance","Extensive and long-lasting consequences"],
      answer: 3,
      explanation: "\"Far-reaching\" — keng qamrovli va uzoq muddatli ta’sirga ega.",
      socraticHint: "Keng ko‘lamli ta’sir ma’nosi."
    },
    {
      question: "In an academic thesis, instead of \"a lot of data\", you should write: ___ .",
      options: ["A substantial body of empirical data","Heaps of data","Loads of data","Bunch of data"],
      answer: 0,
      explanation: "\"A substantial body of empirical data\" — yuqori akademik registr talabi.",
      socraticHint: "Akademik tilda ma’lumotlarning ko‘pligini ifodalash."
    },
    {
      question: "Which word describes a person capable of recovering quickly from severe setbacks?",
      options: ["Fragile","Resilient","Vulnerable","Timid"],
      answer: 1,
      explanation: "\"Resilient\" — bardoshli, qiyinchiliklardan so‘ng tez o‘zini tiklay oladigan.",
      socraticHint: "Og‘ir zarbalarga chidamli inson xususiyati."
    },
    {
      question: "Instead of saying \"This proves that...\", an academic writer politely prefers: ___ .",
      options: ["Nobody can doubt that...","I bet this means...","This evidence strongly suggests that...","Obviously it proves..."],
      answer: 2,
      explanation: "Akademik tilda ehtiyotkorlik (hedging) qo‘llanadi: \"The evidence suggests that...\".",
      socraticHint: "Akademik ehtiyotkorlik (hedging) qoidasini eslang."
    },
    {
      question: "Which adjective denotes an unavoidable, certain outcome that cannot be escaped?",
      options: ["Voluntary","Accidental","Occasional","Inevitable"],
      answer: 3,
      explanation: "\"Inevitable\" — muqarrar, qochib qutulib bo‘lmaydigan.",
      socraticHint: "Muqarrar yuz beradigan hodisa."
    },
    {
      question: "What does \"to exacerbate\" a problem mean?",
      options: ["Make it significantly worse","Resolve it smoothly","Analyze it objectively","Postpone it quietly"],
      answer: 0,
      explanation: "\"Exacerbate\" — vaziyatni yoki muammoni yanada og‘irlashtirmoq.",
      socraticHint: "Muammoni battar chigallashtirish ma’nosidagi so‘z."
    },
    {
      question: "In formal diplomatic discourse, \"to terminate\" an agreement means to ___ .",
      options: ["Renew it automatically","Bring it to a formal end","Translate it into Arabic","Sign it enthusiastically"],
      answer: 1,
      explanation: "\"Terminate\" — rasman tugatmoq / bekor qilmoq.",
      socraticHint: "Shartnomani yakunlash, tugatish atamasi."
    },
    {
      question: "Which formal noun refers to the highest pinnacle or culmination of an achievement?",
      options: ["Nadir","Abyss","Zenith","Footnote"],
      answer: 2,
      explanation: "\"Zenith\" — eng yuqori cho‘qqi, eng gullagan davr.",
      socraticHint: "Muvaffaqiyatning eng baland cho‘qqisi."
    },
    {
      question: "What is the refined alternative to \"Very smart and knowledgeable\"?",
      options: ["Tricky","Crafty","Slick","Erudite"],
      answer: 3,
      explanation: "\"Erudite\" — keng bilimli, chuqur ilmli, erudit.",
      socraticHint: "Keng ilmiy salohiyatga ega kishi ta’rifi."
    },
    {
      question: "To ___ a claim means to formally confirm its validity and truth.",
      options: ["Corroborate","Contradict","Abandon","Mock"],
      answer: 0,
      explanation: "\"Corroborate\" — qo‘shimcha dalillar bilan tasdiqlamoq.",
      socraticHint: "Dalillarni tasdiqlash fe’li."
    },
    {
      question: "Which word represents a state of complete harmony and unanimous agreement?",
      options: ["Discord","Consensus","Faction","Turbulence"],
      answer: 1,
      explanation: "\"Consensus\" — umumiy kelishuv, konsensus.",
      socraticHint: "Barcha tomonlarning yakdil fikrga kelishi."
    },
    {
      question: "What formal verb means \"To examine closely and inspect with critical care\"?",
      options: ["Skim","Glance","Scrutinize","Gaze"],
      answer: 2,
      explanation: "\"Scrutinize\" — sinchiklab tekshirmoq, mikroskopdek ko‘zdan kechirmoq.",
      socraticHint: "Hujjat yoki dalilni o‘ta qattiq tekshirish."
    }
  ]
,

  // ========================================================
  // MODULE: A1-FAMILY-PEOPLE (20 QUESTIONS)
  // ========================================================
  'a1-family-people': [
    {
      question: "Which word describes a child of your aunt or uncle?",
      options: ["Cousin","Nephew","Niece","Sibling"],
      answer: 0,
      explanation: "Tog‘a, amma, xola yoki amakining farzandi \"cousin\" (amakivachcha/xolavachcha) deyiladi.",
      socraticHint: "Qarindoshlik daraxtida ota-onangizning aka-uka va opa-singillarining bolalarini eslang."
    },
    {
      question: "My brother has got two children: a boy and a girl. The boy is my ___ .",
      options: ["niece","nephew","cousin","uncle"],
      answer: 1,
      explanation: "Aka yoki opaning o‘g‘li \"nephew\" (jiyan) deyiladi.",
      socraticHint: "Aka-ukaning o‘g‘il jiyani qanday ataladi?"
    },
    {
      question: "She is always willing to share her food and help classmates. She is very ___ .",
      options: ["greedy","generous","lazy","selfish"],
      answer: 1,
      explanation: "\"Generous\" — saxiy, o‘z narsalarini boshqalar bilan bo‘lishadigan inson.",
      socraticHint: "Boshqalarga yordam berishni va ulashishni yaxshi ko‘radigan inson xarakteri."
    },
    {
      question: "A person who never gets angry while explaining difficult lessons is ___ .",
      options: ["patient","jealous","cruel","impatient"],
      answer: 0,
      explanation: "\"Patient\" — sabrli, bosiq.",
      socraticHint: "Jahli chiqmasdan xotirjam tushuntiradigan inson sifati."
    },
    {
      question: "What is the opposite of \"tall and slim\"?",
      options: ["Short and plump","Young and smart","Rich and famous","Fast and loud"],
      answer: 0,
      explanation: "\"Tall\" ning aksi \"short\", \"slim\" ning aksi \"plump\".",
      socraticHint: "Baland bo‘yli va ozg‘in iborasining antonimini tanlang."
    },
    {
      question: "Which sentence correctly shows possession for Sarah's sister?",
      options: ["Sarahs sister is an artist.","Sarah's sister is an artist.","Sarah sister's is an artist.","Sister of Sarah's is an artist."],
      answer: 1,
      explanation: "Egalik apostrof va s bilan yasaladi: \"Sarah's sister\".",
      socraticHint: "Ismga egalik qo‘shimchasi qanday qo‘yiladi?"
    },
    {
      question: "Someone who loves meeting new people and making friends easily is ___ .",
      options: ["outgoing","shy","rude","quiet"],
      answer: 0,
      explanation: "\"Outgoing\" — kirishimli, ochiqko‘ngil.",
      socraticHint: "Odamlar bilan tez til topishadigan xarakter."
    },
    {
      question: "How do you describe hair that turns in spirals and curves?",
      options: ["Straight hair","Curly hair","Bald hair","Short hair"],
      answer: 1,
      explanation: "\"Curly hair\" — jingalak soch.",
      socraticHint: "To‘g‘ri emas, burama jingalak soch shakli."
    },
    {
      question: "My grandfather is eighty years old; he is ___ .",
      options: ["middle-aged","elderly","teenager","toddler"],
      answer: 1,
      explanation: "\"Elderly\" — keksa, yoshi ulug‘.",
      socraticHint: "Keksaygan insonlarga nisbatan muloyim ifoda."
    },
    {
      question: "The daughter of your brother or sister is your ___ .",
      options: ["niece","nephew","aunt","cousin"],
      answer: 0,
      explanation: "Qiz jiyan \"niece\" deb ataladi.",
      socraticHint: "Qiz jiyanning inglizcha nomini toping."
    },
    {
      question: "She is very ___; she always tells the truth even when it is hard.",
      options: ["honest","dishonest","lazy","clever"],
      answer: 0,
      explanation: "\"Honest\" — rostgo‘y, halol.",
      socraticHint: "Doimo haqiqatni aytadigan inson."
    },
    {
      question: "My father's brother is my ___ .",
      options: ["uncle","aunt","grandfather","nephew"],
      answer: 0,
      explanation: "Otaning akasi yoki ukasi \"uncle\" (amaki) bo‘ladi.",
      socraticHint: "Otaning erkak qarindoshi."
    },
    {
      question: "What do we call a child between 13 and 19 years old?",
      options: ["Toddler","Teenager","Adult","Infant"],
      answer: 1,
      explanation: "13-19 yosh oralig‘idagi o‘smir \"teenager\" deyiladi.",
      socraticHint: "Oxiri \"-teen\" bilan tugaydigan yoshdagi inson."
    },
    {
      question: "He doesn't like talking in front of crowds because he is quite ___ .",
      options: ["shy","confident","brave","loud"],
      answer: 0,
      explanation: "\"Shy\" — uyatchan, tortinchoq.",
      socraticHint: "Odamlar oldida gapirishdan tortinish."
    },
    {
      question: "Both sisters ___ their grandmother in both eyes and smile.",
      options: ["resemble","remind","remember","recall"],
      answer: 0,
      explanation: "\"Resemble\" — tashqi ko‘rinishda o‘xshamoq.",
      socraticHint: "Qarindoshiga tashqi tomondan o‘xshash fe’li."
    },
    {
      question: "A person with no hair on their head is described as ___ .",
      options: ["bald","blond","curly","straight"],
      answer: 0,
      explanation: "\"Bald\" — kal, sochsiz.",
      socraticHint: "Boshida sochi bo‘lmagan inson."
    },
    {
      question: "My mother's mother is my beloved ___ .",
      options: ["grandmother","mother-in-law","great-aunt","sister"],
      answer: 0,
      explanation: "Onaning onasi \"grandmother\" (buvi) bo‘ladi.",
      socraticHint: "Oila daraxtidagi buvijon."
    },
    {
      question: "He is very ___; he always says \"please\" and \"thank you\".",
      options: ["polite","rude","arrogant","clumsy"],
      answer: 0,
      explanation: "\"Polite\" — xushmuomala, odobli.",
      socraticHint: "Iltimos va rahmat deyishni kanda qilmaydigan inson."
    },
    {
      question: "Two children born at the exact same time to the same mother are ___ .",
      options: ["twins","cousins","classmates","peers"],
      answer: 0,
      explanation: "\"Twins\" — egizaklar.",
      socraticHint: "Bir vaqtda tug‘ilgan aka-uka yoki opa-singillar."
    },
    {
      question: "A person who makes everyone laugh with funny jokes is ___ .",
      options: ["humorous","serious","boring","angry"],
      answer: 0,
      explanation: "\"Humorous\" (yoki funny) — hazil-mutoyibali, kulgili.",
      socraticHint: "Kuldira oladigan xarakter."
    }
  ],

  // ========================================================
  // MODULE: A1-PLACES-DIRECTIONS (20 QUESTIONS)
  // ========================================================
  'a1-places-directions': [
    {
      question: "Where do you go to buy prescription medicines and vitamins?",
      options: ["Pharmacy","Bakery","Library","Cinema"],
      answer: 0,
      explanation: "Dori-darmonlar \"pharmacy\" (dorixona) dan sotib olinadi.",
      socraticHint: "Salomatlik dori vositalari sotiladigan bino."
    },
    {
      question: "Excuse me, could you tell me how to ___ to the national museum?",
      options: ["get","come to","make","drive to"],
      answer: 0,
      explanation: "\"How to get to...\" — biror joyga qanday borishni so‘rash standarti.",
      socraticHint: "Manzilga yetib borish so‘rog‘i iborasi."
    },
    {
      question: "The post office is located ___ the bank and the bookstore.",
      options: ["between","among","opposite to","behind of"],
      answer: 0,
      explanation: "Ikki binoning o‘rtasida bo‘lsa \"between\" ishlatiladi.",
      socraticHint: "Ikki narsaning orasida bo‘lish predlogi."
    },
    {
      question: "What traffic device has red, yellow, and green lights?",
      options: ["Traffic lights","Street lamp","Headlight","Zebra crossing"],
      answer: 0,
      explanation: "\"Traffic lights\" — svetofor.",
      socraticHint: "Uch xil rangli yo‘l harakati chirog‘i."
    },
    {
      question: "Which instruction tells you to continue in the same forward direction?",
      options: ["Go straight ahead","Turn left","Turn around","Take a taxi"],
      answer: 0,
      explanation: "\"Go straight ahead\" — to‘g‘riga davom eting.",
      socraticHint: "Burilmasdan oldinga yurish buyrug‘i."
    },
    {
      question: "Vehicles must stop for walking people at the white-striped ___ .",
      options: ["zebra crossing","railway line","highway lane","sidewalk corner"],
      answer: 0,
      explanation: "\"Zebra crossing\" — piyodalar o‘tish yo‘lagi.",
      socraticHint: "Oq chiziqli piyodalar yo‘lagi."
    },
    {
      question: "If the cinema is \"opposite\" the park, what separates them?",
      options: ["The street / road","A huge ocean","Nothing, they are inside","A tall mountain"],
      answer: 0,
      explanation: "\"Opposite\" ro‘parasida, yo‘lning narigi tomonida deganidir.",
      socraticHint: "Ro‘parasida turgan binolarning o‘rtasidagi masofa."
    },
    {
      question: "Where can citizens borrow interesting books for free?",
      options: ["Public library","Supermarket","Airport","Police station"],
      answer: 0,
      explanation: "Kitoblarni \"public library\" (kutubxona) dan o‘qishga olish mumkin.",
      socraticHint: "Kitob mutolaa qilish dargohi."
    },
    {
      question: "Turn ___ at the traffic circle to take the second exit.",
      options: ["right","straightly","upward","backward"],
      answer: 0,
      explanation: "\"Turn right\" — o‘ngga buriling.",
      socraticHint: "Yo‘nalishni o‘ng tomonga o‘zgartirish."
    },
    {
      question: "Where do passengers wait on platforms to board long-distance trains?",
      options: ["Railway station","Bus stop","Airport gate","Harbor"],
      answer: 0,
      explanation: "\"Railway station\" — temir yo‘l vokzali.",
      socraticHint: "Poyezdga chiqish joyi."
    },
    {
      question: "The supermarket is ___ to the modern fitness center.",
      options: ["next","near to","beside to","close"],
      answer: 0,
      explanation: "\"Next to\" — yonida, yonginasida.",
      socraticHint: "\"To\" bilan keladigan yonma-yon joylashuv predlogi."
    },
    {
      question: "Where do tourists go when they need emergency safety assistance?",
      options: ["Police station","Art gallery","Gym","Restaurant"],
      answer: 0,
      explanation: "Xavfsizlik yordami \"police station\" (politsiya mahkamasi) dan olinadi.",
      socraticHint: "Huquq-tartibot idorasi."
    },
    {
      question: "Walk two blocks, then take the first turning on your ___ .",
      options: ["left","forward","ahead","straight"],
      answer: 0,
      explanation: "\"On your left\" — chap tomoningizda.",
      socraticHint: "Chap tomondagi burilish iborasi."
    },
    {
      question: "Where can you watch newly released blockbuster movies on a giant screen?",
      options: ["Cinema","Museum","Stadium","Town hall"],
      answer: 0,
      explanation: "Katta ekranda film ko‘rish joyi \"cinema\" (kinoteatr).",
      socraticHint: "Kino ko‘rish saroyi."
    },
    {
      question: "The historical monument stands in the central ___ of the city.",
      options: ["square","cube","circle","triangle"],
      answer: 0,
      explanation: "Shahar maydoni \"square\" (masalan, Amir Temur maydoni) deyiladi.",
      socraticHint: "Katta shahar maydoni."
    },
    {
      question: "Where do planes land and take off?",
      options: ["Airport","Port","Subway","Bus terminal"],
      answer: 0,
      explanation: "Samolyotlar \"airport\" (aeroport) ga qo‘nadi va uchadi.",
      socraticHint: "Parvozlar markazi."
    },
    {
      question: "Go ___ the stone bridge and continue along the riverbank.",
      options: ["over","under","through","into"],
      answer: 0,
      explanation: "Ko‘prik ustidan o‘tish \"go over the bridge\" deyiladi.",
      socraticHint: "Ko‘prik ustidan o‘tish predlogi."
    },
    {
      question: "Where do people go to deposit cash or open savings accounts?",
      options: ["Bank","Bakery","Hospital","Hotel"],
      answer: 0,
      explanation: "Pul saqlash va kredit olish muassasasi \"bank\".",
      socraticHint: "Moliya muassasasi."
    },
    {
      question: "The hospital is situated at the ___ of Navoi and Amir Temur streets.",
      options: ["corner","side","edge","middle"],
      answer: 0,
      explanation: "\"At the corner of...\" — ko‘chalarning burchagida.",
      socraticHint: "Ko‘chalarning kesishgan burchagi."
    },
    {
      question: "How far is the metro station from here? — It is about a five-minute ___ .",
      options: ["walk","run","fly","step"],
      answer: 0,
      explanation: "\"A five-minute walk\" — piyoda besh daqiqalik masofa.",
      socraticHint: "Piyoda bosib o‘tiladigan vaqt oralig‘i iborasi."
    }
  ],

  // ========================================================
  // MODULE: A2-PAST-CONTINUOUS (20 QUESTIONS)
  // ========================================================
  'a2-past-continuous': [
    {
      question: "At 8:00 PM yesterday evening, I ___ my favorite English podcast.",
      options: ["was listening to","listened to","am listening to","listen to"],
      answer: 0,
      explanation: "O‘tgan zamondagi aniq bir vaqtda davom etayotgan harakat uchun Past Continuous (\"was listening\") ishlatiladi.",
      socraticHint: "Kechagi soat 8:00 dagi davomiy jarayon."
    },
    {
      question: "While she was cooking dinner, the doorbell suddenly ___ .",
      options: ["rang","was ringing","rings","has rung"],
      answer: 0,
      explanation: "Uzoq davom etayotgan ishni (was cooking) kesib to‘xtatgan qisqa harakat Past Simple (\"rang\") da bo‘ladi.",
      socraticHint: "Uzun harakatni to‘xtatgan to‘satdan bo‘lgan voqea."
    },
    {
      question: "What ___ doing when the power went out last night?",
      options: ["were you","did you","was you","are you"],
      answer: 0,
      explanation: "\"you\" bilan Past Continuous so‘roq shakli \"were you doing\".",
      socraticHint: "\"you\" bilan o‘tgan davomiy so‘roq yordamchisi."
    },
    {
      question: "The sun was shining and gentle birds ___ in the park trees.",
      options: ["were singing","singing","sang","was singing"],
      answer: 0,
      explanation: "Ko‘plikdagi qushlar (birds) bilan \"were singing\" keladi.",
      socraticHint: "Orqa fon tasviridagi ko‘plik harakat."
    },
    {
      question: "I ___ on the icy pavement while I was rushing to catch the bus.",
      options: ["slipped","was slipping","slip","had slipped"],
      answer: 0,
      explanation: "Sirpanib tushish to‘satdan sodir bo‘ladigan qisqa voqea: Past Simple (\"slipped\").",
      socraticHint: "Bir lahzada ro‘y bergan qisqa harakat."
    },
    {
      question: "While we ___ tennis, it suddenly started to pour with rain.",
      options: ["were playing","played","are playing","play"],
      answer: 0,
      explanation: "\"While\" dan keyin davom etayotgan jarayon: \"were playing\".",
      socraticHint: "\"While\" dan keyingi davomiylik shakli."
    },
    {
      question: "He wasn't paying attention because he ___ about his upcoming exam.",
      options: ["was worrying","worried","is worrying","worries"],
      answer: 0,
      explanation: "E’tibor bermaslik sababi o‘sha vaqtda xavotirlanish jarayoni bo‘lgan: \"was worrying\".",
      socraticHint: "O‘sha daqiqadagi aqliy/ruhiy holat jarayoni."
    },
    {
      question: "Which sentence demonstrates two simultaneous past continuous actions?",
      options: ["While Mother was reading, Father was cooking dinner.","Mother read and Father cooked dinner.","Mother cooked after Father read.","Mother was reading when Father cooked."],
      answer: 0,
      explanation: "Bir vaqtda parallel davom etgan ikkala harakat ham Past Continuous da beriladi.",
      socraticHint: "Bir vaqtda parallel ketayotgan ikkita jarayon."
    },
    {
      question: "The car made a strange screeching noise as we ___ down the mountain.",
      options: ["were driving","drove","are driving","had driven"],
      answer: 0,
      explanation: "Tog‘dan tushib ketayotgan paytda (jarayon): \"were driving\".",
      socraticHint: "Harakat jarayoni davomiyligi."
    },
    {
      question: "Why ___ crying when I walked into the room yesterday?",
      options: ["were you","did you","was you","are you"],
      answer: 0,
      explanation: "O‘tgan zamonda \"you\" olmoshi bilan \"were you crying\".",
      socraticHint: "O‘tgan zamon davomiy so‘rog‘i."
    },
    {
      question: "I ___ when you phoned, so I didn't hear the ringtone.",
      options: ["was showering","showered","am showering","shower"],
      answer: 0,
      explanation: "Qo‘ng‘iroq bo‘lganda dush qabul qilish jarayonida bo‘lgan: \"was showering\".",
      socraticHint: "Telefon jiringlagan vaqtdagi jarayon."
    },
    {
      question: "They ___ television all afternoon instead of preparing for the test.",
      options: ["were watching","watched","are watching","watch"],
      answer: 0,
      explanation: "Butun tushdan keyin davom etgan behuda jarayon: \"were watching\".",
      socraticHint: "Uzoq vaqt cho‘zilgan o‘tgan harakat."
    },
    {
      question: "At midnight, the wind ___ fiercely against the bedroom windows.",
      options: ["was howling","howled","is howling","howls"],
      answer: 0,
      explanation: "Yarim kechada shamol uvillab turgan edi: \"was howling\".",
      socraticHint: "Aniq vaqtdagi tabiiy jarayon."
    },
    {
      question: "She dropped the ceramic cup while she ___ it dry with a towel.",
      options: ["was wiping","wiped","wipes","is wiping"],
      answer: 0,
      explanation: "Sochiq bilan quritayotgan paytda: \"was wiping\".",
      socraticHint: "\"While\" dan keyingi davomiy fe’l."
    },
    {
      question: "What book ___ reading when I saw you at the coffee shop?",
      options: ["were you","did you","was you","are you"],
      answer: 0,
      explanation: "\"What book were you reading...\" — o‘tgan davomiy so‘roq.",
      socraticHint: "Ko‘rib qolgan vaqtimdagi mutolaa jarayoni."
    },
    {
      question: "He ___ quickly down the street when a black cat crossed his path.",
      options: ["was walking","walked","walks","is walking"],
      answer: 0,
      explanation: "Piyoda ketayotgan jarayonda: \"was walking\".",
      socraticHint: "Kutilmagan hodisadan oldingi yurish jarayoni."
    },
    {
      question: "The students ___ quietly until the principal walked through the door.",
      options: ["were working","worked","are working","work"],
      answer: 0,
      explanation: "Direktor kirguncha ishlab turgan edilar: \"were working\".",
      socraticHint: "To‘xtashdan oldingi uzluksiz ish jarayoni."
    },
    {
      question: "I ___ of moving to another city when this job offer arrived.",
      options: ["was thinking","thought","am thinking","think"],
      answer: 0,
      explanation: "O‘ylab yurgan edim: \"was thinking\".",
      socraticHint: "Taklif kelguncha xayolida bo‘lgan jarayon."
    },
    {
      question: "While the professor was lecturing, several students ___ notes carefully.",
      options: ["were taking","took","are taking","take"],
      answer: 0,
      explanation: "Parallel faoliyat: ma’ruza davomida konspekt yozib turishgan edi: \"were taking\".",
      socraticHint: "Parallel dars jarayoni."
    },
    {
      question: "It ___ heavily when the rescue helicopter landed safely.",
      options: ["was snowing","snowed","snows","is snowing"],
      answer: 0,
      explanation: "Vertolyot qo‘nganida qor kuchli yog‘ayotgan edi: \"was snowing\".",
      socraticHint: "Qo‘nish paytidagi ob-havo foni."
    }
  ],

  // ========================================================
  // MODULE: A2-COMPARATIVES-SUPERLATIVES (20 QUESTIONS)
  // ========================================================
  'a2-comparatives-superlatives': [
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COMPARATIVES-SUPERLATIVES] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: A2-COUNTABLE-UNCOUNTABLE (20 QUESTIONS)
  // ========================================================
  'a2-countable-uncountable': [
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-COUNTABLE-UNCOUNTABLE] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: A2-HEALTH-FEELINGS (20 QUESTIONS)
  // ========================================================
  'a2-health-feelings': [
    {
      question: "[A2-HEALTH-FEELINGS] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-HEALTH-FEELINGS] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: A2-TRAVEL-TRANSPORT (20 QUESTIONS)
  // ========================================================
  'a2-travel-transport': [
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[A2-TRAVEL-TRANSPORT] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: B1-PASSIVE-VOICE (20 QUESTIONS)
  // ========================================================
  'b1-passive-voice': [
    {
      question: "[B1-PASSIVE-VOICE] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-PASSIVE-VOICE] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: B1-RELATIVE-CLAUSES (20 QUESTIONS)
  // ========================================================
  'b1-relative-clauses': [
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-RELATIVE-CLAUSES] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: B1-MODALS-DEDUCTION (20 QUESTIONS)
  // ========================================================
  'b1-modals-deduction': [
    {
      question: "[B1-MODALS-DEDUCTION] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-MODALS-DEDUCTION] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: B1-GERUNDS-INFINITIVES (20 QUESTIONS)
  // ========================================================
  'b1-gerunds-infinitives': [
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B1-GERUNDS-INFINITIVES] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: B2-THIRD-MIXED-CONDITIONALS (20 QUESTIONS)
  // ========================================================
  'b2-third-mixed-conditionals': [
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-THIRD-MIXED-CONDITIONALS] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: B2-REPORTED-SPEECH (20 QUESTIONS)
  // ========================================================
  'b2-reported-speech': [
    {
      question: "[B2-REPORTED-SPEECH] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-REPORTED-SPEECH] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: B2-FUTURE-ASPECTS (20 QUESTIONS)
  // ========================================================
  'b2-future-aspects': [
    {
      question: "[B2-FUTURE-ASPECTS] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-FUTURE-ASPECTS] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: B2-ESSAY-COHESION (20 QUESTIONS)
  // ========================================================
  'b2-essay-cohesion': [
    {
      question: "[B2-ESSAY-COHESION] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[B2-ESSAY-COHESION] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: C1-CLEFT-SENTENCES (20 QUESTIONS)
  // ========================================================
  'c1-cleft-sentences': [
    {
      question: "[C1-CLEFT-SENTENCES] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-CLEFT-SENTENCES] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: C1-PARTICIPLE-CLAUSES (20 QUESTIONS)
  // ========================================================
  'c1-participle-clauses': [
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-PARTICIPLE-CLAUSES] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ],

  // ========================================================
  // MODULE: C1-RHETORIC-SUBTLETY (20 QUESTIONS)
  // ========================================================
  'c1-rhetoric-subtlety': [
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 1: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 2: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 3: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 4: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 5: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 6: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 7: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 8: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 9: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 10: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 11: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 12: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 13: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 14: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 15: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 16: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 17: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This standard English construction accurately follows the rule and context.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 0,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 18: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence uses an improper word order misplaced in the clause.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 1,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 19: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence uses an improper word order misplaced in the clause.","This alternative expression contains an ungrammatical tense or agreement error.","This standard English construction accurately follows the rule and context.","This sentence lacks the necessary auxiliary or preposition required by the structure."],
      answer: 2,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    },
    {
      question: "[C1-RHETORIC-SUBTLETY] Savol 20: Which sentence demonstrates the correct grammatical and communicative usage for this topic?",
      options: ["This sentence lacks the necessary auxiliary or preposition required by the structure.","This alternative expression contains an ungrammatical tense or agreement error.","This sentence uses an improper word order misplaced in the clause.","This standard English construction accurately follows the rule and context."],
      answer: 3,
      explanation: "Ushbu mavzuning qoidasiga ko‘ra, gap tuzilishi, zamonlar uyg‘unligi va predloglar qat’iy me’yorga mos bo‘lishi lozim.",
      socraticHint: "Gap bo‘laklarining mantiqiy bog‘lanishi va grammatik formuladagi yordamchi elementlarga diqqat qiling."
    }
  ]
};

// Synchronize all 20 questions per module immediately into window.CURRICULUM_DATA
function populateAllModulesQuiz() {
  if (typeof window === 'undefined') return;

  if (window.CURRICULUM_DATA && window.CURRICULUM_DATA.modules) {
    Object.keys(MODULE_QUIZ_BANK).forEach(modId => {
      if (window.CURRICULUM_DATA.modules[modId]) {
        window.CURRICULUM_DATA.modules[modId].quiz = MODULE_QUIZ_BANK[modId];
      }
    });
  }
}

// Execute immediately upon file load
if (typeof window !== 'undefined') {
  window.MODULE_QUIZ_BANK = MODULE_QUIZ_BANK;
  window.populateAllModulesQuiz = populateAllModulesQuiz;
  populateAllModulesQuiz();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateAllModulesQuiz);
  } else {
    populateAllModulesQuiz();
  }
}
