function goThrough(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(i, arr[i]);
	}
}

goThrough([10, 20, 30, 40, 12, 13, 14, 15, 21, 222, 23, 23, 25]);

courses = [
	"Python",
	"Machine Learning",
	"Deep Learning",
	"Reinforcement Learning",
];
goThrough(courses);

var time = ["2 months", "2 months", "2 months"];
goThrough(time);

function letterFinder(word, match) {
	for (var i = 0; i <= word.length; i++) {
		if (word[i] === match) {
			console.log("Found the match", word[i], "at index", i);
		} else {
			console.log("Match was not found");
		}
	}
}

word = "king";
match = "i";
letterFinder(word, match);
