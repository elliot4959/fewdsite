"use strict";

// Variable for slide index so we can keep track of where in the slideshow we are
let slideIndex = 1;
// Variables for the HTML elements that will be used in the javascript
// With their event listeners to run specific functions when clicked
let prevSlideButton = document.getElementById("prev-slide").addEventListener("click", prevSlide);
let nextSlideButton = document.getElementById("next-slide").addEventListener("click", nextSlide);
let selectorOne = document.getElementById("selector-one").addEventListener("click", setSlideOne);
let selectorTwo = document.getElementById("selector-two").addEventListener("click", setSlideTwo);
let selectorThree = document.getElementById("selector-three").addEventListener("click", setSlideThree);

function prevSlide() {
  // Show previous slide and update slide index
  showSlides(slideIndex -= 1);
}
function nextSlide() {
  // Show next slide and update slide index
  showSlides(slideIndex += 1);
}

function setSlideOne() {
  // Show slide one and update slide index
  showSlides(slideIndex = 1);
}
function setSlideTwo() {
  // Show slide two and update slide index
  showSlides(slideIndex = 2);
}
function setSlideThree() {
  // Show slide three and update slide index
  showSlides(slideIndex = 3);
}

// Show whichever slide the index is currently pointing to
showSlides(slideIndex);

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
