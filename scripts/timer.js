const showWpmResult = document.querySelector("#show-wpm-result");
const buttonFinishTimer = document.querySelector("#finish-timer");

let idInterval;
let idDisplayInterval;
let timerRunning = false;

let minutes = 0;
let tenMilliseconds = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

export function timer(updateCallback) {
  idDisplayInterval = setInterval(() => {
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

    showWpmResult.innerHTML = `${displayHours}:${String(
      displayMinutes
    ).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}`;
  }, 1000);
  idInterval = setInterval(() => {
    timerRunning = true;
    tenMilliseconds++;
    minutes = tenMilliseconds / 6000;
    minutes = minutes.toFixed(3);
  }, 10);
}

export function finishTimer() {
  clearInterval(idInterval);
  clearInterval(idDisplayInterval);

  timerRunning = false;

  return minutes;
}
