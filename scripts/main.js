import {
  stopwatch,
  stopwatchRunning,
  timeInsertedRunning,
  insertTime,
} from "./timer.js";
import { charactersTyped } from "./characters.js";
import { grossWpm } from "./grosswpm.js";

const inputTypingTest = document.querySelector("#input-typing-test");
const inputContainer = document.querySelector("#input-container");
const insertTimeContainer = document.querySelector("#insert-time-container");
const buttonInsertTime = document.querySelector("#insert-time-button");
const buttonStopWatch = document.querySelector("#stopwatch-button");
const showTimer = document.querySelector("#show-timer");
const selectAnOptionAlert = document.querySelector("#select-an-option-alert");

inputTypingTest.addEventListener("paste", (event) => event.preventDefault());
document.addEventListener("contextmenu", (event) => event.preventDefault());

let insertTimePressed = false;
let stopwatchPressed = false;

buttonInsertTime.classList.add("insert-time-button-unpressed");
buttonInsertTime.addEventListener("click", () => {
  if (!insertTimePressed) {
    insertTimePressed = true;
    stopwatchPressed = false;
    buttonInsertTime.classList.remove("insert-time-button-unpressed");

    showTimer.innerHTML = "";

    if (inputTypingTest.value) {
      inputTypingTest.value = "";
    }

    insertTimeContainer.innerHTML += `
      <input type="number" id="insert-time-input" autocomplete="off" />
      <button id="insert-button">Insert</button>
    `;

    const insertTimeInput = document.querySelector("#insert-time-input");
    const insertButton = document.querySelector("#insert-button");

    let timeInserted;

    insertButton.addEventListener("click", () => {
      if (!timeInsertedRunning) {
        timeInserted = insertTimeInput.value;
        insertTime(timeInserted);
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (!timeInsertedRunning) {
          timeInserted = insertTimeInput.value;
          insertTime(timeInserted);
        }
      }
    });
  }
});

buttonStopWatch.addEventListener("click", () => {
  if (!stopwatchRunning && !stopwatchPressed) {
    stopwatchPressed = true;
    insertTimePressed = false;

    showTimer.innerHTML = "00:00";
    insertTimeContainer.innerHTML = "";
    buttonInsertTime.classList.add("insert-time-button-unpressed");

    inputTypingTest.addEventListener("input", () => {
      if (stopwatchPressed) {
        stopwatch();
      }
    });

    if (inputTypingTest.value) {
      inputTypingTest.value = "";
    }
  }
});
window.addEventListener("keydown", (event) => {
  if (stopwatchPressed) {
    if (event.key === "Enter" && event.shiftKey) {
      stopwatchPressed = false;
      grossWpm();
    }
  }
});

let alertTimeout = false;
inputTypingTest.addEventListener("input", () => {
  if (!insertTimePressed && !stopwatchPressed && !alertTimeout) {
    alertTimeout = true;
    selectAnOptionAlert.innerHTML = `&#9888;&#65039 You should select an option`;
    setTimeout(() => {
      inputTypingTest.value = "";
      selectAnOptionAlert.innerHTML = "";
      alertTimeout = false;
    }, 3000);
  }
});
