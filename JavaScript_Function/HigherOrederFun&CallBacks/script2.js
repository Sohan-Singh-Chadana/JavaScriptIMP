// What is Higher Order Function in JavaScript ?
// Last Updated : 29 Jan, 2024
// A higher-order function is a function that can accept a function as one of its parameters and it can also return a function as its return value or it can do both return as well as accept a function. A higher-order function can also take as well as return other types of values but it either has to take a function as a parameter or return a function as its return value with them. It can be declared using any syntax available in JavaScript to declare functions.

// Example: The below code explains how you can declare higher-order functions in JavaScript.

function higherOrderFunc(a) {
    return function(b) {
        console.log(a * b)
    }
}
console.log(higherOrderFunc(3)(53));


// * JavaScript Higher Order Functions

//& : In JavaScript, a higher-order function is a function that can accept other functions as arguments, return fuctions, or both. They enable absraction, composition, and the creation of more flexible and reusable code.

//?: Syntax:

// function higherOrderFunction(callback) {
// Perform some operations
// Call the callback function
//     callback();
// }
// function callbackFunction() {
//     console.log("Callback function is executed.");
// }
// Passing the callback function to the higher-order function
// higherOrderFunction(callbackFunction);

//& : Parameters:
//~ higherOrederFunction: Takes a callback function, executes it, and performs opeations.
//~ callback: A function passed as an argument, executed inside higherOrderFunction.
//~ callbackFunction(): Logs "Callback Function is executed."
//~ Invocation: Calls higherOrderFunction(callBackFunction),Executing callbackFunction within higherOrderFunction.


// Approach 1: Function as an Argument:
// This approach involves passing a function (callback) as an argument to another function. The receiving function can then execute the callback, enabling flexible and customizable behavior in JavaScript programs.

// Example: In this example, Two functions: greet accepts name and returns a greeting. greet_name combines greeting, message, and name, logging a customized message. Output: “Hi!! JavaScript Welcome To GeeksForGeeks.

// Callbackfunction
function greet(name) {
    return `Hi!! ${name}`
}

// HigherOrderFunction
function greet_name(greeting, message, name) {
    console.log(`${greeting(name)} ${message}`)
}

greet_name(greet, "Welcome To GeeksForGeeks", 'sohan');
// output => Hi!! sohan Welcome To GeeksForGeeks


// Approach 2 : Functions as Return Values:
// Higher-order functions can also return new functions. This is often used for creating specialized functions or closures. For instance, you can create a function factory that generates functions with specific behavior.

// Example: In this example, `multiplier` is a higher-order function that takes a `factor` as an argument and returns a new function that multiplies any number by that factor. We then use `double` and `triple` to create specialized functions.


function multiplier(factor) {
    return function(x) {
        return x * factor
    }
}

const double = multiplier(2);
const triple = multiplier(3)

console.log(double(5))
console.log(triple(5))

// output => Hi!! sohan Welcome To GeeksForGeeks

// Higher-Order Arrow Functions in JavaScript
// Last Updated : 23 Jan, 2023
// Prerequisite: Arrow Functions

// A Higher-Order function is a function that receives a function as an argument otherwise returns the function as output. The higher-Order Arrow function implies using arrow functions (in ES6) along with Higher-Order functions.

// Needs of Higher Order Arrow Function:

// In a general way, the programmer instructs on how to perform the function rather than what is needed which increases the length of the code and makes it error-prone.
// Whereas in the Higher Order Arrow Functions implementation, the code is much short, concise, succinct, easy to debug, and focuses on what is required rather than how to achieve it.
// We can directly work with the current value instead of accessing it individually using its index (i.e arr[0]).
// There is no need to create a predefined array and push back the changes.
// The mutation of objects can be avoided and maintenance of for loop is not required.
// Why avoid forEach()? The forEach() function does not return any value so results need to be pushed in a predefined array whereas this is not the case in the map() function.

// Data set of students
var Students = [
    { rollNo: 21, name: 'Alpha', prizesWon: 1 },
    { rollNo: 22, name: 'Beta', prizesWon: 3 },
    { rollNo: 23, name: 'Gamma', prizesWon: 0 },
    { rollNo: 24, name: 'Delta', prizesWon: 0 },
    { rollNo: 25, name: 'Omega', prizesWon: 1 }
];

// use forEach() function
let StudentsRollNo = [];

Students.forEach(function(student) {
    StudentsRollNo.push(student.rollNo)
})

console.log(StudentsRollNo);
// output => [ 21, 22, 23, 24, 25 ]

//? The Higher - Order functions are:
// JavaScript map() Function: It works on a given array like changing/transforming the whole array and then simply returning it. It does not break the flow for a few conditions. The map() function takes two arguments. The first is a callback which gives the current value of the iteration, the index of the iteration, original array from which the map was called. The other argument is not mandatory which is the value to use as this in the callback. One drawback of using the map() function is that its performance is good only with small data sets.

// Use map() function
let studentRollNO_1 = Students.map(function(student) {
    return student.rollNo
})
console.log(studentRollNO_1);
//output [ 21, 22, 23, 24, 25 ]

//? The implementation of above code using arrow functions.

studentRollNO_1 = Students.map(student => student.rollNo)
console.log(studentRollNO_1);
// output => [ 21, 22, 23, 24, 25 ];

// JavaScript reduce() Function: It is similar to the map() function in terms of a callback for every element of the array. But the difference is that it reduces passes the result of this callback from the original array to another. The result is termed as an accumulator which can be of anything integer, character, string, object, map, etc and should be passed while invoking. The callback now gets the accumulator, current value, index of iteration, and whole array. In simple words, the accumulator accumulates all the return values. Its value is the collection of previously returned accumulations.

// ? using reduce() function
let totalPrice = Students.reduce(function(accumulator, student) {
    return accumulator + student.prizesWon
}, 0)
console.log(totalPrice) // 5

// The implementation of above code using arrow functions.
totalPrice = Students.reduce((accumulator, student) => accumulator + student.prizesWon, 0)
console.log(totalPrice, 'with Arrow Funciton');

// JavaScript find() Function: It also works on an array and returns the first array element which satisfies the condition given in the function. It is similar to map() function. Its performance is not much efficient in case of large data sets although it works fine with small data sets.

// Data set of students
let Students_$1 = [
    { rollNo: 21, name: 'Alpha', prizesWon: 4 },
    { rollNo: 22, name: 'Beta', prizesWon: 3 },
    { rollNo: 23, name: 'Gamma', prizesWon: 0 },
    { rollNo: 24, name: 'Delta', prizesWon: 4 },
    { rollNo: 25, name: 'Omega', prizesWon: 1 }
];

// Using find() function
let achievers = Students_$1.find(function(Student) {
    return Student.prizesWon == 4;
});

// Display only first Student who won four prizes
console.log(achievers);

// Using find() function with arrow functions
achievers = Students_$1.find(
    (Student) => Student.prizesWon == 4);

// Display only first Student who won four prizes
console.log(achievers);

// JavaScript filter() Function: The filter() function works on an array and returns an array for filtered items implying the length of the array is reduced. It also receives the similar arguments as map but the difference lies in the callback as it needs to return either true or false. If the value returned is true then the element remains in the array otherwise the element is filtered out.

// Using filter() function
achievers = Students_$1.filter(function(Student) {
    return Student.prizesWon == 4;
});

// Display Students who won four prizes
console.log(achievers);

// The implementation of above code using arrow functions.


// Using filter() function with arrow functions
achievers = Students_$1.filter(
    (Student) => Student.prizesWon == 4);

// Display Students who won four prizes
console.log(achievers);


// Higher Order Functions in JavaScript – Beginner's Guide
// Soham De Roy
// Higher Order Functions in JavaScript – Beginner's Guide
// In JavaScript, functions are treated as first-class citizens. We can treat functions as values and assign them to another variable, pass them as arguments to another function, or even return them from another function.

// This ability of functions to act as first-class functions is what powers higher order functions in JavaScript.

//* Basically, a function which takes another function as an argument or returns a function is known as a higher order function.

// Group-35
// Let's deep dive a bit to see both types of implementation, that is:

//* Passing a function as an argument to another function
//* Returning a function from another function


// How to Pass a Function as an Argument to Another Function
// In this section, we will see how we can send a function as an argument and ultimately how it helps us write cleaner code.

// Consider the following code in which we want to create a function which accepts an array as an argument. It filters out all the odd numbers from it and returns all the filtered numbers.

// The function will look something like this:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterOdd(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        /*console.log(arr[i] % 2 !== 0)*/
        if (arr[i] % 2 !== 0) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

console.log(filterOdd(arr));

// The above function returns the filtered array [ 1, 3, 5, 7, 9, 11 ] where we have all the odd numbers, as expected.

// Now let's say we also want to make a function that filters out and returns all the even numbers. We can very well go ahead and create the following function to achieve this:

function filterEven(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element % 2 === 0) {
            filteredArr.push(element)
        }
    }
    return filteredArr;
}
console.log(filterEven(arr))

// Again, as expected, we will get the desired output of an array with all even numbers in it – [ 2, 4, 6, 8, 10 ].

// But notice that we are writing a lot of duplicate code in this approach. Both the above functions do a lot of common things, like accepting the original array, creating a new array to store the filtered array, looping through the whole main array, and finally returning the filtered array.

// The only difference between both functions is the logic they use to filter out the original array.

// For the function filterOdd we use the logic of arr[i] % 2 !== 0 whereas in the filterEven function we use the logic arr[i] % 2 == 0 to filter out the original array.

// This is where we can benefit from using higher order functions. The main intention is to create a function to do all the common stuff we did in the above two functions and pass the logic part separately as an argument to this function. Let's see how we can implement this.

// Let's make the function which does all the common stuff we performed in the filterOdd and filterEven functions. This will go something like this:

function filterFunction(arr, callback) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
}

// Ignore the callback parameter for now. Notice how in the new filterFuntion we kept all the common steps, that is accepting the original array, creating a new array to store the filtered array, looping through the whole main array, and finally returning the filtered array that we were performing in the filterOdd and filterEven functions.

// Now the callback parameter basically accepts the logic which will be nothing but another function containing the filtering logic. For filtering the odd and even numbers, respectively, here are the logic functions we need to write:

// function containing logic for filtering out odd numbers
function isOdd(x) {
    return x % 2 != 0
}

// function containing logic filtering out even numbers
function isEven(x) {
    return x % 2 === 0
}

// That 's it! We now just need to pass the main array, along with the logic function to our filterFunction like this:

// For filtering out odd numbers

filterFunction(arr, isOdd);
// Output of console.log(filterFunction(arr, isOdd)):
// [ 1, 3, 5, 7, 9, 11 ]

// For filtering out even numbers
filterFunction(arr, isEven);
// Output of console.log(filterFunction(arr, isEven)):
// [ 2, 4, 6, 8, 10 ]


// This way we are passing logic functions like isOdd or isEven as arguments to another function filterFunction.

// We are basically abstracting out the main filtering logic from the main function. We can now pass any other filtering logic as we like to filterFunction without needing to change it.

// For example, if we want to filter out a number greater than 5 then we just need to write the following filtering logic:

function isGreaterThanFive(x) {
    return x > 5;
}

// and pass it as an argument to filterFunction:

filterFunction(arr, isGreaterThanFive);
// Output of console.log(filterFunction(arr, isGreaterThanFive)):
// [ 6, 7, 8, 9, 10, 11 ]


// We can also pass the logic function as an arrow function and get the same result – that is, passing (x) => x > 5) in place of isGreaterThanFive will give us the same result.

filterFunction(arr, (x) => x > 5);
// Output of console.log(filterFunction(arr, (x) => x > 5)):
// [ 6, 7, 8, 9, 10, 11 ]


// How to Create Polyfills
// We know that JavaScript provides us with some inbuilt higher order functions like map(), filter(), reduce() and so on. Can we recreate our own implementation of these functions? Let's deep dive a little bit more.

// We already created our filtering function in the above section. Let's create an array prototype of our filterFunction function so that we can use it with any array. This will look something like this:

Array.prototype.filterFunction = function(callback) {
    const filteredArr = [];
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        callback(element) ? filteredArr.push(element) : null;
    }
    return filteredArr;
};

// In the above code, this refers to the array the prototype is called upon. So if we write something like:

const arr$1 = [1, 2, 3, 4, 5];
// arr$1.filterFunction(callbackFn)

// then this would refer to the array arr.

// Now we can use the filterFunction just like we use the inbuilt filter() function in JS. We can write something like this:

// arr$1.filterFunction(isEven);

// which is similar to calling the inbuilt filter() function:

// arr$1.filter(isEven);

// Both the above function calls (that is arr.filterFunction(isEven) and arr.filter(isEven)) will give us same output, like [ 2, 4, 6, 8, 10 ].

// Similarly, we can also pass an arrow function in our prototype implementation as we can pass in the inbuilt filter() function.

// I
console.log(arr.filterFunction((x) => x % 2 != 0));
console.log(arr.filter((x) => x % 2 != 0));
// both give the same output on console.log: [ 1, 3, 5, 7, 9, 11 ]


// II
console.log(arr.filterFunction((x) => x > 5))
console.log(arr.filter((x) => x > 5));
// both give the same output on console.log: [ 6, 7, 8, 9, 10, 11 ]

// In a way, we have written a polyfill for the inbuilt filter() function.

// Function Chaining
// We can also implement function chaining with our prototype implementation like we can with the inbuilt filter() function. Let's first filter out all the numbers greater than 5. Then from the result, we'll filter out all the even numbers. It will look something like this:

// Using our own filterFunction() prototype implementation
console.log(arr.filterFunction((x) => x > 5).filterFunction((x) => x % 2 === 0))

//Using the inbuilt filter() implementation
console.log(arr.filter((x) => x > 5).filter((x) => x % 2 === 0))

// both give the same output on console.log: [ 6, 8, 10 ]


// This is how we can use higher order functions in JS to write mode modular, cleaner and, more maintainable code.

// Next, let's look at how we can return a function from another function.


// How to Return a Function from Another Function in JavaScript
// We can return a function from another function because we treat functions in JavaScript as values. Let's see this through an example:


function calculate(opeation) {
    switch (opeation) {
        case "ADD":
            return function(a, b) {
                console.log(`${a} + ${b} = ${a + b}`);
            };
        case "SUBTRACT":
            return function(a, b) {
                console.log(`${a} - ${b} = ${a - b}`);
            }
    }
}

// In the above code, when we invoke the function calculate with an argument, it switches on that argument and then finally returns an anonymous function. So if we call the function calculate() and store its result in a variable and console log it, we will get the following output:

const calculate1 = calculate("ADD");
console.log(calculate1);

// You can see that calculateAdd contains an anonymous function that the calculate() function returned.

// There are two ways to call this inner function which we'll explore now.

// Call the returned function using a variable
// In this method, we stored the return function in a variable as shown above and then invoked the variable to in turn invoke the inner function.

// Let's see it in code:

const calculateAdd = calculate("ADD");
calculateAdd(2, 3);
// output => 2 + 3 = 5

const calculateSubtract = calculate("SUBTRACT");
calculateSubtract(2, 3);
// output => 2 - 3 = -1


// So what'd we do here?

// We called the calculate() function and passed ADD as the argument
// We stored the returned anonymous function in the calculateAdd variable, and
// We invoked the inner returned function by calling calculateAdd() with the required arguments.


//* Call the returned function using double parentheses
// This is a very sophisticated way of calling the inner returned function. We use double parentheses ()() in this method.

// Let's see it in code:

calculate("ADD")(2, 3);
// output => 2 + 3 = 5

calculate("SUBTRACT")(2, 3);
// output => 2 - 3 = -1


// You can thinks about this in a similar way to our chaining example above. It's just that instead of chaining functions, we chain the arguments.

// The arguments in the first parentheses belong to the outer function, while the arguments in the second parentheses belong to the inner returned function.

// The calculate() method returns a function as explained earlier, and it is that returned function which is immediately called using the second parentheses.

// As I mentioned above, it's a very sophisticated way of calling a function. But once you get the hang of it, it becomes...well quite natural.

// One place where we can see this kind of double parentheses notation is in the connect method in the redux state management library. You can read more about connect here.

// Summary
// In this article, we learned:

//* Why functions are called first class citizens in JS
//*  What are higher order functions
//*  How to pass a function as an argument to another function
//* How to create an array prototype, function chaining, writing our own polyfill for the inbuilt filter() method
//*  How to return a function from another function and different ways to call the returned function


// example

function SayHello() {
    return `Hello, `;
}

function Greeting(helloMessage, name) {
    console.log(helloMessage(), name)
}

const Name = ['JavaScript', 'React', 'ReduxToolKit'];

Name.forEach(name => Greeting(SayHello, name))