// 1. Write a program that takes two numbers as input and prints their sum.

function sum(a, b) {
    return a + b;
}
// console.log(sum(3, 2)) // 5


// 2. Write a program that takes a number as input and prints whether it is even or odd.

function isEven(n) {
    return n % 2 === 0
}

// console.log(isEven(10)); // true;
// console.log(isEven(11)); // false

// 3. Write a program that takes a number as input and prints its factorial.

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

// console.log(factorial(5)) // 120

// 4. Write a program that takes a number as input and prints its prime factorization.

function primeFactorization(n) {
    const factors = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    return factors;
}

// console.log(primeFactorization(12)); // [2, 2, 3]

// 5. Write a program that takes a number as input and prints its square root.

function squareRoot(n) {
    return Math.sqrt(n);
}

// console.log(squareRoot(9)); // 3

// 6. Write a program that takes a number as input and prints its cube.

function cube(n) {
    return n * n * n;
}

// console.log(cube(3)); // 27

// 7. Write a program that takes a number as input and prints its absolute value.

function abs(n) {
    return Math.abs(n);
}

// console.log(abs(-5)); // 5

// 8. Write a program that takes two numbers as input and prints the larger of the two.

function max(a, b) {
    return a > b ? a : b;
}

// console.log(max(10, 20)); // 20

// 9. Write a program that takes two numbers as input and prints the smaller of the two.

function min(a, b) {
    return a < b ? a : b;
}

// console.log(min(10, 20)); // 10

// 10. Write a program that takes a number as input and prints whether it is positive, negative, or zero.

function sign(n) {
    if (n > 0) {
        return "positive";
    } else if (n < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

// console.log(sign(10)); // positive
// console.log(sign(-10)); // negative
// console.log(sign(0)); // zero

//1 What is the difference between a number and a string?
//* A number is a numeric value, while a string is a sequence of characters. Numbers can be used for mathematical operations, while strings can be used for text operations.

//2 How can you convert a string to a number?
// * You can convert a string to a number using the parseInt() or parseFloat() function.


//1 Convert a String to a Number:
// Write a function that takes a string representing a number and converts it into a numeric value.

function convertToNumber(str) {
    return parseFloat(str);
}
console.log(convertToNumber("42")) // 42
console.log(convertToNumber("3.14")) // 3.14
console.log(convertToNumber("Hello")) // NaN


// 2 Check if a Number is Even:
// Write a function that takes a number and returns true if it's even, false otherwise.

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(42)) // true
console.log(isEven(43)) // false

// 3 Find the Maximum Number:
// Write a function that takes an array of numbers and returns the maximum number.

function findMax(numbers) {
    return Math.max(...numbers)
}
console.log(findMax([42, 23, 21, 43, 98])) // 98


// 4 Generate Random Number within a Range:
// Write a function that generates a random number within a specified range.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomNumber(10, 20))

// 5 Check for Prime Numbers:
// Write a function that checks if a given number is prime.

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
console.log(isPrime(13)) // true
console.log(isPrime(42)) // false

/*
This code defines a function `isPrime(num)` that checks whether a given number `num` is a prime number. Let's break down the code and explain how it works:

1. **Check for Base Cases**:
   - The first two `if` statements check for base cases. If `num` is less than or equal to 1, it returns `false` because prime numbers must be greater than 1. If `num` is less than or equal to 3, it returns `true` because 2 and 3 are prime numbers.

   ```javascript
   if (num <= 1) return false;
   if (num <= 3) return true;
   ```

2. **Check for Divisibility by 2 and 3**:
   - The next `if` statement checks if `num` is divisible by 2 or 3. If it is, then `num` is not a prime number, and the function returns `false`.

   ```javascript
   if (num % 2 === 0 || num % 3 === 0) return false;
   ```

3. **Check for Divisibility by Numbers Greater than 3**:
   - The variable `i` is initialized to 5 because we've already checked divisibility by 2 and 3. Then, in the `while` loop, it iterates through odd numbers (skipping even numbers since they are not prime). The loop continues until `i * i` is greater than `num`.
   - Within the loop, it checks if `num` is divisible by `i` or `i + 2`. If it is, then `num` is not a prime number, and the function returns `false`.
   - The value of `i` is incremented by 6 in each iteration because all primes greater than 3 can be expressed in the form `6k ± 1` for some integer `k`.

   ```javascript
   let i = 5;
   while (i * i <= num) {
       if (num % i === 0 || num % (i + 2) === 0) return false;
       i += 6;
   }
   ```

4. **Return `true` if Prime**:
   - If none of the conditions above return `false`, then `num` must be a prime number, and the function returns `true`.

   ```javascript
   return true;
   ```

So, in summary, this function efficiently checks whether a given number is a prime number by applying some basic rules of divisibility and leveraging the fact that all primes greater than 3 can be expressed in the form `6k ± 1`. It returns `true` if the number is prime and `false` otherwise.

The `console.log` statements at the end demonstrate the usage of the `isPrime` function by passing different numbers and checking the output.
*/