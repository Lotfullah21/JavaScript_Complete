const addOne = require("./addOne");

test("reqire to add one to the arguments", () => {
  expect(addOne(1)).toBe(2);
});

test("reqire to add one to the arguments", () => {
  expect(addOne(4)).toBe(5);
});
