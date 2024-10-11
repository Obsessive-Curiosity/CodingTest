function Factorial(N) {
  return N < 2 ? 1 : N * Factorial(N - 1);
}

function Solution(input) {
  const [N, K] = input.split(" ").map(Number);
  if (0 <= K && K <= N) {
    console.log(Factorial(N) / (Factorial(K) * Factorial(N - K)));
  } else {
    console.log(0);
  }
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

Solution(input);