"use strict";

let slideIndex = 1;
showSlides(slideIndex);

function moveSlides(n) {
  showSlides(slideIndex += n);
}

function setCurrentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  // Index for modifying all slides in list
  let index;
  // Variables for HTML elements
  let slides = document.getElementsByClassName("slides");
  let selectors = document.getElementsByClassName("selector");
  // If gone forwards from 1, go to first slide
  if (n > slides.length) {slideIndex = 1}
  // If gone backwards from 1, go to final slide
  if (n < 1) {slideIndex = slides.length}
  // Loop through slides and set display to none; this ensures one slide disappears when next appears
  for (index = 0; index < slides.length; index++) {
      slides[index].style.display = "none";
  }
  // Loop through the selectors and set them all as inactive to stop all selectors becoming active as slideshow progresses
  for (index = 0; index < selectors.length; index++) {
    selectors[index].className = selectors[index].className.replace(" active", "");
  }
  // Show current slide
  slides[slideIndex-1].style.display = "block";
  // Set active "selector"
  selectors[slideIndex-1].className += " active";
}
