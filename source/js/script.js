document.addEventListener('DOMContentLoaded', ready);

function ready() {
  let pageContainer = document.querySelector('.page-header__container');
  let mainNav = document.querySelector('.main-nav');
  let mainNavToggle = document.querySelector('.main-nav__toggle');

  pageContainer.classList.remove('main-nav--nojs');

  mainNavToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--closed')){
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
      pageContainer.classList.remove('main-nav--closed');
      pageContainer.classList.add('main-nav--opened');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
      pageContainer.classList.add('main-nav--closed');
      pageContainer.classList.remove('main-nav--opened');
    }
  });
}
