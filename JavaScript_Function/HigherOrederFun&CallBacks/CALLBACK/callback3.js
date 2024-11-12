// Callbacks , callback Hell , pyramind of doom
// asynchronous programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


//* callback Hell

// setTimeout(() => {
//     heading1.innerText = "Heading 1";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.innerText = "Heading 2";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.innerText = "Heading 3";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.innerText = "Heading 4";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.innerText = "Heading 3";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.innerText = "Heading 3";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.innerText = "Heading 3";
//                             heading7.style.color = "brown";
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback();
            }
        }
    }, time)
}

//* pyramind of doom

changeText(heading1, "Heading 1 !", "violet", 1000, () => {
    changeText(heading2, "Heading 2 !", "purple", 2000, () => {
        changeText(heading3, "Heading 3 !", "red", 1000, () => {
            changeText(heading4, "Heading 4 !", "pink", 2000, () => {
                changeText(heading5, "Heading 5 !", "green", 1000, () => {
                    changeText(heading6, "Heading 6 !", "blue", 2000, () => {
                        changeText(heading7, "Heading 7 !", "brown", 1000, () => {
                            changeText(heading8, "Heading 8 !", "orange", 1000, () => {
                                changeText(heading9, "Heading 9 !", "yellow", 1000, () => {
                                    changeText(heading10, "Heading 10 !", "crimson", 1000, () => {

                                    }, () => { alert("Heading10 does not exist") })
                                }, () => { alert("Heading9 does not exist") })
                            }, () => { alert("Heading8 does not exist") })
                        }, () => { alert("Heading7 does not exist") })
                    }, () => { alert("Heading6 does not exist") })
                }, () => { alert("Heading5 does not exist") })
            }, () => { alert("Heading4 does not exist") })
        }, () => { alert("Heading3 does not exist") })
    }, () => { alert("Heading2 does not exist") })
}, () => { alert("Heading1 does not exist") })


// changeText(heading1, "Heading 1", "violet", 3000, () => {
//     changeText(heading2, "Heading 2", "purple", 1000)
// })


///! Callback Hell (Callback Pyramids) in JavaScript, also known as the “Pyramid of Doom,” is a situation where nested callbacks lead to deeply indented and hard-to-read code. It can make your code look like a pyramid due to its visual structure.