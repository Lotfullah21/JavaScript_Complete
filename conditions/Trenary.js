let name = "ahmad";
if (name) {
  console.log("HELLO");
} else {
  console.log("NOT TRUE");
}

name ? console.log("HELLLLLLLLO") : console.log("NOT TRUE");

function trinary(x) {
  return x > 0 ? (x += 100) : (x -= 100);
}

console.log(trinary(20));
