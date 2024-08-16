// function courses(a, b, c) {
//   compact = "These are the courses offered by " + c + ", " + b + ", " + a;
//   console.log(compact);
// }

// courses("Python", "Machine Learning", "HoshmandLab");
// courses("Deep Learning", "Computer Vision", "HoshmandLab");

// function goThrough(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(i + 1, arr[i]);
//   }
// }

// goThrough([1, 2, 3, 4, 12, 13, 14, 15, 21, 222, 23, 23, 25]);

// courses = [
//   "Python",
//   "Machine Learning",
//   "Deep Learning",
//   "Reinforcement Learning",
// ];

// goThrough(courses);

// var time = ["2 months", "2 month", "2 months"];
// goThrough(time);

// function letterFinder(word, match) {
//   for (var i = 0; i <= word.length; i++) {
//     if (word[i] === match) {
//       console.log("Found the match", word[i], "at", i);
//     } else {
//       console.log("Match was not found");
//     }
//   }
// }

// word = "king";
// match = "i";
// letterFinder(word, match);

// Math.random() generates a number bwtween 0 and 1
function random(num) {
  return Math.floor(Math.random() * num);
}

var num = random(100);
console.log(num);
