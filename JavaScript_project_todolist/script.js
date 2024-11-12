// First Step
const mainTodoElem = document.querySelector(".todo-lists-elem");
const inputValue = document.querySelector("#inputValue");

// get item form localstorage function
const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("youtubeTodolist"))
}


//  add item in localstorage
const addTodoListLocalStorage = (localTodoLists) => {
    return localStorage.setItem("youtubeTodolist", JSON.stringify(localTodoLists))
}

// get item data from localstorage
let localTodoLists = getTodoListFromLocal() || [];


// adding add to list dynamically
const addTodoDynamicElement = (curElem) => {
    const divElement = document.createElement("div");
    divElement.classList.add("main_todo_div");
    divElement.innerHTML = ` <li>${curElem}</li>
     <button class="btn deletebtn">Delete</button>`;
    mainTodoElem.append(divElement);
}


// add data to todo list
const addTodoList = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    const todoListValue = inputValue.value.trim();

    inputValue.value = "";

    if (todoListValue !== "" && !localTodoLists.includes(todoListValue)) {
        localTodoLists.push(todoListValue);
        localTodoLists = [...new Set(localTodoLists)];
        console.log(localTodoLists);
        localStorage.setItem("youtubeTodolist", JSON.stringify(localTodoLists))

        addTodoDynamicElement(todoListValue);
    }
};

// show data todo list
const showTodoList = () => {
    // console.log(localTodoLists);

    localTodoLists.forEach((curElem) => {
        addTodoDynamicElement(curElem);
    });
}

showTodoList();


// RemoveT element
const removeTodoElem = (e) => {
    const todoToRemove = e.target
    let todoListContent = todoToRemove.previousElementSibling.innerText;
    let parentElem = todoToRemove.parentElement;

    localTodoLists = localTodoLists.filter((curTodo) => {
        return curTodo !== todoListContent.toLowerCase()
    });

    addTodoListLocalStorage(localTodoLists);
    parentElem.remove()

    // console.log(localTodoLists)
}

// Click remover
mainTodoElem.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("deletebtn")) {
        removeTodoElem(e);
    }
});


document.querySelector('.btn').addEventListener("click", (e) => {
    addTodoList(e);
});


// let value = 0;

// console.log(undefined && value++) // unddefine
// console.log(null && value++); // null
// console.log(NaN && value++); // NaN
//*  console.log("0" && value++); // 0
// console.log('' && value++); // ''
// console.log(0 && value++); // 0
//*  console.log(1 && value++); // 1
//*  console.log(5 && value++); // 2
// console.log(value) // 3