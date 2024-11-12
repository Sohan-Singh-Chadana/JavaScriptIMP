//? Second trika event add karane ka
function sayHi() {
    console.log("Hii")
}

function hello() {
    console.log('hello')
}

const h2 = document.querySelector("h2");
// h2.onclick = sayHi;
// h2.onclick = hello;


// h2.addEventListener("click", sayHi);
// h2.addEventListener("click", hello);

// h2.addEventListener("click", function() {
//     console.log("HEllo")
// })

//? thired trika event add karane ka

// let run = true
// const card = document.querySelector(".card").addEventListener("click", (e) => {
//     e.stopPropagation();
//     if (run) {
//         console.log("I am  A Card")
//         for (let i = 1; i <= 10; i++) {
//             document.querySelector(".card").innerText = i
//         }
//         run = false
//     } else {
//         document.querySelector(".card").innerText = '1'
//         run = true
//     }
// })

const card = document.querySelector(".card");
const container = document.querySelector(".container");
const input = document.querySelector('input');
const form = document.querySelector("form");

container.children[0].setAttribute('title', 'Add new Card');

//! <====<<<<<<======<< Event Simulator    >>====>>>>>>======>>

// setTimeout(() => {
//     input.focus();
//     console.log('Input Focused')
// }, 1000);

// setTimeout(() => {
//     input.blur();
//     console.log('Input Blur')
// }, 5000);

// setTimeout(() => {
//     form.submit();
//     console.log('form Submitted')
// }, 2000);

// form.reset();


card.addEventListener("click", function(e) {
    // console.log(e);
    //? element clone kareke
    const newCard = card.cloneNode();
    newCard.classList.remove('add-card');
    newCard.innerText = counter++;
    container.append(newCard);
}, false);

// const setIntervalID = setInterval(() => {
//     if (counter >= 100) {
//         clearInterval(setIntervalID)
//     }
//     card.click();
// }, 100);

//! <====<<<<<<======<< Mouse Eventes    >>====>>>>>>======>>

let run = true;
let counter = 1;

// card.addEventListener("click", function() {
//     if (counter <= 10 && run) {
//         //? element create kareke
//         // const div = document.createElement("div");
//         // div.classList.add('card');
//         // div.innerText = ++counter;
//         // container.append(div);


//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;

//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//         // if (container.children.length > 1) {
//         //     card.innerText = '-';
//         //     container.lastElementChild.remove();
//         // } else {
//         //     alert("No more cards to remove");
//         // }
//     }

// }, false);


//? <====<<<<<<======<< mousedown event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("mousedown", function(e) {
//     console.log(e)
//     if (counter <= 10 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//     }

// }, false);


//? <====<<<<<<======<< mouseup event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("mouseup", function(e) {
//     console.log(e)
//     if (counter <= 10 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//     }

// }, false);

//? <====<<<<<<======<< mouseenter event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("mouseenter", function(e) {
//     console.log(e)
//     if (counter <= 10 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//     }

// }, false);

//? <====<<<<<<======<< mouseleave event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("mouseleave", function(e) {
//     console.log(e)
//     if (counter <= 10 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//     }

// }, false);

//? <====<<<<<<======<< mousemove event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("mousemove", function(e) {
//     console.log(e)
//     if (counter <= 100 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } //else {

//     //     if (container.children.length > 1) {
//     //         card.innerText = '-';
//     //         container.lastElementChild.remove();
//     //     } else {
//     //         alert("No more cards to remove")
//     //         window.location.reload();
//     //     }

//     // }

// }, false);

//? <====<<<<<<======<< mouseover event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("mouseover", function(e) {
//     console.log(e)
//     if (counter <= 10 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//     }

// }, false);

//? <====<<<<<<======<< mouseout event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("mouseout", function(e) {
//     console.log(e)
//     if (counter <= 10 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//     }

// }, false);

//? <====<<<<<<======<< dblclick event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("dblclick", function(e) {
//     console.log(e)
//     if (counter <= 10 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//     }

// }, false);

//? <====<<<<<<======<< contextmenu event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("contextmenu", function(e) {
//     console.log(e)
//     if (counter <= 10 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//     }

// }, false);

//? <====<<<<<<======<< wheel event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("wheel", function(e) {
//     console.log(e)
//     if (counter <= 10 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } else {

//         if (container.children.length > 1) {
//             card.innerText = '-';
//             container.lastElementChild.remove();
//         } else {
//             alert("No more cards to remove")
//             window.location.reload();
//         }

//     }

// }, false);

//? <====<<<<<<======<< scroll event ==>>>>>>>>>>==>>>>>>>=====>

// document.addEventListener("scroll", function(e) {
//     console.log(e)
//     if (counter <= 100 && run) {
//         //? element clone kareke
//         const newCard = card.cloneNode();
//         newCard.classList.remove('add-card');
//         newCard.innerText = counter++;
//         container.append(newCard);
//         // run = false;
//     } // else {

//     //     if (container.children.length > 1) {
//     //         card.innerText = '-';
//     //         container.lastElementChild.remove();
//     //     } else {
//     //         alert("No more cards to remove")
//     //         window.location.reload();
//     //     }

//     // }

// }, false);

//? <====<<<<<<======<< touchstart event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("touchstart", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);

//? <====<<<<<<======<< touchend event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("touchend", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);

//? <====<<<<<<======<< touchmove event ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("touchmove", function(e) {s
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);

//? <====<<<<<<======<< DragEvent ==>>>>>>>>>>==>>>>>>>=====>

// h2.addEventListener("drag", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);


//! PointerEvent
//* Pointer events are a modern way to handle input from a variety of pointing devices, such as a mouse, a pen / stylus, a touchscreen, and so on.


//? <====<<<<<<======<< pointermove   ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("pointermove", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);

//? <====<<<<<<======<< pointerenter   ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("pointerenter", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);

//? <====<<<<<<======<< pointerdown   ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("pointerdown", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);

//? <====<<<<<<======<< pointerup   ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("pointerup", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);

//? <====<<<<<<======<< pointerover   ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("pointerover", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);

//? <====<<<<<<======<< pointerout   ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("pointerout", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);


//? <====<<<<<<======<< pointerleave   ==>>>>>>>>>>==>>>>>>>=====>

// card.addEventListener("pointerleave", function(e) {
//     console.log(e);
//     //? element clone kareke
//     const newCard = card.cloneNode();
//     newCard.classList.remove('add-card');
//     newCard.innerText = counter++;
//     container.append(newCard);
// }, false);