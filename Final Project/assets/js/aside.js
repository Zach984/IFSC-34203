const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const sideMenu = document.querySelector("aside");
const overlay = document.getElementById("overlay");

menuOpen.addEventListener("click", function () {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
});

menuClose.addEventListener("click", function () {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", function () {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
});