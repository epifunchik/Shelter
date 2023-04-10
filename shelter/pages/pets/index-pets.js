// menu burger

const menu = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const span = document.querySelector('span');
const navLink = document.querySelectorAll('.nav-link');
const navLinkPage = document.querySelector('.nav-link.our-pets');
const navBurger = document.querySelector('.nav-burger');
const link = document.querySelector('.link');

menu.addEventListener('click', function() {
    menu.classList.toggle('active')
    span.classList.toggle('active');
    navigation.classList.toggle('active');
    navLinkPage.classList.toggle('active');
    navBurger.classList.toggle('active');
    link.classList.toggle('active');
    navLink[0].classList.toggle('active');
    navLink[2].classList.toggle('active');
    navLink[3].classList.toggle('active');
})