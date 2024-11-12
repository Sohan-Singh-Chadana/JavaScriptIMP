const user = {
    firstName: "Sohan",
    lastName: "Singh",
    age: 24,
    address: {
        city: "Delhi",
    },
    getfullName: function() {
        return user.firstName + " " +  user.lastName
    },
    getSelection: "hii",
}

//? 1
if (user.address) {
    // console.log(user.address.city)
}

//? 2
// console.log(user.address && user.address.city)

//? 3
const a = 'city'
console.log(user?.address?.city)
console.log(user?.address?.[a])

console.log(user.getfullName?.());