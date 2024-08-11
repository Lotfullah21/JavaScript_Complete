// Syntax
// try block will be executed first, if any error or exception, then catch block will be executed,
// and the finally block will be executed at the end regardless of the reuslt
// try {
//   tryStatements;
// } catch (exceptionVar) {
//   catchStatements;
// } finally {
//   finallyStatements;
// }

try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}

try {
  throw "Oops; this is not an Error object";
} catch (e) {
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  console.error(e.message);
}
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

try {
  myroutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }
}
