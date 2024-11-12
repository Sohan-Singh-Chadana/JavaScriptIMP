console.log("Hello\nWorld!") //	New Line
console.log("Hello\tWorld!") //	Horizontal Tabulator
console.log("Hello\bWorld!") //	Backspace
console.log("Hello\fWorld!") //	Form Feed
console.log("Hello\rWorld!") //	Carriage Return
console.log("Hello\vWorld!") // Vertical Tabulator


// let strr = "ApnaCollege";

//* Strings in JavaScript

//*  Creating Strings
const string = new String("Subscribe to RoadsideCoders!");
const string2 = "Subscribe to RoadsideCoders!"; // double quotes
const string3 = 'RoadsideCoders!'; // single quotes
const string4 = `
Subscribe to ${string3}
like this video
share this
`; // backticks

// console.log(string4)
const srtr = "wordl";
// console.log `Hello${srtr}howare${"You"}`

function test(string, youtubechannel, person) {
    console.log(string, youtubechannel, person)
    return;
}
const channel = "RoadSideCoder";
const name = "piyush"

// test `Subscribe to ${channel} run by ${name}`
// test(`Subscribe to ${channel} run by ${name}`, channel, name)

// * String length

const string11 = "Subscribe to RoadsideCoder!";
// console.log(string11.length);

// * Accessing Characters
console.log(string11[3])
console.log(string11.charAt(3))

//* Looping
for (let i = 0; i < string11.length; i++) {
    // console.log(string11[i])
};

//* Modifying Strings
string11[3] = "b"; // Can't do this;
// console.log(string11.replace("Subscribe", "Sub"));
console.log(string11.replace("s", "b")); // Replaces first instance of that character or word
console.log(string11.replaceAll("s", "b")); // replaces all instance of that character or word


string11.concat(" and share this video");
const newStr = "       Hello       World        "
newStr.trim()

// Searching
string11.indexOf("R");
string11.indexOf("Coder");


console.log(string11.lastIndexOf("e"));
console.log(string11.indexOf("e"));

console.log(string11.startsWith("S"));
console.log(string11.endsWith("!"));

// * Extracting Substrings
console.log(string11.substring(13));
console.log(string11.slice(-14, -1));
// console.log(string11.slice(13, -1));

//* Converting Case
// const toBeConverted = 1;
const toBeConverted = { name: "sohan" };
// console.log(typeof toBeConverted);
console.log(String(toBeConverted)); //[object Object]
console.log(JSON.stringify(toBeConverted)); //{"name":"sohan"}

string11.toUpperCase();
string11.toLowerCase();

console.log(string11.charCodeAt(0))
console.log(String.fromCharCode(65))

const str12 = "apple";
const str13 = "apple";
console.log(str12.localeCompare(str13));

console.log(str12.includes("Subscribe"));
console.log(str12.includes("apple"));

// * Splitting and joining strings
console.log(string11.split(" "));
const arr = ["apple", "banana"];
console.log(arr.join(" and "));

let array = string11.split('');
let result = array.reverse().join('');
console.log(result);

// revese each of word
function reverseWord(str) {
    const word = str.split(' ')

    const reveseWords = word.map((word) => {
        return word.split('').reverse().join('')
    })
    return reveseWords.join(' ')
}
const reversedStr = reverseWord(string11)
console.log(reversedStr)
console.log(undefined === null)
    // Consolas;