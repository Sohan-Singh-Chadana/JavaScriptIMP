// function init() {
//     let name = "Mozilla";

//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }
// init();


// function outer() {
//     let username = 'Sohan';
//     console.log(secret)

//     function inner() {
//         let secret = 'my123';
//         console.log('inner', username)
//     }

//     function innerTwo() {
//         console.log("innerTwo", username);
//         console.log(secret)
//     }
//     inner();
//     innerTwo();
// }
// outer();
// console.log('To Outer', username)


// function makeFunc() {
//     const name = "Mozilla";

//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();


// document.getElementById("orange").onclick = function() {
//     document.body.style.backgroundColor = `orange`
// }
// document.getElementById("green").onclick = function() {
//     document.body.style.backgroundColor = `green`
// }


function clickHandler(color) {
    // document.body.style.backgroundColor = `${color}`
    return function() {
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler('orange');
document.getElementById('green').onclick = clickHandler('green');


// example 2

let warnUser = function(msg) {
    let calledCount = 0;
    return function() {
        calledCount++
        console.log(`${msg} You have been waarne ${calledCount} times.`)
    };
};

let warnForTamper = warnUser('You can not tamper with our HTML.');

// document.body.addEventListener('click', () => {
//     warnForTamper();
// })

// document.body.Onclick = warnForTamper()


warnForTamper();
warnForTamper();