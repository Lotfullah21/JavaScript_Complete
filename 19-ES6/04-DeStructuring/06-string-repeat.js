const hello = "Hello";
console.log(hello.repeat(10));

const goOn = (str, amount = 10) => {
  console.log(str.repeat(amount));
};

goOn(hello, 30);
console.log("without any parameter");
goOn(hello);
