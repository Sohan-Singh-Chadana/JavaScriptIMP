// underStand Callback

// function myFunc(callback) {
//     console.log("Function is doing task 1 ");
//     callback();
// }

// function myFunc2() {
//     console.log('Function is doing task 2 ')
// }
// myFunc(myFunc2)

// myFunc(() => {
//     console.log('Function is doing task 2 ')
// })


//* example 1

// function getTwoNumbersAndAdd(number1, number2, callback) {
//     if (typeof number1 === "number" && typeof number2 === 'number') {
//         callback(number1, number2)
//     } else {
//         console.log("wrong data type")
//     }
// }


// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2)
// }

// getTwoNumbersAndAdd("4", 5, addTwoNumber)


//* example 2

function getTwoNumbersAndAdd(number1, number2, onSuccess, onError) {
    if (typeof number1 === "number" && typeof number2 === 'number') {
        onSuccess(number1, number2)
    } else {
        onError()
    }
}

function addTwoNumber(num1, num2) {
    console.log(num1 + num2);
};

function onFail() {
    console.log("wrong data type");
    console.log('Please pass numbers only');
};

// getTwoNumbersAndAdd(4, "5", addTwoNumber, onFail)


// ! code simple use arrow function
// getTwoNumbersAndAdd("4", 5, (num1, num2) => {
//     console.log(num1 + num2)
// }, () => {
//     console.log("wrong data type");
//     console.log('Please pass numbers only')
// })