let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Show the current slide
  slides[index].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

// Initial setup
document.body.addEventListener("click", nextSlide);
showSlide(slideIndex);
