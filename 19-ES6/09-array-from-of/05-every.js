const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// returns true if all condition meets
const smallerThanTen = nums.every((num) => num < 10);
console.log(smallerThanTen);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// returns true even if one of the condition is meet.
const atleastSmallerThanTen = numbers.some((num) => num < 10);
console.log(atleastSmallerThanTen);
