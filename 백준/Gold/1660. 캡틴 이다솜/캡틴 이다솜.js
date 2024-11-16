function solution(input) {
  const N = Number(input);
  const tetrahedron = [0, 1];
  const dp = Array(N + 1).fill(Infinity);
  dp[0] = 0;

  // 포탄 넣기
  let i = 1;
  while (tetrahedron[i] < N) {
    i++;
    tetrahedron[i] = tetrahedron[i - 1] + (i * (i + 1)) / 2;
  }

  // DP이용 포탄 최소 개수 구하기
  for (const t of tetrahedron) {
    for (let j = t; j <= N; j++) {
      dp[j] = Math.min(dp[j], dp[j - t] + 1);
    }
  }

  console.log(dp[N]);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "1660/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);