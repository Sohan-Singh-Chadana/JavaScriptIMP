// let nameArr = ["Sohan", "Suman", "Sandhiya", "Sonu", 'Narendra'];

// import { indianCities } from "./data.js";
// const indianCities = [
//     "Ahmedabad",
//     "Agra",
//     "Allahabad",
//     "Amritsar",
//     "Aurangabad",
//     "Bangalore",
//     "Bhopal",
//     "Bhubaneswar",
//     "Chandigarh",
//     "Chennai",
//     "Coimbatore",
//     "Cuttack",
//     "Dehradun",
//     "Delhi",
//     "Dhanbad",
//     "Faridabad",
//     "Ghaziabad",
//     "Gurgaon",
//     "Guwahati",
//     "Gwalior",
//     "Hubli-Dharwad",
//     "Hyderabad",
//     "Indore",
//     "Jabalpur",
//     "Jaipur",
//     "Jalandhar",
//     "Jammu",
//     "Jamshedpur",
//     "Kanpur",
//     "Kochi",
//     "Kolkata",
//     "Kota",
//     "Lucknow",
//     "Ludhiana",
//     "Madurai",
//     "Mangalore",
//     "Meerut",
//     "Mumbai",
//     "Mysore",
//     "Nagpur",
//     "Nashik",
//     "Navi Mumbai",
//     "Patna",
//     "Pune",
//     "Raipur",
//     "Rajkot",
//     "Ranchi",
//     "Rourkela",
//     "Surat",
//     "Thiruvananthapuram",
//     "Vadodara",
//     "Varanasi",
//     "Vijayawada",
//     "Visakhapatnam",
// ];
let indianCities = null;
const serachbox = document.querySelector("#serachbox");
const resultbox = document.querySelector(".resultbox");

let todos = (callback) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.addEventListener("readystatechange", function() {
            // console.log(xhttp, xhttp.readyState)
            if (xhttp.readyState === 4 && xhttp.status == 200) {
                let data = JSON.parse(xhttp.responseText);
                indianCities = data;
                resolve(indianCities);
                // callback(undefined, indianCities)
                // console.log(xhttp, xhttp.responseText)
            } else if (xhttp.readyState === 4) {
                reject('Data could not fetch');
                // callback("Data could not fetch", undefined)
            }

        })

        xhttp.open("GET", "data.json");
        xhttp.send();
    })

}

// * Event handler for search box keyup
serachbox.onkeyup = function() {
    let result = [];
    let inputValue = serachbox.value;
    if (inputValue.length) {
        result = indianCities.filter((keyword) => {
            return keyword.toLowerCase().includes(inputValue.toLowerCase())
        });
        // console.log(result)
    };
    display(result);
    if (!result.length) {
        resultbox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return `<li onclick="selectitem(this)">${list}</li>`
    })
    resultbox.innerHTML = `<ul>${content.join("")}</ul>`
}

function selectitem(list) {
    serachbox.value = list.innerHTML
    resultbox.innerHTML = '';
};

//* Call the todos function
todos()
    .then((data) => {
        // console.log(data)
        return data;
    }).catch((error) => {
        console.log(error)
    });


// todos((error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })







//* Spread: Unpacks*elements.[]{}
//* Rest: packs*elements


//* clone/copy
// const number = [1, 2, 3];
// const newNumbers = [...number];

// console.log(newNumbers);

// Merge
// const oldNumbers = [1, 2, 3];
// const newNumbers = [4, 5, 6];

// console.log([...oldNumbers, ...newNumbers]);

//*compose
// const oldNumbers = [1, 2, 3];
// const newNumbers = [4, 5, 6];

// console.log([100, ...oldNumbers, ...newNumbers, 200]);


//* String
// const channel = 'Codersgyan';
// const channelArr = [...channel]
// console.log([...channel]);
// console.log([...channel][2].toUpperCase())

// for (let i = 0; i < channelArr.length; i++) {
//     const element = channelArr[i];
//     console.log(element.toUpperCase())
// }

//* Objects

//* clone(Shallow)

// const order = {
//     id: 1,
//     date: "29/08/20200",
//     customerName: "Ramesh",
//     items: [
//         '1',
//         '2',
//     ]
// }

// const newOrder = {...order }

// order.items.push('3');
// console.log(newOrder);


//*  Merge 2 objects

// const user = {
//     name: "Ramesh",
//     city: "Ahmedabad",
// }

// const address = {
//     Street: "Main Street"
// }

// const newUser = {
//     ...user,
//     ...address,
// }

// console.log(newUser)


//! Rest... parameter

// function sum(number1, number2, ...numbers) {
//     console.log(numbers)
//     let result = 0;
//     for (let num of numbers) {
//         result += num; // result = result + num
//     }
//     return result;
// };

// const numbers = [23, 34, 45, 12, 534, 889]
// console.log(sum(numbers[0], numbers[2]))
// console.log(sum(...numbers))
// console.log(sum(23, 34, 45, 12, 54, 88));



// const numbersFromBackend = [12, 3, 4, 23, 3, 45, 64, 342, 435, 321, 12, 221]
// const sumarr = numbersFromBackend.reduce((acc, curr) => acc + curr, 0)
// console.log(sumarr)
// console.log(Math.max(...numbersFromBackend));



// Disructuring
// const user = {
//     name: "Ramesh",
//     city: "Ahmedabad",
//     address: "Main Street",
// }

// const { name: username, ...otherproperty } = user;
// console.log(username, otherproperty)



// const result = 1.2e3 //1200
// console.log(43.5e1) //output 435
// console.log(555.5e3); // output 555500
// console.log(result)