const colleges = [
	{
		name: "MIT",
		field: "Computer Science",
	},
	{
		name: "CMU",
		field: "Deep learning",
	},
	{
		name: "Stanford",
		field: "MBA",
	},
	{
		name: "UC Berkley",
		field: "Artificial intelligence",
	},
	{
		name: "Stanford",
		field: "Artificial intelligence",
	},
];
const universities = colleges.map((college) => college.name);
// create a set of universities
const uniqueUniversities = new Set(universities);
// Convert it to an array
const universitiesArray = [...uniqueUniversities, "all"];
console.log(universities);
console.log(uniqueUniversities);
console.log(universitiesArray);
