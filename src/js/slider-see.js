let slideIndexSee = 1;
showSlidesSee(slideIndexSee);

function plusSlidesSee(n) {
  showSlidesSee(slideIndexSee += n);
}

function currentSlide(n) {
  showSlidesSee(slideIndexSee = n);
}

function showSlidesSee(n) {
  let i;
  let slides = document.getElementsByClassName("slidesSee");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexSee = 1}
  if (n < 1) {slideIndexSee = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexSee-1].style.display = "block";
  dots[slideIndexSee-1].className += " active";
}