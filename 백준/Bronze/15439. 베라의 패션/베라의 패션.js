function solution(input) {
  const N = Number(input);
  console.log(N * (N - 1));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);