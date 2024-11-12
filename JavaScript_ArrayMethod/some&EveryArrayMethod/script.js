const everNumbers = [0, 2, 4, 6, 8, ];

//* Checks if at least one element in an array satisfies a condition

const result = everNumbers.some((num, i) => {
    // return num > 4
    if (num % 2 === 1) {
        console.log(i)
    }
    return num % 2 === 1
})

console.log(result)


//*  Checks if all elements in an array a condition

const result1 = everNumbers.every((num) => {
    return num % 2 === 0
})

console.log(result1)