const slider = document.querySelector('.slider');
let scrollAmount = 0;

setInterval(() => {
  scrollAmount += 310;
  if (scrollAmount >= slider.scrollWidth) scrollAmount = 0;
  slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 3000);