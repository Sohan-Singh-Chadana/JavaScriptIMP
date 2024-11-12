// * JavaScript Type Conversion

// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// Converting Numbers to Booleans

/*

JavaScript Type Conversion
JavaScript variables can be converted to a new variable and another data type:

By the use of a JavaScript function
Automatically by JavaScript itself
Converting Strings to Numbers
The global method Number() converts a variable (or a value) into a number.

A numeric string (like "3.14") converts to a number (like 3.14).

An empty string (like "") converts to 0.

A non numeric string (like "John") converts to NaN (Not a Number).


*/

// Examples

// These will convert:
console.log(Number("3.14")) // 3.14
console.log(Number(Math.PI)) // 3.141592653589793
console.log(Number(" ")) // 0
console.log(Number("")) // 0

// These will not convert:

console.log(Number("99 88")); // NaN
console.log(Number("John")); //  NaN

let mynum = 73;
console.log(mynum)
console.log(mynum.toString());
console.log(typeof mynum.toString());

let name = "sohan"

let nameNumcon = Number(name); // NaN
console.log(typeof nameNumcon, nameNumcon) // typeof number

let numtostr = String(mynum); // '73'
console.log(typeof numtostr, numtostr) // typeof string

let yeshishere = true;

let booleanstonumber = Number(yeshishere);
console.log(typeof booleanstonumber, booleanstonumber); // number 1

let numbertoboolean = Boolean(booleanstonumber);
console.log(typeof numbertoboolean, numbertoboolean); // boolean true

// * Converting Numbers to Strings
// The global method String() can convert numbers to strings.
// It can be used on any type of numbers, literals, variables, or expressions:

let x2 = 123;
// console.log(String(x2)); // returns a string from a number variable x
// console.log(String(123)); // returns a string from a number literal 123
// console.log(String(100 + 23)); // returns a string from a number from an expression


// The Number method toString() does the same.
// console.log(x2);
// console.log(x2.toString());
// console.log((123).toString())
// console.log((100 + 23).toString());
// console.log(Number(x2))

//* Converting Booleans to Numbers
// The global method Number() can also convert booleans to numbers.
console.log(Number(false))
console.log(Number(true))


//* Converting Booleans to Strings
// The global method String() can convert booleans to strings.
console.log(String(false))
console.log(String(true))


//* Automatic Type Conversion
// When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.
// The result is not always what you expect:

// console.log(5 + null) // returns 5         because null is converted to 0
// console.log("5" + null) // returns "5null"   because null is converted to "null"
// console.log("5" + 2) // returns "52"      because 2 is converted to "2"
// console.log("5" - 2) // returns 3         because "5" is converted to 5
// console.log("5" * "2") // returns 10        because "5" and "2" are converted to 5 and 2

//* Automatic String Conversion
// JavaScript automatically calls the variable 's toString() function when you try to "output" an object or a variable:


//* JavaScript typeof

/*
* In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function


* There are 6 types of objects:

Object
Date
Array
String
Number
Boolean


* And 2 data types that cannot contain values:

null
undefined
*/

//* The typeof Operator
// You can use the typeof operator to find the data type of a JavaScript variable.

console.log(typeof "John"); // Returns "string"
console.log(typeof 3.14) // Returns "number"
console.log(typeof NaN) // Returns "number"
console.log(typeof false) // Returns "boolean"
console.log(typeof [1, 2, 3, 4]) // Returns "object"
console.log(typeof { name: 'John', age: 34 }) // Returns "object"
console.log(typeof new Date()); // Returns "object"
console.log(typeof
    function() {}); // Returns "function"
console.log(typeof myCar) // Returns "undefined" *
console.log(typeof null) // Returns "object"

// * The constructor Property
// The constructor property returns the constructor function for all JavaScript variables.

console.log("John".constructor) // Returns function String()  {[native code]}
console.log((3.14).constructor) // Returns function Number()  {[native code]}
console.log(false.constructor) // Returns function Boolean() {[native code]}
console.log([1, 2, 3, 4].constructor) // Returns function Array()   {[native code]}
console.log({ name: 'John', age: 34 }.constructor) // Returns function Object()  {[native code]}
console.log(new Date().constructor) // Returns function Date()    {[native code]}
console.log(function() {}.constructor) // Returns function Function(){[native code]}

//* You can check the constructor property to find out if an object is an Array (contains the word "Array"):

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(Array.isArray(fruits))
console.log(fruits.constructor === Array);

// Null
// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
// Unfortunately, in JavaScript, the data type of null is an object.

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null; // Now value is null, but type is still an object
console.log(person)
console.log(typeof person)

//You can also empty an object by setting it to undefined:
person = undefined
console.log(person)
console.log(typeof person)

// * Difference Between Undefined and Null
// undefined and null are equal in value but different in type:

console.log(null == undefined) // true
console.log(null === undefined) // false

//*  The instanceof Operator
// The instanceof operator returns true if an object is an instance of the specified object:

const cars12 = ["BMW", "TATA", "KIA", "MG"];

console.log(cars12 instanceof Array) // true
console.log(cars12 instanceof Object) // true
console.log(cars12 instanceof String) // false
console.log(cars12 instanceof Number) // false
console.log(cars12 instanceof Function) // false