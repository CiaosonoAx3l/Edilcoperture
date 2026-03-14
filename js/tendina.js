const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('active');
  isOpen ? closeMobile() : openMobile();
});

function openMobile() {
  hamburger.classList.add('open');
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleMobileSub(e) {
  e.preventDefault();
  const sub = e.target.nextElementSibling;
  sub.classList.toggle('open');
  e.target.textContent = sub.classList.contains('open')
    ? 'Servizi ▴' : 'Servizi ▾';
}

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));