//* JavaScript Array Iteration

/*
* Array Iteration Methods
* Array iteration methods operate on every array item:

Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)

!See Also:
Basic Array Methods
Array Search Methods
Array Sort Methods
*/

//* JavaScript Array forEach()
//&  The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25]
numbers.forEach((value, index, array) => {
    // console.log(value)
})

/*
Note that the function takes 3 arguments:

The item value
The item index
The array itself
The example above uses only the value parameter. The example can be rewritten to:
*/

/*
Syntax
JS
forEach(callbackFn)
forEach(callbackFn, thisArg)

*Parameters
callbackFn
A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:

*element
The current element being processed in the array.

*index
The index of the current element being processed in the array.

* array
The array forEach() was called upon.

* thisArg Optional
A value to use as this when executing callbackFn. See iterative methods.

*Return value
None (undefined).

* Description
& The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order. Unlike map(), forEach() always returns undefined and is not chainable. The typical use case is to execute side effects at the end of a chain. Read the iterative methods section for more information about how these methods work in general.



& callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

& The forEach() method is generic. It only expects the this value to have a length property and integer-keyed properties.

& There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

& Early termination may be accomplished with looping statements like for, for...of, and for...in. Array methods like every(), some(), find(), and findIndex() also stops iteration immediately when further iteration is not necessary.

& forEach() expects a synchronous function — it does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.

*/

const ratings = [5, 4, 5]
let sum = 0;

const sumfunction = async(a, b) => a + b;

ratings.forEach(async(rating) => {
    sum = await sumfunction(sum, rating)
});
// console.log(sum) // 0

// Naively expected output: 14
// Actual output: 0

// To run a series of asynchronous operations sequentially or concurrently,

// Example

//* Converting a for loop to forEach
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i]);
}
// console.log(copyItems)

// afetr
items.forEach((item) => {
    copyItems.push(item)
});
// console.log(copyItems)

/*
Printing the contents of an array
!Note: In order to display the content of an array in the console, you can use console.table(), which prints a formatted version of the array.

The following example illustrates an alternative approach, using forEach().
*/

// The following code logs a line for each element in an array:


// Notice that index 2 is skipped, since there is no item at
// that position in the array.
[2, 5, , 9].forEach((element, index /*, array*/ ) => {
    // console.log(`a[${index}] = ${element}`)
});

// Logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

//? Using thisArg
// The following(contrived) example updates an object 's properties from each entry in the array:

class Counter {
    constructor() {
        this.sum = 0;
        this.count = 0;
    }

    add(array) {
        // Only function expressions have their own this bindings.
        array.forEach(function countEntery(entery) {
            this.sum += entery;
            ++this.count;
        }, this)
    }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16

/*
^ Since the thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked. The callback uses it as its this value.

! Note: If passing the callback function used an arrow function expression, the thisArg parameter could be omitted, since all arrow functions lexically bind the this value.
*/

//& An object copy function
// The following code creates a copy of a given object.

// There are different ways to create a copy of an object. The following is just one way and is presented to explain how Array.prototype.forEach() works by using Object.* utility functions.

const copy = (obj) => {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach((name) => {
        const desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc);
    })
    return copy
}

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now
console.log(obj2)

console.log(Array.prototype.flat())


// Calling flat() on non-array objects
// The flat() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length. If the element is not an array, it's directly appended to the result. If the element is an array, it's flattened according to the depth parameter.
const arrayLike = {
    length: 3,
    0: [1, 2],
    // Array-like objects aren't flattened
    1: { length: 2, 0: 3, 1: 4 },
    2: 5,
    3: 3, // ignored by flat() since length is 3
};
console.log(Array.prototype.flat.apply(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]


//* JavaScript Array map()
//&  The map() method creates a new array by performing a function on each array element.

//&  The map() method does not execute the function for array elements without values.

//&  The map() method does not change the original array.

//&  This example multiplies each array value by 2:

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(function(value, index, array) {
    return value * 2
})
console.log(numbers2);

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

// When a callback function uses only the value parameter, the index and array parameters can be omitted:

// let my = "12sohan"
// console.log(Number.parseFloat(my))

//~ The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.


/*
Syntax
Copy to Clipboard
map(callbackFn)
map(callbackFn, thisArg)

Parameters
callbackFn
A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array map() was called upon.

thisArg Optional
A value to use as this when executing callbackFn. See iterative methods.

Return value
A new array with each element being the result of the callback function.

Description
The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results. Read the iterative methods section for more information about how these methods work in general.

callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

The map() method is generic. It only expects the this value to have a length property and integer-keyed properties.

Since map builds a new array, calling it without using the returned array is an anti-pattern; use forEach or for...of instead.
*/

/*
Examples
Mapping an array of numbers to an array of square roots
The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.
*/
const numbers3 = [1, 4, 9]
const roots1 = numbers3.map((num) => {
    return Math.sqrt(num)
})
console.log(roots1) //  [1, 2, 3]


//^ Using map to reformat objects in an array
// The following code takes an array of objects and creates a new array containing the newly reformatted objects.

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
]

const reormattedArray = kvArray.map(({ key, value }) => ({
    [key]: value
}))
console.log(reormattedArray) // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]

// Using parseInt() with map()
// It is common to use the callback with one argument (the element being traversed). Certain functions are also commonly used with one argument, even though they take additional optional arguments. These habits may lead to confusing behaviors. Consider:

// JS
// Copy to Clipboard
// ["1", "2", "3"].map(parseInt);
// While one might expect [1, 2, 3], the actual result is [1, NaN, NaN].

// parseInt is often used with one argument, but takes two. The first is an expression and the second is the radix to the callback function, Array.prototype.map passes 3 arguments: the element, the index, and the array. The third argument is ignored by parseInt — but not the second one! This is the source of possible confusion.

// Here is a concise example of the iteration steps:

/* first iteration  (index is 0): */
parseInt("1", 0); // 1
/* second iteration (index is 1): */
parseInt("2", 1); // NaN
/* third iteration  (index is 2): */
parseInt("3", 2); // NaN


//To solve this, define another function that only takes one argument:

console.log(['1', '2', '3'].map((str) => parseInt(str, 10)))


// You can also use the Number function, which only takes one argument:


console.log(["1", "2", "3"].map(Number)); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
console.log(["1.1", "2.2e2", "3e300"].map(Number)); // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
console.table(["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10))); // [1, 2, 3]


//* Mapped array contains undefined
// When undefined or nothing is returned, the resulting array contains undefined. If you want to delete the element instead, chain a filter() method, or use the flatMap() method and return an empty array to signify deletion.


const numbers11 = [1, 2, 3, 4];
const filteredNumbers = numbers11.map((num, index) => {
    if (index < 3) {
        return num;
    }
});
console.log(filteredNumbers);
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]


//* Side-effectful mapping
// The callback can have side effects.

const cart = [5, 15, 25];
let totale = 0;
const withTax = cart.map((cost) => {
    totale += cost
    return cost * 1.2
})
console.log(withTax)
console.log(totale)

//This is not recommended, because copying methods are best used with pure functions. In this case, we can choose to iterate the array twice.

const total1 = cart.reduce((acc, cost) => acc + cost, 0)
const withTax1 = cart.map((cost) => cost * 1.2)
console.log(withTax1)
console.log(total1);

// Sometimes this pattern goes to its extreme and the only useful thing that map() does is causing side effects.

const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
];

products.map((product) => {
    product.price = 100;
});
// console.table(products)


// As mentioned previously, this is an anti-pattern. If you don't use the return value of map(), use forEach() or a for...of loop instead.

products.forEach((product) => {
    product.price = 100;
});
console.log(products)

// Or, if you want to create a new array instead:

const productsWithPrice = products.map((product) => {
    return {...product, price: 100 }
})
console.log(productsWithPrice)

//* Using the third argument of callbackFn
// The array argument is useful
// if you want to access another element in the array, especially when you don 't have an existing variable that refers to the array. The following example first uses filter() to extract the positive values and then uses map() to create a new array where each element is the average of its neighbors and itself.

const number41 = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = number41
    .filter((num) => num > 0)
    .map((num, inx, arr) => {
        // Without the arr argument, there's no way to easily access the
        // intermediate array without saving it to a variable.
        const prev = arr[inx - 1];
        const next = arr[inx + 1];
        let count = 1;
        let total = num;
        if (prev !== undefined) {
            count++;
            total += prev;
        }
        if (next !== undefined) {
            count++;
            total += next;
        }
        const average = total / count;
        // Keep two decimal places
        return Math.round(average * 100) / 100
    });
console.log(averaged)


//* JavaScript Array flatMap()
// ES2019 added the Array flatMap() method to JavaScript.

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const myarr = [1, 2, 3, 4, 5, 6];
const newarr = myarr.flatMap((x) => x * 2);
console.log(newarr)

const arr1 = [1, 2, 1];
const result = arr1.flatMap((num) => (num === 2) ? [2, 2] : 1);
console.log(result) // [1, 2, 2, 1]


//* JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.

// This example creates a new array from elements with a value larger than 18:

// const numbers = [45, 4, 9, 16, 25]
const over18 = numbers.filter((value, index, array) => {
    return value > 18
})
console.log(over18)

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

// In the example above, the callback function does not use the index and array parameters, so they can be omitted:


//* JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

// const numbers = [45, 4, 9, 16, 25]
let sum2 = numbers.reduce((total, value, index, array) => {
    return total + value;
})
console.log(sum2)


//Note that the function takes 4 arguments:

// The total(the initial value / previously returned value)
// The item value
// The item index
// The array itself

// The example above does not use the index and array parameters.It can be rewritten to:

sum2 = numbers.reduce(function(acc, num) {
    return acc + num
})

console.log(sum2)

//& The reduce() method can accept an initial value:
sum2 = numbers.reduce((acc, curvalu) => {
    return acc + curvalu
}, 100);
console.log(sum2);

//****************************** */

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


//Syntax
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50)); // 100
// console.log([50].reduce(getMax, 10)); // 50

// callback is invoked once for element at index 1
// console.log([1, 100].reduce(getMax)); // 100

// callback is not invoked
// console.log([50].reduce(getMax)); // 50
// console.log([].reduce(getMax, 1)); // 1

// console.log([].reduce(getMax)); // TypeError

//Examples
// How reduce() works without an initial value
// The code below shows what happens if we call reduce() with an array and no initial value.

const array32 = [15, 16, 17, 18, 19];


function reducerfunc(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
};
array32.reduce(reducerfunc, 0)


//* How reduce() works with an initial value
// Here we reduce the same array using the same algorithm, but with an initialValue of 10 passed as the second argument to reduce():

const nerecu = array32.reduce((accumulator, currentValue) => accumulator + currentValue, 10)

console.log(nerecu)

//* JavaScript Array reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

// The reduceRight() works from right-to-left in the array. See also reduce().

// The reduceRight() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

sum2 = numbers.reduceRight((acc, curValue) => {
    return acc + curValue;
}, 200)

console.log(sum2);

//* JavaScript Array every()
// The every() method checks if all array values pass a test.

// This example checks if all array values are larger than 18:

let mynum = [24, 25, 26, 78, ]
let allOver18 = mynum.every((value, index, array) => {
    return value > 18
})
console.log('All over 18 is', allOver18) // All over 18 is true

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

// When a callback function uses the first parameter only (value), the other parameters can be omitted:


//* JavaScript Array some()
// The some() method checks if some array values pass a test.

// This example checks if some array values are larger than 18:

let mynum1 = [2, 5, 6, 8, ]
const someover18 = mynum1.some((num, index, arr) => {
    return num > 18
})
console.log('Some over 18 is', someover18) // Some over 18 is false

//Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

//* JavaScript Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.

// Example
// Create an Array from a String:
console.log(Array.from("ABCDEFG")) //  ['A', 'B', 'C', 'D', 'E', 'F', 'G']

//* JavaScript Array keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.

// Example
// Create an Array Iterator object, containing the keys of the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
for (const x of keys) {
    console.log(x)
}

// Examples
//~ Using keys() on sparse arrays
// Unlike Object.keys(), which only includes keys that actually exist in the array, the keys() iterator doesn 't ignore holes representing missing properties.

const arr = ["a", , "c", , "e"];
const sparseKeys = Object.keys(arr)
const denseKeys = [...arr.keys()];
console.log(sparseKeys) //  ['0', '2', '4']
console.log(denseKeys) // [0, 1, 2 , 3, 4]


//~ Calling keys() on non-array objects
// The keys() method reads the length property of this and then yields all integer indices between 0 and length - 1. No index access actually happens.

const arrlike = {
    length: 3,
}
for (const entry of Array.prototype.keys.call(arrlike)) {
    console.log(entry)
}
// 0
// 1
// 2


//*  JavaScript Array entries()
// Example
// Create an Array Iterator, and then iterate over the key/value pairs:

const f = fruits.entries();
for (const x of f) {
    console.log(x)
}
// console.log(f.next().value)
// console.log(f.next().value)
// console.log(f.next().value)
// console.log(f.next().value)

//The entries() method returns an Array Iterator object with key/value pairs:

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// The entries() method does not change the original array.


//* Calling entries() on non-array objects
// The entries() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.


const arrayLike1 = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: "d", // ignored by entries() since length is 3
};
for (const entry of Array.prototype.entries.call(arrayLike1)) {
    console.log(entry)
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]



//* JavaScript Array with() Method
// ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths)
console.log(months)
console.log(Array.prototype.at.call(months, 2))

//* Syntax
// arrayInstance.with(index, value)

//* Examples
// Creating a new array with a single element changed

const arr23 = [1, 2, 3, 4, 5];
console.log(arr23); // [1, 2, 3, 4, 5]
console.log(arr23.with(2, 6)); // [1, 2, 6, 4, 5]

//* Chaining array methods
// With the with() method, you can update a single element in an array and then apply other array methods.

console.log(arr23.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]

//* Using with() on sparse arrays
// The with() method always creates a dense array.

console.log([1, , 3, 4, , 6].with(0, 2)); // [2, undefined, 3, 4, undefined, 6]


//* Calling with() on non-array objects
// The with() method creates and returns a new array. It reads the length property of this and then accesses each property whose key is a nonnegative integer less than length. As each property of this is accessed, the array element having an index equal to the key of the property is set to the value of the property. Finally, the array value at index is set to value.


const arrayLike54 = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
    3: 3, // ignored by with() since length is 3
};
console.log(Array.prototype.with.call(arrayLike54, 0, 1));
// [ 1, undefined, 4 ]


//* JavaScript Array Spread (...)
// The ... operator expands an iterable (like an array) into more elements:

// Example

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4]
console.table(year)
console.log(year.valueOf())


//* JavaScript Array.of()
// Examples
// Create a new array from a number of arguments:

// Description
// The Array.of() method creates a new array from any number of arguments.

// The Array.of() method can take any type of arguments.


// Syntax
// Array.of(element1, element2, ... , elementN)

const sohan = "sohan Singh"
const fName = Array.of("Banana", "Orange", "Apple", "Mango")
console.log(fName)
console.log(Array.of(sohan))
console.log(Array.from(sohan))
console.log(Array.isArray(sohan.split(" ")))



//* Difference Between JavaScript Arrays and Objects

//& JavaScript arrays use indexes as numbers.
//& objects use indexes as names..

//* When to use JavaScript Arrays and Objects?
// &Arrays are used when we want element names to be numeric.
//& Objects are used when we want element names to be strings.

//* Recognizing a JavaScript Array
//& There are two methods by which we can recognize a JavaScript array:
//& By using Array.isArray() method
//& By using instanceof method
// Below is an example showing both approaches:

const courses = ["HTML", "CSS", "Javascript"];
// console.log("Using Array.isArray() method: ", Array.isArray(courses))
// console.log("Using instanceof method: ", courses instanceof Array)