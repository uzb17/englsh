// English-English Academy - Web Audio & Web Speech Synthesizer Engine

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.volume = 0.5;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainValue = 0.3) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainValue * this.volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio tone error', e);
    }
  }

  // UI Click / Tap pop
  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.2 * this.volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }

  // Correct answer cheerful chime (C5 -> E5 -> G5)
  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.22, 0.25);
      }, idx * 70);
    });
  }

  // Incorrect answer soft buzzer (not harsh)
  playIncorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(180, now + 0.1);

      gain.gain.setValueAtTime(0.25 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  // Wheel tick click
  playTick() {
    if (this.muted) return;
    this.playTone(700, 'square', 0.02, 0.15);
  }

  // Triumphant Fanfare for 100% or Level Complete
  playFanfare() {
    if (this.muted) return;
    this.init();
    const chords = [
      { freq: 523.25, time: 0 },
      { freq: 659.25, time: 100 },
      { freq: 783.99, time: 200 },
      { freq: 1046.50, time: 350 },
      { freq: 880.00, time: 550 },
      { freq: 1046.50, time: 700 },
      { freq: 1318.51, time: 900 }
    ];
    chords.forEach(item => {
      setTimeout(() => {
        this.playTone(item.freq, 'triangle', 0.35, 0.3);
      }, item.time);
    });
  }

  playStreakMilestone() {
    this.playFanfare();
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }
}

// Web Speech API wrapper for English Pronunciation
class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.preferredVoice = null;
    this.rate = 0.9; // Slightly slower for language learners
    this.pitch = 1.0;
    this.accent = 'en-US'; // 'en-US' or 'en-GB'

    if (this.synth) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices().filter(v => v.lang.startsWith('en'));
    this.updatePreferredVoice();
  }

  setAccent(accent) {
    this.accent = accent;
    this.updatePreferredVoice();
  }

  setRate(rate) {
    this.rate = Math.max(0.5, Math.min(1.5, rate));
  }

  updatePreferredVoice() {
    if (!this.voices.length) return;
    const match = this.voices.find(v => v.lang === this.accent) ||
                  this.voices.find(v => v.lang.startsWith('en')) ||
                  this.voices[0];
    this.preferredVoice = match;
  }

  speak(text, onStart = null, onEnd = null) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported on this browser.');
      return;
    }

    // Cancel current speaking
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.preferredVoice) {
      utterance.voice = this.preferredVoice;
    }
    utterance.lang = this.accent;
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;

    // Safety fallback for onEnd
    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

// Global audio instances
window.soundEngine = new SoundEngine();
window.speechEngine = new SpeechEngine();
