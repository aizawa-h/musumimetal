//swiper


const swiper = new Swiper('.swiper', {

  direction: 'horizontal',

  //loop
  loop: true,

  //slide
  slidesPerView: 2,
  breakpoints:{
    767:{
      slidesPerView: 3,
    },

    1279:{
      slidesPerView: 4,
    },
  },

  //arrow
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

});

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
