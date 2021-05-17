const mainNav = document.querySelector('.main-nav');
const mainNavButton = document.querySelector('.main-nav-button');
const mainNavToggle = document.querySelector('.main-nav-button__toggle');

mainNavButton.classList.remove('main-nav-button--nojs');

mainNavToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')){
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    mainNavButton.classList.remove('main-nav-button--closed');
    mainNavButton.classList.add('main-nav-button--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    mainNavButton.classList.add('main-nav-button--closed');
    mainNavButton.classList.remove('main-nav-button--opened');
  }
});
