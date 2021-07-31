const menu = document.querySelector('.header__burger');
const btnOpen = document.querySelector('.burger-open');
const btnClose = document.querySelector('.burger-close')


btnOpen.onclick = function () {
    menu.classList.toggle('header__burger-close');
    menu.classList.toggle('header__burger-open');
};
btnClose.onclick = function () {
    menu.classList.toggle('header__burger-close');
}