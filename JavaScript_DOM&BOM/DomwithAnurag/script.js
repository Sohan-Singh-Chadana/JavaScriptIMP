// document.body.style.backgroundColor = "#070707";
// document.body.style.color = "#00ffd2";

// theme toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".theme-toggle");
    const body = document.body;

    //* saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.remove("light-theme", "darkMode");
        body.classList.add(savedTheme);
    }

    //* toggle function
    function toggleTheme() {
        if (body.classList.contains("light-theme")) {
            body.classList.add("darkMode");
            body.classList.remove("light-theme");
            toggleBtn.innerText = "Light";
            localStorage.setItem("theme", "darkMode");
        } else {
            body.classList.remove("darkMode");
            body.classList.add("light-theme");
            toggleBtn.innerText = "Dark";
            localStorage.setItem("theme", "light-theme");
        }
    }

    toggleBtn.addEventListener("click", toggleTheme);
});

function sayHi() {
    console.log("hii");
    document.body.children[4].src =
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg";

    // document.body.children[5].children[2].children[4].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFhA9-1675ll44DpbbmycGoUGh7NAo27SVC3LSUbmbw&s'

    document.body.children[5].children[3].children[1].src =
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=";

    // document.getElementsByTagName('img')[1].src = 'https://www.freecodecamp.org/news/content/images/size/w2000/2023/11/Beige-Aesthetic-Neutral-Thesis-Defense-Presentation-1.png'

    document.images[1].src =
        "https://www.freecodecamp.org/news/content/images/size/w2000/2023/11/Beige-Aesthetic-Neutral-Thesis-Defense-Presentation-1.png";

    document.images[1].title = "DOM";
}

// const allImages = document.images

// const allImages = document.getElementsByTagName('img');

// const cssImages = document.getElementsByClassName("css-img")[0]; // undefined

// const cssImages = document.getElementsByClassName("css-img"); // HTMLCollection []

// const cssImage = document.getElementById("css-img");

// const cssImage = document.querySelector("#css-img");

// const jsimg = document.querySelector('.jsimg');
// const jsimg$ = document.querySelector('[ alt="javascript roadmap"]')
// const li = document.querySelectorAll('ul li')
const ul = document.querySelector("ul");

// jsimg$.src = 'https://www.freecodecamp.org/news/content/images/size/w2000/2023/11/Beige-Aesthetic-Neutral-Thesis-Defense-Presentation-1.png'

const imagesInsideUl = ul.querySelector(".css-imge");

const imagesURl = [
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
];

// const allimges = document.querySelectorAll("img");

// const itagSelect = document.querySelector("body  ul > li:nth-child(3) > ol > li:nth-child(3) > p > i");

// allimges[0].src = imagesURl[0];
// allimges[1].src = imagesURl[1];
// allimges[2].src = imagesURl[2];

// for (let i = 0; i < allimges.length; i++) {
//     allimges[i].src = imagesURl[i]
// }

// allimges.forEach((img, i) => {
//     img.src = imagesURl[i]
// })

const paragraph = document.querySelector("p");
const allLinks = document.querySelectorAll("a");
const allLinksVisited = document.querySelectorAll("a:visited");

//? using forEach method
// allLinks.forEach((item) => {
//     item.style.color = 'red'
//     item.style.backgroundColor = "yellow"
//     item.style.fontWeight = 'bold'
//     item.style.textTransform = 'uppercase'
// })

//? using  for loop
// for (let i = 0; i < allLinks.length; i++) {
//     const element = allLinks[i];
//     element.style.color = 'red'
//     element.style.backgroundColor = "yellow"
//     element.style.fontWeight = 'bold'
//     element.style.textTransform = 'uppercase'
// }

//? using for of loop
for (const link of allLinks) {
    //? first way to add style in javascript
    // ? this way is not right❌
    // link.style.color = 'red'
    //     // link.style.backgroundColor = "yellow"
    // link.style.fontWeight = 'bold'
    // link.style.textTransform = 'uppercase'
    // link.style.textDecoration = 'none';
    // link.style.padding = '0px 5px'
    // link.style.fontFamily = 'cursive'
    // link.style.fontStyle = 'italic'

    // console.log(link.style.cssText)
    //? second way to add style in javascript
    // ? this way is not right❌
    // link.style.cssText = `
    // color: red;
    // font-weight: bold;
    // text-transform: uppercase;
    // text-decoration: none;
    // padding: 0px 5px;
    // font-family: cursive;
    // font-style: italic;
    // `;

    //? thired way to add style in javascript
    // ? this way is not right❌
    // link.setAttribute("class", "green-link")
    // link.className = 'my-link green-link'

    // ? right way this ✔
    // console.log(link.classList)
    link.classList.add("green-link")
    link.classList.add("wavy-link")
    link.classList.remove('my-link')
        // link.classList.toggle("my-link")
}

// console.log(paragraph.innerHTML);

//! interviwe Question
function fetch() {
    A = 7;
    // console.log(A)
}
let A; // 7
fetch();
// let A; // ReferenceError: Cannot access 'A' before initialization
// console.log(A) // 7




const firstLink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)")

// console.log(firstLink.parentElement)
// console.log(firstLink.parentNode)

// console.log(firstLink.nextElementSibling)
// console.log(firstLink.nextSibling)
// console.log(firstLink.nextElementSibling.nextElementSibling)

// console.log(firstLink.previousElementSibling)
// console.log(firstLink.previousSibling)
// console.log(firstLink.previousElementSibling.previousElementSibling) // null

// console.log(firstLink.parentElement.parentElement)
// console.log(firstLink.parentElement.parentElement.children)
// console.log(firstLink.parentElement.parentElement.childNodes)

// console.log(firstLink.parentElement.firstElementChild)
// console.log(firstLink.parentElement.lastElementChild)