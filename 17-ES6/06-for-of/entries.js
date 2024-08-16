const Lab = {
  name: "HoshmandLab",
  area: "Technology",
  numSubjects: 3,
};

const keyValue = Object.entries(Lab);

// Apply map method and array destructuring.

const applyMap = keyValue.map((item) => {
  const [first, second, third] = item;
  console.log(first, second);
  return first;
});

// using for loop,we know this each array has two ele in it and we use two placeholders while destructuring.
for (const [first, second] of keyValue) {
  // const [first,second] = keyValue
  console.log("Using for loop");
  console.log(first, second);
}
