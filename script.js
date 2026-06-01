function toggle(id) {
  const item = document.getElementById(id);
  const btn = item.querySelector('.faq-q');
  const isOpen = item.classList.contains('open');
  item.classList.toggle('open', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
}

// In another component or your main script
document.addEventListener('menu-toggle', (e) => {
    console.log('Menu is open:', e.detail.open);
    // e.g. show/hide your nav drawer here
});