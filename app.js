// Study schedule data
const studySchedule = {
    "April 3, 2024": [
        "NET3012: 2 postlabs, Read mod 1 SA",
        "NET3011: Read mod 1 and 2 (Brief skim through)"
    ],
    "April 4, 2024": [
        "NET3012: 2 postlabs, Finish mod 1 SA",
        "NET3011: Read mod 3 and 4 (Brief skim through), attempt quizzes"
    ],
    "April 5, 2024": [
        "NET3012: 1 postlabs, Read mod 2 SA",
        "NET3011: Read mod 4 and 5 (Brief skim through), attempt quizzes"
    ],
    "April 6, 2024": [
        "NET3012: 2 postlabs, Finish mod 2 SA",
        "NET3011: Read mod 6 and 7 (IMPORTANT), attempt quizzes"
    ],
    "April 7, 2024": [
        "NET3012: 1 postlab, Read mod 3 SA",
        "NET3011: Read mod 7 and 8 (IMPORTANT), attempt quizzes"
    ],
    "April 8, 2024": [
        "NET3012: Finish mod 3 SA",
        "NET3011: Read mod 9 and 10 (IMPORTANT), attempt quizzes",
        "NET3001: Read notes from Week 6 & 7 (Timers)"
    ],
    "April 9, 2024": [
        "NET3012: Read mod 4 SA, make SBA Journal",
        "NET3011: Read mod 11 and 12 (IMPORTANT), attempt quizzes",
        "NET3001: Read notes from Week 8 & 9 (Interrupts & ADC)"
    ],
    "April 10, 2024": [
        "NET3012: Finish mod 4 SA, attempt old midterms",
        "NET3011: Review mod 10 and 9, attempt quizzes and last year final exam",
        "NET3001: Read notes from Week 10 (SPI)",
        "NET3006: Read mod 8"
    ],
    "April 11, 2024": [
        "NET3012: Read Mod 5 SA, attempt old midterms",
        "NET3011: Review mod 8 and 7, attempt quizzes and last year final exam",
        "NET3006: Finish mod 8"
    ],
    "April 12, 2024": [
        "NET3012: Read Mod 6 MPLS, 1 postlab (Final one)",
        "NET3011: Review mod 6 and 5, attempt quizzes and last year final exam",
        "NET3001: Read notes from Week 11 (I2C)",
        "NET3006: Read mod 9 (IMPORTANT)"
    ],
    "April 13, 2024": [
        "NET3012: Finish Mod 6 MPLS, attempt old midterms",
        "NET3011: Review mod 11 and 12, attempt quizzes and last year final exam",
        "NET3006: Finish mod 9"
    ],
    "April 14, 2024": [
        "NET3012: Review Mod 5 and 4, attempt practice sba",
        "NET3011: attempt quizzes and last year final exam",
        "NET3001: Read notes from Week 12 (multitasking)",
        "NET3006: Read mod 10"
    ],
    "April 15, 2024": [
        "NET3012: Review Mod 3 and 2, attempt old midterms",
        "NET3011: attempt quizzes and last year final exam"
    ],
    "April 16, 2024": [
        "NET3012: Review Mod 1, attempt old midterms"
    ],
    "April 17, 2024": [
        "NET3012: Review postlabs, attempt practice SBA",
        "NET3001: Review notes Week 11(l2C)",
        "NET3006: Read mod 11"
    ],
    "April 18, 2024": [
        "NET3001: Review notes Week 10(SPI), attempt last year final exam",
        "NET3006: Read mod 12 and 13"
    ],
    "April 19, 2024": [
        "NET3001: Review notes Week 9 (ADC)",
        "NET3006: Review mod 10 and 9, make cheatsheet"
    ],
    "April 20, 2024": [
        "NET3001: Review notes Week 8 and 7 (Interrupts and timers), learn practice exam code"
    ],
    "April 21, 2024": [
        "NET3001: Review tutorial code, review practice exam"
    ],
    "April 22, 2024": [
        "NET3010: Study for Frank"
    ],
    "April 23, 2024": [
        "NET3010: Study for Frank"
    ]
};

// Get the current date
const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

// Display tasks for the current day
const currentDayTasks = document.getElementById("current-day-tasks");
if (studySchedule[currentDate]) {
    studySchedule[currentDate].forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task;
        currentDayTasks.appendChild(taskItem);
    });
} else {
    const noTasksMessage = document.createElement("li");
    noTasksMessage.textContent = "No tasks for today";
    currentDayTasks.appendChild(noTasksMessage);
}

// Display tasks for the next day
const nextDayTasks = document.getElementById("next-day-tasks");
const nextDate = new Date();
nextDate.setDate(nextDate.getDate() + 1);
const nextDateString = nextDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
if (studySchedule[nextDateString]) {
    studySchedule[nextDateString].forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task;
        nextDayTasks.appendChild(taskItem);
    });
} else {
    const noTasksMessage = document.createElement("li");
    noTasksMessage.textContent = "No tasks for tomorrow";
    nextDayTasks.appendChild(noTasksMessage);
}

// Display tasks for the previous day
const previousDayTasks = document.getElementById("previous-day-tasks");
const previousDate = new Date();
previousDate.setDate(previousDate.getDate() - 1);
const previousDateString = previousDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
if (studySchedule[previousDateString]) {
    studySchedule[previousDateString].forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task;
        previousDayTasks.appendChild(taskItem);
    });
} else {
    const noTasksMessage = document.createElement("li");
    noTasksMessage.textContent = "No tasks for the previous day";
    previousDayTasks.appendChild(noTasksMessage);
}

// Countdown timers for exams
const examDates = {
    "NET3001- Real Time Systems": new Date("April 22, 2024"),
    "NET3006- Network Management": new Date("April 20, 2024"),
    "NET3010- Web Programming": new Date("April 24, 2024"),
    "NET3011- Advanced Network Switching": new Date("April 16, 2024"),
    "NET3012- IP Architecture & Solutions": new Date("April 17, 2024")
};

function startCountdown(examName, examDate, elementId) {
    const countdownElement = document.querySelector(`#${elementId} span`);
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = examDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "Exam Finished";
        }
    }, 1000);
}

Object.keys(examDates).forEach((examName, index) => {
    startCountdown(examName, examDates[examName], `countdown-${index + 1}`);
});

// Motivation quotes
const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If you can dream it, you can achieve it. - Zig Ziglar",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
];

function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

displayRandomQuote();

// Automatic update of motivational quotes
function updateQuote() {
    displayRandomQuote();
    setTimeout(updateQuote, 10000); // Update quote every 10 seconds
}

updateQuote();

// Pomodoro timer
let pomodoroInterval;
let pomodoroMinutes = 25;
let pomodoroSeconds = 0;

function startPomodoroTimer() {
    pomodoroInterval = setInterval(() => {
        if (pomodoroSeconds === 0) {
            if (pomodoroMinutes === 0) {
                clearInterval(pomodoroInterval);
                alert("Time's up! Take a break.");
                resetPomodoroTimer();
            } else {
                pomodoroMinutes--;
                pomodoroSeconds = 59;
            }
        } else {
            pomodoroSeconds--;
        }

        updatePomodoroTimerDisplay();
    }, 1000);
}

function resetPomodoroTimer() {
    clearInterval(pomodoroInterval);
    pomodoroMinutes = 25;
    pomodoroSeconds = 0;
    updatePomodoroTimerDisplay();
}

function updatePomodoroTimerDisplay() {
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    minutesElement.textContent = pomodoroMinutes.toString().padStart(2, "0");
    secondsElement.textContent = pomodoroSeconds.toString().padStart(2, "0");
}

const startTimerButton = document.getElementById("start-timer");
const resetTimerButton = document.getElementById("reset-timer");

startTimerButton.addEventListener("click", startPomodoroTimer);
resetTimerButton.addEventListener("click", resetPomodoroTimer);