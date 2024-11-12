// ? using construction function
// function CreateUser(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
// }

// CreateUser.prototype.getBirthYear = function() {
//     return new Date().getFullYear() - this.age
// }
// CreateUser.prototype.getFullName = function() {
//     return this.firstName + " " + this.lastName
// }


// const user1 = new CreateUser("aman", "mishra", 32);
// const user2 = new CreateUser("Sohan", "singh", 52);

// console.dir(CreateUser)
// console.log(user1)


//? using classes
class CreateUser {

    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}


const user1 = new CreateUser("aman", "mishra", 32);
const user2 = new CreateUser("Sohan", "singh", 52);

//? You can send parameters to Class methods:

class Car {
    constructor(name, year) {
        this.name = name
        this.year = year
    }

    getCarAge(age) {
        return age - this.year
    }

    getCarfullDetails() {
        return "My car name is " + this.name + " and My car is " + this.getCarAge(fullYear) + " years old."
    }
}

const date = new Date();
const fullYear = date.getFullYear();

const car1 = new Car("Harriar", 2021);