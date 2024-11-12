// const user1 = {
//     firstName: 'Sohan',
//     lastName: "Singh",
//     age: 23,
//     getAgeYear() {
//         return new Date().getFullYear() - user1.age
//     },
// }

// function getAgeYear(age) {
//     return new Date().getFullYear() - age
// }

// const user2 = {
//     firstName: 'Ramesh',
//     lastName: "Sen",
//     age: 25,
//     getAgeYear: function() {
//         return new Date().getFullYear() - user2.age
//     },
// }

//? Example 1 problem is this getAgeYear function repeated
// function createUser(firstName, lastName, age) {
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getAgeYear() {
//             return new Date().getFullYear() - user.age
//         },
//     }

//     return user
// }

// const user1 = createUser("aman", "mishra", 32);
// const user2 = createUser("Sohan", "singh", 52);

//? Example 2 problem is solve this code getAgeYear function not repeated
//* but problem is this way is polute global window and create Polymorphism and break rulse Encapsulation and Abstraction this ways is not right way

// function getBirthYear() {
//     return new Date().getFullYear() - this.age
// }

// function createUser(firstName, lastName, age) {
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getBirthYear,
//     }

//     return user
// }

// const user1 = createUser("aman", "mishra", 32);
// const user2 = createUser("Sohan", "singh", 52);

//? Example 3 right ways this code
//? lekin bahut extracode likhana padta hai or javascript inbuild tarika provide karati hai

// function createUser(firstName, lastName, age) {
//     const user = {
//         firstName,
//         lastName,
//         age,
//*        getBirthYear: createUser.commonMethods.getBirthYear,
//     };

//     return user;
// }

//* createUser.commonMethods = {
//*     getBirthYear() {
//*        return new Date().getFullYear() - this.age
//*     }
//* };

// const user1 = createUser("aman", "mishra", 32);
// const user2 = createUser("Sohan", "singh", 52);

//? Example 4 using javascript inbuild constructor method ke tarika

function CreateUser(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

CreateUser.prototype.getBirthYear = function() {
    return new Date().getFullYear() - this.age
}
CreateUser.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName
}


const user1 = new CreateUser("aman", "mishra", 32);
const user2 = new CreateUser("Sohan", "singh", 52);

console.dir(CreateUser)