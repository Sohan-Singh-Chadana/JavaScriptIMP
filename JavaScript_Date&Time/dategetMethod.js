//* JavaScript Get Date Methods
// The new Date() Constructor
// In JavaScript, date objects are created with new Date().

// new Date() returns a date object with the current date and time.


//& Get the Current Time
const date = new Date();


/*
* Date Get Methods
Method	                    Description
getFullYear()	    Get year as a four digit number (yyyy)
getMonth()	        Get month as a number (0-11)
getDate()	        Get day as a number (1-31)
getDay()	        Get weekday as a number (0-6)
getHours()	        Get hour (0-23)
getMinutes()	    Get minute (0-59)
getSeconds()	    Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	        Get time (milliseconds since January 1, 1970)

!Note 1
The get methods above return Local time.

Universal time (UTC) is documented at the bottom of this page.

!Note 2
The get methods return information from existing date objects.

In a date object, the time is static. The "clock" is not "running".

The time in a date object is NOT the same as current time.*/

//* The getFullYear() Method
// The getFullYear() method returns the year of a date as a four digit number:

const date1 = new Date("2020-03-25");
// console.log(date1.getFullYear())

const date1_1 = new Date();
// console.log(date1_1.getFullYear())

/*
* The getMonth() Method
& The getMonth() method returns the month of a date as a number (0-11).

! Note
& In JavaScript, January is month number 0, February is number 1, ...

& Finally, December is month number 11. */

const date_3 = new Date("2020-02-09");
// console.log(date_3.getMonth())

const date_31 = new Date();
// console.log(date_31.getMonth())

//!Note
// You can use an array of names to return the month as a name:

// Example
const months = [
    'January',
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let month = months[date_3.getMonth()]
    // console.log(month)

let month1 = months[date.getMonth()]
    // console.log(month1)

//* The getDate() Method
// The getDate() method returns the day of a date as a number (1-31):


// Example
// console.log(date_3.getDate()) // 9

// console.log(date.getDate()) // 15


//* The getHours() Method
// The getHours() method returns the hours of a date as a number(0 - 23):

// console.log(date_3.getHours()); // 5

// console.log(date.getHours()); // 21


//* The getMinutes() Method
// The getMinutes() method returns the minutes of a date as a number (0-59):

// console.log(date_3.getMinutes()) // 30
// console.log(date.getMinutes()) // 27

//* The getSeconds() Method
// The getSeconds() method returns the seconds of a date as a number (0-59):
// console.log(date_3.getSeconds())
// console.log(date.getSeconds())


//* The getMilliseconds() Method
// The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

// console.log(date_3.getMilliseconds())
// console.log(date.getMilliseconds())

//* The getDay() Method
// The getDay() method returns the weekday of a date as a number (0-6).

/*
! Note
In JavaScript, the first day of the week (day 0) is Sunday.

Some countries in the world consider the first day of the week to be Monday.*/

// console.log(date_3.getDay())
// console.log(date.getDay())

/*
! Note
You can use an array of names, and getDay() to return weekday as a name:*/

// Example
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Friday",
    "Saturday",
];

let day = days[date_3.getDay()]
    // console.log(day); // sunday

let daytody = days[date.getDay()]
    // console.log(daytody)


//*  The getTime() Method
// The getTime() method returns the number of milliseconds since January 1, 1970:

// Example

// console.log(new Date("1970-01-01").getTime()); // 0
// console.log(new Date("2020-02-09").getTime()); // 1581206400000
// console.log(new Date().getTime()); // 1713200003518

//* The Date.now() Method
// Date.now() returns the number of milliseconds since January 1, 1970.

// console.log(Date.now());

//Calculate the number of years since 1970/01/01:

const minute = 1000 * 60;
const hour = minute * 60;
const dayA = hour * 24;
const year = dayA * 365;

let years = Math.round(Date.now() / year);
// console.log(years)

/*Date.now() is a static method of the Date object.

You cannot use it on a date object like myDate.now().

The syntax is always Date.now().*/


/*
* UTC Date Get Methods
^Method	                Same As	                Description
& getUTCDate()	        getDate()	        Returns the UTC date
& getUTCFullYear()	    getFullYear()	    Returns the UTC year
& getUTCMonth()	        getMonth()	        Returns the UTC month
& getUTCDay()	        getDay()	        Returns the UTC day
& getUTCHours()	        getHours()	        Returns the UTC hour
& getUTCMinutes()	    getMinutes()	    Returns the UTC minutes
& getUTCSeconds()	    getSeconds()	    Returns the UTC seconds
& getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds

UTC methods use UTC time (Coordinated Universal Time).

UTC time is the same as GMT (Greenwich Mean Time).

The difference between Local time and UTC time can be up to 24 hours.
*/

//* The getTimezoneOffset() Method
// The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:

// Example
let diff = d.getTimezoneOffset();
// console.log(diff)