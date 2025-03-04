import { charactersTyped } from "./characters.js";
import { timer, finishTimer } from "./timer.js";

export function grossWpm() {
  const typedEntries = charactersTyped() / 5;
  const time = finishTimer();
  const rawWpm = typedEntries / time;
  console.log(typedEntries);
  console.log(time);
  console.log(rawWpm);
}
