'use strict'

// var c = 300;
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("inner: ", a)

}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "sohan";

    function two() {
        const website = "youtube";
        // console.log(username)
    }

    // console.log(website);

    two();
}

one();

if (true) {
    const username = "sohan";
    if (username === "sohan") {
        const website = " youtube"
            // console.log(username + website)
    };
    // console.log(website);
};

// console.log(username);



// ********************** interesting ***************************

console.log(addone(5))

function addone(num) {
    return num + 1;
}

// console.log(addone(5))



// addTwo(5)
const addTwo = function(num) {
    return num + 2
};


const username = "Sohan";
let userAge = 23;
var A = 67;

// function add() {
//     const username = "narendra"
//     const x = 5;
//     const y = 8;
//     console.log(x + y);
//     console.log(username) // narendra
// }

function subtrack() {
    // debugger
    const x = 15;
    const y = 18;
    const z = 29;
    console.log(x - y);
    console.log(username)

    function child() {
        // debugger

        const childName = "Golu";
        console.log(childName);
        console.log(z);

        if (true) {
            let num1 = 78;
            var num2 = 89;
            // num2 = 89; // Don't recomded
            console.log(num1);
            console.log(num2)
        }

        console.log(num2)


        function grandChild() {
            const grandChild = "Molu";
            console.log(grandChild)
        }
        grandChild();
    }


    child();
}

// add();

subtrack();

// console.log(x);

console.log("program Ended");



// * JavaScript Scope
// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// Block scope
// Function scope
// Global scope

//& Block Scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

// Example
// {
//   let x = 2;
// }
// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.

// Example
// {
//   var x = 2;
// }
// x CAN be used here

//& Local Scope
// Variables declared within a JavaScript function, are LOCAL to the function:

// Example
// code here can NOT use carName

// function myFunction() {
//   let carName = "Volvo";
// *code here CAN use carName
// }

// code here can NOT use carName

// Local variables have Function Scope:
// They can only be accessed from within the function.

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

// Local variables are created when a function starts, and deleted when the function is completed.

//& Function Scope
// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// They all have Function Scope:

// function myFunction() {
//   var carName = "Volvo";   // Function Scope
// }
// function myFunction() {
//   let carName = "Volvo";   // Function Scope
// }
// function myFunction() {
//   const carName = "Volvo";   // Function Scope
// }
// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.

// Example
// let carName = "Volvo";
// code here can use carName

// function myFunction() {
// code here can also use carName
// }

// A global variable has Global Scope:
// All scripts and functions on a web page can access it.

//& Global Scope
// Variables declared Globally (outside any function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block.


// They all have Global Scope:

// var x = 2;       // Global scope
// let x = 2;       // Global scope
// const x = 2;       // Global scope

//& JavaScript Variables
// In JavaScript, objects and functions are also variables.

// Scope determines the accessibility of variables, objects, and functions from different parts of the code.

//& Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// This code example will declare a global variable carName, even if the value is assigned inside a function.

// Example
// myFunction();

// code here can use carName

// function myFunction() {
//   carName = "Volvo";
// }

//& Strict Mode
// All modern browsers support running JavaScript in "Strict Mode".

// You will learn more about how to use strict mode in a later chapter of this tutorial.

// In "Strict Mode", undeclared variables are not automatically global.

//& Global Variables in HTML
// With JavaScript, the global scope is the JavaScript environment.

// In HTML, the global scope is the window object.

// Global variables defined with the var keyword belong to the window object:

// Example
// var carName = "Volvo";
// code here can use window.carName
// Global variables defined with the let keyword do not belong to the window object:

// Example
// let carName = "Volvo";
// code here can not use window.carName


// !Warning
// Do NOT create global variables unless you intend to.

// Your global variables (or functions) can overwrite window variables (or functions).
// Any function, including the window object, can overwrite your global variables and functions.

//& The Lifetime of JavaScript Variables
// The lifetime of a JavaScript variable starts when it is declared.

// Function (local) variables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window (or tab).

//& Function Arguments
// Function arguments (parameters) work as local variables inside functions.