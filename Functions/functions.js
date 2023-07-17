// we use parameters when we declare a function and arguments when calling a function.

function courses(a, b, c) {
  compact = "These are the courses offered by " + c + ", " + b + ", " + a;
  console.log(compact);
}

courses("Python", "Machine Learning", "HoshmandLab");
courses("Deep Learning", "Computer Vision", "HoshmandLab");

function goThrough(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]);
  }
}

goThrough([1, 2, 3, 4, 12, 13, 14, 15, 21, 222, 23, 23, 25]);

courses = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Reinforcement Learning",
];

goThrough(courses);

var time = ["2 months", "2 month", "2 months"];
goThrough(time);

function letterFinder(word, match) {
  for (var i = 0; i <= word.length; i++) {
    if (word[i] === match) {
      console.log("Found the match", word[i], "at", i);
    } else {
      console.log("Match was not found");
    }
  }
}

word = "king";
match = "i";
letterFinder(word, match);

// by default functions return undefined value, if we want to return a value,we use a return keyword at the end of a function. note that after return statement, no lines of codes will be running.

function cal(a, b) {
  console.log(a + b);
}

cal(12, 12); // outputs 24 and return undefined

function calc(a, b) {
  console.log("by console.log", a + b);
  return `by return ${a + b}`;
}

summation = calc(12, 12);
console.log(summation); // since we return a value,we need to save them in some place and print to the screen

// Function expression : this is another way of defining a function, bu assiging the whole function to a variable and later on referencing to that function using that variable.
// we can either omit the name which in this case it becomes anonymous function or keep the function name.

const multiply = function mul(a, b) {
  return a * b;
};

const result = multiply(2b, 12);
console.log(result);
