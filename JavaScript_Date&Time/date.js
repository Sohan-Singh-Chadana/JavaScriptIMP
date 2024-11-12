// * JavaScript Date Objects

/*
Note
Date objects are static. The "clock" is not "running".

The computer clock is ticking, date objects are not.

JavaScript Date Output
By default, JavaScript will use the browser's time zone and display a date as a full text string:

Mon Apr 15 2024 19:56:46 GMT+0530 (India Standard Time)

You will learn much more about how to display dates, later in this tutorial.
*/

//* Creating Date Objects
/*sDate objects are created with the new Date() constructor.

There are 9 ways to create a new date object:

new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)*/

//*JavaScript new Date()

// new Date() creates a date object with the current date and time:

const d = new Date();

// console.log(d) // Mon Apr 15 2024 20:06:05 GMT+0530 (India Standard Time)

//* new Date(date string)

// new Date(date string) creates a date object from a date string:

const d1 = new Date("August 8 , 2024 10:31:00");
// console.log(d1) // Thu Aug 08 2024 10:31:00 GMT+0530 (India Standard Time)

const d2 = new Date("2001-08-08");
// console.log(d2) // Wed Aug 08 2001 05:30:00 GMT+0530 (India Standard Time)

//Date string formats are described in the next chapter.

/*
* new Date(year, month, ...)
new Date(year, month, ...) creates a date object with a specified date and time.

7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):*/

const d3 = new Date(2024, 1, 26, 10, 33, 30, 0);

// console.log(d3) // Mon Feb 26 2024 10:33:30 GMT+0530 (India Standard Time)

/*
! Note
& JavaScript counts months from 0 to 11:

& January = 0.

& December = 11.
*/

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

const d4 = new Date(2018, 15, 24, 10, 33, 30);

// console.log(d4) // Wed Apr 24 2019 10:33:30 GMT+0530 (India Standard Time)

const d_4 = new Date(2019, 3, 24, 10, 33, 30);

// console.log(d_4) // Wed Apr 24 2019 10:33:30 GMT+0530 (India Standard Time)

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:

const d4_1 = new Date(2018, 5, 35, 10, 33, 30);

// console.log(d4_1) // Thu Jul 05 2018 10:33:30 GMT+0530 (India Standard Time)

const d4_2 = new Date(2018, 6, 5, 10, 33, 30);

// console.log(d4_2) // Thu Jul 05 2018 10:33:30 GMT+0530 (India Standard Time)

//* Using 6, 4, 3, or 2 Numbers
// 6 numbers specify year, month, day, hour, minute, second:

// Example
const d5 = new Date(2018, 11, 24, 10, 33, 30);

// console.log(d5) // Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)

//* 5 numbers specify year, month, day, hour, and minute:

// Example
const d5_1 = new Date(2018, 11, 24, 10, 33);
// console.log(d5_1)


//* 4 numbers specify year, month, day, and hour:

// Example
const d5_2 = new Date(2018, 11, 24, 10);
// console.log(d5_2)

//* 3 numbers specify year, month, and day:

// Example
const d5_3 = new Date(2018, 11, 24);
// console.log(d5_3)

//* 2 numbers specify year and month:

// Example
const d5_4 = new Date(2018, 11);
// console.log(d5_4)

//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

//Example
const d5_6 = new Date(2018);
// console.log(d5_6)


//* Previous Century
// One and two digit years will be interpreted as 19xx:

// Example
const d5_5 = new Date(99, 11, 24);
// console.log(d5_5) // Fri Dec 24 1999 00:00:00 GMT+0530 (India Standard Time)

//Example
const d5_7 = new Date(9, 11, 24);
// console.log(d5_7) // Fri Dec 24 1909 00:00:00 GMT+0530 (India Standard Time)

/*
* JavaScript Stores Dates as Milliseconds
& JavaScript stores dates as number of milliseconds since January 01, 1970.

& Zero time is January 01, 1970 00:00:00 UTC.

& One day (24 hours) is 86 400 000 milliseconds.

& Now the time is: 1713191206334 milliseconds past January 01, 1970
*/

//* new Date(milliseconds)
// new Date(milliseconds) creates a new date object as milliseconds plus zero time:

// Examples
// 01 January 1970 plus 100 000 000 000 milliseconds is:

const d6 = new Date(100000000000);
// console.log(d6) // Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time)

// January 01 1970 minus 100 000 000 000 milliseconds is:

const d6_1 = new Date(-100000000000);
// console.log(d6_1) // Mon Oct 31 1966 19:43:20 GMT+0530 (India Standard Time)

// January 01 1970 plus 24 hours is:

const d6_2 = new Date(24 * 60 * 60 * 1000);
// or
const d6_3 = new Date(86400000);
// console.log(d6_2) // Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)
// console.log(d6_3) //Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)


// 01 January 1970 plus 0 milliseconds is:

const d6_4 = new Date(0);
// console.log(d6_4) // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)


//*Date Methods

// When a date object is created, a number of methods allow you to operate on it.

// Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.

// Date methods and time zones are covered in the next chapters.

//* Displaying Dates

// JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone. The format is specified in the ECMAScript specification:

// Example
// Mon Apr 15 2024 19:56:46 GMT+0530 (India Standard Time)

// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

// Example
const d7 = new Date();
// console.log(d7.toString()); // Mon Apr 15 2024 20:54:58 GMT+0530 (India Standard Time)

// The toDateString() method converts a date to a more readable format:

// Example
const d7_1 = new Date();
// console.log(d7_1.toDateString()); // Mon Apr 15 2024

// The toUTCString() method converts a date to a string using the UTC standard:

// Example
const d7_2 = new Date();
// console.log(d7_2.toUTCString()); // Mon, 15 Apr 2024 15:25:42 GMT
// The toISOString() method converts a date to a string using the ISO standard:

// Example
const d7_3 = new Date();
// console.log(d7_3.toISOString()); // 2024-04-15T15:26:10.329Z


// * JavaScript Date Formats

// JavaScript Date Input
// There are generally 3 types of JavaScript date input formats:

/*
& Type	Example
& ISO Date	"2015-03-25" (The International Standard)
& Short Date	"03/25/2015"
& Long Date	"Mar 25 2015" or "25 Mar 2015"

* The ISO format follows a strict standard in JavaScript.
* The other formats are not so well defined and might be browser specific.*/

//* JavaScript Date Output
// Independent of input format, JavaScript will (by default) output dates in full text string format:

// Mon Apr 15 2024 21:01:23 GMT+0530 (India Standard Time)


//* JavaScript ISO Dates
// ISO 8601 is the international standard for the representation of dates and times.

// The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

// Example (Complete date)
const d11 = new Date("2015-03-25");
// console.log(d11); //  Wed Mar 25 2015 05:30:00 GMT+0530 (India Standard Time)
// The computed date will be relative to your time zone.
// Depending on your time zone, the result above will vary between March 24 and March 25.