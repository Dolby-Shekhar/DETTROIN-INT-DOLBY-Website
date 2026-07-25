(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mobile menu ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- active nav link on scroll ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = navLinks.querySelectorAll('a');

  function highlightNav() {
    var current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - 140;
      var bottom = top + section.offsetHeight;
      if (window.pageYOffset >= top && window.pageYOffset < bottom) {
        current = section.getAttribute('id');
      }
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    var ans = item.querySelector('.faq-a');
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-a').style.maxHeight = 0;
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  /* ---------- growth ruler: scroll-reveal + progress fill ---------- */
  var rulerItems = document.querySelectorAll('[data-ruler-item]');
  var rulerFill = document.getElementById('rulerFill');
  var ruler = document.getElementById('ruler');

  if (prefersReduced) {
    rulerItems.forEach(function (item) { item.classList.add('visible'); });
    if (rulerFill) rulerFill.style.height = '100%';
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    rulerItems.forEach(function (item) { revealObserver.observe(item); });

    // Fill the ruler line in proportion to how far the section has been scrolled through.
    function updateRulerFill() {
      if (!ruler || !rulerFill) return;
      var rect = ruler.getBoundingClientRect();
      var viewportH = window.innerHeight;
      var total = rect.height + viewportH * 0.5;
      var scrolled = viewportH * 0.85 - rect.top;
      var pct = Math.max(0, Math.min(1, scrolled / total));
      rulerFill.style.height = (pct * 100) + '%';
    }
    window.addEventListener('scroll', updateRulerFill, { passive: true });
    window.addEventListener('resize', updateRulerFill);
    updateRulerFill();
  }

  /* ---------- enquiry form ----------
     Front-end mockup only: prevents the default navigation/reload and shows a
     success state on the button. No network request is made. Replace this
     handler with a real submission (fetch to a backend, form service, etc.)
     before deploying. */
  var form = document.getElementById('enquiryForm');
  var enquiryBtn = document.getElementById('enquiryBtn');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var originalText = enquiryBtn.textContent;
    enquiryBtn.textContent = '✓ Enquiry sent';
    enquiryBtn.classList.add('sent');
    enquiryBtn.disabled = true;
    setTimeout(function () {
      enquiryBtn.textContent = originalText;
      enquiryBtn.classList.remove('sent');
      enquiryBtn.disabled = false;
      form.reset();
    }, 2800);
  });
})();
