//^ Get the button element by its ID
let myButton = document.querySelector("#myButton");
let rectDiv = document.querySelector(".rectangle");

const handleMouseEvents = () => {
    console.log("click");
    rectDiv.style.backgroundColor = '#f8ef3a';
}

const handleMouseEvents2 = () => {
    console.log("dblclick");
    rectDiv.classList.add("addTransition")
}

const handleMouseEvents3 = () => {
    rectDiv.classList.add('addTransition3')
};

const handleMouseEvents4 = () => {
    rectDiv.classList.add("addTransition4")
}
const handleMouseEvents5 = () => {
    rectDiv.classList.add("addTransition5")
}
const handleMouseEvents6 = () => {
    rectDiv.classList.add("addTransition6")
}

myButton.addEventListener("click", handleMouseEvents);

// myButton.addEventListener("click", (e) => {
//     handleMouseEvents(e.target);
// });

myButton.addEventListener("dblclick", handleMouseEvents2);
rectDiv.addEventListener("mouseover", handleMouseEvents3);
rectDiv.addEventListener("mouseout", handleMouseEvents4);
rectDiv.addEventListener("mousedown", handleMouseEvents5);
rectDiv.addEventListener("mouseup", handleMouseEvents6);