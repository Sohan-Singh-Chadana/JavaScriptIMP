const addTocard = document.querySelector(".add-card");
const container = document.querySelector(".container");
const cardList = document.querySelectorAll(".card");

let counter = 1;

addTocard.addEventListener("click", function(e) {
    // console.log(e);
    const newCard = addTocard.cloneNode();
    newCard.classList.add('card');
    newCard.classList.remove('add-card');
    newCard.innerText = counter++;
    container.append(newCard);

    //? remove cardlist
    //* ye wali practice acchi nahi hai
    // newCard.addEventListener("click", () => {
    //     newCard.remove();
    // })
}, false);

container.addEventListener("click", (e) => {
    if (e.target !== container) {
        e.target.remove();
    }
});