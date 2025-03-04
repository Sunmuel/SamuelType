const showTimer = document.querySelector("#show-timer");
const buttonFinishTimer = document.querySelector("#finish-timer");

let idInterval;
let idDisplayInterval;
let insertTimeIntervalId;
export let timerRunning = false;

let seconds = 0;
let minutes = 0;
let tenMilliseconds = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

export function stopwatch() {
  if (timerRunning === false) {
    timerRunning = true;
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

      showTimer.innerHTML = `${displayHours}:${String(displayMinutes).padStart(
        2,
        "0"
      )}:${String(displaySeconds).padStart(2, "0")}`;
    }, 1000);

    idInterval = setInterval(() => {
      tenMilliseconds++;
      minutes = tenMilliseconds / 6000;
      minutes = minutes.toFixed(3);
    }, 10);
  }
}

export function insertTime(timeInserted) {
  // insertTimeIntervalId = setInterval(() => {
  //   seconds = timeInserted;
  //   if (timeInserted === 0) {
  //     alert("The time finished");
  //     clearInterval(insertTimeIntervalId);
  //   } else {
  //     timeInserted--;
  //     if (seconds > 0 && seconds < 59) {
  //       displaySeconds =
  //     } else if (seconds) {
  //     }
  //     showTimer.innerHTML = ``;
  //   }
  // }, 1000);
  // ===========================================================
  // ===========================================================
  // ===========================================================
  // let number = 7321;
  // let hours = 0;
  // let minutes = 0;
  // let seconds = 0;
  // hours = (number - (number % 3600)) / 3600;
  // number %= 3600;
  // minutes = (number - (number % 60)) / 60;
  // number %= 60;
  // seconds = number;
  // showTimer.innerHTML = `${hours}:${String(minutes).padStart(2, "0")}:${String(
  //   seconds
  // ).padStart(2, "0")}`;
  // setInterval(() => {
  //   number--;
  //   if (number / 3600 > 0) {
  //   }
  //   console.log(number);
  //   console.log(hours);
  // }, 1000);
}

export function finishStopwatch() {
  clearInterval(idInterval);
  clearInterval(idDisplayInterval);

  timerRunning = false;

  displaySeconds = 0;
  displayMinutes = 0;
  displayHours = 0;

  return minutes;
}

export function clearTime() {
  minutes = 0;
  tenMilliseconds = 0;
}
