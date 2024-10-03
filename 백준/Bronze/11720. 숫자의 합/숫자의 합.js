function solution(input) {
  const [_, str] = input;
  const sum = str
    .split("")
    .map(Number)
    .reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
  console.log(sum);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);