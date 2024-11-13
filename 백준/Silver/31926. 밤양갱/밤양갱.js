function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function solution(input) {
  const N = Number(input);

  return 10 + Math.floor(getBaseLog(2, N));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = solution(input);
console.log(result);