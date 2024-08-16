// First example
name = "Ahmad";
console.log(name.toUpperCase()); // AHMAD
console.log(name.toLowerCase()); // ahmad

// Second example
const a = "9";
const b = "2";
function areEqualCaseInsensitive(str1, str2) {
	return str1.toUpperCase() >= str2.toUpperCase();
}
console.log(areEqualCaseInsensitive(a, b));
