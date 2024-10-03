function solution(input) {
  const [str, idx] = input;
  return str[idx - 1];
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "27866/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));
