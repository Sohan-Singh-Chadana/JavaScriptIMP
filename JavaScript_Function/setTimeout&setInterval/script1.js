//* Synchronous Programming vs Asychronous programming
//* Synchronous programming
//* Synchronous programming single threaded

// console.log("Script Start");

// for (let i = 0; i < 10; i++) {
//     console.log("inside for loop")
// }
// console.log("script End");

//* SetTimout

// console.log("script start")

// function hello() {
//     console.log('Hello World!')
// };
// setTimeout(hello, 1000);

// setTimeout(() => {
//     console.log('inside setTimeout')
// }, 1000);

// console.log("script End");

// 14   // 33
// 21   // 40
// 23   // 43
// 17   // 36


console.log("script start");

const id = setTimeout(() => {
    console.log("inside setTimeout")
}, 1000); // minimam 1 second require

for (let i = 0; i < 10; i++) {
    console.log('......')
};

console.log("settimeout id is , ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("script end");

// output =>
// script start
// 99 ......
// script end
// inside setTimeout



//* setInterval
console.log("script start");
// setInterval(() => {
// console.log(total);
// console.log(Math.random());
// }, 1000);
console.log("script end")