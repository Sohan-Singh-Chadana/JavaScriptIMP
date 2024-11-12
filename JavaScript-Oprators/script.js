/*
1. Assingment Operators

2. Comparison Operators

3. Arithmetic Operators

6. String Operators

7. Conditional (ternary) Operators

8. Comma Operators

9. Unary Operators

10. Relational Operators

*/



//* Arithmetic operators
//~ We use arithmetic operators to perform arithmetic calculations like addition, subtraction, etc. For example,


// +	Addition	    3 + 4  // 7
// -	Subtraction 	5 -  3  // 2
// *	Multiplication	2 * 3  // 6
// /	Division	    4 / 2  // 2
// %	Remainder	    5 % 2  // 1
// ++	Increment (increments by 1)	++5 or 5++  // 6
// --	Decrement (decrements by 1)	--4 or 4--  // 3
// **	Exponentiation (Power)	4 ** 2  // 16

//~ Example 1: Arthmetic Operators in Javascript
// let x = 5;

// console.log("x + 3 = ", x + 3); //  8
// console.log("x - 3 =", x - 3); // 2
// console.log("x * 3 =", x * 3); // 15
// console.log("x / 3 =", x / 3); // 1.6666666666666667
// console.log("x % 3 =", x % 3); // 2
// console.log("x ** 3 =", x ** 2); // 25
// console.log("34" + 32 + "32") // 343232




//~Example 2: JavaScript Increment and Decrement Operators

// let x = 5;

// console.log("Prefix Increment: ++x =", ++x); // 6
// console.log("Postfix Increment: x++ =", x++); // 6  // x++;     //x += 1        //x = x + 1;
// console.log("After Postfix Increment: x =", x); // 7

// console.log("\nPrefix Decrement: --x =", --x); // 6
// console.log("Postfix Decrement: x-- =", x--); // 6 // x--;     //x -= 1        //x = x - 1;
// console.log("After Prefix Decrement: x =", x); // 5




//* Assignment Operators
//* JavaScript Assignment Operators
//~ We use assignment operators to assign values to variables. For example,

// =	Assignment Operator	    a = 7;
// +=	Addition Assignment	    a += 5;  // a = a + 5
// -=	Subtraction Assignment	a -= 2;  // a = a - 2
// *=	Multiplication Assignment	a *= 3;  // a = a * 3
// /=	Division Assignment	    a /= 2;  // a = a / 2
// %=	Remainder Assignment	a %= 2;  // a = a % 2
// **=	Exponentiation Assignment	a **= 2;  // a = a**2


//~ Example 3: Assignment Operators in JavaScript

// let x = 10;
// let y;
// y = x;
// console.log(y);


// assignment operator
// let a = 7;
// console.log(a);  // 7


// addition assignment operator
// a += 5;  // a = a + 5
// console.log(a);  // 12

// subtraction assignment operator
// a -= 5;  // a = a - 5
// console.log(a);  // 7

// multiplication assignment operator
// a *= 2;  // a = a * 2
// console.log(a);  // 14

// division assignment operator
// a /= 2;  // a = a / 2
// console.log(a);  // 7

// remainder assignment operator
// a %= 2;  // a = a % 2
// console.log(a);  // 1

// exponentiation assignment operator
// let x = 7;
// x **= 2;  // x = x**2
// a **= 2;  // a = a**2
// console.log(a);  // 1
// console.log(x);  // 49


//*Compound operators(assignment operator)

// let x = 10;
// let y = 20;

// x = x + y;
// x += y;      // x = x + y;       // 10 + 20 = 30
// console.log(x) // 30

// x -= y;      // x = x - y;       // 30 - 20 = 10
// console.log(x) // 10

// x /= y;      // x = x / y;       // 10 / 20 = 0.5
// console.log(x) // 0.5

// x *= y;     //x = x * y;      // 0.5 * 20 = 10
// console.log(x) // 10


// x **= 5     // 10 ** 5 = 100000   // 10 * 10 * 10 *10 *10 = 100000
// x **= 2     // 10 ** 2 = 100        //x = 10 ** 2;
// console.log(x); // 100


// x %= 5 ;        // x = 100 % 5 = 0
// console.log(x); //  0

// let x = 10;




//* Logical Operators
//* JavaScript Logical Operators
// ~ We use logical operators to perform logical operations on boolean values. For example,

// && (Logical AND)	    expression1 && expression2	    true only if both expression1
// &&                                                       and expression2 are true

//* || (Logical OR)	    expression1 || expression2	    true if either expression1 or
//*                                                         expression2 is true

// ! (Logical NOT)	    !expression	        false if expression is true and vice versa

let x = 3;

// logical AND
// console.log((x < 5) && (x > 0));  // true
// console.log((x < 5) && (x > 6));  // false

// logical OR
// console.log((x > 2) || (x > 5));  // true
// console.log((x > 3) || (x < 0));  // false

// logical NOT
// console.log(!(x == 3));  // false
// console.log(!(x < 2));  // true


//^ 1. Logical AND &&
// let happy = true && true;
// let happy = true && false
// console.log(happy)

// const isLoggedIn = true;
// const haspermissions = true;

// if(isLoggedIn && haspermissions)
// {   // Delete an  item
//     console.log("Item deleted Successfully")
// }else{
//     console.log("Item Not Deleted")
// }



//^ Logical OR  ||

// const happy  = true || fasle; // true
// const happy  = false || true; // true

// console.log(happy)

// const isLoggedIn = true;
// const haspermissions = false;

// if(isLoggedIn || haspermissions)
// {   // Delete an  item
//     console.log("Item deleted Successfully")
// }else{
//     console.log("Item Not Deleted")
// }

//^ 3. Logical NOt !

// const happy = false;
// const animal = "Cat";

// console.log(!animal)

// happy  = true || fasle; // true
// const happy  = false || true; // true

// console.log(happy)

// const isLoggedIn = false;
//  const haspermissions = false;

// if(!isLoggedIn)
// {   // Delete an  item
//     console.log("Redirect to login page")
// }


//* Conditional Operators (Ternary Oprators)

// const userRole = "admin";

// if (userRole === "admin")
// {
//     console.log("You are an admin")
// }
// else
// {
//     console.log("You are not an admin")
// }

//Sytax
// condition ? "" : "";
// userRole === "admin" ? console.log("You are an admin") : console.log("You are not an admin")

//* JavaScript String Operators
//~ In JavaScript, you can use the + operator to concatenate (join) two or more strings. For example,

//*concatenation operator
// let str = "Hel" + "lo";
// console.log(str); // Hello

// str += " World";  // str = str + " World"
// console.log(str); // Hello World;




//* Comparison Operators
//* JavaScript Comparison Operators
//~ We use comparison operators to compare two values and return a boolean value (true or false). For example,

// x = 5;

// Equal (==)           equal to            x == 8	  false
// Strict Equal(===)  	equal value         x === 5   true
//                      and equal type

// Not Equal (!=)	    not equal	        x != 8	  true
// Strct Not Equal(!==) not equal value 	x !== 5	  false
//                      or not equal type   x !== "5" true

// Greater than (>)	    greater than	    x > 8	  false
// Less than(<)         less than	        x < 8	  true

// Greater than or equal (>=)	than or equal to  x >= 8  false
// less than or equal (<=)	than or equal to	  x <= 8	   true

// ==	    Equal to	                    3 == 5 gives us false
// !=	    Not equal to	                3 != 4 gives us true
// >	    Greater than	                4 > 4 gives us false
// <	    Less than	                    3 < 3 gives us false
// >=	    Greater than or equal to	    4 >= 4 gives us true
// <=	    Less than or equal to	        3 <= 3 gives us true
// ===	    Strictly equal to	            3 === "3" gives us false
// !==	    Strictly not equal to	        3 !== "3" gives us true

// console.log("2 == 2 is", 2 == 2);  // true
// console.log("3 != 3 is", 3 != 3);  // false
// console.log("2 === '2' is", 2 === "2");  // false
// console.log("2 !== '2' is", 2 !== "2");  // true
// console.log("3 > 3 is", 3 > 3);  // false
// console.log("2 > 2 is", 2 > 2);  // false
// console.log("3 >= 3 is", 3 >= 3);  // true
// console.log("2 <= 2 is", 2 <= 2);  // true


// console.log(4 == 4); // true
// console.log(4 == '4'); // true
// console.log(4 == 5);  // false
// console.log(4 != 4); // false
// console.log(4 != 5); // true
// console.log(4 === '4')  // false
// coercion
// console.log(6 > 5) // true
// console.log(4 < 5) // true
// console.log(5 >= 5) // true
// console.log(5 <= 7) // true

// console.log(3 + 10 * 2); // 23
// console.log((3 + 10) * 2); // 26

// console.log(3 > 2 && 2 > 1) // true
// 3 > 1 = true , 2 > 1 = true , true && true = true

// console.log(10 + 20 * 30) // 10 + 600 = 610
// console.log((10 + 20) * 30) // 30 * 30 = 900
// console.log(10 / 20 * 30) // 0.5 * 30 = 15
// console.log(10 % 20 * 30) // 10 * 30 = 300
// console.log(10 + 20 - 30) // 30 - 30 = 0
// console.log(10 < 20 && 30 > 40) // true && false = false
// console.log(10 < 20 || 30 > 40) // true || false = true


//*The answer is false. The ! operator has the highest precedence of all operators, so it is performed first. !10 is equal to false.
// console.log(!10) // false
// console.log(!false) //true
// console.log(!"sohan") //false
// console.log(!12) //false
// console.log(!false == 1) // true

// console.log(10 + 20 !== 30) // 30 !== 30 = false
// console.log(10 + 20 === 30) // 30 === 30 = true
// console.log(3> 2 > 1) // true > 1 = false




//* Remainder with positive dividend
// 13 % 5; // 3
// 1 % -2; // 1
// 1 % 2; // 1
// 2 % 3; // 2
// 5.5 % 2; // 1.5
// 3 n % 2 n; // 1n

//*Remainder with positive dividend
// console.log(-13 % 5); // -3
// -1 % 2; // -1
// -4 % 2; // -0
// -3 n % 2 n; // -1n
// console.log(-5 % 7); // -5

//* Remainder with NaN
NaN % 2; // NaN

//* Remainder with Infinity
Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
2 % Infinity; // 2
0 % Infinity; // 0

//* Spread Operatore in Javascript
// const num1 = [1,2,3,4,5]
// const num2 = [6,7,8,9];

// const myName = "Sohan";

//const joinedArray = num1.concat(num2)
// const joinedArray = [...num1, ...num2, ...myName];
// const joinedArray = [...num1, ...num2, 10];
// console.log(joinedArray)

// const user = {
//     name: "Sohan",
//     age: 24,
// }

// const updatedUser = {...user, city: "Ahmedabad"}

// function add(){
//     console.log(arguments);
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//        sum = sum + arguments[i]
//     }
//     return sum
// }
// console.log(add(...joinedArray));

//* Rest Parameters in JavaScript

const num1 = [1, 2, 3, 4, 5];
// console.log(num1.length-1)


// function add(a,b,c,...nums){console.log(a,b,c)
//     console.log("nums:",nums)
//     let sum = 0;
//     for(let i = 0 ; i < nums.length; i++){
//         console.log(i)
//         sum = sum + nums[i]
//     }
//     return sum;

// }

// const result = add(8,6,7,77,...num1,12)
// const result = add(...num1 ,8,6,7,77)
// const result = add(8,6,7,77)

// function add(){
//     return [...arguments].reduce((acc,curr)=> acc + curr,0)
// }

// function add(){
//     return Array.from(arguments).reduce((acc,curr)=> acc+ curr,0)
// }

// function add(...nums) {
//   return nums.reduce((acc, curval) => {
//     console.log(curval);
//     return acc + curval;
//   }, 0);
// }

// const result = add(...num1);
// console.log(result);