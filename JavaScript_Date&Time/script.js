// Dates

/*
 * JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).*/

let myDates = new Date();

// console.log(myDates);
// console.log(Number(myDates))
// console.log(String(myDates))
// console.log(myDates.toString()) // Mon Apr 15 2024 18:16:13 GMT+0530 (India Standard Time)
// console.log(myDates.toISOString()) // 2024-04-15T12:46:13.429Z
// console.log(myDates.toJSON()) // 2024-04-15T12:46:13.429Z
// console.log(myDates.toLocaleDateString()) // 4/15/2024
// console.log(myDates.toLocaleString()) // 4/15/2024, 6:16:13 PM
// console.log(myDates.toLocaleTimeString()) //  6:16:13 PM
// console.log(myDates.toTimeString()) // 18:16:13 GMT+0530 (India Standard Time)
// console.log(myDates.toUTCString()) // Mon, 15 Apr 2024 12:46:13 GMT
// console.log(myDates.toDateString()) // Mon Apr 15 2024
// console.log(typeof myDates) // object

let myCreatedDate = new Date(2020, 1, 9)
let myCreatedDate1 = new Date(2024, 1, 26, 10, 30);
let myCreatedDate2 = new Date("09-02-2020");
// console.log(myCreatedDate.toDateString()) // Sun Feb 09 2020
// console.log(myCreatedDate1.toLocaleString()) // 2/26/2024, 10:30:00 AM
// console.log(myCreatedDate2.toLocaleString()) // 2/26/2024, 10:30:00 AM

let myTimeStamp = Date.now();
// console.log(myTimeStamp) // 1713186136478
// console.log(myCreatedDate2.getTime()) // 1598985000000
// console.log(Math.floor(myTimeStamp / 1000)) // 1713186368

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate()); // 15
// console.log(newDate.getDay()); // 1
// console.log(newDate.getMonth() + 1); // 4
// console.log(newDate.getFullYear()); // 2024
// console.log(newDate.getHours()); // 18
// console.log(newDate.getMinutes()); // 42
// console.log(newDate.getSeconds()); // 10
// console.log(newDate.getMilliseconds()); // 700
// console.log(newDate.getTime()); // 1713186730633
// console.log(newDate.getTimezoneOffset()); // -330

// `${newDate.getDay()} and the time`

let newd = newDate.toLocaleString("default", {
    weekday: "long",
})

// console.log(newd);

/*
1*60 = 60
60* 24 = 1440 //* One day (24 hours) is 1440 minute
600 + 600 + 240 = 1440
1440*60 = 86400 // * One day (24 hours)  is 86400 second
60 * 60 = 3600 //* One Hour () is 3600 second
3600 * 24 = 86400
86400 * 1000 = 86400000 //* One day (24 hours)  is '8,64,00,000' milliseconds
Number(86400000).toLocaleString();
'86,400,000'
Number(86400000).toLocaleString('en-IN');
'8,64,00,000'
*/