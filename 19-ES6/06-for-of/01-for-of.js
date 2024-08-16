const countries = ["India", "Iran", "Japan", "China", "Belgium"];

for (country of countries) {
	console.log(country);
}

for (country of countries) {
	if (country === "Iran") {
		break;
	}
	console.log("From break", country);
}

for (const country of countries) {
	// If the condition is meet, simply ignore the current index and go to next index.
	if (country === "Iran") {
		continue;
	}
	console.log("From continue", country);
}
