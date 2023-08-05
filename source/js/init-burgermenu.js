const burgerButton = document.getElementById('burger-button');
const navList = document.querySelector('.nav__list');
const navWrapper = document.querySelector('.nav__wrapper')

burgerButton.addEventListener('click', () => {
  navList.classList.toggle('shown');
  navWrapper.classList.toggle('shown');
  document.body.classList.toggle('scroll-lock');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    document.body.classList.remove('scroll-lock');
    navList.classList.remove('shown');
    navWrapper.classList.remove('shown');
  }
});
