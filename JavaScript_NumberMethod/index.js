// let num = 123; // true
// let num = Infinity; // false
// let num = NaN; // false
// let num = "Sohan"; // false
// let num = -123; // true

// console.log(isFinite(num));
// console.log(Number.isFinite(num));

// let num = 123; // false
// let num = Infinity; // false
// let num = NaN; // true
// let num = "Sohan"; // true // false
// let num = -123; // false

// console.log(isNaN(num));
// console.log(Number.isNaN(num));

// let num = 123; // true
// let num = -123; // true
// let num = 12.123; // false

// console.log(Number.isInteger(num))


let score = 400;
// console.log(score)

const balance = new Number(100);
// console.log(balance) // [Number:100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.55324

// console.log(otherNumber.toPrecision(4)); // 123.6

const hundreads = 1000000;
// console.log(hundreads.toLocaleString())
// console.log(hundreads.toLocaleString('en-IN')) // 10,00,000


// ++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-2)); // 2
// console.log(Math.round(4.2)); // 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.ceil(4.5)); // 5
// console.log(Math.floor(4.5)); // 4
// console.log(Math.max(4, 43, 34, 54, 4, 5, 232)); // 232
// console.log(Math.min(4, 43, 34, 54, 4, 5, 232)); // 4

// console.log(Math.random()); //
// console.log(Math.random() * 10); //
// console.log(Math.random() * 10 + 1); //
// console.log(Math.floor(Math.random() * 10) + 1); //

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1) ) + min);



//* Creating a Number object
const num = new Number(42);

//* Using Number properties
// console.log(Number.MAX_VALUE); // Maximum representable value in JavaScript (1.7976931348623157e+308)
// console.log(Number.MIN_VALUE); // Smallest positive representable value (5e-324)
// console.log(Number.POSITIVE_INFINITY); // Positive Infinity (Infinity)
// console.log(Number.NEGATIVE_INFINITY); // Negative Infinity (-Infinity)
// console.log(Number.NaN); // NaN (Not-a-Number);


// * Using Number methods
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isFinite(42)); // true
// console.log(Number.isInteger(42)); // true
// console.log(Number.isInteger(42.5)); // false
// console.log(Number.parseFloat("3.14")); // Parse a string into a floating-point number (3.14)
// console.log(Number.parseInt("42")); // Parse a string into an integer (42)

//* Using Number.prototype methods
// console.log(num.toString()); // Convert number to string ("42")
// console.log(num.toFixed(2)); // Format number to a specified number of digits after the decimal point ("42.00")
// console.log(num.toPrecision(4)); // Format number to a specified precision ("42.00")
// console.log(num.valueOf()); // Return the primitive value of the Number object (42)


// Example of checking if a value is a number
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// console.log(isNumeric('42')) // true
// console.log(isNumeric('42px')) // false