// for of

// ['','','']
// [{},{},{}]

const arr_1 = [1, 2, 3, 4, 5];

for (const num of arr_1) {
    // console.log(num);
};

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    // console.log(`Each char is ${greet}`)
};


// Maps

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

// console.log(map);

// for (const key of map) {
//     console.log(key)
// }
for (const [key, value] of map) {
    // console.log(key, ':-', value)
}

const myObject = {
    game1: 'NFS',
    game2: "spiderman",
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }

const newObjec = Object.entries(myObject);
console.log(newObjec);

// for (const [key, value] of newObjec) {
//     console.log(key, ':-', value);
// }