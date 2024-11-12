//*  What is an Array?
// An array is the most important and most commonly used iterable among the trio. We use it to store lists and connected data of any kind and length.

// Arrays have a lot of special array methods. They also have zero-based indexing for accessing elements. You can have duplicate elements in an array, and the element order is guaranteed.

//*  What is a Set?
// A set is a data structure used for storing data of any length and kind. Sets are iterables that have various special methods that are different from arrays.

// Some of the characteristics of sets are that the order of elements is not guaranteed, you can't access elements by index, and you can't have duplicate elements. Sets are a great choice when you want to store data without duplicates.


//? How to Create a Set
// Since we use sets to create unique values, an ID is a perfect example of something to create with a set. We can create a new set like this:

const ids = new Set();

// To create a set, you start with the new keyword along with set. In the above code, we created a set of ids which returns an empty set.

console.log(ids);
// output => Set(0) {size : 0 }


//?  How to Create a Set with a Value
// You initialize the set with an iterable by creating a set with some initial value. An iterable such as an array, set, or nodelist can be passed to the set. The example below shows a set created from an array of 4 elements.

const ids1 = new Set([3, 6, 9, 7]);
console.log(ids1)


// The output will be like this:

//& output =>  Set(4) {3, 6, 9, 7}

// From the result, the code returns a set with 4 elements.

//^ Properties and Methods of a Set
// Sets have several methods and a properties that you can use to retrieve, add, delete, check, and clear all the elements in the set. We will talk about all these methods and properties, and how to use them while working with the set.

//&? How to use the add method in a set
// We use the add method to add elements to the set. Create a set of fruits with 4 elements, it works like this:


const fruits = new Set(['apple', 'mango']);
fruits.add('banana')
console.log(fruits);

// From the above code, banana was added to the set with the help of the add method which gives us this result:

//& output => Set(3) {'apple', 'mango', 'banana'}

// Sets store unique elements, which means that adding another banana to the set won’t be accepted.

//? How to use the has method in a set
// To check if an element is contained in a set, you'll use the has method. In the code below, we'll check if a fruit set with various elements contained a specific banana element.

console.log(fruits.has('banana'));

// & output => true

// This method will return false, because the element searched for is banana, which is not in the set. If it had been present, we would've gotten true back.


//? How to use the delete method in a set
// You delete an item from a set using the "delete" method. The example below shows the "delete" method being used on a set of fruits containing 3 elements to delete one of the elements.

fruits.delete('apple');
console.log(fruits);

// The code prints out a new set of 2 elemets. If you try deleting an element that is not in the set, it ignores it.

//& output => Set(2) {'mango', 'banana'}

// ? How to use the clear method in a set
// The clear method is used to clear all the elements in the set. With a set of fruits containing 3 elements, we use the delete method to delete one of the elements.

const fruits1 = new Set(['apple', 'mango', 'banana']);
fruits1.clear('apple');
console.log(fruits1)

// The code prints out a new set of 0 elements, as the clear method will return a set without any elements.


// & output => Set(0) {size: 0}

//? How to use the entries method in a set
// You can retrieve all elements in a set using the "entries" method, which returns an iterable. You can then use a for loop or for-of loop to loop through the values.

// The example below shows the creation of a set of fruits containing 5 elements, followed by the use of the "entries" method to loop through all elements of the array.


const fruits2 = new Set([100, 160, 200, 400, 300]);
for (const fruit of fruits2.entries()) {
    console.log(fruit)
};

// It returns an iterable of arrays, each with two elements.

// (2) [100, 100]
// (2) [160, 160]
// (2) [200, 200]
// (2) [400, 400]
// (2) [300, 300]


//? How to use the values method in a set
// You retrieve the values in a set by using the "values" method, which returns an iterable. You can then use a for loop or for-of loop to loop through the values.

// The example below shows the creation of a set of fruits with 4 elements and the use of the "values" method to loop through the elements with a for-of loop.


const fruits3 = new Set([100, 160, 200, 400, 300]);
for (const fruit of fruits3.values()) {
    console.log(fruit)
};

// It returns an iterable, each with a single value:

// 100
// 160
// 200
// 300


// ? How to use the size property in a set
// You use the size property to determine the size of the set by returning the number of elements in it. To demonstrate this, we'll create a set of fruits that contains 3 elements.

const fruits4 = new Set(['apple', 'mango', 'banana']);
console.log(fruits4.size);

//& output =>  3


//? How to use forEach in a set
// You can easily enumerate a set by using "forEach." The example below shows the creation of a set of fruits with some elements, followed by the use of "forEach" to print each element of the set.


const fruits5 = new Set([100, 160, 200, 400, 300]);
fruits5.forEach((fruit) => {
    console.log(fruit)
});

// The code prints each element of the set like this:

// output => ;
//  100
//  160
//  200
//  400
//  300



// ? How to use a set to Get Unique Value from an Array.
// You can remove duplicate values from an array by using a set. The example below shows the creation of an array of duplicated numbers, followed by passing the array into a set to get all unique numbers, free from duplicates.



const numbers_$1 = [1, 2, 4, 1, 6, 8, 2, 5, 9, 2, 0, 9, 7, 6, 3, 4, 6, 7, 8, 4, 2, 1, 5, 8, 9, 0, 2, 4, 5, 3, 2, 6, 8, 9, 6];

const numbers1 = new Set(numbers_$1);
console.log(numbers1);


// The above code shows an array of numbers with different duplicated numbers. The array was then passed on to the set of numbers and the output is shown below.

//& output => Set(10) { 1, 2, 4, 6, 8, 5, 9, 0, 7, 3 }

//The code above shows that the set has removed all the duplicated numbers and now has a size of 10.

// As you can see, set is a data structure that helps you manage unique values.

//? Benefits of Sets over Arrays
// Arrays and sets are both data structures used for storing collections of elements. But sets have a slight edge over arrays because of:

// Uniqueness: With a set, duplicates are removed to reduce the size of the data structure (unlike an array which stores duplicates).
// Manipulating collections: It is easy to combine a set with other sets to perform various operations like intersections, unions, and differences.
// Performance: Because of the implementation using hash tables, set offers faster lookups and membership tests.



// ? Conclusion
// In this tutorial, you learned about the relationship between arrays, sets, and maps.

// We created, modified, and deleted elements in maps and sets. We compared maps and objects, and lastly, we talked about the benefits of sets over arrays.