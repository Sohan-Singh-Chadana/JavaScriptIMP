const container = document.querySelector(".container");
const addBtn = document.querySelector("#addBtn");
const progressValue = document.querySelector(".progress-value");
const progressLabel = document.querySelector(".progress-label");
const quote = document.querySelector(".quote");
let inputBox = document.querySelectorAll(".goal-input");
const checkBoxList = document.querySelectorAll(".coustom-checkbox");
const errorLabel = document.querySelector(".error-label");

let allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};
let completedGoalsCount = Object.values(allGoals).filter(goal => goal.completed).length;


const updateProgress = () => {
    completedGoalsCount = Object.values(allGoals).filter(goal => goal.completed).length;
    progressValue.style.width = `${completedGoalsCount / inputBox.length * 100}%`;
    progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputBox.length} Completed`;
};

addBtn.addEventListener("click", () => {
    const newId = `goal-${Date.now()}`; // Generate a unique ID for the new goal

    const div = document.createElement("div");
    div.classList.add("goal-container");
    container.append(div);

    const div2 = document.createElement("div");
    div2.classList.add("coustom-checkbox");
    div.append(div2);

    const image = document.createElement("img");
    image.classList.add('check-icon');
    image.src = 'check-icon.svg'
    div2.append(image);

    const inputElement = document.createElement("input");
    inputElement.type = 'text';
    inputElement.classList.add("goal-input");
    inputElement.setAttribute("placeholder", "Add new goal...");
    inputElement.setAttribute("id", newId);
    div.append(inputElement);

    // Initialize the new goal in allGoals
    allGoals[newId] = {
        name: '',
        completed: false,
    };

    // Save to localStorage
    localStorage.setItem("allGoals", JSON.stringify(allGoals))

    // Add event listeners to the new input and checkbox
    addEventListeners(inputElement, div2);

    // Update the inputBox NodeList
    inputBox = document.querySelectorAll(".goal-input");

});

const addEventListeners = (input, checkbox) => {
    input.addEventListener("focus", () => {
        errorLabel.parentElement.classList.remove("show-error");
    });

    input.addEventListener("input", (e) => {
        const inputId = e.target.id;
        if (allGoals[inputId] && allGoals[inputId].completed) {
            input.value = allGoals[inputId].name;
            return;
        }

        if (allGoals[inputId]) {
            allGoals[inputId].name = input.value;
        } else {
            allGoals[inputId] = {
                name: input.value,
                completed: false,
            };
        }

        localStorage.setItem("allGoals", JSON.stringify(allGoals));
    });

    checkbox.addEventListener("click", (e) => {
        const allGoalsAdded = [...inputBox].every((input) => input.value);

        if (allGoalsAdded) {
            checkbox.parentElement.classList.toggle("completed");
            const inputId = checkbox.nextElementSibling.id;
            allGoals[inputId].completed = !allGoals[inputId].completed;

            updateProgress();
            localStorage.setItem("allGoals", JSON.stringify(allGoals));
        } else {
            errorLabel.parentElement.classList.add("show-error");
        }
    });
};

// Initialize existing inputs and checkboxes with event listeners
inputBox.forEach((input) => {
    if (allGoals[input.id]) {
        input.value = allGoals[input.id].name;

        if (allGoals[input.id].completed) {
            input.parentElement.classList.add('completed');
        }
    }

    const checkbox = input.previousElementSibling;
    addEventListeners(input, checkbox);
});

// Initialize existing goals from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    for (const id in allGoals) {
        createGoalElement(id, allGoals[id]);
    }
    updateProgress();
});