// English-English Academy - Supabase Cloud Database Client
// 100% Free PostgreSQL Cloud Database Integration
// Provides Cross-Device Student Auth, Realtime Homework & Chat Synchronization

class SupabaseService {
  constructor() {
    this.client = null;
    this.isReady = false;
    this.realtimeChannel = null;
    this.subscribers = {
      students: [],
      homeworks: [],
      chats: []
    };
    this.init();
  }

  // Get configuration from localStorage or window.ENV
  getConfig() {
    const localUrl = localStorage.getItem('eea_supabase_url');
    const localKey = localStorage.getItem('eea_supabase_anon_key');
    const envUrl = (window.ENV && window.ENV.SUPABASE_URL) || '';
    const envKey = (window.ENV && window.ENV.SUPABASE_ANON_KEY) || '';

    return {
      url: (localUrl || envUrl || '').trim(),
      key: (localKey || envKey || '').trim()
    };
  }

  isConfigured() {
    const config = this.getConfig();
    return Boolean(config.url && config.key && config.url.startsWith('https://'));
  }

  init() {
    const config = this.getConfig();
    if (this.isConfigured() && window.supabase && typeof window.supabase.createClient === 'function') {
      try {
        this.client = window.supabase.createClient(config.url, config.key, {
          auth: {
            persistSession: false,
            autoRefreshToken: false
          }
        });
        this.isReady = true;
        this.setupRealtime();
        console.log('✅ Supabase Client initialized successfully:', config.url);
      } catch (err) {
        console.warn('⚠️ Supabase init error:', err);
        this.isReady = false;
      }
    } else {
      this.isReady = false;
    }
  }

  // Save credentials from UI
  saveCredentials(url, key) {
    const cleanUrl = (url || '').trim().replace(/\/+$/, '');
    const cleanKey = (key || '').trim();

    if (cleanUrl) localStorage.setItem('eea_supabase_url', cleanUrl);
    else localStorage.removeItem('eea_supabase_url');

    if (cleanKey) localStorage.setItem('eea_supabase_anon_key', cleanKey);
    else localStorage.removeItem('eea_supabase_anon_key');

    this.init();
    return this.isReady;
  }

  // Clear credentials
  clearCredentials() {
    localStorage.removeItem('eea_supabase_url');
    localStorage.removeItem('eea_supabase_anon_key');
    if (this.realtimeChannel) {
      try { this.realtimeChannel.unsubscribe(); } catch(e) {}
    }
    this.client = null;
    this.isReady = false;
  }

  // Test connection to Supabase
  async testConnection(url, key) {
    if (!window.supabase) {
      return { success: false, error: 'Supabase JS kutubxonasi yuklanmagan. Internet aloqasini tekshiring.' };
    }

    try {
      const testClient = window.supabase.createClient(url.trim(), key.trim(), {
        auth: { persistSession: false }
      });

      // Try selecting 1 row from students table
      const { data, error } = await testClient
        .from('students')
        .select('id')
        .limit(1);

      if (error) {
        // Check if table does not exist
        if (error.code === '42P01' || error.message?.includes('does not exist')) {
          return {
            success: false,
            error: 'Ulanish amalga oshdi, lekin "students" jadvali topilmadi! Iltimos, pastdagi tayyor SQL kodni Supabase SQL Editor\'da ishga tushiring.'
          };
        }
        return { success: false, error: 'Supabase xatosi: ' + error.message };
      }

      return { success: true, count: data ? data.length : 0 };
    } catch (e) {
      return { success: false, error: 'Ulanishda xatolik: ' + (e.message || e) };
    }
  }

  // ==========================================
  // REALTIME SUBSCRIPTION
  // ==========================================
  setupRealtime() {
    if (!this.client || !this.isReady) return;

    try {
      if (this.realtimeChannel) {
        this.realtimeChannel.unsubscribe();
      }

      this.realtimeChannel = this.client
        .channel('eea-realtime-sync')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'students' }, (payload) => {
          this.subscribers.students.forEach(cb => cb(payload));
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'homeworks' }, (payload) => {
          this.subscribers.homeworks.forEach(cb => cb(payload));
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'chats' }, (payload) => {
          this.subscribers.chats.forEach(cb => cb(payload));
        })
        .subscribe();
    } catch (err) {
      console.warn('Realtime subscription error:', err);
    }
  }

  onStudentsChange(callback) {
    if (typeof callback === 'function') this.subscribers.students.push(callback);
  }

  onHomeworksChange(callback) {
    if (typeof callback === 'function') this.subscribers.homeworks.push(callback);
  }

  onChatsChange(callback) {
    if (typeof callback === 'function') this.subscribers.chats.push(callback);
  }

  // ==========================================
  // STUDENTS CRUD
  // ==========================================
  studentToDb(s) {
    return {
      id: s.id,
      name: s.name,
      username: (s.username || '').toLowerCase().trim(),
      password: s.password,
      level: s.level || 'A0',
      xp: Number(s.xp) || 0,
      streak: Number(s.streak) || 1,
      total_time_spent_minutes: Number(s.totalTimeSpentMinutes) || 0,
      registered_date: s.registeredDate || new Date().toISOString().split('T')[0],
      completed_lessons: s.completedLessons || [],
      quiz_scores: s.quizScores || {},
      starred_words: s.starredWords || [],
      comprehension_ratings: s.comprehensionRatings || {},
      updated_at: new Date().toISOString()
    };
  }

  studentFromDb(row) {
    return {
      id: row.id,
      name: row.name,
      username: row.username,
      password: row.password,
      level: row.level || 'A0',
      xp: row.xp || 0,
      streak: row.streak || 1,
      totalTimeSpentMinutes: row.total_time_spent_minutes || 0,
      registeredDate: row.registered_date || '',
      completedLessons: row.completed_lessons || [],
      quizScores: row.quiz_scores || {},
      starredWords: row.starred_words || [],
      comprehensionRatings: row.comprehension_ratings || {}
    };
  }

  async fetchStudents() {
    if (!this.client || !this.isReady) return null;
    try {
      const { data, error } = await this.client
        .from('students')
        .select('*')
        .order('registered_date', { ascending: false });

      if (error) throw error;
      return (data || []).map(r => this.studentFromDb(r));
    } catch (err) {
      console.warn('fetchStudents error:', err);
      return null;
    }
  }

  async saveStudent(student) {
    if (!this.client || !this.isReady) return false;
    try {
      const dbObj = this.studentToDb(student);
      const { error } = await this.client
        .from('students')
        .upsert(dbObj, { onConflict: 'id' });

      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('saveStudent error:', err);
      return false;
    }
  }

  async deleteStudent(studentId) {
    if (!this.client || !this.isReady) return false;
    try {
      const { error } = await this.client
        .from('students')
        .delete()
        .eq('id', studentId);

      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('deleteStudent error:', err);
      return false;
    }
  }

  async getStudentByUsername(username) {
    if (!this.client || !this.isReady) return null;
    try {
      const clean = (username || '').toLowerCase().trim();
      const { data, error } = await this.client
        .from('students')
        .select('*')
        .eq('username', clean)
        .maybeSingle();

      if (error) throw error;
      return data ? this.studentFromDb(data) : null;
    } catch (err) {
      console.warn('getStudentByUsername error:', err);
      return null;
    }
  }

  // ==========================================
  // HOMEWORKS CRUD
  // ==========================================
  homeworkToDb(h) {
    return {
      id: h.id,
      title: h.title,
      type: h.type || 'writing',
      category_name: h.categoryName || 'Writing (Insho)',
      prompt: h.prompt,
      instructions: h.instructions || '',
      created_date: h.createdDate || new Date().toISOString().split('T')[0],
      due_date: h.dueDate || '',
      max_score: Number(h.maxScore) || 100,
      assigned_to: h.assignedTo || 'all',
      assigned_to_name: h.assignedToName || 'Barcha o‘quvchilar',
      submissions: h.submissions || [],
      updated_at: new Date().toISOString()
    };
  }

  homeworkFromDb(row) {
    return {
      id: row.id,
      title: row.title,
      type: row.type,
      categoryName: row.category_name,
      prompt: row.prompt,
      instructions: row.instructions,
      createdDate: row.created_date,
      dueDate: row.due_date,
      maxScore: row.max_score,
      assignedTo: row.assigned_to,
      assignedToName: row.assigned_to_name,
      submissions: row.submissions || []
    };
  }

  async fetchHomeworks() {
    if (!this.client || !this.isReady) return null;
    try {
      const { data, error } = await this.client
        .from('homeworks')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return (data || []).map(r => this.homeworkFromDb(r));
    } catch (err) {
      console.warn('fetchHomeworks error:', err);
      return null;
    }
  }

  async saveHomework(homework) {
    if (!this.client || !this.isReady) return false;
    try {
      const dbObj = this.homeworkToDb(homework);
      const { error } = await this.client
        .from('homeworks')
        .upsert(dbObj, { onConflict: 'id' });

      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('saveHomework error:', err);
      return false;
    }
  }

  async deleteHomework(homeworkId) {
    if (!this.client || !this.isReady) return false;
    try {
      const { error } = await this.client
        .from('homeworks')
        .delete()
        .eq('id', homeworkId);

      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('deleteHomework error:', err);
      return false;
    }
  }

  // ==========================================
  // CHATS CRUD
  // ==========================================
  chatToDb(m, threadId) {
    return {
      id: m.id,
      thread_id: threadId,
      sender_id: m.senderId,
      sender_name: m.senderName,
      sender_role: m.senderRole,
      type: m.type || 'text',
      text: m.text || '',
      audio_data_url: m.audioDataUrl || null,
      audio_duration: m.audioDuration || null,
      file_data_url: m.fileDataUrl || null,
      file_name: m.fileName || null,
      file_size: m.fileSize || null,
      file_type: m.fileType || null,
      timestamp: m.timestamp || '',
      edited: Boolean(m.edited)
    };
  }

  chatFromDb(row) {
    return {
      id: row.id,
      senderId: row.sender_id,
      senderName: row.sender_name,
      senderRole: row.sender_role,
      type: row.type || 'text',
      text: row.text || '',
      audioDataUrl: row.audio_data_url || null,
      audioDuration: row.audio_duration || null,
      fileDataUrl: row.file_data_url || null,
      fileName: row.file_name || null,
      fileSize: row.file_size || null,
      fileType: row.file_type || null,
      timestamp: row.timestamp || '',
      edited: Boolean(row.edited)
    };
  }

  async fetchAllChats() {
    if (!this.client || !this.isReady) return null;
    try {
      const { data, error } = await this.client
        .from('chats')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;

      // Group by thread_id
      const chatsMap = {};
      (data || []).forEach(r => {
        if (!chatsMap[r.thread_id]) chatsMap[r.thread_id] = [];
        chatsMap[r.thread_id].push(this.chatFromDb(r));
      });
      return chatsMap;
    } catch (err) {
      console.warn('fetchAllChats error:', err);
      return null;
    }
  }

  async saveChatMessage(threadId, messageObj) {
    if (!this.client || !this.isReady) return false;
    try {
      const dbObj = this.chatToDb(messageObj, threadId);
      const { error } = await this.client
        .from('chats')
        .upsert(dbObj, { onConflict: 'id' });

      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('saveChatMessage error:', err);
      return false;
    }
  }

  async updateChatMessage(messageId, newText) {
    if (!this.client || !this.isReady) return false;
    try {
      const { error } = await this.client
        .from('chats')
        .update({
          text: newText,
          edited: true
        })
        .eq('id', messageId);

      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('updateChatMessage error:', err);
      return false;
    }
  }

  async deleteChatMessage(messageId) {
    if (!this.client || !this.isReady) return false;
    try {
      const { error } = await this.client
        .from('chats')
        .delete()
        .eq('id', messageId);

      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('deleteChatMessage error:', err);
      return false;
    }
  }

  // ==========================================
  // BULK SYNC LOCAL DATA TO CLOUD
  // ==========================================
  async syncLocalToCloud(localStudents = [], localHomeworks = [], localChats = {}) {
    if (!this.client || !this.isReady) return { success: false, error: 'Supabase ulanmagan' };

    try {
      let syncedStudents = 0;
      let syncedHomeworks = 0;
      let syncedChats = 0;

      // Sync students
      if (localStudents && localStudents.length > 0) {
        const studentRows = localStudents.map(s => this.studentToDb(s));
        const { error: sErr } = await this.client
          .from('students')
          .upsert(studentRows, { onConflict: 'id' });
        if (!sErr) syncedStudents = studentRows.length;
      }

      // Sync homeworks
      if (localHomeworks && localHomeworks.length > 0) {
        const hwRows = localHomeworks.map(h => this.homeworkToDb(h));
        const { error: hErr } = await this.client
          .from('homeworks')
          .upsert(hwRows, { onConflict: 'id' });
        if (!hErr) syncedHomeworks = hwRows.length;
      }

      // Sync chats
      const chatRows = [];
      Object.keys(localChats || {}).forEach(threadId => {
        (localChats[threadId] || []).forEach(m => {
          chatRows.push(this.chatToDb(m, threadId));
        });
      });

      if (chatRows.length > 0) {
        const { error: cErr } = await this.client
          .from('chats')
          .upsert(chatRows, { onConflict: 'id' });
        if (!cErr) syncedChats = chatRows.length;
      }

      return {
        success: true,
        syncedStudents,
        syncedHomeworks,
        syncedChats
      };
    } catch (err) {
      return { success: false, error: err.message || err };
    }
  }
}

window.supabaseService = new SupabaseService();
