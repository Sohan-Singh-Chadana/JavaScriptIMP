// let fruits = ["apple", "orange", "banana"];
// fruits[2] = "mango";
// console.log(fruits);

// ? Array Traversal / Iterating over Arrays
// let furits = ["apple", "orange", "mango", "grapes", "banana"]

// ? 1 for of loop , also knows as  iterable

// for (let item of furits) {
//     console.log(item)
// }

// for (let i = 0; i <= furits; i++) {
//     console.log(furits[i])
// }

// ? 2 For in loop

// for (const item in furits) {
//     console.log(item)
// };

// ? 3: forEach Method

// furits.forEach((currentValue, index, arr) => {
//     console.log(index, currentValue)
//         // console.log(arr)
// });
// const myforeach = furits.forEach((currentValue, index, arr) => {
//     return `${currentValue} ${index}`
//         // console.log(index, currentValue)
//         // console.log(arr)
// })
// console.log(myforeach) // undefined

// ? 4: Map function

// const myMapArr = furits.map((currentValue, index, arr) => {
//     return `My fav fruit is ${currentValue} `
//         // console.log(index, currentValue)
//         // console.log(arr)
// });
// console.log(myMapArr);
// console.log(furits)

// todo practice Time
// ! write a program to multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];

// forEach with
// numbers.forEach((currElem) => {
//     console.log(currElem * 2);
// Performs an action on each element
// })

// Map with
// const doubleValue = numbers.map((currElem) => {
//     return currElem * 2;
// Creates a new array with transformed elements
// })
// console.log(doubleValue);


// ? Hot insert, Add,  Replace annd Delelte elements n ARRay(CRUD)
// let furits = ["apple", "orange", "mango", "grapes", "banana"]


// ?1: Push(); method that adds one or more elements to the end of array.

// console.log(furits.push("gauva"));
// console.log(furits);
// The push() method returns the new length.

// ? 2: pop(): method that removes the last element from an array .

// console.log(furits.pop())
// console.log(furits)

// ? 3: unshift() : Method that removes the first element from an array .

// console.log(furits.unshift("gauva"));
// console.log(furits);

// The unshift() method returns the new length.

// ? 4: shift(): Method that removes the first element from an array

// console.log(furits.shift())
// console.log(furits)

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
let furits = ["apple", "orange", "mango", "banana"]


// console.log(furits.splice()) // return []
// console.log(furits.splice(1, 1, "grapes"));
// console.log(furits)

//! what if you want to add the element  at the end
// furits.splice(-1, 0, "Grapes");
// furits.splice(furits.length, 0, "grapes")
// console.log(furits)

//? Searching and filter in an array

//? For search we have - indexOf, lastIndexOf & includes

// const numberS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//? : indexOf():
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numberS.indexOf(4)) // 3
// console.log(numberS.indexOf(4, 5)) // -1

//? 2: lastIndexOf Method:
// const numberS = [1, 2, 3, 4, 9, 5, 6, 8, 8, 7, 6, 8, 9];
// const result = numberS.indexOf(6);
// console.log(result)
// const result1 = numberS.lastIndexOf(6);
// console.log(result1)
// console.log(numberS.lastIndexOf(6, 8))
// console.log(numberS.lastIndexOf(6, -4))

//? 3: includes Method
// syntax
// includes(searchElement)
// includes(searchElement,formIndex)

// const numberS = [1, 2, 3, 4, 9, 5, 6, 8, 8, 7, 6, 8, 9];
// const result = numberS.includes(6) // true
// const result = numberS.includes(16) // false
// console.log(result);

//todo Challenge time
//? 1: Add Dec at the end of an array
//? 2: What is the return value of splice method?
//? 3: Update march to March (update)?
//? 4: Delete June from an array?


const months = ["Jan", "march", "April", "June", "July"];

//1
// months.push("Dec")
// months.splice(months.length, 0, "Dec");
// console.log(months);

// 2
// returns an empty array([])

//3
// months.splice(1, 1, "March")
// console.log(months)
// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1, "March")
// console.log(months)

//4
// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete, 1)
// console.log(months);

//? Search + filter
const numberS = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// ? 1: find Method:


// const result = numberS.find((currentValue, index, array) => {
//     return currentValue > 6
// })
// console.log(result)
// console.log(typeof result) //  7

// ? 2 findIndex Method:
// const numberS = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// const result = numberS.map((currElem) => currElem * 5)
// console.log(result)

// const result2 = result.findIndex((currElem) => {
//     return currElem > 15
// })

// console.log(result2)

//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numberS = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// const result = numberS.filter((currentValue, index, array) => {
//     return currentValue > 4
// })
// console.log(result)

//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numberS = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// let updatedCart = numberS.filter((curElem) => {
//     return curElem !== value;
// });
// console.log(updatedCart)

// Practice time
// !Example 2: Filtering Products by Price
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Smartwatch", price: 150 },
];
// Filter products with a price less than or equal to 500

// const filterProducts = products.filter((curElem) => {
//     return curElem.price <= 500;
//     // console.log(curElem.price <= 500)
// })

// console.log(filterProducts);

// //! Filter unique values

// const numberS = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// let uniqueValues = numberS.filter((curElem, index, arr) => {
//     // console.log(index)
//     // console.log(arr.indexOf(curElem))
//     // console.log(arr.indexOf(curElem) === index)
//     return arr.indexOf(curElem) === index
// });
// console.log(uniqueValues)

// console.log([...new Set(numberS)]);

//?  How to Sort and Compare an Array
// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numberS = [1, 2, 3, 4, 10, 5, 4, 6, 7, 8, 6, 9];

// console.log(fruits)
// fruits.sort()
// console.log(fruits)
// fruits.sort().reverse()
// console.log(fruits)


// numberS.sort()
// console.log(numberS)

//? compare callback function
// syntax
// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1  => switch the order
//  if(b>a) return -1  => keep the order

// numberS.sort((a, b) => {
//     if (a > b) return -1
//     if (b > a) return 1
// })

// console.log(numberS)
// numberS.sort((a, b) => {
//     return a - b
// })
// console.log(numberS)
// console.log([...new Set(numberS)])
// numberS.sort((a, b) => {
//     return b - a
// })
// console.log(numberS)
// console.log([...new Set(numberS)])

//! Using map to square each number and create a new array

// const numberS = [1, 2, 3, 4, 5];

// let result = numberS.map((curElem) => curElem * curElem)
// console.log(result)

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.

// const words = ["APPLE", "banana", "cherry", "date"];

// const result = words.map((cureElem) => {
//     return cureElem.toLowerCase();
// })
// console.log(result)

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// const numberS = [1, 2, 3, 4, 5];
// const result = numberS.map((curElem) => {
//     if (curElem % 2 === 0) {
//         return curElem * curElem
//     }
// }).filter((curElem) => curElem !== undefined)
// console.log(result)

// const evenSquare = numberS.map((curvalue) => (curvalue % 2 === 0 ? curvalue * curvalue : undefined)).filter((curele) => curele !== undefined)
// console.log(evenSquare);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

// const names = ["ram", "vinod", "laxman"];
// const prefixName = names.map((curEle) => `Mr. ${curEle}`)
// console.log(prefixName);

//? Reduce method

// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//     // Your logic here
//     // Return the updated accumulator value
// }, initialValue);

// const productPrice = [100, 200, 300, 400, 500];

// const totalPrice = productPrice.reduce((accum, curEle) => {
//         return accum + curEle
//     }, 0)
// console.log(totalPrice)
// console.log("hello code runner")