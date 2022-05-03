

window.onload = function(){
  let slideIndex = 1;
  showSlides(slideIndex);
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (i > slides.length) {i = 1} 
  if (slideIndex > slides.length){slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
  slideIndex++;
  setTimeout(showSlides, 3300);
}}