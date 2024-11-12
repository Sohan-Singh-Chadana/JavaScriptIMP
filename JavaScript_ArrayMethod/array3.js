// reference type

// oredered collection of items

//* Arrays - Decalaration
// let fruites = ["apple", "banana", "cherry"];
// let numbers = [1, 2, 3, 4];
// let mixed = [1, 2, 2.3, 'string', null, undefined, NaN];
// console.log(mixed)
// console.log(numbers)
// console.log(fruites[1])

// let fruites = ["apple", "banana", "cherry"];
// let obj = {}; // object literal
// console.log(fruites)
// fruites[1] = "mango"
// console.log(fruites)
// console.log(typeof fruites) // object
// console.log(typeof obj) // object
// console.log(Array.isArray(fruites)) //true
// console.log(Array.isArray(obj)) // false

// * Array push pop
// * Array shift unshift

// let fruites = ["apple", "banana", "cherry"];
// console.log(fruites)

//* push
// console.log(fruites.push("grapes")) // new length
// console.log(fruites);


//* pop
// console.log(fruites.pop()) // grapes
// console.log(fruites);

//* unshift
// console.log(fruites.unshift("grapes", "mango")) // new length
// console.log(fruites)

//* shift
// console.log(fruites.shift()) // grapes
// console.log(fruites);

//* primitve vs Reference data types
let num1 = 6;
let num2 = num1;
// console.log("value is num1 is ", num1)
// console.log("value is num2 is ", num2);
// num1++
// console.log("after incrementing num1")
// console.log("value is num1 is ", num1)
// console.log("value is num2 is ", num2);

// reference types
// array
// let array1 = ["item1", "item2"]
// let array2 = array1;
// console.log(array1 === array2); // true
// console.log("array1", array1)
// console.log("array2", array2)
// array1.push("item3")
// console.log("after pushing element to array 1")
// console.log("array1", array1)
// console.log("array2", array2)


//* how to clone array

// * how to concatenate two arrays
let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["itme3", "item4"]);
// let array2 = [].concat(array1);

// * new way
//* spread Operator

let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray]
array1.push("item3");

console.log(array1 === array2)
console.log(array1)
console.log(array2)