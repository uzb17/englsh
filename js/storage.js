// English-English Academy - State & LocalStorage Management with Auth & Admin System

const STORAGE_KEYS = {
  STATE: 'eea_user_state_v3',
  STUDENTS: 'eea_students_db_v1',
  AUTH: 'eea_current_session_v1',
  THEME: 'eea_theme_preference',
  HOMEWORKS: 'eea_homeworks_v1',
  GROQ_KEY: 'eea_groq_api_key',
  CHATS: 'eea_direct_chats_v1'
};

// Initial sample homework templates
const INITIAL_HOMEWORKS = [
  {
    id: 'hw_writing_1',
    title: 'My Daily Routine (Mening Kun Tartibim)',
    type: 'writing',
    categoryName: 'Writing (Insho)',
    prompt: 'Write at least 60-100 words describing your daily routine. Use Present Simple tense (wake up, have breakfast, study, relax).',
    instructions: 'Har kungi odatlaringiz haqida kamida 60-100 ta so‘zdan iborat insho yozing. Present Simple zamonidan foydalaning.',
    createdDate: '2026-10-11',
    dueDate: '2026-10-18',
    maxScore: 100,
    submissions: []
  },
  {
    id: 'hw_grammar_1',
    title: 'Present Simple: S + V(s/es) Mashqi',
    type: 'grammar',
    categoryName: 'Grammar (Qoidalar)',
    prompt: 'Tushirib qoldirilgan fe‘llarni to‘g‘ri shaklda yozing: 1. She ___ (work) in a hospital. 2. They ___ (not/like) fast food. 3. ___ he study English every morning?',
    instructions: '3 ta gapni daftarda yoki ushbu maydonda to‘liq to‘ldirib yozing.',
    createdDate: '2026-10-11',
    dueDate: '2026-10-17',
    maxScore: 100,
    submissions: []
  },
  {
    id: 'hw_vocab_1',
    title: 'Essential Words - 5 Yangi So‘z bilan Gap',
    type: 'vocabulary',
    categoryName: 'Vocabulary (Lug‘at)',
    prompt: 'Lug‘atdagi quyidagi 5 ta so‘z bilan to‘liq ma‘noli gaplar tuzing: resilient, ubiquitous, courage, challenge, achieve.',
    instructions: 'Har bir so‘zga ingliz tilida bittadan to‘liq gap yozing.',
    createdDate: '2026-10-11',
    dueDate: '2026-10-19',
    maxScore: 100,
    submissions: []
  }
];

// Permanent protected student (Asal - cannot be deleted)
const PERMANENT_STUDENT = {
  id: 'student_asal',
  name: 'Asal',
  username: 'asal',
  password: 'asal',
  level: 'A0',
  xp: 0,
  streak: 1,
  totalTimeSpentMinutes: 0,
  registeredDate: '2026-10-13',
  completedLessons: [],
  quizScores: {},
  starredWords: [],
  comprehensionRatings: {},
  isPermanent: true
};

// Initial students database
const INITIAL_STUDENTS = [PERMANENT_STUDENT];

class StateManager {
  constructor() {
    this.students = this.loadStudents();
    this.currentUser = this.loadCurrentSession();
    this.state = this.loadStudentState();
    this.homeworks = this.loadHomeworks();
    this.chats = this.loadChats();
    this.startTimeTracker();
    this.initCloudSync();
  }

  async initCloudSync() {
    if (!window.supabaseService || !window.supabaseService.isConfigured()) {
      return;
    }

    try {
      // 1. Load students from Supabase Cloud
      const cloudStudents = await window.supabaseService.fetchStudents();
      if (cloudStudents && Array.isArray(cloudStudents)) {
        // Ensure permanent student Asal exists in cloud
        const asalInCloud = cloudStudents.find(s => s.username === 'asal');
        if (!asalInCloud) {
          await window.supabaseService.saveStudent(PERMANENT_STUDENT);
          cloudStudents.unshift(PERMANENT_STUDENT);
        } else {
          asalInCloud.isPermanent = true;
        }

        if (cloudStudents.length > 0) {
          this.students = cloudStudents;
          this.saveStudents(this.students);
        } else if (this.students && this.students.length > 0) {
          // If cloud database is newly initialized, migrate local students & data to cloud
          window.supabaseService.syncLocalToCloud(this.students, this.homeworks, this.chats);
        }

        // If logged in as student, refresh current session data
        if (this.currentUser && this.currentUser.role === 'student') {
          const freshUser = this.students.find(s => s.id === this.currentUser.id);
          if (freshUser) {
            this.state = this.loadStudentState();
            if (window.app) window.app.renderHeaderStats();
          }
        }

        if (window.app) {
          if (window.app.currentView === 'admin') window.app.renderAdminPanel();
          if (window.app.currentView === 'chat') window.app.renderChatStudentsList();
        }
      }

      // 2. Load homeworks from Supabase Cloud
      const cloudHomeworks = await window.supabaseService.fetchHomeworks();
      if (cloudHomeworks && Array.isArray(cloudHomeworks) && cloudHomeworks.length > 0) {
        this.homeworks = cloudHomeworks;
        this.saveHomeworks(this.homeworks);
        if (window.app && window.app.currentView === 'homework') {
          window.app.renderHomeworkList();
        }
      }

      // 3. Load chats from Supabase Cloud
      const cloudChats = await window.supabaseService.fetchAllChats();
      if (cloudChats && typeof cloudChats === 'object' && Object.keys(cloudChats).length > 0) {
        this.chats = cloudChats;
        this.saveChats(this.chats);
        if (window.app && window.app.currentView === 'chat') {
          window.app.renderActiveChatMessages();
          window.app.renderChatStudentsList();
        }
      }

      // 4. Register Realtime change handlers
      window.supabaseService.onStudentsChange(async () => {
        const fresh = await window.supabaseService.fetchStudents();
        if (fresh) {
          this.students = fresh;
          this.saveStudents(this.students);
          if (window.app) {
            if (window.app.currentView === 'admin') window.app.renderAdminPanel();
            if (window.app.currentView === 'chat') window.app.renderChatStudentsList();
          }
        }
      });

      window.supabaseService.onHomeworksChange(async () => {
        const fresh = await window.supabaseService.fetchHomeworks();
        if (fresh) {
          this.homeworks = fresh;
          this.saveHomeworks(this.homeworks);
          if (window.app && window.app.currentView === 'homework') {
            window.app.renderHomeworkList();
          }
        }
      });

      window.supabaseService.onChatsChange(async () => {
        const fresh = await window.supabaseService.fetchAllChats();
        if (fresh) {
          this.chats = fresh;
          this.saveChats(this.chats);
          if (window.app && window.app.currentView === 'chat') {
            window.app.renderActiveChatMessages();
            window.app.renderChatStudentsList();
          }
        }
      });
    } catch (err) {
      console.warn('Supabase cloud sync error:', err);
    }
  }

  loadStudents() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STUDENTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Remove legacy demo accounts if they were previously cached
        const realStudents = parsed.filter(s => s.id !== 'student_1' && s.id !== 'student_2' && s.username !== 'jasur' && s.username !== 'madina');

        // Ensure permanent student Asal is always retained
        const asalExists = realStudents.find(s => s.username === 'asal');
        if (!asalExists) {
          realStudents.unshift(PERMANENT_STUDENT);
        } else {
          asalExists.isPermanent = true;
        }

        if (realStudents.length !== parsed.length) {
          this.saveStudents(realStudents);
        }
        return realStudents;
      }
    } catch (e) {
      console.warn('Could not read students database', e);
    }
    this.saveStudents(INITIAL_STUDENTS);
    return [PERMANENT_STUDENT];
  }

  saveStudents(studentsList = this.students) {
    try {
      localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(studentsList));
    } catch (e) {
      console.warn('Could not save students database', e);
    }
  }

  loadCurrentSession() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTH);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Clear legacy demo session if active
        if (parsed.id === 'student_1' || parsed.username === 'jasur' || parsed.username === 'madina') {
          localStorage.removeItem(STORAGE_KEYS.AUTH);
          return null;
        }
        return parsed;
      }
    } catch (e) {}
    return null;
  }

  saveCurrentSession(session) {
    this.currentUser = session;
    try {
      if (session) {
        localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(session));
      } else {
        localStorage.removeItem(STORAGE_KEYS.AUTH);
      }
    } catch (e) {}
  }

  loadStudentState() {
    if (!this.currentUser || this.currentUser.role === 'admin') {
      return {
        xp: 999,
        streak: 7,
        totalTimeSpentMinutes: 120,
        completedLessons: [],
        quizScores: {},
        starredWords: [],
        comprehensionRatings: {},
        bilingualMode: true,
        settings: { theme: 'dark', accent: 'en-US', speechRate: 0.9 }
      };
    }

    const student = this.students.find(s => s.id === this.currentUser.id || (this.currentUser.username && s.username === this.currentUser.username));
    if (student) {
      if (this.currentUser.id !== student.id) {
        this.currentUser.id = student.id;
        this.saveCurrentSession(this.currentUser);
      }
      return {
        xp: student.xp || 0,
        streak: student.streak || 1,
        totalTimeSpentMinutes: student.totalTimeSpentMinutes || 0,
        completedLessons: student.completedLessons || [],
        quizScores: student.quizScores || {},
        starredWords: student.starredWords || [],
        comprehensionRatings: student.comprehensionRatings || {},
        bilingualMode: true,
        settings: { theme: 'dark', accent: 'en-US', speechRate: 0.9 }
      };
    }

    return {
      xp: 0,
      streak: 1,
      totalTimeSpentMinutes: 0,
      completedLessons: [],
      quizScores: {},
      starredWords: [],
      comprehensionRatings: {},
      bilingualMode: true,
      settings: { theme: 'dark', accent: 'en-US', speechRate: 0.9 }
    };
  }

  syncCurrentStudent() {
    if (!this.currentUser || this.currentUser.role !== 'student') return;
    const idx = this.students.findIndex(s => s.id === this.currentUser.id || (this.currentUser.username && s.username === this.currentUser.username));
    if (idx !== -1) {
      if (this.currentUser.id !== this.students[idx].id) {
        this.currentUser.id = this.students[idx].id;
        this.saveCurrentSession(this.currentUser);
      }
      this.students[idx] = {
        ...this.students[idx],
        xp: this.state.xp,
        streak: this.state.streak,
        totalTimeSpentMinutes: this.state.totalTimeSpentMinutes,
        completedLessons: this.state.completedLessons,
        quizScores: this.state.quizScores,
        starredWords: this.state.starredWords,
        comprehensionRatings: this.state.comprehensionRatings
      };
      this.saveStudents();

      // Cloud Database Sync
      if (window.supabaseService && window.supabaseService.isConfigured()) {
        window.supabaseService.saveStudent(this.students[idx]);
      }
    }
  }

  startTimeTracker() {
    // Increase active learning time every 60 seconds
    setInterval(() => {
      if (this.currentUser && this.currentUser.role === 'student') {
        this.state.totalTimeSpentMinutes = (this.state.totalTimeSpentMinutes || 0) + 1;
        this.syncCurrentStudent();
        const timerEl = document.getElementById('header-study-time');
        if (timerEl) {
          timerEl.textContent = this.formatTimeSpent(this.state.totalTimeSpentMinutes);
        }
      }
    }, 60000);
  }

  formatTimeSpent(minutes) {
    if (!minutes || minutes <= 0) return '1 daqiqa';
    if (minutes < 60) return `${minutes} daqiqa`;
    const hours = Math.floor(minutes / 60);
    const remMins = minutes % 60;
    return `${hours} soat ${remMins} daqiqa`;
  }

  login(username, password) {
    const cleanUser = (username || '').trim().toLowerCase();
    const cleanPass = (password || '').trim().toLowerCase();
    const rawPass = (password || '').trim();

    // Admin login check (login: admin, parol: admin yoki admin123)
    if (cleanUser === 'admin' && (cleanPass === 'admin' || cleanPass === 'admin123')) {
      const session = {
        role: 'admin',
        id: 'admin_root',
        username: 'admin',
        name: 'Bosh Administrator'
      };
      this.saveCurrentSession(session);
      this.state = this.loadStudentState();
      return { success: true, user: session };
    }

    // Doimiy O‘quvchi (Asal) - Xuddi admin kabi doimiy, o‘chmas o‘quvchi akkaunti
    if (cleanUser === 'asal' && (cleanPass === 'asal' || rawPass === 'asal')) {
      let student = (this.students || []).find(s => s.username.toLowerCase() === 'asal');
      if (!student) {
        student = { ...PERMANENT_STUDENT };
        this.students = this.students || [];
        this.students.unshift(student);
        this.saveStudents(this.students);
        if (window.supabaseService && window.supabaseService.isConfigured()) {
          window.supabaseService.saveStudent(student).catch(() => {});
        }
      }
      student.isPermanent = true;
      const session = {
        role: 'student',
        id: student.id,
        username: student.username,
        name: student.name
      };
      this.saveCurrentSession(session);
      this.state = this.loadStudentState();
      return { success: true, user: session };
    }

    // Student login check (Local cache)
    const student = (this.students || []).find(s => s.username.toLowerCase() === cleanUser && s.password === rawPass);
    if (student) {
      const session = {
        role: 'student',
        id: student.id,
        username: student.username,
        name: student.name
      };
      this.saveCurrentSession(session);
      this.state = this.loadStudentState();
      return { success: true, user: session };
    }

    return { success: false, error: 'Login yoki parol noto‘g‘ri!' };
  }

  // Async login with Supabase cloud fallback (works seamlessly on new devices/browsers)
  async loginAsync(username, password) {
    // 1. Check local session / memory first
    const localRes = this.login(username, password);
    if (localRes.success) return localRes;

    const cleanUser = (username || '').trim().toLowerCase();
    const cleanPass = (password || '').trim().toLowerCase();
    const rawPass = (password || '').trim();

    // Admin fast-check
    if (cleanUser === 'admin' && (cleanPass === 'admin' || cleanPass === 'admin123')) {
      return localRes;
    }

    // Asal fast-check
    if (cleanUser === 'asal' && (cleanPass === 'asal' || rawPass === 'asal')) {
      return localRes;
    }

    // 2. If not found in local memory, check Supabase Cloud Database!
    if (window.supabaseService && window.supabaseService.isConfigured()) {
      try {
        const cloudStudent = await window.supabaseService.getStudentByUsername(cleanUser);
        if (cloudStudent && cloudStudent.password === rawPass) {
          // Merge to local storage
          const existsIdx = this.students.findIndex(s => s.id === cloudStudent.id);
          if (existsIdx !== -1) {
            this.students[existsIdx] = cloudStudent;
          } else {
            this.students.push(cloudStudent);
          }
          this.saveStudents();

          const session = {
            role: 'student',
            id: cloudStudent.id,
            username: cloudStudent.username,
            name: cloudStudent.name
          };
          this.saveCurrentSession(session);
          this.state = this.loadStudentState();
          return { success: true, user: session };
        }
      } catch (err) {
        console.warn('loginAsync cloud check error:', err);
      }
    }

    return { success: false, error: 'Login yoki parol noto‘g‘ri!' };
  }

  logout() {
    this.syncCurrentStudent();
    this.saveCurrentSession(null);
  }

  createStudent(name, username, password, level = 'A0') {
    const cleanUser = username.trim().toLowerCase();
    const exists = this.students.some(s => s.username.toLowerCase() === cleanUser);
    if (exists) {
      return { success: false, error: 'Bunday loginli o‘quvchi allaqachon mavjud!' };
    }

    const newStudent = {
      id: 'student_' + Date.now(),
      name: name.trim(),
      username: cleanUser,
      password: password.trim(),
      level: level,
      totalTimeSpentMinutes: 0,
      registeredDate: new Date().toISOString().split('T')[0],
      xp: 0,
      streak: 1,
      completedLessons: [],
      quizScores: {},
      starredWords: [],
      comprehensionRatings: {}
    };

    this.students.push(newStudent);
    this.saveStudents();

    // Persist to Supabase Cloud Database immediately
    if (window.supabaseService && window.supabaseService.isConfigured()) {
      window.supabaseService.saveStudent(newStudent).then(ok => {
        if (!ok) console.warn('Supabase save student warning');
      });
    }

    return { success: true, student: newStudent };
  }

  deleteStudent(studentId) {
    const student = this.students.find(s => s.id === studentId);
    if (student && (student.username === 'asal' || student.isPermanent)) {
      console.warn('Asal doimiy o‘quvchi - o‘chirib bo‘lmaydi');
      return false;
    }

    this.students = this.students.filter(s => s.id !== studentId);
    this.saveStudents();
    if (this.currentUser && this.currentUser.id === studentId) {
      this.logout();
    }

    // Delete from Supabase Cloud Database
    if (window.supabaseService && window.supabaseService.isConfigured()) {
      window.supabaseService.deleteStudent(studentId);
    }
    return true;
  }

  saveLessonComprehension(moduleId, status, note = '') {
    if (!this.state.comprehensionRatings) this.state.comprehensionRatings = {};
    this.state.comprehensionRatings[moduleId] = {
      status, // 'mastered' (to'liq tushundi), 'review' (takrorlash kerak), 'difficult' (qiynaldi)
      note,
      timestamp: new Date().toISOString()
    };
    this.syncCurrentStudent();
  }

  addXP(amount) {
    this.state.xp = (this.state.xp || 0) + amount;
    this.syncCurrentStudent();
    return this.state.xp;
  }

  completeLesson(lessonId, quizScore = 100) {
    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
      this.addXP(50);
    }
    this.state.quizScores[lessonId] = Math.max(this.state.quizScores[lessonId] || 0, quizScore);
    this.syncCurrentStudent();
  }

  isLessonCompleted(lessonId) {
    return (this.state.completedLessons || []).includes(lessonId);
  }

  getOverallProgress(totalLessons = 16) {
    const count = (this.state.completedLessons || []).length;
    return Math.min(100, Math.round((count / totalLessons) * 100));
  }

  toggleBilingualMode() {
    this.state.bilingualMode = !this.state.bilingualMode;
    return this.state.bilingualMode;
  }

  toggleStarWord(wordId) {
    if (!this.state.starredWords) this.state.starredWords = [];
    const index = this.state.starredWords.indexOf(wordId);
    if (index > -1) {
      this.state.starredWords.splice(index, 1);
    } else {
      this.state.starredWords.push(wordId);
      this.addXP(5);
    }
    this.syncCurrentStudent();
    return this.isWordStarred(wordId);
  }

  isWordStarred(wordId) {
    return (this.state.starredWords || []).includes(wordId);
  }

  resetProgress() {
    this.state.completedLessons = [];
    this.state.quizScores = {};
    this.state.starredWords = [];
    this.state.comprehensionRatings = {};
    this.state.xp = 0;
    this.state.streak = 1;
    this.state.totalTimeSpentMinutes = 0;
    this.syncCurrentStudent();
  }

  // ==========================================
  // HOMEWORK (UY VAZIFASI) MANAGEMENT
  // ==========================================
  loadHomeworks() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HOMEWORKS);
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    this.saveHomeworks(INITIAL_HOMEWORKS);
    return JSON.parse(JSON.stringify(INITIAL_HOMEWORKS));
  }

  saveHomeworks(hwList = this.homeworks) {
    this.homeworks = hwList;
    try {
      localStorage.setItem(STORAGE_KEYS.HOMEWORKS, JSON.stringify(hwList));
    } catch(e) {}
  }

  createHomework({ title, type, prompt, instructions, dueDate, maxScore = 100, assignedTo = 'all' }) {
    const categoryMap = {
      writing: 'Writing (Insho)',
      grammar: 'Grammar (Qoidalar)',
      vocabulary: 'Vocabulary (Lug‘at)',
      reading: 'Reading (O‘qish)',
      listening: 'Listening (Tinglash)',
      speaking: 'Speaking (Nutq)',
      mixed: 'Mixed (Barcha yo‘nalishlar)'
    };

    const newHw = {
      id: 'hw_' + Date.now(),
      title: title.trim(),
      type: type || 'writing',
      categoryName: categoryMap[type] || 'Writing (Insho)',
      prompt: prompt.trim(),
      instructions: instructions ? instructions.trim() : '',
      createdDate: new Date().toISOString().split('T')[0],
      dueDate: dueDate || new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      maxScore: Number(maxScore) || 100,
      assignedTo: assignedTo || 'all',
      assignedToName: assignedTo === 'all' ? 'Barcha o‘quvchilar' : ((this.students || []).find(s => s.id === assignedTo)?.name || 'O‘quvchi'),
      submissions: []
    };

    if (!this.homeworks) this.homeworks = [];
    this.homeworks.unshift(newHw);
    this.saveHomeworks();

    // Persist to Supabase Cloud Database
    if (window.supabaseService && window.supabaseService.isConfigured()) {
      window.supabaseService.saveHomework(newHw);
    }

    // Avtomatik o'quvchi(lar)ga chat orqali bildirishnoma yuborish
    try {
      const announceText = `📚 YANGI UY VAZIFASI: "${newHw.title}" (${newHw.categoryName})
Muddati: ${newHw.dueDate} gacha • Max ball: ${newHw.maxScore} ball
Vazifani bajarish uchun chap menyudagi "Uy Vazifalari" bo‘limiga kiring!`;

      if (newHw.assignedTo === 'all') {
        (this.students || []).forEach(st => {
          this.sendChatMessage(st.id, {
            type: 'text',
            text: announceText,
            senderId: 'admin_root',
            senderName: 'Ustoz (Admin)',
            senderRole: 'admin'
          });
        });
      } else {
        this.sendChatMessage(newHw.assignedTo, {
          type: 'text',
          text: `🎯 SIZGA SHAXSIY UY VAZIFASI YUKLANDI:
` + announceText,
          senderId: 'admin_root',
          senderName: 'Ustoz (Admin)',
          senderRole: 'admin'
        });
      }
    } catch (e) {
      console.warn('Chat notification error', e);
    }

    return newHw;
  }

  deleteHomework(hwId) {
    this.homeworks = (this.homeworks || []).filter(h => h.id !== hwId);
    this.saveHomeworks();

    if (window.supabaseService && window.supabaseService.isConfigured()) {
      window.supabaseService.deleteHomework(hwId);
    }
    return true;
  }

  submitHomework(hwId, content, studentUser = this.currentUser, audioDataUrl = null, imageDataUrl = null) {
    if (!studentUser) return { success: false, error: 'Tizimga kiring' };
    const hw = (this.homeworks || []).find(h => h.id === hwId);
    if (!hw) return { success: false, error: 'Vazifa topilmadi' };

    if (!hw.submissions) hw.submissions = [];
    const existingIdx = hw.submissions.findIndex(s => s.studentId === studentUser.id);
    
    const textClean = (content || '').trim();
    const submission = {
      studentId: studentUser.id,
      studentName: studentUser.name,
      content: textClean,
      audioDataUrl: audioDataUrl || null,
      imageDataUrl: imageDataUrl || null,
      wordCount: textClean ? textClean.split(/\s+/).filter(Boolean).length : 0,
      submittedAt: new Date().toLocaleString(),
      status: 'submitted',
      grade: null,
      teacherFeedback: ''
    };

    if (existingIdx !== -1) {
      // Preserve prior audio if new audio wasn't provided but old existed
      if (!audioDataUrl && hw.submissions[existingIdx].audioDataUrl) {
        submission.audioDataUrl = hw.submissions[existingIdx].audioDataUrl;
      }
      // Preserve prior image if new image wasn't provided but old existed
      if (!imageDataUrl && hw.submissions[existingIdx].imageDataUrl) {
        submission.imageDataUrl = hw.submissions[existingIdx].imageDataUrl;
      }
      hw.submissions[existingIdx] = submission;
    } else {
      hw.submissions.push(submission);
    }

    this.saveHomeworks();
    this.addXP(30);

    // Persist updated homework submission to Supabase Cloud Database
    if (window.supabaseService && window.supabaseService.isConfigured()) {
      window.supabaseService.saveHomework(hw);
    }

    return { success: true, submission };
  }

  gradeHomework(hwId, studentId, grade, feedback) {
    const hw = (this.homeworks || []).find(h => h.id === hwId);
    if (!hw || !hw.submissions) return false;
    const sub = hw.submissions.find(s => s.studentId === studentId);
    if (sub) {
      sub.status = 'graded';
      sub.grade = Number(grade);
      sub.teacherFeedback = feedback ? feedback.trim() : '';
      sub.gradedAt = new Date().toLocaleString();
      this.saveHomeworks();

      // Persist grade & feedback to Supabase Cloud Database
      if (window.supabaseService && window.supabaseService.isConfigured()) {
        window.supabaseService.saveHomework(hw);
      }
      return true;
    }
    return false;
  }

  // ==========================================
  // GROQ LLAMA 3.1 8B CONFIG
  // ==========================================
  getGroqApiKey() {
    return localStorage.getItem(STORAGE_KEYS.GROQ_KEY) || (window.ENV && window.ENV.GROQ_API_KEY) || '';
  }

  setGroqApiKey(key) {
    if (key && key.trim()) {
      localStorage.setItem(STORAGE_KEYS.GROQ_KEY, key.trim());
    } else {
      localStorage.removeItem(STORAGE_KEYS.GROQ_KEY);
    }
  }

  // ==========================================
  // DIRECT STUDENT-TEACHER CHAT MESSAGING
  // ==========================================
  loadChats() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CHATS);
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return {};
  }

  saveChats(chats = this.chats) {
    this.chats = chats;
    try {
      localStorage.setItem(STORAGE_KEYS.CHATS, JSON.stringify(chats));
    } catch(e) {}
  }

  getChatMessages(threadId) {
    if (!threadId) return [];
    if (!this.chats[threadId]) {
      this.chats[threadId] = [
        {
          id: 'msg_welcome_' + threadId,
          senderId: 'admin_root',
          senderName: 'Bosh O‘qituvchi',
          senderRole: 'admin',
          type: 'text',
          text: 'Assalomu alaykum! Ushbu shaxsiy chat orqali menga istalgan savol, matn, ovozli xabar yoki fayllaringizni yuborishingiz mumkin. Omad! 🎓',
          timestamp: '10:00',
          edited: false
        }
      ];
      this.saveChats();
    }
    return this.chats[threadId];
  }

  sendChatMessage(threadId, messageObj) {
    if (!threadId) return null;
    if (!this.chats[threadId]) this.chats[threadId] = [];

    const newMsg = {
      id: 'msg_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      senderId: messageObj.senderId || (this.currentUser ? this.currentUser.id : 'guest'),
      senderName: messageObj.senderName || (this.currentUser ? this.currentUser.name : 'Mehmon'),
      senderRole: messageObj.senderRole || (this.currentUser ? this.currentUser.role : 'student'),
      type: messageObj.type || 'text',
      text: messageObj.text || '',
      audioDataUrl: messageObj.audioDataUrl || null,
      audioDuration: messageObj.audioDuration || null,
      fileDataUrl: messageObj.fileDataUrl || null,
      fileName: messageObj.fileName || null,
      fileSize: messageObj.fileSize || null,
      fileType: messageObj.fileType || null,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      edited: false
    };

    this.chats[threadId].push(newMsg);
    this.saveChats();

    // Persist to Supabase Cloud Database
    if (window.supabaseService && window.supabaseService.isConfigured()) {
      window.supabaseService.saveChatMessage(threadId, newMsg);
    }

    return newMsg;
  }

  editChatMessage(threadId, msgId, newText) {
    if (!threadId || !this.chats[threadId]) return false;
    const msg = this.chats[threadId].find(m => m.id === msgId);
    if (msg) {
      msg.text = newText.trim();
      msg.edited = true;
      msg.editedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.saveChats();

      // Persist edited chat to Supabase Cloud Database
      if (window.supabaseService && window.supabaseService.isConfigured()) {
        window.supabaseService.updateChatMessage(msgId, msg.text);
      }
      return true;
    }
    return false;
  }

  deleteChatMessage(threadId, msgId) {
    if (!threadId || !this.chats[threadId]) return false;
    const initialLen = this.chats[threadId].length;
    this.chats[threadId] = this.chats[threadId].filter(m => m.id !== msgId);
    if (this.chats[threadId].length !== initialLen) {
      this.saveChats();

      // Delete from Supabase Cloud Database
      if (window.supabaseService && window.supabaseService.isConfigured()) {
        window.supabaseService.deleteChatMessage(msgId);
      }
      return true;
    }
    return false;
  }
}

window.appState = new StateManager();
