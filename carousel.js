document.addEventListener("DOMContentLoaded", function () {

    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-image");

    function showSlide(index) {
        images.forEach(img => img.classList.remove("active"));

        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = index;
        }

        images[currentIndex].classList.add("active");
    }

    window.changeSlide = function(step) {
        showSlide(currentIndex + step);
    };

    showSlide(0);
});