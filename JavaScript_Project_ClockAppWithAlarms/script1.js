const clock = document.querySelector(".clock"),
    hourHand = document.querySelector(".hour-hand"),
    minuteHand = document.querySelector(".minute-hand"),
    secondHand = document.querySelector(".second-hand"),
    am = document.querySelector(".am"),
    pm = document.querySelector(".pm");

const container = document.querySelector(".container");

function initClock() {
    const numbers = document.querySelector(".numbers");
    const lines = document.querySelector(".lines");
    for (let i = 1; i <= 12; i++) {
        numbers.innerHTML += `<div class="number" style="--i:${i}"><span>${i}</span></div>`;
        lines.innerHTML += `<div class="line" style="--i: ${i}"></div>`;
    }
    //* after init call set time with interval to call after every second
    setInterval(setTime, 1000);
}

initClock();

function setTime() {
    const now = new Date();
    const today = now.getDay();

    const second = now.getSeconds();
    const secondsDegrees = (second / 60) * 360 + 180;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 180;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 180;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // Convert 0 to 12 for display purposes
    // const displayHours = hours % 12 === 0 ? 12 : hours % 12;

    // hands are working fine

    if (hours >= 12) {
        am.classList.remove("active");
        pm.classList.add("active");
    } else {
        am.classList.add("active");
        pm.classList.remove("active");
    }

    // add trailing zeros
    let minutesString = minutes.toString();
    if (minutesString.length < 2) {
        minutesString = "0" + minutesString;
    }
    let hoursString = hours.toString();
    if (hoursString.length < 2) {
        hoursString = "0" + hoursString;
    }

    alarms.forEach((alarm) => {
        const alarmHours = parseInt(alarm.time.split(":")[0]);
        const alarmMinutes = parseInt(alarm.time.split(":")[1]);

        let dayMatch = false;
        // check thorugh all days of alram any day matches today then true
        alarm.days.forEach((day) => {
            if (day === today) {
                dayMatch = true;
            }
        });

        // if (
        //     alarm.time === `${hoursString}:${minutesString}` &&
        //     alarm.active &&
        //     dayMatch &&
        //     !alarmRinging
        // ) {
        //     // if all condition match
        //     ringAlarm(alarm.id, alarm.sound);
        //     // ringAlarm(alarm.id);

        //     stopBtn.classList.add("active");
        // }

        if (
            hours === alarmHours &&
            minute === alarmMinutes &&
            dayMatch &&
            alarm.active &&
            !alarmRinging
        ) {
            ringAlarm(alarm.id, alarm.sound);
            stopBtn.classList.add("active");
        }
    });

    //play shound
    const tick = new Audio("tick.mp3");
    // tick.play();
}

// *lets ring alarms when time matches

let alarmRinging = false;
let currentAlarmId = null;
let alarmAudio = null; // Variable to hold the audio reference
// let alarmAudio = new Audio('alarm.mp3'); // Variable to hold the audio reference

// let userInteracted = false;
// !Check if the user has previously interacted with the page
let userInteracted = localStorage.getItem("userInteracted") === true;

function onUserInteraction() {
    userInteracted = true;
    localStorage.setItem("userInteracted", "true");
    document.removeEventListener("click", onUserInteraction);
    document.removeEventListener("keydown", onUserInteraction);
}

// Listen for user interaction
document.addEventListener("click", onUserInteraction);
document.addEventListener("keydown", onUserInteraction);

function ringAlarm(alarmId, soundUrl) {
    // Check if user has interacted with the document
    if (!userInteracted) {
        console.log("User has not interacted with the document yet.");
        return;
    }

    // Set alarmRinging to true and create the audio element
    alarmRinging = true;
    alarmAudio = new Audio(soundUrl || "alarm.mp3");

    // const alarm = alarms.find((alarm) => alarm.id === alarmId)
    // if (alarm && alarm.sound) {
    //     alarmAudio.src = alarm.sound;
    // } else {
    //     // alarmAudio.src = 'alarm.mp3' // Default alarm sound
    //     alarmAudio // Default alarm sound
    // }

    // alarmAudio.play().catch(error => {
    //     console.error("Error playing alarm sound:", error);
    // });

    // Play the audio immediately
    alarmAudio
        .play()
        .then(() => {
            console.log("Alarm sound is playing.");
        })
        .catch((error) => {
            console.error("Error playing alarm sound:", error);
            if (error.name === "NotSupportedError") {
                console.error("The audio format is not supported by this browser.");
            } else if (error.name === "NotAllowedError") {
                console.error(
                    "Audio playback is not allowed without user interaction."
                );
            } else {
                console.error(
                    "An unknown error occurred while playing the alarm sound."
                );
            }
        });

    // Set current alarm ID and update UI
    currentAlarmId = alarmId;
    stopBtn.classList.add("active");

    // Listen for when the audio ends to stop the alarm
    alarmAudio.addEventListener("ended", () => {
        stopAlarm();
    });

    // * Optionally auto-stop the alarm after a certain duration (e.g. 1 minute)
    setTimeout(() => {
        if (alarmRinging) {
            stopAlarm();
        }
    }, 60000);

    saveAlarmsToLocalStorage(); // save state after ringing alarm
}

// * function to manually stop the alarm
function stopAlarm() {
    if (alarmAudio) {
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
    }
    alarmRinging = false;
    stopBtn.classList.remove("active");

    if (currentAlarmId !== null) {
        const alarm = alarms.find((alarm) => alarm.id === currentAlarmId);
        if (alarm) {
            alarm.active = false;
        }
        currentAlarmId = null;
    }
    saveAlarmsToLocalStorage();
    initAlarms();
}

let alarms = [
    // {
    //     id: 1,
    //     time: "20:06",
    //     name: "Wake up",
    //     days: [0, 1, 2, 3, 4, 5, 6],
    //     active: true,
    // },
    // {
    //     id: 2,
    //     time: "12:00",
    //     name: "Wake up",
    //     days: [1, 2, 3, 4, 5],
    //     active: true,
    // },
    // {
    //     id: 3,
    //     time: "12:00",
    //     name: "Wake up",
    //     days: [1, 2, 3, 4, 5],
    //     active: true,
    // },
    // {
    //     id: 4,
    //     time: "12:00",
    //     name: "Wake up",
    //     days: [1, 2, 3, 4, 5],
    //     active: false,
    // },
    // {
    //     id: 5,
    //     time: "12:00",
    //     name: "Wake up",
    //     days: [1, 2, 3, 4, 5],
    //     active: false,
    // },
    // {
    //     id: 6,
    //     time: "12:00",
    //     name: "Wake up",
    //     days: [1, 2, 3, 4, 5],
    //     active: false,
    // },
];

const alarmsList = document.querySelector(".alarms");

function initAlarms() {
    alarmsList.innerHTML = ""; // Clear existing alarms
    // if alarm array has any alarm show
    if (alarms.length) {
        alarms.forEach((alarm) => {
            const alarmElement = document.createElement("div");
            alarmElement.classList.add("alarm");
            alarmElement.dataset.id = alarm.id;
            let alarmDays = "";
            alarm.days.forEach((day) => {
                // day name is a function to convert numbers in to day first letter
                dayLetter = dayName(day);
                // alarmDays += `<div class="day" >${dayLetter}</div>`;
                alarmDays += `<div class="day ${
          alarm.active ? "active" : ""
        }" data-day="${day}">${dayLetter}</div>`;
            });
            active = alarm.active ? "checked" : "";
            alarmElement.innerHTML = `
                <div class="head">
                    <div class="name">${alarm.name}</div>
                </div>
                <div class="body">
                    <div class="left">
                        <div class="time">${alarm.time}</div>
                        <label class="toggle">
                            <input type="checkbox" class="checkbox" hidden ${active}>
                            <div class="track"></div>
                            <div class="thumb"></div>
                        </label>
                    </div>
                    <div class="days">
                        ${alarmDays}
                    </div>
                </div>
                <div class="delete">
                    <img src="icons/delete.png" alt="delete">
                </div>
                <div class="edit">
                    <img src="icons/pen.png" alt="edit" >
                </div>
            `;

            alarmsList.appendChild(alarmElement);
            // alarmElement.addEventListener("click", (e) => {
            //     e.stopPropagation();
            //     if (e.target.classList.contains("time")) {
            //         document.querySelector(".modal").classList.add("active");
            //         currentTimeGet();
            //     }
            // })
        });
    } else {
        // if no alarms
        alarmsList.innerHTML = `<div class="no-alarms">No Alarms, Click on below + button to add one </div>`;
    }
}
initAlarms();

function dayName(day) {
    // return ["M", "T", "W", "T", "F", "S", "S"][day];
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    return days[day];
}

// * adding a stop button to the UI
const stopBtn = document.createElement("button");
stopBtn.innerText = "Stop Alarm";
stopBtn.className = "stop-btn";
stopBtn.addEventListener("click", stopAlarm);
container.append(stopBtn);

// functionality to delete alarm or active inactive

alarmsList.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("checkbox")) {
        const alarmId =
            e.target.parentElement.parentElement.parentElement.parentElement.dataset
            .id;
        const alarm = alarms.find((alarm) => alarm.id == alarmId);
        alarm.active = !alarm.active;
        saveAlarmsToLocalStorage();
        initAlarms();
    }
    if (e.target.classList.contains("delete")) {
        const alarmId = e.target.parentElement.dataset.id;
        const alarm = alarms.find((alarm) => alarm.id == alarmId);
        alarms.splice(alarms.indexOf(alarm), 1);
        alarmsList.innerHTML = "";
        saveAlarmsToLocalStorage();
        initAlarms();
    }
    if (e.target.classList.contains("edit")) {
        const alarmId = e.target.parentElement.dataset.id;
        const alarm = alarms.find((alarm) => alarm.id == alarmId);
        editingAlarmId = alarm.id;
        populateModel(alarm);
        document.querySelector(".modal").classList.add("active");
    }
});

// everyting functional now add the functionality to add alarm is home work for you all
// or comment down if you need any help bye bye

const addAlarmBtn = document.querySelector("#add-alarm-btn");
const closeBtn = document.querySelector(".close");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const upBtn = document.querySelectorAll(".up");
const downBtn = document.querySelectorAll(".down");
const AMPM = document.querySelector(".AM-PM");
// const AM = document.querySelector(".AM");
// const PM = document.querySelector(".PM");

addAlarmBtn.addEventListener("click", () => {
    document.querySelector(".modal").classList.add("active");
    currentTimeGet();
});

closeBtn.addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("active");
});
cancelBtn.addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("active");
});

let today = new Date();
let hourse = today.getHours();
let minute = today.getMinutes();
// let displayHours = hourse % 12 === 0 ? 12 : hourse % 12;

function currentTimeGet() {
    today = new Date();
    hourse = today.getHours();
    minute = today.getMinutes();
    // displayHours = hourse % 12 === 0 ? 12 : hourse % 12;
    // timeContent(displayHours, hourNumer);
    timeContent(hourse, hourNumer);
    timeContent(minute, minuteNumber);
    // if (hourse >= 12) {
    //     let PM = AMPM.innerText = "PM";
    //     AMPM.addEventListener("click", () => {
    //         if (PM === "PM") {
    //             AMPM.innerText = "AM";
    //         }
    //     });
    // } else {
    //     let AM = AMPM.innerText = "AM";
    //     AMPM.addEventListener("click", () => {
    //         if (AM === "AM") {
    //             AMPM.innerText = "PM";
    //         }
    //     });
    // }

    const todayDayIndex = today.getDay();
    document.querySelectorAll(".days-select .day").forEach((day, index) => {
        day.classList.toggle("active", index === todayDayIndex);
    });
}

let alarmHourSet = hourse;
let alarmMinuteSet = minute;
const hourNumer = document.querySelector(".hour .number");
const minuteNumber = document.querySelector(".minute .number");

function TimerIncrementFun() {
    if (alarmHourSet < 24) {
        alarmHourSet++;
    } else {
        alarmHourSet = 1;
    }
    // if (alarmHourSet === 25) {
    //     alarmHourSet = 1
    // }
    timeContent(alarmHourSet, hourNumer);
}

function timerDecrementFun() {
    if (alarmHourSet > 1) {
        alarmHourSet--;
    } else {
        alarmHourSet = 24;
    }
    // if (alarmHourSet === 1) {
    //     alarmHourSet = 24;
    // }
    timeContent(alarmHourSet, hourNumer);
}

function minuteIncrementFunc() {
    if (alarmMinuteSet < 59) {
        alarmMinuteSet++;
    } else {
        alarmMinuteSet = 0;
    }
    // if (alarmMinuteSet === 59) {
    //     alarmMinuteSet = 0;
    // }
    timeContent(alarmMinuteSet, minuteNumber);
}

function minuteDecrementFunc() {
    if (alarmMinuteSet > 0) {
        alarmMinuteSet--;
    } else {
        alarmMinuteSet = 59;
    }
    // if (alarmMinuteSet === 0) {
    //     alarmMinuteSet = 59
    // }
    timeContent(alarmMinuteSet, minuteNumber);
}

function timeContent(num, elementName) {
    let innerConten = num < 10 ? `0${num}` : `${num}`;
    elementName.innerHTML = innerConten;
}

downBtn[0].addEventListener("click", timerDecrementFun);
downBtn[1].addEventListener("click", minuteDecrementFunc);

upBtn[0].addEventListener("click", TimerIncrementFun);
upBtn[1].addEventListener("click", minuteIncrementFunc);

let editingAlarmId = null;

saveBtn.addEventListener("click", () => {
    if (editingAlarmId !== null) {
        updateAlarm(editingAlarmId);
    } else {
        createAlarm();
    }
    document.querySelector(".modal").classList.remove("active");
    editingAlarmId = null;
});

// * day repeat functinality add
document.querySelectorAll(".days-select .day").forEach((day) => {
    day.addEventListener("click", () => {
        day.classList.toggle("active");
    });
});

function getSelectedDays() {
    const selectedDays = Array.from(
        document.querySelectorAll(".days-select .day.active")
    ).map((day) => parseInt(day.getAttribute("data-day")));
    return selectedDays;
}

function createAlarm() {
    const alarmNameInput = document.querySelector("#name").value;
    if (!alarmNameInput) {
        alert("please enter a name for then alarm.");
        return;
    }
    const selectedDays = getSelectedDays();
    const alarmSoundInput = document.querySelector("#alarm-sound-input");
    let alarmSoundFile = null;

    if (alarmSoundInput.files.length > 0) {
        alarmSoundFile = URL.createObjectURL(alarmSoundInput.files[0]);
    }

    const newAlarm = {
        id: alarms.length ? alarms[alarms.length - 1].id + 1 : 1,
        time: `${hourNumer.innerHTML}:${minuteNumber.innerHTML}`,
        name: `${alarmNameInput} ${alarms.length + 1}`,
        days: selectedDays,
        active: true,
        sound: alarmSoundFile, // Save the sound file URL
    };

    alarms.push(newAlarm);
    saveAlarmsToLocalStorage();
    initAlarms();
    resetAlarmInput();
}

//* editing existing alarms
function updateAlarm(alarmId) {
    const alarmNameInput = document.querySelector("#name").value;
    if (!alarmNameInput) {
        alert("please enter a name for then alarm.");
        return;
    }
    const selectedDays = getSelectedDays();
    const alarmIndex = alarms.findIndex((alarm) => alarm.id === alarmId);
    if (alarmIndex !== -1) {
        alarms[alarmIndex] = {
            id: alarmId,
            time: `${hourNumer.innerHTML}:${minuteNumber.innerHTML}`,
            name: alarmNameInput,
            days: selectedDays,
            active: true,
        };
        saveAlarmsToLocalStorage();
        initAlarms();
        resetAlarmInput();
    } else {
        console.error(`Alarm with ID ${alarmId} not found.`);
    }
}

//* Create a function that populates the modal with the existing alarm's time and name:
function populateModel(alarm) {
    const [hour, minute] = alarm.time.split(":");
    alarmHourSet = parseInt(hour);
    alarmMinuteSet = parseInt(minute);
    timeContent(alarmHourSet, hourNumer);
    timeContent(alarmMinuteSet, minuteNumber);
    document.querySelector("#name").value = alarm.name;
    document.querySelectorAll(".days-select .day").forEach((day) => {
        day.classList.remove("active");
    });
    alarm.days.forEach((day) => {
        document
            .querySelector(`.days-select .day[data-day='${day}']`)
            .classList.add("activei");
    });
}

function resetAlarmInput() {
    alarmHourSet = hourse;
    alarmMinuteSet = minute;
    timeContent(alarmHourSet, hourNumer);
    timeContent(alarmMinuteSet, minuteNumber);
    // document.querySelector("#name").value = '';
    document.querySelector("#alarm-sound-input").value = ""; // Reset file input
}

function saveAlarmsToLocalStorage() {
    localStorage.setItem("alarms", JSON.stringify(alarms));
    localStorage.setItem("alarmRinging", alarmRinging);
    localStorage.setItem("currentAlarmId", currentAlarmId);
}

function loadAlarmsFromLocalStorage() {
    const storedAlarms = localStorage.getItem("alarms");
    const storedAlarmsRinging = localStorage.getItem("alarmRinging");
    const storedCurrentAlarmId = localStorage.getItem("currentAlarmId");
    if (storedAlarms) {
        alarms = JSON.parse(storedAlarms);
        initAlarms();
    }

    // if (storedAlarmsRinging === "true" && storedCurrentAlarmId) {
    //     const alarm = alarms.find(
    //         (alarm) => alarm.id === parseInt(storedCurrentAlarmId)
    //     );
    //     if (alarm) {
    //         ringAlarm(alarm.id, alarm.sound);
    //     }
    // }
}

window.addEventListener("load", () => {
    loadAlarmsFromLocalStorage();
});

// numbers.innerHTML = numbers.innerHTML + ` < div class = "number"
// style = "--i:${i}" > < span > $ { i } < /span></div> `;