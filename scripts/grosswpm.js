import { charactersTyped } from "./characters.js";
import { finishStopwatch } from "./timer.js";

export function grossWpm() {
  const typedEntries = charactersTyped() / 5;
  const time = finishStopwatch();
  const rawWpm = typedEntries / time;
  console.log(typedEntries);
  console.log(time);
  console.log(rawWpm);
}
