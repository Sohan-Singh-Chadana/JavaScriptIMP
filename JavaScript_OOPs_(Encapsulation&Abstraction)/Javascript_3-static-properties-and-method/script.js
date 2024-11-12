//? using classes
class CreateUser {

    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    static run = 'running'


    static {
        this.hi = "hello"
        this.getFullName = function(x) {
            // return this.firstName + " " + this.lastName
            return x.firstName + " " + x.lastName
        }
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }

    // static getFullName() {
    //     return this.firstName + " " + this.lastName
    // }
}


const user1 = new CreateUser("aman", "mishra", 32);
const user2 = new CreateUser("Sohan", "singh", 52);

console.dir(CreateUser)

//?A static method is created with the "static" keyword, and you can only call the method on the class itself


//? You can call 'getFullName()' on the CreateUser Class:
// console.log(CreateUser.getFullName());


//? // But NOT on  a CreateUser(user1, user2) Object:
try {
    console.log(user1.getFullName())
} catch (error) {
    console.log(error)
}


//? If you want to use the user1 object inside the static method, you can send it as a parameter:
console.log(CreateUser.getFullName(user1));