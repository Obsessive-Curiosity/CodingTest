function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const array = input;
  const hash = {};
  const result = [];

  for (const name of array) {
    hash[name] = hash[name] ? hash[name] + 1 : 1;
  }

  for (const name in hash) {
    if (hash[name] > 1) result.push(name);
  }

  console.log(result.length);
  console.log(result.sort().join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "1764/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);