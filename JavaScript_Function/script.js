function sayMyName() {
    console.log("S");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("N");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }
function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result;
    return num1 + num2;
}
// addTwoNumbers(); // NaN
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, null); // 3

const result = addTwoNumbers(3, 5); // 8

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    // if (username === undefined) {
    if (!username) {
        console.log("Please Enter a UserName");
        return;
    }
    return `${username} just logged in `;
}

// console.log(loginUserMessage("sohan".toUpperCase())) // SOHAN just logged in
// console.log(loginUserMessage()) // undefined just logged in
// console.log(loginUserMessage()) //Please Enter a UserName // undefined

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Sohan",
    price: 199,
};

function handleObject(anyObject) {
    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 39,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]));

//* =========================
//*  Function  in JavaScript
//* =========================

//? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

//  3 students at a same time wants to find the sum of two numbers
// 1st student
// var a = 5,
//     b = 10;

// var sum1 = a + b;
// console.log(sum1);

// // 2nd student
// var a = 15,
//     b = 15;

// var sum2 = a + b;
// console.log(sum2);

// // 3nd student
// var a = 70,
//     b = 15;

// var sum3 = a + b;
// console.log(sum3);

// lets make a reusable code

// function sum(a, b) {
//     return (a + b);
// }

// console.log(sum(5, 5));
// console.log(sum(15, 50));
// console.log(sum(25, 55));

//* =========================
//*  Function Declaration
//* =========================

//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defines the function and specifies what code should be executed when the function is called.

// function greet() {
//     console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
// }

//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

//?After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

//? How to call a function

// greet();

//! Practice Time
//! 1. Write a function to find the sum of two numbers.

//todo Tips "1st declare the function & then call it" In JavaScript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

// Function definition

// function sum() {
//     var a = 5,
//         b = 10
//     console.log(a + b)
// }

// calling the function

// sum() ;

//* ==============================
//* Function Parameter:
//* ==============================

//? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
// Function body
// Code to be executed when the function is called
// }

//* ==============================
//* Function Argument:
//* ==============================

//? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);

//! Practice Time
//? Let's say we want to greet students with one same line
//! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".

// function greet(name) {
//     console.log("Hello " + name.toUpperCase() + " , Welsome to Thapa Technical JS Course");
// }

// greet("ram");
// greet("sita");

//! 1. Write a function to find the sum of two numbers with parameters.
// function sum(a, b) {
//     console.log(a + b)
// }

// // calling the function
// sum(5, 10);

//* ==============================
//* Function expressions
//* ==============================

//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

// var result1 = function sum(a, b) {
//     console.log(a + b);
// };

// result1(10, 15);

//* ==============================
//*  Anonymous Function
//* =============================

//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

// var result1 = function(a, b) {
//     console.log(a + b);
// };

// result1(10, 15);

//* ==============================
//*  Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

//? Syntax
// return expression;

//! Example 1: Returning a Sum of two number

// function sum(a, b) {
//     return a + b;
//     // console.log("hello I am function")
// }

// var result2 = sum(5, 5);
// console.log(result2);

// console.log(`The Sum of two number is ${result2}`)

// console.log(sum(5, 5))
// console.log(sum(51, 50))
// console.log(sum(25, 500));

//* ==============================
//* IIFE - immediately invoked function expression
//* =============================
//? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

// Syntax
// (function () {
//   // code to be executed
// })();

let result1 = (function(a, b) {
    console.log(a + b);
    return a + b;
})(5, 10);

console.log(`The Sum of two number is ${result1}`);

// !Practice Time ( IIFE with Parameters)

//? Interview Questions

//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// console.log(calculator(5, 2, '+')); // Output: 7
// console.log(calculator(8, 4, '-')); // Output: 4
// console.log(calculator(10, 2, '/')); // Output: 5

// const calculator = (num1, num2, operator) => {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num2 === 0 ? "0 is not allowed" : num1 / num2;
//         default:
//             return "No Operator Found";
//     }
// };

// console.log(calculator(5, 2, '+')); // Output: 7
// console.log(calculator(8, 4, '-')); // Output: 4
// console.log(calculator(10, 2, '/')); // Output: 5
// console.log(calculator(10, 0, '/')); // Output: Infinity
// console.log(calculator(10, 0, '/')); // Output: 0 is not allowed
// console.log(calculator(10, 10, '*')); // Output: 100
// console.log(calculator(10, 10, '%')); // Output: No Operator Found

//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.

const isReverse = (str) => {
    let reverse = '';
    // for (let char = 0; char <= str.length - 1; char++) {
    //     console.log(str[char])
    // }
    for (let char = str.length - 1; char >= 0; char--) {
        // console.log(str[char]);
        reverse += str[char]
    }
    return reverse;
};

console.log(isReverse("Sohan Singh")); // hgniS nahoS

//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

const isPalindrome = (str) => {
    let reverse = '';
    for (let char = str.length - 1; char >= 0; char--) {
        reverse += str[char]
    }
    if (str === reverse) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome("Sohan Singh"));
console.log(isPalindrome("level"));



//! Set the given checkbox (#my-checkbox) checked.
function checkme() {
    return document.querySelector("#my-checkbox").checked = true
}

console.log(checkme());



// Functions

function login(username, password) {

    console.log(`${username}, logged in successfully `)
}

// * Invocation

login("John");
login("jane");



// function upperCase(str) {
//     return str.toUpperCase();
// };

// const result3 = upperCase("Javascript");

// console.log(result3); // JAVASCRIPT


//* Default parameters

function calculateArea(width, height = 40) {
    height = height === undefined ? 1 : height;

    const area = width * height;

    return area;
};

// const area = calculateArea(30, 40); // 1200
const area = calculateArea(30); // NaN;

console.log(area);

//* variable scope

// const fileName = 'Xyz.pdf';

// function download() {
//     // download logic goes here
//     console.log(fileName);
// };

// download();


// * Function declaration and function expression

//^ Declaration

// function loginOne() {


// }

//& Expresson

const loginOne = function(a, b) {
    console.log("Logged in")
};

loginOne();


//& Callback.


// function formatText(text, formatCallback) {
//     return typeof formatCallback === "function" ? formatCallback(text) : text.toUpperCase();
// };


// const result4 = formatText("hello", function(text) {
//     return text.charAt(0).toUpperCase() + text.slice(1);
// });


// console.log(result4);

//& IIFF (Immediately invoked function expression);

// 1
// (function setup() {
//     console.log("Setup done!")
// }());

// 2
// (function setup() {
//     console.log("Setup done!")
// })();


//* Arrow Function


// const loginTwo = (username, password) => {

//     console.log("LoggedTwo in")

// };
// loginTwo();

// const sumOne = (num1, num2) => num1 + num2;

// const result5 = sumOne(5, 4);

// console.log(result5);

// & Good Practices

// 1.  Naming

// show , get , calc

// 2. One  Function one action
// 3. function name should be descriptive