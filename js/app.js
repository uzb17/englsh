// English-English Academy - Main Application Logic & Interactive Engines
// Includes Admin Panel, Student Auth, Study Time Tracker, Comprehension Feedback, Dictionary & CEFR Curriculum

class AcademyApp {
  constructor() {
    this.currentView = 'curriculum';
    this.currentModuleId = 'a0-phonics';
    this.currentLessonTab = 'flashcards';
    
    // Teacher & Presenter State
    this.isPresenterMode = false;
    this.isTeacherDrawerOpen = false;
    this.canvasPainter = null;

    // Speaking Wheel State
    this.wheelCanvas = null;
    this.wheelCtx = null;
    this.wheelRotation = 0;
    this.isSpinning = false;
    this.speakingTimerInterval = null;
    this.speakingTimeLeft = 60;
    this.writingImageDataUrl = null;

    // Dictionary State
    this.dictionaryFilterLevel = 'all';
    this.dictionaryAlphabetFilter = 'all';
    this.dictionarySearchQuery = '';
    this.selectedWordId = null;

    // Matching Game State
    this.matchingState = {
      selectedLeft: null,
      selectedRight: null,
      matchedPairs: 0,
      totalPairs: 0,
      moves: 0
    };

    // Quiz State
    this.quizState = {
      currentIndex: 0,
      score: 0,
      answered: false,
      questions: []
    };

    // Live Grammar Switcher State
    this.grammarState = {
      subject: 'He',
      aspect: 'routine',
      polarity: 'positive'
    };

    this.init();
  }

  init() {
    if (window.populateAllModulesQuiz) window.populateAllModulesQuiz();
    this.applyTheme(window.appState.state.settings.theme);
    this.setupAuthUI();
    this.renderHeaderStats();
    this.setupNavigation();
    this.setupSettings();
    this.setupGlobalSearch();
    this.setupBilingualToggle();
    this.checkAuthAndStart();
    this.initWheel();
    this.renderAlphabetBar();
    this.setupStorageListener();
  }

  setupStorageListener() {
    window.addEventListener('storage', (e) => {
      if (e.key === 'eea_homeworks_v1') {
        window.appState.homeworks = window.appState.loadHomeworks();
        this.renderHomeworkList();
      }
      if (e.key === 'eea_direct_chats_v1') {
        window.appState.chats = window.appState.loadChats();
        if (this.currentView === 'chat') {
          this.renderActiveChatMessages();
          this.renderChatStudentsList();
        }
      }
      if (e.key === 'eea_students_db_v1' || e.key === 'eea_students_v1') {
        window.appState.students = window.appState.loadStudents();
        if (this.currentView === 'admin') this.renderAdminDashboard();
        if (this.currentView === 'chat') this.renderChatStudentsList();
      }
    });
  }

  // ==========================================
  // AUTHENTICATION & ACCESS CONTROL
  // ==========================================
  setupAuthUI() {
    const user = window.appState.currentUser;
    const authContainer = document.getElementById('header-user-badge');
    const adminNavBtn = document.getElementById('nav-admin-btn');

    if (authContainer) {
      if (user) {
        const isAdmin = user.role === 'admin';
        authContainer.innerHTML = `
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-2xl ${isAdmin ? 'bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300' : 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'}">
            <span class="w-6 h-6 rounded-lg ${isAdmin ? 'bg-purple-600' : 'bg-blue-600'} text-white flex items-center justify-center text-xs font-bold">
              ${isAdmin ? '👑' : user.name.charAt(0)}
            </span>
            <div class="text-left hidden sm:block">
              <div class="text-xs font-bold leading-tight">${user.name}</div>
              <div class="text-[10px] text-slate-400 font-semibold">${isAdmin ? 'Administrator' : 'O‘quvchi'}</div>
            </div>
            <button onclick="window.app.logout()" class="ml-1 text-slate-400 hover:text-rose-500 text-xs p-1" title="Tizimdan chiqish">
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        `;
      } else {
        authContainer.innerHTML = `
          <button onclick="window.app.openLoginModal()" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm">
            <i class="fa-solid fa-user-lock"></i> Kirish
          </button>
        `;
      }
    }

    // Toggle Admin navigation item
    if (adminNavBtn) {
      if (user && user.role === 'admin') {
        adminNavBtn.classList.remove('hidden');
      } else {
        adminNavBtn.classList.add('hidden');
      }
    }
  }

  checkAuthAndStart() {
    if (!window.appState.currentUser) {
      this.openLoginModal();
    } else {
      if (window.appState.currentUser.role === 'admin') {
        this.switchView('admin');
      } else {
        this.switchView('curriculum');
      }
    }
  }

  openLoginModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('hidden');
  }

  closeLoginModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('hidden');
  }

  async handleLogin(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const userEl = document.getElementById('login-username');
    const passEl = document.getElementById('login-password');
    const userIn = userEl ? userEl.value : '';
    const passIn = passEl ? passEl.value : '';
    const errBox = document.getElementById('login-error-msg');
    const submitBtn = e && e.target ? e.target.querySelector('button[type="submit"]') : null;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Tekshirilmoqda...';
    }

    try {
      const res = await window.appState.loginAsync(userIn, passIn);
      if (res.success) {
        if (errBox) errBox.classList.add('hidden');
        this.closeLoginModal();
        this.setupAuthUI();
        this.renderHeaderStats();
        if (window.soundEngine) window.soundEngine.playCorrect();

        if (res.user.role === 'admin') {
          this.switchView('admin');
        } else {
          this.switchView('curriculum');
        }
      } else {
        if (errBox) {
          errBox.textContent = res.error;
          errBox.classList.remove('hidden');
        }
        if (window.soundEngine) window.soundEngine.playIncorrect();
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Tizimga Kirish';
      }
    }
  }

  quickLoginStudent(username, password) {
    const res = window.appState.login(username, password);
    if (res.success) {
      this.closeLoginModal();
      this.setupAuthUI();
      this.renderHeaderStats();
      window.soundEngine.playCorrect();
      this.switchView('curriculum');
    }
  }

  quickLoginWithCredentials(username, password) {
    const userIn = document.getElementById('login-username');
    const passIn = document.getElementById('login-password');
    if (userIn) userIn.value = username;
    if (passIn) passIn.value = password;

    const res = window.appState.login(username, password);
    if (res.success) {
      const errBox = document.getElementById('login-error-msg');
      if (errBox) errBox.classList.add('hidden');
      this.closeLoginModal();
      this.setupAuthUI();
      this.renderHeaderStats();
      if (window.soundEngine) window.soundEngine.playCorrect();
      if (res.user.role === 'admin') {
        this.switchView('admin');
      } else {
        this.switchView('curriculum');
      }
    }
  }

  logout() {
    window.appState.logout();
    this.setupAuthUI();
    this.renderHeaderStats();
    this.openLoginModal();
    window.soundEngine.playClick();
  }

  // ==========================================
  // THEME & SETTINGS
  // ==========================================
  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon text-slate-700';
    }
    window.appState.state.settings.theme = theme;
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    this.applyTheme(newTheme);
    window.soundEngine.playClick();
  }

  renderHeaderStats() {
    const xpEl = document.getElementById('header-xp');
    const streakEl = document.getElementById('header-streak');
    const progressEl = document.getElementById('header-progress');
    const progressFill = document.getElementById('header-progress-fill');
    const timeEl = document.getElementById('header-study-time');

    if (xpEl) xpEl.textContent = `${window.appState.state.xp || 0} XP`;
    if (streakEl) streakEl.textContent = `${window.appState.state.streak || 1} Kun`;

    const overall = window.appState.getOverallProgress(16);
    if (progressEl) progressEl.textContent = `${overall}%`;
    if (progressFill) progressFill.style.width = `${overall}%`;

    if (timeEl) {
      timeEl.textContent = window.appState.formatTimeSpent(window.appState.state.totalTimeSpentMinutes || 0);
    }
  }

  setupBilingualToggle() {
    const btn = document.getElementById('bilingual-toggle-btn');
    if (!btn) return;

    this.updateBilingualBtnUI();
    btn.addEventListener('click', () => {
      const isBilingual = window.appState.toggleBilingualMode();
      this.updateBilingualBtnUI();
      window.soundEngine.playClick();
      if (this.currentView === 'lesson') {
        this.renderLessonView(this.currentModuleId);
      } else if (this.currentView === 'dictionary') {
        this.renderDictionary();
      }
    });
  }

  updateBilingualBtnUI() {
    const btn = document.getElementById('bilingual-toggle-btn');
    if (!btn) return;
    const isBilingual = window.appState.state.bilingualMode;
    if (isBilingual) {
      btn.className = 'px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all';
      btn.innerHTML = `<span class="text-sm">🇺🇿</span> <span class="hidden sm:inline">Tarjima:</span> <span>ON</span>`;
    } else {
      btn.className = 'px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all';
      btn.innerHTML = `<span class="text-sm">🇬🇧</span> <span class="hidden sm:inline">Immersion:</span> <span>100%</span>`;
    }
  }

  setupGlobalSearch() {
    const input = document.getElementById('global-search-input');
    if (!input) return;

    input.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      if (q.length > 0) {
        this.dictionarySearchQuery = q;
        if (this.currentView !== 'dictionary') {
          this.switchView('dictionary');
        } else {
          this.renderDictionary();
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (q.length > 0) {
          this.searchWordInDictionary(q);
        }
      }
    });
  }

  // ==========================================
  // VIEW NAVIGATION
  // ==========================================
  setupNavigation() {
    document.querySelectorAll('[data-view-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view-nav');
        this.switchView(view);
        window.soundEngine.playClick();
      });
    });

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());

    const muteBtn = document.getElementById('audio-mute-btn');
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        const isMuted = window.soundEngine.toggleMute();
        muteBtn.innerHTML = isMuted ? '<i class="fa-solid fa-volume-xmark text-red-500"></i>' : '<i class="fa-solid fa-volume-high text-emerald-500"></i>';
      });
    }

    const teacherBtn = document.getElementById('teacher-mode-btn');
    if (teacherBtn) {
      teacherBtn.addEventListener('click', () => {
        this.togglePresenterMode();
        window.soundEngine.playClick();
      });
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('app-sidebar');
    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
      });
    }
  }

  setupSettings() {
    const accentSelect = document.getElementById('speech-accent-select');
    if (accentSelect) {
      accentSelect.value = window.appState.state.settings.accent || 'en-US';
      accentSelect.addEventListener('change', (e) => {
        window.speechEngine.setAccent(e.target.value);
        window.appState.state.settings.accent = e.target.value;
      });
    }

    const rateRange = document.getElementById('speech-rate-range');
    const rateVal = document.getElementById('speech-rate-val');
    if (rateRange) {
      rateRange.value = window.appState.state.settings.speechRate || 0.9;
      if (rateVal) rateVal.textContent = `${rateRange.value}x`;
      rateRange.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        window.speechEngine.setRate(val);
        if (rateVal) rateVal.textContent = `${val}x`;
        window.appState.state.settings.speechRate = val;
      });
    }
  }

  switchView(viewName, params = {}) {
    this.currentView = viewName;

    document.querySelectorAll('[data-view-nav]').forEach(btn => {
      const target = btn.getAttribute('data-view-nav');
      if (target === viewName) {
        btn.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/20');
        btn.classList.remove('text-slate-600', 'dark:text-slate-400', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/20');
        btn.classList.add('text-slate-600', 'dark:text-slate-400', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      }
    });

    document.querySelectorAll('.app-view-container').forEach(el => el.classList.add('hidden'));

    const sidebar = document.getElementById('app-sidebar');
    if (sidebar && window.innerWidth < 1024) {
      sidebar.classList.add('-translate-x-full');
    }

    const activeViewEl = document.getElementById(`view-${viewName}`);
    if (activeViewEl) activeViewEl.classList.remove('hidden');

    if (viewName === 'curriculum') {
      this.renderCurriculum();
    } else if (viewName === 'lesson') {
      if (params.moduleId) this.currentModuleId = params.moduleId;
      this.renderLessonView(this.currentModuleId);
    } else if (viewName === 'dictionary') {
      this.renderDictionary();
    } else if (viewName === 'admin') {
      this.renderAdminPanel();
    } else if (viewName === 'practice') {
      if (params.moduleId) this.currentModuleId = params.moduleId;
      this.renderPracticeHub(this.currentModuleId);
    } else if (viewName === 'speaking') {
      this.renderSpeakingWheel();
    } else if (viewName === 'profile') {
      this.renderProfileDashboard();
    } else if (viewName === 'teacher') {
      this.renderTeacherDashboard();
    } else if (viewName === 'homework') {
      this.renderHomeworkList();
    } else if (viewName === 'chat') {
      this.renderChatView();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // VIEW: ADMIN PANEL (O'quvchilar Boshqaruvi)
  // ==========================================
  renderAdminPanel() {
    const students = window.appState.students || [];
    const container = document.getElementById('admin-students-table-body');
    const totalStudentsEl = document.getElementById('admin-kpi-total-students');
    const totalTimeEl = document.getElementById('admin-kpi-total-time');
    const avgProgressEl = document.getElementById('admin-kpi-avg-progress');
    const difficultiesEl = document.getElementById('admin-kpi-difficulties-count');

    // Calculate metrics
    const totalStudents = students.length;
    const totalMinutes = students.reduce((acc, s) => acc + (s.totalTimeSpentMinutes || 0), 0);
    const avgProgress = totalStudents > 0 
      ? Math.round(students.reduce((acc, s) => acc + ((s.completedLessons || []).length / 16) * 100, 0) / totalStudents)
      : 0;

    let totalStruggles = 0;
    students.forEach(s => {
      Object.values(s.comprehensionRatings || {}).forEach(r => {
        if (r.status === 'difficult') totalStruggles++;
      });
    });

    if (totalStudentsEl) totalStudentsEl.textContent = totalStudents;
    if (totalTimeEl) totalTimeEl.textContent = window.appState.formatTimeSpent(totalMinutes);
    if (avgProgressEl) avgProgressEl.textContent = `${avgProgress}%`;
    if (difficultiesEl) difficultiesEl.textContent = `${totalStruggles} ta mavzu`;

    this.updateSupabaseStatusBadge();

    if (!container) return;

    if (!students.length) {
      container.innerHTML = `
        <tr>
          <td colspan="7" class="p-8 text-center text-slate-400">
            Hozircha o‘quvchilar ro‘yxatdan o‘tkazilmagan. Yuqoridagi "Yangi O‘quvchi Qo‘shish" tugmasini bosing.
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = students.map((s, idx) => {
      const progress = Math.min(100, Math.round(((s.completedLessons || []).length / 16) * 100));
      const timeStr = window.appState.formatTimeSpent(s.totalTimeSpentMinutes || 0);

      // Count comprehension feedback
      let masteredCount = 0;
      let reviewCount = 0;
      let diffCount = 0;
      Object.values(s.comprehensionRatings || {}).forEach(r => {
        if (r.status === 'mastered') masteredCount++;
        else if (r.status === 'review') reviewCount++;
        else if (r.status === 'difficult') diffCount++;
      });

      return `
        <tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
          <td class="p-4 text-xs font-bold text-slate-500">${idx + 1}</td>
          <td class="p-4">
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-slate-900 dark:text-white text-sm">${s.name}</span>
              ${(s.username === 'asal' || s.isPermanent) ? '<span class="px-1.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 text-[10px] font-black">⭐ Doimiy</span>' : ''}
            </div>
            <div class="text-xs text-slate-400">@${s.username}</div>
          </td>
          <td class="p-4">
            <span class="font-mono text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              ${s.password}
            </span>
          </td>
          <td class="p-4">
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              ${s.level}
            </span>
          </td>
          <td class="p-4">
            <div class="font-bold text-xs text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-clock text-amber-500"></i> ${timeStr}
            </div>
            <div class="text-[11px] text-slate-400">${(s.completedLessons || []).length} / 16 ta modul</div>
          </td>
          <td class="p-4">
            <!-- Comprehension indicators -->
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md" title="To‘liq tushungan mavzulari">
                🟢 ${masteredCount}
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md" title="Takrorlash kerak bo‘lgan mavzular">
                🟡 ${reviewCount}
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-md" title="Qiynalgan mavzulari">
                🔴 ${diffCount}
              </span>
            </div>
          </td>
          <td class="p-4 text-right">
            <div class="flex items-center justify-end gap-2">
              <button onclick="window.app.openStudentDetailModal('${s.id}')" class="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all" title="Batafsil tahlil">
                <i class="fa-solid fa-chart-pie mr-1"></i> Tahlil
              </button>
              ${(s.username === 'asal' || s.isPermanent) ? `
                <span class="px-2.5 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 text-xs font-bold flex items-center gap-1 cursor-default" title="Doimiy o‘quvchi - o‘chirib bo‘lmaydi">
                  <i class="fa-solid fa-lock text-[11px]"></i> Doimiy
                </span>
              ` : `
                <button onclick="window.app.deleteStudent('${s.id}')" class="p-1.5 rounded-xl text-slate-400 hover:text-rose-500 text-xs transition-colors" title="O‘chirish">
                  <i class="fa-solid fa-trash"></i>
                </button>
              `}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  openNewStudentModal() {
    const modal = document.getElementById('new-student-modal');
    if (modal) modal.classList.remove('hidden');
  }

  closeNewStudentModal() {
    const modal = document.getElementById('new-student-modal');
    if (modal) modal.classList.add('hidden');
  }

  handleCreateStudent(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('new-student-name').value;
    const user = document.getElementById('new-student-username').value;
    const pass = document.getElementById('new-student-password').value;
    const level = document.getElementById('new-student-level').value;
    const errEl = document.getElementById('new-student-error');

    const res = window.appState.createStudent(name, user, pass, level);
    if (res.success) {
      this.closeNewStudentModal();
      this.renderAdminPanel();
      window.soundEngine.playCorrect();
      // Clear form
      document.getElementById('new-student-form').reset();
      if (errEl) errEl.classList.add('hidden');
    } else {
      if (errEl) {
        errEl.textContent = res.error;
        errEl.classList.remove('hidden');
      }
      window.soundEngine.playIncorrect();
    }
  }

  deleteStudent(studentId) {
    const student = (window.appState.students || []).find(s => s.id === studentId);
    if (student && (student.username === 'asal' || student.isPermanent)) {
      alert('Asal doimiy o‘quvchi hisoblanadi va uni tizimdan o‘chirib bo‘lmaydi!');
      return;
    }
    if (confirm('Rostdan ham ushbu o‘quvchini tizimdan o‘chirmoqchimisiz?')) {
      window.appState.deleteStudent(studentId);
      this.renderAdminPanel();
      window.soundEngine.playClick();
    }
  }

  openStudentDetailModal(studentId) {
    const student = window.appState.students.find(s => s.id === studentId);
    if (!student) return;

    const modal = document.getElementById('student-detail-modal');
    const container = document.getElementById('student-detail-container');
    if (!modal || !container) return;

    const completed = student.completedLessons || [];
    const ratings = student.comprehensionRatings || {};

    let lessonsHtml = '';
    if (completed.length === 0) {
      lessonsHtml = `<p class="text-sm text-slate-400 italic">O‘quvchi hali darslarni yakunlamagan.</p>`;
    } else {
      lessonsHtml = completed.map(modId => {
        const mod = CURRICULUM_DATA.modules[modId] || { title: modId };
        const score = (student.quizScores && student.quizScores[modId]) || null;
        const rating = ratings[modId] || null;

        let badge = '<span class="text-xs text-slate-400">Baholanmagan</span>';
        if (rating) {
          if (rating.status === 'mastered') {
            badge = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-300">🟢 To‘liq tushundi</span>';
          } else if (rating.status === 'review') {
            badge = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-300">🟡 Takrorlash kerak</span>';
          } else if (rating.status === 'difficult') {
            badge = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-300">🔴 Qiynaldi (Yordam kerak!)</span>';
          }
        }

        return `
          <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h5 class="font-bold text-slate-900 dark:text-white text-sm">${mod.title}</h5>
              <div class="flex items-center gap-3 mt-1 text-xs text-slate-500">
                <span>Test natijasi: <strong>${score ? score + '%' : 'Topshirilmagan'}</strong></span>
                ${rating && rating.note ? `<span class="italic text-purple-600 dark:text-purple-400">"${rating.note}"</span>` : ''}
              </div>
            </div>
            <div>${badge}</div>
          </div>
        `;
      }).join('');
    }

    container.innerHTML = `
      <div class="p-6 sm:p-8">
        <!-- Header -->
        <div class="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-slate-800 mb-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-md">
              ${student.name.charAt(0)}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-2xl font-black text-slate-900 dark:text-white">${student.name}</h3>
                <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  ${student.level}
                </span>
              </div>
              <p class="text-xs text-slate-500 mt-0.5">Login: @${student.username} • Parol: ${student.password}</p>
            </div>
          </div>

          <button onclick="window.app.closeStudentDetailModal()" class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <!-- 3 KPIs for Student -->
        <div class="grid grid-cols-3 gap-3 mb-6">
          <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-center">
            <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase">Sarflangan Vaqt</div>
            <div class="text-xl font-black text-slate-900 dark:text-white mt-1">
              ${window.appState.formatTimeSpent(student.totalTimeSpentMinutes || 0)}
            </div>
          </div>
          <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-center">
            <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">Tugatilgan Modullar</div>
            <div class="text-xl font-black text-slate-900 dark:text-white mt-1">
              ${(student.completedLessons || []).length} / 16
            </div>
          </div>
          <div class="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60 text-center">
            <div class="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase">Tajriba (XP)</div>
            <div class="text-xl font-black text-slate-900 dark:text-white mt-1">
              ${student.xp || 0} XP
            </div>
          </div>
        </div>

        <!-- Lesson Comprehension History -->
        <div>
          <h4 class="font-bold text-slate-900 dark:text-white text-base mb-3 flex items-center gap-2">
            <i class="fa-solid fa-clipboard-check text-blue-500"></i> Modullar O‘zlashtirish Tarixi:
          </h4>
          <div class="space-y-3 max-h-72 overflow-y-auto pr-1">
            ${lessonsHtml}
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    window.soundEngine.playClick();
  }

  closeStudentDetailModal() {
    const modal = document.getElementById('student-detail-modal');
    if (modal) modal.classList.add('hidden');
  }

  // ==========================================
  // SUPABASE CLOUD DATABASE SETTINGS & ACTIONS
  // ==========================================
  updateSupabaseStatusBadge() {
    const isConfigured = window.supabaseService && window.supabaseService.isConfigured();
    const dot = document.getElementById('supabase-status-dot');
    const text = document.getElementById('supabase-status-text');
    const btn = document.getElementById('btn-supabase-status');

    if (dot && text) {
      if (isConfigured) {
        dot.className = 'w-2.5 h-2.5 rounded-full bg-emerald-400';
        text.textContent = 'Baza: Supabase (Faol)';
        if (btn) btn.className = 'px-4 py-3 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-700/80 font-bold text-xs flex items-center gap-2 shadow-sm transition-all shrink-0 cursor-pointer';
      } else {
        dot.className = 'w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse';
        text.textContent = 'Baza: Lokal (Ulanmagan)';
        if (btn) btn.className = 'px-4 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-2 shadow-sm transition-all shrink-0 cursor-pointer';
      }
    }
  }

  openSupabaseModal() {
    const modal = document.getElementById('supabase-config-modal');
    if (!modal) return;

    const urlInput = document.getElementById('supabase-input-url');
    const keyInput = document.getElementById('supabase-input-key');
    const statusBox = document.getElementById('supabase-modal-status-box');
    const feedback = document.getElementById('supabase-test-feedback');

    if (feedback) feedback.classList.add('hidden');

    const config = window.supabaseService ? window.supabaseService.getConfig() : { url: '', key: '' };
    if (urlInput) urlInput.value = config.url;
    if (keyInput) keyInput.value = config.key;

    const isConnected = window.supabaseService && window.supabaseService.isConfigured();
    if (statusBox) {
      if (isConnected) {
        statusBox.className = 'p-4 rounded-2xl mb-6 flex items-start gap-3 transition-all bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-200';
        statusBox.innerHTML = `
          <span class="text-xl shrink-0 mt-0.5">🟢</span>
          <div class="text-xs leading-relaxed">
            <b class="block text-sm font-bold mb-0.5">Supabase Cloud Database Faol & Ulangan!</b>
            <span>Barcha o‘quvchilar, uy vazifalari va chatlar PostgreSQL bulutli bazasida doimiy saqlanmoqda. O‘quvchilar istalgan telefondan kirsalar ham hisoblari saqlanadi.</span>
          </div>
        `;
      } else {
        statusBox.className = 'p-4 rounded-2xl mb-6 flex items-start gap-3 transition-all bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 text-amber-800 dark:text-amber-200';
        statusBox.innerHTML = `
          <span class="text-xl shrink-0 mt-0.5">⚠️</span>
          <div class="text-xs leading-relaxed">
            <b class="block text-sm font-bold mb-0.5">Baza holati: Lokal rejimda ishlamoqda</b>
            <span>Hozirda yangi qo‘shilgan o‘quvchilar faqat ushbu brauzerda qoladi. Quyidagi 4 ta oson qadam orqali bepul Supabase bazasini ulasangiz, istalgan o‘quvchi o‘z telefonidan bemalol login qilib kira oladi va ma’lumotlar hech qachon yo‘qolmaydi!</span>
          </div>
        `;
      }
    }

    modal.classList.remove('hidden');
    if (window.soundEngine) window.soundEngine.playClick();
  }

  closeSupabaseModal() {
    const modal = document.getElementById('supabase-config-modal');
    if (modal) modal.classList.add('hidden');
  }

  async handleTestSupabaseConnection() {
    const url = document.getElementById('supabase-input-url')?.value.trim();
    const key = document.getElementById('supabase-input-key')?.value.trim();
    const feedback = document.getElementById('supabase-test-feedback');

    if (!url || !key) {
      alert('Iltimos, Supabase Project URL va Anon Key ni to‘ldiring!');
      return;
    }

    if (feedback) {
      feedback.className = 'p-3.5 rounded-xl text-xs font-bold leading-relaxed bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800 flex items-center gap-2';
      feedback.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Supabase bilan ulanish tekshirilmoqda...';
      feedback.classList.remove('hidden');
    }

    const res = await window.supabaseService.testConnection(url, key);
    if (feedback) {
      if (res.success) {
        feedback.className = 'p-3.5 rounded-xl text-xs font-bold leading-relaxed bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-2';
        feedback.innerHTML = '✅ Ulanish muvaffaqiyatli! Baza bilan aloqa o‘rnatildi.';
        if (window.soundEngine) window.soundEngine.playCorrect();
      } else {
        feedback.className = 'p-3.5 rounded-xl text-xs font-bold leading-relaxed bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 flex items-center gap-2';
        feedback.innerHTML = `❌ Xatolik: ${res.error}`;
        if (window.soundEngine) window.soundEngine.playIncorrect();
      }
    }
  }

  async handleSaveSupabaseConfig(e) {
    if (e) e.preventDefault();
    const url = document.getElementById('supabase-input-url')?.value.trim();
    const key = document.getElementById('supabase-input-key')?.value.trim();
    const feedback = document.getElementById('supabase-test-feedback');

    if (!url || !key) {
      alert('Iltimos, Supabase URL va API Kalitini kiriting!');
      return;
    }

    if (feedback) {
      feedback.className = 'p-3.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-300 flex items-center gap-2';
      feedback.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Tekshirilmoqda va saqlanmoqda...';
      feedback.classList.remove('hidden');
    }

    const testRes = await window.supabaseService.testConnection(url, key);
    if (!testRes.success) {
      if (feedback) {
        feedback.className = 'p-3.5 rounded-xl text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 flex items-center gap-2';
        feedback.innerHTML = `❌ Ulanish amalga oshmadi: ${testRes.error}`;
      }
      return;
    }

    // Save and re-initialize
    window.supabaseService.saveCredentials(url, key);
    await window.appState.initCloudSync();

    this.updateSupabaseStatusBadge();
    this.renderAdminPanel();
    if (window.soundEngine) window.soundEngine.playFanfare();

    if (feedback) {
      feedback.className = 'p-3.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 flex items-center gap-2';
      feedback.innerHTML = '🎉 Muvaffaqiyatli saqlandi! Supabase bulutli bazasi faol!';
    }

    setTimeout(() => {
      this.closeSupabaseModal();
      alert('🎉 Supabase muvaffaqiyatli ulandi! Endi barcha o‘quvchilar va vazifalar bulutli bazada doimiy saqlanadi.');
    }, 800);
  }

  handleDisconnectSupabase() {
    if (confirm('Rostdan ham Supabase ulanishini uzib, lokal rejimga qaytmoqchimisiz?')) {
      window.supabaseService.clearCredentials();
      this.updateSupabaseStatusBadge();
      this.closeSupabaseModal();
      this.renderAdminPanel();
      alert('Supabase ulanishi uzildi. Platforma lokal rejimga qaytarildi.');
    }
  }

  async handleSyncLocalToSupabase() {
    if (!window.supabaseService || !window.supabaseService.isConfigured()) {
      alert('Avval Supabase URL va Anon Key ni kiritib saqlang!');
      return;
    }

    const count = (window.appState.students || []).length;
    if (count === 0) {
      alert('Lokal xotirada o‘quvchilar mavjud emas.');
      return;
    }

    const feedback = document.getElementById('supabase-test-feedback');
    if (feedback) {
      feedback.className = 'p-3.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-300 flex items-center gap-2';
      feedback.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> O‘quvchilar bulutli bazaga yuklanmoqda...';
      feedback.classList.remove('hidden');
    }

    const res = await window.supabaseService.syncLocalToCloud(
      window.appState.students,
      window.appState.homeworks,
      window.appState.chats
    );

    if (res.success) {
      if (feedback) {
        feedback.className = 'p-3.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 flex items-center gap-2';
        feedback.innerHTML = `✅ ${res.syncedStudents} ta o‘quvchi va vazifalar bazaga yuklandi!`;
      }
      if (window.soundEngine) window.soundEngine.playCorrect();
    } else {
      if (feedback) {
        feedback.className = 'p-3.5 rounded-xl text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 flex items-center gap-2';
        feedback.innerHTML = `❌ Yuklashda xatolik: ${res.error}`;
      }
    }
  }

  copySupabaseSql() {
    const code = document.getElementById('supabase-sql-code')?.innerText;
    const btn = document.getElementById('btn-copy-supabase-sql');

    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        if (btn) {
          const original = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check"></i> Nusxalandi!';
          btn.className = 'px-3 py-1 rounded-xl bg-purple-600 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-sm';
          setTimeout(() => {
            btn.innerHTML = original;
            btn.className = 'px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-sm transition-all';
          }, 2500);
        }
        if (window.soundEngine) window.soundEngine.playCorrect();
      });
    }
  }

  // ==========================================
  // POST-LESSON SELF-EVALUATION FEEDBACK
  // ==========================================
  promptLessonComprehension(moduleId) {
    const mod = CURRICULUM_DATA.modules[moduleId] || { title: moduleId };
    const modal = document.getElementById('comprehension-feedback-modal');
    const titleEl = document.getElementById('comprehension-modal-title');
    if (!modal) return;

    if (titleEl) titleEl.textContent = mod.title;
    modal.setAttribute('data-module-id', moduleId);
    modal.classList.remove('hidden');
    window.soundEngine.playCorrect();
  }

  submitLessonFeedback(status) {
    const modal = document.getElementById('comprehension-feedback-modal');
    const moduleId = modal.getAttribute('data-module-id') || this.currentModuleId;
    const note = document.getElementById('comprehension-note-input').value.trim();

    window.appState.saveLessonComprehension(moduleId, status, note);
    window.appState.addXP(20);
    this.renderHeaderStats();
    modal.classList.add('hidden');

    window.soundEngine.playFanfare();
    this.triggerConfetti();

    // Reset input
    document.getElementById('comprehension-note-input').value = '';
    alert('Fikringiz saqlandi va o‘qituvchi admin paneliga yuborildi! (+20 XP)');
  }

  // ==========================================
  // VIEW: DICTIONARY (LUG'AT)
  // ==========================================
  renderAlphabetBar() {
    const container = document.getElementById('dict-alphabet-bar');
    if (!container) return;

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let html = `
      <button onclick="window.app.setAlphabetFilter('all', this)" class="dict-letter-pill px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${this.dictionaryAlphabetFilter === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'}">
        Barchasi
      </button>
    `;

    alphabet.forEach(letter => {
      const active = this.dictionaryAlphabetFilter.toLowerCase() === letter.toLowerCase();
      html += `
        <button onclick="window.app.setAlphabetFilter('${letter}', this)" class="dict-letter-pill w-7 h-7 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${active ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'}">
          ${letter}
        </button>
      `;
    });

    container.innerHTML = html;
  }

  setAlphabetFilter(letter, btnEl = null) {
    this.dictionaryAlphabetFilter = letter;
    this.renderAlphabetBar();
    this.renderDictionary();
    window.soundEngine.playClick();
  }

  renderDictionary() {
    const listContainer = document.getElementById('dictionary-words-grid');
    const countBadge = document.getElementById('dictionary-count-badge');
    if (!listContainer) return;

    const isBilingual = window.appState.state.bilingualMode;
    const q = this.dictionarySearchQuery.toLowerCase().trim();
    const lvl = this.dictionaryFilterLevel;
    const letter = this.dictionaryAlphabetFilter.toLowerCase();

    let filtered = DICTIONARY_DATABASE.filter(item => {
      // 1. Level Filter
      if (lvl === 'starred') {
        if (!window.appState.isWordStarred(item.id)) return false;
      } else if (lvl !== 'all' && item.level.toLowerCase() !== lvl.toLowerCase()) {
        return false;
      }

      // 2. Alphabet Filter (only if user is not typing an active search query)
      if (!q && letter !== 'all') {
        const firstChar = (item.word || '').charAt(0).toLowerCase();
        if (firstChar !== letter) return false;
      }

      // 3. Search Query Filter - strictly matches word and translation (no random sentence substring leaks)
      if (q) {
        const wordStr = (item.word || '').toLowerCase();
        const transStr = (item.translation || '').toLowerCase();
        const inWord = wordStr.includes(q);
        const inUz = transStr.includes(q);
        return inWord || inUz;
      }

      return true;
    });

    // 4. Sort by relevance when searching
    if (q) {
      filtered.sort((a, b) => {
        const aW = (a.word || '').toLowerCase();
        const bW = (b.word || '').toLowerCase();
        const aT = (a.translation || '').toLowerCase();
        const bT = (b.translation || '').toLowerCase();

        // Exact match
        if (aW === q) return -1;
        if (bW === q) return 1;

        // Word starts with query
        const aStarts = aW.startsWith(q);
        const bStarts = bW.startsWith(q);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        // Translation starts with query
        const aTransStarts = aT.startsWith(q) || aT.includes(`, ${q}`) || aT.includes(` ${q}`);
        const bTransStarts = bT.startsWith(q) || bT.includes(`, ${q}`) || bT.includes(` ${q}`);
        if (aTransStarts && !bTransStarts) return -1;
        if (!aTransStarts && bTransStarts) return 1;

        return aW.localeCompare(bW);
      });
    }

    if (countBadge) {
      countBadge.textContent = `${filtered.length} ta so‘z`;
    }

    if (!filtered.length) {
      const queryPrompt = this.dictionarySearchQuery ? this.dictionarySearchQuery : '';
      listContainer.innerHTML = `
        <div class="col-span-full p-8 sm:p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span class="text-5xl block mb-3 animate-bounce">🌐</span>
          <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100">
            ${queryPrompt ? `"${queryPrompt}" lokal ro‘yxatda topilmadi` : `Tanlangan filtrlarga mos so‘z yo‘q`}
          </h3>
          <p class="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            ${queryPrompt 
              ? `Xavotir olmang! Free Dictionary API orqali ushbu so‘zning to‘liq inglizcha ta’rifi, talaffuzi va o‘zbekcha tarjimasini onlayn qidirishingiz mumkin.` 
              : `Boshqa harf yoki darajani tanlab ko‘ring.`}
          </p>
          ${queryPrompt ? `
            <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onclick="window.app.triggerOnlineSearch('${queryPrompt.replace(/'/g, "\\'")}')" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all active:scale-95">
                <i class="fa-solid fa-globe"></i> "${queryPrompt}" ni Onlayn Lug‘at API dan qidirish
              </button>
              <button onclick="window.app.dictionarySearchQuery = ''; document.getElementById('dictionary-search-input').value = ''; window.app.renderDictionary();" class="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors">
                Filtrni tozalash
              </button>
            </div>
          ` : ''}
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(item => {
      const isStarred = window.appState.isWordStarred(item.id);

      return `
        <div onclick="window.app.openWordModal('${item.id}')" class="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between mb-3">
              <span class="text-3xl select-none group-hover:scale-110 transition-transform">${item.visual || '📖'}</span>
              <div class="flex items-center gap-1.5">
                ${item.isApiFetched ? `
                  <span class="text-[9px] font-black px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800" title="Free Dictionary API dan olindi">
                    🌐 API
                  </span>
                ` : ''}
                <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  ${item.level}
                </span>
                <button onclick="event.stopPropagation(); window.app.toggleStarWord('${item.id}', this)" class="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors">
                  <i class="fa-${isStarred ? 'solid' : 'regular'} fa-star text-amber-400 text-sm"></i>
                </button>
              </div>
            </div>

            <div class="mb-2">
              <div class="flex items-baseline gap-2">
                <h3 class="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  ${item.word}
                </h3>
                <span class="text-xs font-mono text-slate-400 font-semibold">${item.phonetic}</span>
              </div>
              <div class="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                ➜ ${item.translation}
              </div>
              ${item.pronunciation_uz ? `
                <div class="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-1.5 flex items-center gap-1.5 bg-blue-50/60 dark:bg-blue-950/40 px-2 py-1 rounded-lg border border-blue-100 dark:border-blue-900/40">
                  <i class="fa-solid fa-ear-listen text-[10px] shrink-0"></i>
                  <span class="truncate">${item.pronunciation_uz}</span>
                </div>
              ` : ''}
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
              ${isBilingual ? `${item.definition_en} <span class="block text-slate-400 italic mt-0.5">${item.definition_uz}</span>` : item.definition_en}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div class="bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2">
              <div class="text-xs text-slate-700 dark:text-slate-300">
                <p class="font-medium italic">"${item.example_en}"</p>
                ${isBilingual ? `<p class="text-[11px] text-slate-400 mt-0.5 font-normal">"${item.example_uz}"</p>` : ''}
              </div>
              <button onclick="event.stopPropagation(); window.app.pronounceText('${item.word}')" class="shrink-0 w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center text-[10px]">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  setDictionaryFilter(lvl, btnEl = null) {
    this.dictionaryFilterLevel = lvl;
    document.querySelectorAll('.dict-filter-pill').forEach(btn => {
      btn.className = 'dict-filter-pill px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';
    });
    if (btnEl) {
      btnEl.className = 'dict-filter-pill px-4 py-2 rounded-xl text-xs font-bold transition-all bg-blue-600 text-white shadow-md shadow-blue-500/20';
    }
    this.renderDictionary();
    window.soundEngine.playClick();
  }

  searchWordInDictionary(query) {
    this.dictionarySearchQuery = query;
    const input = document.getElementById('dictionary-search-input');
    if (input) input.value = query;
    this.switchView('dictionary');
    this.renderDictionary();

    const exact = DICTIONARY_DATABASE.find(w => w.word.toLowerCase() === query.toLowerCase() || w.translation.toLowerCase() === query.toLowerCase());
    if (exact) {
      this.openWordModal(exact.id);
    } else {
      // If not in local database, suggest online search
      this.triggerOnlineSearch(query);
    }
  }

  async triggerOnlineSearch(customWord = null) {
    const input = document.getElementById('dictionary-search-input');
    const query = (customWord || (input ? input.value : '') || this.dictionarySearchQuery).trim();
    if (!query) {
      alert('Iltimos, qidirish uchun so‘z kiriting!');
      if (input) input.focus();
      return;
    }

    const statusBanner = document.getElementById('dict-api-status');
    const statusText = document.getElementById('dict-api-status-text');
    const searchBtn = document.getElementById('dict-online-search-btn');

    if (statusBanner) statusBanner.classList.remove('hidden');
    if (statusText) statusText.textContent = `"${query}" so‘zi Free Dictionary API va MyMemory orqali qidirilmoqda...`;
    if (searchBtn) {
      searchBtn.disabled = true;
      searchBtn.classList.add('opacity-75');
    }

    try {
      const res = await window.dictionaryApi.lookupWordOnline(query);
      if (res.success && res.wordData) {
        window.soundEngine.playCorrect();
        this.dictionaryAlphabetFilter = 'all';
        this.dictionaryFilterLevel = 'all';
        this.dictionarySearchQuery = res.wordData.word;
        if (input) input.value = res.wordData.word;
        this.renderAlphabetBar();
        this.renderDictionary();
        this.openWordModal(res.wordData.id);
      } else {
        window.soundEngine.playIncorrect();
        alert(res.error || `"${query}" so‘zi onlayn lug‘atda topilmadi.`);
      }
    } catch (e) {
      alert('Onlayn qidiruvda xatolik yuz berdi. Internet aloqasini tekshiring.');
    } finally {
      if (statusBanner) statusBanner.classList.add('hidden');
      if (searchBtn) {
        searchBtn.disabled = false;
        searchBtn.classList.remove('opacity-75');
      }
    }
  }

  toggleStarWord(wordId, btnEl = null) {
    const isNowStarred = window.appState.toggleStarWord(wordId);
    if (btnEl) {
      const icon = btnEl.querySelector('i');
      if (icon) {
        icon.className = isNowStarred ? 'fa-solid fa-star text-amber-400 text-sm' : 'fa-regular fa-star text-amber-400 text-sm';
      }
    }
    window.soundEngine.playClick();
    this.renderHeaderStats();
    if (this.dictionaryFilterLevel === 'starred') {
      this.renderDictionary();
    }
  }

  openWordModal(wordId) {
    const item = DICTIONARY_DATABASE.find(w => w.id === wordId);
    if (!item) return;

    this.selectedWordId = item.id;
    const modal = document.getElementById('word-detail-modal');
    const container = document.getElementById('word-detail-container');
    if (!modal || !container) return;

    const isStarred = window.appState.isWordStarred(item.id);

    container.innerHTML = `
      <div class="p-6 sm:p-8">
        <div class="flex items-start justify-between mb-6">
          <div class="flex items-center gap-4">
            <span class="text-6xl select-none animate-float">${item.visual || '📖'}</span>
            <div>
              <div class="flex items-center gap-2">
                ${item.isApiFetched ? `
                  <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                    🌐 Online API
                  </span>
                ` : ''}
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  ${item.level} • ${item.pos}
                </span>
                <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">${item.phonetic}</span>
              </div>
              <h2 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
                ${item.word}
              </h2>
              <div class="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
                ${item.word} — ${item.translation}
              </div>
              ${item.pronunciation_uz ? `
                <div class="mt-2.5 p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-blue-700 dark:text-blue-300 font-medium flex items-start gap-2.5">
                  <i class="fa-solid fa-ear-listen text-blue-500 text-sm mt-0.5 shrink-0"></i>
                  <div>
                    <span class="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px] block">O‘zbekcha aytilish yo‘riqnomasi:</span>
                    ${item.pronunciation_uz}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.app.toggleStarWord('${item.id}', this)" class="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center hover:scale-105 transition-transform" title="Save to Favorites">
              <i class="fa-${isStarred ? 'solid' : 'regular'} fa-star text-amber-400 text-lg"></i>
            </button>
            <button onclick="window.app.pronounceText('${item.word}')" class="w-11 h-11 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-lg shadow-md shadow-blue-500/20" title="Listen Audio">
              <i class="fa-solid fa-volume-high"></i>
            </button>
            <button onclick="window.app.closeWordModal()" class="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center text-lg">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-5">
          <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-book text-blue-500"></i> Definition (Ta’rif):
          </div>
          <p class="text-base text-slate-800 dark:text-slate-100 font-semibold leading-relaxed">
            ${item.definition_en}
          </p>
          <div class="mt-2 pt-2 border-t border-slate-200/80 dark:border-slate-700/60 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
            🇺🇿 <strong>O‘zbekcha:</strong> ${item.definition_uz}
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 mb-5">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-quote-left"></i> Example Sentence in Context (Misol):
            </span>
            <button onclick="window.app.pronounceText('${item.example_en.replace(/'/g, "\\'")}')" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
              <i class="fa-solid fa-volume-high"></i> Tinglash
            </button>
          </div>
          <p class="text-lg font-bold text-slate-900 dark:text-white">
            "${item.example_en}"
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
            ➜ "${item.example_uz}"
          </p>
        </div>

        ${item.collocations && item.collocations.length > 0 ? `
          <div class="mb-6">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Collocations (Birikmalar):</span>
            <div class="flex flex-wrap gap-2">
              ${item.collocations.map(col => `
                <span onclick="window.app.pronounceText('${col.replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-700 hover:border-blue-500 cursor-pointer flex items-center gap-1.5">
                  <i class="fa-solid fa-volume-high text-[10px] text-slate-400"></i> ${col}
                </span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button onclick="window.app.pronounceText('${item.example_en.replace(/'/g, "\\'")}')" class="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700">
            <i class="fa-solid fa-play mr-1"></i> Read Example Aloud
          </button>
          <button onclick="window.app.closeWordModal()" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md">
            Yopish
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    window.soundEngine.playClick();
  }

  closeWordModal() {
    const modal = document.getElementById('word-detail-modal');
    if (modal) modal.classList.add('hidden');
  }

  // ==========================================
  // VIEW: CURRICULUM ROADMAP
  // ==========================================
  renderCurriculum() {
    const container = document.getElementById('curriculum-levels-container');
    if (!container) return;

    let html = '';

    CURRICULUM_DATA.levels.forEach(level => {
      const levelModules = level.modules.map(id => CURRICULUM_DATA.modules[id]).filter(Boolean);
      const completedCount = levelModules.filter(m => window.appState.isLessonCompleted(m.id)).length;
      const levelPercent = Math.round((completedCount / levelModules.length) * 100);

      html += `
        <div class="mb-12 bg-white dark:bg-slate-900 border ${level.borderLight} rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div class="flex items-center gap-4">
              <span class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} text-white font-extrabold text-2xl shadow-lg">
                ${level.badge}
              </span>
              <div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  ${level.title}
                  <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${level.bgLight} ${level.accentColor}">
                    ${completedCount}/${levelModules.length} Yakunlandi
                  </span>
                </h2>
                <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">${level.subtitle}</p>
              </div>
            </div>

            <div class="w-full md:w-56">
              <div class="flex justify-between text-xs font-semibold text-slate-500 mb-1.5">
                <span>O‘zlashtirish</span>
                <span class="font-bold ${level.accentColor}">${levelPercent}%</span>
              </div>
              <div class="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div class="h-full bg-gradient-to-r ${level.color} rounded-full transition-all duration-500" style="width: ${levelPercent}%"></div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            ${levelModules.map((mod, idx) => {
              const isCompleted = window.appState.isLessonCompleted(mod.id);
              const score = (window.appState.state.quizScores && window.appState.state.quizScores[mod.id]) || null;
              const feedback = (window.appState.state.comprehensionRatings && window.appState.state.comprehensionRatings[mod.id]) || null;

              return `
                <div class="group relative flex flex-col justify-between p-5 rounded-2xl border transition-all duration-200 ${
                  isCompleted 
                    ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800' 
                    : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500'
                }">
                  <div>
                    <div class="flex items-center justify-between mb-3">
                      <span class="w-10 h-10 rounded-xl flex items-center justify-center ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20'} text-lg">
                        <i class="fa-solid ${mod.icon}"></i>
                      </span>
                      ${isCompleted ? `
                        <div class="flex items-center gap-1.5">
                          ${feedback ? `
                            <span class="text-xs" title="${feedback.status === 'mastered' ? 'To‘liq tushungan' : feedback.status === 'review' ? 'Takrorlash kerak' : 'Qiynalgan'}">
                              ${feedback.status === 'mastered' ? '🟢' : feedback.status === 'review' ? '🟡' : '🔴'}
                            </span>
                          ` : ''}
                          <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2.5 py-0.5 rounded-full">
                            <i class="fa-solid fa-check"></i> ${score ? score + '%' : 'Bajarildi'}
                          </span>
                        </div>
                      ` : `
                        <span class="text-xs font-semibold text-slate-400">${idx + 1}-dars</span>
                      `}
                    </div>

                    <h3 class="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-500 transition-colors">
                      ${mod.title}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      ${mod.overview || mod.description}
                    </p>
                  </div>

                  <div class="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                    <button onclick="window.app.startLesson('${mod.id}')" class="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                      <i class="fa-solid fa-play"></i> Darsga kirish
                    </button>
                    <button onclick="window.app.startPractice('${mod.id}')" class="py-2 px-3 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors" title="Mashq qilish">
                      <i class="fa-solid fa-gamepad"></i>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  startLesson(moduleId) {
    this.currentModuleId = moduleId;
    this.currentLessonTab = 'flashcards';
    this.switchView('lesson', { moduleId });
  }

  startPractice(moduleId) {
    this.currentModuleId = moduleId;
    this.switchView('practice', { moduleId });
  }

  // ==========================================
  // VIEW: MULTI-MODAL IMMERSION LESSON
  // ==========================================
  renderLessonView(moduleId) {
    const mod = CURRICULUM_DATA.modules[moduleId] || CURRICULUM_DATA.modules['a0-phonics'];
    this.currentModuleId = mod.id;

    const titleEl = document.getElementById('lesson-title');
    const badgeEl = document.getElementById('lesson-badge');
    const descEl = document.getElementById('lesson-desc');

    if (titleEl) titleEl.textContent = mod.title;
    if (badgeEl) {
      const level = CURRICULUM_DATA.levels.find(l => l.id === mod.levelId);
      badgeEl.textContent = level ? level.badge : 'CEFR';
    }
    if (descEl) descEl.textContent = mod.overview || mod.description;

    const tabs = ['flashcards', 'grammar', 'ccqs', 'quiz'];
    tabs.forEach(tab => {
      const tabBtn = document.getElementById(`tab-btn-${tab}`);
      const tabContent = document.getElementById(`tab-content-${tab}`);

      if (tabBtn) {
        tabBtn.onclick = () => {
          this.currentLessonTab = tab;
          tabs.forEach(t => {
            const b = document.getElementById(`tab-btn-${t}`);
            const c = document.getElementById(`tab-content-${t}`);
            if (b && c) {
              if (t === tab) {
                b.className = 'py-3 px-5 font-bold text-sm border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 flex items-center gap-2';
                c.classList.remove('hidden');
              } else {
                b.className = 'py-3 px-5 font-medium text-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 border-b-2 border-transparent flex items-center gap-2';
                c.classList.add('hidden');
              }
            }
          });
          window.soundEngine.playClick();
        };
      }
    });

    this.renderFlashcardsTab(mod);
    this.renderGrammarTab(mod);
    this.renderCCQTab(mod);
    this.renderQuizTab(mod);

    const firstTabBtn = document.getElementById(`tab-btn-${this.currentLessonTab}`);
    if (firstTabBtn) firstTabBtn.click();

    this.updateTeacherNotes(mod);
  }

  renderFlashcardsTab(mod) {
    const container = document.getElementById('flashcards-grid');
    if (!container) return;

    if (!mod.flashcards || !mod.flashcards.length) {
      container.innerHTML = `<p class="text-slate-500">Ushbu modulda kartochkalar mavjud emas.</p>`;
      return;
    }

    const isBilingual = window.appState.state.bilingualMode;

    container.innerHTML = mod.flashcards.map(card => `
      <div class="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between mb-4">
            <span class="text-5xl select-none group-hover:scale-110 transition-transform duration-200 inline-block">
              ${card.visual}
            </span>
            <button onclick="window.app.pronounceText('${card.word.replace(/'/g, "\\'")}', this)" class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center text-lg shadow-sm" title="Eshitish">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </div>

          <h3 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            ${card.word}
          </h3>
          ${card.uz && isBilingual ? `
            <span class="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 block mt-0.5">
              ➜ ${card.uz}
            </span>
          ` : ''}

          <span class="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md inline-block mt-2">
            ${card.phonetic}
          </span>

          ${card.pronunciation_uz ? `
            <div class="mt-2 p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 text-xs text-blue-700 dark:text-blue-300 font-medium flex items-start gap-2">
              <i class="fa-solid fa-ear-listen text-blue-500 mt-0.5 shrink-0"></i>
              <span>${card.pronunciation_uz}</span>
            </div>
          ` : ''}

          <p class="text-sm text-slate-600 dark:text-slate-300 mt-3 font-normal leading-relaxed">
            ${card.meaning}
          </p>
        </div>

        <div class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div class="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
            <div class="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
              <i class="fa-solid fa-quote-left text-blue-500"></i> Misol / Example
            </div>
            <p class="text-xs font-medium text-slate-800 dark:text-slate-200 italic">
              "${card.example}"
            </p>
            ${card.example_uz && isBilingual ? `
              <p class="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">
                "${card.example_uz}"
              </p>
            ` : ''}
          </div>

          ${card.tips ? `
            <div class="mt-2.5 flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
              <i class="fa-solid fa-lightbulb"></i>
              <span>${card.tips}</span>
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  cleanTextForSpeech(text) {
    if (!text) return '';
    // Strip emojis, brackets, parentheses, phonetic slashes, and symbols
    return text
      .replace(/\[.*?\]/g, '')     // remove brackets [ship - qisqa i]
      .replace(/\(.*?\)/g, '')     // remove parens (Kema)
      .replace(/\/.*?\//g, '')     // remove phonetics /ʃɪp/
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}]/gu, '') // remove emojis
      .replace(/[→➜—–\-=><+]/g, ' ') // remove symbols
      .replace(/\s+/g, ' ')
      .trim();
  }

  pronounceText(text, btnElement = null) {
    const clean = this.cleanTextForSpeech(text);
    if (!clean) return;
    if (btnElement) {
      btnElement.classList.add('animate-audio-speaking', 'ring-4', 'ring-blue-400');
    }
    window.speechEngine.speak(clean, null, () => {
      if (btnElement) {
        btnElement.classList.remove('animate-audio-speaking', 'ring-4', 'ring-blue-400');
      }
    });
  }

  pronouncePair(word1, word2) {
    const clean1 = this.cleanTextForSpeech(word1);
    const clean2 = this.cleanTextForSpeech(word2);
    window.speechEngine.speak(clean1, null, () => {
      setTimeout(() => {
        window.speechEngine.speak(clean2);
      }, 550);
    });
  }

  // 2. Interactive Grammar & Phonics Tab
  renderGrammarTab(mod) {
    const container = document.getElementById('grammar-interactive-container');
    if (!container) return;

    if (!mod.grammarInteractive) {
      container.innerHTML = `<p class="text-slate-500">Bu modulda interaktiv qoidalar mavjud emas.</p>`;
      return;
    }

    const gi = mod.grammarInteractive;

    if (gi.type === 'live-grammar-switcher') {
      container.innerHTML = `
        <div class="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800 px-3 py-1 rounded-full">Interaktiv Grammatika</span>
              <h3 class="text-2xl font-bold mt-2">${gi.title}</h3>
              <p class="text-sm text-slate-400">${gi.description}</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="window.app.pronounceCurrentGrammarSentence()" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30">
                <i class="fa-solid fa-volume-high"></i> Tinglash (Audio)
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 mb-6">
            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Ega (Subject - Kim?)</label>
              <div class="flex flex-wrap gap-1.5" id="grammar-subject-buttons">
                ${gi.subjects.map(s => `
                  <button onclick="window.app.updateGrammarSwitcher('subject', '${s}')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${this.grammarState.subject === s ? 'bg-purple-600 text-white shadow' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}">
                    ${s}
                  </button>
                `).join('')}
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Vaqt jihati (Aspect)</label>
              <div class="flex gap-2">
                <button onclick="window.app.updateGrammarSwitcher('aspect', 'routine')" class="flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${this.grammarState.aspect === 'routine' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}">
                  🔄 Har kuni (Routine)
                </button>
                <button onclick="window.app.updateGrammarSwitcher('aspect', 'now')" class="flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${this.grammarState.aspect === 'now' ? 'bg-cyan-600 text-white shadow' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}">
                  ⏱️ Ayni damda (Now)
                </button>
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Gap turi (Polarity)</label>
              <div class="flex gap-2">
                <button onclick="window.app.updateGrammarSwitcher('polarity', 'positive')" class="flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${this.grammarState.polarity === 'positive' ? 'bg-blue-600 text-white shadow' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}">
                  ✅ Tasdiq (+)
                </button>
                <button onclick="window.app.updateGrammarSwitcher('polarity', 'negative')" class="flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${this.grammarState.polarity === 'negative' ? 'bg-rose-600 text-white shadow' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}">
                  ❌ Inkor (-)
                </button>
              </div>
            </div>
          </div>

          <div id="live-grammar-display" class="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center flex flex-col items-center justify-center min-h-[140px]">
          </div>

          <div id="live-grammar-explainer" class="mt-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300">
          </div>
        </div>
      `;
      this.updateGrammarDisplay();
    } else if (gi.type === 'phonics-toggle' || gi.pairs) {
      // Clean, simple and intuitive Minimal Pairs comparison cards
      const pairs = gi.pairs || [];
      container.innerHTML = `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8">
          <div class="mb-6">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
              Oddiy va Tushunarli Tovushlar Farqi
            </span>
            <h3 class="text-2xl font-black text-slate-900 dark:text-white mt-2">${gi.title}</h3>
            <p class="text-sm text-slate-500 mt-1">${gi.description}</p>
          </div>

          <div class="space-y-4">
            ${pairs.map(p => {
              // Support both structured and raw string formats
              let w1 = p.word1, u1 = p.uz1, e1 = p.emoji1, g1 = p.guide1;
              let w2 = p.word2, u2 = p.uz2, e2 = p.emoji2, g2 = p.guide2;
              let contrast = p.contrast || 'Tovushlar farqi';

              if (!w1 && p.wordA) {
                const parseItem = (str) => {
                  const w = str.split('/')[0].split('(')[0].split('[')[0].trim();
                  const uzM = str.match(/\((.*?)\)/);
                  const u = uzM ? uzM[1].replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}]/gu, '').trim() : '';
                  const gM = str.match(/\[(.*?)\]/);
                  const g = gM ? gM[1].trim() : '';
                  const eM = str.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}]/u);
                  const e = eM ? eM[0] : '🔊';
                  return { w, u, g, e };
                };
                const parsedA = parseItem(p.wordA);
                const parsedB = parseItem(p.wordB);
                w1 = parsedA.w; u1 = parsedA.u; e1 = parsedA.e; g1 = parsedA.g;
                w2 = parsedB.w; u2 = parsedB.u; e2 = parsedB.e; g2 = parsedB.g;
              }

              return `
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-blue-400 transition-all shadow-sm">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-700/60">
                    <span class="text-xs font-black text-blue-600 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-950/80 px-3 py-1 rounded-full inline-flex items-center gap-1.5 w-fit">
                      <i class="fa-solid fa-code-compare"></i> ${contrast}
                    </span>
                    <button onclick="window.app.pronouncePair('${w1}', '${w2}')" class="px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center gap-1.5 transition-all w-fit">
                      <i class="fa-solid fa-headphones"></i> Ikkalasini ketma-ket eshitish
                    </button>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <!-- Word 1 Card -->
                    <div class="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-sm">
                      <div class="flex items-center gap-3">
                        <span class="text-3xl select-none">${e1 || '🔊'}</span>
                        <div>
                          <div class="text-xl font-black text-slate-900 dark:text-white">${w1}</div>
                          <div class="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">${u1}</div>
                          <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">${g1 || ''}</div>
                        </div>
                      </div>
                      <button onclick="window.app.pronounceText('${w1}', this)" class="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/40 hover:bg-blue-600 hover:text-white text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm transition-all shadow-sm active:scale-95" title="Faqat ${w1} ni eshitish">
                        <i class="fa-solid fa-volume-high"></i>
                      </button>
                    </div>

                    <!-- Word 2 Card -->
                    <div class="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-sm">
                      <div class="flex items-center gap-3">
                        <span class="text-3xl select-none">${e2 || '🔊'}</span>
                        <div>
                          <div class="text-xl font-black text-slate-900 dark:text-white">${w2}</div>
                          <div class="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">${u2}</div>
                          <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">${g2 || ''}</div>
                        </div>
                      </div>
                      <button onclick="window.app.pronounceText('${w2}', this)" class="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/40 hover:bg-blue-600 hover:text-white text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm transition-all shadow-sm active:scale-95" title="Faqat ${w2} ni eshitish">
                        <i class="fa-solid fa-volume-high"></i>
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    } else {
      const items = gi.clocks || gi.verbs || gi.items || gi.levels || gi.shifts || gi.phrases || gi.examples || gi.stories || gi.ladders || gi.timeline || [];
      container.innerHTML = `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${gi.title}</h3>
          <p class="text-sm text-slate-500 mb-6">${gi.description}</p>

          <div class="space-y-3">
            ${items.map(item => {
              const primary = item.wordA || item.time || item.present || item.item || item.phrase || item.base || item.inverted || item.idiom || item.name || item.sentence;
              const secondary = item.wordB || item.situation || item.past || item.purpose || item.tone || item.result || item.standard || item.context || item.formula || item.detail;
              const extra = item.contrast || item.greeting || item.type || item.rating || item.rule || item.reality || item.anchor;

              return `
                <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span class="font-bold text-slate-900 dark:text-white text-base">${primary}</span>
                    ${secondary ? `<span class="text-slate-500 dark:text-slate-400 text-sm ml-2">➜ ${secondary}</span>` : ''}
                  </div>
                  <div class="flex items-center gap-3">
                    ${extra ? `<span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">${extra}</span>` : ''}
                    <button onclick="window.app.pronounceText('${(primary || '').replace(/'/g, "\\'")}', this)" class="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-blue-500 hover:text-white text-slate-600 dark:text-slate-300 transition-colors flex items-center justify-center text-xs">
                      <i class="fa-solid fa-volume-high"></i>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
  }

  updateGrammarSwitcher(key, value) {
    this.grammarState[key] = value;
    window.soundEngine.playClick();
    this.renderGrammarTab(CURRICULUM_DATA.modules[this.currentModuleId]);
  }

  updateGrammarDisplay() {
    const display = document.getElementById('live-grammar-display');
    const explainer = document.getElementById('live-grammar-explainer');
    if (!display) return;

    const { subject, aspect, polarity } = this.grammarState;
    const isThird = ['He', 'She'].includes(subject);

    let verbPart = '';
    let auxiliary = '';
    let timeSignal = '';
    let explanationText = '';
    let uzTranslation = '';

    if (aspect === 'routine') {
      timeSignal = 'every morning';
      if (polarity === 'positive') {
        verbPart = isThird ? 'eats' : 'eat';
        auxiliary = '';
        explanationText = isThird
          ? `Qoida: 3-shaxs birlik (${subject}) da fe’lga "-s" qo‘shiladi: "eat" ➜ "eats".`
          : `Qoida: Boshqa shaxslar (${subject}) uchun fe’l o‘zgarishsiz qoladi: "eat".`;
        uzTranslation = `${subject === 'He' || subject === 'She' ? 'U' : subject === 'I' ? 'Men' : subject} har kuni ertalab nonushta qiladi.`;
      } else {
        auxiliary = isThird ? "doesn't" : "don't";
        verbPart = 'eat';
        explanationText = isThird
          ? `Qoida: Inkor shaklida "doesn't" keladi va fe’ldagi -s tushib qoladi ("doesn't eat").`
          : `Qoida: Inkor shaklida "don't" + oddiy fe’l "eat" ishlatiladi.`;
        uzTranslation = `${subject === 'He' || subject === 'She' ? 'U' : subject === 'I' ? 'Men' : subject} har kuni ertalab nonushta qilmaydi.`;
      }
    } else {
      timeSignal = 'right now';
      if (subject === 'I') auxiliary = polarity === 'positive' ? 'am' : 'am not';
      else if (isThird) auxiliary = polarity === 'positive' ? 'is' : "isn't";
      else auxiliary = polarity === 'positive' ? 'are' : "aren't";

      verbPart = 'eating';
      explanationText = `Qoida: Ayni damda bo‘layotgan ish-harakat uchun To Be (${auxiliary}) + Fe’l-ing ("eating") ishlatiladi.`;
      uzTranslation = polarity === 'positive' 
        ? `${subject === 'He' || subject === 'She' ? 'U' : subject === 'I' ? 'Men' : subject} ayni damda nonushta qilyapti.`
        : `${subject === 'He' || subject === 'She' ? 'U' : subject === 'I' ? 'Men' : subject} ayni damda nonushta qilmayapti.`;
    }

    const sentenceHtml = `
      <div class="text-2xl md:text-3xl font-extrabold tracking-wide flex flex-wrap items-center justify-center gap-2">
        <span class="text-purple-400 bg-purple-950/60 px-3 py-1 rounded-xl border border-purple-800">${subject}</span>
        ${auxiliary ? `<span class="text-amber-400 bg-amber-950/60 px-3 py-1 rounded-xl border border-amber-800">${auxiliary}</span>` : ''}
        <span class="text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-xl border border-emerald-800">${verbPart}</span>
        <span class="text-slate-300">breakfast</span>
        <span class="text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-xl border border-cyan-800 text-lg md:text-xl font-medium">${timeSignal}.</span>
      </div>
      <div class="mt-3 text-sm font-bold text-emerald-400">
        ➜ ${uzTranslation}
      </div>
    `;

    display.innerHTML = sentenceHtml;
    if (explainer) {
      explainer.innerHTML = `
        <div class="flex items-center gap-2 font-semibold text-emerald-400 mb-1">
          <i class="fa-solid fa-circle-check"></i> Grammatika formulasi:
        </div>
        <div>${explanationText}</div>
      `;
    }
  }

  pronounceCurrentGrammarSentence() {
    const { subject, aspect, polarity } = this.grammarState;
    const isThird = ['He', 'She'].includes(subject);
    let full = '';

    if (aspect === 'routine') {
      if (polarity === 'positive') {
        full = `${subject} ${isThird ? 'eats' : 'eat'} breakfast every morning.`;
      } else {
        full = `${subject} ${isThird ? "doesn't" : "don't"} eat breakfast every morning.`;
      }
    } else {
      let aux = subject === 'I' ? (polarity === 'positive' ? 'am' : 'am not') :
                isThird ? (polarity === 'positive' ? 'is' : "is not") :
                (polarity === 'positive' ? 'are' : "are not");
      full = `${subject} ${aux} eating breakfast right now.`;
    }

    this.pronounceText(full);
  }

  // 3. CCQs Tab
  renderCCQTab(mod) {
    const container = document.getElementById('ccq-container');
    if (!container) return;

    if (!mod.ccqs || !mod.ccqs.length) {
      container.innerHTML = `<p class="text-slate-500">Bu modulda CCQ mavjud emas.</p>`;
      return;
    }

    const isBilingual = window.appState.state.bilingualMode;

    container.innerHTML = `
      <div class="space-y-6">
        <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs flex items-center gap-3">
          <i class="fa-solid fa-graduation-cap text-lg"></i>
          <div>
            <strong>Concept Checking Questions (CCQs):</strong> Tarjimasiz tushunishni tekshirish uchun qisqa mantiqiy savollar.
          </div>
        </div>

        ${mod.ccqs.map((ccq, qIdx) => `
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm" id="ccq-box-${qIdx}">
            <div class="flex items-start gap-3 mb-4">
              <span class="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs shrink-0">
                ${qIdx + 1}
              </span>
              <div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white">
                  ${ccq.question}
                </h4>
                ${ccq.question_uz && isBilingual ? `
                  <p class="text-xs text-slate-400 mt-0.5">${ccq.question_uz}</p>
                ` : ''}
              </div>
            </div>

            <div class="space-y-2.5">
              ${ccq.options.map((opt, oIdx) => `
                <button onclick="window.app.answerCCQ(${qIdx}, ${oIdx})" class="w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 bg-slate-50 dark:bg-slate-800/40 transition-all font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-center justify-between group" id="ccq-btn-${qIdx}-${oIdx}">
                  <span>${opt.text}</span>
                  <i class="fa-regular fa-circle text-slate-400 group-hover:text-blue-500"></i>
                </button>
              `).join('')}
            </div>

            <div id="ccq-feedback-${qIdx}" class="mt-4 hidden p-3 rounded-xl text-xs font-semibold"></div>
          </div>
        `).join('')}
      </div>
    `;
  }

  answerCCQ(qIdx, oIdx) {
    const mod = CURRICULUM_DATA.modules[this.currentModuleId];
    if (!mod || !mod.ccqs[qIdx]) return;

    const ccq = mod.ccqs[qIdx];
    const opt = ccq.options[oIdx];
    const feedbackEl = document.getElementById(`ccq-feedback-${qIdx}`);

    ccq.options.forEach((o, idx) => {
      const btn = document.getElementById(`ccq-btn-${qIdx}-${idx}`);
      if (!btn) return;
      btn.disabled = true;
      if (o.correct) {
        btn.classList.add('bg-emerald-500/20', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        btn.querySelector('i').className = 'fa-solid fa-circle-check text-emerald-500';
      } else if (idx === oIdx && !o.correct) {
        btn.classList.add('bg-rose-500/20', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        btn.querySelector('i').className = 'fa-solid fa-circle-xmark text-rose-500';
      }
    });

    if (feedbackEl) {
      feedbackEl.classList.remove('hidden');
      if (opt.correct) {
        window.soundEngine.playCorrect();
        window.appState.addXP(10);
        this.renderHeaderStats();
        feedbackEl.className = 'mt-4 p-3 rounded-xl text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800';
        feedbackEl.innerHTML = `<i class="fa-solid fa-check"></i> ${opt.feedback} (+10 XP)`;
      } else {
        window.soundEngine.playIncorrect();
        feedbackEl.className = 'mt-4 p-3 rounded-xl text-xs font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800';
        feedbackEl.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${opt.feedback}`;
      }
    }
  }

  // 4. Quiz Tab
  renderQuizTab(mod) {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    if (!mod.quiz || !mod.quiz.length) {
      container.innerHTML = `<p class="text-slate-500">Bu modul uchun test savollari yo‘q.</p>`;
      return;
    }

    this.quizState.questions = mod.quiz;
    this.quizState.currentIndex = 0;
    this.quizState.score = 0;
    this.quizState.answered = false;

    this.renderCurrentQuizQuestion();
  }

  renderCurrentQuizQuestion() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const q = this.quizState.questions[this.quizState.currentIndex];
    const total = this.quizState.questions.length;
    const progressPercent = Math.round(((this.quizState.currentIndex) / total) * 100);

    container.innerHTML = `
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm">
        <div class="mb-6">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Savol ${this.quizState.currentIndex + 1} / ${total}</span>
            <span>Natija: ${this.quizState.score} / ${this.quizState.currentIndex}</span>
          </div>
          <div class="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
            <div class="h-full bg-blue-600 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
          </div>
          
          <div class="flex items-center justify-between pt-1">
            <span class="text-[11px] font-bold text-slate-400">
              Mavzu bo‘yicha bilimingizni sinang:
            </span>
            <button type="button" onclick="window.app.getSocraticQuizHint()" class="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer">
              <i class="fa-solid fa-lightbulb text-amber-500"></i>
              <span>AI Maslahat (Javobsiz yo‘nalish)</span>
            </button>
          </div>
        </div>

        <!-- Socratic Quiz Hint Box -->
        <div id="quiz-socratic-hint-box" class="hidden mb-5 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-xs text-purple-900 dark:text-purple-200 leading-relaxed shadow-sm"></div>

        <h3 class="text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-6">
          ${q.question}
        </h3>

        <div class="space-y-3 mb-6" id="quiz-options-list">
          ${q.options.map((opt, idx) => `
            <button onclick="window.app.submitQuizAnswer(${idx})" class="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/40 hover:border-blue-500 dark:hover:border-blue-400 font-semibold text-sm text-left text-slate-800 dark:text-slate-200 transition-all flex items-center justify-between group" id="quiz-opt-btn-${idx}">
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-xl bg-slate-200 dark:bg-slate-700 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-xs font-bold transition-colors">
                  ${String.fromCharCode(65 + idx)}
                </span>
                <span>${opt}</span>
              </div>
              <i class="fa-regular fa-circle text-slate-400 group-hover:text-blue-500"></i>
            </button>
          `).join('')}
        </div>

        <div id="quiz-explanation-box" class="hidden p-4 rounded-2xl text-xs font-medium mb-6"></div>

        <div class="flex justify-end">
          <button id="quiz-next-btn" onclick="window.app.nextQuizQuestion()" class="hidden px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors items-center gap-2">
            <span>Keyingi savol</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }

  submitQuizAnswer(chosenIdx) {
    if (this.quizState.answered) return;
    this.quizState.answered = true;

    const q = this.quizState.questions[this.quizState.currentIndex];
    const isCorrect = chosenIdx === q.answer;
    const explanationBox = document.getElementById('quiz-explanation-box');
    const nextBtn = document.getElementById('quiz-next-btn');

    q.options.forEach((opt, idx) => {
      const btn = document.getElementById(`quiz-opt-btn-${idx}`);
      if (!btn) return;
      btn.disabled = true;

      if (idx === q.answer) {
        btn.classList.add('bg-emerald-500/20', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        btn.querySelector('i').className = 'fa-solid fa-circle-check text-emerald-500';
      } else if (idx === chosenIdx && !isCorrect) {
        btn.classList.add('bg-rose-500/20', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        btn.querySelector('i').className = 'fa-solid fa-circle-xmark text-rose-500';
      }
    });

    if (isCorrect) {
      window.soundEngine.playCorrect();
      this.quizState.score += 1;
      window.appState.addXP(25);
      this.renderHeaderStats();
      if (explanationBox) {
        explanationBox.className = 'p-4 rounded-2xl text-xs font-medium mb-6 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300';
        explanationBox.innerHTML = `<strong>To‘g‘ri!</strong> ${q.explanation} (+25 XP)`;
      }
    } else {
      window.soundEngine.playIncorrect();
      if (explanationBox) {
        explanationBox.className = 'p-4 rounded-2xl text-xs font-medium mb-6 bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300';
        explanationBox.innerHTML = `<strong>Izoh:</strong> ${q.explanation}`;
      }
    }

    if (explanationBox) explanationBox.classList.remove('hidden');
    if (nextBtn) {
      nextBtn.classList.remove('hidden');
      nextBtn.classList.add('inline-flex');
      if (this.quizState.currentIndex === this.quizState.questions.length - 1) {
        nextBtn.innerHTML = `<span>Modulni yakunlash</span> <i class="fa-solid fa-flag-checkered"></i>`;
      }
    }
  }

  nextQuizQuestion() {
    this.quizState.currentIndex += 1;
    this.quizState.answered = false;

    if (this.quizState.currentIndex < this.quizState.questions.length) {
      this.renderCurrentQuizQuestion();
    } else {
      this.finishQuiz();
    }
  }

  // ==========================================
  // SOCRATIC AI COACH ENGINE (Yechib bermaydi, yo'nalish beradi)
  // ==========================================
  getSocraticQuizHint() {
    const q = this.quizState.questions[this.quizState.currentIndex];
    if (!q) return;

    const hintBox = document.getElementById('quiz-socratic-hint-box');
    if (!hintBox) return;

    if (!hintBox.classList.contains('hidden')) {
      hintBox.classList.add('hidden');
      return;
    }

    const hintText = q.socraticHint || 'Ushbu savolda gapdagi asosiy ega va zamon ko‘rsatkichlariga diqqat qiling. Variantlardagi har bir so‘zning grammatik vazifasini alohida tahlil qiling.';

    hintBox.innerHTML = `
      <div class="flex items-start gap-2.5">
        <span class="text-base text-purple-600 dark:text-purple-400 mt-0.5">💡</span>
        <div class="space-y-1.5 flex-1">
          <div class="font-black text-xs text-purple-700 dark:text-purple-300 flex items-center justify-between">
            <span>Sokratik Fikrlash Yo‘nalishi (To‘g‘ri javobsiz):</span>
            <span class="text-[10px] text-slate-400 font-normal">O‘ylab ko‘ring 🤔</span>
          </div>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-sans">${hintText}</p>
          <div class="text-[10px] text-purple-600 dark:text-purple-400 font-semibold pt-1 border-t border-purple-200 dark:border-purple-800/40">
            👉 <b>Metod:</b> To‘g‘ri javobni shoshilmasdan, qoidaga asoslanib variantlardan mustaqil topishga harakat qiling!
          </div>
        </div>
      </div>
    `;
    hintBox.classList.remove('hidden');
    if (window.soundEngine) window.soundEngine.playClick();
  }

  getSocraticMatchingGuidance() {
    const select = document.getElementById('practice-module-select');
    const modId = select ? select.value : 'a0-phonics';
    const mod = window.CURRICULUM_DATA?.modules?.[modId] || window.CURRICULUM_DATA?.modules?.['a0-phonics'];

    let guidanceHtml = '';
    if (modId === 'a0-phonics') {
      guidanceHtml = `
        <div class="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs space-y-3">
          <div class="font-black text-purple-700 dark:text-purple-300 text-sm flex items-center gap-2">
            <span>🗣️ Tovushlar va Talaffuz Mantiqi (Qoidalar):</span>
          </div>
          <div class="space-y-2 text-slate-700 dark:text-slate-300">
            <p>• <b>Short /æ/ (Cat):</b> Og‘izni xuddi olma tishlayotgandek pastga katta oching. Bu qisqa, lekin ochiq unli.</p>
            <p>• <b>Long /iː/ (Sheep):</b> Lablar tabassum qilgandek ikki chetga tortiladi va tovush uzoqroq ushlab turiladi (shiiyp).</p>
            <p>• <b>Short /ɪ/ (Ship):</b> Lablar deyarli bo‘sh, qisqa va qattiq aytiladi (ship).</p>
            <p>• <b>Mid /e/ (Bed):</b> Oddiy o‘zbekcha "e" tovushiga yaqin, jag‘ ko‘p tushmaydi.</p>
          </div>
          <div class="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-[11px] font-bold text-purple-800 dark:text-purple-200">
            🎯 <b>Yo‘nalish:</b> Chapdagi so‘zni ovoz chiqarib ayting va labingiz qaysi qoidaga tushayotganini sezib, o‘ng tomondagi mosini tanlang!
          </div>
        </div>
      `;
    } else {
      guidanceHtml = `
        <div class="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs space-y-3">
          <div class="font-black text-purple-700 dark:text-purple-300 text-sm flex items-center gap-2">
            <span>💡 Juftliklarni Topish Mantiqi (${mod ? mod.title : 'Modul'}):</span>
          </div>
          <div class="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>• <b>1-Qadam (So‘z turkumi):</b> Chapdagi so‘z otmi, fe’lmi yoki belgilovchi so‘zmi? O‘ng tomonda uning harakatimi, tavsifimi yoki ma’nosi berilganini aniqlang.</p>
            <p>• <b>2-Qadam (Kontekst):</b> So‘z kundalik hayotda qayerda ishlatilishini tasavvur qiling.</p>
            <p>• <b>3-Qadam (Inkor orqali chiqarish):</b> Birinchi bo‘lib o‘zingiz 100% ishonchi komil bo‘lgan oson juftliklardan boshlang.</p>
          </div>
          <div class="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-[11px] font-bold text-purple-800 dark:text-purple-200">
            🎯 <b>Yo‘nalish:</b> AI siz uchun yechib bermaydi, balki yuqoridagi 3 qadam orqali o‘zingiz to‘g‘ri bog‘lashga harakat qiling!
          </div>
        </div>
      `;
    }

    const inCardBox = document.getElementById('matching-socratic-guidance-box');
    if (inCardBox) {
      if (!inCardBox.classList.contains('hidden')) {
        inCardBox.classList.add('hidden');
      } else {
        inCardBox.innerHTML = guidanceHtml;
        inCardBox.classList.remove('hidden');
      }
    } else {
      this.openSocraticModal('So‘z va Ma’no Juftlash Yo‘riqnomasi', guidanceHtml);
    }

    if (window.soundEngine) window.soundEngine.playClick();
  }

  getSocraticWritingRoadmap() {
    const title = document.getElementById('hw-modal-title')?.textContent || 'Writing Essay';
    const box = document.getElementById('hw-socratic-roadmap-box');
    if (!box) return;

    if (!box.classList.contains('hidden')) {
      box.classList.add('hidden');
      return;
    }

    box.innerHTML = `
      <div class="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-xs space-y-3.5">
        <div class="flex items-center justify-between pb-2 border-b border-purple-500/20">
          <span class="font-black text-purple-300 text-sm">🗺️ Insho Yozish Rejasi & G‘oyalar Yo‘riqnomasi</span>
          <span class="text-[10px] text-amber-400 font-bold">⚠️ Tayyor insho emas, mustaqil fikrlash uchun</span>
        </div>

        <div>
          <div class="font-bold text-white mb-1">📌 1. Standart Insho Tuzilishi (Reja):</div>
          <ul class="space-y-1 text-slate-300 list-disc list-inside">
            <li><b>Introduction (Kirish: 1-2 gap):</b> Mavzuni qisqacha tanishtiring ("Today, I would like to talk about...").</li>
            <li><b>Body Paragraph 1 (Asosiy 1-fikr: 2-3 gap):</b> Asosiy hodisa yoki kundalik odatingizni bayon qiling.</li>
            <li><b>Body Paragraph 2 (Asosiy 2-fikr: 2-3 gap):</b> Unga misol yoki qiziqarli tafsilot qo‘shing ("For example...").</li>
            <li><b>Conclusion (Xulosa: 1-2 gap):</b> O‘z xulosangiz yoki tuyg‘ularingizni yakunlang ("Overall, I really enjoy...").</li>
          </ul>
        </div>

        <div>
          <div class="font-bold text-white mb-1">❓ 2. O‘zingizga Berishingiz Kerak Bo‘lgan 3 Savol:</div>
          <ol class="space-y-1 text-slate-300 list-decimal list-inside">
            <li>Qachon va qayerda sodir bo‘ladi? (When and where does this happen?)</li>
            <li>Nega bu siz uchun muhim yoki qiziq? (Why is this important to you?)</li>
            <li>Odatda siz nima his qilasiz? (How do you usually feel about it?)</li>
          </ol>
        </div>

        <div>
          <div class="font-bold text-white mb-1">💎 3. Ishlatish Tavsiya Etiladigan Bog‘lovchilar (Connectors):</div>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <span class="px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-200 border border-purple-700/60 text-[11px] font-mono">First of all</span>
            <span class="px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-200 border border-purple-700/60 text-[11px] font-mono">In addition</span>
            <span class="px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-200 border border-purple-700/60 text-[11px] font-mono">For instance</span>
            <span class="px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-200 border border-purple-700/60 text-[11px] font-mono">However</span>
            <span class="px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-200 border border-purple-700/60 text-[11px] font-mono">In my opinion</span>
            <span class="px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-200 border border-purple-700/60 text-[11px] font-mono">To sum up</span>
          </div>
        </div>

        <div class="pt-2 border-t border-purple-500/20 text-[11px] text-emerald-400 font-bold">
          ✍️ Endi ushbu reja va savollarga tayanib, o‘z fikrlaringizni mustaqil ravishda quyidagi maydonga yozing!
        </div>
      </div>
    `;
    box.classList.remove('hidden');
    if (window.soundEngine) window.soundEngine.playCorrect();
  }

  openSocraticModal(title, htmlContent) {
    const modal = document.getElementById('socratic-guidance-modal');
    const titleEl = document.getElementById('socratic-modal-title');
    const bodyEl = document.getElementById('socratic-modal-body');
    if (!modal) return;

    if (titleEl) titleEl.textContent = title;
    if (bodyEl) bodyEl.innerHTML = htmlContent;
    modal.classList.remove('hidden');
  }

  finishQuiz() {
    const total = this.quizState.questions.length;
    const scorePct = Math.round((this.quizState.score / total) * 100);
    window.appState.completeLesson(this.currentModuleId, scorePct);
    this.renderHeaderStats();

    if (scorePct === 100) {
      window.soundEngine.playFanfare();
      this.triggerConfetti();
    } else {
      window.soundEngine.playCorrect();
    }

    const container = document.getElementById('quiz-container');
    if (!container) return;

    container.innerHTML = `
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center shadow-lg">
        <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center text-4xl mb-4 shadow-lg shadow-emerald-500/30">
          🏆
        </div>
        <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white">Modul muvaffaqiyatli topshirildi!</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Sizning o‘zlashtirish ko‘rsatkichingiz:</p>
        
        <div class="my-6">
          <span class="text-5xl font-black text-emerald-600 dark:text-emerald-400">${scorePct}%</span>
          <p class="text-xs font-semibold text-slate-400 mt-1">${this.quizState.score} / ${total} ta to‘g‘ri javob</p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onclick="window.app.promptLessonComprehension('${this.currentModuleId}')" class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2">
            <i class="fa-solid fa-star"></i> Mavzuni Baholash (Tushundimmi?)
          </button>
          <button onclick="window.app.switchView('curriculum')" class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors">
            <i class="fa-solid fa-map"></i> Xaritaga qaytish
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // VIEW: GAMIFIED PRACTICE & MATCHING ARENA
  // ==========================================
  renderPracticeHub(moduleId) {
    const mod = CURRICULUM_DATA.modules[moduleId] || CURRICULUM_DATA.modules['a0-phonics'];
    this.currentModuleId = mod.id;

    const selectEl = document.getElementById('practice-module-select');
    if (selectEl) {
      selectEl.innerHTML = Object.values(CURRICULUM_DATA.modules).map(m => `
        <option value="${m.id}" ${m.id === mod.id ? 'selected' : ''}>${m.title}</option>
      `).join('');
      selectEl.onchange = (e) => {
        this.renderPracticeHub(e.target.value);
      };
    }

    this.initMatchingGame(mod);
    this.initFillInBlankGame(mod);
  }

  initMatchingGame(mod) {
    const pairs = mod.matching || [
      { left: 'Pen', right: 'Writes with ink' },
      { left: 'Clock', right: 'Shows the time' },
      { left: 'Key', right: 'Unlocks doors' }
    ];

    this.matchingState.totalPairs = pairs.length;
    this.matchingState.matchedPairs = 0;
    this.matchingState.moves = 0;
    this.matchingState.selectedLeft = null;
    this.matchingState.selectedRight = null;

    const leftItems = pairs.map((p, idx) => ({ id: idx, text: p.left })).sort(() => Math.random() - 0.5);
    const rightItems = pairs.map((p, idx) => ({ id: idx, text: p.right })).sort(() => Math.random() - 0.5);

    const leftCol = document.getElementById('match-col-left');
    const rightCol = document.getElementById('match-col-right');
    const statusText = document.getElementById('match-status-text');

    if (statusText) statusText.textContent = `0 / ${pairs.length} Topildi`;

    if (leftCol && rightCol) {
      leftCol.innerHTML = leftItems.map(item => `
        <div onclick="window.app.handleMatchClick('left', ${item.id}, this)" class="match-tile p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-sm flex items-center justify-between" data-id="${item.id}">
          <span>${item.text}</span>
          <i class="fa-solid fa-arrow-right text-xs text-slate-400"></i>
        </div>
      `).join('');

      rightCol.innerHTML = rightItems.map(item => `
        <div onclick="window.app.handleMatchClick('right', ${item.id}, this)" class="match-tile p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-medium text-xs sm:text-sm shadow-sm flex items-center justify-between" data-id="${item.id}">
          <span>${item.text}</span>
          <i class="fa-regular fa-square-check text-xs text-slate-400"></i>
        </div>
      `).join('');
    }
  }

  handleMatchClick(side, id, element) {
    if (element.classList.contains('matched')) return;

    window.soundEngine.playClick();

    if (side === 'left') {
      document.querySelectorAll('#match-col-left .match-tile').forEach(el => el.classList.remove('selected'));
      element.classList.add('selected');
      this.matchingState.selectedLeft = { id, element };
    } else {
      document.querySelectorAll('#match-col-right .match-tile').forEach(el => el.classList.remove('selected'));
      element.classList.add('selected');
      this.matchingState.selectedRight = { id, element };
    }

    if (this.matchingState.selectedLeft && this.matchingState.selectedRight) {
      this.matchingState.moves += 1;
      const leftObj = this.matchingState.selectedLeft;
      const rightObj = this.matchingState.selectedRight;

      if (leftObj.id === rightObj.id) {
        window.soundEngine.playCorrect();
        leftObj.element.classList.remove('selected');
        rightObj.element.classList.remove('selected');
        leftObj.element.classList.add('matched');
        rightObj.element.classList.add('matched');

        this.matchingState.matchedPairs += 1;
        const statusText = document.getElementById('match-status-text');
        if (statusText) {
          statusText.textContent = `${this.matchingState.matchedPairs} / ${this.matchingState.totalPairs} Topildi`;
        }

        if (this.matchingState.matchedPairs === this.matchingState.totalPairs) {
          window.soundEngine.playFanfare();
          this.triggerConfetti();
          window.appState.addXP(40);
          this.renderHeaderStats();
          if (statusText) {
            statusText.textContent = `🎉 Ajoyib! Hammasi topildi (+40 XP)`;
          }
        }
      } else {
        window.soundEngine.playIncorrect();
        leftObj.element.classList.add('wrong');
        rightObj.element.classList.add('wrong');
        setTimeout(() => {
          leftObj.element.classList.remove('selected', 'wrong');
          rightObj.element.classList.remove('selected', 'wrong');
        }, 500);
      }

      this.matchingState.selectedLeft = null;
      this.matchingState.selectedRight = null;
    }
  }

  initFillInBlankGame(mod) {
    const container = document.getElementById('fill-blank-container');
    if (!container) return;

    const data = mod.fillBlank || {
      sentence: 'The English immersion program is ___ effective.',
      options: ['highly', 'water', 'slow'],
      correct: 'highly',
      explanation: 'Immersion tez o‘rganishga yordam beradi.'
    };

    container.innerHTML = `
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">Bo‘sh joyni to‘ldiring (Fill in the Blank):</h4>
        <p class="text-lg font-medium text-slate-700 dark:text-slate-300 mb-6 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
          "${data.sentence.replace('___', '<span id="fill-blank-slot" class="px-3 py-1 mx-1 rounded-lg border-2 border-dashed border-blue-500 font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40">______</span>')}"
        </p>

        <div class="flex flex-wrap gap-3 mb-4">
          ${data.options.map(opt => `
            <button onclick="window.app.submitFillBlank('${opt}', '${data.correct}', '${data.explanation}')" class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-500 font-bold text-sm text-slate-800 dark:text-slate-200 shadow-sm transition-all">
              ${opt}
            </button>
          `).join('')}
        </div>

        <div id="fill-blank-feedback" class="hidden p-3 rounded-xl text-xs font-semibold"></div>
      </div>
    `;
  }

  submitFillBlank(selected, correct, explanation) {
    const slot = document.getElementById('fill-blank-slot');
    const feedback = document.getElementById('fill-blank-feedback');
    if (slot) slot.textContent = selected;

    if (feedback) {
      feedback.classList.remove('hidden');
      if (selected.toLowerCase() === correct.toLowerCase()) {
        window.soundEngine.playCorrect();
        window.appState.addXP(15);
        this.renderHeaderStats();
        feedback.className = 'p-3 rounded-xl text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800';
        feedback.innerHTML = `<i class="fa-solid fa-check"></i> Barakalla! ${explanation} (+15 XP)`;
      } else {
        window.soundEngine.playIncorrect();
        feedback.className = 'p-3 rounded-xl text-xs font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800';
        feedback.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Noto‘g‘ri. Boshqa variantni tanlang!`;
      }
    }
  }

  // ==========================================
  // VIEW: SPEAKING / WARM-UP WHEEL
  // ==========================================
  initWheel() {
    this.wheelCanvas = document.getElementById('speaking-wheel-canvas');
    if (!this.wheelCanvas) return;
    this.wheelCtx = this.wheelCanvas.getContext('2d');
    this.drawWheel();
  }

  renderSpeakingWheel() {
    this.drawWheel();
  }

  drawWheel() {
    if (!this.wheelCanvas || !this.wheelCtx) return;

    const ctx = this.wheelCtx;
    const width = this.wheelCanvas.width;
    const height = this.wheelCanvas.height;
    const radius = width / 2;
    const prompts = CURRICULUM_DATA.speakingWheelPrompts;
    const sliceAngle = (2 * Math.PI) / prompts.length;

    const colors = [
      '#ef4444', '#f97316', '#f59e0b', '#10b981', '#06b6d4', '#3b82f6',
      '#6366f1', '#8b5cf6', '#d946ef', '#ec4899'
    ];

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(this.wheelRotation);

    prompts.forEach((prompt, idx) => {
      const angle = idx * sliceAngle;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius - 8, angle, angle + sliceAngle);
      ctx.fillStyle = colors[idx % colors.length];
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.save();
      ctx.rotate(angle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px Plus Jakarta Sans, sans-serif';
      ctx.fillText(prompt.icon + ' ' + prompt.level, radius - 28, 5);
      ctx.restore();
    });

    ctx.beginPath();
    ctx.arc(0, 0, 36, 0, 2 * Math.PI);
    ctx.fillStyle = '#1e293b';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 13px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AYLANTIR', 0, 0);

    ctx.restore();
  }

  spinWheel() {
    if (this.isSpinning) return;
    this.isSpinning = true;

    const spinBtn = document.getElementById('wheel-spin-btn');
    if (spinBtn) spinBtn.disabled = true;

    const prompts = CURRICULUM_DATA.speakingWheelPrompts;
    const numSlices = prompts.length;
    const sliceAngle = (2 * Math.PI) / numSlices;
    
    const randomExtra = Math.random() * 2 * Math.PI;
    const totalRotation = (Math.PI * 2 * 6) + randomExtra;
    const duration = 4000;
    const startTime = performance.now();
    const initialRotation = this.wheelRotation;

    let lastTickSlice = -1;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);

      const ease = 1 - Math.pow(1 - progress, 3);
      this.wheelRotation = initialRotation + (totalRotation * ease);
      this.drawWheel();

      const currentNormalized = (this.wheelRotation % (2 * Math.PI));
      const currentSlice = Math.floor(currentNormalized / sliceAngle);
      if (currentSlice !== lastTickSlice) {
        lastTickSlice = currentSlice;
        window.soundEngine.playTick();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.isSpinning = false;
        if (spinBtn) spinBtn.disabled = false;
        this.onWheelSpinComplete();
      }
    };

    requestAnimationFrame(animate);
  }

  onWheelSpinComplete() {
    const prompts = CURRICULUM_DATA.speakingWheelPrompts;
    const numSlices = prompts.length;
    const sliceAngle = (2 * Math.PI) / numSlices;

    const normalized = (this.wheelRotation) % (2 * Math.PI);
    const pointerAngle = (3 * Math.PI / 2 - normalized + 4 * Math.PI) % (2 * Math.PI);
    const winningIdx = Math.floor(pointerAngle / sliceAngle) % numSlices;

    const winningPrompt = prompts[winningIdx];
    window.soundEngine.playCorrect();
    this.showSpeakingPromptModal(winningPrompt);
  }

  showSpeakingPromptModal(prompt) {
    const modal = document.getElementById('speaking-modal');
    const textEl = document.getElementById('speaking-modal-text');
    const badgeEl = document.getElementById('speaking-modal-badge');
    const timerEl = document.getElementById('speaking-modal-timer');

    if (!modal) return;
    if (textEl) textEl.textContent = prompt.text;
    if (badgeEl) badgeEl.textContent = `${prompt.icon} Daraja: ${prompt.level}`;

    this.pronounceText(prompt.text);

    this.speakingTimeLeft = 60;
    if (timerEl) timerEl.textContent = `${this.speakingTimeLeft}s`;
    clearInterval(this.speakingTimerInterval);

    this.speakingTimerInterval = setInterval(() => {
      this.speakingTimeLeft -= 1;
      if (timerEl) timerEl.textContent = `${this.speakingTimeLeft}s`;
      if (this.speakingTimeLeft <= 0) {
        clearInterval(this.speakingTimerInterval);
        window.soundEngine.playFanfare();
        window.appState.addXP(30);
        this.renderHeaderStats();
      }
    }, 1000);

    modal.classList.remove('hidden');
  }

  closeSpeakingModal() {
    const modal = document.getElementById('speaking-modal');
    if (modal) modal.classList.add('hidden');
    clearInterval(this.speakingTimerInterval);
  }

  // ==========================================
  // VIEW: USER PROFILE
  // ==========================================
  renderProfileDashboard() {
    const overall = window.appState.getOverallProgress(16);
    const overallVal = document.getElementById('profile-overall-pct');
    const overallBar = document.getElementById('profile-overall-bar');
    const xpVal = document.getElementById('profile-xp-val');
    const streakVal = document.getElementById('profile-streak-val');
    const modulesVal = document.getElementById('profile-modules-val');
    const badgesContainer = document.getElementById('profile-badges-grid');

    if (overallVal) overallVal.textContent = `${overall}%`;
    if (overallBar) overallBar.style.width = `${overall}%`;
    if (xpVal) xpVal.textContent = window.appState.state.xp;
    if (streakVal) streakVal.textContent = `${window.appState.state.streak} Kun`;
    if (modulesVal) modulesVal.textContent = `${(window.appState.state.completedLessons || []).length} / 16`;

    if (badgesContainer) {
      badgesContainer.innerHTML = (window.appState.state.badges || []).map(b => `
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <span class="text-3xl">${b.icon}</span>
          <div>
            <h4 class="font-bold text-slate-900 dark:text-white text-sm">${b.title}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${b.description}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // ==========================================
  // TEACHER MODE & PRESENTATION
  // ==========================================
  togglePresenterMode() {
    this.isPresenterMode = !this.isPresenterMode;
    const body = document.body;
    const overlay = document.getElementById('presenter-overlay');

    if (this.isPresenterMode) {
      body.classList.add('presenter-active');
      if (overlay) overlay.classList.remove('hidden');
      if (!this.canvasPainter) {
        this.canvasPainter = new CanvasPainter('presenter-canvas');
      } else {
        this.canvasPainter.initCanvasSize();
      }
      this.renderPresenterCard();
    } else {
      body.classList.remove('presenter-active');
      if (overlay) overlay.classList.add('hidden');
    }
  }

  renderPresenterCard() {
    const mod = CURRICULUM_DATA.modules[this.currentModuleId] || CURRICULUM_DATA.modules['a0-phonics'];
    const cardEl = document.getElementById('presenter-card-display');
    if (!cardEl) return;

    const card = (mod.flashcards && mod.flashcards[0]) || {
      word: mod.title,
      phonetic: '/.../',
      meaning: mod.description,
      visual: '💡',
      example: 'Immersion builds fluent reflexes.'
    };

    cardEl.innerHTML = `
      <div class="text-center p-8">
        <span class="text-8xl block mb-6 animate-float">${card.visual}</span>
        <h2 class="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-2">${card.word}</h2>
        <span class="text-sm font-mono font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">${card.phonetic}</span>
        <p class="text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-xl mx-auto font-medium">${card.meaning}</p>
        <div class="mt-8 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-lg max-w-lg mx-auto">
          "${card.example}"
        </div>
      </div>
    `;
  }

  updateTeacherNotes(mod) {
    const elicitationEl = document.getElementById('teacher-elicitation');
    const mistakeEl = document.getElementById('teacher-mistake');
    const ccqEl = document.getElementById('teacher-ccq');

    if (mod.teacherNotes) {
      if (elicitationEl) elicitationEl.textContent = mod.teacherNotes.elicitation;
      if (mistakeEl) mistakeEl.textContent = mod.teacherNotes.commonMistake;
      if (ccqEl) ccqEl.textContent = mod.teacherNotes.quickCcq;
    }
  }

  toggleTeacherDrawer() {
    this.isTeacherDrawerOpen = !this.isTeacherDrawerOpen;
    const drawer = document.getElementById('teacher-drawer');
    if (!drawer) return;

    if (this.isTeacherDrawerOpen) {
      drawer.classList.remove('translate-x-full');
    } else {
      drawer.classList.add('translate-x-full');
    }
    window.soundEngine.playClick();
  }

  // ==========================================
  // CONFETTI CELEBRATION ENGINE
  // ==========================================
  triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.classList.remove('hidden');

    const particles = [];
    const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 20,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        gravity: 0.35,
        opacity: 1
      });
    }

    let frame = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vRot;
        p.opacity -= 0.008;

        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      frame++;
      if (alive && frame < 180) {
        requestAnimationFrame(render);
      } else {
        canvas.classList.add('hidden');
      }
    };

    render();
  }

  // ==========================================
  // VIEW: HOMEWORK (UY VAZIFALARI)
  // ==========================================
  filterHomeworks(cat) {
    this.hwFilter = cat;
    document.querySelectorAll('.hw-filter-btn').forEach(btn => {
      btn.className = 'hw-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all';
    });
    if (window.event && window.event.target) {
      window.event.target.className = 'hw-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white transition-all';
    }
    this.renderHomeworkList();
  }

  renderHomeworkList() {
    const list = window.appState.homeworks || [];
    const container = document.getElementById('homework-cards-grid');
    const badge = document.getElementById('hw-nav-badge');
    const createBtn = document.getElementById('btn-admin-create-hw');
    const user = window.appState.currentUser;
    const isAdmin = user && user.role === 'admin';

    if (createBtn) {
      if (isAdmin) createBtn.classList.remove('hidden');
      else createBtn.classList.add('hidden');
    }

    // Filter by target audience:
    // Admin sees all
    // Student sees 'all' + tasks assigned to this student
    // Guest sees 'all'
    const availableForUser = isAdmin
      ? list
      : list.filter(h => !h.assignedTo || h.assignedTo === 'all' || (user && h.assignedTo === user.id));

    if (badge) {
      if (isAdmin) {
        badge.textContent = `${list.length} ta`;
      } else {
        const pendingCount = availableForUser.filter(h => {
          const sub = (h.submissions || []).find(s => user && s.studentId === user.id);
          return !sub || sub.status !== 'graded';
        }).length;
        badge.textContent = `${pendingCount} ta vazifa`;
      }
    }

    if (!container) return;

    const filtered = (this.hwFilter && this.hwFilter !== 'all')
      ? availableForUser.filter(h => h.type === this.hwFilter)
      : availableForUser;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-400">
          <span class="text-4xl block mb-2">📭</span>
          <div class="font-bold text-sm">Hozircha sizga berilgan vazifalar yo‘q.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(hw => {
      const typeIcons = {
        writing: '✍️',
        grammar: '⚡',
        vocabulary: '📖',
        speaking: '🗣️',
        reading: '📚',
        listening: '🎧',
        mixed: '🌟'
      };
      const icon = typeIcons[hw.type] || '📝';

      let userSub = null;
      if (user && user.role === 'student') {
        userSub = (hw.submissions || []).find(s => s.studentId === user.id);
      }

      const submissionCount = (hw.submissions || []).length;
      const isPersonal = hw.assignedTo && hw.assignedTo !== 'all';

      return `
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border ${isPersonal && !isAdmin ? 'border-purple-300 dark:border-purple-800 ring-2 ring-purple-500/20' : 'border-slate-200 dark:border-slate-800'} shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3 flex-wrap">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 flex items-center gap-1">
                  <span>${icon}</span> ${hw.categoryName}
                </span>
                ${isPersonal ? `
                  <span class="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 flex items-center gap-1">
                    🎯 ${isAdmin ? `Shaxsiy: ${hw.assignedToName || 'O‘quvchiga'}` : 'Maxsus Sizga'}
                  </span>
                ` : `
                  <span class="px-2 py-0.5 rounded-lg text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800">
                    👥 Umumiy
                  </span>
                `}
              </div>
              <span class="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                <i class="fa-regular fa-calendar"></i> ${hw.dueDate} gacha
              </span>
            </div>

            <h3 class="font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">
              ${hw.title}
            </h3>

            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
              ${hw.prompt}
            </p>

            ${hw.instructions ? `
              <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 mb-4">
                💡 <b>Ko‘rsatma:</b> ${hw.instructions}
              </div>
            ` : ''}
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            ${isAdmin ? `
              <div class="flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400 mb-1">
                <span class="flex items-center gap-1">
                  <span>Topshirganlar: ${submissionCount} ta</span>
                  ${submissionCount > 0 && hw.submissions.some(s => s.imageDataUrl) ? '<span title="Daftar rasmi bor" class="px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px]">📸 Rasm</span>' : ''}
                  ${submissionCount > 0 && hw.submissions.some(s => s.audioDataUrl) ? '<span title="Audio nutq bor" class="px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-[10px]">🎙️ Audio</span>' : ''}
                </span>
                <span class="text-slate-400 text-[11px]">Max: ${hw.maxScore} ball</span>
              </div>
              <div class="flex items-center gap-2">
                ${submissionCount > 0 ? `
                  <button onclick="window.app.openGradeHomeworkModal('${hw.id}', '${hw.submissions[0].studentId}')" class="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                    <i class="fa-solid fa-clipboard-check"></i> Tekshirish & Baholash
                  </button>
                ` : `
                  <div class="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold text-xs text-center">
                    Topshirilmagan
                  </div>
                `}
                <button type="button" onclick="window.app.deleteHomework('${hw.id}')" class="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-600 text-rose-500 hover:text-white border border-rose-200 dark:border-rose-900/40 flex items-center justify-center text-xs transition-colors cursor-pointer" title="Vazifani o‘chirish">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            ` : `
              ${userSub ? `
                <div class="p-3 rounded-2xl ${userSub.status === 'graded' ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800' : 'bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800'} text-xs">
                  <div class="flex items-center justify-between font-bold mb-1">
                    <span class="${userSub.status === 'graded' ? 'text-emerald-700 dark:text-emerald-300' : 'text-amber-700 dark:text-amber-300'}">
                      ${userSub.status === 'graded' ? `✅ Baholandi: ${userSub.grade} / ${hw.maxScore}` : '⏳ Tekshirilmoqda'}
                    </span>
                    <span class="text-[10px] text-slate-400">${userSub.submittedAt}</span>
                  </div>
                  ${userSub.imageDataUrl ? `
                    <div class="mt-1 flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      <i class="fa-solid fa-camera"></i> <span>Daftar rasmi biriktirilgan</span>
                    </div>
                  ` : ''}
                  ${userSub.audioDataUrl ? `
                    <div class="mt-1 flex items-center gap-1.5 text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
                      <i class="fa-solid fa-microphone"></i> <span>Ovozli nutq yozilgan</span>
                    </div>
                  ` : ''}
                  ${userSub.teacherFeedback ? `
                    <div class="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                      <b>O‘qituvchi fikri:</b> ${userSub.teacherFeedback}
                    </div>
                  ` : ''}
                </div>
                <button onclick="window.app.openHomeworkSubmitModal('${hw.id}')" class="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors">
                  Qayta Tahrirlash / Ko‘rish
                </button>
              ` : `
                <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Ball: <b>${hw.maxScore}</b></span>
                  <span>Muddati: <b>${hw.dueDate}</b></span>
                </div>
                <button onclick="window.app.openHomeworkSubmitModal('${hw.id}')" class="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5">
                  <i class="fa-solid fa-pen"></i> Bajarish & Topshirish
                </button>
              `}
            `}
          </div>
        </div>
      `;
    }).join('');
  }

  openHomeworkSubmitModal(hwId) {
    const hw = (window.appState.homeworks || []).find(h => h.id === hwId);
    if (!hw) return;

    const modal = document.getElementById('homework-submit-modal');
    if (!modal) return;

    document.getElementById('hw-submit-id').value = hw.id;
    document.getElementById('hw-modal-title').textContent = hw.title;
    document.getElementById('hw-modal-badge').textContent = hw.categoryName;
    document.getElementById('hw-modal-prompt').textContent = hw.prompt;
    document.getElementById('hw-modal-instructions').textContent = hw.instructions ? `💡 Ko‘rsatma: ${hw.instructions}` : '';

    const textarea = document.getElementById('hw-submit-content');
    const label = document.getElementById('hw-submit-label');
    const recorderBox = document.getElementById('hw-speaking-recorder-box');
    const user = window.appState.currentUser;
    const existing = (hw.submissions || []).find(s => user && s.studentId === user.id);

    this.speakingAudioDataUrl = existing && existing.audioDataUrl ? existing.audioDataUrl : null;
    this.writingImageDataUrl = existing && existing.imageDataUrl ? existing.imageDataUrl : null;

    // Setup Notebook Photo Preview
    const previewWrap = document.getElementById('hw-notebook-preview-wrap');
    const imgPreview = document.getElementById('hw-notebook-img-preview');
    const filenameEl = document.getElementById('hw-notebook-filename');
    const fileInput = document.getElementById('hw-notebook-file-input');
    if (fileInput) fileInput.value = '';

    if (this.writingImageDataUrl) {
      if (imgPreview) imgPreview.src = this.writingImageDataUrl;
      if (filenameEl) filenameEl.textContent = 'Yuklangan daftar rasmi';
      if (previewWrap) previewWrap.classList.remove('hidden');
    } else {
      if (previewWrap) previewWrap.classList.add('hidden');
      if (imgPreview) imgPreview.src = '';
    }

    if (hw.type === 'speaking') {
      if (recorderBox) recorderBox.classList.remove('hidden');
      if (label) label.textContent = 'Nutq transkripsiyasi yoki izohingiz (Ixtiyoriy):';
      if (textarea) textarea.placeholder = 'Nutqingizning qisqacha matni yoki tushuntirish...';
      this.updateSpeakingRecorderUI();
    } else {
      if (recorderBox) recorderBox.classList.add('hidden');
      if (label) label.textContent = 'Sizning Javobingiz / Insho:';
      if (textarea) textarea.placeholder = 'Vazifa javobini yoki inshoni shu yerga batafsil yozing...';
    }

    if (existing) {
      textarea.value = existing.content || '';
      this.updateHwStats(existing.content || '');
    } else {
      textarea.value = '';
      this.updateHwStats('');
    }

    modal.classList.remove('hidden');
  }

  closeHomeworkSubmitModal() {
    this.stopSpeakingRecording();
    this.removeNotebookPhoto();
    const modal = document.getElementById('homework-submit-modal');
    if (modal) modal.classList.add('hidden');
  }

  // ==========================================
  // SPEAKING HOMEWORK VOICE RECORDER ENGINE
  // ==========================================
  async startSpeakingRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.speakingStream = stream;
      this.speakingChunks = [];
      this.speakingMediaRecorder = new MediaRecorder(stream);

      this.speakingMediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.speakingChunks.push(e.data);
      };

      this.speakingMediaRecorder.onstop = () => {
        const blob = new Blob(this.speakingChunks, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          this.speakingAudioDataUrl = reader.result;
          this.updateSpeakingRecorderUI();
        };
        reader.readAsDataURL(blob);

        if (this.speakingStream) {
          this.speakingStream.getTracks().forEach(t => t.stop());
          this.speakingStream = null;
        }
      };

      this.speakingMediaRecorder.start();
      this.speakingSeconds = 0;

      document.getElementById('btn-start-record')?.classList.add('hidden');
      document.getElementById('btn-stop-record')?.classList.remove('hidden');
      document.getElementById('btn-rerecord')?.classList.add('hidden');
      document.getElementById('speaking-playback-container')?.classList.add('hidden');
      document.getElementById('speaking-record-dot')?.classList.remove('hidden');
      document.getElementById('speaking-record-waveform')?.classList.remove('hidden');
      document.getElementById('speaking-mic-circle')?.classList.add('animate-pulse', 'bg-rose-600');

      if (this.speakingTimerInterval) clearInterval(this.speakingTimerInterval);
      this.speakingTimerInterval = setInterval(() => {
        this.speakingSeconds++;
        const m = String(Math.floor(this.speakingSeconds / 60)).padStart(2, '0');
        const s = String(this.speakingSeconds % 60).padStart(2, '0');
        const timerEl = document.getElementById('speaking-record-timer');
        if (timerEl) timerEl.textContent = `${m}:${s}`;
      }, 1000);

      this.startLiveTranscription();

    } catch (err) {
      alert('Mikrofon ruxsati berilmadi. Iltimos brauzerda mikrofonga ruxsat bering.');
    }
  }

  stopSpeakingRecording() {
    if (this.speakingMediaRecorder && this.speakingMediaRecorder.state !== 'inactive') {
      this.speakingMediaRecorder.stop();
    }
    if (this.speakingTimerInterval) {
      clearInterval(this.speakingTimerInterval);
      this.speakingTimerInterval = null;
    }
    this.stopLiveTranscription();

    document.getElementById('btn-stop-record')?.classList.add('hidden');
    document.getElementById('btn-rerecord')?.classList.remove('hidden');
    document.getElementById('speaking-record-dot')?.classList.add('hidden');
    document.getElementById('speaking-record-waveform')?.classList.add('hidden');
    document.getElementById('speaking-mic-circle')?.classList.remove('animate-pulse', 'bg-rose-600');
  }

  resetSpeakingRecording() {
    this.speakingAudioDataUrl = null;
    this.speakingChunks = [];
    this.speakingSeconds = 0;
    const timerEl = document.getElementById('speaking-record-timer');
    if (timerEl) timerEl.textContent = '00:00';
    document.getElementById('btn-start-record')?.classList.remove('hidden');
    document.getElementById('btn-stop-record')?.classList.add('hidden');
    document.getElementById('btn-rerecord')?.classList.add('hidden');
    document.getElementById('speaking-playback-container')?.classList.add('hidden');
    const preview = document.getElementById('speaking-audio-preview');
    if (preview) preview.src = '';
  }

  updateSpeakingRecorderUI() {
    if (this.speakingAudioDataUrl) {
      document.getElementById('btn-start-record')?.classList.add('hidden');
      document.getElementById('btn-stop-record')?.classList.add('hidden');
      document.getElementById('btn-rerecord')?.classList.remove('hidden');
      const container = document.getElementById('speaking-playback-container');
      const preview = document.getElementById('speaking-audio-preview');
      if (container) container.classList.remove('hidden');
      if (preview) preview.src = this.speakingAudioDataUrl;
    } else {
      this.resetSpeakingRecording();
    }
  }

  startLiveTranscription() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      try {
        this.speechRec = new SpeechRec();
        this.speechRec.continuous = true;
        this.speechRec.interimResults = true;
        this.speechRec.lang = 'en-US';
        this.speechRec.onresult = (ev) => {
          let trans = '';
          for (let i = ev.resultIndex; i < ev.results.length; ++i) {
            trans += ev.results[i][0].transcript;
          }
          const textarea = document.getElementById('hw-submit-content');
          if (textarea && trans.trim()) {
            textarea.value = trans.trim();
            this.updateHwStats(trans.trim());
          }
        };
        this.speechRec.start();
      } catch(e) {}
    }
  }

  stopLiveTranscription() {
    if (this.speechRec) {
      try { this.speechRec.stop(); } catch(e) {}
      this.speechRec = null;
    }
  }

  updateHwStats(text) {
    const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
    const chars = text.length;
    const wEl = document.getElementById('hw-word-count');
    const cEl = document.getElementById('hw-char-count');
    if (wEl) wEl.textContent = words;
    if (cEl) cEl.textContent = chars;
  }

  checkWithAiTutor() {
    const hwId = document.getElementById('hw-submit-id').value;
    const hw = (window.appState.homeworks || []).find(h => h.id === hwId);
    const content = document.getElementById('hw-submit-content').value.trim();

    if (!content && !this.speakingAudioDataUrl) {
      alert('Iltimos, avval matn yozing yoki audio nutqingizni yozib oling!');
      return;
    }

    if (window.groqTutor) {
      window.groqTutor.checkHomeworkSubmission(hw ? hw.title : 'Homework', hw ? hw.type : 'writing', content || 'Student submitted speaking voice recording.');
    }
  }

  handleHomeworkSubmit(e) {
    if (e) e.preventDefault();
    const hwId = document.getElementById('hw-submit-id').value;
    const hw = (window.appState.homeworks || []).find(h => h.id === hwId);
    const content = document.getElementById('hw-submit-content').value.trim();

    if (!content && !this.speakingAudioDataUrl && !this.writingImageDataUrl) {
      if (hw && hw.type === 'speaking') {
        alert('Iltimos, mikrofonga ovozingizni yozib oling!');
      } else {
        alert('Iltimos, javobingizni yozing yoki daftaringiz rasmini yuklang!');
      }
      return;
    }

    const res = window.appState.submitHomework(hwId, content, window.appState.currentUser, this.speakingAudioDataUrl, this.writingImageDataUrl);
    if (res.success) {
      this.closeHomeworkSubmitModal();
      this.renderHomeworkList();
      this.renderHeaderStats();
      if (window.soundEngine) window.soundEngine.playCorrect();
      alert('🎉 Uy vazifasi muvaffaqiyatli topshirildi (+30 XP)! O‘qituvchi tekshirib baho qo‘yadi.');
    } else {
      alert(res.error || 'Xatolik yuz berdi');
    }
  }

  handleNotebookPhotoSelect(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Iltimos, faqat rasm faylini tanlang (JPG, PNG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      this.writingImageDataUrl = event.target.result;
      const previewWrap = document.getElementById('hw-notebook-preview-wrap');
      const imgPreview = document.getElementById('hw-notebook-img-preview');
      const filenameEl = document.getElementById('hw-notebook-filename');

      if (imgPreview) imgPreview.src = this.writingImageDataUrl;
      if (filenameEl) filenameEl.textContent = file.name;
      if (previewWrap) previewWrap.classList.remove('hidden');

      if (window.soundEngine) window.soundEngine.playCorrect();
    };
    reader.readAsDataURL(file);
  }

  removeNotebookPhoto() {
    this.writingImageDataUrl = null;
    const fileInput = document.getElementById('hw-notebook-file-input');
    if (fileInput) fileInput.value = '';
    const previewWrap = document.getElementById('hw-notebook-preview-wrap');
    if (previewWrap) previewWrap.classList.add('hidden');
    const imgPreview = document.getElementById('hw-notebook-img-preview');
    if (imgPreview) imgPreview.src = '';
  }

  openImageLightbox(src) {
    if (!src) return;
    const modal = document.getElementById('image-lightbox-modal');
    const img = document.getElementById('lightbox-modal-img');
    if (modal && img) {
      img.src = src;
      modal.classList.remove('hidden');
    }
  }

  openCreateHomeworkModal() {
    const modal = document.getElementById('create-homework-modal');
    if (!modal) return;
    const select = document.getElementById('new-hw-assigned-to');
    if (select) {
      const students = window.appState.students || [];
      select.innerHTML = `
        <option value="all">👥 Barcha o‘quvchilarga (Umumiy)</option>
        ${students.map(s => `<option value="${s.id}">🎓 ${s.name} (@${s.username} • ${s.level || 'A1'})</option>`).join('')}
      `;
    }
    const dueInput = document.getElementById('new-hw-due');
    if (dueInput && !dueInput.value) {
      const d = new Date(Date.now() + 3 * 86400000);
      dueInput.value = d.toISOString().split('T')[0];
    }
    modal.classList.remove('hidden');
  }

  closeCreateHomeworkModal() {
    const modal = document.getElementById('create-homework-modal');
    if (modal) modal.classList.add('hidden');
  }

  handleCreateHomework(e) {
    if (e) e.preventDefault();
    const type = document.getElementById('new-hw-type').value;
    const title = document.getElementById('new-hw-title').value.trim();
    const prompt = document.getElementById('new-hw-prompt').value.trim();
    const instructions = document.getElementById('new-hw-instructions').value.trim();
    const dueDate = document.getElementById('new-hw-due').value;
    const maxScore = document.getElementById('new-hw-maxscore').value;
    const assignedTo = document.getElementById('new-hw-assigned-to')?.value || 'all';

    window.appState.createHomework({
      type,
      title,
      prompt,
      instructions,
      dueDate,
      maxScore,
      assignedTo
    });

    this.closeCreateHomeworkModal();
    this.renderHomeworkList();
    if (window.soundEngine) window.soundEngine.playCorrect();
    alert('✅ Yangi uy vazifasi muvaffaqiyatli yaratildi va o‘quvchilarga yetkazildi!');
  }

  openGradeHomeworkModal(hwId, studentId) {
    const hw = (window.appState.homeworks || []).find(h => h.id === hwId);
    if (!hw) return;
    const sub = (hw.submissions || []).find(s => s.studentId === studentId);
    if (!sub) return;

    const modal = document.getElementById('grade-homework-modal');
    if (!modal) return;

    document.getElementById('grade-modal-hw-id').value = hwId;
    document.getElementById('grade-modal-student-id').value = studentId;
    document.getElementById('grade-modal-student').textContent = `${sub.studentName} (${sub.wordCount} ta so‘z • ${sub.submittedAt})`;
    document.getElementById('grade-modal-submission-text').textContent = sub.content || '(Matn yozilmagan, faqat audio yuborilgan)';
    document.getElementById('grade-modal-score').value = sub.grade || '';
    document.getElementById('grade-modal-feedback').value = sub.teacherFeedback || '';

    // Render audio player if student sent voice recording
    const audioBox = document.getElementById('grade-modal-audio-box');
    const audioPlayer = document.getElementById('grade-modal-audio-player');
    if (sub.audioDataUrl) {
      if (audioBox) audioBox.classList.remove('hidden');
      if (audioPlayer) audioPlayer.src = sub.audioDataUrl;
    } else {
      if (audioBox) audioBox.classList.add('hidden');
      if (audioPlayer) audioPlayer.src = '';
    }

    // Render notebook photo if student submitted one
    const imageBox = document.getElementById('grade-modal-image-box');
    const notebookImg = document.getElementById('grade-modal-notebook-img');
    if (sub.imageDataUrl) {
      if (imageBox) imageBox.classList.remove('hidden');
      if (notebookImg) notebookImg.src = sub.imageDataUrl;
    } else {
      if (imageBox) imageBox.classList.add('hidden');
      if (notebookImg) notebookImg.src = '';
    }

    modal.classList.remove('hidden');
  }

  closeGradeHomeworkModal() {
    const modal = document.getElementById('grade-homework-modal');
    if (modal) modal.classList.add('hidden');
    const audioPlayer = document.getElementById('grade-modal-audio-player');
    if (audioPlayer) audioPlayer.pause();
  }

  autoEvaluateWithGroq() {
    const hwId = document.getElementById('grade-modal-hw-id').value;
    const hw = (window.appState.homeworks || []).find(h => h.id === hwId);
    const content = document.getElementById('grade-modal-submission-text').textContent;

    if (window.groqTutor) {
      window.groqTutor.checkHomeworkSubmission(hw ? hw.title : 'Homework', hw ? hw.type : 'writing', content);
    }
  }

  handleSaveGrade(e) {
    if (e) e.preventDefault();
    const hwId = document.getElementById('grade-modal-hw-id').value;
    const studentId = document.getElementById('grade-modal-student-id').value;
    const score = document.getElementById('grade-modal-score').value;
    const feedback = document.getElementById('grade-modal-feedback').value;

    const ok = window.appState.gradeHomework(hwId, studentId, score, feedback);
    if (ok) {
      this.closeGradeHomeworkModal();
      this.renderHomeworkList();
      if (window.soundEngine) window.soundEngine.playCorrect();
      alert('✅ Baholash va fikr-mulohazalar saqlandi!');
    }
  }

  deleteHomework(hwId) {
    this.hwIdToDelete = hwId;
    const modal = document.getElementById('delete-homework-modal');
    if (modal) {
      modal.classList.remove('hidden');
    } else {
      window.appState.deleteHomework(hwId);
      this.renderHomeworkList();
      if (window.soundEngine) window.soundEngine.playClick();
    }
  }

  closeDeleteHomeworkModal() {
    this.hwIdToDelete = null;
    const modal = document.getElementById('delete-homework-modal');
    if (modal) modal.classList.add('hidden');
  }

  confirmDeleteHomework() {
    if (!this.hwIdToDelete) return;
    const targetId = this.hwIdToDelete;
    window.appState.deleteHomework(targetId);
    this.hwIdToDelete = null;
    this.closeDeleteHomeworkModal();
    this.renderHomeworkList();
    if (window.soundEngine) window.soundEngine.playClick();
    alert('🗑️ Vazifa muvaffaqiyatli o‘chirildi!');
  }

  // ==========================================
  // DIRECT STUDENT-TEACHER CHAT & MESSAGING MODULE
  // ==========================================
  renderChatView() {
    const user = window.appState.currentUser;
    const subtitle = document.getElementById('chat-threads-subtitle');
    
    if (user && user.role === 'admin') {
      if (subtitle) subtitle.textContent = 'Barcha o‘quvchilar ro‘yxati';
    } else {
      if (subtitle) subtitle.textContent = 'Bosh O‘qituvchi bilan muloqot';
    }

    this.renderChatStudentsList();

    if (!this.activeChatThreadId) {
      if (user && user.role === 'admin') {
        const students = window.appState.students || [];
        if (students.length > 0) {
          this.selectChatThread(students[0].id);
        } else {
          this.selectChatThread('default_thread');
        }
      } else if (user) {
        this.selectChatThread(user.id);
      }
    } else {
      this.renderActiveChatMessages();
    }
  }

  renderChatStudentsList() {
    const list = document.getElementById('chat-students-list');
    const badge = document.getElementById('chat-total-students-badge');
    const user = window.appState.currentUser;
    if (!list) return;

    if (!user || user.role === 'student') {
      const studentId = user ? user.id : 'student_self';
      const messages = window.appState.getChatMessages(studentId);
      const lastMsg = messages[messages.length - 1];
      const isSelected = this.activeChatThreadId === studentId;

      if (badge) badge.textContent = '1 ta';

      list.innerHTML = `
        <div onclick="window.app.selectChatThread('${studentId}')" class="p-3 rounded-2xl flex items-center gap-3 cursor-pointer transition-all ${isSelected ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20' : 'bg-white dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100'}">
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-md shrink-0">
            👨‍🏫
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-0.5">
              <span class="font-bold text-xs truncate">Bosh O‘qituvchi</span>
              <span class="text-[10px] ${isSelected ? 'text-sky-200' : 'text-slate-400'}">${lastMsg ? lastMsg.timestamp : ''}</span>
            </div>
            <p class="text-[11px] truncate ${isSelected ? 'text-sky-100' : 'text-slate-500 dark:text-slate-400'}">
              ${lastMsg ? (lastMsg.type === 'voice' ? '🎙️ Ovozli xabar' : lastMsg.type === 'file' ? '📎 Fayl' : lastMsg.type === 'image' ? '🖼️ Rasm' : lastMsg.text) : 'Suhbatni boshlang...'}
            </p>
          </div>
        </div>
      `;
      return;
    }

    const query = (this.chatSearchQuery || '').toLowerCase().trim();
    let students = window.appState.students || [];

    if (query) {
      students = students.filter(s => s.name.toLowerCase().includes(query) || s.username.toLowerCase().includes(query));
    }

    if (badge) badge.textContent = `${students.length} ta`;

    if (students.length === 0) {
      list.innerHTML = `
        <div class="p-6 text-center text-slate-400 text-xs">
          <div class="text-2xl mb-2">👥</div>
          ${query ? 'Qidiruv bo‘yicha o‘quvchi topilmadi' : 'Hozircha o‘quvchilar mavjud emas. Admin paneldan yangi o‘quvchi qo‘shing.'}
        </div>
      `;
      return;
    }

    const gradients = [
      'from-purple-600 to-pink-500',
      'from-emerald-500 to-teal-600',
      'from-amber-500 to-orange-600',
      'from-rose-500 to-red-600',
      'from-cyan-500 to-blue-600',
      'from-indigo-600 to-purple-700'
    ];

    list.innerHTML = students.map((s, idx) => {
      const grad = gradients[idx % gradients.length];
      const messages = window.appState.getChatMessages(s.id);
      const lastMsg = messages[messages.length - 1];
      const isSelected = this.activeChatThreadId === s.id;

      return `
        <div onclick="window.app.selectChatThread('${s.id}')" class="p-3 rounded-2xl flex items-center gap-3 cursor-pointer transition-all ${isSelected ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20' : 'bg-white dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100'}">
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr ${grad} text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0">
            ${s.name.charAt(0)}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-0.5">
              <span class="font-bold text-xs truncate">${s.name}</span>
              <span class="text-[10px] ${isSelected ? 'text-sky-200' : 'text-slate-400'}">${lastMsg ? lastMsg.timestamp : ''}</span>
            </div>
            <p class="text-[11px] truncate ${isSelected ? 'text-sky-100' : 'text-slate-500 dark:text-slate-400'}">
              ${lastMsg ? (lastMsg.type === 'voice' ? '🎙️ Ovozli xabar' : lastMsg.type === 'file' ? '📎 Fayl' : lastMsg.type === 'image' ? '🖼️ Rasm' : lastMsg.text) : 'Yozishishni boshlang...'}
            </p>
          </div>
        </div>
      `;
    }).join('');
  }

  filterChatStudents(query) {
    this.chatSearchQuery = query;
    this.renderChatStudentsList();
  }

  selectChatThread(studentId) {
    this.activeChatThreadId = studentId;
    this.renderChatStudentsList();

    const user = window.appState.currentUser;
    const headerName = document.getElementById('chat-header-name');
    const headerRole = document.getElementById('chat-header-role');
    const headerAvatar = document.getElementById('chat-header-avatar');

    if (user && user.role === 'admin') {
      const student = (window.appState.students || []).find(s => s.id === studentId);
      if (headerName) headerName.textContent = student ? student.name : 'O‘quvchi';
      if (headerRole) headerRole.textContent = 'O‘quvchi';
      if (headerAvatar) headerAvatar.textContent = student ? student.name.charAt(0) : '🎓';
    } else {
      if (headerName) headerName.textContent = 'Bosh O‘qituvchi';
      if (headerRole) headerRole.textContent = 'Host / Ustoz';
      if (headerAvatar) headerAvatar.textContent = '👨‍🏫';
    }

    this.toggleMobileChatView(true);
    this.renderActiveChatMessages();
    if (window.soundEngine) window.soundEngine.playClick();
  }

  toggleMobileChatView(showThread) {
    const threadCol = document.getElementById('chat-threads-col');
    const convCol = document.getElementById('chat-conversation-col');
    if (window.innerWidth < 768 && threadCol && convCol) {
      if (showThread) {
        threadCol.classList.add('hidden');
        convCol.classList.remove('hidden');
      } else {
        threadCol.classList.remove('hidden');
        convCol.classList.add('hidden');
      }
    }
  }

  renderActiveChatMessages() {
    const container = document.getElementById('chat-messages-container');
    if (!container || !this.activeChatThreadId) return;

    const messages = window.appState.getChatMessages(this.activeChatThreadId);
    const currentUser = window.appState.currentUser;
    const currentUserId = currentUser ? currentUser.id : 'admin_root';
    const isAdmin = currentUser && currentUser.role === 'admin';

    if (messages.length === 0) {
      container.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center text-slate-400 p-6">
          <div class="text-4xl mb-2">💬</div>
          <div class="font-bold text-sm text-slate-600 dark:text-slate-300">Hozircha xabarlar yo‘q</div>
          <p class="text-xs max-w-xs mt-1">Ushbu o‘quvchiga matn, ovozli xabar yoki o‘quv fayllarini yuborishingiz mumkin.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = messages.map(m => {
      const isMine = (m.senderId === currentUserId) || (isAdmin && m.senderRole === 'admin');

      return `
        <div class="flex flex-col ${isMine ? 'items-end' : 'items-start'} group">
          <div class="flex items-center gap-1 text-[10px] text-slate-400 mb-1 px-1">
            <span class="font-bold">${isMine ? 'Siz' : m.senderName}</span>
            <span>•</span>
            <span>${m.timestamp}</span>
            ${m.edited ? '<span class="text-sky-400 italic font-medium">(tahrirlandi)</span>' : ''}
          </div>

          <div class="max-w-[88%] sm:max-w-[70%] rounded-2xl p-3.5 shadow-md ${
            isMine 
              ? 'bg-sky-600 text-white rounded-tr-none' 
              : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-tl-none'
          }">
            
            ${m.type === 'text' ? `
              <p class="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap select-text">${m.text}</p>
            ` : ''}

            ${m.type === 'voice' ? `
              <div class="flex flex-col gap-2 min-w-[200px]">
                <div class="flex items-center gap-2 text-xs font-bold ${isMine ? 'text-sky-100' : 'text-sky-400'}">
                  <i class="fa-solid fa-microphone"></i>
                  <span>Ovozli xabar (${m.audioDuration || '0:10'})</span>
                </div>
                <audio controls src="${m.audioDataUrl}" class="w-full h-9 rounded-xl"></audio>
              </div>
            ` : ''}

            ${m.type === 'file' ? `
              <div class="flex items-center gap-3 p-2 rounded-xl ${isMine ? 'bg-sky-700/60' : 'bg-slate-100 dark:bg-slate-700/60'}">
                <span class="text-2xl"><i class="fa-solid fa-file-arrow-down text-sky-400"></i></span>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-xs truncate">${m.fileName}</div>
                  <div class="text-[10px] opacity-75">${m.fileSize || 'Fayl'}</div>
                </div>
                <a href="${m.fileDataUrl}" download="${m.fileName}" class="px-2.5 py-1 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition-colors">
                  <i class="fa-solid fa-download"></i>
                </a>
              </div>
            ` : ''}

            ${m.type === 'image' ? `
              <div class="flex flex-col gap-1.5">
                <img src="${m.fileDataUrl}" alt="${m.fileName}" class="rounded-xl max-h-60 object-cover cursor-pointer hover:opacity-95" onclick="window.open(this.src)">
                <div class="text-[10px] opacity-80">${m.fileName}</div>
              </div>
            ` : ''}

          </div>

          ${isMine ? `
            <div class="flex items-center gap-1.5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              ${m.type === 'text' ? `
                <button onclick="window.app.editChatMessage('${m.id}')" class="text-slate-400 hover:text-sky-500 text-[10px] px-1 py-0.5" title="Tahrirlash">
                  <i class="fa-solid fa-pen"></i> Tahrirlash
                </button>
              ` : ''}
              <button onclick="window.app.deleteChatMessage('${m.id}')" class="text-slate-400 hover:text-rose-500 text-[10px] px-1 py-0.5" title="O‘chirish">
                <i class="fa-solid fa-trash"></i> O‘chirish
              </button>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    container.scrollTop = container.scrollHeight;
  }

  handleSendChatMessage(e) {
    if (e) e.preventDefault();
    if (!this.activeChatThreadId) return;

    const input = document.getElementById('chat-text-input');
    const text = input ? input.value.trim() : '';
    if (!text) return;

    const user = window.appState.currentUser;
    window.appState.sendChatMessage(this.activeChatThreadId, {
      type: 'text',
      text: text,
      senderId: user ? user.id : 'guest',
      senderName: user ? user.name : 'Foydalanuvchi',
      senderRole: user ? user.role : 'student'
    });

    if (input) input.value = '';
    this.renderActiveChatMessages();
    this.renderChatStudentsList();
    if (window.soundEngine) window.soundEngine.playClick();
  }

  editChatMessage(msgId) {
    if (!this.activeChatThreadId) return;
    const messages = window.appState.getChatMessages(this.activeChatThreadId);
    const msg = messages.find(m => m.id === msgId);
    if (!msg || msg.type !== 'text') return;

    const newText = prompt('Xabarni tahrirlang:', msg.text);
    if (newText !== null && newText.trim()) {
      window.appState.editChatMessage(this.activeChatThreadId, msgId, newText.trim());
      this.renderActiveChatMessages();
      this.renderChatStudentsList();
      if (window.soundEngine) window.soundEngine.playClick();
    }
  }

  deleteChatMessage(msgId) {
    if (!this.activeChatThreadId) return;
    if (confirm('Ushbu xabarni o‘chirmoqchimisiz?')) {
      window.appState.deleteChatMessage(this.activeChatThreadId, msgId);
      this.renderActiveChatMessages();
      this.renderChatStudentsList();
      if (window.soundEngine) window.soundEngine.playClick();
    }
  }

  // Voice messaging in chat
  async toggleChatVoiceRecording() {
    if (this.chatVoiceRecorder && this.chatVoiceRecorder.state === 'recording') {
      this.stopAndSendChatVoice();
    } else {
      this.startChatVoiceRecording();
    }
  }

  async startChatVoiceRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.chatVoiceStream = stream;
      this.chatVoiceChunks = [];
      this.chatVoiceRecorder = new MediaRecorder(stream);

      this.chatVoiceRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.chatVoiceChunks.push(e.data);
      };

      this.chatVoiceRecorder.onstop = () => {
        const blob = new Blob(this.chatVoiceChunks, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          const audioUrl = reader.result;
          const user = window.appState.currentUser;
          const m = String(Math.floor(this.chatVoiceSeconds / 60)).padStart(2, '0');
          const s = String(this.chatVoiceSeconds % 60).padStart(2, '0');
          
          window.appState.sendChatMessage(this.activeChatThreadId, {
            type: 'voice',
            audioDataUrl: audioUrl,
            audioDuration: `${m}:${s}`,
            senderId: user ? user.id : 'guest',
            senderName: user ? user.name : 'Foydalanuvchi',
            senderRole: user ? user.role : 'student'
          });

          this.renderActiveChatMessages();
          this.renderChatStudentsList();
          if (window.soundEngine) window.soundEngine.playCorrect();
        };
        reader.readAsDataURL(blob);

        if (this.chatVoiceStream) {
          this.chatVoiceStream.getTracks().forEach(t => t.stop());
          this.chatVoiceStream = null;
        }
      };

      this.chatVoiceRecorder.start();
      this.chatVoiceSeconds = 0;

      const banner = document.getElementById('chat-voice-record-banner');
      const micBtn = document.getElementById('btn-chat-mic');
      if (banner) banner.classList.remove('hidden');
      if (micBtn) micBtn.className = 'w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center text-sm transition-all animate-pulse shrink-0';

      if (this.chatVoiceTimerInterval) clearInterval(this.chatVoiceTimerInterval);
      this.chatVoiceTimerInterval = setInterval(() => {
        this.chatVoiceSeconds++;
        const m = String(Math.floor(this.chatVoiceSeconds / 60)).padStart(2, '0');
        const s = String(this.chatVoiceSeconds % 60).padStart(2, '0');
        const timerEl = document.getElementById('chat-voice-timer');
        if (timerEl) timerEl.textContent = `${m}:${s}`;
      }, 1000);

    } catch (err) {
      alert('Mikrofonga ulanishda xatolik. Iltimos brauzer ruxsatini tekshiring.');
    }
  }

  stopAndSendChatVoice() {
    if (this.chatVoiceRecorder && this.chatVoiceRecorder.state !== 'inactive') {
      this.chatVoiceRecorder.stop();
    }
    if (this.chatVoiceTimerInterval) {
      clearInterval(this.chatVoiceTimerInterval);
      this.chatVoiceTimerInterval = null;
    }
    const banner = document.getElementById('chat-voice-record-banner');
    const micBtn = document.getElementById('btn-chat-mic');
    if (banner) banner.classList.add('hidden');
    if (micBtn) micBtn.className = 'w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 text-slate-500 hover:text-white flex items-center justify-center text-sm transition-all shrink-0';
  }

  cancelChatVoiceRecording() {
    if (this.chatVoiceRecorder && this.chatVoiceRecorder.state !== 'inactive') {
      this.chatVoiceRecorder.ondataavailable = null;
      this.chatVoiceRecorder.onstop = null;
      this.chatVoiceRecorder.stop();
    }
    if (this.chatVoiceStream) {
      this.chatVoiceStream.getTracks().forEach(t => t.stop());
      this.chatVoiceStream = null;
    }
    if (this.chatVoiceTimerInterval) {
      clearInterval(this.chatVoiceTimerInterval);
      this.chatVoiceTimerInterval = null;
    }
    const banner = document.getElementById('chat-voice-record-banner');
    const micBtn = document.getElementById('btn-chat-mic');
    if (banner) banner.classList.add('hidden');
    if (micBtn) micBtn.className = 'w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 text-slate-500 hover:text-white flex items-center justify-center text-sm transition-all shrink-0';
  }

  handleChatFileUpload(e) {
    const file = e.target.files[0];
    if (!file || !this.activeChatThreadId) return;

    const isImage = file.type.startsWith('image/');
    const reader = new FileReader();

    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const sizeStr = file.size < 1024 * 1024 
        ? `${Math.round(file.size / 1024)} KB` 
        : `${(file.size / (1024 * 1024)).toFixed(1)} MB`;

      const user = window.appState.currentUser;
      window.appState.sendChatMessage(this.activeChatThreadId, {
        type: isImage ? 'image' : 'file',
        fileName: file.name,
        fileSize: sizeStr,
        fileType: file.type,
        fileDataUrl: dataUrl,
        senderId: user ? user.id : 'guest',
        senderName: user ? user.name : 'Foydalanuvchi',
        senderRole: user ? user.role : 'student'
      });

      this.renderActiveChatMessages();
      this.renderChatStudentsList();
      if (window.soundEngine) window.soundEngine.playCorrect();
    };

    reader.readAsDataURL(file);
    e.target.value = '';
  }
}

// Instantiate App
document.addEventListener('DOMContentLoaded', () => {
  window.app = new AcademyApp();
});
