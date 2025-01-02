document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slider img");
    const navDots = document.querySelectorAll(".slider-nav a");
    let currentIndex = 0;

    const updateSlider = (index) => {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 80}%)`;
        });
        navDots.forEach((dot, i) => {
            dot.style.opacity = i === index ? "1" : "0.75";
        });
    };

    const goToNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
    };

    const goToSlide = (index) => {
        currentIndex = index;
        updateSlider(index);
    };

    navDots.forEach((dot, index) => {
        dot.addEventListener("click", () => goToSlide(index));
    });

    updateSlider(currentIndex);
    setInterval(goToNextSlide, 3000); // Slide every 3 seconds
});
