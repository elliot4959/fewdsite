"use strict";

// Function to automatically run when loaded
(function() {
  // Get the elements from the HTML we will be manipulating
  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");
  // Initialise toggle variable, defaulting to false so the menu is hidden by default
  let toggle = false;
  
  // Add an event listener to the menu button
  menuButton.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // If menu is shown
    if (toggle) {
      // Hide the menu
      navMenu.classList.remove("show-menu"),
      // Update boolean
      toggle = false
    }
    // If menu is hidden
    else {
      // Show the menu
      navMenu.classList.add("show-menu"),
      // Update boolean
      toggle = true
    }
  }
  
})();