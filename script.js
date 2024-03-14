document.addEventListener('DOMContentLoaded', function() {
  let slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  // Función para cambiar el slide actual
  function changeSlide() {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active-slide');
  }

  // Cambia el slide cada 5 segundos
  setInterval(changeSlide, 5000);
});
