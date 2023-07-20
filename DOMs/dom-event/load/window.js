/*
setTimeout: runs a function once for a specific duration
setInterval: it works same, but it executes the reference fuction repeatedly after the given interval.
 */

window.addEventListener("load", function () {
  console.log("i am from loaded");
  const img = this.document.querySelector("img");
  console.log(img);
  console.log(img.width);
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("i AM FROM DOMContetloaded");
  const img = this.document.querySelector("img");
  console.log(img);
  console.log(img.width);
});
