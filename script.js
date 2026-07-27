(function(){
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.classList.add('pre-start');

  /* ---- stars ---- */
  var starColors = ['#F7A8C9','#B79CE4','#4EC9B0','#F5B78F'];
  var starsEl = document.getElementById('stars');
  for (var i = 0; i < 14; i++) {
    var s = document.createElement('span');
    s.className = 'star';
    s.style.left = (Math.random() * 96 + 2) + '%';
    s.style.top = (Math.random() * 92 + 4) + '%';
    s.style.color = starColors[i % starColors.length];
    s.style.animationDelay = (Math.random() * 3) + 's';
    var sc = 0.6 + Math.random() * 0.8;
    s.style.width = (8 * sc) + 'px';
    s.style.height = (8 * sc) + 'px';
    starsEl.appendChild(s);
  }

  /* ---- sakura petals ---- */
  {
    var sakuraWrap = document.createElement('div');
    sakuraWrap.className = 'sakura';
    sakuraWrap.setAttribute('aria-hidden', 'true');
    var sakuraA = '<svg viewBox="0 0 11 11" shape-rendering="crispEdges"><rect x="4" y="0" width="3" height="3" fill="#FFD3E5"/><rect x="4" y="0" width="1" height="1" fill="#FFB3D1"/><rect x="0" y="3" width="3" height="3" fill="#FFD3E5"/><rect x="0" y="3" width="1" height="1" fill="#FFB3D1"/><rect x="8" y="3" width="3" height="3" fill="#FFD3E5"/><rect x="10" y="3" width="1" height="1" fill="#FFB3D1"/><rect x="1" y="7" width="3" height="3" fill="#FFD3E5"/><rect x="1" y="9" width="1" height="1" fill="#FFB3D1"/><rect x="7" y="7" width="3" height="3" fill="#FFD3E5"/><rect x="9" y="9" width="1" height="1" fill="#FFB3D1"/><rect x="4" y="4" width="3" height="3" fill="#FFB3D1"/><rect x="4" y="4" width="1" height="1" fill="#F7DD87"/><rect x="6" y="4" width="1" height="1" fill="#F7DD87"/><rect x="4" y="6" width="1" height="1" fill="#F7DD87"/><rect x="6" y="6" width="1" height="1" fill="#F7DD87"/><rect x="5" y="5" width="1" height="1" fill="#F06FA5"/></svg>';
    var sakuraB = '<svg viewBox="0 0 12 12" shape-rendering="crispEdges"><rect x="4" y="0" width="4" height="3" fill="#FFACCE"/><rect x="4" y="0" width="1" height="1" fill="#F06FA5"/><rect x="7" y="0" width="1" height="1" fill="#F06FA5"/><rect x="0" y="4" width="3" height="4" fill="#FFACCE"/><rect x="0" y="4" width="1" height="1" fill="#F06FA5"/><rect x="0" y="7" width="1" height="1" fill="#F06FA5"/><rect x="9" y="4" width="3" height="4" fill="#FFACCE"/><rect x="11" y="4" width="1" height="1" fill="#F06FA5"/><rect x="11" y="7" width="1" height="1" fill="#F06FA5"/><rect x="2" y="8" width="3" height="3" fill="#FFACCE"/><rect x="7" y="8" width="3" height="3" fill="#FFACCE"/><rect x="3" y="3" width="6" height="6" fill="#FFACCE"/><rect x="4" y="4" width="4" height="4" fill="#FFE0EF"/><rect x="5" y="3" width="1" height="1" fill="#F5D76E"/><rect x="3" y="5" width="1" height="1" fill="#F5D76E"/><rect x="8" y="6" width="1" height="1" fill="#F5D76E"/><rect x="6" y="8" width="1" height="1" fill="#F5D76E"/><rect x="5" y="5" width="2" height="2" fill="#F7DD87"/></svg>';
    var sakuraC = '<svg viewBox="0 0 11 11" shape-rendering="crispEdges"><rect x="4" y="0" width="3" height="3" fill="#FFE0EF"/><rect x="0" y="3" width="3" height="3" fill="#FFE0EF"/><rect x="8" y="3" width="3" height="3" fill="#FFE0EF"/><rect x="1" y="7" width="3" height="3" fill="#FFE0EF"/><rect x="7" y="7" width="3" height="3" fill="#FFE0EF"/><rect x="5" y="2" width="1" height="2" fill="#E86FA7"/><rect x="2" y="4" width="2" height="1" fill="#E86FA7"/><rect x="7" y="4" width="2" height="1" fill="#E86FA7"/><rect x="4" y="4" width="3" height="3" fill="#E86FA7"/><rect x="3" y="7" width="1" height="2" fill="#E86FA7"/><rect x="7" y="7" width="1" height="2" fill="#E86FA7"/><rect x="5" y="5" width="1" height="1" fill="#FFD3E5"/></svg>';
    var sakuraPetal = '<svg viewBox="0 0 4 4" shape-rendering="crispEdges"><rect x="1" y="0" width="2" height="1" fill="#FFB3D1"/><rect x="0" y="1" width="3" height="2" fill="#FFC0DC"/><rect x="2" y="1" width="1" height="1" fill="#FFD3E5"/><rect x="1" y="3" width="1" height="1" fill="#FF9EC4"/></svg>';
    var sakuraO = '<svg viewBox="0 0 13 13" shape-rendering="crispEdges"><rect x="4" y="0" width="5" height="5" fill="#E86FA7"/><rect x="0" y="4" width="5" height="5" fill="#E86FA7"/><rect x="8" y="4" width="5" height="5" fill="#E86FA7"/><rect x="1" y="7" width="5" height="5" fill="#E86FA7"/><rect x="7" y="7" width="5" height="5" fill="#E86FA7"/><rect x="5" y="1" width="3" height="3" fill="#FFACCE"/><rect x="5" y="1" width="1" height="1" fill="#FFD3E5"/><rect x="1" y="5" width="3" height="3" fill="#FFACCE"/><rect x="1" y="5" width="1" height="1" fill="#FFD3E5"/><rect x="9" y="5" width="3" height="3" fill="#FFACCE"/><rect x="2" y="8" width="3" height="3" fill="#FFACCE"/><rect x="8" y="8" width="3" height="3" fill="#FFACCE"/><rect x="5" y="5" width="3" height="3" fill="#F7DD87"/><rect x="6" y="6" width="1" height="1" fill="#F0C64F"/></svg>';
    var sakuraShapes = [sakuraO, sakuraA, sakuraB, sakuraC, sakuraPetal];
    for (var sk = 0; sk < 18; sk++) {
      var fl = document.createElement('span');
      fl.className = 'sakura-fall';
      var shapeIdx = sk % sakuraShapes.length;
      var isPetal = shapeIdx === 4;
      var depth = 0.45 + Math.random() * 0.55;
      fl.innerHTML = '<span class="sakura-sway">' + sakuraShapes[shapeIdx] + '</span>';
      fl.style.left = (1 + Math.random() * 92) + '%';
      fl.style.width = Math.round((isPetal ? 12 : 28) * depth + 5) + 'px';
      fl.style.opacity = (0.42 + depth * 0.4).toFixed(2);
      if (sk % 3 === 0) { fl.classList.add('fa'); } else if (sk % 3 === 2) { fl.classList.add('fc'); }
      fl.style.animationDuration = (26 - depth * 11 + Math.random() * 3).toFixed(1) + 's';
      fl.style.animationDelay = (-Math.random() * 24).toFixed(1) + 's';
      var sw = fl.firstChild;
      sw.style.animationDuration = (3.2 + Math.random() * 2.4).toFixed(1) + 's';
      sw.style.animationDelay = (-Math.random() * 4).toFixed(1) + 's';
      sakuraWrap.appendChild(fl);
    }
    document.body.appendChild(sakuraWrap);
  }

  /* ---- typewriter ---- */
  var title = 'Thank You, Kaka Fitri!';
  var chars = Array.from(title);
  var target = document.getElementById('typeTarget');
  var heroHeart = document.getElementById('heroHeart');
  var typed = false;
  function typewrite(){
    if (typed) return;
    typed = true;
    var caret = target.querySelector('.caret');
    if (reduced) {
      target.insertBefore(document.createTextNode(title), caret);
      caret.style.display = 'none';
      heroHeart.classList.add('show');
      return;
    }
    var i = 0;
    var timer = setInterval(function(){
      if (i >= chars.length) {
        clearInterval(timer);
        heroHeart.classList.add('show');
        setTimeout(function(){ caret.style.display = 'none'; }, 2600);
        return;
      }
      target.insertBefore(document.createTextNode(chars[i]), caret);
      i++;
    }, 85);
  }

  /* ---- reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.intersectionRatio >= 0.15) { e.target.classList.add('visible'); }
        else if (!e.isIntersecting) {
          e.target.classList.remove('visible');
          if (e.boundingClientRect.top < 0) { e.target.classList.add('from-top'); }
          else { e.target.classList.remove('from-top'); }
        }
      });
    }, { threshold: [0, 0.15] });
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('visible'); });
  }

  /* ---- scroll progress ---- */
  var fill = document.getElementById('scrollFill');
  function updateProgress(){
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    fill.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 100) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ---- audio ---- */
  var audio = document.getElementById('audio');
  try {
    var sd = document.getElementById('songData');
    if (sd) {
      var b64 = sd.textContent.replace(/\s+/g, '');
      var bin = atob(b64);
      var bytes = new Uint8Array(bin.length);
      for (var bi = 0; bi < bin.length; bi++) { bytes[bi] = bin.charCodeAt(bi); }
      audio.src = URL.createObjectURL(new Blob([bytes], { type: 'audio/mpeg' }));
    }
  } catch (errAud) {}
  var playBtn = document.getElementById('playBtn');
  var fadeTimer = null;
  function fadeTo(target, ms, then) {
    if (fadeTimer) { clearInterval(fadeTimer); fadeTimer = null; }
    var step = (target - audio.volume) / Math.max(1, ms / 50);
    fadeTimer = setInterval(function(){
      var v = audio.volume + step;
      if ((step >= 0 && v >= target) || (step < 0 && v <= target)) {
        audio.volume = target;
        clearInterval(fadeTimer); fadeTimer = null;
        if (then) then();
      } else { audio.volume = Math.min(1, Math.max(0, v)); }
    }, 50);
  }
  function playSmooth(){
    audio.volume = 0;
    var p = audio.play();
    if (p && p.then) { p.then(function(){ fadeTo(1, 2500); }).catch(function(){ audio.volume = 1; }); }
    else { fadeTo(1, 2500); }
  }
  function pauseSmooth(){ fadeTo(0, 600, function(){ audio.pause(); audio.volume = 1; }); }
  var seekFill = document.getElementById('seekFill');
  var seekTrack = document.getElementById('seekTrack');
  var timeLabel = document.getElementById('timeLabel');
  var songTitle = document.getElementById('songTitle');
  var uploadChip = document.getElementById('uploadChip');
  var audioInput = document.getElementById('audioInput');
  var hasSource = true;

  audio.addEventListener('error', function(){
    hasSource = false;
    songTitle.textContent = '♪ upload lagu dulu yaa →';
    uploadChip.classList.add('show');
  });

  function fmt(t){
    if (!isFinite(t)) return '0:00';
    var m = Math.floor(t / 60), s = Math.floor(t % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }
  function syncUI(){
    playBtn.textContent = audio.paused ? '▶' : '❚❚';
    if (audio.duration) seekFill.style.width = (audio.currentTime / audio.duration) * 100 + '%';
    timeLabel.textContent = fmt(audio.currentTime);
  }
  var playerEl = document.getElementById('player');
  audio.addEventListener('timeupdate', syncUI);
  audio.addEventListener('timeupdate', function(){
    if (!audio.duration || audio.paused || fadeTimer) return;
    var rem = audio.duration - audio.currentTime;
    if (rem < 1.2) { audio.volume = Math.max(0, rem / 1.2); }
    else if (audio.currentTime < 1.2) { audio.volume = Math.min(1, 0.2 + 0.8 * (audio.currentTime / 1.2)); }
    else if (audio.volume !== 1) { audio.volume = 1; }
  });
  audio.addEventListener('play', function(){ playerEl.classList.add('playing'); syncUI(); });
  audio.addEventListener('pause', function(){ playerEl.classList.remove('playing'); syncUI(); });

    playBtn.addEventListener('click', function(){
    if (!hasSource) { audioInput.click(); return; }
    
    if (audio.paused) { 
      audio.volume = 1;
      audio.play().catch(function(e){ console.log("Browser mencegah autoplay", e); });
    } else { 
      audio.pause(); 
    }
    syncUI(); // Paksa UI tombol update seketika agar tidak nge-bug
  });
  uploadChip.addEventListener('click', function(){ audioInput.click(); });
  audioInput.addEventListener('change', function(){
    var f = audioInput.files && audioInput.files[0];
    if (!f) return;
    audio.src = URL.createObjectURL(f);
    hasSource = true;
    uploadChip.classList.remove('show');
    songTitle.textContent = '♪ now playing: ' + f.name.toLowerCase();
    playSmooth();
  });

  /* ---- start transition: floating pixel confetti ---- */
  var PIX = {
    heart: function(c){ return '<svg viewBox="0 0 8 5" shape-rendering="crispEdges"><rect x="1" y="0" width="2" height="1" fill="' + c + '"/><rect x="5" y="0" width="2" height="1" fill="' + c + '"/><rect x="0" y="1" width="8" height="1" fill="' + c + '"/><rect x="1" y="2" width="6" height="1" fill="' + c + '"/><rect x="2" y="3" width="4" height="1" fill="' + c + '"/><rect x="3" y="4" width="2" height="1" fill="' + c + '"/></svg>'; },
    star: function(c){ return '<svg viewBox="0 0 7 7" shape-rendering="crispEdges"><rect x="3" y="0" width="1" height="2" fill="' + c + '"/><rect x="2" y="2" width="3" height="1" fill="' + c + '"/><rect x="0" y="3" width="7" height="1" fill="' + c + '"/><rect x="2" y="4" width="3" height="1" fill="' + c + '"/><rect x="3" y="5" width="1" height="2" fill="' + c + '"/></svg>'; },
    sparkle: function(c){ return '<svg viewBox="0 0 5 5" shape-rendering="crispEdges"><rect x="2" y="0" width="1" height="1" fill="' + c + '"/><rect x="1" y="1" width="3" height="1" fill="' + c + '"/><rect x="0" y="2" width="5" height="1" fill="' + c + '"/><rect x="1" y="3" width="3" height="1" fill="' + c + '"/><rect x="2" y="4" width="1" height="1" fill="' + c + '"/></svg>'; },
    rainbow: function(){ return '<svg viewBox="0 0 12 5" shape-rendering="crispEdges"><rect x="3" y="0" width="6" height="1" fill="#FF9EC4"/><rect x="2" y="1" width="8" height="1" fill="#FFC79E"/><rect x="1" y="2" width="10" height="1" fill="#F7DD87"/><rect x="0" y="3" width="12" height="1" fill="#9FE8D8"/><rect x="0" y="4" width="2" height="1" fill="#9FE8D8"/><rect x="10" y="4" width="2" height="1" fill="#9FE8D8"/></svg>'; }
  };
  function spawnParticles(){
    if (reduced) return;
    var shapes = [
      PIX.heart('#FF8FBC'), PIX.star('#F7DD87'), PIX.sparkle('#9FE8D8'),
      PIX.rainbow(), PIX.heart('#C9A8F0'), PIX.sparkle('#FFC0DC'),
      PIX.star('#C9A8F0'), PIX.heart('#FFB3D1')
    ];
    for (var i = 0; i < 16; i++) {
      var el = document.createElement('span');
      el.className = 'pix-particle';
      el.innerHTML = shapes[i % shapes.length];
      el.style.left = (4 + Math.random() * 90) + '%';
      el.style.bottom = (14 + Math.random() * 34) + '%';
      el.style.width = Math.round(14 + Math.random() * 16) + 'px';
      el.style.setProperty('--dur', (1.2 + Math.random() * 0.7).toFixed(2) + 's');
      el.style.setProperty('--delay', (Math.random() * 0.35).toFixed(2) + 's');
      document.body.appendChild(el);
      (function(node){ setTimeout(function(){ node.remove(); }, 2600); })(el);
    }
  }

  /* ---- start overlay ---- */
  var overlay = document.getElementById('startOverlay');
  document.getElementById('startBtn').addEventListener('click', function(){
    spawnParticles();
    overlay.classList.add('hidden');
    document.body.classList.remove('pre-start');
    if (reduced) { typewrite(); } else { setTimeout(typewrite, 450); }
    if (hasSource) playSmooth();
  });

      /* ---- photo placeholder ---- */
  var slot = document.getElementById('photoSlot');
  var photoInput = document.getElementById('photoInput');
  
  // Semua fungsi klik dan upload dimatikan agar foto sepenuhnya statis.
  // Tidak ada event listener yang berjalan di elemen ini.
  /* ---- tap for love ---- */
  var loveBtn = document.getElementById('loveBtn');
  var loveCount = document.getElementById('loveCount');
  var loves = 0;
  try { loves = parseInt(localStorage.getItem('k3_loves') || '0', 10) || 0; } catch (e) {}
  function renderLoves(){
    loveCount.textContent = loves > 0 ? 'kaka udah dapet ' + loves + ' love dari kita!' : 'tap buat kirim love ke kakak!';
  }
  renderLoves();
  loveBtn.addEventListener('click', function(){
    loves++;
    try { localStorage.setItem('k3_loves', String(loves)); } catch (e) {}
    renderLoves();
    if (reduced) return;
    var r = loveBtn.getBoundingClientRect();
    var colors = ['#FF8FBC', '#C9A8F0', '#FFB3D1', '#9FE8D8'];
    var n = 3 + Math.floor(Math.random() * 3);
    for (var j = 0; j < n; j++) {
      var h = document.createElement('span');
      h.className = 'love-heart';
      h.innerHTML = PIX.heart(colors[Math.floor(Math.random() * colors.length)]);
      h.style.width = Math.round(12 + Math.random() * 10) + 'px';
      h.style.left = (r.left + r.width / 2 - 10 + (Math.random() * 44 - 22)) + 'px';
      h.style.top = (r.top - 8) + 'px';
      h.style.setProperty('--dx', Math.round(Math.random() * 60 - 30) + 'px');
      document.body.appendChild(h);
      (function(node){ setTimeout(function(){ node.remove(); }, 1200); })(h);
    }
  });

  /* ---- easter egg: triple-tap the title ---- */
  var egg = document.getElementById('egg');
  var eggTaps = 0, eggTimer = null;
  target.style.cursor = 'pointer';
  target.addEventListener('click', function(){
    eggTaps++;
    clearTimeout(eggTimer);
    eggTimer = setTimeout(function(){ eggTaps = 0; }, 1200);
    if (eggTaps >= 3) { eggTaps = 0; egg.classList.add('open'); }
  });
  document.getElementById('eggClose').addEventListener('click', function(){ egg.classList.remove('open'); });
  egg.addEventListener('click', function(e){ if (e.target === egg) egg.classList.remove('open'); });
})();
