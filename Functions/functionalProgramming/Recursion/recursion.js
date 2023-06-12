/* in recursive programming,a function call itself until a the base condition satisfied
for recursion to work, there should be a base which the answer eventuall converge to that
*/

function recursive(x) {
  if (x > 0) {
    console.log(x);
    return recursive(x - 1);
  }
}
console.log(recursive(10));

const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i);
  } catch {
    return i;
  }
};

console.log(getMaxCallStackSize(0));

function factorial(n) {
  if (n < 2) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function fibbonaci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibbonaci(n - 1) + fibbonaci(n - 2);
  }
}

console.log(fibbonaci(13));

const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(7));
// 55
