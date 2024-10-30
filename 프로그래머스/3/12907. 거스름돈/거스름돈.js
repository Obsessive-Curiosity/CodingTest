function solution(n, money) {
  dp = Array(n + 1).fill(0);
  dp[0] = 1;

  console.log(dp);

  for (const coin of money) {
    for (let price = coin; price < n + 1; price++) {
      dp[price] += dp[price - coin];
    }
  }

  return dp[n];
}