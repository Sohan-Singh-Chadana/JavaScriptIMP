//*  JavaScript Set Date Methods

// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

/*
* Set Date Methods
Set Date methods are used for setting a part of a date:

^ Method	                 Description
& setDate()	           Set the day as a number (1-31)
& setFullYear()	       Set the year (optionally month and day)
& setHours()	       Set the hour (0-23)
& setMilliseconds()	   Set the milliseconds (0-999)
& setMinutes()	       Set the minutes (0-59)
& setMonth()	       Set the month (0-11)
& setSeconds()	       Set the seconds (0-59)
& setTime()	           Set the time (milliseconds since January 1, 1970)
*/

//* The setFullYear() Method
// The setFullYear() method sets the year of a date object. In this example to 2020:

const dy1 = new Date();
console.log(dy1.setFullYear(2019)) // 1586970884859
console.log(dy1)

// The setFullYear() method can optionally set month and day:

// Example

console.log(dy1.setFullYear(2020, 1, 9)) // 1583774084859
console.log(dy1)

// * The setMonth() Method
// The setMonth() method sets the month of a date object (0-11):

// Example
console.log(dy1.setMonth(1))
console.log(dy1)


//* The setDate() Method
// The setDate() method sets the day of a date object (1-31):

// Example:
const d12 = new Date();
console.log(d12.setDate(15))
console.log(d12)

// The setDate() method can also be used to add days to a date:

console.log(d12.setDate(d12.getDate() + 50));
console.log(d12)

// If adding days shifts the month or year, the changes are handled automatically by the Date object.

// * The setHours() Method
// The setHours() method sets the hours of a date object (0-23):

console.log(d12.setHours(22))
console.log(d12)


//* The setMinutes() Method
// The setMinutes() method sets the minutes of a date object (0-59):

console.log(d12.setMinutes(30))
console.log(d12)


// * The setSeconds() Method
// The setSeconds() method sets the seconds of a date object (0-59):

console.log(d12.setSeconds(30))
console.log(d12)


/*
Compare Dates
Dates can easily be compared.

The following example compares today's date with January 14, 2100:
*/

// Example
let text = ""
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14)
console.log(someday)

if (someday > today) {
    text = "Today is before January 14, 2100."
} else {
    text = "Today is after January 14, 2100."
}

console.log(text);

// JavaScript counts months from 0 to 11. January is 0. December is 11.

let myarr = ["sohan", "mohan", "kishan", "rakesh", "muskan"]
let myarrnumber = [2, 32, 3, 434, 4, 23, 5, 33, 23, 756];

console.log(myarr.sort());
console.log(myarrnumber);
// console.log(myarrnumber.sort((a, b) => a - b))
// console.log(myarrnumber.sort((a, b) => b - a))

let arrayset = new Set(myarrnumber)
console.log(Array.from(arrayset).sort((a, b) => a - b))


// ? Question 1 : How can you convert a string to a number in JavaScript? write all the ways.
let srting = "786";
// console.log(srting);
// console.log(Number(srting));
// console.log(Number.parseInt(srting));
// console.log(+srting);
// console.log(Number.parseFloat(srting))
// console.log(Math.round(srting))