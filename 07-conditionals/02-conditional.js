if (true) {
	console.log("the value is true");
}

const value1 = 1 < 2;
if (value1) {
	console.log("Hello");
}

let hardWork = true;
let jobDone;
let jobNotDone;
if (hardWork == true) {
	jobDone = "HooshmandLab can be brought to reality";
	console.log(jobDone);
} else {
	jobNotDone = "it will be buried in the grave yards";
	console.log(jobNotDone);
}

function canBeDone(a) {
	if (a == true) {
		jobDone = "HoshmandLab can be brought to reality by hardwork";
		console.log(jobDone);
	} else {
		jobNotDone = "it will burried in the grave yards due to procastination";
		console.log(jobNotDone);
	}
}
canBeDone(true);

let cheese = "";
if (cheese) {
	console.log("Yay! Cheese available for making cheese on toast.");
} else {
	console.log("No cheese on toast for you today.");
}
