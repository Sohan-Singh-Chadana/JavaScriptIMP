// Immediately Invoked Function Expressions (IIFE );

(function() {
    const h1 = document.querySelector("h1");
    const p = document.querySelector('p');
    const num = 786;

    h1.style.backgroundColor = 'hotpink';
    h1.style.color = 'black';
    p.innerText = num
})();


// (function() {
//     console.log("IIFE 1")
// })();

// (function() {
//     console.log("IIFE 2")
// }());

// ((function() {
//     console.log("IIFE 2")
// })());

// (() => {
//     console.log("IIFE 3")
// })();

// +function() {
//     console.log("IIFE")
// }();

// -function() { // function Expression
//     console.log("IIFE")
// }();

// const a = function() {
//     console.log("IIFE");
// }();


// ! function() {
//     console.log("IIFE")
// }();


// ~ function() {
//     console.log("IIFE")
// }();


// void function() {
//     console.log("IIFE")
// }();

// new function() {
//     console.log("IIFE")
// }();

// true && function() {
//     console.log("IIFE")
// }();


// false || function() {
//     console.log("IIFE");
// }();

// true ? function() {
//     console.log("IIFE");
// }() : '';

// try {
//     throw function() {
//         console.log("IIFE");
//     }
// } catch (error) {
//     error()
// }