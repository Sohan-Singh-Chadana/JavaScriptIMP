//? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//todo When a function declaration is hoisted, its entire definition (including the body) is moved to the top of its containing scope during the creation phase. This means that you can call the function before it's actually declared in the code, and it will still work as expected.



// let myVar = 10;
// const greet = () => {
//     console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };

// console.log(myVar);
// greet();

// debugger

console.log(a); // undefined

var a = "sohan";

console.log(a);

hi();

//  Function  Definition
// Function Declaration
function hi() {
    console.log("Hello")
};

// sayHi(); //  sayHi is not a function

//  Function  Definition
// function Expression
var sayHi = function() { //  anonymous function
    console.log("Hii")
}

sayHi();

// IIFE
(function() {
    console.log("IIFE Function ")
})();



// Hoisting
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as HoistableDeclaration, but this only includes function, function*, async function, and async function* declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

// Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
// Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
// The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
// The side effects of a declaration are produced before evaluating the rest of the code that contains it.
// The four function declarations above are hoisted with type 1 behavior; var declaration is hoisted with type 2 behavior; let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior; import declarations are hoisted with type 1 and type 4 behavior.

// Some prefer to see let, const, and class as non-hoisting, because the temporal dead zone strictly forbids any use of the variable before its declaration. This dissent is fine, since hoisting is not a universally-agreed term. However, the temporal dead zone can cause other observable changes in its scope, which suggests there's some form of hoisting:


// const x = 1;
// {
//   console.log(x); // ReferenceError
//   const x = 2;
// }

// If the const x = 2 declaration is not hoisted at all (as in, it only comes into effect when it's executed), then the console.log(x) statement should be able to read the x value from the upper scope. However, because the const declaration still "taints" the entire scope it's defined in, the console.log(x) statement reads the x from the const x = 2 declaration instead, which is not yet initialized, and throws a ReferenceError. Still, it may be more useful to characterize lexical declarations as non-hoisting, because from a utilitarian perspective, the hoisting of these declarations doesn't bring any meaningful features.

// Note that the following is not a form of hoisting:


// {
//   var x = 1;
// }

// console.log(x); // 1

// There's no "access before declaration" here; it's simply because var declarations are not scoped to blocks.