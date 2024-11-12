"use strict"; // treat all JS code as newer version

// alert(3 + 3); // We are using nodejs, not browser

console.log(3 +
        3) // code readability should be high

console.log("Sohan");

let name = "sohan";
let age = 23;
let isLoggedIn = false;
let state;
let temp = null;


//* Datatypes
//& Primitive Data Types
// number => 2 to power 53
// bigint
// string => "";
// boolean => true/false;
// null => standalone value
// undefined =>
// symbol =>  unique

//& object Data Types
// An Array
// An Object
// A Date

console.log(typeof null) // null is typeof object
console.log(typeof undefined) // undefined
console.log(temp) // null
console.log(isNaN(null))
console.log(isNaN(undefined))
console.log((undefined))


// Numbers:
// let length = 16;
// let weight = 7.5;

// string
// let color = "yellow";
// let lastName = "Sohan"

// Booleans
// let x = true
// let y = false;


// Object
// const person = { firstName: "Ramesh", lastName: "Sain" };

// Array Obeject:
// const cars = ['Saab', "Fiat", "volvo", "BMW"];

// Date Object:
// const date = new Date();



//!Note
//* A JavaScript variable can hold any type of data.


//* The Concept of Data Types
// In programming, data types is an important concept.
// To be able to operate on variables, it is important to know something about the type.
// Without data types, a computer cannot safely solve this:

// let cstr = 16 + "volvo";
// console.log(cstr) // 16volvo

// let cstr1 = '16' + "volvo";
// console.log(cstr1) // 16volvo;

// ! Note
//* When adding a number and a string, JavaScript will treat the number as a string.
// let nstr = "Volvo" + 16;
// console.log(nstr); // Volvo16

//* JavaScript evaluates expressions from left to right. Different sequences can produce different results:
// let nstr1 = 16 + 4 + "Volvo";
// console.log(nstr1); // 20Volvo

// let nstr2 = "Volvo" + 16 + 4;
// console.log(nstr2) // Volvo164;

//* In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
//* In the second example, since the first operand is a string, all operands are treated as strings.


//* JavaScript Strings
// A string (or a text string) is a series of characters like "John Doe".
// Strings are written with quotes. You can use single or double quotes:

// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC90';

//* You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

/*
*Single quote inside double quotes:
let answer1 = "It's alright";

*Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

*Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
*/

//*JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers(floating point).
// Numbers can be written with, or without decimals:

/*
Example
With decimals:
let x1 = 34.00;

Without decimals:
let x2 = 34;
*/

//*Exponential Notation
// Extra large or extra small numbers can be written with scientific (exponential) notation:
// let c = 123e5; // 12300000
// let d = 123e-5; // 0.00123
// let e = 6e5; // 600000
// let f = 285e-4 // 0.0285;
// let g = 26.3e5 // 2630000
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)

//*JavaScript BigInt
// All JavaScript numbers are stored in a 64-bit floating-point format.
// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

// let x = BigInt("123456789012345678901234567890");
// console.log(x) //123456789012345678901234567890n

//* JavaScript Booleans
// Booleans can only have two values: true or false.

// let x1 = 5;
// let y1 = 5;
// let z1 = 6;
// console.log(x1 == y1) // Returns true
// console.log(x1 == z1) // Returns false

//* Booleans are often used in conditional testing.

// * JavaScript Arrays
// JavaScript arrays are written with square brackets.
// Array items are separated by commas.
// The following code declares (creates) an array called cars, containing three items (car names):

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars)

//Array indexes are zero-based, which means the first item is [0], second is [1], and so on.


//* JavaScript Objects
// JavaScript objects are written with curly braces {}.
// Object properties are written as name: value pairs, separated by commas.

// const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// console.table(person)

// The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

//*The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
// The typeof operator returns the type of a variable or an expression:



/*
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

*/
// console.log(typeof "")// Returns "string"
// console.log(typeof "John")// Returns "string"
// console.log(typeof "John Doe")// Returns "string"

// console.log(typeof 0) // Returns "number"
// console.log(typeof 314) // Returns "number"
// console.log(typeof 3.14) // Returns "number"
// console.log(typeof(3)) // Returns "number"
// console.log(typeof(3 + 4)) // Returns "number"

//* Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

let lName = undefined;
let myName;
console.table([myName, lName])

//Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

//* Empty Values
// An empty value has nothing to do with undefined.
// An empty string has both a legal value and a type.

let fname = "";
console.log(fname)