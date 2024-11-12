// console.log(Math.PI); // 3.141592653589793
// console.log(Math.SQRT2); // 1.4142135623730951
// console.log(Math.sqrt(25)); // 5
// console.log(Math.sqrt(26)); // 5.0990195135927845
// console.log(Math.pow(2, 6)); //  64
// console.log(2 ** 6); //  64
// console.log(Math.floor(2.899999999999999999)); //  2
// console.log(Math.floor(-2.5)) // -3
// console.log(Math.ceil(2.4)) // 3
// console.log(Math.ceil(-2.5)) // -2
// console.log(Math.round(4.5)) // 5
// console.log(Math.round(4.1)) // 4
// console.log(Math.round(-4.5)) // -4
// console.log(Math.round(-4.6)) // -5
// console.log(Math.abs(-4)) // 4
// console.log(Math.random()) // 0 to 1 random number genrate
// console.log(Math.floor(Math.random() * 21))

// function mintomax(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(mintomax(20, 30))

// function maxtomin(max, min) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(maxtomin(20, 10))


// const width = parseInt(prompt("Please Enter REctangel Width"))
// const height = parseInt(prompt("Please Enter REctangel height"));
// const width = +prompt("Please Enter REctangel Width")
// const height = +prompt("Please Enter REctangel height")

// function ractangel(wid, hei) {
//     return wid * hei;
// }

// console.log(ractangel(5, 6));
// document.write(`Rectangel Area : ${ractangel(5,6)}`);


//* Math Methods
// The syntax for Math any methods is : Math.method(number)

// Number to Integer
// There are 4 common methods to round a number to an integer:

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

//*Math.round()
// Math.round(x) returns the nearest integer:
// console.log(Math.round(4.6)) // 5
// console.log(Math.round(4.5)) // 5
// console.log(Math.round(4.4)) // 4

//* Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer:
// console.log(Math.ceil(4.9)) // 5
// console.log(Math.ceil(4.7)) // 5
// console.log(Math.ceil(4.4)) // 5
// console.log(Math.ceil(4.2)) // 5
// console.log(Math.ceil(-4.2)) // -4

//* Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer:
// console.log(Math.floor(4.9)) // 4
// console.log(Math.floor(4.7)) // 4
// console.log(Math.floor(4.4)) // 4
// console.log(Math.floor(4.2)) // 4
// console.log(Math.floor(-4.2)) // -5

//* Math.trunc()
// Math.trunc(x) returns the integer part of x:
// console.log(Math.trunc(4.9)) // 4
// console.log(Math.trunc(4.7)) // 4
// console.log(Math.trunc(4.4)) // 4
// console.log(Math.trunc(4.2)) // 4
// console.log(Math.trunc(-4.2)) //-4
// console.log(Math.trunc(false)) // 0


//* Math.sign()
// Math.sign(x) returns if x is negative, null or positive:
// console.log(Math.sign(-4)) // -1
// console.log(Math.sign(0)) // 0
// console.log(Math.sign(4)) // 1
// console.log(Math.sign(-4.89)) // -1
// console.log(Math.sign(4.89)) // 1
// console.log(Math.sign(null)) // 0
// console.log(Math.sign(undefined)) // NaN
// console.log(Math.sign(false)) // 0
// console.log(Math.sign(true)) // 1

//* Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:
// console.log(Math.pow(8, 2)) // 64
// console.log(Math.pow(5, 2)) // 25
// console.log(Math.pow(25, 2)) // 625

//* Math.sqrt()
// Math.sqrt(x) returns the square root of x:
// console.log(Math.sqrt(64)) // 8
// console.log(Math.sqrt(25)) // 5
// console.log(Math.sqrt(625)) // 25

//* Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:
// console.log(Math.abs(-4.3)) // 4.3
// console.log(Math.abs(4.3)) // 4.3
// console.log(Math.abs(-43)) // 43

//* Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.

// console.log(Math.sin(-Infinity)) // NaN
// console.log(Math.sin(-0)) // -0
// console.log(Math.sin(0)) // 0
// console.log(Math.sin(1)) // 0.8414709848078965
// console.log(Math.sin(Math.PI / 2)) // 1
// console.log(Infinity); // NaN
// console.log(Math.sin(90 * Math.PI / 180)) // 1


//* Math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.
// console.log(Math.cos(0 * Math.PI / 180)); // 1

//* Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

// console.log(Math.min(0, 3, 42, 45, 234, 23, 453, -3421)) // - 3421
// console.log(Math.max(0, 23, 43, 32, 4, 908, 789, 89)) // 908

//* The Math.log() Method
// Math.log(x) returns the natural logarithm of x.
// The natural logarithm returns the time needed to reach a certain level of growth:

// console.log(Math.log(1)) // 0
// console.log(Math.log(2)) // 0.6931471805599453
// console.log(Math.log(3)) // 1.0986122886681096


//* The Math.log2() Method
// Math.log2(x) returns the base 2 logarithm of x.
// How many times must we multiply 2 to get 8?
// console.log(Math.log2(3)); //1.584962500721156
// console.log(Math.log2(-2)); // NaN
// console.log(Math.log2(-0)) // -Infinity
// console.log(Math.log2(0)) // - Infinity
// console.log(Math.log2(1)) // 0
// console.log(Math.log2(2)) // 1
// console.log(Math.log2(3)) // 1.584962500721156
// console.log(Math.log2(1024)) // 10
// console.log(Math.log2(Infinity)) // Infinity
// console.log(Math.log2(8)) // 3


// * The Math.log10() Method
// Math.log10(x) returns the base 10 logarithm of x.
// How many times must we multiply 10 to get 1000?
// console.log(Math.log10(1000)) // 3
// console.log(Math.log10(10000)) // 4
// console.log(Math.log10(100)) // 2

//* Math.random()
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
// console.log(Math.random())

//* Math.random() always returns a number lower than 1.


//* JavaScript Random Integers
// Math.random() used with Math.floor() can be used to return random integers.

/*There is no such thing as JavaScript integers.

We are talking about numbers with no decimals here.*/

//& Returns a random integer from 0 to 9:
// console.log(Math.floor(Math.random() * 10));

//& Returns a random integer from 0 to 10:
// console.log(Math.floor(Math.random() * 11));
// console.log(Math.floor(Math.random() * 10) + 1)

//& Returns a random integer from 0 to 99:
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.floor(Math.random() * 100) + 1);

//& Returns a random integer from 0 to 100:
// console.log(Math.floor(Math.random() * 101));


//* A Proper Random Function
// As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.

// This JavaScript function always returns a random number between min (included) and max (excluded):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
console.log(getRndInteger(11, 22))

//This JavaScript function always returns a random number between min and max (both included):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRndInteger(22, 33))

console.log(Number.parseInt("34")) //34
console.log(Number(true)) // 1
console.log(Number(undefined)) // NaN

console.log((34).toString())
console.log(String(true))
console.log(String(undefined))

console.log(Boolean("213sohan"))
console.log(Boolean(0)) // false
console.log(Boolean(1))
console.log(Boolean(Infinity))
console.log(Boolean(undefined)) // false

let nucon = new Number(23)
    // console.log(typeof nucon)