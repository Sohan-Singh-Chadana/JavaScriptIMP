// If
// const isUserLoggedIN = true;
// const temperature = 41;

// if (temperature === 40) {
//     console.log("less than 50")
// } else {
//     console.log("temperature is greater than 50")
// }

// console.log("Execute");
// 3 != 2
// 2 == "2"
// 2 !== 3

// <,>,<=,>=, == , != , === , !==

// const score = 200;

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedINfromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course")
};

if (loggedINfromEmail || loggedInfromGoogle) {
    console.log("User logged in ")
};




//*Control flow
// Control flow is the order in which the computer executes statements in a script.

// Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.