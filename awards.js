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

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const nextBtn = document.querySelector(".chevron-forward");
    const prevBtn = document.querySelector(".chevron-back");

    if (!carousel || images.length === 0) {
        console.warn("Carousel not found or no images inside.");
        return;
    }

    let currentIndex = 0;

    function updateCarousel() {
        const width = images[0].clientWidth;
        carousel.style.transform = `translateX(-${currentIndex * width}px)`;
        carousel.style.transition = "transform 0.5s ease-in-out";
    }

    nextBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // auto
    let intervalID = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 5000);
});

