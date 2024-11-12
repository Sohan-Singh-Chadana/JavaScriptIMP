class CreateUser {

    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
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


const user1 = new CreateUser("aman", "mishra", 32);
const user2 = new CreateUser("Sohan", "singh", 52);


// const user = {
//     firsName: "Sohan",
//     lastName: "Singh",
//     get fullName() {
//         console.log("getting...........")
//         return this.firsName + " " + this.lastName
//     },
//     set fullName(value) {
//         // console.log("setting...........")
//         // console.log(value)
//         const [firstName, lastName] = value.split(' ')
//         this.firsName = firstName
//         this.lastName = lastName
//     }
// }

// console.log(user.fullName)

// user.fullName = "Akash kumar"