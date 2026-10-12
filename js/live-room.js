// English-English Academy - Live Online Classroom (Zoom-like Video & Whiteboard System)
// UNLIMITED PARTICIPANTS & DYNAMIC LINK SHARING ARCHITECTURE

class LiveRoomManager {
  constructor() {
    this.isOpen = false;
    this.roomId = 'EEA-LIVE-' + Math.floor(1000 + Math.random() * 9000);
    this.startTime = null;
    this.timerInterval = null;
    
    // Unlimited Students Pool & Connections
    this.students = [];
    this.sampleNames = [
      'Madina Karimova', 
      'Jasur Bek', 
      'Shahzod Aliyev', 
      'Dilnoza Rahimova', 
      'Kamron Ergashev', 
      'Zarina Usmanova', 
      'Bobur Mirzayev', 
      'Fotima Saidova'
    ];
    this.nextNameIdx = 0;
    this.avatarGradients = [
      'from-purple-600 to-pink-500',
      'from-emerald-500 to-teal-600',
      'from-amber-500 to-orange-600',
      'from-rose-500 to-red-600',
      'from-cyan-500 to-blue-600',
      'from-indigo-600 to-purple-700'
    ];

    // Media streams
    this.teacherStream = null;
    this.screenStream = null;

    // Devices state
    this.teacherCam = false;
    this.teacherMic = true;
    this.screenSharing = false;

    // View state
    this.layoutMode = 'split'; // 'split', 'whiteboard-focus', 'gallery'
    this.activeTab = 'chat'; // 'chat' or 'participants'
    this.handRaised = false;

    // Canvas painter for the live room board
    this.boardPainter = null;

    this.messages = [
      {
        id: 1,
        sender: 'Tizim',
        role: 'system',
        text: 'Jonli dars xonasiga xush kelibsiz! Web-kamera va mikrofonni yoqishingiz, havola orqali istalgancha (cheksiz) talabalarni taklif qilishingiz mumkin.',
        time: '12:00'
      }
    ];

    // Auto-detect room parameter from URL on load
    this.checkUrlRoomParam();
  }

  checkUrlRoomParam() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('room')) {
        const rId = urlParams.get('room');
        if (rId) this.roomId = rId;
        setTimeout(() => {
          this.openRoom();
        }, 600);
      }
    } catch(e) {}
  }

  init() {
    // Canvas painter will be initialized when live room opens
  }

  getInviteLink() {
    const origin = window.location.origin || 'http://localhost:5173';
    const path = window.location.pathname || '/';
    return `${origin}${path}?room=${this.roomId}`;
  }

  openRoom() {
    this.isOpen = true;
    const overlay = document.getElementById('live-zoom-modal');
    if (!overlay) return;

    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    const currentUser = (window.appState && window.appState.currentUser);
    const isStudent = currentUser && currentUser.role === 'student';
    const isTeacher = !currentUser || currentUser.role === 'admin';

    // Set Room code in header
    const roomCodeEl = document.getElementById('live-room-code');
    if (roomCodeEl) roomCodeEl.textContent = this.roomId;

    // Provide Invite Link to Host / Admin
    const inviteUrl = this.getInviteLink();
    const urlInput = document.getElementById('live-invite-url-input');
    if (urlInput) urlInput.value = inviteUrl;

    const inviteBanner = document.getElementById('live-invite-banner');
    if (inviteBanner) {
      inviteBanner.classList.remove('hidden');
    }

    // If logged in student opens room, auto-join them if not already in list
    if (isStudent && currentUser) {
      if (!this.students.some(s => s.username === currentUser.username)) {
        this.addStudent(currentUser.name || 'O‘quvchi', currentUser.username, false);
      }
    }

    // Start meeting timer
    this.startTimer();

    // Update UI elements based on current participants
    this.renderStudentsUI();
    this.updateParticipantsUI();
    this.updateHeaderStatus();

    // Init whiteboard canvas
    setTimeout(() => {
      if (!this.boardPainter) {
        this.boardPainter = new CanvasPainter('live-board-canvas');
      } else {
        this.boardPainter.initCanvasSize();
      }
      this.boardPainter.setColor('#38bdf8'); // light sky blue default
    }, 150);

    // Render initial chat
    this.renderChatMessages();

    // Play notification sound
    if (window.soundEngine) window.soundEngine.playCorrect();
  }

  closeRoom() {
    this.isOpen = false;
    const overlay = document.getElementById('live-zoom-modal');
    if (overlay) overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');

    // Stop streams
    this.stopStream(this.teacherStream);
    this.stopStream(this.screenStream);

    this.teacherStream = null;
    this.screenStream = null;
    this.teacherCam = false;
    this.screenSharing = false;

    // Reset UI videos
    const tVideo = document.getElementById('teacher-video-element');
    if (tVideo) {
      tVideo.srcObject = null;
      tVideo.classList.add('hidden');
    }
    const tAvatar = document.getElementById('teacher-avatar-placeholder');
    if (tAvatar) tAvatar.classList.remove('hidden');

    const screenVideo = document.getElementById('screen-share-video');
    if (screenVideo) {
      screenVideo.srcObject = null;
      screenVideo.classList.add('hidden');
    }

    this.updateControlsUI();

    // Clear timer
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    if (window.soundEngine) window.soundEngine.playClick();
  }

  // ==========================================
  // UNLIMITED PARTICIPANTS MANAGEMENT
  // ==========================================
  addStudent(name = 'Madina Karimova', username = null, announce = true) {
    const studentId = 'std_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    const grad = this.avatarGradients[this.students.length % this.avatarGradients.length];

    const studentObj = {
      id: studentId,
      name: name.trim(),
      username: username,
      cam: false,
      mic: true,
      handRaised: false,
      gradient: grad,
      joinedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.students.push(studentObj);

    if (announce) {
      this.messages.push({
        id: Date.now(),
        sender: 'Tizim',
        role: 'system',
        text: `🎓 ${studentObj.name} dars xonasiga muvaffaqiyatli ulandi! (Jami: ${1 + this.students.length} ishtirokchi)`,
        time: studentObj.joinedAt
      });
      this.renderChatMessages();
    }

    this.renderStudentsUI();
    this.updateParticipantsUI();
    this.updateHeaderStatus();

    if (window.soundEngine) window.soundEngine.playCorrect();
    return studentObj;
  }

  // Alias for backward compatibility
  connectStudent(name) {
    if (!name) {
      name = this.sampleNames[this.nextNameIdx % this.sampleNames.length];
      this.nextNameIdx++;
    }
    const std = this.addStudent(name);
    alert(`✅ ${std.name} dars xonasiga qo‘shildi!\n(Hozirda cheksiz ishtirokchilar rejimi faol)`);
  }

  promptAddStudent() {
    const defaultSuggestion = this.sampleNames[this.nextNameIdx % this.sampleNames.length];
    const entered = prompt(`Yangi o‘quvchi ismini kiriting:\n(Bo‘sh qoldirsangiz, avtomatik "${defaultSuggestion}" ulanadi)`, defaultSuggestion);
    
    if (entered === null) return; // User canceled
    const finalName = entered.trim() || defaultSuggestion;
    this.nextNameIdx++;
    this.addStudent(finalName);
  }

  removeStudent(studentId) {
    const idx = this.students.findIndex(s => s.id === studentId);
    if (idx !== -1) {
      const removed = this.students.splice(idx, 1)[0];
      this.messages.push({
        id: Date.now(),
        sender: 'Tizim',
        role: 'system',
        text: `👋 ${removed.name} dars xonasini tark etdi.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.renderChatMessages();
      this.renderStudentsUI();
      this.updateParticipantsUI();
      this.updateHeaderStatus();
      if (window.soundEngine) window.soundEngine.playClick();
    }
  }

  disconnectStudent(studentId) {
    if (studentId) {
      this.removeStudent(studentId);
    } else if (this.students.length > 0) {
      this.removeStudent(this.students[this.students.length - 1].id);
    }
  }

  toggleStudentMic(studentId) {
    const std = this.students.find(s => s.id === studentId);
    if (std) {
      std.mic = !std.mic;
      this.renderStudentsUI();
      this.updateParticipantsUI();
      if (window.soundEngine) window.soundEngine.playClick();
    }
  }

  toggleStudentCamera(studentId) {
    const std = this.students.find(s => s.id === studentId);
    if (std) {
      std.cam = !std.cam;
      this.renderStudentsUI();
      if (window.soundEngine) window.soundEngine.playClick();
    }
  }

  muteAllStudents() {
    if (this.students.length === 0) return;
    this.students.forEach(s => s.mic = false);
    this.messages.push({
      id: Date.now(),
      sender: 'Tizim',
      role: 'system',
      text: '🔇 O‘qituvchi barcha talabalar mikrofonini o‘chirdi (Mute All).',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    this.renderChatMessages();
    this.renderStudentsUI();
    this.updateParticipantsUI();
    if (window.soundEngine) window.soundEngine.playClick();
  }

  copyInviteLink() {
    const link = this.getInviteLink();
    navigator.clipboard.writeText(link).then(() => {
      // Visual feedback on button if present
      const copyBtn = document.getElementById('btn-copy-invite-link');
      if (copyBtn) {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Nusxalandi!`;
        setTimeout(() => { copyBtn.innerHTML = originalHtml; }, 2000);
      }
      alert(`📋 Jonli efir havolasi nusxalandi:\n${link}\n\nUshbu havola orqali istalgancha (cheksiz) o‘quvchi to‘g‘ridan-to‘g‘ri darsga qo‘shila oladi!`);
    }).catch(() => {
      prompt('Xona havolasi:', link);
    });
  }

  updateHeaderStatus() {
    const studentStatusBadge = document.getElementById('live-status-badge');
    if (!studentStatusBadge) return;

    const totalStudents = this.students.length;
    if (totalStudents === 0) {
      studentStatusBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span> KUTILMOQDA (Faqat O‘qituvchi • Cheksiz)`;
      studentStatusBadge.className = 'px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] font-black uppercase tracking-wider flex items-center gap-1';
    } else {
      studentStatusBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> JONLI EFIR (${1 + totalStudents} ishtirokchi • Cheksiz)`;
      studentStatusBadge.className = 'px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black uppercase tracking-wider flex items-center gap-1';
    }
  }

  renderStudentsUI() {
    const grid = document.getElementById('live-students-grid');
    const countBadge = document.getElementById('live-students-count-badge');
    if (countBadge) {
      countBadge.textContent = `${this.students.length} / Cheksiz`;
    }

    if (!grid) return;

    if (this.students.length === 0) {
      // Waiting box with invite actions
      grid.innerHTML = `
        <div class="p-4 rounded-2xl bg-slate-950/70 border border-dashed border-slate-800 text-center flex flex-col items-center justify-center">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center text-lg mb-2 animate-pulse">
            ⏳
          </div>
          <div class="text-xs font-bold text-white mb-0.5">O‘quvchilar kutilmoqda...</div>
          <p class="text-[10px] text-slate-400 mb-3 max-w-[210px] leading-relaxed">
            Hozircha darsda faqat sizsiz. Havola orqali istalgancha (cheksiz) talabalar ulanishi mumkin:
          </p>
          <div class="flex items-center gap-2 w-full max-w-[230px]">
            <button onclick="window.liveRoom.copyInviteLink()" class="flex-1 py-1.5 px-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold flex items-center justify-center gap-1 shadow-md shadow-blue-600/20">
              <i class="fa-solid fa-link"></i> Havolani Olish
            </button>
            <button onclick="window.liveRoom.promptAddStudent()" class="py-1.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-bold flex items-center justify-center gap-1 shadow-md shadow-purple-600/20" title="Talaba qo‘shish">
              <i class="fa-solid fa-user-plus"></i> + Test
            </button>
          </div>
        </div>
      `;
      return;
    }

    // Unlimited students cards list
    grid.innerHTML = this.students.map(s => `
      <div class="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-2 transition-all hover:border-slate-700 group">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr ${s.gradient} text-white flex items-center justify-center font-black text-xs shrink-0 shadow-md ring-2 ring-white/10 relative">
            ${s.name.charAt(0)}
            ${s.cam ? '<span class="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-blue-500 text-[8px] flex items-center justify-center text-white"><i class="fa-solid fa-video"></i></span>' : ''}
          </div>
          <div class="min-w-0">
            <div class="text-xs font-bold text-white truncate leading-tight">${s.name}</div>
            <div class="text-[10px] text-slate-400 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Ulangan</span>
              ${s.cam ? '<span class="text-sky-400 font-semibold">• Cam ON</span>' : ''}
            </div>
          </div>
        </div>

        <div class="flex items-center gap-1 shrink-0">
          <!-- Mic Toggle -->
          <button onclick="window.liveRoom.toggleStudentMic('${s.id}')" class="w-7 h-7 rounded-lg ${s.mic ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400' : 'bg-rose-950/80 border border-rose-800 text-rose-400'} text-xs flex items-center justify-center transition-colors" title="${s.mic ? 'Mikrofonni o‘chirish' : 'Mikrofonni yoqish'}">
            <i class="fa-solid ${s.mic ? 'fa-microphone' : 'fa-microphone-slash'}"></i>
          </button>

          <!-- Cam Toggle -->
          <button onclick="window.liveRoom.toggleStudentCamera('${s.id}')" class="w-7 h-7 rounded-lg ${s.cam ? 'bg-purple-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-400'} text-xs flex items-center justify-center transition-colors" title="Kamerani boshqarish">
            <i class="fa-solid ${s.cam ? 'fa-video' : 'fa-video-slash'}"></i>
          </button>

          <!-- Remove / Kick -->
          <button onclick="window.liveRoom.removeStudent('${s.id}')" class="w-7 h-7 rounded-lg bg-slate-800/60 hover:bg-rose-600 text-slate-400 hover:text-white text-xs flex items-center justify-center transition-colors" title="Darsdan chiqarish">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  updateParticipantsUI() {
    const countBadge = document.getElementById('tab-btn-participants');
    const listContainer = document.getElementById('live-participants-panel');

    const totalCount = 1 + this.students.length;
    if (countBadge) countBadge.textContent = `👥 Ishtirokchilar (${totalCount})`;

    if (listContainer) {
      let html = `
        <div class="p-2.5 rounded-2xl bg-blue-950/40 border border-blue-800/50 flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">👑</span>
            <div>
              <div class="font-bold text-white leading-tight">Bosh O‘qituvchi</div>
              <div class="text-[10px] text-blue-400 font-semibold">Host / Moderator</div>
            </div>
          </div>
          <span class="${this.teacherMic ? 'text-emerald-400' : 'text-rose-400'}">
            <i class="fa-solid ${this.teacherMic ? 'fa-microphone' : 'fa-microphone-slash'}"></i>
          </span>
        </div>
      `;

      if (this.students.length === 0) {
        html += `
          <div class="p-3 rounded-2xl bg-slate-800/20 border border-dashed border-slate-700 text-center text-slate-400">
            <div class="text-xs mb-1">⏳ Hozircha o‘quvchilar ulanmagan</div>
            <button onclick="window.liveRoom.promptAddStudent()" class="px-2.5 py-1 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-bold">
              👤 O‘quvchi qo‘shish (Test)
            </button>
          </div>
        `;
      } else {
        this.students.forEach(s => {
          html += `
            <div class="p-2.5 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between mb-1.5 animate-fadeIn">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-xl bg-gradient-to-tr ${s.gradient} text-white flex items-center justify-center font-bold text-xs">
                  ${s.name.charAt(0)}
                </span>
                <div>
                  <div class="font-bold text-white leading-tight text-xs">${s.name}</div>
                  <div class="text-[10px] text-purple-400 font-semibold">O‘quvchi (${s.joinedAt})</div>
                </div>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="${s.mic ? 'text-emerald-400' : 'text-rose-400'} text-xs">
                  <i class="fa-solid ${s.mic ? 'fa-microphone' : 'fa-microphone-slash'}"></i>
                </span>
                <button onclick="window.liveRoom.removeStudent('${s.id}')" class="text-slate-400 hover:text-rose-400 text-xs p-1" title="Chiqarish">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          `;
        });
      }

      listContainer.innerHTML = html;
    }
  }

  startTimer() {
    this.startTime = Date.now();
    const timerEl = document.getElementById('live-meeting-timer');
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      if (!this.isOpen) return;
      const elapsedSec = Math.floor((Date.now() - this.startTime) / 1000);
      const hours = Math.floor(elapsedSec / 3600);
      const mins = Math.floor((elapsedSec % 3600) / 60);
      const secs = elapsedSec % 60;
      
      const pad = (n) => String(n).padStart(2, '0');
      if (timerEl) {
        timerEl.textContent = hours > 0 
          ? `${pad(hours)}:${pad(mins)}:${pad(secs)}` 
          : `${pad(mins)}:${pad(secs)}`;
      }
    }, 1000);
  }

  stopStream(stream) {
    if (stream) {
      stream.getTracks().forEach(track => {
        try { track.stop(); } catch(e) {}
      });
    }
  }

  // ==========================================
  // WEBCAM & MICROPHONE CONTROLS
  // ==========================================
  async toggleTeacherCamera() {
    const videoEl = document.getElementById('teacher-video-element');
    const avatarEl = document.getElementById('teacher-avatar-placeholder');

    if (!this.teacherCam) {
      // Turn camera ON
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: 'user' },
            audio: false
          });
          this.teacherStream = stream;
          if (videoEl) {
            videoEl.srcObject = stream;
            videoEl.classList.remove('hidden');
          }
          if (avatarEl) avatarEl.classList.add('hidden');
          this.teacherCam = true;
        } else {
          throw new Error('Webcam api mavjud emas');
        }
      } catch (err) {
        console.warn('Camera could not be accessed directly:', err);
        // Fallback: interactive simulated HD teacher camera
        this.teacherCam = true;
        if (videoEl) {
          videoEl.classList.remove('hidden');
          this.startSimulatedTeacherStream(videoEl);
        }
        if (avatarEl) avatarEl.classList.add('hidden');
      }
    } else {
      // Turn camera OFF
      this.teacherCam = false;
      this.stopStream(this.teacherStream);
      this.teacherStream = null;
      if (videoEl) {
        videoEl.srcObject = null;
        videoEl.classList.add('hidden');
      }
      if (avatarEl) avatarEl.classList.remove('hidden');
    }

    this.updateControlsUI();
    if (window.soundEngine) window.soundEngine.playClick();
  }

  startSimulatedTeacherStream(videoEl) {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 480;
    const ctx = canvas.getContext('2d');
    
    const draw = () => {
      if (!this.teacherCam) return;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const grad = ctx.createRadialGradient(320, 240, 50, 320, 240, 300);
      grad.addColorStop(0, '#1e293b');
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(320, 180, 70, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(320, 370, 120, Math.PI, 0, false);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('👨‍🏫 Jonli Web-kamera (O‘qituvchi)', 320, 420);

      requestAnimationFrame(draw);
    };
    draw();

    try {
      const stream = canvas.captureStream(25);
      videoEl.srcObject = stream;
    } catch(e) {}
  }

  toggleTeacherMic() {
    this.teacherMic = !this.teacherMic;
    const micIcon = document.getElementById('teacher-mic-status-icon');
    if (micIcon) {
      micIcon.className = this.teacherMic 
        ? 'fa-solid fa-microphone text-emerald-400' 
        : 'fa-solid fa-microphone-slash text-rose-400';
    }
    this.updateControlsUI();
    if (window.soundEngine) window.soundEngine.playClick();
  }

  async toggleStudentCamera() {
    if (!this.studentJoined) {
      alert('Avval o‘quvchi xonaga ulanishi lozim!');
      return;
    }

    const videoEl = document.getElementById('student-video-element');
    const avatarEl = document.getElementById('student-avatar-placeholder');

    if (!this.studentCam) {
      this.studentCam = true;
      if (videoEl) {
        videoEl.classList.remove('hidden');
        this.startSimulatedStudentStream(videoEl);
      }
      if (avatarEl) avatarEl.classList.add('hidden');
    } else {
      this.studentCam = false;
      this.stopStream(this.studentStream);
      this.studentStream = null;
      if (videoEl) {
        videoEl.srcObject = null;
        videoEl.classList.add('hidden');
      }
      if (avatarEl) avatarEl.classList.remove('hidden');
    }

    this.updateControlsUI();
    if (window.soundEngine) window.soundEngine.playClick();
  }

  startSimulatedStudentStream(videoEl) {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 480;
    const ctx = canvas.getContext('2d');
    
    const draw = () => {
      if (!this.studentCam) return;
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(320, 240, 40, 320, 240, 280);
      grad.addColorStop(0, '#1e1b4b');
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#a855f7';
      ctx.beginPath();
      ctx.arc(320, 180, 65, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(320, 360, 110, Math.PI, 0, false);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`🎓 ${this.studentName} (Jonli)`, 320, 420);

      requestAnimationFrame(draw);
    };
    draw();

    try {
      const stream = canvas.captureStream(25);
      videoEl.srcObject = stream;
    } catch(e) {}
  }

  toggleStudentMic() {
    this.studentMic = !this.studentMic;
    const micIcon = document.getElementById('student-mic-status-icon');
    if (micIcon) {
      micIcon.className = this.studentMic 
        ? 'fa-solid fa-microphone text-emerald-400' 
        : 'fa-solid fa-microphone-slash text-rose-400';
    }
    this.updateControlsUI();
    if (window.soundEngine) window.soundEngine.playClick();
  }

  async toggleScreenShare() {
    const screenVideo = document.getElementById('screen-share-video');
    const boardArea = document.getElementById('live-board-container');

    if (!this.screenSharing) {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
          const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
          this.screenStream = stream;
          this.screenSharing = true;

          if (screenVideo) {
            screenVideo.srcObject = stream;
            screenVideo.classList.remove('hidden');
          }
          if (boardArea) boardArea.classList.add('hidden');

          stream.getVideoTracks()[0].onended = () => {
            this.stopScreenSharing();
          };
        } else {
          alert('Brauzeringiz ekran ulashishni qo‘llab-quvvatlamaydi.');
        }
      } catch (err) {
        console.warn('Screen share canceled or failed:', err);
      }
    } else {
      this.stopScreenSharing();
    }

    this.updateControlsUI();
  }

  stopScreenSharing() {
    this.screenSharing = false;
    this.stopStream(this.screenStream);
    this.screenStream = null;

    const screenVideo = document.getElementById('screen-share-video');
    const boardArea = document.getElementById('live-board-container');
    if (screenVideo) {
      screenVideo.srcObject = null;
      screenVideo.classList.add('hidden');
    }
    if (boardArea) boardArea.classList.remove('hidden');

    this.updateControlsUI();
  }

  updateControlsUI() {
    // Teacher Cam Button
    const camBtn = document.getElementById('btn-live-teacher-cam');
    if (camBtn) {
      camBtn.className = this.teacherCam
        ? 'w-12 h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white flex flex-col items-center justify-center text-xs font-bold transition-all shadow-lg shadow-emerald-500/20'
        : 'w-12 h-12 rounded-2xl bg-rose-600/80 hover:bg-rose-700 text-white flex flex-col items-center justify-center text-xs font-bold transition-all shadow-lg shadow-rose-500/20';
      camBtn.innerHTML = `<i class="fa-solid ${this.teacherCam ? 'fa-video' : 'fa-video-slash'} text-sm mb-0.5"></i><span class="text-[9px]">Kamera</span>`;
    }

    // Teacher Mic Button
    const micBtn = document.getElementById('btn-live-teacher-mic');
    if (micBtn) {
      micBtn.className = this.teacherMic
        ? 'w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white flex flex-col items-center justify-center text-xs font-bold transition-all'
        : 'w-12 h-12 rounded-2xl bg-rose-600/80 hover:bg-rose-700 text-white flex flex-col items-center justify-center text-xs font-bold transition-all shadow-lg shadow-rose-500/20';
      micBtn.innerHTML = `<i class="fa-solid ${this.teacherMic ? 'fa-microphone' : 'fa-microphone-slash'} text-sm mb-0.5"></i><span class="text-[9px]">Ovoz</span>`;
    }

    // Screen Share Button
    const screenBtn = document.getElementById('btn-live-screen-share');
    if (screenBtn) {
      screenBtn.className = this.screenSharing
        ? 'w-12 h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex flex-col items-center justify-center text-xs font-bold transition-all shadow-lg shadow-blue-500/30 ring-2 ring-blue-400'
        : 'w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white flex flex-col items-center justify-center text-xs font-bold transition-all';
    }

    // Student Cam Button
    const sCamBtn = document.getElementById('btn-live-student-cam');
    if (sCamBtn) {
      sCamBtn.className = this.studentCam
        ? 'px-2.5 py-1 rounded-xl bg-purple-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-sm'
        : 'px-2.5 py-1 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-slate-300 text-[10px] font-bold flex items-center gap-1';
      sCamBtn.innerHTML = `<i class="fa-solid ${this.studentCam ? 'fa-video' : 'fa-video-slash'}"></i> Talaba Cam`;
    }
  }

  // ==========================================
  // LAYOUT & WHITEBOARD TOGGLES
  // ==========================================
  setLayout(mode) {
    this.layoutMode = mode;
    const mainGrid = document.getElementById('live-main-stage');
    const boardCol = document.getElementById('live-board-col');
    const videoCol = document.getElementById('live-video-col');

    if (!mainGrid || !boardCol || !videoCol) return;

    if (mode === 'split') {
      mainGrid.className = 'flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 overflow-hidden';
      boardCol.className = 'lg:col-span-3 flex flex-col bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl relative';
      videoCol.className = 'lg:col-span-1 flex flex-col gap-4 overflow-y-auto';
      boardCol.classList.remove('hidden');
      videoCol.classList.remove('hidden');
    } else if (mode === 'whiteboard-focus') {
      mainGrid.className = 'flex-1 grid grid-cols-1 gap-4 p-4 overflow-hidden relative';
      boardCol.className = 'w-full h-full flex flex-col bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl relative';
      videoCol.className = 'absolute top-6 right-6 z-30 w-72 flex flex-col gap-3 shadow-2xl bg-slate-950/80 p-3 rounded-2xl backdrop-blur border border-slate-700/60';
      boardCol.classList.remove('hidden');
      videoCol.classList.remove('hidden');
    } else if (mode === 'gallery') {
      mainGrid.className = 'flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-6 overflow-hidden';
      boardCol.classList.add('hidden');
      videoCol.className = 'md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full';
    }

    setTimeout(() => {
      if (this.boardPainter) this.boardPainter.initCanvasSize();
    }, 100);
  }

  // ==========================================
  // WHITEBOARD QUICK STAMPS (English Teaching Tools)
  // ==========================================
  applyGrammarStamp(type) {
    if (!this.boardPainter || !this.boardPainter.ctx) return;
    const ctx = this.boardPainter.ctx;
    const dpr = window.devicePixelRatio || 1;
    const canvas = this.boardPainter.canvas;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    this.boardPainter.saveSnapshot();

    ctx.save();
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    const boxX = 40;
    const boxY = 40;

    if (type === 'present-simple') {
      ctx.fillStyle = 'rgba(30, 41, 59, 0.95)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, 440, 150, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText('⚡ Present Simple Formula', boxX + 24, boxY + 20);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px Inter, sans-serif';
      ctx.fillText('Subject + Verb (s / es) + Object', boxX + 24, boxY + 54);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '14px Inter, sans-serif';
      ctx.fillText('• I / You / We / They speak English.', boxX + 24, boxY + 92);
      ctx.fillText('• He / She / It speaks English.', boxX + 24, boxY + 114);

    } else if (type === 'timeline') {
      const lineY = boxY + 80;
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(boxX, lineY);
      ctx.lineTo(boxX + 500, lineY);
      ctx.stroke();

      const points = [
        { label: 'PAST (O‘tgan)', x: boxX + 60, col: '#f87171' },
        { label: 'NOW (Hozir)', x: boxX + 250, col: '#4ade80' },
        { label: 'FUTURE (Kelasi)', x: boxX + 440, col: '#60a5fa' }
      ];

      points.forEach(p => {
        ctx.fillStyle = p.col;
        ctx.beginPath();
        ctx.arc(p.x, lineY, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(p.label, p.x, lineY - 28);
      });

    } else if (type === 'phonics') {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, 460, 160, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#c084fc';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText('🗣️ Minimal Pairs: /θ/ vs /ð/', boxX + 24, boxY + 20);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Inter, sans-serif';
      ctx.fillText('/θ/ (Jarangsiz): think, three, teeth', boxX + 24, boxY + 58);
      ctx.fillText('/ð/ (Jarangli):   this, that, father', boxX + 24, boxY + 94);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '13px Inter, sans-serif';
      ctx.fillText('💡 Til uchi old tishlar o‘rtasiga qo‘yiladi.', boxX + 24, boxY + 128);

    } else if (type === 'vocab-box') {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, 420, 150, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText('📖 Yangi So‘z Tahlili', boxX + 24, boxY + 20);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Inter, sans-serif';
      ctx.fillText('So‘z: _______________________', boxX + 24, boxY + 54);
      ctx.fillText('Talaffuz: /_________________/', boxX + 24, boxY + 84);
      ctx.fillText('Misol: ______________________', boxX + 24, boxY + 114);
    }

    ctx.restore();
    if (window.soundEngine) window.soundEngine.playCorrect();
  }

  downloadWhiteboard() {
    if (!this.boardPainter || !this.boardPainter.canvas) return;
    const canvas = this.boardPainter.canvas;

    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;
    const expCtx = exportCanvas.getContext('2d');

    expCtx.fillStyle = '#0f172a';
    expCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    expCtx.fillStyle = '#334155';
    expCtx.font = 'bold 24px Inter, sans-serif';
    expCtx.fillText('English-English Academy | Jonli Doska Darsi', 30, exportCanvas.height - 30);

    expCtx.drawImage(canvas, 0, 0);

    const link = document.createElement('a');
    link.download = `EEA-Whiteboard-${Date.now()}.png`;
    link.href = exportCanvas.toDataURL('image/png');
    link.click();

    if (window.soundEngine) window.soundEngine.playCorrect();
  }

  toggleHandRaise() {
    this.handRaised = !this.handRaised;
    const handBadge = document.getElementById('live-hand-raised-badge');
    const handBtn = document.getElementById('btn-live-raise-hand');

    if (handBadge) {
      if (this.handRaised) {
        handBadge.classList.remove('hidden');
        if (window.soundEngine) window.soundEngine.playStreakMilestone();
      } else {
        handBadge.classList.add('hidden');
      }
    }

    if (handBtn) {
      handBtn.className = this.handRaised
        ? 'w-12 h-12 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-900 flex flex-col items-center justify-center text-xs font-bold transition-all shadow-lg shadow-amber-500/30 ring-2 ring-white animate-pulse'
        : 'w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white flex flex-col items-center justify-center text-xs font-bold transition-all';
    }
  }

  setSideTab(tabName) {
    this.activeTab = tabName;
    const chatTabBtn = document.getElementById('tab-btn-chat');
    const partTabBtn = document.getElementById('tab-btn-participants');
    const chatContent = document.getElementById('live-chat-panel');
    const partContent = document.getElementById('live-participants-panel');

    if (tabName === 'chat') {
      if (chatTabBtn) chatTabBtn.className = 'flex-1 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white';
      if (partTabBtn) partTabBtn.className = 'flex-1 py-1.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white';
      if (chatContent) chatContent.classList.remove('hidden');
      if (partContent) partContent.classList.add('hidden');
    } else {
      if (chatTabBtn) chatTabBtn.className = 'flex-1 py-1.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white';
      if (partTabBtn) partTabBtn.className = 'flex-1 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white';
      if (chatContent) chatContent.classList.add('hidden');
      if (partContent) partContent.classList.remove('hidden');
    }
  }

  sendChatMessage(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('live-chat-input');
    if (!input || !input.value.trim()) return;

    const user = (window.appState && window.appState.currentUser) 
      ? window.appState.currentUser 
      : { name: 'Bosh O‘qituvchi', role: 'admin' };

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    this.messages.push({
      id: Date.now(),
      sender: user.name,
      role: user.role,
      text: input.value.trim(),
      time: timeStr
    });

    input.value = '';
    this.renderChatMessages();

    if (window.soundEngine) window.soundEngine.playClick();
  }

  renderChatMessages() {
    const list = document.getElementById('live-chat-messages-list');
    if (!list) return;

    list.innerHTML = this.messages.map(m => {
      const isSystem = m.role === 'system';
      const isAdmin = m.role === 'admin';

      if (isSystem) {
        return `
          <div class="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-300 leading-relaxed text-center">
            ${m.text}
          </div>
        `;
      }

      return `
        <div class="flex flex-col gap-1 p-2 rounded-xl bg-slate-800/40 border border-slate-700/30">
          <div class="flex items-center justify-between text-[10px]">
            <span class="font-bold ${isAdmin ? 'text-purple-400' : 'text-blue-400'}">
              ${isAdmin ? '👨‍🏫 ' : '🎓 '}${m.sender}
            </span>
            <span class="text-slate-500">${m.time}</span>
          </div>
          <p class="text-xs text-white leading-normal select-text">${m.text}</p>
        </div>
      `;
    }).join('');

    list.scrollTop = list.scrollHeight;
  }
}

// Global initialization
window.liveRoom = new LiveRoomManager();
