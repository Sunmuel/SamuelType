const showWpmResult = document.querySelector("#show-wpm-result");
const finishTimer = document.querySelector("#finish-timer");
let idInterval;

let hours = 0;
let minutes = 0;
let seconds = 0;
let time = 0;
idInterval = setInterval(() => {
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

  time = hours * 3600 + minutes * 60 + seconds;

  showWpmResult.innerHTML = `${hours}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}, 1000);

finishTimer.addEventListener("click", () => {
  clearInterval(idInterval);
});

export function timer() {
  return time;
}
