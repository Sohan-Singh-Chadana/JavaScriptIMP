console.log(this) //? window ko point kar raha hai


function hii() {
    console.log(this) //? window ko point kar raha hai
}
hii();

function Hii() {
    this.hello = "world"
    console.log(this) //^ Object ko point kar raha hai
}
new Hii()

//! Example 1  method inside function this
// const user = {
//     firstName: "sohan",
//     lastName: "Singh",
//     fullName() {
//         function getAge() {
//             console.log("Getting Age")
//             console.log(this); //? window ko point kar raha hai
//         }

//         getAge();
//         console.log(this) //^ Object ko point kar raha hai
//     }
// }

//! Example 2 with method inside function
// const user = {
//     firstName: "sohan",
//     lastName: "Singh",
//     tags: ['a', 'b', 'c'],
//     printTags() {
//         console.log(this.tags)
//         this.tags.forEach(function(tag) {
//             console.log(this) //? window ko point kar raha hai
//             console.log(tag, this.firstName);
//         })
//     }
// }

//! Example 3 with method inside function with this
// const user = {
//     firstName: "sohan",
//     lastName: "Singh",
//     tags: ['a', 'b', 'c'],
//     printTags() {
//         console.log(this.tags)
//         this.tags.forEach(function(tag) {
//             console.log(this) //^ Object ko point kar raha hai
//             console.log(tag, this.firstName);
//         }, this)
//     }
// }


//! Example 4 with element
// const h1 = document.querySelector("h1")
// h1.addEventListener("click", function() {
//     console.log(this); //& h1 ko point kar raha hai ;
//     //&  EventListener lagane par "this" us object/element ko point karata hai
// })

//! Example 5 with body
// const body = document.querySelector("body")
// body.addEventListener("click", function(e) {
//     console.log(e.target)
//     console.log(this); //~ body ko point kar raha hai ;
// })


//! Example 6 with Arrow function
// const user = {
//     firstName: "sohan",
//     lastName: "Singh",
//     tags: ['a', 'b', 'c'],
//     printTags: () => {
//         console.log(this); //? window ko point kar raha hai
//     }
// };
//* Arrow functions should not be used as methods.

//! Example 7 eventlistener with arrow function 'this keyworld'
// const body = document.querySelector("body")
// body.addEventListener("click", (e) => {
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(this); //? window ko point kar raha hai ;
// })



//! Example 8 classes with use 'this keyword'
// class User {
//     constructor() {
//         this.firstName = "Sohan"
//         console.log(this) //^ Object ko point kar raha hai
//     }

//     getUser() {
//         console.log(this) //^ Object ko point kar raha hai
//     }
// }

//* create Object ko point karata hai


// const time = setInterval(() => {
//     const time = new Date().getTime()
//     console.log(time)
// }, 1000)