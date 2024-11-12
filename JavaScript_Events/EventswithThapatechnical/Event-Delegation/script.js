const myList = document.querySelector("#myList");
const listValue = document.querySelector("#listValue");

const getlistDetails = (e) => {
    const listItem = e.target;
    listItem.style.transform = 'rotateX(360deg)';

    setTimeout(() => {
        listItem.style.transform = 'rotateX(0deg)';
    }, 500);

    listValue.innerText = `You fav programming language is: ${listItem.innerText}`

    localStorage.setItem('listItem', listValue.innerText);
}


function getdatafunction() {
    const saveDate = localStorage.getItem("listItem");
    if (saveDate) {
        listValue.innerText = saveDate;
    }
};

myList.addEventListener("click", getlistDetails);
window.addEventListener('load', getdatafunction);