// Array and loops

const languages = ["javaScript", "python", "c"];

// length
// console.log(languages.length) // 3

// console.log(languages[1]) // python
// console.log(languages[3]) // undefined

// languages.push("dart");

// languages.unshift("Java")

// const nepopvalue = languages.pop();

// console.log(nepopvalue); // c

// languages.shift();
// console.log(languages.shift()) // javaScript

// console.log(languages);

// console.log("*")
// console.log("*")
// console.log("*")
// console.log("*")


//*  Loopes
// for (let i = 0; i < 4; i++) {
//     console.log("*")
// }

// const actors = [{
//         name: "Actor 1",
//         payment: 100
//     },
//     {
//         name: "Actor 2",
//         payment: 200
//     },
//     {
//         name: "Actor 3",
//         payment: 150
//     },
// ];

//*  for loop
// for (let i = 0; i < actors.length; i++) {
//     actors[i].payment = actors[i].payment - 10;
// }

// * ForEach
// actors.forEach((actor) => {
//     actor.payment = actor.payment - 11;
// console.log(actor)
// });

//* for...of loop
// for (let actor of actors) {
//     actor.payment = actor.payment - 10;
// console.log(actor)
// }

// console.log(actors)


//*  Filter
// const students = [{
//         name: "Student 1 ",
//         marks: 45
//     },
//     {
//         name: "Student 2 ",
//         marks: 60
//     },
//     {
//         name: "Student 3 ",
//         marks: 35
//     },
// ];

// const failed = students.filter((student) => {
//     return student.marks < 45;
// if (student.marks < 45) {
//     return true
// }
// return false;
// console.log(student);
// })

// const failed = students.filter((student => student.marks < 45))

// console.log(failed)

//*  Map
// const users = [{
//         fname: "john",
//         lname: "Doe"
//     },
//     {
//         fname: "jane",
//         lname: "Doe"
//     }
// ];

// const finalUser = users.map((user) => {
//     return {
//         fullname: `${user.fname} ${user.lname}`
//     }
// console.log(user)
// })
// console.log(finalUser)



//*  Reduce
// const movies = [{
//         name: "interstellar",
//         budget: 100
//     },
//     {
//         name: "Social",
//         budget: 150
//     },
//     {
//         name: "Matrix",
//         budget: 300
//     },
// ];

// let total = 0;

// movies.forEach((movie) => {
//     total += movie.budget;
// total = total + movie.budget
// })

// console.log(total)

// const total = movies.reduce((acc, movie) => {
//     acc += movie.budget;
//     return acc;
// }, 0)
// console.log(total)


//* IndexOf

// const admins = [2, 1, 5];

// const user = {
//     name: "XYZ",
//     id: 5
// };

// console.log(admins.indexOf(user.id)) // return -1
// const isAdmin = admins.indexOf(user.id) > -1
// console.log(isAdmin);

//* includes
// console.log(admins.includes(user.id))


//* find

// const users = [{
//         name: "xyz",
//         id: 1
//     },
//     {
//         name: "abc",
//         id: 2
//     },
//     {
//         name: "pqr",
//         id: 3
//     },
// ];


// const myuser = users.find((user) => {
//     return user.name === 'pqr'
// return user.name === 'pqre' // return undefined
// if (user.id === 3) {
//     return true
// }
// return false
// });

// console.log(myuser);



//* Sort

// const names = ["John", "Jane", "Shyam", "Ram", "Sameer", "Mansi"];

// names.sort();
// console.log(names)


// * splice
// const names = ["John", "Jane", "Shyam", "Ram", "Sameer", "Mansi"];

// const deletnames = names.splice(2, 2)
// console.log(names)
// console.log(deletnames)


// * slice
// const names = ["John", "Jane", "Shyam", "Ram", "Sameer", "Mansi"];

// const deletnames1 = names.slice(0, 4)
// console.log(names)
// console.log(deletnames1)



// ? JavaScript Practice
//? let's find all ages using birth years
// Array of object

const fighters = [{
        name: "Khabib",
        born: 1988
    },
    {
        name: "Alex",
        born: 1987
    },
    {
        name: "Islam",
        born: 1991
    },
];

let currentYear = new Date().getFullYear();

for (const fighter of fighters) {
    fighter.age = currentYear - fighter.born;
}

console.table(fighters)

let mynullvalue = null;
// console.log(typeof mynullvalue)