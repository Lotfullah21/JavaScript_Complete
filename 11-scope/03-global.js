const age = 12;
function sayMyAge(p1, p2) {
	const age = 10;
	const total = (p1 + p2) * age;
	w = "d";
	console.log(total);
	return total;
}

sayMyAge(1, 2);
// If we did not invoked the function, we would not have access to variable `w`.
console.log(w);
