// const timer1 = setTimeout("console.log('sohan')", 1000)
// const timer2 = setTimeout("console.log('sohan1')")
// const timer3 = setTimeout(a, 3000, 'sohan', 99);
// const timer1 = setInterval("console.log('sohan')", 1000);
// const timer2 = setInterval("console.log('sohan1')")
// const timer3 = setInterval(a, 3000, 'sohan', 99);


// clearTimeout(timer3);


// function a() {
// console.log(arguments[1])
// console.log("Hello Wordl!")
// }

// console.log("kuchbhik");


// setTimeout(function() {
//     console.log("Hello World!")
// }, 0)

// console.log("h1")




//* JavaScript Timing Events: setTimeout and setInterval

// There are two natve functions in the javascript library used to accoplish these tasks: setTimeout() and setInterval().

//^ setTimeout

// setTimeout() is used to delay the execution of the passed function by a specified amount of time.

// There are two parameters that you pass to setTimeout(): the function you want to call, and the amount of time in milliseconds to delay the execution of the function.

// Remember that there are 1000 milliseconds (ms) in a 1 second, so 5000 ms is equal to 5 seconds.

// setTimeout() will execute the function from the first argument one time after the specified time has elapsed.

//? Example:

let timeoutId;


function delayTimer() {
    timeoutId = setTimeout(delayedFunction, 3000);
}

function delayedFunction() {
    alert("Three seconds have elapsed");
}

// delayTimer()

// When the delayTimer function is called it will run setTimeout. After 3 seconds (3000 ms) pass, it will execute delayedFunction which will send an alert.


//^ setInterval

// Use setInterval() to specify a function to repeat with a time delay between executions.

// Again, two parameters are passed to setInterval(): the function you want to call, and the amount of time in milliseconds to delay each call of the function .

// setInterval() will continue to execute until it is cleared.

// ? Example:

let intervalId;

function repeatEverySecond() {
    intervalId = setInterval(sendMessage, 1000)
}

function sendMessage() {
    console.log("One second elapse")
}

// repeatEverySecond()

// When your code calls the function repeatEverySecond it will run setInterval. setInterval will run the function sendMessage every second (1000 ms).

//? You may have noticed that each timer function above is saved to a variable. When either the setTimeout or setInterval function runs, it is assigned a number which is saved to this variable. Note that JavaScript does this all in the background.

// ? This generated number is unique for each instance of timers. This assigned number is also how timers are identified when you want to stop them. For this reason, you must always set your timer to a variable.

//~ For clarity of your code, you should always match clearTimeout() to setTimeout() and clearInterval() to setInterval().


//todo => To stop a timer, call the corresponding clear function and pass it the timer ID variable that matches the timer you wish to stop. The syntax for clearInterval() and clearTimeout() are the same.

//? Example:

let timeoutId$_One;

function delayTimer_$() {
    timeoutId$_One = setTimeout(delayedFunction_$, 2000);
};

function delayedFunction_$() {
    alert("Two seconds have elapsed.")
};

// delayTimer_$();

function clearAlert() {
    clearTimeout(timeoutId$_One)
};

// clearAlert();