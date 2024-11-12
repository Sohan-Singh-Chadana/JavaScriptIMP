// let userData;

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => {
//     console.log("Got the data");
//     console.log(json);
//     userData = json;
// });

// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

const image = document.querySelector("img"),
    button = document.querySelector("button");

//? using fetch code

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//         image.src = json.message;
//         // console.log(json);
//         // console.log(json.message);
//     });

//! url = https://httpbin.org/anything

function getRandomImages() {
    const xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.addEventListener("load", () => {
        image.src = xhr.response.message;
        console.log(xhr);
    });

    // xhr.onload = () => {
    //     image.src = xhr.response.message
    //     console.log(xhr)
    // }

    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
}

button.addEventListener("mousedown", getRandomImages);