var marks = [1, 4, 6, 8, 10, 12, 14, 15, 18, 20];
sum = 0;
// 'i' is used for indexing through array
if (marks.length > 0) {
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
}
const average = sum / marks.length;
console.log("Average marks: ", average);

// using while loop,we need to declare the indexing variable outside
//  the loop, and increment it inside the body of the loop
j = 0;
summation = 0;
while (j < marks.length) {
  summation = summation + marks[j];
  j = j + 1;
}

const avg = sum / marks.length;
console.log("Average marks: ", avg);
