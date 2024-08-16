// function hoisted
hello();

// functino with variables which will cause the error
helloVar();

const sub = "Machine learning";
console.log(sub);
console.log(dl);
var dl = "Machine learning";

// function hoisting
function hello() {
  console.log("hello world");
}

function helloVar() {
  console.log(`hello ${dl} ${sub}`);
}

helloVar();
