// const images = document.querySelector(".images");
let container = document.querySelector(".container");

//?  clone 100 images

// for (let i = 2; i <= 100; i++) {
//     const newimg = images.cloneNode()
//     newimg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newimg)
// }

//? create Element
const p = document.createElement("p");
p.appendChild(document.createTextNode("Hello Sohan"));
p.classList.add("para");
p.id = "my-para";
// document.body.append(p);
document.body.firstElementChild.append(p);

//? create Element image

// const img = document.createElement('img');
// img.setAttribute('src', "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
// img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
// container.append(img);

//? create element with 100 images
// for (let i = 1; i <= 150; i++) {
//     const img = document.createElement('img')
//     img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
//     container.append(img)
// }

//? Example 2
const imgContainer = document.createElement('div');
// imgContainer.classList.add("img-container");

// const paragraph = document.createElement('p');
// paragraph.innerText = '1';

// container.append(imgContainer);
// imgContainer.append(img, paragraph)

//? Example 3
for (let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add("img-container");

    const img = document.createElement('img')
    img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);

    const paragraph = document.createElement('p');
    paragraph.innerText = i

    container.append(imgContainer);
    imgContainer.append(img, paragraph);

    //? second way to create html code
    // const myHTML = `
    // <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
    // <p>${i}</p>
    // `
    // imgContainer.innerHTML = myHTML
}

//? Example 4

// let myHTML = "";

// for (let i = 1; i <= 100; i++) {
//     myHTML += `
//     <div class="img-container">
//          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//          <p>${i}</p>
//     </div>
//     `;
// }

// container.innerHTML = myHTML;

// container.children[7].children[1]
//     .innerText = "Sohan";
// document.querySelector("body > div > div:nth-child(7) > p")
//     .innerText = 'pokeyman';



//? remove element
let deletElement = document.querySelector("body > div > div:nth-child(7)")

//? naya tarika remove karane ka
// deletElement.remove()

//? purana tarika remove karane ka
// deletElement.parentElement.removeChild(deletElement)



//? remove element

// container.remove();
// container = null;
// document.body.append(container);


//? get attributes
document.querySelector('img').getAttribute
    // ƒ getAttribute() { [native code] }

document.querySelector('img').getAttribute('src')
    // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'

document.querySelectorAll('div')[1].getAttribute('class');
// 'img-container'

const buttonElem = document.querySelector('#wrapper button')
const inputElem = document.querySelector('#wrapper input')


buttonElem.addEventListener('click', () => {
    const oldText = inputElem.value;
    return inputElem.value = oldText === "ON" ? "OFF" : "ON";
});