const maths = {
    E: 2.718281828459045,
    a: function add(a, b) {
        return a + b;
    },
    sqrt: function(a) {
        return a * a;
    },
    subtrac(a, b) {
        return a - b;
    },
    cube(num) {
        return num ** 3;
    },
};
// console.log(maths)

//? ⭐ function Declaration
// function square(num) {
//     return num * num
// }

//? ⭐ function Expression

// const square = function(num) {
//     return num * num
// }

//? ⭐ Arrow function Expression

// const square = (num) => {
//     return num * num
// };

const square = (num) => num * num;

const add = (a, b) => a + b;

const random = () => (
    Math.floor(Math.random() * 10) + 1
)

// setTimeout(() => {
//     console.log("Hii")
// }, 2000)