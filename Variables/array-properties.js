const subjects = ["AI", "PY", "ML", "DL", "ALGO"];

console.log(subjects);
console.log(subjects.length);
console.log(subjects[subjects.length - 1]);

const web = ["js", "react", "css"];

const allInOne = web + subjects;
console.log("added array", allInOne, typeof allInOne);

// using concat method
const newArray = subjects.concat(web);
console.log("concated array", newArray, typeof newArray);
console.log(newArray[newArray.length - 1]);

// reverese the array
const reversedArray = newArray.reverse();
console.log(reversedArray);

// unshift adds the element in the begining of an array
newArray.unshift("JAVA");
console.log("shifted array", newArray);

// shift remove an element from the begining of an array, we don't need to add any argument
newArray.shift();
console.log("Shifted array", newArray);
newArray.unshift("Spring boot");
// newArray.shift("PY");
console.log("Shifted array", newArray);

// push add elements to the end of an array
newArray.push("Tensorflow");
console.log(newArray);
newArray.push("Pytorch");
console.log(newArray);

// pop removes the elements from end of an array, we don't need to add any argument.
newArray.pop();
console.log(newArray);

/* splice remove the specific element out of an array(mutates original array), or we can say it grabs those elements
it takes two parameters, one for starting index, and second how many elements we want to remove
*/

// newArray.splice("AI");
console.log("remove AI", newArray);

newArray.splice(5, 2); // starting from index 5, remove two elements
console.log("starting from index 5", newArray);

// string to array
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const newArr = data.split(",");
console.log("Converted array: ", newArr);

// array to string
const newString = newArr.join(",");
console.log("Converted string: ", newString);

for (let i = 0; i < newArr.length; i++) {
  console.log(i + 1, newArray[i]);
}
console.log("\n");

const AISubjects = ["python", "mathematics", "calculus", "optimization"];
const webSubjects = ["JavaScript", "Java", "Python", "React", "HTML/CSS"];
const field = "Artificial intelligence";
const webField = "Web Development";
for (let i = 0; i < AISubjects.length; i++) {
  console.log(i + 1, `${AISubjects[i]} ${field}`);
}
console.log("\n");
for (let i = 0; i < webSubjects.length; i++) {
  console.log(i + 1, `${webSubjects[i]} ${webField}`);
}
console.log("\n");
