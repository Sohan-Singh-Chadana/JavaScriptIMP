// * JavaScript Execution Context


// Introduction to the JavaScript execution context
// Let’s start with the following example:

let x = 10;

function timesTen(a) {
    return a * 10;
};

let y = timesTen(x);

console.log(y); // 100


// In this example:

// First, declare the x variable and initialize its value with 10.

// Second, declare the timesTen() function that accepts an argument and returns a value that is the result of the multiplication of the argument with 10.

// Third, call the timesTen() function with the argument as the value of the x variable and store result in the variable y.

// Finally, output the variable y to the Console.



// Behind the scenes, JavaScript does many things. in this tutorial, you will focus on execution contexts.

// When the JavaScript engine executes the JavaScript code, it creates execution contexts.

// Each execution context has two phases: the creation phase and the execution phase.


//* The creation phase


// When the JavaScript engine executes a script for the first time, it creates the global execution context. During this phase, the JavaScript engine performs the following tasks:

// Create the global object i.e., window in the web browser or global in Node.js.

// Create the this object and bind it to the global object.

// Set up a memory heap for storing variables and function references.

// Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.

// When the JavaScript engine executes the code example above, it does the following in the creation phase:

// First, store the variables x and y and function declaration timesTen() in the global execution context.

// Second, initialize the variables x and y to undefined.