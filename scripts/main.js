import { timer } from "./timer.js";
const inputTypingTest = document.querySelector("#input-typing-test");
const finishTimer = document.querySelector("#finish-timer");
timer();

finishTimer.addEventListener("click", () => {
  console.log(timer());
});
