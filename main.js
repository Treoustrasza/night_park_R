/* ══════════════════════════════════════
   星星生成
══════════════════════════════════════ */
const starsEl = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() < 0.15 ? 3 : Math.random() < 0.4 ? 2 : 1;
  s.style.cssText = `
    width:${size}px; height:${size}px;
    top:${Math.random() * 65}%;
    left:${Math.random() * 100}%;
    --d:${(2 + Math.random() * 4).toFixed(1)}s;
    --a1:${(0.1 + Math.random() * 0.3).toFixed(2)};
    --a2:${(0.6 + Math.random() * 0.4).toFixed(2)};
    animation-delay:${(Math.random() * 4).toFixed(1)}s;
  `;
  starsEl.appendChild(s);
}

/* ══════════════════════════════════════
   Web Audio（柔和正弦波）
══════════════════════════════════════ */
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTypeSound() {
  try {
    const ctx  = getAudioCtx();
    const freq = 320 + Math.random() * 80;
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    const lpf  = ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.75, ctx.currentTime + 0.08);

    lpf.type = 'lowpass';
    lpf.frequency.value = 900;

    gain.gain.setValueAtTime(0.055, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);

    osc.connect(lpf);
    lpf.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.13);
  } catch (e) { /* 静默失败 */ }
}

/* ══════════════════════════════════════
   开场界面
   点击 / 按键 → 解锁 AudioContext → 淡出开场 → 开始对话
══════════════════════════════════════ */
const titleScreen = document.getElementById('title-screen');
const overlay     = document.getElementById('overlay');

// overlay 初始隐藏，title-screen 在最上层遮住一切
overlay.classList.add('hidden');

function startGame() {
  getAudioCtx().resume();
  playTypeSound();

  // 先让 overlay 就位（此时 title-screen 还在上层遮住它）
  overlay.classList.remove('hidden');

  // title-screen 淡出；淡出期间 overlay 在下方兜底，不会露出背景
  titleScreen.classList.add('fade-out');

  // 淡出完成后再开始打字
  setTimeout(() => {
    beginDialog();
  }, 700);
}

titleScreen.addEventListener('click', startGame, { once: true });
document.addEventListener('keydown', () => {
  if (titleScreen.classList.contains('fade-out')) return;
  startGame();
}, { once: true });

/* ══════════════════════════════════════
   打字机核心
══════════════════════════════════════ */
const textEl    = document.getElementById('overlay-text');
const choicesEl = document.getElementById('choices');
const endEl     = document.getElementById('end-text');

let typingTimer = null;

/**
 * typeTextInto(container, lines, onDone)
 * ''            → 空行间距
 * '{PAUSE:ms}'  → 停顿不出字
 * 其他          → 逐字打出
 */
// 将一行文字按行内 {PAUSE:ms} 拆成片段数组
// 例："你好{PAUSE:300}再见" → [{text:'你好'}, {pause:300}, {text:'再见'}]
function parseSegments(line) {
  const segs = [];
  const re = /\{PAUSE:(\d+)\}/g;
  let last = 0, m;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) segs.push({ text: line.slice(last, m.index) });
    segs.push({ pause: parseInt(m[1]) });
    last = m.index + m[0].length;
  }
  if (last < line.length) segs.push({ text: line.slice(last) });
  return segs;
}

function typeTextInto(container, lines, onDone) {
  container.innerHTML = '';
  if (typingTimer) { clearTimeout(typingTimer); typingTimer = null; }

  // 每个 line 对应一个 <p>，同时预解析行内片段
  const lineEls = lines.map(line => {
    const isBlankLine = line === '';
    const isFullPause = /^\{PAUSE:(\d+)\}$/.test(line);
    const p = document.createElement('p');
    p.className = 'dialog-line';
    if (isBlankLine || isFullPause) {
      p.innerHTML = '&nbsp;';
      p.style.minHeight = '0';
      p.style.height    = isFullPause ? '0' : '0.5em';
      p.style.overflow  = 'hidden';
    }
    container.appendChild(p);
    return {
      el:        p,
      segments:  (isBlankLine || isFullPause) ? [] : parseSegments(line),
      fullPause: isFullPause ? parseInt(line.match(/\d+/)[0]) : 0,
      isEmpty:   isBlankLine,
    };
  });

  const cursor = document.createElement('span');
  cursor.className   = 'type-cursor';
  cursor.textContent = '█';

  let lineIdx = 0;
  let segIdx  = 0;
  let charIdx = 0;

  function tick() {
    // 跳过空行
    while (lineIdx < lineEls.length && lineEls[lineIdx].isEmpty) lineIdx++;

    if (lineIdx >= lineEls.length) {
      // 全部打完，光标停在最后一行
      const lastReal = [...lineEls].reverse().find(l => !l.isEmpty && l.segments.length > 0);
      if (lastReal) lastReal.el.appendChild(cursor);
      if (onDone) onDone();
      return;
    }

    const entry = lineEls[lineIdx];

    // 整行停顿（独占行的 {PAUSE:ms}）
    if (entry.fullPause > 0) {
      lineIdx++; segIdx = 0; charIdx = 0;
      typingTimer = setTimeout(tick, entry.fullPause);
      return;
    }

    const segs = entry.segments;

    // 当前行第一个片段开始时，把光标移入该行
    if (segIdx === 0 && charIdx === 0) entry.el.appendChild(cursor);

    // 跳过已完成的片段
    while (segIdx < segs.length && segs[segIdx].pause !== undefined) {
      // 遇到行内停顿片段
      const ms = segs[segIdx].pause;
      segIdx++;
      typingTimer = setTimeout(tick, ms);
      return;
    }

    if (segIdx >= segs.length) {
      // 当前行所有片段打完，换下一行
      lineIdx++; segIdx = 0; charIdx = 0;
      typingTimer = setTimeout(tick, 120);
      return;
    }

    const seg = segs[segIdx];
    const text = seg.text;

    if (charIdx < text.length) {
      entry.el.insertBefore(document.createTextNode(text[charIdx]), cursor);
      charIdx++;
      playTypeSound();

      const ch = text[charIdx - 1];
      let delay;
      if      (/[。！？]/.test(ch))  delay = 420 + Math.random() * 80;
      else if (/[，、…]/.test(ch))   delay = 220 + Math.random() * 60;
      else if (/[～~]/.test(ch))     delay = 160;
      else                            delay = 95  + Math.random() * 40;

      typingTimer = setTimeout(tick, delay);
    } else {
      // 当前片段打完，移到下一片段
      segIdx++; charIdx = 0;
      tick(); // 立即处理（可能是停顿片段，不需要额外延迟）
    }
  }

  tick();
}

function typeText(lines, onDone) {
  typeTextInto(textEl, lines, onDone);
}

function showChoices(options) {
  choicesEl.innerHTML = '';
  choicesEl.classList.remove('visible');
  setTimeout(() => {
    options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerHTML = `<span class="choice-arrow">▶</span>${opt.label}`;
      btn.style.animationDelay = `${i * 140}ms`;
      btn.onclick = opt.action;
      choicesEl.appendChild(btn);
    });
    choicesEl.classList.add('visible');
  }, 350);
}

function setScene(lines, options) {
  choicesEl.innerHTML = '';
  choicesEl.classList.remove('visible');
  typeText(lines, () => showChoices(options));
}

/* ══════════════════════════════════════
   对话流程
══════════════════════════════════════ */
function beginDialog() {
  setScene(
    ['很荣幸见到您。'],
    [
      {
        label: '我也是',
        action: () => setScene(
          ['工作很辛苦吗？{PAUSE:400}累了吗？'],
          [
            { label: '是的', action: onYes },
            { label: '不是', action: onNo  },
          ]
        )
      },
      {
        label: '……',
        action: () => setScene(
          ['工作很辛苦吗？{PAUSE:400}累了吗？'],
          [
            { label: '是的', action: onYes },
            { label: '不是', action: onNo  },
          ]
        )
      },
    ]
  );
}

/* ── 是的 / 果然还是…… → 收下礼物 → 闪光 → 蒙版散开 ── */
const flashEl = document.getElementById('flash-screen');

function playFlashSound() {
  try {
    const audio = new Audio('611113__5ro4__bell-ding-1.wav');
    audio.play();
  } catch (e) { /* 静默失败 */ }
}

// 时序（从打字完成后 900ms 开始计）：
//   t=0        闪光层出现 + 音效
//   t=0        overlay 开始 clip-path 散开（1.6s）
//   t=1600ms   overlay 散开完毕，立刻 hidden
//   t=2000ms   闪光层才淡出完毕并移除（比 overlay 消失晚 400ms，确保不露对话）
function giveGift() {
  choicesEl.innerHTML = '';
  choicesEl.classList.remove('visible');
  typeText(['我明白了。', '{PAUSE:900}', '', '那么，请务必收下这个。'], () => {
    setTimeout(() => {
      // ① 闪光层盖住一切 + 音效
      flashEl.classList.add('flash-active');
      playFlashSound();

      // ② 同时让 overlay 开始散开（闪光层在上方，散开过程不可见）
      overlay.style.transition = 'clip-path 1.6s cubic-bezier(0.4,0,0.2,1), opacity 1.6s ease';
      overlay.style.clipPath   = 'circle(0% at 50% 50%)';
      overlay.style.opacity    = '0';

      // ③ overlay 散开完毕后立刻 hidden
      setTimeout(() => {
        overlay.style.transition = '';
        overlay.style.clipPath   = '';
        overlay.style.opacity    = '';
        overlay.classList.add('hidden');
      }, 1650);

      // ④ 闪光层在 overlay 彻底消失之后才淡出（CSS 动画 0.55s，延迟到 t=2s 才移除 class）
      setTimeout(() => {
        flashEl.classList.remove('flash-active');
      }, 2000);

    }, 900);
  });
}

function onYes() { giveGift(); }

/* ── 不是 → 结束画面 ── */
function onNo() {
  // 先填充内容
  endEl.innerHTML = `
    <div class="deco-line"></div>
    <div id="end-dialog"></div>
    <div id="end-choices" class="choices"></div>
    <div class="deco-line"></div>
  `;
  // 直接显示 end-text，同时隐藏 overlay，两者都是瞬间切换无过渡
  endEl.classList.add('show');
  overlay.classList.add('hidden');

  const endDialogEl  = document.getElementById('end-dialog');
  const endChoicesEl = document.getElementById('end-choices');

  typeTextInto(
    endDialogEl,
    [
      '是吗……真是遗憾，那么我就先告辞了。',
      '{PAUSE:500}', '',
      '请您保重。以后，肯定还会再见的。',
    ],
    () => {
      setTimeout(() => {
        [
          { label: '等等！',  action: onWait    },
          { label: '再见。',  action: closePage },
        ].forEach((opt, i) => {
          const btn = document.createElement('button');
          btn.className = 'choice-btn';
          btn.innerHTML = `<span class="choice-arrow">▶</span>${opt.label}`;
          btn.style.animationDelay = `${i * 140}ms`;
          btn.onclick = opt.action;
          endChoicesEl.appendChild(btn);
        });
        endChoicesEl.classList.add('visible');
      }, 350);
    }
  );
}

/* ── 等等！→ 切回主 overlay ── */
function onWait() {
  // 瞬间切换：显示 overlay，隐藏 end-text
  endEl.classList.remove('show');
  overlay.classList.remove('hidden');

  setScene(
    ['请问还有什么我能帮您的吗？'],
    [
      { label: '果然还是……',      action: giveGift  },
      { label: '不，没什么，再见。', action: closePage },
    ]
  );
}

/* ── 关闭网页 ── */
function closePage() {
  document.body.style.transition = 'opacity 0.8s ease';
  document.body.style.opacity    = '0';
  setTimeout(() => window.close(), 900);
}
