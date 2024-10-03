function solution(input) {
  const [len, ...strArr] = input;

  strArr.forEach((str) => {
    console.log(`${str.slice(0, 1)}${str.slice(-1)}`);
  });
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
