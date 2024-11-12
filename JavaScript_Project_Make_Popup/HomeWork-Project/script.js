const btnBox = document.querySelector(".btnBox");
const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector(".close-icon");
const SubBtn = document.querySelector(".SubBtn");
const inputBox = document.querySelector(".inputBox");
const form = document.querySelector("form");



btnBox.addEventListener("click", () => {
    popupContainer.classList.add("popup-open")
})
closeIcon.addEventListener("click", () => {
    popupContainer.classList.remove("popup-open")
})

popupContainer.addEventListener("click", () => {
    popupContainer.classList.remove("popup-open")
})
popup.addEventListener("click", (e) => {
    e.stopPropagation();
})

SubBtn.addEventListener("click", () => {
    popupContainer.classList.remove("popup-open");
    inputBox.value = ''; // Clear the input value
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
})