var slideNumber = 1;
updateSlides(slideNumber);
function nextSlide(){
  slideNumber = slideNumber - 1;
  updateSlides(slideNumber);
};
function prevSlide(){
  slideNumber = slideNumber - 1;
  updateSlides(slideNumber);
};
function updateSlides(n){
  var slides = document.getElementById('slide');
  if(slideNumber<1){
    slideNumber = slides.length;
  }
  if(slideNumber>slides.length){
    slideNumber = 1;
  }
  for(var i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[n].style.display = inline;
};
