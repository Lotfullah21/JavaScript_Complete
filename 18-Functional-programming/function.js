const myText = "I am a string";
const newString = myText.replace("stridng", "sausage");

console.log(newString);

// Optional parameters

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

// Anonymous Function
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
// anon
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
