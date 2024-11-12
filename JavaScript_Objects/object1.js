//* Creating Objects:

// const product = {
//     id: 1,
//     pName: "laptop",
// }

// let person = {
//     name: "sohan",
//     age: 23,
//     isStudent: true,
//     greet: function() {
//         console.log("Welcome to JS learner")
//     },
// };

//& function - method

let person = {
    name: "sohan",
    age: 23,
    "is'Student": true,
    greet: function() {
        console.log("Welcome to World Best JS Course")
    },
};

//* Accessing Properties:

// console.log(person.age)
// console.log(person.name)
// console.log(person["is'Student"])

//* Adding and Modifying Properties:

// person.job = "Frontend Devleper";
// person.age = 22;
// person['age'] = 23;

// delete person.age

// console.log(person)

//* Methods:

// person.greet() // Welcome to World Best JS Course

//* We can add dynamic keys in an object

// let idType = "studentId"

// let student = {
//     [idType]: "A12345", // Dynamic key based on idType
//     sName: "Sohan",
//     sAge: 23,
//     isStudent: true,
//     greet: function() {
//         console.log(`Hey, my ${idType} is ${student['idType']} and my name is ${student.sName}`)
//     }

// }

// student.greet();

//* Data Modeling:

// let car = {
//     brand: "Totota",
//     model: "Camry",
//     year: 2022,
//     start: function() {
//         console.log("Engine Started!")
//     },
// }


//* Interview Question

//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.

//? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.
//? Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.

// let a = 10;
// const modifyValue = (x) => (x = 20);

// console.log(modifyValue(a)) // 20
// console.log(a) // 10


//? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

// let obj = { id: 5, name: "kodyfier" };

// let obj_1 = obj;
// obj_1.name = "sohan"
// console.log(obj_1)
// console.log("original ", obj)


//* Object.assign()

// let obj = { id: 5, name: "kodyfier" };

// let newObj = Object.assign({}, obj);


// newObj.name = "Sohan";
// console.log(newObj)
// console.log('original', obj)


//* Comparison by Reference:

// const obj_1 = { name: "sohan" };
// const obj_2 = { name: "sohan" };
// const obj_3 = obj_1

// const isEqual = obj_1 == obj_2 ? true : false; // false
// const isEqual = obj_1 == obj_3 ? true : false; // true

// console.log(isEqual)


//* JSON (JavaScript Object Notation);

// let student = {
//     id: 1,
//     sName: "sohan",
//     sAge: 23,
//     isStudent: true,
//     greet: function() {
//         console.log(
//             `hey my id is ${student.identity} & my name is ${student.sName}`
//         )
//     }
// }
// console.log(student)

// let jsonData = JSON.stringify(student)
// console.log("json data as string", jsonData)

// let parsedObject = JSON.parse(jsonData)
// console.log('json data as object', parsedObject)
// console.log(student === parsedObject) // false

//* "this" object


//? In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.

// ("use strict")
x = 5;
// console.log(x);

//* regular function Expression:
// const obj13 = {
//     name: "kodyfier",
//     greet: function() {
//         console.log(this)
//     }
// }

// obj13.greet();

//* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.

// const obj12 = {
//     name: "Kodyfier",
//     greet() {
//         console.log(this)
//     },
// };

// obj12.greet();

//* Fat Arrow Function;

// const obj = {
//     name: "thapa technical",
//     greet: () => {
//         console.log(this)
//     }
// };

// obj.greet();

//* Objects Useful Methods

const product = {
    id: 1,
    name: "laptop",
    category: "Computers",
    brand: "ExampleBrand",
    price: 999.99,
    stock: 50,
    description: "Powerful Laptop wiht a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
    image: "image link will be added during projects",
};
// console.log(product)

//? 1: Object.keys();

// let keys = Object.keys(product)
// console.log(keys)

/*
[
  'id',
  'name',
  'category',
  'brand',
  'price',
  'stock',
  'description',
  'image'
]
*/

//? 2: Object.values();
// let values = Object.values(product)
// console.log(values)

/*
[
  1,
  'laptop',
  'Computers',
  'ExampleBrand',
  999.99,
  50,
  'Powerful Laptop wiht a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.',
  'image link will be added during projects'
]
*/

//? 3: Object.entries();
// let entries = Object.entries(product);
// console.log(entries);
/*
[
  [ 'id', 1 ],
  [ 'name', 'laptop' ],
  [ 'category', 'Computers' ],
  [ 'brand', 'ExampleBrand' ],
  [ 'price', 999.99 ],
  [ 'stock', 50 ],
  [
    'description',
    'Powerful Laptop wiht a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.'
  ],
  [ 'image', 'image link will be added during projects' ]
]
*/


//? 4: Object.hasOwnProperty() :

// console.log(product.hasOwnProperty("name")) //  true
// console.log(product.hasOwnProperty("isStudent")) // false


//? 5: Object.assign():
// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };
// const mergedObject = Object.assign({}, target, source);

// console.log(mergedObject) /// { a: 1, b: 3, c: 4 }


//? 6 : Object.freeze():
// Object.freeze(product)
// product.id = 5656;
// console.log(product.id);

//* Interview Question - objects

//! 1 : what will be the output
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const mergedObject = Object.assign({}, target, source);
// console.log(mergedObject) // { a: 1, b: 3, c: 4 }

//* Interview Question - Object Manipulation:

//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

let student = {
    name: "Bob",
    age: 20,
    grades: {
        math: 90,
        science: 85,
        history: 88,
        // addSubjectGrade(subject, grade) {
        //     if (!this.grades) {
        //         this.grades = {}
        //     }
        //     this.grades[subject] = grade
        // }
    },
}

// const addSubjectGrade = (student, subject, marks) => {
//     if (!student.grades) {
//         student.grades = {}
//     }
//     return student.grades[subject] = marks;
// }

// addSubjectGrade(student, "computer", 92);
// student.grades.addSubjectGrade("computer", 92);
// console.log(student)

//* Interview Question - Object Comparison:
//* ================================================
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// const areObjectsEqual = (obj1, obj2) => {
//     // if (obj1.length != obj2.length) {
//     //     console.log("hi")
//     //     return false
//     // }
//     let o1 = Object.keys(obj1);
//     let o2 = Object.keys(obj2);

//     if (o1.length != o2.length) { // ! condition equle hai to if() nahi chalenga warana chalenga
//         console.log("There keys are not same")
//         return false
//     }

//     for (let key in obj1) {
//         console.log(obj1[key])
//         console.log(obj2[key])
//         if (obj1[key] !== obj2[key]) { // ! condition equle nahi hai to loop chalenga warana nahi
//             return false
//         }
//     }

//     return true
// }


//Example usage;
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York", };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(areObjectsEqual(objA, objB)); // should return true;
// console.log(areObjectsEqual(objA, objC)) // should return false;


//* ===============================================
//* Interview Question - Object Transformation:
//* ================================================
//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

let inputArray = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

// const arrayToObj = (arr) => {
//     // console.log(arr[2].id)
//     let obj = {};
//     for (const key of arr) {
//         // console.log(key.id, key);
//         obj[key.id] = key;
//     }
//     return obj
// }

// ? Seconde solution

// function arrayToObj(inputArray) {
//     const result = {};
//     inputArray.forEach(obj => {
//         result[obj.id] = obj
//     });
//     return result;
// }

function arrayToObj(inputArray) {
    const result = {};
    inputArray.forEach(obj => {
        result[obj.name] = obj
    });
    return result;
}


// console.log(arrayToObj(inputArray));
// Should print: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } };

// Should print: { 'Alice' : { id: 1, name: 'Alice' }, 'Bob' : { id: 2, name: 'Bob' }, 'Charlie' : { id: 3, name: 'Charlie' } };