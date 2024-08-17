console.log("Hello world");
console.log("I am second");

function greeting() {
  console.log("I am coming from Timeout after 10 minimum of 10 seconds");
}

console.log("I am third");
console.log("I am fourth");
console.log("I am fifth");

setTimeout(greeting, 10000);
