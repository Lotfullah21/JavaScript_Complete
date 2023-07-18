function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.charAt(0).toUpperCase() + name.slice(1)}`;
}
function evening(name) {
  return `Good evening ${name}`;
}

function greet(name, callback) {
  console.log(`${callback(name)}, I am Ahmad`);
}

// do not invoke the callback function while calling higher order function. call it inside higher order function block
greet("jabob", morning);
greet("joseph", afternoon);
greet("ahmad", evening);
