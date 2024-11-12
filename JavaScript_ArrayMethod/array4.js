// * Arrays  - Decalaration

let person = {
    name: "Sohan",
    age: 23,
}
let arr = ['apple', 'banana', 'cherry', person];

// console.log(arr[3].name);
// console.log(arr.length)

//* Arrays - Add and Remove Elements

//& Add to End of the Array
arr.push("orange");
// console.log(arr)

//& Remove from end of the Array
arr.pop();
arr.pop();
// console.log(arr)

// & Add to Top of the Array
arr.unshift("orange");
// console.log(arr)

//& Remove From Top of the Array
arr.shift();
// console.log(arr)

//* Looping an Arrayfor
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
}

let i = 0;
while (i < arr.length) {
    // console.log(arr[i])
    i++
}

// Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5]

//* Map in javascript
// const newNums = numbers.map((item, index, array) => {
//     // console.log(item, index, array);
//     return item + 5
// });
// console.log(newNums)


// * filter in javascript
// const newNums = numbers.filter((item, index, array) => {
//     return item > 3
// })
// console.log(newNums)

//* reduce in javascript
// const newNums = numbers.reduce((prev, item) => {
//     return prev + item
// }, 10)
// console.log(newNums)

//* Some in javascript
// const res = numbers.some((item, index, array) => {
//     return item > 3;
// })
// console.log(res)

//* every in javascript
// const res = numbers.every((item, index, array) => {
//     return item < 10;
// })
// console.log(res);


//* find in javascript
// const res = numbers.find((item, index, array) => {
//     return item > 3;
// })
// console.log(res);

// * Sprea and Rest Operators
const nums = [1, 2, 3]
const nums2 = [4, 5, 6, 7]

const finalNums = [...nums, ...nums2]; // spread Operator
// console.log(finalNums)

function sum(...numbers) { // Rest parameter
    return numbers;
}
// console.log(sum(nums, nums2, 5, "hello"))

// * More Array Methods

//* concat
// const newArr = nums.concat(nums2, arr)
// console.log(newArr)

//* slice
// const newArr = arr.slice(1, 2)
// console.log(newArr)

// * Splice
// console.log(arr)
// arr.splice(1, 2, "orange");
// console.log(arr)

//* fill
// const dummy = [2, 3, 5, 4, ]
// dummy.fill(55, 2);
// console.log(dummy)

//* findIndex
// const numbersM = [2, 3, 4, 5, 6, 7, 8]
// const indexarr = numbersM.findIndex((item) => {
//     return item === 5
// })
// console.log(indexarr)

// * flat
const flatEx = [1, [2, 3],
    [
        [4, 5], 6
    ]
];
// const flatternedArray = flatEx.flat(Infinity);
// const flatternedArray = flatEx.flat(2)
// console.log(flatternedArray);

// * reverse
// console.log(nums)
// nums.reverse();
// console.log(nums)

//* sort
const unsorted = [5, 2, 4, 3, 4, 6, 8, 7, ];
// unsorted.sort((a, b) => a - b);
// unsorted.sort((a, b) => b - a);
// console.log(Array.from(new Set([...unsorted])))
// console.log(unsorted)