/* shared.js */

// ── Research submenu toggle ──
(function () {
  const toggle = document.getElementById('researchToggle');
  const subnav = document.getElementById('researchSubnav');
  if (!toggle || !subnav) return;

  toggle.addEventListener('click', function () {
    const isOpen = subnav.classList.contains('open');
    subnav.classList.toggle('open', !isOpen);
    toggle.classList.toggle('open', !isOpen);
  });
})();

// ── Cell nav keyboard support ──
(function () {
  const btn = document.getElementById('menuBtn');
  if (!btn) return;
  btn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
})();
