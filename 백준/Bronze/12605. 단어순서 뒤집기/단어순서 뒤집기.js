function solution(input) {
  const N = input.shift();
  const strings = input;
  const result = [];

  strings.forEach((string, index) => {
    const reversedArray = string.split(" ").reverse();
    result.push(`Case #${index + 1}: ${reversedArray.join(" ")}`);
  });

  console.log(result.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241109.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
