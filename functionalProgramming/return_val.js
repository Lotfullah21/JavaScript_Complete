function lab(val) {
  return {
    Course: val,
  };
}

console.log(lab("Python"));

c = 10;

function call() {
  console.log(c);
  c = c - 1;
  if (c === 0) {
    return;
  }
  call();
}

console.log(call());
