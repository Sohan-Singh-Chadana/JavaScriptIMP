//* Object

// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

//? Description

// Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). The only objects that don't inherit from Object.prototype are those with null prototype, or descended from other null prototype objects.

// Changes to the Object.prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior. To make it more secure, Object.prototype is the only object in the core JavaScript language that has immutable prototype — the prototype of Object.prototype is always null and not changeable.

//? Object prototype properties

// You should avoid calling any Object.prototype method directly from the instance, especially those that are not intended to be polymorphic (i.e. only its initial behavior makes sense and no descending object could override it in a meaningful way). All objects descending from Object.prototype may define a custom own property that has the same name, but with entirely different semantics from what you expect. Furthermore, these properties are not inherited by null-prototype objects. All modern JavaScript utilities for working with objects are static. More specifically:

//& valueOf(), toString(), and toLocaleString() exist to be polymorphic and you should expect the object to define its own implementation with sensible behaviors, so you can call them as instance methods. However, valueOf() and toString() are usually implicitly called through type conversion and you don't need to call them yourself in your code.

//& __defineGetter__(), __defineSetter__(), __lookupGetter__(), and __lookupSetter__() are deprecated and should not be used. Use the static alternatives Object.defineProperty() and Object.getOwnPropertyDescriptor() instead.

//& The __proto__ property is deprecated and should not be used. The Object.getPrototypeOf() and Object.setPrototypeOf() alternatives are static methods.

//& The propertyIsEnumerable() and hasOwnProperty() methods can be replaced with the Object.getOwnPropertyDescriptor() and Object.hasOwn() static methods, respectively.

//& The isPrototypeOf() method can usually be replaced with instanceof, if you are checking the prototype property of a constructor.

//& In case where a semantically equivalent static method doesn't exist, or if you really want to use the Object.prototype method, you should directly call() the Object.prototype method on your target object instead, to prevent the object from having an overriding property that produces unexpected results.

//* Object.assign()
//^ The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true


/*
Syntax
Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, /* …, */
/*sourceN);
 */


// Syntax:
// Object.assign(target, ...sources);
// Parameters:
// target: It is the target object to which values and properties have to be copied.
// sources: It is the source object from which values and properties have to be copied.
// Return Value:
// Object.assign() returns the target object.

// Example 1: In this example, the properties of the object “obj1” i.e. { a: 10 } is copied to the target object “new_obj”.

const obj1_1 = { a: 1 };

const new_obj = Object.assign({}, obj1_1)
const obj1_2 = obj1_1;
// console.log(new_obj) // @13051
// console.log(obj1_1) // @17567
// console.log(new_obj === obj1_1) // false
// console.log(obj1_1 === obj1_2) // true

// Example 2: In this example, the properties of three source objects “obj1, obj2, obj3” are copied to the target object “new_obj”. The value of any pre-existing key-value pair that existed in the previous object will be over-written. For example, obj1.b which has a value of 10 will now be overwritten with obj2.b which has a value of 20

let objOne = { a: 10 }
let objTwo = { b: 20 }
let objThree = { c: 30 }

// let newObj1 = Object.assign(objOne, objTwo, objThree);
let newObj1 = Object.assign({}, objOne, objTwo, objThree);
// console.log(newObj1) // { a: 10, b: 20, c: 30 }

// Example 3: In this example, the properties of three source objects “obj1, obj2, obj3” are copied to the target object “new_obj” and the target object gets the overwritten values.

const objOne_1 = { a: 10, b: 10, c: 10 };
const objTwo_2 = { b: 20, c: 20 };
const objThree_3 = { c: 30 };

const newObjOne = Object.assign({}, objOne_1, objTwo_2, objThree_3);

// console.log(newObjOne) //  { a: 10, b: 20, c: 30 }

//Explanation:
// In the above code the properties are overwritten by other objects that have the same properties later in the same order of parameters.

// Applications:
// Object.assign() is used for cloning an object, to merge objects with the same properties.
// Errors and Exceptions:
// A TypeError is raised if the property is non-writable.
// The target object can be changed only if the properties are added before the error is raised.
// Object.assign() does not throw on null or undefined source value

//* JavaScript Object create() Method
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.


// JavaScript object.create() method is used to create a new object with the specified prototype object and properties. Object.create() method returns a new object with the specified prototype object and properties.

// Syntax:

// Object.create(prototype[, propertiesObject])

// Parameters:

// prototype: It is the prototype object from which a new object has to be created.
// propertiesObject: It is an optional parameter. It specifies the enumerable properties to be added to the newly created object.

// Return Value: Object.create() returns a new object with the specified prototype object and properties.

function fruits() {
    this.name = "fruit 1";
}

function apple() {
    fruits.call(this)
}

// apple.prototype = Object.create(fruits.prototype);
// console.log(Object.create(fruits.prototype))
const app = new apple();
// console.log(app.name) // fruit 1

// Example 2: In this example, there are two functions “fruits” and “apple”.A new instance of apple is created which is named “app” and it has been specified with the prototype and property of “fruits” i.e. this.name = ‘fruit 1’ and this .season = ‘summer’.


function fruit1() {
    this.name = "fruit One";
    this.season = "Summer";
}

function apple1() {
    fruit1.call(this)
}

apple.prototype = Object.create(fruit1.prototype);
const app_$ = new apple1();

// console.log(app_$.name) // fruit One
// console.log(app_$.season) // Summer



//~ Applications:

// Object.create() is used for implementing inheritance.

// Exceptions :

// Object.create( ) method throws a TypeError exception if the propertiesObject parameter isn’t null.
// Object.create( ) method throws a TypeError exception if the propertiesObject parameter is a non-primitive object.




//* Tip 5: shallow / deep copy object to avoid object mutability
// There are few tricks and methods which allows the object to be copied to another object variable to avoid mutating the original object. Based on the requirement we can create a shallow copy or deep copy of the original object or else completely store the reference of the original object into another object variable.

//! avoid using Object.assign() in this way:
const originalObj = { a: 1, b: 2 };
const copiedObj = Object.assign(originalObj, { c: 3 }); // This mutates 'originalObj';
delete copiedObj.a; // This will be deleted from the originalObj  as well!!!

// console.log(originalObj)// { b: 2, c: 3 }
// console.log(copiedObj) // { b: 2, c: 3 }

//! shallow copy using Object.assign:
const originalObj1 = { a: 1, b: 2 };
const copiedObj1 = Object.assign({}, originalObj1, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }
delete copiedObj1.a;

// console.log(originalObj1); // { a: 1, b: 2 }
// console.log(copiedObj1); //   { b: 2, c: 3 }, 'a' is deleted from copiedObj


//! shallow copy using spread object syntax:
const originalObj2 = { a: 1, b: 2 };
const copiedObj2 = {...originalObj, c: 3 } // copy => { a: 1, b: 2, c: 3 }
delete copiedObj2.a;

// console.log(originalObj2) // {a: 1, b: 2}
// console.log(copiedObj2) // {b: 2, c: 3}, 'a' is deleted from copiedObj

//! deep copy using JSON.parse and JSON.stringify
const originalObj3 = {
    a: 1,
    b: {
        b1: 1,
        b2: 2
    }
};
const copiedObj3 = JSON.parse(JSON.stringify(originalObj3)) // copy => { a: 1, b: {b1: 1, b2: 2} }
delete copiedObj3.b.b1

console.table(originalObj3) // {a: 1, b: {b1: 1, b2: 2}}
console.table(copiedObj3) // {a: 1, b: { b2: 2}}

delete copiedObj3.b.b2
console.table(copiedObj3) //  { a: 1, b: {} }


//* JavaScript Object defineProperty() Method
// The Object.defineProperty() method in JavaScript is a Standard built-in object which defines a new property directly on an object or it can also modify the existing property of an object and returns the object.

// The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

// Syntax:

//Object.defineProperty(obj, prop, descriptor)

// Parameter: This method accepts three parameters as mentioned above and described below:

// Obj: This parameter holds the Object on which the user is going to define the property.
// Prop: This parameter holds the name of a property that is going to be defined or modified.
// Descriptor: This parameter holds the descriptor for the property being defined or modified.
// Return Value: This method returns the object which is passed as the argument to the function.


// Below examples illustrate the Object.defineProperty() method in JavaScript:

// Example 1: In this example, we will add new properties to an object and print it in the console using the Object.defineProperty() method in JavaScript.



const geek1 = {};
Object.defineProperty(geek1, "prop1", {
    value: 65,
    writable: false
})

geek1.prop1 = 7;
console.log(geek1.prop1); // 65

const geek2 = {};
Object.defineProperty(geek2, "prop2", {
    value: 54,
    value: 23,
    value: 12 * 9,
});

geek2.prop2;
console.log(geek2.prop2) // 108

const nmsohan = {
    name: "sohan",
    age: 23,
};
// Object.freeze(nmsohan)
Object.seal(nmsohan);
// console.log(nmsohan)
// nmsohan.age = 24
// nmsohan.address = "Ahmedabad"
// console.log(nmsohan)

console.log(Object.isSealed(nmsohan)) // true