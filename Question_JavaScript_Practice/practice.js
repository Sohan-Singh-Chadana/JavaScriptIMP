//? Factorial: Write a function that calculates the factorial of a given number. (Factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120)

function Factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * Factorial(n - 1);
    }
}
console.log(Factorial(5))

//? Reverse an integer

// ~ To reverse an integer in JavaScript, you can convert the integer to a string, reverse the string, and then convert it back to an integer.Here 's how you can do it:

function reverseInteger(num) {
    // let mynumb = "786";
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    console.log(reversed * Math.sign(num));
    return reversed * Math.sign(num);
}

let mynumb = "786";
// console.log(mynumb)
// console.log(Number.parseInt(mynumb))

const reversedNumber = reverseInteger(mynumb);
console.log(reversedNumber);

//* in this function

//!  num.toString() converts the integer to a string.
//! .split('') splits the string into an array of characters.
//! .reverse() reverses the array.
//! .join('') joins the reversed array back into a string.
//! parseInt() converts the reversed string back to an integer.
//! Math.sign(num) returns the sign of the original number (+1, -1, or 0), which is then used to preserve the sign of the reversed number.