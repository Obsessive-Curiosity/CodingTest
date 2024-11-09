function reversedFunc(string) {
  const splited = string.split(" ");
  const reversed = [];

  while (splited.length > 0) {
    reversed.push(splited.pop());
  }

  return reversed;
}

function solution(input) {
  const N = input.shift();
  const strings = input;
  const result = [];

  strings.forEach((string, index) => {
    const reversedString = reversedFunc(string).join(" ");
    result[index] = `Case #${index + 1}: ${reversedString}`;
  });

  console.log(result.join("\n"));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);