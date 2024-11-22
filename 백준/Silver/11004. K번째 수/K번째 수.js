function solution(input) {
  const [N, K] = input.shift().split(" ").map(Number);
  const A = input.shift().split(" ").map(Number);

  A.sort((a, b) => a - b);
  console.log(A[K - 1]);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241123.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);