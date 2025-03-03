const showWpmResult = document.querySelector("#show-wpm-result");
let idInterval;

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let time = 0;
idInterval = setInterval(() => {
  if (milliseconds < 9) {
    milliseconds++;
  } else {
    if (seconds < 59) {
      seconds++;
    } else {
      if (minutes < 59) {
        minutes++;
      } else {
        if (hours < 24) {
          hours++;
        } else {
          alert("please stop typing bruh");
        }
        minutes = 0;
      }
      seconds = 0;
    }
    milliseconds = 0;
  }

  time = hours * 60 + minutes + seconds / 60 + milliseconds / 600;

  showWpmResult.innerHTML = `${hours}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padEnd(
    2,
    "0"
  )}`;
}, 100);

export function finishTimer() {
  clearInterval(idInterval);
}

export function timer() {
  return time;
}
