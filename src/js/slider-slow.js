let slideIndexSlow = 1;
showSlidesSlow(slideIndexSlow);

function plusSlidesSlow(n) {
  showSlidesSlow(slideIndexSlow += n);
}

function currentSlide(n) {
  showSlidesSlow(slideIndexSlow = n);
}

function showSlidesSlow(n) {
  let i;
  let slides = document.getElementsByClassName("slidesSlow");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexSlow = 1}
  if (n < 1) {slideIndexSlow = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexSlow-1].style.display = "block";
  dots[slideIndexSlow-1].className += " active";
}