function show() {
  console.log(this);
}

const afg = {
  name: "Afghanistan",
  region: "Asia",
  show: show,
};
const ind = {
  name: "India",
  region: "South Asia",
  show: show,
};
ind.show(); // points to ind object.
afg.show(); // points to afg object.
show(); // points to global object
