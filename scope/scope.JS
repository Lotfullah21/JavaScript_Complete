let name = "Ahmad";
name = "Mahmood";
console.log(name);

function say() {
  console.log(name);
  name = "Barak";
  console.log(name);
  function hello() {
    name = "hello I am from inner function";
    console.log(name);
  }
  hello();
}
say();
name = "Zafar";
console.log(name);
