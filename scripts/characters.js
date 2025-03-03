const inputTypingTest = document.querySelector("#input-typing-test");

export function charactersTyped() {
  const inputValue = inputTypingTest.value;
  const nonSpaceCharacters = inputValue.replace(/ /g, "");
  const totalCharacters = nonSpaceCharacters.length;
  return totalCharacters;
}
