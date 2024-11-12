const use_r = {
    username: "sohan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

//* this keyword currentcontext ko reffer karata hai !


// use_r.welcomeMessage();
// use_r.username = "sam";
// use_r.welcomeMessage();

// console.log(this); // {}

// function chai() {
//     let username = 'hitesh';
//     console.log(this.username) // undefined
// }
// chai();


// const chai = function() {
//     let username = "sohan";
//     console.log(this.username) // undefined
// }
// chai()

// const chai = () => {
//         let username = "sohan";
//         // console.log(this.username) // undefined
//         console.log(this) // {}
//     }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "sohan" })

console.log(addTwo(2, 3))

const myaaray = [2, 3, 4, 55, 9];

myaaray.forEach((item) => console.log(item))


// * This key word

function Hii() {
    this.hello = "world"
    console.log(this); // object reffer
}

new Hii();

const User = {
    firstName: "Sohan",
    lastName: "Singh",
    tags: ["a", 'b', 'c'],
    printTags: function() {
        console.log(this); // object reffer
        function hs() {
            console.log(this) // [window object]
        }
        hs();
    },
    // printTags: () => { // dont use arrow function for method
    //     console.log(this); // [window object]
    //     function hs() {
    //         console.log(this) // [window object]
    //     }
    //     hs();
    // },
    // printTags: function() {
    //     console.log(this); // object reffer
    //     const hs = () => {
    //         console.log(this) // object reffer
    //     }
    //     hs();
    // },
    // printTags() {
    //     // console.log(this.tags);
    //     this.tags.forEach(function(tag) {
    //         console.log(tag);
    //         console.log(this.firstName); // [window object]
    //     }, this)
    // },
    // fullName() {
    //     // return `${this.firstName} ${this.lastName}`;
    //     function getAge() {
    //         console.log("geeting Age")
    //         console.log(this); // [window object]
    //     }
    //     getAge();
    //     console.log(this); // [object refer]
    // }
}


// const body = document.querySelector("body");

// body.addEventListener('click', function(e) {
//     console.log(e.target);
//     console.log(this) // current context
// })


// body.addEventListener('click', (e) => {
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(this) // [window object]
// })


class UserOne {
    constructor() {
        this.firstName = "Sohan"
        console.log(this) // object reffer
    }

    getUser() {
        console.log(this) // object reffer
    }
}

//* JavaScript this Keyword
// In JavaScript, this keyword refers to the current context or scope within which code is executing. Its value is determined by how a function is called, and it can dynamically change depending on the invocation context.

// The this keyword refers to different objects depending upon how it is used:

// When used within a method of an object, this points to that object.
// When used by itself, this points to the global object.
// Within a function, this typically points to the global object.
// In a function under strict mode, this becomes undefined.
// During an event, this points to the element that triggered the event.
// Methods such as call(), apply(), and bind() can reassign this to any desired object.

//& JavaScript this Keyword Examples:
// 1. Using this in a Method
// In the context of an object method in JavaScript, the `this` keyword refers to the object itself, allowing access to its properties and methods within the method’s scope. It facilitates interaction with the object’s data and behavior, providing a way to access and manipulate its state.

// Example: Below is an example of this in Method.

const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

person.greet(); // Output: Hello, my name is John and I am 30 years old.

// Explanation:

// We have an object person with properties name and age, and a method greet().
// Inside the greet() method, this.name refers to the name property of the person object, and this.age refers to the age property.
// When we call person.greet(), this refers to the person object itself. So, this.name and this.age access the name and age properties of the person object, allowing us to log a personalized greeting message to the console.


// 2. Using this in a Function
// In a JavaScript function, the behavior of the this keyword varies depending on how the function is invoked.

// Syntax:

function exampleFunction() {
    console.log(this); // Refers to the current execution context [window object]
}
// Example: Below is an example of this in a function.

function greet() {
    console.log('Hello, my name is ' + this.name);
    console.log(this) //[window object]
}

const person1 = {
    name: 'John',
    sayHello: greet // object Refers
};

const anotherPerson = {
    name: 'Alice' // object Refers
};

greet(); // Output: Hello, my name is undefined
person1.sayHello(); // Output: Hello, my name is John
greet.call(anotherPerson); // Output: Hello, my name is Alice


// Explanation:

// When greet() is called directly, this refers to the global object (in non-strict mode), or undefined (in strict mode), since the function is invoked without an explicit context.

// When sayHello() is called as a method of the person object, this refers to the person object itself, allowing access to its name property.

// The call() method is used to explicitly specify the context for this. When greet.call(anotherPerson) is called, this refers to the anotherPerson object, allowing access to its name property.


// 3. Using this alone
// When used alone in JavaScript, outside of any specific context, the behavior of the this keyword depends on whether the code is running in strict mode or not.

// Example:


console.log(this); // {} // [window object]


// Explanation:

// In non-strict mode, this refers to the global object (e.g., window in browsers, global in Node.js), representing the global scope.
// In strict mode, this is undefined when used alone outside of any function or object context. This behavior prevents accidental use of the global object and encourages safer coding practices.


// 4. Implicit Binding
// When we call a function as a method of the object this keyword refers to the calling object

// Example: In this example, we will see the implicit binding of this keyword.

const person2 = {
    name: "ram",
    age: 22,
    greet: function() {
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}
console.log(person2.greet()); // Hello ram, you are 22 years old


// Output: Here this keyword is referring to the person2 object so it can access name and age values.


// 5. Explicit Binding
// When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword default reference is changed to the object called using the above-specified methods.

// Example: In this example, we will see the explicit binding of this keyword.


function ageVerify() {
    if (this.age > 18) {
        console.log("Yes you can drive");
    } else {
        console.log("No you cannot drive");
    }
}

const per1 = { age: 21 };
const per2 = { age: 16 };
ageVerify.call(per1);
ageVerify.call(per2);

// Output
// Yes you can drive
// No you cannot drive


// 6. Default Binding
// When this keyword is used in global scope this is set to window object.

// Example: This example shows the Default binding.


const age = 22;

function verifyAge() {
    return this.age; // undefined
}

console.log(verifyAge());


// 7. Arrow Function Binding
// When this is used in the arrow function then this has lexical scope so without the function keyword this is unable to refer to the object in the outer scope.

// Example: This example shows the arrow function binding.

const person4 = {
    name: "ram",
    age: 22,
    greet: () => {
        return `Hello , you are ${this.age} years old`
    }
}
console.log(person4.greet());

// Output
// Hello , you are undefined years old


// What's the THIS keyword?

// Ok, so let's start by defining what the this keyword is. In JavaScript, the this keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.

// And there's a few different ways in which you can use the this keyword, so let's see the most common cases and how it behaves in each of them.

// An important comment is that this is not a variable – it's a keyword, so its value can't be changed or reassigned.

// How to Call this By Itself
// If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global window object.

// If you print it like console.log('this alone', this); you'll get this in your console: [object Window].

// Or this if you expand it:


//? : How to Call this in an Object Method
// But if we call this within an object method, like in the following example:


const person_1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    getThis: function() {
        return this;
    }
};

console.log('this in object method', person_1.getThis());

// We'll see that this no longer refers to the object itself:

// Output
// this in object method {firstName: 'John', lastName: 'Doe', id: 5566, getThis: ƒ}


// And given this, we can use this to access other properties and methods from the same object:

const person_2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    getFullName: function() {
        return this.name + ' ' + this.lastName;
    }
};

console.log('this in object method', person_2.getFullName());

//output
// this in object method undefined Doe


//? : How to Call this in a Function
// If we call this within a function like in the following example:

function test() {
    console.log('this in a function', this);
}

test();

// this will now refer again to the general window object, and we'll get this in our console: [object Window].


// A note about arrow functionss

const person_3 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: () => this.name + ' ' + this.surname
}

console.log(person_3.sayName()); //  undefined

//? : A note about strict-mode
// When using strict-mode, calling this within a function will return undefined.

"use strict";

function show() {
    console.log(this);
}

show(); // [window object]


// As a side comment, if you're not familiar with what strict-mode is, following the MDN docs:

// JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code.
// Strict mode makes several changes to regular JavaScript semantics:

// Eliminates some JavaScript silent errors by changing them to throw errors.
// Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
// Prohibits some syntax likely to be defined in future versions of ECMAScript.

//? : How to Use the Call Method
// With call we can invoke a method passing an owner object as an argument. Said in a simpler way, we can call a method indicating to which object the keyword this will refer to.

// Let's see an example:


const person_4 = {
    name: "sohan",
    surname: "singh",
    sayName: function() {
        return this.name + " " + this.surname
    }
};

const person_5 = {
    name: 'kishan',
    surname: "singh",
}

console.log(person_4.sayName.call(person_5)) // kishan singh


// Here we have two person objects. Each with its name and surname properties, and the person1 object has a sayName method.

// Then we call the person1 sayName method in the following way: person1.sayName.call(person2).

// By doing this, we're indicating that when the sayName method executes, the this keyword won't refer to the object that "owns" the method (person1) but to the object we passed as parameter (person2). As a consequence, we get this in our console:


// Keep in mind that if the given method accepts arguments, we can pass them as well when we invoke it with call:

const person11 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(city, country) {
        return this.name + " " + this.surname + ", " + city + ", " + country;
    }
}

const person22 = {
    name: 'Jimena',
    surname: 'Juarez'
}

console.log(person11.sayName.call(person22, "DF", "Mexico"));
// output
// Jimena Juarez, DF, Mexico


// ? : How to Use the Apply Method
// The apply method works very similarly to call. The only difference between them is that call accepts parameters as a list separated by colons (as the last example we saw), and apply accepts them as an array.

// So if we want to replicate the same example using apply we'd have to do it like this:


const person12 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(city, country) {
        return this.name + " " + this.surname + ", " + city + ", " + country;
    }
}

const person21 = {
    name: 'Jimena',
    surname: 'Juarez'
}

console.log(person12.sayName.apply(person21, ["DF", "Mexico"])); // Jimena Juarez, DF, Mexico


// ? : How to Use the Bind Method
// Same as call and apply , the bind method indicates the object to which the this keyword will refer when a given method executes.

// But the difference with bind is that it will return a new function, without executing it. While with call and apply the function executed right away, using bind we must execute it separately.

// Let's see this in an example:

const personOne = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function() {
        return this.name + " " + this.surname
    }
}

const personTwo = {
    name: 'Jimena',
    surname: 'Juarez'
}

const sayPerson2Name = personOne.sayName.bind(personTwo)

console.log(sayPerson2Name()) // Jimena Juarez


//? : 2. Arrow functions do not create their own this binding
// In normal functions, a this variable is created which references the objects that call them. For example:

const obj = {
    name: 'deeecode',
    age: 200,
    print: function() {
        console.log(this)
    }
}

obj.print();
// {
//   name: 'deeecode',
//   age: 200,
//   print: [Function: print]
// }

// As you can see here, the this in the print method points to obj, which is the object that calls the method.


// Here's another example:

const obj1 = {
    name: 'deeecode',
    age: 200,
    print: function() {
        function print2() {
            console.log(this)
        }

        print2()
    }
};

obj1.print(); // Window


// Here, we have two functions. The first one is print which is a method of the obj object. The second is print2 which is a function declared inside print. print2() is also called directly.

// In this case, print is called by obj (obj.print()) but no object calls print2 (print2()). So the this in print2 would reference the window object by default.

// Now let's see what happens with an arrow function.


const obj3 = {
    name: 'deeecode',
    age: 200,
    print: () => {
        console.log(this)
    }
}

obj3.print(); // Window


// By using an arrow function for print, this function does not automatically create a this variable. As a result, any reference to this would point to what this was before the function was created.

// As you see in the result, this was pointing to the Window object before print was created.

// Let's see another example:


const obj4 = {
    name: 'deeecode',
    age: 200,
    print: function() {
        const print2 = () => {
            console.log(this) // object refers
        }

        print2()
    },
    // print: () => {
    //     function print2() {
    //         console.log(this) // window
    //     }

    //     print2()
    // },
    // print: () => {
    //     const print2 = () => {
    //         console.log(this) // window
    //     }

    //     print2()
    // },
}

obj4.print();
console.log(typeof obj4.print) // function
    // {
    //   name: 'deeecode',
    //   age: 200,
    //   print: [Function: print]
    // }

// Here, we have print as a normal function which means a this variable is automatically created in it. Then we have print2 which is an arrow function.

// Because obj is calling print (as in obj.print()), the this in print would point to obj.

// Since print2 is an arrow function, it doesn't create its own this variable. Therefore, any reference to this would point to what the value of this was before the function was created. In this case where obj calls print, this was pointing to obj before print2 was created. As you can see in the results, by logging this from print2, obj is the result.

function Hello() {
    console.log("Hello Friendes")
};
Hello();
console.log(typeof Hello) //  function




//? ⭐ What About this?
// The handling of this is also different in arrow functions compared to regular functions.

// In short, with arrow functions there are no binding of this.

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

// With arrow functions the this keyword always represents the object that defined the arrow function.

// Let us take a look at two examples to understand the difference.

// Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

// The first example uses a regular function, and the second example uses an arrow function.

// The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.