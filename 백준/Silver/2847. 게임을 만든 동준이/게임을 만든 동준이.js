function solution(input) {
  const level = input.shift();
  const scores = input.map(Number);
  let result = 0;

  for (let i = scores.length - 1; i > 0; i--) {
    const [pre, now] = [scores[i - 1], scores[i]];

    if (pre >= now) {
      const reduced = pre - now + 1;
      scores[i - 1] -= reduced;
      result += reduced;
    }
  }

  console.log(result);
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "241112_middle.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);