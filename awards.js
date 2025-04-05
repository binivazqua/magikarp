/*
let slider_list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;



next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }

    reloadSlider();
}

let refreshSlider = setInterval(() => { next.click() }, 3000);

function reloadSlider() {



    let checkLeft = items[active].offsetLeft;
    slider_list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 3000);
}

dots.forEach((list, key) => {
    list.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})
*/

const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelector(".carousel img"),
    buttons = document.querySelector(".button");
console.log(wrapper, carousel, images, buttons);

let imageIndex = 1, intervalID;


// auto slide
const autoSlide = () => {
    // call slideimage() every 2 secs
    intervalID = setInterval(() => slideImage(++imageIndex), 2000);
}

autoSlide();

const slideImage = () => {
    //console.log(imageIndex);
    // Update carousel 
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
}

