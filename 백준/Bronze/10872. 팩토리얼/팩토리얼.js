function Factorial(N) {
  return N < 2 ? 1 : N * Factorial(N - 1);
}

function Solution(input) {
  const N = Number(input);
  console.log(Factorial(N));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

Solution(input);