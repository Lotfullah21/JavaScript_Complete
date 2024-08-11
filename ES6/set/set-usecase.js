const colleges = [
    {
    name: "MIT",
    field: "Computer Science"},
    {
    name: "CMU",
    field: "Deep learning"},
    {
    name: "Stanford",
    field: "MBA"},
    {
    name: "UC Berkely",
        field: "Artificial intelligence"
    },
    {
    name: "Stanford",
    field: "Artificial intelligence"},
]
const universities = colleges.map(college => college.name)
const uniqueUniversities = new Set(universities)
const universitiesArray =[...uniqueUniversities]
console.log(universities)
console.log(uniqueUniversities)
console.log(universitiesArray)