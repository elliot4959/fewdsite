"use strict";
(function() {
  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");
  
  menuButton.addEventListener("click", toggleMenu);
  
  let toggle = false;
  function toggleMenu() {
    if (toggle) {
      navMenu.classList.remove("show-menu"),
      toggle = false
    }
    else {
      navMenu.classList.add("show-menu"),
      toggle = true
    }
  }
  
})();