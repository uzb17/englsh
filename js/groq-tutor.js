// English-English Academy - Groq AI English Tutor & Homework Checker
// High-Speed Multi-Model Architecture with Auto-Fallback (Qwen 3.8 27B / GPT OSS 120B / Llama)
// Fully Responsive for Mobile & Desktop

class GroqAITutor {
  constructor() {
    this.endpoint = 'https://api.groq.com/openai/v1/chat/completions';
    // Active working models on Groq in priority order
    this.candidateModels = [
      'qwen/qwen3.8-27b',
      'openai/gpt-oss-120b',
      'openai/gpt-oss-20b',
      'llama-3.1-8b-instant'
    ];
    this.model = 'qwen/qwen3.8-27b';
    this.defaultApiKey = (window.ENV && window.ENV.GROQ_API_KEY) || '';
    this.conversationHistory = [
      {
        role: 'system',
        content: `You are an expert English Language Tutor and Assistant.
Your job is to:
1. Explain grammar rules simply with short, practical examples.
2. Analyze sentences provided by the student, highlight mistakes gently, and explain WHY it's a mistake.
3. Keep answers clear, well-structured, and easy to read for language learners.
If the student asks or needs clarification in Uzbek, provide clear explanations in Uzbek with practical English examples.
Always format answers with clean bullet points, bold keywords, and short paragraphs so it's pleasant to read on both mobile phones and desktop computers.`
      }
    ];

    this.isOpen = false;
    this.isLoading = false;
  }

  getApiKey() {
    const saved = window.appState ? window.appState.getGroqApiKey() : '';
    return saved || this.defaultApiKey;
  }

  saveApiKey(key) {
    if (window.appState) {
      window.appState.setGroqApiKey(key);
    }
  }

  openTutorModal(initialPrompt = '') {
    this.isOpen = true;
    const modal = document.getElementById('ai-tutor-modal');
    if (!modal) return;
    modal.classList.remove('hidden');

    const key = this.getApiKey();
    const keyBanner = document.getElementById('ai-tutor-key-status');
    if (keyBanner) {
      const cleanModelName = (this.model || '').replace(/^.*\//, '');
      if (key) {
        keyBanner.innerHTML = `<span class="text-emerald-400 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Groq AI Faol (${cleanModelName})</span>`;
      } else {
        keyBanner.innerHTML = `<span class="text-amber-400 font-bold flex items-center gap-1"><i class="fa-solid fa-key"></i> API Kalit kiritilmagan</span>`;
      }
    }

    if (initialPrompt) {
      const input = document.getElementById('ai-tutor-input');
      if (input) {
        input.value = initialPrompt;
        this.sendMessage();
      }
    }
  }

  closeTutorModal() {
    this.isOpen = false;
    const modal = document.getElementById('ai-tutor-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  promptApiKey() {
    const current = this.getApiKey();
    const key = prompt('Groq Cloud API Keyingizni kiriting (https://console.groq.com/keys dan olingan):', current);
    if (key !== null) {
      this.saveApiKey(key);
      alert(key ? '✅ Groq API kaliti muvaffaqiyatli saqlandi!' : 'Groq API kaliti olib tashlandi.');
      this.openTutorModal();
    }
  }

  // Robust API Caller with Auto-Model Fallback
  async executeChatCompletion(messages, maxTokens = 1000) {
    const apiKey = this.getApiKey();
    if (!apiKey) throw new Error('API key kiritilmagan');

    let lastError = null;
    const tryList = [this.model, ...this.candidateModels.filter(m => m !== this.model)];

    for (const modelCandidate of tryList) {
      try {
        const res = await fetch(this.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: modelCandidate,
            messages: messages,
            temperature: 0.6,
            max_tokens: maxTokens
          })
        });

        if (res.ok) {
          const data = await res.json();
          const content = data.choices[0]?.message?.content;
          if (content) {
            this.model = modelCandidate; // Remember working model
            return content;
          }
        } else {
          const errData = await res.json().catch(() => ({}));
          lastError = new Error(errData.error?.message || `HTTP ${res.status}`);
          continue; // Try next candidate model
        }
      } catch (err) {
        lastError = err;
      }
    }

    throw lastError || new Error('Barcha modellarda xatolik yuz berdi');
  }

  async sendMessage(customText = null) {
    if (this.isLoading) return;
    const input = document.getElementById('ai-tutor-input');
    const text = customText || (input ? input.value.trim() : '');
    if (!text) return;

    if (input) input.value = '';

    // Append student message to UI
    this.appendMessage('user', text);
    this.conversationHistory.push({ role: 'user', content: text });

    this.setLoading(true);

    const apiKey = this.getApiKey();

    if (!apiKey) {
      setTimeout(() => {
        const simulatedReply = this.generateSimulatedReply(text);
        this.appendMessage('assistant', simulatedReply);
        this.conversationHistory.push({ role: 'assistant', content: simulatedReply });
        this.setLoading(false);
        this.speakLastResponse(simulatedReply);
      }, 600);
      return;
    }

    try {
      const reply = await this.executeChatCompletion(this.conversationHistory, 1024);
      this.appendMessage('assistant', reply);
      this.conversationHistory.push({ role: 'assistant', content: reply });
      this.speakLastResponse(reply);

      const keyBanner = document.getElementById('ai-tutor-key-status');
      if (keyBanner) {
        const cleanModelName = (this.model || '').replace(/^.*\//, '');
        keyBanner.innerHTML = `<span class="text-emerald-400 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Groq AI Faol (${cleanModelName})</span>`;
      }
    } catch (err) {
      console.warn('Groq API error:', err);
      const fallbackReply = `⚠️ Groq API bilan bog‘lanishda xatolik (${err.message}).\n\nSimulyatsiya qilingan javob: \n` + this.generateSimulatedReply(text);
      this.appendMessage('assistant', fallbackReply);
    } finally {
      this.setLoading(false);
    }
  }

  // Automatic Homework Essay & Grammar Checker
  async checkHomeworkSubmission(hwTitle, hwType, studentText) {
    const prompt = `Please review and evaluate this student's homework submission for "${hwTitle}" (${hwType}).
Student's work:
"${studentText}"

Please provide:
1. Score out of 100 with friendly justification.
2. Grammar and vocabulary feedback (corrected sentences with explanation of WHY).
3. 2-3 specific actionable tips to improve.
4. An encouraging closing message in English (with brief warm Uzbek note).`;

    this.openTutorModal();
    this.appendMessage('user', `Ustoz, mening uy vazifamni tekshirib bera olasizmi?\nMavzu: "${hwTitle}"\nMatn:\n"${studentText}"`);
    this.conversationHistory.push({ role: 'user', content: prompt });
    this.setLoading(true);

    const apiKey = this.getApiKey();
    if (!apiKey) {
      setTimeout(() => {
        const simulated = `🎯 **Uy Vazifasi Tahlili**\n\n` +
          `• **Baholash:** 88 / 100 ball ⭐⭐⭐⭐\n` +
          `• **Kuchli tomoni:** Fikrlar ravon va mavzuga mos yozilgan. So‘z boyligingiz yaxshi darajada.\n` +
          `• **Tavsiyalar:** Fe‘llarning zamon moslashuviga (Present Simple 3-shaxs birlikdagi -s qo‘shimchasiga) e‘tibor bering.\n` +
          `• **Grammatika tuzatishi:** Gaplarni bog‘lovchilar (because, although, therefore) bilan boyitsangiz yanada professional chiqadi.\n\n` +
          `Keep up the fantastic work! Siz ajoyib o‘rganyapsiz! 🚀`;
        this.appendMessage('assistant', simulated);
        this.setLoading(false);
      }, 700);
      return;
    }

    try {
      const reply = await this.executeChatCompletion(this.conversationHistory, 1200);
      this.appendMessage('assistant', reply);
      this.conversationHistory.push({ role: 'assistant', content: reply });
    } catch(e) {
      this.appendMessage('assistant', '⚠️ Groq API orqali tekshirishda xatolik yuz berdi. Iltimos qaytadan urinib ko‘ring.');
    } finally {
      this.setLoading(false);
    }
  }

  renderMarkdown(text) {
    if (!text) return '';
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-950 p-3 rounded-xl font-mono text-[11px] overflow-x-auto text-sky-300 my-2">$1</pre>');
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-slate-950/80 px-1.5 py-0.5 rounded text-amber-300 font-mono text-[11px]">$1</code>');
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h4 class="font-bold text-sm text-sky-400 mt-2.5 mb-1">$1</h4>');
    html = html.replace(/^## (.*$)/gim, '<h3 class="font-bold text-base text-purple-400 mt-3 mb-1.5">$1</h3>');
    // Blockquote
    html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-3 border-purple-400 pl-2.5 text-slate-300 my-1 italic bg-purple-950/20 py-0.5 rounded-r">$1</blockquote>');
    // Bold & italic
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em class="italic text-slate-200">$1</em>');
    // Bullet lists
    html = html.replace(/^[•\-\*] (.*$)/gim, '<li class="ml-4 list-disc text-slate-200 my-0.5">$1</li>');
    // Numbered lists
    html = html.replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4 list-decimal text-slate-200 my-0.5"><strong>$1.</strong> $2</li>');
    // Line breaks
    html = html.replace(/\n/g, '<br>');

    return html;
  }

  generateSimulatedReply(text) {
    const lower = text.toLowerCase();
    if (lower.includes('writing') || lower.includes('insho') || lower.includes('check') || lower.includes('tekshir')) {
      return `Good job! Here is my feedback on your writing:
• **Grammar & Flow:** Your sentences are clear. Try using more transition words like "Furthermore", "In addition", and "On the other hand".
• **Vocabulary tip:** Instead of repeating common words like "good" or "nice", use "wonderful", "effective", or "remarkable".
• **Practice:** Can you write one more sentence describing how you felt today?`;
    }
    if (lower.includes('present simple') || lower.includes('zamoni') || lower.includes('grammar')) {
      return `⚡ **Present Simple Rule:**
• Structure: Subject + Verb(s/es) + Object
• Example: "He reads books every morning."
• Esingizda tuting: He, She, It uchun fe‘lga -s yoki -es qo‘shiladi (go -> goes, study -> studies).
Savolingiz bo‘lsa, bemalol so‘rang! 😊`;
    }
    if (lower.includes('hello') || lower.includes('salom') || lower.includes('hi')) {
      return `Hello there! 👋 I am your 24/7 AI English Tutor. Whenever your teacher is away or busy, I am here to help you practice English speaking, check your homework, or explain difficult rules. What would you like to practice today?`;
    }
    return `That's an interesting question! Let's explore that in English:
• In daily conversation, native speakers say this naturally with confidence.
• Pronunciation tip: Keep your intonation smooth and stress the main verbs and nouns.
• Try making another sentence with this pattern and send it to me! 🌟`;
  }

  appendMessage(role, text) {
    const list = document.getElementById('ai-tutor-messages');
    if (!list) return;

    const isUser = role === 'user';
    const div = document.createElement('div');
    div.className = `flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`;

    const formattedHtml = isUser ? text.replace(/\n/g, '<br>') : this.renderMarkdown(text);

    div.innerHTML = `
      <div class="max-w-[94%] sm:max-w-[85%] rounded-2xl p-3 sm:p-4 text-xs sm:text-sm leading-relaxed ${
        isUser 
          ? 'bg-blue-600 text-white rounded-br-none shadow-md' 
          : 'bg-slate-800/90 text-slate-100 border border-slate-700/60 rounded-bl-none shadow-lg'
      }">
        <div class="flex items-center justify-between gap-1.5 mb-1.5 text-[11px] sm:text-xs ${isUser ? 'text-blue-200' : 'text-purple-400 font-bold'}">
          <span class="flex items-center gap-1">${isUser ? '👤 Siz' : '🤖 AI English Tutor'}</span>
          ${!isUser ? `
            <div class="flex items-center gap-1.5 ml-auto">
              <button onclick="window.groqTutor.speakText(this.getAttribute('data-text'))" data-text="${encodeURIComponent(text)}" class="px-2 py-0.5 rounded-lg bg-slate-700/70 hover:bg-purple-600 text-slate-300 hover:text-white transition-colors text-[10px] flex items-center gap-1" title="Ovoz chiqarib o‘qish">
                <i class="fa-solid fa-volume-high"></i> Ovoz
              </button>
            </div>
          ` : ''}
        </div>
        <div class="select-text">${formattedHtml}</div>
      </div>
    `;

    list.appendChild(div);
    list.scrollTop = list.scrollHeight;
  }

  setLoading(val) {
    this.isLoading = val;
    const loader = document.getElementById('ai-tutor-loader');
    if (loader) {
      if (val) loader.classList.remove('hidden');
      else loader.classList.add('hidden');
    }
  }

  speakLastResponse(text) {
    // Only speak the first clean sentence to keep it pleasant
    const firstSentence = text.split(/[.\n]/)[0];
    if (firstSentence && firstSentence.length > 5 && firstSentence.length < 160) {
      this.speakText(encodeURIComponent(firstSentence));
    }
  }

  speakText(encodedText) {
    const clean = decodeURIComponent(encodedText)
      .replace(/[*#_•`]/g, '')
      .replace(/[\u{1F600}-\u{1F64F}]/gu, '')
      .trim();

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = 'en-US';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  }
}

// Global instance
window.groqTutor = new GroqAITutor();
