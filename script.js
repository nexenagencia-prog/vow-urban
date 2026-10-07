const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
  });
});

const featureCards = document.querySelectorAll('.feature-card');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (featureCards.length && !reduceMotion && 'IntersectionObserver' in window) {
  document.body.classList.add('motion-ready');

  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -12% 0px' });

  featureCards.forEach((card) => cardObserver.observe(card));
}

document.querySelector('#year').textContent = new Date().getFullYear();