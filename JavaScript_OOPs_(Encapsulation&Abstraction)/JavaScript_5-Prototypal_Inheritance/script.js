class Person {
    live() {
        console.log("living")
    }
}
class User extends Person {

    constructor(firstName, lastName, age) {
        super()
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }

    work() {
        console.log("user is working")
    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }


    set fullName(value) {
        const [firsName, lastName] = value.split(' ')
        this.firstName = firsName
        this.lastName = lastName
    }

}


// const user1 = new User("aman", "mishra", 32);
// const user2 = new User("Sohan", "singh", 52);


class Student extends User {
    constructor(firsName, lastName, age, standard) {
        super(firsName, lastName, age)
        this.standard = standard
    }

    study() {
        console.log("Studying")
    }
}



class Employee extends User {
    constructor(firsName, lastName, age, company) {
        super(firsName, lastName, age)
        this.company = company
    }

    work() {
        console.log("Working")
    }
}

const student1 = new Student("aman", "mishra", 32, "BCA");
const employee1 = new Employee("Sohan", "singh", 52, "Google");