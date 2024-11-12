const image = document.querySelector("img"),
    button = document.querySelector("button");

function getRandomImages() {
    const xhr = new XMLHttpRequest();

    // xhr.responseType = "json";

    xhr.addEventListener("load", () => {
        // image.src = xhr.response.message;
        image.src = JSON.parse(xhr.response).message;
        console.log(xhr);
    });

    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
}

button.addEventListener("mousedown", getRandomImages);



setTimeout(() => {
    console.log("HII")
}, 4000)

const blockingBtn = document.querySelector(".blocking-btn");


blockingBtn.addEventListener("click", () => {
    const startTime = Date.now();
    let currentTime = startTime;

    while (startTime + 4000 > currentTime) {
        currentTime = Date.now();
    }
})