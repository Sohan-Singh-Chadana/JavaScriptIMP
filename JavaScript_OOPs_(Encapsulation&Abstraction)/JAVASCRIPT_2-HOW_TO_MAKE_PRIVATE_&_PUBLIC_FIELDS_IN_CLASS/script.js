//? using classes
class CreateUser {
    #age
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.#age = age
    }

    #hi = 'hello World'

    getBirthYear() {
        console.log(this.#hi);
        console.log(this.#getFullName());
        return new Date().getFullYear() - this.#age
    }

    #getFullName() {
        return this.firstName + " " + this.lastName
    }
}


const user1 = new CreateUser("aman", "mishra", 32);
const user2 = new CreateUser("Sohan", "singh", 52);