//Selecting all required elements
const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = document.querySelector(".buttons .quiz");
const continueBtn = document.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const optionList = document.querySelector(".option_list");
const timeLine = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_text");
const timeCount = document.querySelector(".timer .timer_sec");
const resultBox = document.querySelector(".result_box");
const section = document.querySelector("section");
const header = quizBox.querySelector("header");
const timerSound = document.querySelector('#timer_sound');
const wrongSound = document.querySelector('#wrong_sound');
const correctSound = document.querySelector('#correct_sound');
const successSound = document.querySelector('#success_sound');
const startSound = document.querySelector('#start_sound');
const failureSound = document.querySelector('#failure_sound');




//if sartQuiz button clicked
startBtn.onclick = () => {
    infoBox.classList.add("activeInfo"); // show info box
};


//if exitQuiz button clicked
exitBtn.onclick = () => {
    infoBox.classList.remove("activeInfo"); // hide info box
};

let timeValue = 15;
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;


//if countinuQuiz button clicked
continueBtn.onclick = () => {
    quizBox.classList.add("activeQuiz"); // show quiz box
    infoBox.classList.remove("activeInfo"); // hide info box
    showQuetions(0); // calling showQestions function
    queCounter(1); // passing 1 parameter to queCounter
    startTimer(15); // calling startTimer function
    startTimerLine(0); // calling startTimerLine function
    startSound.play(); // Game star sound

    // Load progress from localStorage
    queCount = parseInt(localStorage.getItem('queCount')) || 0;
    queNumb = parseInt(localStorage.getItem('queNumb')) || 1;
    userScore = parseInt(localStorage.getItem('userScore')) || 0;
    timeValue = parseInt(localStorage.getItem('timeValue')) || 15;
};


const restartQuiz = resultBox.querySelector(".buttons .restart");
const quitQuiz = resultBox.querySelector(".buttons .quit");


// if restartQiuz button clicked
restartQuiz.onclick = () => {
    quizBox.classList.add("activeQuiz"); // show quiz box
    resultBox.classList.remove("activeResult") // hide result box
    timeValue = 15;
    queCount = 0;
    queNumb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(queCount); // calling showQestions function
    queCounter(queNumb); // passing queNumb to queCounter
    clearInterval(counter); // clear counter
    clearInterval(counterLine); // clear counterLine
    startTimer(timeValue); // calling startTimer function
    startTimerLine(widthValue); //  calling startTimerLine function
    timeText.textContent = "Timer Left"; // change the text of timeText To Time Left
    nextBtn.classList.remove('show'); // hide the next button


    // Save porgress to localStorage
    localStorage.removeItem("queCount")
    localStorage.removeItem("queNumb")
    localStorage.removeItem("userScore")
    localStorage.removeItem("timeValue")
}


// if quitQuiz button clicked
quitQuiz.onclick = () => {
    window.location.reload(); // reload the current window
};

const nextBtn = document.querySelector("footer .next_btn");
const bottomeQuesCounter = document.querySelector("footer .total_que");

// if NextQue button clicked
nextBtn.onclick = () => {
    if (queCount < questions.length - 1) { // if question count is less than total question length
        queCount++; // increment the queCount value
        queNumb++; // increment the queNumb value
        showQuetions(queCount); // calling showQestions function
        queCounter(queNumb); // passing queNumb value to queCounter
        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counterLine
        startTimer(timeValue); // calling startTimer function
        startTimerLine(widthValue); // calling startTimerLine function
        timeText.textContent = "Time Left"; // change the timeText to Time Left
        nextBtn.classList.remove("show"); // hide the next button
        removeBackgroundColor('fivesecondcolor');
        removeBackgroundColor('orangecolor');

        // Save porgress to localStorage
        localStorage.setItem("queCount", queCount)
        localStorage.setItem("queNumb", queNumb)
        localStorage.setItem("userScore", userScore)
        localStorage.setItem("timeValue", timeValue)
    } else {
        clearInterval(counter); // clear counter
        clearInterval(counterLine); // clear counterLine
        showResult(); // calling showResult function
    }
};


// getting questions and options form array
function showQuetions(index) {
    const queText = document.querySelector(".que_text");

    // creating a new span and div tag for question and option and passing the value using array index
    let queTag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    queText.innerHTML = queTag; // adding new spna tag inside queTag
    optionList.innerHTML = optionTag; // adding new div tag inside optionTag

    const option = optionList.querySelectorAll(".option");

    // set onclick attribute to all availabel options
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }

};

// creating the new div tags which for icons
let tickIconTag = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
let crossIconTag = `<div class="icon cross"><i class="fas fa-times"></i></div>`;

//if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); // clear counter
    clearInterval(counterLine); // clear counterLine
    timerSound.pause(); // timer sound pause option selected
    let userAns = answer.textContent; // geeting user selected option
    let correcAns = questions[queCount].answer; // getting correct answer from array
    const allOptions = optionList.children.length; // getting all option items

    if (userAns === correcAns) { // if user selected option is equal to array's correct answer
        userScore += 1; // upgrading score value with 1
        answer.classList.add("correct"); // adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); // adding tick icon to correct selected option
        console.log("correct Answer");
        console.log("Your Correct Answer = ", userScore)
        correctSound.play(); // correct selected play correctSound
    } else {
        answer.classList.add("incorrect"); // adding red color to incorrect selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); // adding cross icon to incorrect selected option
        console.log('wrong Answer');
        wrongSound.play(); // incorrect selected play worngSound
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent === correcAns) { // if there is an option which is matched to an array answer
                optionList.children[i].setAttribute("class", "option correct"); // adding green color to matched option
                optionList.children[i].insertAdjacentHTML('beforeend', tickIconTag); // adding tick icon to matched option
                console.log('Auto selected correct answer');
            }
        }
    };
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled"); // once user select an option then disabled all options
    };
    nextBtn.classList.add('show'); // show the next button if user selected any option
    removeBackgroundColor('fivesecondcolor');
    removeBackgroundColor('orangecolor');
};


function showResult() {
    infoBox.classList.remove("activeInfo"); // hide info box
    quizBox.classList.remove("activeQuiz"); // hide quiz box
    resultBox.classList.add("activeResult"); // show result box
    const scoreText = resultBox.querySelector(".score_text");
    if (userScore > 3) { // if user scored more than 3
        // creating a new span tag and passing the user socre number and total question number
        let scoreTag = `<span>and congrats! 🎉 , You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
        scoreText.innerHTML = scoreTag; // adding new span tag inside score_text
        successSound.play();
    } else if (userScore > 1) { // if user scored more than 1
        let scoreTag = `<span>and nice! 😎 , You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
        scoreText.innerHTML = scoreTag;
        successSound.play();
    } else { // if user scored less than 1
        let scoreTag = `<span>and sorry! 😐 , You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
        scoreText.innerHTML = scoreTag;
        failureSound.play();
    }
}


function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time; // changing the value of timeCount wiht time value
        time--; // decrement the time value
        if (time < 9) { // if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = `0${addZero}`; // add a 0 before time value
            addBackgroundColor("orangecolor")
        }
        if (time < 5) {
            removeBackgroundColor('orangecolor');
            addBackgroundColor('fivesecondcolor');
            timerSound.play();
        }
        if (time < 0) { // if timer is less than 0
            clearInterval(counter); // clear counter
            timerSound.pause();
            timeText.textContent = "Time Off"; // change the time text to time off
            const allOptions = optionList.children.length; // getting all option items
            let correcAns = questions[queCount].answer; // getting correct answer from array
            for (let i = 0; i < allOptions; i++) {
                if (optionList.children[i].textContent === correcAns) { // if there is an option which is matched to an array answer
                    optionList.children[i].setAttribute("class", "option correct"); // adding green color to matched option
                    optionList.children[i].insertAdjacentHTML('beforeend', tickIconTag); // adding tick icon to matched option
                    console.log('Time Off : Auto selected correct answer');
                }
            }
            for (let i = 0; i < allOptions; i++) {
                optionList.children[i].classList.add("disabled") // once user select an option then disabled all options
            }
            nextBtn.classList.add('show'); // show the next button if user selected any option
            removeBackgroundColor('fivesecondcolor');
            removeBackgroundColor('orangecolor');
            correctSound.play();
        }
    }

}


function startTimerLine(time) {
    counterLine = setInterval(timer, 29);

    function timer() {
        time += 1; // upgrading time value with 1
        timeLine.style.width = time + "px"; // increasing width of time_line with px by time value
        if (time > 549) { // if time value is greater than 549
            clearInterval(counterLine); // clear counterLine
        }
        // console.log(time)
    }
}

function queCounter(index) {
    // creating a new span tag and passing the question number and total question
    let totalQueCounTag = `<span><p>${index}</p> of <p> ${questions.length} </p> Questions </span>`;
    bottomeQuesCounter.innerHTML = totalQueCounTag; // adding new span tag inside bottomeQuesCounter
}


function removeBackgroundColor(removeBackgroundclass) {
    section.classList.remove(removeBackgroundclass);
    header.classList.remove(removeBackgroundclass);
    quizBox.classList.remove(removeBackgroundclass);
}


function addBackgroundColor(addbackgroundclass) {
    header.classList.add(addbackgroundclass);
    section.classList.add(addbackgroundclass);
    quizBox.classList.add(addbackgroundclass);
}

queCount = parseInt(localStorage.getItem('queCount')) || 0;
queNumb = parseInt(localStorage.getItem('queNumb')) || 1;
userScore = parseInt(localStorage.getItem('userScore')) || 0;
timeValue = parseInt(localStorage.getItem('timeValue')) || 15;