// Create Elementes
document.body.style.backgroundColor = "lightsalmon";
let h1 = document.createElement("h1");

let string = "Learn JavaScript Fisher Yates Algorithm";
let textNode = document.createTextNode(string);

h1.appendChild(textNode);
document.body.prepend(h1);


// & Shuffle Algorithm

// The syntax [array[i], array[j]] = [array[j], array[i]] is called an array destructuring assignment.

// 1 usage
const myNumbers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]] // destructuring assignment
        // console.log(i, j);
        // let temp = array[i];
        // array[i] = array[j];
        // array[j] = temp;
    }
    return array;
}

const array1 = [1, 2, 3, 4, 5, 6]
const shuffleNumber = myNumbers(array1);
console.log(shuffleNumber);


// Here is an example of how to use the Fisher-Yates algorithm to shuffle a deck of cards:

class Card {
    constructor(suit, rank) {
        this.shit = suit;
        this.rank = rank;
    }
}

const suits = ["Hearts", "diamonds", "clubs", "spades"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//create a deck of cards
const deck = [];
for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
        deck.push(new Card(suits[i], ranks[j]));
    }
};

// Shuffle the deck
myNumbers(deck);

// Draw a card from the deck
const drawCard = deck.pop();

//print the draw card;
console.log(drawCard);

//? example 1
// Here are the steps of the Fisher-Yates Shuffle algorithm:
//1 Create a temporary array temp() which is initially a copy of arr().
//2 Randomly select an element from temp().
//3 Swap the selected item with the last item in the collection that has not been selected.
//4 Continue until there are no remaining unshuffled items.


function fisherYatesShuffle(arr) {
    let temp = arr.slice(); // Create a copy of the array
    // for (let i = temp.length - 1; i > 0; i--) {
    //     let j = Math.floor(Math.random() * (i + 1));
    // console.log(i, j);
    //     [temp[i], temp[j]] = [temp[j], temp[i]];
    // }
    let i = temp.length
    while (--i > 0) {
        // Randomly select an index from 0 to i
        let j = Math.floor(Math.random() * (i + 1));

        // Swap the elements at indices i and j
        [temp[i], temp[j]] = [temp[j], temp[i]];
    }

    return temp; // Return the shuffled array
}
const originalArray = [1, 2, 3, 4, 5, 6];
const shuffleArray = fisherYatesShuffle(originalArray)

console.log("original Array :", originalArray);
console.log("shuffle Array :", shuffleArray);


//! If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
let x = 1;
// while (x <= 0) {
//     console.log(`The number is : `, x)
//     x++
// }

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = '';

while (cars[i]) {
    // console.log(cars[i]);
    // text = text + cars[i];
    // text += cars[i] + " ";
    text += `${cars[i]}  `
    i++
}
document.querySelector("#demo").innerHTML = text;


// Do while loop
// do {
//     console.log(`number count : `, x);
//     x++;
// } while (x <= 0);