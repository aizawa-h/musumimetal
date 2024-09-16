

//hamburger

"use strict";
{
  const hamburger = document.querySelector('.hamburger');
  const hamburger_nav = document.querySelector('.hamburger_nav');
  const drawer__nav__link = document.querySelector('drawer__nav___link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    hamburger_nav.classList.toggle('open');
  });

  hamburger_nav.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    hamburger_nav.classList.toggle('open');
  });


  drawer__nav__link.forEach( (drawer__nav__link) => {
    drawer__nav__link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      hamburger_nav.classList.remove('open');
    });
  });


}
