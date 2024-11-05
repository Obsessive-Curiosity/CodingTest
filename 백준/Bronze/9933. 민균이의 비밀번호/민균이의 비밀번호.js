function check(obj) {
  const result = Object.entries(obj)
    .filter(([key, value]) => value === 2)
    .map(([key, _]) => key);

  const target = result[0];
  const len = target.length;
  const mid = target[Math.floor(len / 2)];

  return `${len} ${mid}`;
}

function solution(input) {
  const N = input.shift();
  const passwordList = input;
  const hash = {};

  // val = 2인 key값이 비번이다
  for (const pw of passwordList) {
    const reversed = pw.split("").reverse().join("");
    hash[pw] = (hash[pw] ?? 0) + 1;
    hash[reversed] = (hash[reversed] ?? 0) + 1;
  }

  console.log(check(hash));
}

const { reverse } = require("dns/promises");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241105.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);