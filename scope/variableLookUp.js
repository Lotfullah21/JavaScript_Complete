/*
in a block of code, if we need a variable, first we will look if that variable is defined within the block of code and take the value, i
if the value is not defined inside the block,then we can go outside of the block and look if the variable is defined there.
so the look up hierarchy is from bottom to top.
we can look from inside to outside for a variable, but not from the other way.
*/

const age = 12;
function sayMyAge(p1, p2) {
  const age = 10;
  const total = (p1 + p2) * age;
  console.log(total);
  return total;
}
sayMyAge(1, 2);
