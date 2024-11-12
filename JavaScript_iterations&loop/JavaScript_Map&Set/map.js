//*  What is a Map?
// A map is another data structure/container used to store key-value pairs of data of any kind and length.

// Maps are similar to objects, but with maps, you can use anything as a key. An object, on the other hand, takes strings, symbols, and numbers as keys.

// Maps are iterables and come with various methods. Some of the features of maps are that the order is guaranteed, and values can be duplicated (but keys can't).

// Now we'll learn more about each of these iterables so you understand how to use them.

//? How to Create a Map
// You create a map by starting with the "new" keyword followed by "map." The example below shows the creation of a map of a player, which returns an empty map. You can create a new map like this:

const player = new Map();
console.log(player);

// And it returns a map with an empty value.

// & output => Map(0) {size: 0}

// You can also create a map using a constructor initialized with an array of arrays. Each array in the array is one key-value pair, and the key can be of any type. The example below shows the creation of a map of two arrays using the constructor.

const player1 = new Map([
    ["key", "value"],
    ["lawal", "kamal"],
]);

console.log(player1);

// The above code returns a map with two elements:

//&  output =>  Map(2) { 'key' => 'value', 'lawal' => 'kamal' };

// key and lawal are the keys of the map, while value and kamal are the values.

//?  Properties and Methods of Map
// Map has several methods and properties that we can use to retrieve, add, delete, search, and clear all the elements in the map.

// We will talk about all these methods and properties, and how to use them while working with map.

//?  How to Get Values from the Map Object
// Extracting data from map is easy using the get method. Let's create an object of player1 with name and age properties. Then, the player1 object will be use as key in map. It works like this:

const player2 = { name: "kamal", age: 30 };

const playerData = new Map([
    [player2],
    [{ data: "today", price: 400 }]
]);

console.log(playerData);

// In the above code, you can see that we used the player2 object as a key in a Map in playerData. By using the get method, you can extract values from the player1 used as a key in the Map.

// It returns a map of size 1. The map contains a key which is the player1 that we created above.

// & output => key :  {name: 'kamal', age: 30}

// And it returns a value, which was an array of a single object that contains a date and price.

// & output => key :  {data: 'today', price: 400}

//? How to Add Data with the set Method
// You can add data to the Map after you create it with the help of the set method as shown below:

const player3 = new Map();
player3.set("kamal", "lawal");
console.log(player3);

// We added the key-value pair kamal and lawal to an empty map with the set method. The set method is where you set a key-value pair. The key has to be the first option and the value has to be the last. Both the key and values can be of any type of data.

//&  output  => Map(1) {'kamal' => 'lawal'}

//? How to Search an Element with the has Method
// The has method returns true if the map contains keys that match the search term. We can create a map of player with two key-value pairs as shown below.

const player4 = new Map([
    ["key", "value"],
    ["small", "medium"],
]);

console.log(player4.has("small"));

// The code will print true because the search term (small) is present in the map as a key.

// ^ true

// But it will print false if the search term (medium) is present in the map not as a key but as a value.

console.log(player4.has("medium"));

// output will be false, the searched term, (medium) is not a key but value

//? How to Delete an Element with the delete Method
// We use the delete method to delete a specific element. Delete works if the searched term matches a key in an element. In this case, we're deleting small.

player4.delete("small");
console.log(player4);

// The code will delete the key-value pair of small and medium. But, it won't work if the search term is not a key in the map.

player4.delete("value");
console.log(player4);

// It won't work, because the search term is a value in the map

//? How to Clear All Elements with the clear Method
// To clear all elements of a map, we'll use the clear method.

player4.clear();
console.log(player4);

// The code will print an empty map as its output.

//output => Map(0) {size: 0}

//? How to get all Entries in a Map with the entries Method
// The entries method is one of the Map methods you can use with for or for-of loops directly because it returns MapIterator.

//? What is a MapIterator?
// A MapIterator is an iterator returned by the entries() method of a JavaScript Map object. It returns an array-like object of key-value pairs, with each pair represented as an array containing 2 elements. The MapIterator can be used in a for...of loop to iterate over all key-value pairs in a Map object.

// With entries, you can get all the data, both the key and value of a map.

const player5 = new Map([
    ["key", "value"],
    ["small", "medium"],
    ["fruit", "another"],
]);

console.log(player5.entries());

// The values of all the keys and values will be logged as shown below:

// & output -> MapIterator {'key' => 'value', 'small' => 'medium', 'fruit' => 'another'}

//? How to Get All Keys in a Map with the keys Method
// Aside from the entries method, the keys method also returns a MapIterator. With the keys method, you can get all the keys of a map, and it also runs a for or for-of loop:

for (const player of player5.keys()) {
    console.log(player);
}

// This will print all the keys in the map as an output, like this:

// key
// small
// fruit

//? How to Get All Values in a Map with the values Method
// The values method is the last map method that returns a MapIterator and you can run a for or for-of loop directly on it. This is the method you should use when getting only values in the map is the priority.

for (const player of player5.values()) {
    console.log(player);
}

// The output of the above code will be this:

// value
// medium
// another

//? How to Enumerate Over a Map
// For easy iteration in maps, you can use the popular forEach method as shown below:

player5.forEach((key, value) => {
    const message = `I want be remeembered as the best ${key} pair ${value}`;
    console.log(message)
});

// The above code will print this as the output of the iteration:

// I want be remeembered as the best value pair key
// I want be remeembered as the best medium pair small
// I want be remeembered as the best another pair fruit


//? How to Use Size Property in Map
// You can use the property size to determine the size of the map by returning the number of elements in it.

console.log(player5.size);

// This will print out 3 as the size of the map.


//? Map vs Object – What's the Difference?
// As you can see, a map is similar to an object which raises the question – when should you use each one?

// When to use map:

// With map, you can use any type (and values) as keys.
// Map provides better performance for large quantities of data.
// Use a map for better performance when adding and removing data frequently.
// When to use an object:

// Objects can only use numbers, strings, and symbols as keys.
// Objects are perfect for small to medium-sized sets of data.
// Objects have better performance and are easier to create.