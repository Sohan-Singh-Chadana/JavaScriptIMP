const hamburgerIcon = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const gotoTop = document.querySelector(".go-to-top");
const mainContent = document.querySelector(".main-content");
const nav = document.querySelector("nav")

hamburgerIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    headerContent.classList.add("menu-open")
});

nav.addEventListener("click", (e) => {
    e.stopPropagation();
})

closeIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    headerContent.classList.remove("menu-open")
});

gotoTop.addEventListener("click", (e) => {
    e.stopPropagation();
    mainContent.scrollTo(0, 0)
});

window.addEventListener("click", (e) => {
    headerContent.classList.remove("menu-open")
});