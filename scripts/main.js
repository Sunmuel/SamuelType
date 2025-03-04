import { timer, finishTimer } from "./timer.js";
import { charactersTyped } from "./characters.js";
import { grossWpm } from "./grosswpm.js";
const inputTypingTest = document.querySelector("#input-typing-test");
const buttonFinishTimer = document.querySelector("#finish-timer");
const buttonInsertTime = document.querySelector("#insert-time-button");
const buttonStopWatch = document.querySelector("#stopwatch-button");
const containerInsertTimer = document.querySelector("#insert-time-container");

inputTypingTest.addEventListener("paste", (event) => event.preventDefault());
document.addEventListener("contextmenu", (event) => event.preventDefault());

buttonInsertTime.addEventListener("click", () => {
  containerInsertTimer.innerHTML += `
    <input id="insert-time-input" type="number">
    <button id="insert-button">Insert</button>
  `;
  const insertTimeInput = document.querySelector("#insert-time-input");
  const insertButton = document.querySelector("#insert-button");
  insertButton.addEventListener("click", () => {
    const timeInserted = insertTimeInput.value;
    console.log(timeInserted);
  });
});

buttonStopWatch.addEventListener("click", () => {
  timer();
});

buttonFinishTimer.addEventListener("click", () => {
  grossWpm();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.shiftKey) {
    grossWpm();
  }
});
