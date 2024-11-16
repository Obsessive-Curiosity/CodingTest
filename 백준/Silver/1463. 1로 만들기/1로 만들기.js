function solution(input) {
  const N = Number(input);
  const dp = [null, 0];

  for (let i = 2; i <= N; i++) {
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1);
    }
    if (i % 2 === 0 && i % 3 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1, dp[i / 3] + 1);
    }
    if (i % 2 !== 0 && i % 3 !== 0) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  console.log(dp[N]);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "1463/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);