function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const A = input.slice(0, N).map((item) => item.split(" ").map(Number));
  const B = input.slice(N).map((item) => item.split(" ").map(Number));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      A[i][j] += B[i][j];
    }
  }

  console.log(A.map((row) => row.join(" ")).join("\n"));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);