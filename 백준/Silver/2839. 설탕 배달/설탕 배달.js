function solution(input) {
  const num = Number(input);
  const pack5 = Array.from({ length: Math.floor(num / 5) + 1 }, (_, i) => i);
  const pack3 = Array.from({ length: Math.floor(num / 3) + 1 }, (_, i) => i);

  pack5.reverse();

  for (let p5 of pack5) {
    for (let p3 of pack3) {
      if (5 * p5 + 3 * p3 === num) {
        return p5 + p3;
      }
    }
  }
  return -1;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "2839/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const s = solution(input);
console.log(s);
