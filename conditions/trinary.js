function trinary(x) {
  return x > 0 ? (x += 100) : (x -= 100);
}

console.log(trinary(20));
