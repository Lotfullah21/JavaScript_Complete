console.log("Hello I am first");
console.log("Hello I am second");
looping();
console.log("Hello I am third");
ask();
console.log("Hello I am fourth");
console.log("Hello I am fifth");

function ask() {
  console.log("I AM FROM FUNCTION CALL");
}

function looping() {
  for (let i = 0; i < 1000000000; i++) {
    // console.log("move on");
  }
  console.log("Loop is finished");
}

console.log("I am the last one");
