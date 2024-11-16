function solution(input) {
  const N = Number(input);
  const dp = [null, 1, 2];

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10_007;
  }

  console.log(dp[N]);
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "11726/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);