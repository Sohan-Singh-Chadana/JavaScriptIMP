// Truthy

//* In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

console.log(Boolean(1)) // true
console.log(Boolean(-1)) // true
console.log(Boolean(22.23)) // true
console.log(Boolean(Infinity)) // true
console.log(Boolean(-Infinity)) // true
console.log(Boolean("23")) //true
console.log(Boolean("sohan")) // true
console.log(Boolean(-0 + 1)) // true
console.log(!!1) // true

// if (true) // true
// if ({}) // true
// if ([]) // true
// if (42) // true
// if ("0") // true
// if ("false") // true
// if (new Date()) // true
// if (-42) // true
// if (12n) // true
// if (3.14) // true
// if (-3.14) // true
// if (Infinity) // true
// if (-Infinity) // true

// If the first operand is truthy, the logical AND operator returns the second operand:
console.log(true && "dog") // dog
console.log([] && "dog") // dog
console.log(false && "dog") // false

console.log(1 || "cat") // 1
console.log(0 || "cat") // cat

//* falsy
// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

// The following table provides a complete list of JavaScript falsy values:


/*
Value	    Type	            Description
* null	        Null	       The keyword null — the absence of any value.
* undefined	Undefined	undefined — the primitive value.
* false	    Boolean	      The keyword false.
* NaN	        Number	      NaN — not a number.
* 0	        Number	      The Number zero, also including 0.0, 0x0, etc.
* -0	        Number	     The Number negative zero, also including -0.0, -0x0, etc.
* 0n	            BigInt  	The BigInt zero, also including 0x0n, etc. * Note that there is no BigInt negative zero — the negation of 0n is 0n.
* ""	            String	    Empty string value, also including '' and ``.
* document.all	    Object	The only falsy object in JavaScript is the built-in document.all.

The values null and undefined are also nullish.*/


console.log(Boolean(0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean("")) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(NaN)) // false
console.log(!!0) //false
console.log(Boolean()) // false


/*
if (false) {
  Not reachable
}

if (null) {
  Not reachable
}

if (undefined) {
  Not reachable
}

if (0) {
  Not reachable
}

if (-0) {
  Not reachable
}

if (0n) {
  Not reachable
}

if (NaN) {
  Not reachable
}

if ("") {
  Not reachable
}

*/

// The logical AND operator, &&
// If the first object is falsy, it returns that object:

console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0









let person = {
    name: "sohan",
    address: "Ahmedabad",
    age: 24,
}

// for (const x in person) {
//     const element = person[x];
//     console.log(element)
// }