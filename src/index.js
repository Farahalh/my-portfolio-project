let sideNavigator = document.querySelector(".sideNavigator");
let overlay = document.querySelector(".overlay");
let hamburger = document.querySelector(".hamburger");
let menuX = document.querySelector(".menuX");
let menuItems = document.querySelectorAll(".menuLink");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleHamburger);
});

hamburger.addEventListener("click", toggleHamburger);
menuX.addEventListener("click", toggleHamburger);
overlay.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  overlay.classList.toggle("showOverlay");
  sideNavigator.classList.toggle("showNavigator");
}
