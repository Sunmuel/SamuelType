import { charactersTyped } from "./characters.js";
import { timer } from "./timer.js";

export function grossWpm() {
  const typedEntries = charactersTyped() / 5;
  const time = timer();
  const rawWpm = typedEntries / time;
  console.log(typedEntries);
  console.log(time);
  console.log(rawWpm);
}
