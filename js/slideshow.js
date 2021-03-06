var slideNumber = 0;

function updateSlides(n) {
    var slides = document.getElementsByClassName('slide');
    if (n < 1) {
        slideNumber = slides.length;
    }
    if (n > slides.length) {
        slideNumber = 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[slideNumber - 1].style.opacity = "0%";
    }
    slides[slideNumber - 1].style.display = "block";
    slides[slideNumber - 1].style.float = "100%";
};

updateSlides(slideNumber);

function nextSlide() {
    slideNumber = slideNumber + 1;
    updateSlides(slideNumber);
};

function prevSlide() {
    slideNumber = slideNumber - 1;
    updateSlides(slideNumber);
};
