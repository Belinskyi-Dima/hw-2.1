'use strict'
const burgerMenu = document.getElementsByClassName('header__button');
const burgerMenuList = document.getElementsByClassName('burger__list');
burgerMenu.addEventListener('click', burgerMenuFn);
function burgerMenuFn() {
   burgerMenu.classList.toggle('burger__list');
   burgerMenuList.classList.toggle('burger__list-active');
}