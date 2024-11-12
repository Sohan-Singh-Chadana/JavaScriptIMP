// Primitive

// 7  types : String , Number , Boolearn , null ,undefined, symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id, anotherId)
console.log(id === anotherId)

// const bigNumber = 938247983270808732n


// Reference (Non primitive);

// Array, Objects , Functions

const heros = ["shaktiman", 'naagraj', 'doga'];
let myobj = {
    name: "sohan",
    age: 22,
};

const myFunction = function() {
    console.log("Hello World")
};

console.log(typeof scoreValue);

// link ==> https://262.ecma-international.org/5.1/#sec-9




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive) , Heap  (Non-Primitive);

let myYoutubename = "SohanSinghChadana"

let anotherName = myYoutubename;
anotherName = "Chaiaurcode";


console.log(anotherName);





const userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

console.log(userOne.email)

let userTwo = userOne;

userTwo.email = 'Sohan@google.com'

console.log(userOne.email)
console.log(userTwo.email)