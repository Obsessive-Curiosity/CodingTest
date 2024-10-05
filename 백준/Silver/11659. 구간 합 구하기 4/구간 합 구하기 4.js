function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const numbers = input.shift().split(" ").map(Number);
  const prefixSum = new Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
  }

  input.forEach((query) => {
    const [start, end] = query.split(" ").map(Number);
    console.log(prefixSum[end] - prefixSum[start - 1]);
  });
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
