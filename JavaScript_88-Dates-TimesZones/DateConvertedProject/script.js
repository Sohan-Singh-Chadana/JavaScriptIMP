const inputFiledElem = document.querySelector("#inputFiled")
const button = document.querySelector('button')
const info = document.querySelector(".info")

// console.log(Number.parseInt(inputValue))

button.addEventListener("click", () => {
    const inputValue = inputFiledElem.value
    const date = new Date(Number(inputValue))
    const getYear = new Date().getFullYear() - date.getFullYear()

    info.innerHTML = `
    <p>GMT: <b>${date.toUTCString()}</b></p>
    <p>Your Time Zone: <b>${date.toString()}</b></p>
    <p>Relative:<b> ${getYear} years ago</b></p>
    `;

    // console.log(date.toUTCString())
    // console.log(date.toString())
    // console.log(getYear + "  years ago")

})

// console.log(new Date(997246800000))

const date = new Date('2005-07-19 , 09:30')

console.log(date.getTime())