//* JavaScript Array Methods

/*
* Basic Array Methods
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()
* See Also:
Search Methods
Sort Methods
Iteration Methods
*/


//* JavaScript Array length
// The length property returns the length (size) of an array:

// Example
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits1.length;
console.log(size); // 4

//* JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

console.log(fruits1.toString()) // Banana,Orange,Apple,Mango

//* JavaScript Array at()
// ES2022 intoduced the array method at():


// Examples
// Get the third element of fruits using at():

// let fruit1 = fruits1.at(2)
// console.log(fruit1) // Apple

// Get the third element of fruits using []:

let fruit1 = fruits[2];
console.log(fruit1) // Apple


/*
& The at() method returns an indexed element from an array.
& The at() method returns the same as [].
& The at() method is supported in all modern browsers since March 2022:
*/

/*
!Note
Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.
This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
The at() method was introduced in ES2022 to solve this problem.
*/

//* JavaScript Array join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

console.log(fruits1.join(" * ")); // Banana * Orange * Apple * Mango

// * Popping and Pushing
//&  When you work with arrays, it is easy to remove elements and add new elements.
//&  This is what popping and pushing is:
//&  Popping items out of an array, or pushing items into an array.

//* JavaScript Array pop()
//& The pop() method removes the last element from an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits1) // ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.pop()) // Mango
// console.log(fruits1) // ["Banana", "Orange", "Apple"];

//&  The pop() method returns the value that was "popped out":

// console.log(fruits1.pop()) // Mango
// console.log(fruits1) // ["Banana", "Orange", "Apple"];

//* JavaScript Array push()
//& The push() method adds a new element to an array(at the end):

// console.log(fruits1) //  ['Banana', 'Orange', 'Apple', 'Mango']
// console.log(fruits1.push("kiwi")) // 5
// console.log(fruits1); // ['Banana', 'Orange', 'Apple', 'Mango', 'kiwi']

//& The push() method returns the new array length:

//*  Shifting Elements
// Shifting is equivalent to popping, but working on the first element instead of the last.

//* JavaScript Array shift()
//&  The shift() method removes the first array element and "shifts" all other elements to a lower index.

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.shift()) // Banana
// console.log(fruits1) // ['Orange', 'Apple', 'Mango', 'kiwi']

//& The shift() method returns the value that was "shifted out":

//* JavaScript Array unshift()
//&  The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// console.log(fruits1)
// console.log(fruits1.unshift("Lemon", "Gruva"))
// console.log(fruits1)

//? The unshift() method returns the new array length:

/*
* Changing Elements
Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...
*/

// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1) // ['Banana', 'Orange', 'Apple', 'Mango']
// fruits1[0] = "Kiwi";
// console.log(fruits1) //   ['Kiwi', 'Orange', 'Apple', 'Mango']

//* JavaScript Array length
//&  The length property provides an easy way to append a new element to an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1)
// fruits1[fruits1.length] = "Kiwi";
// console.log(fruits1) //  ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']


//*  JavaScript Array delete()
//! Warning !
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.

console.log(fruits1)
    // console.log(delete fruits1[0]) // true
delete fruits1[0]
console.log(fruits1[0]) // undefined


//* Merging Arrays (Concatenating)
//&  In programming languages, concatenation means joining strings end-to-end.
// & Concatenation "snow" and "ball" gives "snowball".
//&  Concatenating arrays means joining arrays end-to-end.

//* JavaScript Array concat()
//& The concat() method creates a new array by merging(concatenating) existing arrays:

//^ Example (Merging Two Arrays)
const mygirls = ["Cecilie", "Lone"]
const myboys = ["Email", "Tabias", "linus"]
const mychildren = mygirls.concat(myboys)
console.log(mychildren) // ['Cecilie', 'Lone', 'Email', 'Tabias', 'linus']

//!Note
// & The concat() method does not change the existing arrays. It always returns a new array.
// & The concat() method can take any number of array arguments.


//^ Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Email", "Tabias", "linus"]
const arr3 = ["Robin", "Morgan"];
const mychildren1 = arr1.concat(arr2, arr3)
console.log(mychildren1) // ['Cecilie', 'Lone', 'Email', 'Tabias', 'linus', 'Robin', 'Morgan']

//? The concat() method can also take strings as arguments:

//^ Example (Merging an Array with Values)
const arr11 = ["email", "tobias", "linus"];
const mychildren2 = arr11.concat("Peter")
console.log(mychildren2) //  ['email', 'tobias', 'linus', 'Peter']

//*  Array copyWithin()
// The copyWithin() method copies array elements to another position in an array:

//^ Examples
// Copy to index 2, all elements from index 0:

// const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
// fruits12.copyWithin(2, 0);
// console.log(fruits12) //  ['Banana', 'Orange', 'Banana', 'Orange']

//& Copy to index 2, the elements from index 0 to 2:
const fruits13 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];;
fruits13.copyWithin(2, 0, 2)
console.log(fruits13) //  ['Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya']

//! Note
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.


//* Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.

// Flattening is useful when you want to convert a multi - dimensional array into a one - dimensional array.

//* JavaScript Array flat()
// ES2019 Introduced the Array flat() method.

// The flat() method creates a new array with sub - array elements concatenated to a specified depth.

const myArr = [
    [1, 2],
    [
        [3, [5, [2, [3, 45, ]]]], 4
    ],
    [5, 6]
];
const newArr = myArr.flat(Infinity)
console.log(newArr); //  [1, 2, 3, 5, 2, 3, 45, 4, 5, 6]

//* Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

const fruits14 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits14)
// fruits14.splice(2, 0, "Lemon", "Kiwi")
// console.log(fruits14) // ["Banana", "Orange","Lemon","Kiwi", "Apple", "Mango"];

/*
& The first parameter (2) defines the position where new elements should be added (spliced in).

& The second parameter (0) defines how many elements should be removed.

& The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

& The splice() method returns an array with the deleted items:
*/

// console.log(fruits14) // (4) ['Banana', 'Orange', 'Apple', 'Mango']
// let removearr = fruits14.splice(2, 2, "Lemon", "Kiwi")
// console.log(fruits14) //  ["Banana", "Orange","Lemon","Kiwi"];
// console.log(removearr) //  (2) ['Apple', 'Mango']

//* Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array

console.log(fruits14) //  ['Banana', 'Orange', 'Apple', 'Mango']
const mremov = fruits14.splice(0, 1);
console.log(fruits14) //['Orange', 'Apple', 'Mango']
console.log(mremov) // ['Banana']

const reversword = fruits14.join(' ').split(" ").map((word) => word.split('').reverse().join(''))
console.log(reversword.join(' ')) // egnarO elppA ognaM


/*
& The first parameter (0) defines the position where new elements should be added (spliced in).

& The second parameter (1) defines how many elements should be removed.

& The rest of the parameters are omitted. No new elements will be added.
*/

//* JavaScript Array toSpliced()
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months) // (4) ['Jan', 'Feb', 'Mar', 'Apr']
const spliced = months.toSpliced(0, 1);
console.log(months) // (4) ['Jan', 'Feb', 'Mar', 'Apr']
console.log(spliced) //  ['Feb', 'Mar', 'Apr']

//* JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array:

// Example
// Slice out a part of an array starting from array element 1 ("Orange"):

const fruits15 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits15) // ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const citrus = fruits15.slice(1);
console.log(citrus) // ['Orange', 'Lemon', 'Apple', 'Mango']
console.log(fruits15) // ["Banana", "Orange", "Lemon", "Apple", "Mango"]

//* Note
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

//^ Example
// Slice out a part of an array starting from array element 3 ("Apple"):

const citrus1 = fruits15.slice(3);
console.log(citrus1) // ['Apple', 'Mango']

//& The slice() method can take two arguments like slice(1, 3).
//&  The method then selects elements from the start argument, and up to (but not including) the end argument.

const citrus2 = fruits15.slice(1, 3);
console.log(citrus2) //  ['Orange', 'Lemon']

//& If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

// Example
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus3 = fruits15.slice(2);
console.log(citrus3) //  ['Lemon', 'Apple', 'Mango']

//* Automatic toString()
// & JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
// & This is always the case when you try to output an array.
// & These two examples will produce the same result:


console.log(fruits15.toString()) // Banana,Orange,Lemon,Apple,Mango

//! Note
// All JavaScript objects have a toString() method.