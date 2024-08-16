const numbers = [1, 2, 3, 45, 6, 2];
console.log("numbers =", numbers);

const arrayList = ["hello", 1, 2, 3, "12"];
console.log(arrayList[0]);

// Nested list: one list inside another list
const nestedArray = ["hello", 1, 2, 3, "12", [21, 112, 121, "ahmad"]];
console.log("nested", nestedArray[5][2]);

// Adding using indexing and replacing the 0th index with new elements
arrayList[0] = "Good Bye";
console.log(arrayList);

console.log("index of good bye =", arrayList.indexOf("Good Bye"));

// It does not exist, so return -1
console.log("index of 210 =", arrayList.indexOf("210"));

const subjects = ["AI", "PY", "ML", "DL", "ALGO"];
console.log("total number of elements =", subjects.length);
