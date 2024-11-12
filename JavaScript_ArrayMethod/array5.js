// const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// const values = coding.forEach((item) => {
//     console.log(item);
// })

// console.log(values) // undefined

const my_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(my_nums.find((item) => {
//     return item < 4
// }))

//? using filter method

// const new_Nums = my_nums.filter((num) => {
//     return num > 4
// })

//? using foreach method

const new_Nums = [];

my_nums.forEach((nume) => {
    if (nume > 4) {
        new_Nums.push(nume);
    }
});

// console.log(new_Nums);

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBookes = books.filter((bk) => {
    return bk.genre === "History";
});

userBookes = books.filter((book) => {
    return book.publish >= 1995 && book.genre === "History";
});

// console.log(userBookes);

//? map method

// const newNums1 = my_nums.map((num) => {
//     return num + 10;
// })

// console.log(newNums1)

// ? using foreach method
const newNums11 = [];

my_nums.forEach((num) => newNums11.push(num + 10));

// console.log(newNums11);

const newNums1 = my_nums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => {
        return num >= 41 && num <= 71;
    });

// console.log(newNums1);

//? reduce method

const myNums$1 = [1, 2, 3];
// const myTotal = myNums$1.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0);
// console.log(myTotal)


const shoppingCart = [{
        itemName: "JS course",
        price: 2999,
    },
    {
        itemName: "Python course",
        price: 999,
    },
    {
        itemName: "Mobile Dev course",
        price: 5999,
    },
    {
        itemName: "Data Science  course",
        price: 12999,
    },
];

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTopay)