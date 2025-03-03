import { timer, finishTimer } from "./timer.js";
import { charactersTyped } from "./characters.js";
import { grossWpm } from "./grosswpm.js";
const inputTypingTest = document.querySelector("#input-typing-test");
const buttonFinishTimer = document.querySelector("#finish-timer");
const buttonInsertTime = document.querySelector("#insert-time-button");
const buttonStopWatch = document.querySelector("#stopwatch-button");

inputTypingTest.addEventListener("paste", (event) => event.preventDefault());
document.addEventListener("contextmenu", (event) => event.preventDefault());

timer();

buttonInsertTime.addEventListener("click", () => {
  console.log("insert");
});

buttonStopWatch.addEventListener("click", () => {
  console.log("stopwatch");
});

buttonFinishTimer.addEventListener("click", () => {
  finishTimer();
  grossWpm();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.shiftKey) {
    finishTimer();
    grossWpm();
  }
});
