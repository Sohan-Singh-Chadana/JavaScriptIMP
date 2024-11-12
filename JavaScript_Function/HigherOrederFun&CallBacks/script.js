// debugger

// Higher order function
function a(b) {
    console.dir(b)
    b();
};



// function sayHi() {
//     console.log("Hayyyyy")
// };


// a('sohan')
// a(sayHi)

// * callback function

a(function() {
    console.log("Hayyyyy")
});



// const x = sayHi

// sayHi()
// x();

// x.age = 78



// a("Hii")
// a({ username: "sohan", userAge: 23 });
// a([1, 2, 3, 4])

// console.dir(a);

// a.age = 43;



//& High Order functions and callback
function add(a, b, cb) {
    let result = a + b;
    cb(result);

    return () => console.log(result)
}

// function showResult(result) {
//     console.log(result)
// }
// add(2, 4, showResult);

// add(2, 4, function(val) {
//     console.log(val);
// });

// add(2, 4, val => console.log(val));
// add(400, 10, (result) => console.log(result))

let resutlFucntion = add(2, 4, () => {});
resutlFucntion();
let resultFunction = add(400, 10, () => {})
resultFunction();