const mobileMenuBtn = document.querySelector('.header__menu-btn');
const mobileMenu = document.querySelector('.header__menu-list');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});