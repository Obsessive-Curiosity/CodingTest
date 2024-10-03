function solution(input) {
  console.log(input.charCodeAt());
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);
