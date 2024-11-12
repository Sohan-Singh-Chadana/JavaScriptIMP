// let score = "33agb";
// let score = null; // 0
// let score = undefined; // NaN
// let score = true; // 1


// console.log(typeof score) // string
// console.log(typeof(score)) // string

// let valueInNumber = Number(score) // conversion string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN
// console.log(isNaN(valueInNumber)) // true


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// let isLoggedIn = 1; //true
// let isLoggedIn = ''; // false
// let isLoggedIn = "sohan" // true

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false;
// '' =>    false;
// "sohan" => true


// let someNumber = 33;

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




// ********************************* Operations *************************

let value = 3
let negValue = -value;
// console.log(negValue)

// console.log(2 + 2); // 4
// console.log(2 - 2); // 0
// console.log(2 * 2); // 4
// console.log(2 ** 3); // 8
// console.log(2 / 3); // 0.66666666
// console.log(2 % 3); // 2

let str1 = "Hello";
let str2 = " Sohan";

let str3 = str1 + str2;
// console.log(str3) // Hello Sohan

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2") // 32
// console.log((3 + 4) * 5 % 3); // 35 % 3 = 2

// console.log(+true);
// console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;

// let gameCounter = 100;
// gameCounter++;
// ++gameCounter;
// console.log(gameCounter);

//********************************** Comparison *************************/

// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log("2" > 1); // true
// console.log("02" > 1); // true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true


/*
The reason is that an equality check == and comparisons > < >= <=  work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

// console.log('2' === 2); // false