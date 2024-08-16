const subjects = ["AI", "PY", "ML", "DL", "ALGO"];

const web = ["js", "react", "css"];

const allInOne = web + subjects;

console.log("concatenated", allInOne, typeof allInOne);

// Add the web array to the end of subjects
const newArray = subjects.concat(web);
console.log("concatenated array", newArray, typeof newArray);
