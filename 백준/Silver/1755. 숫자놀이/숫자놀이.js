function solution(input) {
  const [M, N] = input.shift().split(" ").map(Number);
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const hash = {};

  for (let i = M; i <= N; i++) {
    const numStr = i.toString().split("").map(Number);
    const alpha = [];
    for (const str of numStr) {
      alpha.push(number[str]);
    }
    hash[alpha.join(" ")] = i;
  }

  const result = Object.keys(hash)
    .sort()
    .map((key) => hash[key]);

  for (let i = 0; i < result.length; i += 10) {
    console.log(result.slice(i, i + 10).join(" "));
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241127.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n\n");

solution(input);