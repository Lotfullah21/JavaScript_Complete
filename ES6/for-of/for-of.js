const countries = ["India", "Iran", "Japan", "China", "Belgium"];

for (const country of countries) {
  //   console.log(country);
}
for (const country of countries) {
  if (country === "Iran") {
    break;
  }
  console.log(country);
  // continue;
}

for (const country of countries) {
  if (country === "Iran") {
    continue;
  }
  console.log(country);
}
