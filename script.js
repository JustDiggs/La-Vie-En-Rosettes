function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide Back to Top button based on scroll position
window.addEventListener('scroll', function () {
  const backToTopButton = document.getElementById('back-to-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'flex';
  } else {
      backToTopButton.style.display = 'none';
  }
});
let currentSlide = 0;

function changeSlide(direction) {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide();
}

function showSlide() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const slideWidth = document.querySelector('.carousel-item').offsetWidth;
    const newPosition = -currentSlide * slideWidth;
    carouselWrapper.style.transform = `translateX(${newPosition}px)`;
}