// debugger


// function foo() {
//     let b = 1;

//     function inner() {
//         return b;
//     }
//     return inner;
// }
// let get_func_inner = foo();

// console.log(get_func_inner());
// console.log(get_func_inner());
// console.log(get_func_inner());

// console.dir(get_func_inner)


// debugger


// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// alert(counter2()); // 0
// alert(counter2()); // 1



// let phrase = "Hello";

// if (true) {
//     let user = "John";

//     function sayHi() {
//         console.log(`${phrase}, ${user}`);
//     }
// }
// sayHi();


let x = 1;

function func() {
    console.log(x); // ?

    // let x = 2;
}

// func(); // ReferenceError: Cannot access 'x' before initialization


// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// // by name (Ann, John, Pete)
// let name = users.sort((a, b) => a.name > b.name ? 1 : -1);

// // by age (Pete, Ann, John)
// let age = users.sort((a, b) => a.age > b.age ? 1 : -1);

// function byField(fieldName) {
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }

// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));