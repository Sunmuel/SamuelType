const showTimer = document.querySelector("#show-timer");
const buttonFinishTimer = document.querySelector("#finish-timer");
const inputTypingTest = document.querySelector("#input-typing-test");

let idInterval;
let idDisplayInterval;
let insertTimeIntervalId;

export let stopwatchRunning = false;
export let timeInsertedRunning = false;

let hours = 0;
let minutes = 0;
let seconds = 0;
let tenMilliseconds = 0;

let displayMilliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

export function stopwatch() {
  if (stopwatchRunning === false) {
    stopwatchRunning = true;
    idDisplayInterval = setInterval(() => {
      if (displayMilliseconds < 100) {
        displayMilliseconds++;
      } else {
        if (displaySeconds < 59) {
          displaySeconds++;
        } else {
          if (displayMinutes < 59) {
            displayMinutes++;
          } else {
            if (displayHours < 24) {
              displayHours++;
            } else {
              alert("bruh, stop typing mate, please");
              displayHours = 0;
            }
            displayMinutes = 0;
          }
          displaySeconds = 0;
        }
        displayMilliseconds = 0;
      }

      if (displayHours >= 1) {
        showTimer.innerHTML = `${displayHours}:${String(
          displayMinutes
        ).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}:${String(
          displayMilliseconds
        ).padStart(2, "0")}`;
      } else if (displayMinutes >= 1 && displayHours === 0) {
        showTimer.innerHTML = `${String(displayMinutes).padStart(
          2,
          "0"
        )}:${String(displaySeconds).padStart(2, "0")}:${String(
          displayMilliseconds
        ).padStart(2, "0")}`;
      } else if (displayHours === 0 && displayMinutes === 0) {
        showTimer.innerHTML = `${String(displaySeconds).padStart(
          2,
          "0"
        )}:${String(displayMilliseconds).padStart(2, "0")}`;
      }
    }, 10);

    idInterval = setInterval(() => {
      tenMilliseconds++;
      minutes = tenMilliseconds / 6000;
      minutes = minutes.toFixed(3);
    }, 10);
  }
}

export function insertTime(timeInserted) {
  hours = (timeInserted - (timeInserted % 3600)) / 3600;
  minutes = timeInserted % 3600;
  minutes = (minutes - (minutes % 60)) / 60;
  seconds = timeInserted % 60;

  showTimer.innerHTML = `${hours}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  inputTypingTest.addEventListener("input", () => {
    if (!timeInsertedRunning) {
      timeInsertedRunning = true;
      insertTimeIntervalId = setInterval(() => {
        if (timeInserted > 0) {
          timeInserted--;
        } else {
          clearInterval(insertTimeIntervalId);
          timeInsertedRunning = false;
        }

        hours = (timeInserted - (timeInserted % 3600)) / 3600;
        minutes = timeInserted % 3600;
        minutes = (minutes - (minutes % 60)) / 60;
        seconds = timeInserted % 60;

        showTimer.innerHTML = `${hours}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`;
      }, 1000);
    }
  });
}

export function finishStopwatch() {
  clearInterval(idInterval);
  clearInterval(idDisplayInterval);

  stopwatchRunning = false;

  displaySeconds = 0;
  displayMinutes = 0;
  displayHours = 0;

  return minutes;
}

export function clearTime() {
  minutes = 0;
  tenMilliseconds = 0;
}
