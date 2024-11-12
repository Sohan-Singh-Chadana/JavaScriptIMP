const usernameInput = document.querySelector("#username");
const paragraph = document.querySelector("p");
const form = document.querySelector("form");
form.style.backgroundColor = 'pink'

// document.body.addEventListener("click", function(e) {
//     console.log(e.target)
// })
//? <====<<<<<<======<< click event ==>>>>>>>>>>==>>>>>>>=====>

// usernameInput.addEventListener("click", function() {
//     console.log("Hello Input")
// })
//? <====<<<<<<======<< dblclick event ==>>>>>>>>>>==>>>>>>>=====>

// usernameInput.addEventListener("dblclick", function() {
//     console.log("dble Click input")
// })


//? <====<<<<<<======<< input event ==>>>>>>>>>>==>>>>>>>=====>
let inputValue;

// usernameInput.addEventListener("input", function(e) {
//     console.log(e)
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value;
// })

//? <====<<<<<<======<< change event ==>>>>>>>>>>==>>>>>>>=====>

// usernameInput.addEventListener("change", function(e) {
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value;
// })


// //? <====<<<<<<======<< focus event ==>>>>>>>>>>==>>>>>>>=====>

// usernameInput.addEventListener("focus", function(e) {
//     console.log(e)
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value;
// });

//? <====<<<<<<======<< blur event ==>>>>>>>>>>==>>>>>>>=====>

// usernameInput.addEventListener("blur", function(e) {
//     console.log(e)
//     console.log(e.target.value);
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value;
// });



// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const myformData = new FormData(form);
//     // console.log(myformData);

//     for (const p of myformData.entries()) {
//         console.log(p)
//     }
// });

form.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.currentTarget);
    // console.log("form Submitted")
})