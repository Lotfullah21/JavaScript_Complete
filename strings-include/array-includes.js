const subjects = ["ml", "dl", "AI", "qunatum computing", "big data"]
const contais = subjects.includes("dl")
console.log(contais)
const containsdl = subjects.filter(subject => subject.includes("l"))
console.log(containsdl)