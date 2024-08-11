const set = new Set();
console.log(set);

set.add(3);
set.add("Hello");
set.add("Hello");
set.add("Hello");
set.add("Hello");
set.add(21);
set.add([12, 12, 121]);
console.log(set);
console.log(set.has(3));
console.log(set.delete(3));
console.log(set);
