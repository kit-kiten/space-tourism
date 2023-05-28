const sliderButtonLeft = document.querySelector('.slider__button-left');
const sliderButtonRight = document.querySelector('.slider__button-right');
// vars for burger menu
const menu = document.querySelector('.menu__list');
const menuBtn = document.querySelector('.menu__btn');

// // Slider
let slideIndex = 1;

showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName('slider__box-item');

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "inline-block";
}

sliderButtonLeft.onclick = () => changeSlide(-1);
sliderButtonRight.onclick = () => changeSlide(1);

// Burger menu
menuBtn.onclick = () => menu.classList.toggle('active');