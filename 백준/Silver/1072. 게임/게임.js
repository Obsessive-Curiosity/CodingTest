function solution(input) {
  const [total, win] = input.map((v) => Number(v));
  const winRate = Math.floor((win * 100) / total); // 현재 승률을 계산

  // 승률이 99% 이상인 경우
  if (winRate >= 99) {
    console.log(-1);
    return;
  }

  const targetWinRate = winRate + 1;
  const result = (targetWinRate * total - 100 * win) / (100 - targetWinRate);

  console.log(Math.ceil(result));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "1072/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);
