const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const topBtn = document.querySelector('.top-btn');

menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 500);
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
