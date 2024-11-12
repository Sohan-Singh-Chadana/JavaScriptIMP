// // import { usersData, myName as myNames } from "./usersData.js";
// // import { myName } from "./usersData.js";
// // import usersData from "./usersData.js";
// // import * as something from "./usersData.js";
// import usersData, { myName, getFirstUser } from "./usersData.js";

// // import { productsData } from "./productsData.js";
// import productsData from "./productsData.js";

// console.log(myName);
// console.log(usersData);

// console.log(productsData);
// console.log(getFirstUser());

// // console.log(something.default);
// // console.log(something.getFirstUser());
// // console.log(something.myName);




// const user = "Procodrr"

// console.log(user)


// const h1 = document.querySelector("h1")
// console.log(h1)

// user = "Procoder"



console.log("hii")

import usersData from "./usersData.js";


console.log(usersData)

for (let i = 0; i < usersData.length; i++) {
    const element = usersData[i];
    // console.log(element.firstName)
}
let i = 0;
// while (i > 10) {
//     console.log(usersData[i])
//     i++
// }

do {
    console.log(usersData[i].address.address + ", " + usersData[i].address.city)
    i++
} while (i > 10);

console.log("jlkdjfld")