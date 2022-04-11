import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper from 'swiper/bundle';

import { Navigation, Pagination } from 'swiper';

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
        disableOnInteraction: true,
    },
});

new Swiper(".comments__swiper", { 
    slidesPerView: 4,
    spaceBetween: 40,
    modules: [Navigation],
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        992: {
        slidesPerView: 4,
        spaceBetween: 10,
        },
        768:{
        slidesPerView: 3,
        spaceBetween: 10,
        },
        576:{
        slidesPerView: 2,
        spaceBetween: 10,
        },
        320:{
        slidesPerView: 2,
        spaceBetween: 10,
        }
    },
});

new Swiper(".gallery__swiper", { 
    slidesPerView: 4,
    spaceBetween: 40,
    modules: [Navigation],
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        992: {
        slidesPerView: 3,
        spaceBetween: 10,
        },
        768:{
        slidesPerView: 3,
        spaceBetween: 10,
        },
        576:{
        slidesPerView: 2,
        spaceBetween: 10,
        },
        320:{
        slidesPerView: 2,
        spaceBetween: 10,
        }
    },
});

new Swiper(".systems__swiper", { 
    slidesPerView: 4,
    spaceBetween: 40,
    modules: [Navigation],
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        992: {
        slidesPerView: 4,
        spaceBetween: 10,
        },
        768:{
        slidesPerView: 3,
        spaceBetween: 10,
        },
        576:{
        slidesPerView: 2,
        spaceBetween: 10,
        },
        320:{
        slidesPerView: 2,
        spaceBetween: 10,
        }
    },
});



