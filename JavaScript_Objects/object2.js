// let produc_t = {
//     company: "Mango",
//     price: 861,
//     "item Name": "T-shirt",
// };
// console.log(produc_t)
// console.log(produc_t.company)
// console.log(produc_t.price)
// console.log(produc_t.itemName)

// produc_t.company = "Banana";
// console.log(produc_t)

// let propertyName = "item Name";
// console.log(produc_t["item Name"])
// console.log(produc_t[propertyName]) // T-shirt

// * typeof
// console.log(typeof produc_t) // object;


// * delet property
// console.log(produc_t);
// delete produc_t.company
// let deletproperty = delete produc_t['company']
// console.log(produc_t)
// console.log(deletproperty) // true


// * Add property
// produc_t.quatity = 1
// console.log(produc_t)


// * Inside Object

// let produc_t = {
//     company: "Mango",
//     price: 861,
//     "item Name": "T-shirt",
//     displayPrice: function() {
//         console.log(`Price of the product is ₹${this.price}`)
//     },
//     rating: {
//         stars: 4.5,
//         noOfReviews: 87,
//     }
// };

// produc_t.displayPrice(); // Price of the product is ₹861
// console.log('Rating of Product', produc_t.rating.stars, "Star"); // Rating of Product 4.5 Star
// console.log()
// Math.random()

//* Autoboxing

// console.log("This is KG Coding".toUpperCase())
// console.log("This is KG Coding".replace("KG", "Knowledge Gate").toUpperCase())

//* Object References
//~ 1. Objects work based on references, not actual data.
//~ 2. Copying an object copies the reference, not the actual object.
//~ 3. When comparing with ==, you're comparing  references, not content.
// ~4. Changes to one reference affects all copies.

// let a = 5;
// let b = a;
// console.log(`a=${a} b=${b}`)
// a = 8
// console.log(`a=${a} b=${b}`);
// a=5 b=5
// a=8 b=5

// let x = { num: 5 };
// let y = x
// console.log(`x=${x.num}, y=${y.num}`)
// x.num = 8;
// console.log(`x=${x.num}, y=${y.num}`);
// x=5, y=5
// x=8, y=8

// let p = { pop: "iujh" };
// let q = { pop: "iujh" };
// let q = p;
// console.log(p == q) // false
// console.log(p === q) // true


//* Object Shortcuts

let produc_t = {
    company: "Mango",
    price: 861,
    "item Name": "T-shirt",
};


//~ . De-structuring: Extract properties from objects easily.

// let { company, price } = produc_t
// console.log(company)
// console.log(price)