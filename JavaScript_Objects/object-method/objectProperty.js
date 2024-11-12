//* JavaScript Object Properties

// & Properties are the most important part of any JavaScript object.

//* JavaScript Properties
// Properties are the values associated with a JavaScript object.
// A JavaScript object is a collection of unordered properties.
// Properties can usually be changed, added, and deleted, but some are read only.

//* Accessing JavaScript Properties
// The syntax for accessing the property of an object is:

// objectName.property      // person.age
// or

// objectName["property"]   // person["age"]
// or

// objectName[expression]   // x = "age"; person[x]

//? The expression must evaluate to a property name.

const person3 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue",
};

const y = "age";

console.log(person3["firstname"] + " is " + person3[y] + " year old.");

//* JavaScript for...in Loop
// The JavaScript for...in statement loops through the properties of an object.

// Syntax
// for (let variable in object) {
// code to be executed
// }

//The block of code inside of the for...in loop will be executed once for each property.
// Looping through the properties of an object:

for (const key in person3) {
    if (Object.hasOwnProperty.call(person3, key)) {
        const element = person3[key];
        // console.table(element)
    }
}

//*  Adding New Properties
//? You can add new properties to an existing object by simply giving it a value.
//? Assume that the person object already exists - you can then give it new properties:

person3.nationality = "Inidan";
console.table(person3);

//* Deleting Properties
//?  The delete keyword deletes a property from an object:

// delete person3.age
delete person3["age"];
console.table(person3);

//~ The delete keyword deletes both the value of the property and the property itself.

//~ After deletion, the property cannot be used before it is added back again.

//~ The delete operator is designed to be used on object properties.It has no effect on variables or functions.

//~ The delete operator should not be used on predefined JavaScript object properties.It can crash your application.

//* Nested Objects
// Values in an object can be another object:

const myObje = {
    name: "sohan",
    age: 23,
    cars: {
        car1: "BMW",
        car2: "Rang Rover Velar",
        car3: "Harriar",
    },
};

//? You can access nested objects using the dot notation or the bracket notation:

// Example
console.log(myObje.cars.car3); // Harriar

// or

console.log(myObje.cars["car1"]); // BMW

// or

console.log(myObje["cars"]["car2"]); // Rang Rover Velar

// or

let p1 = "cars";
let p2 = "car2";

console.log(myObje[p1][p2]); // Rang Rover Velar

//* Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:

const myObje1 = {
    ...myObje,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] },
    ],
};

for (let i in myObje1.cars) {
    console.log(myObje1.cars[i]["name"])
    for (let j in myObje1.cars[i].models) {
        console.log(myObje1.cars[i].models[j])
    }
}


//* Property Attributes
// All properties have a name. In addition they also have a value.

// The value is one of the property's attributes.

// Other attributes are: enumerable, configurable, and writable.

// These attributes define how the property can be accessed (is it readable?, is it writable?)

// In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).

// ( ECMAScript 5 has methods for both getting and setting all property attributes)




//* Prototype Properties
//~ JavaScript objects inherit the properties of their prototype.

//~ The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.













// console.log(myObje);
// console.log(myObje1);