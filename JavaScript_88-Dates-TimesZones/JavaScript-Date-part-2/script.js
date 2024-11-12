const myDate = new Date();

console.log(myDate)

myDate.setFullYear(2001)
myDate.setMonth(7)
myDate.setDate(8)
myDate.setHours(10)
myDate.setMinutes(30)
myDate.setSeconds(55)
const s = myDate.setMilliseconds(678)
myDate.setTime(0)

console.log(myDate)
console.log(new Date(s).getMilliseconds())


myDate.setUTCFullYear(2001)
myDate.setUTCMonth(7)
myDate.setUTCDate(8)
myDate.setUTCHours(10)
myDate.setUTCMinutes(0)
myDate.setUTCSeconds(55);
// myDate.setUTCMilliseconds(897)
// myDate.setTime(0)

console.log(myDate)



console.log(Date.now())
console.log(Date.parse("08 Aug 2001 10:41:00 GMT"))
console.log(Date.UTC())

// other methods
console.log(myDate.valueOf())