//~ myBrithDate => Wed Aug 08 2001 22:45:09 GMT+0530 (India Standard Time)

// 1721415539075 / 1000 / 60/ 60 / 24 / 365



const myDate = new Date();

const isoDate = '2024-07-20T17:22:31.184Z'


console.log(myDate);

//* UTC get method
console.log('UTC Year', myDate.getUTCFullYear());
console.log('UTC Month', myDate.getUTCMonth() + 1)
console.log('UTC Date', myDate.getUTCDate())
console.log('UTC Day', myDate.getUTCDay())
console.log('UTC Hours', myDate.getUTCHours())
console.log('UTC Minutes', myDate.getUTCMinutes())
console.log('UTC Seconds', myDate.getUTCSeconds())
console.log('UTC Milliseconds', myDate.getUTCMilliseconds())

//? Local get Method
console.log('Local Year', myDate.getFullYear())
console.log('Local Month', myDate.getMonth() + 1)
console.log('Local Date', myDate.getDate())
console.log('Local Day', myDate.getDay())
console.log('Local Hours', myDate.getHours())
console.log('Local Minutes', myDate.getMinutes())
console.log('Local Seconds', myDate.getSeconds())
console.log('Local Milliseconds', myDate.getMilliseconds())

//~ other get Method
console.log("Local", myDate.getTime())
console.log('Time Zone offset', myDate.getTimezoneOffset() / (-60))

//? to method without argument
console.log('Local DATE: ', myDate.toString())
console.log('UTC DATE: ', myDate.toUTCString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())

//? to method with argument
console.log(myDate.toLocaleString('en-IN'))
console.log(myDate.toLocaleString('en-GB', { hour12: true }))
console.log(myDate.toLocaleDateString('en-GB'))
console.log(myDate.toLocaleTimeString())

//? Local Set Methods
myDate.setFullYear(2014)
myDate.setMonth(10)
myDate.setDate(5)
myDate.setHours(10)
myDate.setMinutes(41)
myDate.setSeconds(55)
myDate.setMilliseconds(60)
myDate.setTime(1721571099921)
myDate.setYear(2024) //? Deprecated

// UTC set method
myDate.setUTCFullYear(2014)
myDate.setUTCMonth(10)
myDate.setUTCDate(5)
myDate.setUTCHours(10)
myDate.setUTCMinutes(41)
myDate.setUTCSeconds(55)
myDate.setUTCMilliseconds(60)


// static methods
console.log(Date.now())
console.log(Date.parse("08 Aug 2001 10:41:00 GMT"))
console.log(Date.UTC())


// other methods
console.log(myDate.valueOf())