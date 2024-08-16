// any thing inside {}

const num1 = 120;
{
  const num1 = 120021;
  console.log("Block Scope", num1);
}
console.log("Global scope", num1);

let num2 = 232;
{
  let num2 = 0;
  console.log("Local", num2);
}

console.log("Global", num2);

// we can see that var changed the values inside the block
var num = 232;
{
  var num = 0;
  console.log("Local var", num);
}
console.log("Global var", num);
