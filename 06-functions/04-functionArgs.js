// we use parameters when we declare a function and arguments when calling a function.

function courses(a, b, c) {
	compact = "The following courses are offered by " + c + ":   " + b + ", " + a;
	console.log(compact);
}

courses("Python", "Machine Learning", "HooshmandLab");
courses("Deep Learning", "Computer Vision", "HooshmandLab");
