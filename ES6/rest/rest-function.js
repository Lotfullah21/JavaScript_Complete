const marks = [12, 12, 12, 32, 10, 12, 12, 12, 32, 43];

function average(name, ...scores) {
  console.log(name);
  console.log(scores);
  total = 0;
  for (const score of scores) {
    total = total + score;
  }
  avg = total / scores.length;
  console.log(name, "'s average is =", avg);
}

average("ahmad", 12, 12, 12, 321, 12);
average("king", ...marks);
