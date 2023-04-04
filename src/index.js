let menu = document.querySelector(".menu");
let menuItems = document.querySelector(".menuItems");
let hamburger = document.querySelector(".hamburgerMenu");
let closeIcon = document.querySelector(".closeIcon");
let menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItems) {
  menuItems.addEventListener("click", toggleMenu);
});
