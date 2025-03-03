const showWpmResult = document.querySelector("#show-wpm-result");

export function timer() {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  setInterval(() => {
    if (seconds < 60) {
      seconds++;
    } else {
      if (minutes < 60) {
        minutes++;
      } else {
        if (hours < 24) {
          hours++;
        } else {
          console.log("please stop typing nigga");
        }
        minutes = 0;
      }
      seconds = 0;
    }

    showWpmResult.innerHTML = `${hours}:${String(minutes).padStart(
      "2",
      0
    )}:${String(seconds).padStart("2", 0)}`;
  }, 1000);
}
