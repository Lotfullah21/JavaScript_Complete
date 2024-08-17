setTimeout(() => {
  console.log("Hello king, WAIT FOR 8 SECONDS");
}, 8000);

setTimeout(() => {
  console.log("4 SECONDS");
  setTimeout(() => {
    console.log("3 SECONDS");
  }, 3000);
  setTimeout(() => {
    console.log("FINALLY");
  }, 5000);
}, 2000);
