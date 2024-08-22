function autoSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides');
    const totalSlides = slides.children.length;
    let currentIndex = 0;

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(moveToNextSlide, 3000);
}

autoSlide('sld1');
autoSlide('sld2');
autoSlide('sld3');