import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper from 'swiper/bundle';

// import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const menu = document.querySelector('.menu');
const headerContent = document.querySelector('.header__content');
const body = document.querySelector('body');
const main = document.querySelector('.main');

menu.addEventListener('click', (e)=>{
    headerContent.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('active')
    main.classList.toggle('hidden')
})
  
new Swiper(".intro__swiper", { 
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});



