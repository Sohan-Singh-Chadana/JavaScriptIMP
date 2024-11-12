// 1. What is the result?

//* Now, following the rules of JavaScript's operator precedence:

// console.log(1 + 2 * 3) //  1 + 6 = 7
// console.log(1 + '2' * 3) //  1 + 6 = 7
// console.log("1" + "2" * 3) //  '1' + 6 = 16

// console.log(2 ** 3); // 8
// console.log(8 / 2); // 4
// console.log(4 + 1 - 1); // 4
// console.log(1 + 2 ** 3 / 2 - 1) // 4


// console.log(9 / 6) // 1.5
// console.log(9 / 2) // 4.5
// console.log(4.5 * 3) // 13.5
// console.log(9 / 2 * 3) // 13.5

// console.log(9 / (2 * 3)) // 9 / 6 = 1.5

// x = 1;
// x++;
// console.log(x) // 2
// console.log(++x) //  x = x + x = 2
// console.log(x++) // 1

// console.log(1 == 01) // true
// console.log(1 === 01) // true
// console.log('1' == 01) // true
// console.log('1' == '01') // false
// console.log('1' == 0 + 1) // true
// console.log('1' == 0 + "1") // false
// console.log('1' == 0 * 1) // false
// console.log('1' == 0 * "1") // false


// console.log(true && false || !true) // false || false = false
// console.log(!(true && false)) // !(false)  = true;

// let x = 1;
// console.log(x++) // 2
// console.log(++x) // 2

// x = 1;
// if (x < 0) {
//     x++;
// } else {
//     x--;
// }
// console.log(x); // 0

// x = 1;
// switch (x) {
//     case 1:
//         x++;
//         break;
//     case 2:
//         x--;
//         break;
//     default:
//         x = 0;
// }
// console.log(x); // 2