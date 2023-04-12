// menu burger

const menu = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const span = document.querySelector('span');
const navLink = document.querySelectorAll('.nav-link');
const navLinkPage = document.querySelector('.nav-link-about');
const navBurger = document.querySelector('.nav-burger');
const link = document.querySelector('.link');
const wrapper = document.querySelector('.wrapper')

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    wrapper.classList.toggle('active');
    span.classList.toggle('active');
    navigation.classList.toggle('active');
    navLinkPage.classList.toggle('active');
    link.classList.toggle('active');
    navLink[0].classList.toggle('active');
    navLink[1].classList.toggle('active');
    navLink[2].classList.toggle('active');
    if (navBurger.classList.contains('hidden')){
        navBurger.classList.remove('hidden');
    navBurger.classList.toggle('active');
    }
    // navBurger.classList.toggle('hidden');
    navBurger.classList.toggle('active');
})

navigation.addEventListener('click', function() {
    menu.classList.toggle('active')
    span.classList.toggle('active');
    navigation.classList.toggle('active');
    navBurger.classList.add('hidden');
    navLinkPage.classList.toggle('active');
    link.classList.toggle('active');
    navLink[0].classList.toggle('active');
    navLink[1].classList.toggle('active');
    navLink[2].classList.toggle('active');
    wrapper.classList.toggle('active');
})
wrapper.addEventListener('click', function() {
    menu.classList.toggle('active')
    span.classList.toggle('active');
    navigation.classList.toggle('active');
    navBurger.classList.add('hidden');
    navLinkPage.classList.toggle('active');
    link.classList.toggle('active');
    navLink[0].classList.toggle('active');
    navLink[1].classList.toggle('active');
    navLink[2].classList.toggle('active');
    wrapper.classList.toggle('active');
})

// if(document.documentElement.clientWidth > 767){
//     menu.classList.remove('active')
//     span.classList.remove('active');
//     navigation.classList.remove('active');
//     navBurger.classList.remove('active');
//     navLinkPage.classList.remove('active');
//     link.classList.remove('active');
//     navLink[0].classList.remove('active');
//     navLink[1].classList.remove('active');
//     navLink[2].classList.remove('active');
//     wrapper.classList.remove('active');
// };

//   Slider


const slider = document.querySelector('.slider-pets');
const sliderNext = document.querySelector('.slider-btn.next');
const sliderPrev = document.querySelector('.slider-btn.prev');
var sliderCards = document.querySelectorAll('.our-friends-slider-element')
let width = document.documentElement.clientWidth;
let step = 0;
console.log(width, sliderCards, sliderNext);

sliderNext.addEventListener('click', function(){
let random = Math.floor(Math.random() * 8)
console.log(random)
    if(width > 1200){
        width = 1000;
    sliderCards[5] = sliderCards[random]
    }
    step = step + width
    sliderCards[5] = sliderCards[4]
slider.style.left = -step + 'px'
})

sliderPrev.addEventListener('click', function(){
    if(width > 1200){
        width = 1000;
    }
    step = step - width
slider.style.left = width + 'px'
})

sliderCards[0] = sliderCards[1]
console.log(sliderCards[0], sliderCards[1])