//* JavaScript Object Methods

// Example
const person4 = {
    firstName: "sohan",
    last_Name: "singh",
    Id: 5556,
    FullName: function() {
        return `${this.firstName} ${this.last_Name}`
    },
};

let s = person4.FullName()
let lsn = 'last_Name'

console.log(s);
console.log(person4[lsn]) // singh


//*What is this?
//~ In JavaScript, the this keyword refers to an object.
//~ Which object depends on how this is being invoked (used or called).
//~ The this keyword refers to different objects depending on how it is used:
//~ In an object method, this refers to the object.
//~ Alone, this refers to the global object.
//~ In a function, this refers to the global object.
//~ In a function, in strict mode, this is undefined.
//~ In an event, this refers to the element that received the event.
//~ Methods like call(), apply(), and bind() can refer this to any object.

//! Note
// this is not a variable. It is a keyword. You cannot change the value of this.

//* JavaScript Methods
// JavaScript methods are actions that can be performed on objects.
// A JavaScript method is a property containing a function definition.

/*
Property	Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
*/

//* Methods are functions stored as object properties.

//* Accessing Object Methods
// You access an object method with the following syntax:

// objectName.methodName()
// You will typically describe fullName() as a method of the person object, and fullName as a property.

// The fullName property will execute (as a function) when it is invoked with ().

// This example accesses the fullName() method of a person object:

let name = person4.FullName();

console.log(name)

// If you access the fullName property, without (), it will return the function definition:

console.log(person4.FullName);
// ƒ () {
//     return `${this.firstName} ${this.last_Name}`
// }

//* Adding a Method to an Object
// Adding a new method to an object is easy:

const person5 = {
    firstName: "narendra",
    lsn: "singh",
    Id: 5556,
}
person5.name = function() {
    return `${this.firstName} ${this.lsn}`
};
console.log(person5.name()) // narendra singh


//* Using Built-In Methods
// This example uses the toUpperCase() method of the String object, to convert a text to uppercase:

// let message = "Hello world!";
// let x = message.toUpperCase();
// The value of x, after execution of the code above will be:

// HELLO WORLD!

const person6 = {...person5 }
person6.name = function() {
    return (`(${this.firstName} ${this.lsn})`).toUpperCase()
}
console.log(person6.name())