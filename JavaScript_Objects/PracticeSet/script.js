//* Practice Exercise
// Objects

//?  1. Create object to represent a product from Myntra

// const product1 = {
//     size: "S",
//     name: "Jeans",
//     fit: "Slim Fit",
//     "delivery-time": "Same day delivery",
//     message: "Good Job",
//     status: "complete"
// }

// ? 2 Create an Object with two references and log changes to one object by changing the other one.

// let copyProduct = product1
// console.log(product1)

// copyProduct.size = "XL"
// console.log(product1);

// copyProduct.fit = " Regular Fit"
// console.log(product1)

//? 3. Use bracket notation to display delivery-time

// console.log(product1['delivery-time']) // Sam day delivery

//? 4. Given an object {message: 'good job', status: 'complete'}, use de - structuring to create two variables message and status.

// const { message, status } = product1;
// console.log(message);
// console.log(status);
// Good Job
// complete

//? 5. Add function isIdenticalProduct to compare two product objects.


function isIdenticalProduct(pro1, pro2) {
    if (typeof pro1 !== 'object' || typeof pro2 !== 'object') {
        console.warn('Parameter Passed was not an object');
        return false;
    }


    if (pro1 === pro2) {
        return true;
    }

    if (pro1.name === pro2.name &&
        pro1.size === pro2.size &&
        pro1.fit === pro2.fit) {
        return true
    } else {
        return false
    }
}

const product = {
    size: "S",
    name: "Jeans",
    fit: "Slim Fit",
    "delivery-time": "Same day delivery",
}
const product_2 = {
    size: "M",
    name: "Jeans",
    fit: "Slim Fit",
    "delivery-time": "Same day delivery",
}
const product_3 = {
    size: "M",
    name: "Jeans",
    fit: "Slim Fit",
    "delivery-time": "Same day delivery",
}

console.log(isIdenticalProduct(product, '')) // false
console.log(isIdenticalProduct(product, product)) // true
console.log(isIdenticalProduct(product, product_2)) // false
console.log(isIdenticalProduct(product_2, product_3)) // true
console.log(isIdenticalProduct(product_3, product_2)) // true

// function isIdenticalProduct(pro1, pro2) {
//     if (typeof pro1 !== 'object' || typeof pro2 !== 'object') {
//         console.log('Parameter Passed was not an object');
//         return false;
//     }

//     if (pro1 === pro2) {
//         return true;
//     }

//     if (pro1.name === pro2.name &&
//         pro1.size === pro2.size &&
//         pro1.fit === pro2.fit) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const product = {
//     size: "S",
//     name: "Jeans",
//     fit: "Slim Fit",
//     "delivery-time": "Same day delivery",
// }

// const product_2 = {
//     size: "M",
//     name: "Jeans",
//     fit: "Slim Fit",
//     "delivery-time": "Same day delivery",
// }

// const product_3 = {
//     size: "M",
//     name: "Jeans",
//     fit: "Slim Fit",
//     "delivery-time": "Same day delivery",
// }

// console.log(isIdenticalProduct(product, ''))
// console.log(isIdenticalProduct(product, product))
// console.log(isIdenticalProduct(product, product_2))
// console.log(isIdenticalProduct(product_2, product_3))
// console.log(isIdenticalProduct(product_3, product_2))



//? 1  Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.
function myFunction(a, b) {
    // Check if the object has the specified key
    if (a.hasOwnProperty(b)) {
        // Check if the value associated with the key is truthy
        return Boolean(a[b]);
        // return !!a[b];
    } else {
        // If the key doesn't exist, or if the value is falsy, return false
        return false
    }
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b')); // true
console.log(myFunction({ x: 'a', y: null, z: 'c' }, 'y')); // false
console.log(myFunction({ x: 'a', b: 'b', z: undefined }, 'z')); // false