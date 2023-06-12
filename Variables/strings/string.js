console.log("cat"[0]);
console.log("cat".charAt(1));

console.log("cat".charAt(2));

const a = "9";
const b = "2";

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (a < b) {
  console.log(`${b} is greater than ${a}`);
}
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
console.log(areEqualCaseInsensitive(a, b));
