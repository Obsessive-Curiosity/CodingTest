const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const chess = [1, 1, 2, 2, 2, 8];
const result = [];

for (let i = 0; i < 6; i++) {
  result.push(chess[i] - input[i]);
}

console.log(result.join(" "));