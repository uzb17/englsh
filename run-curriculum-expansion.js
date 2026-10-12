// run-curriculum-expansion.js
const fs = require('fs');

// 1. Read existing data.js
let dataContent = fs.readFileSync('js/data.js', 'utf8');

// The 6 full CEFR Levels definition
const newLevelsDefinition = `  levels: [
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
  ],`;

// Replace the old levels in data.js
const levelsStartIdx = dataContent.indexOf('  levels: [');
const levelsEndIdx = dataContent.indexOf('  modules: {');
if (levelsStartIdx === -1 || levelsEndIdx === -1) {
  console.error('Could not locate levels range in data.js');
  process.exit(1);
}

dataContent = dataContent.substring(0, levelsStartIdx) + newLevelsDefinition + '\n\n' + dataContent.substring(levelsEndIdx);

// Update levelIds of existing modules:
dataContent = dataContent.replace(/id: 'a1-present-simple-continuous',\s+levelId: 'a1-a2'/g, "id: 'a1-present-simple-continuous',\n      levelId: 'a1'");
dataContent = dataContent.replace(/id: 'a1-daily-routines',\s+levelId: 'a1-a2'/g, "id: 'a1-daily-routines',\n      levelId: 'a1'");
dataContent = dataContent.replace(/id: 'a1-past-simple',\s+levelId: 'a1-a2'/g, "id: 'a1-past-simple',\n      levelId: 'a1'");
dataContent = dataContent.replace(/id: 'a1-expressing-needs',\s+levelId: 'a1-a2'/g, "id: 'a1-expressing-needs',\n      levelId: 'a1'");
dataContent = dataContent.replace(/id: 'a2-future-modals',\s+levelId: 'a1-a2'/g, "id: 'a2-future-modals',\n      levelId: 'a2'");
dataContent = dataContent.replace(/id: 'b1-present-past-perfect',\s+levelId: 'b1-b2'/g, "id: 'b1-present-past-perfect',\n      levelId: 'b1'");
dataContent = dataContent.replace(/id: 'b1-conditionals',\s+levelId: 'b1-b2'/g, "id: 'b1-conditionals',\n      levelId: 'b1'");
dataContent = dataContent.replace(/id: 'b2-phrasal-verbs',\s+levelId: 'b1-b2'/g, "id: 'b2-phrasal-verbs',\n      levelId: 'b2'");
dataContent = dataContent.replace(/id: 'b2-business-travel',\s+levelId: 'b1-b2'/g, "id: 'b2-business-travel',\n      levelId: 'b2'");

// Load the new modules from expand-curriculum.js
const newModules = require('./expand-curriculum.js');
console.log('Read new modules:', Object.keys(newModules).length);

// Format new modules as JavaScript code to insert into data.js before speakingWheelPrompts
let newModulesCode = ',\n\n';
const nKeys = Object.keys(newModules);
nKeys.forEach((key, idx) => {
  newModulesCode += `    '${key}': ${JSON.stringify(newModules[key], null, 6)}${idx < nKeys.length - 1 ? ',\n\n' : ''}`;
});

const speakingWheelIdx = dataContent.indexOf('  speakingWheelPrompts: [');
if (speakingWheelIdx === -1) {
  console.error('Could not locate speakingWheelPrompts in data.js');
  process.exit(1);
}

// Find closing brace of modules right before speakingWheelPrompts
let modulesCloseBraceIdx = dataContent.lastIndexOf('  },', speakingWheelIdx);
if (modulesCloseBraceIdx === -1) {
  modulesCloseBraceIdx = dataContent.lastIndexOf('},', speakingWheelIdx);
}

dataContent = dataContent.substring(0, modulesCloseBraceIdx) + newModulesCode + '\n  },\n' + dataContent.substring(speakingWheelIdx);

fs.writeFileSync('js/data.js', dataContent, 'utf8');
console.log('Successfully updated js/data.js with all 6 levels and 36 modules!');
