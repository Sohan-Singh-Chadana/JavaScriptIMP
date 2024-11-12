//* JavaScript Array Search

/*
* Array Find and Search Methods
Array indexOf()
Array lastIndexOf()
Array includes()
Array findIndex()
Array findLast()
Array findLastIndex()
! See Also:
Basic Methods
Sort Methods
Iteration Methods	Array find()
*/

//* JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.
//! Note: The first item has position 0, the second item has position 1, and so on.

//^ Example
// Search an array for the item "Apple":
// const fruitS = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruitS.indexOf("Apple") + 1; // 1
// let position = fruitS.indexOf("Apple", 1) + 1 // 3
// console.log(position)

/*
& Syntax
& array.indexOf(item, start)
& item	Required. The item to search for.
& start	Optional. Where to start the search. Negative values will start at the given position & counting from the end, and search to the end.
& Array.indexOf() returns -1 if the item is not found.
& If the item is present more than once, it returns the position of the first occurrence.
*/


//* JavaScript Array lastIndexOf()
//~ Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
// const fruitS = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruitS.lastIndexOf("Apple") // 2
// let position = fruitS.lastIndexOf("Apple") + 1 // 3
// console.log(position)

/*
~ Syntax
~ array.lastIndexOf(item, start)
~ item	Required. The item to search for
~ start	Optional. Where to start the search. Negative values will start at the given position  counting from the end, and search to the beginning
*/


//* JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
// Example
const fruitS = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruitS.includes("Mango")); // is true

//Syntax
// array.includes(search-item)

//Array.includes() allows to check for NaN values. Unlike Array.indexOf().

//* JavaScript Array find()
//& The find() method returns the value of the first array element that passes a test function.
//& This example finds (returns the value of) the first element that is larger than 18:

// const numberS = [4, 9, 16, 25, 29];
// let first = numberS.find((value, index, array) => {
//     return value > 18
// });
// console.log(first) // 25

//!Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself


//* JavaScript Array findIndex()
//&  The findIndex() method returns the index of the first array element that passes a test function.
//&  This example finds the index of the first element that is larger than 18:

const numberS = [4, 9, 16, 25, 29];
let first = numberS.findIndex((value, index, array) => {
    return value > 18;
})
console.log(first) // 25 index 3 // 3

//! Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

//* JavaScript Array findLast() Method
//&   ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

const temp = [27, 28, 30, 40, 42, 35, 45, 30];
let high = temp.findLast(x => x > 40);
console.log(high); //45

//* JavaScript Array findLastIndex() Method
// & The findLastIndex() method finds the index of the last element that satisfies a condition.
let pos = temp.findLastIndex(x => x > 40);
console.log('The last temperature over 40 was in position', pos); // 6
// console.log(temp.indexOf(45))

//* JavaScript Array fill() Method
// Fill all the elements with a value:
console.log(temp.fill(55)) // [55, 55, 55, 55, 55, 55, 55, 55]


// Examples
//&  Fill all the elements with a value:

const fruit_s = ["Banana", "Orange", "Apple", "Mango", ];
// console.log(fruits.fill("Kiwi")) //  ['Kiwi', 'Kiwi', 'Kiwi', 'Kiwi']

//& Fill the last two elements:
console.log(fruit_s.fill("Kiwi", 2, 4)) // ['Banana', 'Orange', 'Kiwi', 'Kiwi']