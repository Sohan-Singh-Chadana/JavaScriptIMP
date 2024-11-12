// Immediately Invoked Function Expressions (IIFE );

(function chai() {
    // named iife
    console.log(`DB CONNECTED`)
})();

// chai();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('sohan');



//Use cases
// & Avoid polluting the global namespace
// & Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

// वैश्विक नामस्थान को प्रदूषित करने से बचें
// चूँकि हमारे एप्लिकेशन में विभिन्न स्रोत फ़ाइलों से कई फ़ंक्शन और वैश्विक चर शामिल हो सकते हैं, इसलिए वैश्विक चर की संख्या को सीमित करना महत्वपूर्ण है। यदि हमारे पास कुछ आरंभिक कोड हैं जिन्हें हमें दोबारा उपयोग करने की आवश्यकता नहीं है, तो हम IIFE पैटर्न का उपयोग कर सकते हैं। चूँकि हम कोड का दोबारा उपयोग नहीं करेंगे, इस मामले में IIFE का उपयोग फ़ंक्शन घोषणा या फ़ंक्शन अभिव्यक्ति का उपयोग करने से बेहतर है

// आईआईएफई क्या है?
// इंस्टेंटली इनवोक्ड फंक्शन एक्सप्रेशन (IIFE) एक अद्वितीय जावास्क्रिप्ट निर्माण है जो फ़ंक्शन एक्सप्रेशन, क्लोजर और तत्काल निष्पादन की शक्ति को जोड़ता है।

// IIFE एक फ़ंक्शन अभिव्यक्ति है जिसे इसकी घोषणा के तुरंत बाद परिभाषित और लागू किया जाता है। यह कोड का एक अलग और स्व-निहित ब्लॉक है जो एक बार निष्पादित होता है, और इसकी प्राथमिक विशेषताओं में शामिल हैं:

// तत्काल निष्पादन: IIFE फ़ंक्शंस को तुरंत निष्पादित किया जाता है, यह सुनिश्चित करते हुए कि उनके भीतर का कोड एक अलग फ़ंक्शन कॉल की आवश्यकता के बिना चलता है।
// एनकैप्सुलेशन: IIFE वेरिएबल्स के लिए एक निजी दायरा बनाता है, उन्हें वैश्विक दायरे को प्रदूषित करने से रोकता है और आपके कोड के अन्य हिस्सों के साथ टकराव से बचाता है।
// अनाम या नामित: आप IIFE को एक अनाम फ़ंक्शन (बिना नाम के) या नामित फ़ंक्शन (नाम के साथ) के रूप में परिभाषित कर सकते हैं। अनाम IIFE अधिक सामान्य है, लेकिन नामित IIFE डिबगिंग के लिए सहायक हो सकता है।

//* syntax
// (function () {
//     // …
//   })();

//   (() => {
//     // …
//   })();

//   (async () => {
//     // …
//   })();

// * IIFE Explained: Immediately Invoked Function Expressions

// What is an IIFE?
// An Immediately Invoked Function Expression (IIFE) is a unique JavaScript construct that combines the power of function expressions, closures, and immediate execution.

// An IIFE is a function expression that is defined and invoked immediately after its declaration. It’s an isolated and self-contained block of code that executes once, and its primary characteristics include:

// Immediate Execution: IIFE functions are executed right away, ensuring that the code within them runs without the need for a separate function call.
// Encapsulation: IIFE creates a private scope for variables, preventing them from polluting the global scope and avoiding conflicts with other parts of your code.
// Anonymous or Named: You can define IIFE as an anonymous function (without a name) or a named function (with a name). Anonymous IIFE is more common, but named IIFE can be helpful for debugging.


// *Syntax for Declaring and Invoking IIFE
// The syntax for declaring and invoking an IIFE is straightforward. Here’s the general structure:


// Syntax for declaring and invoking IIFE
// In this syntax:

// The function is wrapped in parentheses (function(){ ... }). This grouping is necessary to ensure that the JavaScript parser interprets it as a function expression rather than a function declaration.

// The function is immediately invoked by appending () to the closing parenthesis,
//! like this (function(){ ... })();.

// Let’s explore some basic examples to understand how IIFE works in practice:


//* Anonymous IIFE


(function() {
    let message = "Hello , I'm an Anonymous IIFE!";
    console.log(message)
})(); // Hello , I'm an Anonymous IIFE!

// In this example, an anonymous IIFE encapsulates the message variable, preventing it from leaking into the global scope.


// * Named IIFE

(function greet() {
    let name = "Sohan";
    console.log(`Hello ${name}!`)
})(); // Hello Sohan!

// Here, we define a named IIFE called greet. While named IIFE is less common, it can be useful for debugging and stack trace identification.

//* Returning Values

let result = (function() {
    let x = 10;
    let y = 20;
    return x + y;
})();
console.log(result) // 30


// In this example, the IIFE computes the sum of x and y and returns the result, which is then assigned to the result variable.

// IIFE is a versatile JavaScript pattern with many applications, from encapsulating code and avoiding global pollution to enabling modular programming and providing immediate execution.


// * Advantages and Use Cases
//~ 1. Encapsulation
// IIFE provides encapsulation, allowing you to create private scopes for variables and functions. This prevents variable conflicts and unintended modifications of data in the global scope. Encapsulation is crucial in larger applications and when working with multiple libraries.

//~ 2. Avoiding Global Pollution
// By encapsulating code within IIFE, you avoid polluting the global namespace. This is particularly important when you want to minimize naming clashes with other scripts or libraries in your project. It keeps your code modular and self-contained.

//~ 3. Immediate Execution
// IIFE executes code immediately after declaration. This feature is beneficial when you need to perform initialization tasks, configure settings, or kickstart an application. It ensures that your code runs exactly when and where you intend.

//~ 4. Data Privacy
// IIFE allows you to create closures, which help maintain data privacy. You can hide variables and functions inside an IIFE, exposing only what’s necessary. This concept is fundamental to the Module Pattern, a widely-used design pattern in JavaScript.


//? Expample for fisheryates shuffle algo
const fisherYates = (function shuffle() {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
})();
console.log(fisherYates);

//* Real-World Scenarios for IIFE
//~ 1. Isolating Code
// When integrating third-party scripts or libraries, you can wrap them in an IIFE to isolate their functionality and avoid conflicts with your code.

/*
(function(){
    Third-party library code here
})();
*/

//~ 2. Reducing Global Variables
// To minimize the number of global variables in your application, you can use IIFE to define modules or components, exposing only a limited interface to the global scope.

/*
let MyModule = (function() {
    let privateVariable = "I'm privete!";

    function privateFunction() {
        console.log('privateFunction')
    }
    return {
        publicFunction: function() {
            console.log('publicFunction')
        }
    };
})();
console.log(MyModule)
*/

//* 3. Managing Initialization
// IIFE is useful for initializing your application by configuring settings, setting up event listeners, or bootstrapping the application.

/*
(function(){
    Initialization code here
})();
*/


// Code Examples Demonstrating IIFE
// Module Pattern

let Calculator = (function() {
    let result = 0;

    function add(x, y) {
        result = x + y
    }

    function subtract(x, y) {
        result = x - y;
    }

    return {
        addFunction: add,
        subtract: subtract,
        getResult: function() {
            return result;
        }
    };
})();

Calculator.addFunction(5, 3);
console.log(Calculator.getResult());

// In this example, we use IIFE to create a Calculator module with private data and exposed methods.


//* Named vs. Anonymous IIFE and Their Distinctions
// ?Named IIFE
// Named IIFE functions have a unique identifier, making it easier to identify them in stack traces and debugging tools.
// They can be called recursively, allowing the function to reference itself.
// Naming IIFE can improve code self-documentation by giving it a meaningful name.
// ?Anonymous IIFE
// Anonymous IIFE functions are more concise and often preferred for short-lived utility functions.
// They are generally used when you don’t need to reference the function elsewhere in your code.
// Anonymous IIFE is suitable for encapsulating code that doesn’t require a name.

// Examples of Various IIFE Patterns

// Basic Anonymous IIFE
(function() {
    console.log("Anonymous IIFE")
})();

// Basic Named IIFE

(function greet() {
    console.log("Hello From Named IIFE")
})();

// IIFE with Parameters

(function(x, y) {
    let sum = x + y;
    console.log("sum", sum)
})(5, 6);


// Recursive Named IIFE

(function countDown(n) {
    if (n > 0) {
        console.log(n)
        countDown(n - 1)
    }
})(5);

// Anonymous IIFE for Isolation

let result1 = (function() {
    let x = 10;
    let y = 20;
    return x + y;
})();
console.log(result1) // 30

// These examples demonstrate various ways to structure and use IIFE in your JavaScript code, depending on your specific needs and preferences.

// IIFE variations provide flexibility in code organization and execution, and understanding when to use named or anonymous IIFE can improve code readability and maintainability.

//* Lexical Scoping and IIFE
// One of the most powerful features of Immediately Invoked Function Expressions (IIFE) is their role in creating lexical scope within JavaScript code.

// Creating Private Variables
// IIFE plays a crucial role in encapsulating code and variables within a private scope. This isolation ensures that variables declared within an IIFE are not accessible from the global scope or other parts of your code. This feature is essential for maintaining data privacy and preventing variable conflicts.

// Here’s an example that demonstrates the use of IIFE to create private variables:

let counterModule = (function() {
    let count = 0;
    return {
        increment: function() {
            count++
        },
        decrement: function() {
            count--
        },
        getCount: function() {
            return count;
        }
    }
})();

counterModule.increment();
counterModule.increment();
console.log(counterModule.getCount());
// console.log(count)

//In this example, the count variable is encapsulated within the IIFE, making it inaccessible from outside the counterModule.

//* Avoiding Global Scope Pollution
// One of the common issues in JavaScript development is global scope pollution, where variables declared in one part of the code can unintentionally affect other parts. IIFE helps mitigate this problem by keeping variables and functions within their own scope, preventing global pollution.

// Consider this scenario:

let name_$ = "sohan"; // Global Variable

(function() {
    let name_$ = "Devendra" // LOcal Variable
    console.log("Inside IIFE", name_$)
})();
console.log("Outeside IIFE", name_$);

// In this case, the global variable name remains unaffected by the local variable name declared inside the IIFE. This separation of scope helps maintain a clean global namespace.

// * Illustrative Example of Lexical Scoping with IIFE yash

// Module Pattern

const userProfile = (function() {
    let username = "user123";

    function getUsername() {
        return username;
    }

    function setUserName(newName) {
        username = newName;
    }

    return {
        getUsername: getUsername,
        setUserName: setUserName
    };
})();

console.log(userProfile.getUsername()); // user123
userProfile.setUserName("newUser");
console.log(userProfile.getUsername());

// In this example, the username variable is encapsulated within the IIFE, and the functions getUsername and setUsername provide controlled access to it.