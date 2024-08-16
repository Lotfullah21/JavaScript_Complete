const subjects = [
	"Artificial Intelligence",
	"Deep Learning",
	"Machine Learning",
	"Python",
];

// accessing the values through indexing
const sub1 = subjects[0];
const sub2 = subjects[1];
const sub3 = subjects[2];
const sub4 = subjects[3];
console.log(sub1, sub2, sub3, sub4);

// accessing through destructuring
const [su1, su2, su3, su4, su5, su6] = subjects;
console.log(su1, su2, su3, su4, su5, su6);
console.log(su1, su2, su5);

// if we want to skip any element,we can put a comma instead of that value
const [s1, , s3] = subjects;
console.log(s1, s3);
