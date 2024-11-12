// Iterables
// Jispe hum for of loop laga sakein
// sring, array are iterable

const firstName = 'SohanSingh';
for (const charater of firstName) {
    // console.log(charater);
};

const items = ['item1', 'item2', 'item3'];
for (const item of items) {
    // console.log(item)
}


const users = { 'key1': "vlue1", "key2": 'value2', };
// for (const item of users) {
// console.log(item)
// }
//! output =>  Uncaught TypeError: users is not iterable



// Array like object
// jinke pas length property hoti hai
// aur jinko hum index se access kar sakte hai
// example :- string


const firstName_1 = "sohansingh";
// console.log(firstName_1.length)
// console.log(firstName_1[2])
// console.log(firstName_1, firstName_1.split('').reverse().join(''))



//* Sets (it is Iterable);
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers = [1, 2, 3, 4, 5, 2, 4, 3, 2, 1]

// const numbers = new Set([1, 2, 3, ]);
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);
// numbers.add(['itme1', 'item2'])
// numbers.add(['itme1', 'item2'])

// const hai = numbers.has(1)
// if (numbers.has(1)) {
//     console.log('1 is present')
// } else {
//     console.log('1 is not  present')
// }
// console.log(hai) // true
// console.log(numbers);

// for (const number of numbers) {
//     console.log(number)
// }

// const myArray = [1, 2, 3, 4, 5, 4, 5, 6, 7, 6];

// const uniqueElement = new Set(myArray);
// console.log(uniqueElement);
// let length = 0;
// for (let element of uniqueElement) {
//     length++;
// }
// console.log(length)


//* Maps in JavaScript!

// map is an iterable
// store data in ordered  fashion

// store key value pair (Like object)
// duplicate keys are not allowed like objects

// different between maps and objects
// objects can only havae string or symbol as key

// in maps you can use anything as key
// like array, number, string


// Object literal
// key -> string
// key -> symbol

// const person = {
//     firstName: "sohan",
//     age: 45,
//     1: "one",
// }

// console.log(person.firstName)
// console.log(person['firstName'])
// console.log(person[1]);

// for (let key in person) {
//     console.log(typeof key)
// }


// key value pair
// const person = new Map();
// person.set('firstName', 'sohan');
// person.set("age", 7);
// person.set(1, 'one');
// person.set([1, 2, 3], 'onetwothree');
// person.set({ 1: "one" }, 'onetwothree');
// console.log(person);
// console.log(person.get('firstName'))
// console.log(person.get(1))
// const valueget = person.get([1, 2, 3])
// const valueget1 = person.has([1, 2, 3])
// console.log(valueget, valueget1)
// console.log(person.keys());


// for (const key of person.keys()) {
//     console.log(key, typeof key)
// }


// for (const [key, value] of person) {
// console.log(Array.isArray([key]));
// console.log(key, value)
// }


// const person1 = new Map([
//     ['firstName', 'sohan'],
//     ["age", 22]
// ]);
// console.log(person1)

const person1 = {
    id: 1,
    firstName: 'sohan'
};
const person2 = {
    id: 2,
    firstName: 'soham'
};

const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: 'male' });
extraInfo.set(person2, { age: 9, gender: 'male' });
// console.log(userInfo);

console.log(person1.id);
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).age);
console.log(extraInfo.get(person2).gender);


//* clone using Object.assign

// memory

const obj = {
    key1: "value1",
    key2: "vlaue2",
}

// const obj2 = {...obj };
const obj2 = Object.assign({}, obj);
obj.key3 = 'value3';
console.log(obj);
console.log(obj2);


//* Optional chaining

const user = {
    firstName: "sohan",
    address: { houseNumber: '1234' },
};

// console.log(user.firstName)
// console.log(user.addres.houseNumber)//  Uncaught TypeError: Cannot read properties of undefined (reading 'houseNumber');

console.log(user?.firstName);
console.log(user?.address?.houseNumber)