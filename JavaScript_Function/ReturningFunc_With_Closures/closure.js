// Closures
// closure : 30-40%
// analyse : 70-80%
// real Example : 100%

// function can return functions

// function outerFunction() {
//     function innerFunction() {
//         console.log('Hello World')
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// console.log(ans);
// ans()

// debugger

function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName)
    }
    return printName;
}

const ans = printFullName("Sohan", 'Singh');
// console.log(ans);
ans()

// debugger

// var x = 10;

// function foo(a) {
//     var b = 20;

//     function bar(c) {
//         var d = 30;
//         return boop(x + a + b + c + d);
//     }

//     function boop(e) {
//         return e * -1;
//     }

//     return bar;
// }

// var moar = foo(5); // Closure
/*
  The function below executes the function bar which was returned
  when we executed the function foo in the line above. The function bar
  invokes boop, at which point bar gets suspended and boop gets push
  onto the top of the call stack (see the screenshot below)
*/

// console.log(moar(15));


//? example
// function myFunction(power) {
//     return function(num) {
//         return num ** power;
//         // return Math.pow(num, power)
//     }
// }
// const sqrt = myFunction(2);
// const answ = sqrt(3);
// console.log(answ);


// const cube = myFunction(3);
// const answ2 = cube(3);
// console.log(answ2)


const myFunction = (power) => (num) => num ** power;

const sqrt = myFunction(2);
const answ = sqrt(3);
console.log(answ);


const cube = myFunction(3);
const answ2 = cube(3);
console.log(answ2)


// ? example

// function func() {
//     console.log("Hi , You Called Me !!")
//     return function() {
//         console.log("mai already ek bar call ho chuka hoon.")
//     }
// }

//! debugger

function func() {
    let counter = 0;
    return function() {
        if (counter < 1) {
            console.log("Hi , You Called Me !!")
            counter++
        } else {
            console.log("mai already ek bar call ho chuka hoon.")
        }
    }
};


const myFunc = func();
myFunc();
myFunc();
// myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();