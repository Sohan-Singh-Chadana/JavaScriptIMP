const checkBoxList = document.querySelectorAll(".coustom-checkbox");
const inputBox = document.querySelectorAll(".goal-input");
const errorLable = document.querySelector(".error-label");
const progressValue = document.querySelector('.progress-value');
const progressLabel = document.querySelector(".progress-label");
const quote = document.querySelector(".quote");
const container = document.querySelector(".container");
const goalContainer = document.querySelector(".goal-container");
const addBtn = document.querySelector("#addBtn");
const allQuotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    'Whoa! You just completed all the goals, time for chill: 😎'
];

const bottomQuote = [
    '“Move one step ahead, today!”',
    '“Keep Going, You’re making great progress!”',
    '“Keep Going, You’re making great progress!”',
    '“You completed all the goals! 😎”',
]

//? first tarika
// const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
//     first: {
//         name: '',
//         completed: false,
//     },
//     second: {
//         name: '',
//         completed: false,
//     },
//     third: {
//         name: '',
//         completed: false,
//     },
// };


//? second tarika
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};


let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length;
const updateProgress = () => {
    progressValue.style.width = `${completedGoalsCount / inputBox.length * 100}%`;
    progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputBox.length}  Completed`
    progressLabel.innerText = allQuotes[completedGoalsCount];
    quote.innerText = bottomQuote[completedGoalsCount];
}



checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
        const allGoalsAdded = [...inputBox].every((input) => {
            return input.value
        });

        if (allGoalsAdded) {
            checkbox.parentElement.classList.toggle("completed");
            const inputId = checkbox.nextElementSibling.id;
            allGoals[inputId].completed = !allGoals[inputId].completed
            completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length

            progressValue.style.width = `${completedGoalsCount / inputBox.length * 100}%`;
            progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputBox.length}   Completed`
            progressLabel.innerText = allQuotes[completedGoalsCount];
            quote.innerText = bottomQuote[completedGoalsCount];

            localStorage.setItem("allGoals", JSON.stringify(allGoals))
        } else {
            errorLable.parentElement.classList.add("show-error");
        }
    })
});


inputBox.forEach((input) => {
    // console.log(allGoals[input.id]);

    // input.value = allGoals[input.id].name

    // if (allGoals[input.id].completed) {
    //     input.parentElement.classList.add('completed')
    // }

    if (allGoals[input.id]) {
        input.value = allGoals[input.id].name

        if (allGoals[input.id].completed) {
            input.parentElement.classList.add('completed')
        }
    }

    input.addEventListener("focus", () => {
        errorLable.parentElement.classList.remove("show-error");
    })

    input.addEventListener("input", (e) => {
        // if (allGoals[input.id].completed) {
        //     input.value = allGoals[input.id].name
        //     return
        // }

        // allGoals[input.id].name = input.value;


        if (allGoals[input.id] && allGoals[input.id].completed) {
            input.value = allGoals[input.id].name
            return
        }

        if (allGoals[input.id]) {
            allGoals[input.id].name = input.value
        } else {
            allGoals[input.id] = {
                name: input.value,
                completed: false,
            }
        }


        localStorage.setItem("allGoals", JSON.stringify(allGoals))
    })
})

updateProgress();

const them = document.querySelector(".checkbox");
them.addEventListener("click", () => {
    const isDarkTheme = document.body.classList.toggle("darkThem")
    localStorage.setItem("themData", isDarkTheme)
})
window.addEventListener("DOMContentLoaded", () => {
    const savedThem = localStorage.getItem("themData");

    if (savedThem === 'true') {
        document.body.classList.toggle("darkThem");
    }
});


















//? try with me
// const completedTarget = () => {
//     if (completedGoalsCount === 1) {
//         progressLabel.innerText = `Well begun is half done!`
//     }
//     if (completedGoalsCount === 2) {
//         progressLabel.innerText = `Just a step away, keep going!`
//     }
//     if (completedGoalsCount === 3) {
//         progressLabel.innerText = ` Whoa! You just completed all the goals, time for chill :D`
//     }
// }


// addBtn.addEventListener("click", () => {
//     const newId = `goal${Date.now()}`
//     const div = document.createElement("div");
//     div.classList.add("goal-container");
//     container.append(div);

//     const div2 = document.createElement("div");
//     div2.classList.add("coustom-checkbox");
//     div.append(div2);

//     const image = document.createElement("img");
//     image.classList.add('check-icon');
//     div2.append(image);


//     const inputElement = document.createElement("input");
//     inputElement.type = 'text';
//     inputElement.classList.add("goal-input");
//     inputElement.setAttribute("placeholder", "Add new goal...")
//     inputElement.setAttribute("id", newId)
//     div.append(inputElement)

//     console.log(container)
// });






//? copy element
// const copyElement = goalContainer.cloneNode(true);
// container.append(copyElement)
// copyElement.children[1].id = `${idNames[0]}`
// console.log(container);

//? new element add


// console.log(container)





//? every method check each element and return true if all element is true warana false ?
const ages = [23, 32, 43, 19, 21];
const ages1 = [23, 32, 43, 16, 18];

const newAgeArr = ages.every((age) => {
    return age > 18
});
const newAgeArr1 = ages1.every((age) => {
    return age > 18
});

// console.log(newAgeArr); // true
// console.log(newAgeArr1); // false

//? some method check each element and return true if one element is true warana false?
const agesOne = [23, 32, 43, 19, 21];
const agesTwo = [12, 13, 14, 6, 8];

const newAgeSomeArr = agesOne.some((age) => {
    return age > 18
});
const newAgeSomeArr1 = agesTwo.some((age) => {
    return age > 18
});

// console.log(newAgeSomeArr); // true
// console.log(newAgeSomeArr1); // false