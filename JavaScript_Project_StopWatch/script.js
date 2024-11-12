let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let timerSound = document.querySelector("#timersound");
let int = null;


// Load the timer state form localStorage

window.addEventListener("load", loadedTimer)

function loadedTimer() {
    let h = localStorage.getItem("Hourse")
    let m = localStorage.getItem("Minutes")
    let s = localStorage.getItem("Seconds")
    let ms = localStorage.getItem("Milliseconds");

    if (h !== null && m !== null && s !== null && ms !== null) {
        // timeRef.innerHTML = timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`
        hours = parseInt(h);
        minutes = parseInt(m);
        seconds = parseInt(s);
        milliseconds = parseInt(ms);
        updateTimerDisplay();
    }
}

document.querySelector("#start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.querySelector("#pause-timer").addEventListener("click", () => {
    clearInterval(int);
    timerSound.pause();
})

document.querySelector("#reset-timer").addEventListener("click", () => {
    clearInterval(int);
    //? timer sounde
    // timerSound.pause();
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

    localStorage.removeItem("Hourse")
    localStorage.removeItem("Minutes")
    localStorage.removeItem("Seconds")
    localStorage.removeItem("Milliseconds");

    timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() {
    // milliseconds = milliseconds + 10;
    milliseconds += 10;
    //? timer sounde
    // timerSound.play();
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateTimerDisplay();

    localStorage.setItem("Hourse", hours)
    localStorage.setItem("Minutes", minutes)
    localStorage.setItem("Seconds", seconds)
    localStorage.setItem("Milliseconds", milliseconds)
}

function updateTimerDisplay() {
    let h = hours < 10 ? `0${hours}` : hours;
    let m = minutes < 10 ? `0${minutes}` : minutes;
    let s = seconds < 10 ? `0${seconds}` : seconds;
    let ms =
        milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds;
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}