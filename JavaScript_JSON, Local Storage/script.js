/*
 * JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).
 */

// let product = {
//     name: "TShirt",
//     price: 789,
//     rating: {
//         stars: 4.5,
//         noOfReviews: 453
//     },
// };
// console.log(typeof product)
// console.log(product)

// let str = JSON.stringify(product)
// console.log(typeof str)
// console.log(str)

// let newProuct = JSON.parse(str)
// console.log(typeof newProuct)
// console.log(newProuct)

//* LocalStorage

//~ 1. Persistent data storage in the browser.
//~ 2. setItem: Stores data as key-value pairs.
//~ 3. Only strings can be stored.
//~ 4. getItem: Retrieves data based on key.
//~ 5. Other Methods: localStorage.clear(), removeItem().
//~ 6. Do not store sensitive information. Viewable in storage console

let product = {
    name: "TShirt",
    price: 789,
    rating: {
        stars: 4.5,
        noOfReviews: 453,
    },
};

// localStorage.setItem("Name", "Sohan Singh");
// localStorage.setItem("Price", "7868");

// console.log(localStorage.getItem("Name"))
// localStorage.setItem("product", JSON.stringify(product))

// let product2 = JSON.parse(localStorage.getItem("product"))
// console.table(product2);

//localStorage.removeItem("Price")

// localStorage.clear();

//* Window localStorage

// Example
// Set and retrieve localStorage name / value pair:

localStorage.setItem("lastName", "Smith");
localStorage.getItem("lastName");

//* Description
//~ The localStorage object allows you to save key/value pairs in the browser.

//! Note
// The localStorage object stores data with no expiration date.

// The data is not deleted when the browser is closed, and are available for future sessions.

//* Syntax
//& window.localStorage
// or just:
//& localStorage

//* Save Data to Local Storage
//& localStorage.setItem(key, value);

//* Read Data from Local Storage
//& let lastname = localStorage.getItem(key);

//* Remove Data from Local Storage
//& localStorage.removeItem(key);

//* Remove All (Clear Local Storage)
//& localStorage.clear();

// clickCounter()
let counter = 0;

function clickCounter() {
    if (localStorage.clickCounter) {
        localStorage.clickCounter = Number(localStorage.clickCounter);
        counter++;
    } else {
        localStorage.clickCounter = 1;
        counter = 1;
    }
    document.getElementById("demo").innerHTML = counter;
}

// clickCounterDec();

function clickCounterDec() {
    if (localStorage.clickCounterDec) {
        localStorage.clickCounterDec = Number(localStorage.clickCounterDec);
        counter = counter - 1;
    } else {
        localStorage.clickCounterDec = 0;
    }
    document.getElementById("demo").innerHTML = counter;
}

// clearlocalstorage()
function clearlocalstorage() {
    localStorage.clear();
    document.getElementById("demo").innerHTML = "Number of clicks is empty";
}

const data = {
    name: "sohan",
    age: 23,
};

let url = "https://api.github.com/users/hiteshchoudhary";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        document.getElementById("img").src = data.avatar_url;
        document.getElementById(
            "name"
        ).innerHTML = ` UserName : &nbsp; ${data.name}`;
        document.getElementById("id").innerHTML = ` UserId : ${data.id}`;
        document.getElementById("bio").innerHTML = `UserBio : ${data.bio}`;
        document.getElementById("info").innerHTML +=
            `Twitter_UserName : ${data.twitter_username} ` + "<br/>" + "<br/>";
        document.getElementById("info").innerHTML += `UserLogin : ${data.login}`;
    });