const subjects = ["AI", "PY", "ML", "DL", "ALGO"];

// unshift adds the element to the beginning of an array
subjects.unshift("JAVA");
console.log("Unshifted array =", subjects);

// Remove the first element.
subjects.shift();
console.log("Shifted array =", subjects);

// Add to the beginning of the subjects array.
subjects.unshift("Spring boot");
console.log("Shifted array", subjects);
