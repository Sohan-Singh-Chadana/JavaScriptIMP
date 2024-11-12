const accountId = 1334454;
let accountEmail = "sohanSingh@gmail.com";
var accountPassword = "12332";
accountCity = "Ahmedabad";
let accountState; // undefined


// accountId = 2; // not allowed

accountEmail = "ss@c.com";
accountPassword = '234323';
accountCity = "Bengaluru";

// JavaScript Dollar Sign $
// Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:
let $name = 'sohan';

//JavaScript Underscore (_)
// Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:
let _lname = "singh";
let user_1$ = "hitesh";

//One Statement, Many Variables
// You can declare many variables in one statement.
// Start the statement with let and separate the variables by comma:

let person = "Rohit Sharma",
    carName = "Volvo",
    Price = 200;

// In this first example, x, y, and z are undeclared variables.
// They are automatically declared when first used:
user_Name = "Allu Arjune";

//Variables declared inside a { } block cannot be accessed from outside the block:
{
    let user_Name = "Devendra Singh Rajput";
    const person = "Narendra Singh Rajput";
    console.table([user_Name, person])
}

// let if = "Mivi" // not allowed because Javascript reserved word keword

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.table([$name, _lname, user_1$, person, carName, Price, user_Name]);

person = user_1$;
console.log(person)


// Block Scope
// Declaring a variable with const is similar to let when it comes to Block Scope.
// The x declared in the block, in this example, is not the same as the x declared outside the block:

//Example
/*
const x = 10;
Here x is 10

{
    const x = 2;
Here x is 2
}

Here x is 10
*/

//Redeclaring
// Redeclaring a JavaScript var variable is allowed anywhere in a program:

/*
Example
var x = 2; // Allowed
var x = 3; // Allowed
x = 4; // Allowed
*/

//Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

/*
Example
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
*/

//Reassigning an existing const variable, in the same scope, is not allowed:

/*
Example
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}

*/




/*
todo A JavaScript variable is simply a name of storage location. There are two types of variables in JavaScript : local variable and global variable.

! Javascript var
* prefer not to use var
* because of issue in block scope and functional scope

!JavaScript Let
* The let keyword was introduced in ES6 (2015)
* Variables declared with let have Block Scope
* Variables declared with let must be Declared before use
* Variables declared with let cannot be Redeclared in the same scope

!Block Scope
* Before ES6 (2015), JavaScript did not have Block Scope.
* JavaScript had Global Scope and Function Scope.
* ES6 introduced the two new JavaScript keywords: let and const.
* These two keywords provided Block Scope in JavaScript

!What is Good?
* let and const have block scope.
* let and const can not be redeclared.
* let and const must be declared before use.
* let and const does not bind to this.
* let and const are not hoisted.

!What is Not Good?
*var does not have to be declared.
*var is hoisted.
*var binds to this.

!JavaScript Const
*The const keyword was introduced in ES6 (2015)
*Variables defined with const cannot be Redeclared
*Variables defined with const cannot be Reassigned
*Variables defined with const have Block Scope


!When to use JavaScript const?
* Always declare a variable with const when you know that the value should not be changed.
* Use const when you declare:
* A new Array
* A new Object
* A new Function
* A new RegExp



!There are some rules while declaring a JavaScript variable (also known as identifiers).
& 1. Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
& 2. After first letter we can use digits (0 to 9), for example value1.
& 3. JavaScript variables are case sensitive, for example x and X are different variables.
& 4. Names are case sensitive (y and Y are different variables).
& 5. Reserved words (like JavaScript keywords) cannot be used as names.

*/