/* NyXia — Starry Background */
(function() {
  var canvas = document.getElementById('starry-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var stars = [];
  var STAR_COUNT = 120;
  var W, H;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  function initStars() {
    stars = [];
    for (var i = 0; i < STAR_COUNT; i++) {
      stars.push({ x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.5+0.3,
        speed: Math.random()*0.3+0.05, opacity: Math.random()*0.8+0.2,
        pulse: Math.random()*Math.PI*2, pulseSpeed: Math.random()*0.02+0.005 });
    }
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i]; s.pulse += s.pulseSpeed; s.y -= s.speed;
      if (s.y < -5) { s.y = H+5; s.x = Math.random()*W; }
      var alpha = s.opacity*(0.6+0.4*Math.sin(s.pulse));
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba(167,139,250,'+alpha+')'; ctx.fill();
      if (s.r > 1) { ctx.beginPath(); ctx.arc(s.x,s.y,s.r*3,0,Math.PI*2);
        ctx.fillStyle = 'rgba(123,92,255,'+(alpha*0.1)+')'; ctx.fill(); }
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize); resize(); initStars(); draw();
})();
