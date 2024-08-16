const subjects = ["ml", "dl", "AI", "quantum computing", "big data"];
const contains = subjects.includes("dl");
console.log(contains);
const containsL = subjects.filter((subject) => subject.includes("l"));
console.log(containsL);
