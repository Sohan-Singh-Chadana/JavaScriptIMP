const myDate1 = new Date(2015, 0, 1, -1)
const myDate2 = new Date("2024-12-10 10:15:14.555")
const myDate3 = new Date("2024/12/10 10:15:14.555")
const myDate4 = new Date("10 Dec 2024 10:15:14.055")
const myDate = new Date()

console.log(myDate)


//^1
console.log(myDate.toLocaleTimeString('en', { timeStyle: "full" }))
console.log(myDate.toLocaleTimeString('en', { timeStyle: "long" }))
console.log(myDate.toLocaleTimeString('en', { timeStyle: "medium" }))
console.log(myDate.toLocaleTimeString('en', { timeStyle: "short" }))

//^2
console.log(myDate.toLocaleDateString("en-GB"))
console.log(myDate.toLocaleDateString("en-GB", { dateStyle: "full" }))
console.log(myDate.toLocaleDateString("en-GB", { dateStyle: "long" }))
console.log(myDate.toLocaleDateString("en-GB", { dateStyle: "medium" }))
console.log(myDate.toLocaleDateString("en-GB", { dateStyle: "short" }))


//?example for me
const myDOB = new Date("2001-08-08");
console.log(myDOB.toLocaleDateString("en-GB", { dateStyle: "full" }), "My Date of Birth")

//* create fullDayfunction
function getfullDayName(date) {
    // ! 1 trick
    // const formattedDate = date.toLocaleDateString("en-GB", { dateStyle: "full" })
    // return formattedDate.split(" ")[0]


    //! 2 trick
    return date.toLocaleDateString("en-GB", { weekday: "long" })
}

const dayName = getfullDayName(myDOB)
console.log(dayName)

//* create fullMonthfunction
function getfullMonthName(date) {
    // ! 1 trika
    // const formattedDate = date.toLocaleDateString("en-GB", { dateStyle: "full" })
    // return formattedDate.split(" ")[2]

    //! 2 trick
    return date.toLocaleDateString("en-GB", { month: "long" })
}

const monthName = getfullMonthName(myDOB)
console.log(monthName)