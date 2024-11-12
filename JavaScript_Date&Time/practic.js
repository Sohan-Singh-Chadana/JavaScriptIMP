// Exercise 1: Create a JavaScript function to check whether an input is a date object or not.

function isDate(input) {
    return input instanceof Date;
}
console.log(isDate(new Date()))


// Exercise 2: Write a JavaScript function to get the current date.

function getCurrentDate() {
    return new Date();
}
console.log(getCurrentDate())

// Exercise 3: Write a JavaScript function to get the number of days in a month.

function getDayInMonth(month, year) {
    return new Date(year, (month + 1), 0).getDate();
}
console.log(getDayInMonth(2, 2024))

// Exercise 4: Write a JavaScript function to get the month name from a particular date.

function getMonthName(date) {
    const newdate = new Date(date);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[newdate.getMonth()];
}

console.log(getMonthName("2020, 2,9"))


// Exercise 5: Write a JavaScript function to calculate the age of a person in years.

function getAge(dateofBirth) {
    const today = new Date();
    const age = today.getFullYear() - dateofBirth.getFullYear();
    return age;
}
const mybirth = new Date("2001")
console.log(getAge(mybirth))

// Exercise 6: Write a JavaScript function to format a date object into a string in the format "MM/DD/YYYY".

function formatDate(date) {
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    console.log(month)
    return `${day}/${month}/${year}`
}
console.log(formatDate(new Date("2020-03-09")))