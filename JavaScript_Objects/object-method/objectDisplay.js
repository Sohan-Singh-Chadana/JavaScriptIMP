//* JavaScript Display Objects

//& How to Display JavaScript Objects?
// Displaying a JavaScript object will output [object Object].

// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

//* Displaying Object Properties
// The properties of an object can be displayed as a string:

const person66 = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person66.name, person66.age, person66.city)

//* Displaying the Object in a Loop
// The properties of an object can be collected in a loop:

for (let x in person66) {
    console.log(person66[x])
}

//! You must use person[x] in the loop.
//! person.x will not work (Because x is a variable).

//* Using Object.values()
// Any JavaScript object can be converted to an array using Object.values():

// myArray is now a JavaScript array, ready to be displayed:

const myArray = Object.values(person66)
console.log(myArray)

//* Using JSON.stringify()
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

// myString is now a JavaScript string, ready to be displayed:

let myString = JSON.stringify(person66)
console.log(myString)

// The result will be a string following the JSON notation:
// {"name":"John","age":50,"city":"New York"}


//* Stringify Dates
// JSON.stringify converts dates into strings:

let person8 = {
    name: "John",
    today: new Date()
};

console.log(JSON.stringify(person8))

//* Stringify Functions
// JSON.stringify will not stringify functions:

const person9 = {
    name: "John",
    age: function() { return 30; }
};

console.log(JSON.stringify(person9));

// This can be "fixed" if you convert the functions into strings before stringifying.

person9.age = person9.age.toString();

console.log(JSON.stringify(person9))

//* Stringify Arrays
// It is also possible to stringify JavaScript arrays:

const arr = ["John", "Peter", "Sally", "Jane"];

console.log(JSON.stringify(arr));

// The result will be a string following the JSON notation:
// ["John","Peter","Sally","Jane"]