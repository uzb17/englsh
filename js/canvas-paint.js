// English-English Academy - Teacher Canvas Annotation & Whiteboard Tool

class CanvasPainter {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.isDrawing = false;
    this.tool = 'pen'; // 'pen', 'highlighter', 'eraser'
    this.color = '#ef4444'; // Red default for teacher correction
    this.lineWidth = 4;
    this.history = [];
    this.maxHistory = 15;

    this.initCanvasSize();
    this.bindEvents();
    window.addEventListener('resize', () => this.handleResize());
  }

  initCanvasSize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    
    // Save image data if resizing
    let imgData = null;
    if (this.canvas.width > 0 && this.canvas.height > 0) {
      try {
        imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      } catch (e) {}
    }

    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;

    this.ctx.scale(dpr, dpr);
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    if (imgData) {
      try {
        this.ctx.putImageData(imgData, 0, 0);
      } catch (e) {}
    }
  }

  handleResize() {
    // Preserve content during slight resizes
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = this.canvas.width;
    tempCanvas.height = this.canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(this.canvas, 0, 0);

    const parent = this.canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;

    this.ctx.scale(dpr, dpr);
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.drawImage(tempCanvas, 0, 0, rect.width, rect.height);
  }

  saveSnapshot() {
    if (this.history.length >= this.maxHistory) {
      this.history.shift();
    }
    this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
  }

  undo() {
    if (this.history.length > 0) {
      const prev = this.history.pop();
      this.ctx.putImageData(prev, 0, 0);
      if (window.soundEngine) window.soundEngine.playClick();
    }
  }

  clear() {
    this.saveSnapshot();
    const dpr = window.devicePixelRatio || 1;
    this.ctx.clearRect(0, 0, this.canvas.width / dpr, this.canvas.height / dpr);
    if (window.soundEngine) window.soundEngine.playClick();
  }

  getPointerPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  bindEvents() {
    const start = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      this.saveSnapshot();
      const pos = this.getPointerPos(e);
      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
      this.applyBrushSettings();
    };

    const move = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = this.getPointerPos(e);
      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
    };

    const stop = () => {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.ctx.closePath();
      }
    };

    this.canvas.addEventListener('mousedown', start);
    this.canvas.addEventListener('mousemove', move);
    window.addEventListener('mouseup', stop);

    this.canvas.addEventListener('touchstart', start, { passive: false });
    this.canvas.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', stop);
  }

  applyBrushSettings() {
    if (this.tool === 'pen') {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.globalAlpha = 1.0;
    } else if (this.tool === 'highlighter') {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = this.lineWidth * 3.5;
      this.ctx.globalAlpha = 0.35;
    } else if (this.tool === 'eraser') {
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.lineWidth = this.lineWidth * 4;
      this.ctx.globalAlpha = 1.0;
    }
  }

  setTool(tool) {
    this.tool = tool;
    this.applyBrushSettings();
  }

  setColor(color) {
    this.color = color;
    if (this.tool === 'eraser') this.tool = 'pen';
    this.applyBrushSettings();
  }

  setLineWidth(w) {
    this.lineWidth = w;
    this.applyBrushSettings();
  }
}

window.CanvasPainter = CanvasPainter;
