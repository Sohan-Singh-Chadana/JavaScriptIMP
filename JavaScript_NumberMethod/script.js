// * JavaScript Number Methods

/*

*These number methods can be used on all JavaScript numbers:

&   Method                          Description
^ toString()             Returns a  number as a string
^ toExponential()        Retruns a number written in exponential notation
^ toFixed()              Retruns a number written with a number of decimals
^ toPrecision()          Retruns a number written with a specified length
^ valueOf()              Returns a number as a number

*/

//* The toString() Method
// The toString() method returns a number as a string.
// All number methods can be used on any type of numbers (literals, variables, or expressions):

// let myNumber = 123;
// console.log(myNumber)
// console.log(typeof myNumber.toString(), myNumber.toString());
// console.log((123).toString());
// console.log((100 + 23).toString());
// console.log(typeof myNumber)

// const count = 10;
// console.log(count.toString()); // "10"

// console.log((17).toString()); // "17"
// console.log((17.2).toString()); // "17.2"

// const x = 6;
// console.log(x.toString(2)); // "110"
// console.log((254).toString(16)); // "fe"
// console.log((-10).toString(2)); // "-1010"
// console.log((-0xff).toString(2)); // "-11111111"


//* The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.
// A parameter defines the number of characters behind the decimal point:

// let myNumber = 9.646;
// console.log(myNumber.toExponential(2)); //9.65e+0
// console.log(myNumber.toExponential(4)); //9.6460e+0
// console.log(myNumber.toExponential(6)); //9.646000e+0


// const numObj = 77.1234;

// console.log(numObj.toExponential()); // 7.71234e+1
// console.log(numObj.toExponential(4)); // 7.7123e+1
// console.log(numObj.toExponential(2)); // 7.71e+1
// console.log((77.1234).toExponential()); // 7.71234e+1
// console.log((77).toExponential()); // 7.7e+1
// console.log(numObj.toExponential(5)) // 7.71234e+1



//The parameter is optional. If you don't specify it, JavaScript will not round the number.

//* The toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:

// let myNumber = 9.656;
// console.log(myNumber.toFixed(0)); // 10
// console.log(65e+0.toFixed(2)); // 65.00
// console.log(myNumber.toFixed(2)); // 9.65
// console.log(myNumber.toFixed(4)); // 9.6560
// console.log(myNumber.toFixed(6)); // 9.656000
// console.log(21343.23113.toFixed(2)) // 21343.23

// (1000000000000000128).toString(); // '1000000000000000100'
// (1000000000000000128).toFixed(0); // '1000000000000000128'
// (0.3).toFixed(50); // '0.29999999999999998889776975374843459576368331909180'

//* Examples
// Using toFixed()

// const numObj = 12345.6789;

// console.log(numObj.toFixed()); // '12346'; rounding, no fractional part
// console.log(numObj.toFixed(1)); // '12345.7'; it rounds up
// console.log(numObj.toFixed(6)); // '12345.678900'; additional zeros
// console.log((1.23e20).toFixed(2)); // '123000000000000000000.00'
// console.log((1.23e-10).toFixed(2)); // '0.00'
// console.log((2.34).toFixed(1)); // '2.3'
// console.log((2.35).toFixed(1)); // '2.4'; it rounds up
// console.log((2.55).toFixed(1)); // '2.5'
//~ it rounds down as it can't be represented exactly by a float and the
//~ closest representable float is lower
// (2.449999999999999999).toFixed(1); // '2.5'
//~ it rounds up as it's less than Number.EPSILON away from 2.45.
//~ This literal actually encodes the same number value as 2.45

// (6.02 * 10 ** 23).toFixed(50); // 6.019999999999999e+23; large numbers still use exponential notation





//! Note
// * toFixed(2) is perfect for working with money.


//* The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:

// let myNumber = 9.656;
// console.log(myNumber.toPrecision()); //  9.656
// console.log(myNumber.toPrecision(2)); // 9.7
// console.log(myNumber.toPrecision(4)); // 9.656
// console.log(myNumber.toPrecision(6)); // 9.65600
// console.log(65e+0.toPrecision(2)); // 65
// console.log(21343.23113.toPrecision(2)) // 2.1e+4

// let num = 5.123456;

// console.log(num.toPrecision()); // '5.123456'
// console.log(num.toPrecision(5)); // '5.1235'
// console.log(num.toPrecision(2)); // '5.1'
// console.log(num.toPrecision(1)); // '5'

// num = 0.000123;

// console.log(num.toPrecision()); // '0.000123'
// console.log(num.toPrecision(5)); // '0.00012300'
// console.log(num.toPrecision(2)); // '0.00012'
// console.log(num.toPrecision(1)); // '0.0001'

// note that exponential notation might be returned in some circumstances
// console.log((1234.5).toPrecision(2)); // '1.2e+3'


//* The valueOf() Method
// valueOf() returns a number as a number

// let mynumberobj = 123;
// console.log(mynumberobj.valueOf()); // 123
// console.log((123).valueOf()); // 123
// console.log((100 + 23).valueOf()); // 123

// const numObj = new Number(10);
// console.log(typeof numObj); // object

// const num = numObj.valueOf();
// console.log(num); // 10
// console.log(typeof num); // number

// In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

// There is no reason to use it in your code.

//! All JavaScript data types have a valueOf() and a toString() method.


//* Converting Variables to Numbers
// There are 3 JavaScript methods that can be used to convert a variable to a number:

//& Method	            Description
//^ Number()	      Returns a number converted from its argument.
//^ parseFloat()	 Parses its argument and returns a floating point number
//^ parseInt()	     Parses its argument and returns a whole number

//*The methods above are not number methods. They are global JavaScript methods.

//* The Number() Method
// The Number() method can be used to convert JavaScript variables to numbers:

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number("10")); // 10
// console.log(Number("  10")); // 10
// console.log(Number("10  ")); // 10
// console.log(Number(" 10  ")); // 10
// console.log(Number("10.33")); // 10.33
// console.log(Number("10,33")); // NaN
// console.log(Number("10 33")); // NaN
// console.log(Number("John")); // NaN

//If the number cannot be converted, NaN (Not a Number) is returned.



//* The Number() Method Used on Dates
// Number() can also convert a date to a number.

// console.log(Number(new Date('1970-01-01')))

//!Note
// *The Date() method returns the number of milliseconds since 1.1.1970.

//The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

// console.log(Number(new Date("1970-01-02")))
// console.log(Number(new Date("2020-02-09")))


//*The parseInt() Method
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

// Example
// console.log(parseInt("-10")); // -10
// console.log(parseInt("-10.33")); // -10
// console.log(parseInt("10")); // 10
// console.log(parseInt("10.33")); // 10
// console.log(parseInt("10 20 30")); // 10
// console.log(parseInt("10 years")); // 10
// console.log(parseInt("years 10")); // NaN



//&An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string.

//& If radix is undefined or 0, it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X, in which case a radix of 16 is assumed.

// Parse a hexadecimal string
// console.log(parseInt('0x10')) //  16
// console.log(parseInt('0x20')) //  32
// console.log(parseInt('0x30')) //  32



// console.log(parseInt('123'));
// 123 (default base-10)
// console.log(parseInt('123', 10));
// 123 (explicitly specify base-10)
// console.log(parseInt('   123 '));
// 123 (whitespace is ignored)
// console.log(parseInt('077'));
// 77 (leading zeros are ignored)
// console.log(parseInt('1.9'));
// 1 (decimal part is truncated)
// console.log(parseInt('ff', 16));
// 255 (lower-case hexadecimal)
// console.log(parseInt('0xFF', 16));
// 255 (upper-case hexadecimal with "0x" prefix)
// console.log(parseInt('xyz'));
// NaN (input can't be converted to an integer)

// console.log(parseInt("0xf", 16)); //15
// console.log(parseInt("F", 16)); // 15
// console.log(parseInt("17", 8)); // 15
// console.log(parseInt("015", 10)); // 15
// console.log(parseInt("15,123", 10)); // 15
// console.log(parseInt("FXX123", 16)); // 15
// console.log(parseInt("1111", 2)); // 15
// console.log(parseInt("15 * 3", 10)); // 15
// console.log(parseInt("15e2", 10)); //15
// console.log(parseInt("15px", 10)); // 15
// console.log(parseInt("12", 13)); //15


//*The parseFloat() Method
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

// console.log(parseFloat("10")); // 10
// console.log(parseFloat("10.33")); // 10.33
// console.log(parseFloat("10 20 30")); // 10
// console.log(parseFloat("10 years")); // 10
// console.log(parseFloat("years 10")); // NaN

//If the number cannot be converted, NaN (Not a Number) is returned.

/*
!Note
& The Number methods Number.parseInt() and Number.parseFloat()
& are the same as the
& Global methods parseInt() and parseFloat().
& The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).
*/

/*
Number Object Methods
These object methods belong to the Number object:

        Method	             Description
Number.isInteger()	Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	Converts a string to a number
Number.parseInt()	Converts a string to a whole number


Number Methods Cannot be Used on Variables
The number methods above belong to the JavaScript Number Object.

These methods can only be accessed like Number.isInteger().

Using X.isInteger() where X is a variable, will result in an error:

TypeError X.isInteger is not a function.
*/

//* The Number.isInteger() Method
// The Number.isInteger() method returns true if the argument is an integer.

let myN_m = 213;
// console.log(Number.isInteger(myN_m)) // true
// console.log(Number.isInteger(213.213)) // false

//*The Number.isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.

// console.log(Number.isSafeInteger(myN_m)) // true
// console.log(Number.isSafeInteger(123.213)) // false
// console.log(Number.isSafeInteger(123213)) // true
// console.log(Number.isSafeInteger(123213123213)) // true
// console.log(Number.isSafeInteger(12345678901234567890)) // false

//Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.