//* JavaScript Sorting Arrays


/*
!Alpabetic Sort
Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects
Numeric Sort
Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()

! See Also:
Basic Methods
Search Methods
Iteration Methods
*/

//* Sorting an Array
//& The sort() method sorts an array alphabetically

//^ Example

const Fruits = ["Banana", "Orange", 'Apple', "Mango"];
// console.log(Fruits)
Fruits.sort();
// console.log(Fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

//*  Reversing an Array
// The reverse() method reverses the elements in an array:

const reveseArr = Fruits.reverse();
// console.log(reveseArr) // [ 'Orange', 'Mango', 'Banana', 'Apple' ]

// By combining sort() and reverse(), you can sort an array in descending order:

let sortingrevers = Fruits.sort().reverse();
// console.log(sortingrevers) // [ 'Orange', 'Mango', 'Banana', 'Apple' ]
// console.log(Fruits)

//* JavaScript Array toSorted() Method
//& ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

//& The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

const month_s = ["Jan", "Feb", "Mar", "Apr"];
const sorted = month_s.toSorted();
// console.log(month_s);
// console.log(sorted); // 'Apr', 'Feb', 'Jan', 'Mar' ]
// console.log(month_s);

//* JavaScript Array toReversed() Method
// & ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

//&  The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

const reversed = month_s.toReversed();
// console.log(month_s) // [ 'Jan', 'Feb', 'Mar', 'Apr' ]
// console.log(reversed); // [ 'Apr', 'Mar', 'Feb', 'Jan' ]
// console.log(month_s) // [ 'Jan', 'Feb', 'Mar', 'Apr' ]

const sortedreverse = sorted.toReversed();
// console.log(sortedreverse) // [ 'Mar', 'Jan', 'Feb', 'Apr' ];


//* Numeric Sort
/*
& By default, the sort() function sorts values as strings.

& This works well for strings ("Apple" comes before "Banana").

& If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

& Because of this, the sort() method will produce incorrect result when sorting numbers.

& You can fix this by providing a compare function:
*/

const points = [40, 100, 1, 5, 25, 10];

console.log(points) // [ 40, 100, 1, 5, 25, 10 ]
points.sort()
console.log(points); // [ 1, 10, 100, 25, 40, 5 ]

points.sort((a, b) => a - b); // Sort the array in ascending order:
console.log(points) // [ 1, 5, 10, 25, 40, 100 ]

//& Use the same trick to sort an array descending:

points.sort((a, b) => b - a);
console.log(points) //Sort the array in descending order:  // [ 100, 40, 25, 10, 5, 1 ]

/*
* The Compare Function
& The purpose of the compare function is to define an alternative sort order.

& The compare function should return a negative, zero, or positive value, depending on the arguments:

& function(a, b){return a - b}
& When the sort() function compares two values, it sends the values to the compare function, and & sorts the values according to the returned (negative, zero, positive) value.

& If the result is negative, a is sorted before b.

& If the result is positive, b is sorted before a.

& If the result is 0, no changes are done with the sort order of the two values.

& Example:

& The compare function compares all the values in the array, two values at a time (a, b).

& When comparing 40 and 100, the sort() method calls the compare function(40, 100).

& The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

& You can use this code snippet to experiment with numerically and alphabetically sorting:

<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>
*/

//*Sorting an Array in Random Order
// Using a sort function, like explained above, you can sort an numeric array in random order

// points.sort(() => 0.5 - Math.random());
// console.log(points)

//* The Fisher Yates Method
//~ The points.sort() method in the example above is not accurate. It will favor some numbers over others.
//~ The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!
//~ In JavaScript the method can be translated to this:

for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[j]
    points[j] = k;
}
console.log(points)

function fisherFunction(point) {
    // console.log(point.length - 1)
    for (let i = point.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let k = point[i]
        point[i] = point[j]
        point[j] = k
    }
    return point;

}

const point1 = [1, 2, 45, 64, 89, 67, 789, -5]
console.log(fisherFunction(point1))

//* Find the Lowest (or Highest) Array Value
//& There are no built-in functions for finding the max or min value in an array.

//& To find the lowest or highest value you have 3 options:

//&  Sort the array and read the first or last element
//&  Use Math.min() or Math.max()
//&  Write a home made function


//* Find Min or Max with sort()
//&  After you have sorted an array, you can use the index to obtain the highest and lowest values.

//&  Sort Ascending:
point1.sort((a, b) => a - b);
// now points[0] contains the lowest value
// console.log(point1[0]); // -5
// and points[points.length-1] contains the highest value
// console.log(point1[point1.length - 1]); // 789

//& Sort Descending:
point1.sort((a, b) => b - a)

// and points[points.length-1] contains the lowest value
// console.log(point1[point1.length - 1]); // -5
// now points[0] contains the highest value
// console.log(point1[0]); // 789

//! Note
//&  Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

//* Using Math.min() on an Array
//& You can use Math.min.apply to find the lowest number in an array:

function lowestnumber(arr) {
    return Math.min.apply(null, arr)
};
console.log('lowest number in this array', lowestnumber(point1));

//? Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

//* Using Math.max() on an Array
//& You can use Math.max.apply to find the highest number in an array:

function highestnumber(arr) {
    return Math.max.apply(null, arr)
}
console.log("Highest number in this array", highestnumber(point1))

//? Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

//* JavaScript Array Minimum Method
//& There is no built-in function for finding the lowest value in a JavaScript array.

//& The fastest code to find the lowest number is to use a home made method.

//& This function loops through an array comparing each value with the lowest value found
// [10, 40, 100, 25, 1, 5]

function minNumber(arr) {
    let len = arr.length
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len]
        }
    }
    return min
}
console.log(minNumber(points))


//* JavaScript Array Maximum Method
// & There is no built-in function for finding the highest value in a JavaScript array.

//&  The fastest code to find the highest number is to use a home made method.

//&  This function loops through an array comparing each value with the highest value found:
//[10, 40, 100, 25, 1, 5]

function maxNumber(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len]
        }
    }
    return max;
}
console.log(maxNumber(points)) // 100


//* Sorting Object Arrays
//& JavaScript arrays often contain objects:

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
]

cars.sort((a, b) => a.year - b.year);
console.table(cars);

/*
(index) type year
0	 'Saab'	 2001
1	 'BMW'	 2010
2	 'Volvo'	2016
*/

//& Even if objects have properties of different data types, the sort() method can be used to sort the array.

//& The solution is to write a compare function to compare the property values:

// & Comparing string properties is a little more complex:

cars.sort((a, b) => {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
        return -1
    }
    if (x > y) {
        return 1
    }
})
console.table(cars)

/*
0	'BMW'	2010
1	'Saab'	2001
2	'Volvo'	2016
*/

//* Stable Array sort()
//& ES2019 revised the Array sort() method.

//& Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.

//& After ES2019, browsers must use a stable sorting algorithm:

//& When sorting elements on a value, the elements must keep their relative position to other elements with the same value.

const myArr1 = [
    { name: "X00", price: 100 },
    { name: "X01", price: 100 },
    { name: "X02", price: 100 },
    { name: "X03", price: 100 },
    { name: "X04", price: 110 },
    { name: "X05", price: 110 },
    { name: "X06", price: 110 },
    { name: "X07", price: 110 },
    { name: "X08", price: 120 },
    { name: "X09", price: 120 },
    { name: "X10", price: 120 },
    { name: "X11", price: 120 },
    { name: "X12", price: 130 },
    { name: "X13", price: 130 },
    { name: "X14", price: 130 },
    { name: "X15", price: 130 },
    { name: "X16", price: 140 },
    { name: "X17", price: 140 },
    { name: "X18", price: 140 },
    { name: "X19", price: 140 }
];

const newarr1 = myArr1.sort((p1, p2) => {
    return p1.price - p2.price;
    // return p2.price - p1.price

    // if (p1.price < p2.price) {
    //     return -1
    // }
    // if (p1.price > p2.price) {
    //     return 1
    // }
    // return 0
})

console.table(newarr1);

//? In the example above, when sorting on price, the result is not allowed to come out with the names in an other relative position like this:


//! Practice
//* Sort stability

// For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:

const students = [
    { name: "Alex", grade: 15 },
    { name: "Devlin", grade: 15 },
    { name: "Eagle", grade: 13 },
    { name: "Sam", grade: 14 },
];

// After sorting this array by grade in ascending order:

students.sort((a, b) => a.grade - b.grade);
console.table(students)

/*
The students variable will then have the following value:

JS
Copy to Clipboard
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
*/

//! It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

//? Before version 10 (or ECMAScript 2019), sort stability was not guaranteed, meaning that you could end up with the following:

/*
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];

*/

let nu1 = ['12', '1', '3.14']

const nen1 = nu1.toSorted((a, b) => parseFloat(a) - parseFloat(b))
console.log(nu1)
console.log(nen1)

//* Sorting non-ASCII characters
//& For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use String.prototype.localeCompare(). This function can compare those characters so they appear in the right order.

const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"]
items.sort((a, b) => a.localeCompare(b));
console.log(items);
//  ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']

//* Sorting array of objects
//&  Arrays of objects can be sorted by comparing the value of one of their properties.

const items1 = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

// sort by value
items1.sort((a, b) => a.value - b.value)
console.table(items1)

// sort by name
items1.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1;

    // names must be equal
    return 0;
})
console.table(items1);

//! practic

// Examples

//* Creating, displaying, and sorting an array
// The following example creates four arrays and displays the original array, then the sorted arrays. The numeric arrays are sorted without a compare function, then sorted using one.


//! Practice for Example
const alphabetes = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
// random alphabetes create array
for (let i = alphabetes.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [alphabetes[i], alphabetes[j]] = [alphabetes[j], alphabetes[i]]
}
// console.log(alphabetes)

const nonorderalphabetes = ['Y', 'I', 'N', 'X', 'Z', 'D', 'H', 'E', 'B', 'G', 'C', 'L', 'J', 'A', 'O', 'M', 'R', 'W', 'Q', 'S', 'U', 'F', 'P', 'T', 'V', 'K']

const asceningorder = nonorderalphabetes.toSorted((a, b) => {
    let x = a.toLowerCase();
    let y = b.toLowerCase();

    // ? Ascending order
    if (x < y) return -1
    if (x > y) return 1
    return 0

    //?  Descending order
    // if (x < y) return 1
    // if (x > y) return -1
    // return 0
})
console.log(nonorderalphabetes)
console.log(asceningorder)



// This code creates an array of 26 elements, each of which is the ASCII code for a lowercase letter. The ASCII code for the letter "A" is 97, so the first element in the array is 97. The second element is 98, the third element is 99, and so on.

const alphabet = Array.from(Array(26)).map((e, i) => i + 97);
// console.table(alphabet);


const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 3, 2, 5, 201];
const numbericStringArray = ["80", "78", "1", '100', "200"]
const mixedNumbericArray = [...numbericStringArray, ...numberArray]

const compareNumbers = (a, b) => {
    return a - b
}

console.log(stringArray.join()); // Blue,Humpback,Beluga
console.log(stringArray.sort()); //  ['Beluga', 'Blue', 'Humpback']

console.log(numberArray.join()) // 40,1,3,2,5,201
console.log(numberArray.sort()) //  [1, 2, 201, 3, 40, 5]
console.log(numberArray.sort(compareNumbers)) //   [1, 2, 3, 5, 40, 201]


console.log(numbericStringArray.join()) // 80,78,890
console.log(numbericStringArray.sort()) //  ['1', '100', '200', '78', '80']
console.log(numbericStringArray.sort(compareNumbers)) // ['1', '78', '80', '100', '200']



console.log(mixedNumbericArray.join()) // 80,78,1,100,200,40,1,3,2,5,201
console.log(mixedNumbericArray.sort()) //   ['1', 1, '100', 2, '200', 201, 3, 40, 5, '78', '80']
console.log(mixedNumbericArray.sort(compareNumbers)) // ['1', 1, 2, 3, 5, 40, '78', '80', '100', '200', 201]




//?  Description
//! If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.

//* sort() returns the reference to the same array
// & The sort() method returns a reference to the original array, so mutating the returned array will mutate the original array as well.

// JS

const numbers = [3, 1, 4, 1, 5];
const sorted1 = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
console.log(sorted1)
sorted1[0] = 10;
// sorted1[2] = 30;
console.log(numbers[0]); // 10
console.log(sorted1);
// console.log(numbers[2]); // 30

const mpmy = numbers.map((x, i) => {
    return `${x}0`
})
console.log(mpmy)

const nump = mpmy.map((x) => {
    // console.log(x.toString())
    return Number(x)
})
console.log(nump)



//* In case you want sort() to not mutate the original array, but return a shallow-copied array like other array methods (e.g. map()) do, use the toSorted() method. Alternatively, you can do a shallow copy before calling sort(), using the spread syntax or Array.from().

const numberlist = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted2 = [...numberlist].sort((a, b) => a - b);
console.log(numberlist) //  [3, 1, 4, 1, 5]
sorted2[0] = 10;
console.log(sorted2) //[10, 1, 3, 4, 5]
console.log(numberlist[0]); // 3