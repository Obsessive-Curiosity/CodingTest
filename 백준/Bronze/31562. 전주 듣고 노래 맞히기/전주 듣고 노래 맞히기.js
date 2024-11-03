function check(sing, targetScore) {
  const result = [];

  for (const target of targetScore) {
    if (sing[target]) {
      const titleCount = sing[target].length;
      result.push(titleCount > 1 ? "?" : sing[target][0]);
    } else {
      result.push("!");
    }
  }

  return result;
}

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const array = input.slice(0, N).map((item) => item.split(" "));
  const targetScore = input.slice(N);
  const sing = {};

  for (const arr of array) {
    const [title, score] = [arr[1], arr.slice(2, 5).join(" ")];
    if (sing[score]) {
      sing[score].push(title);
    } else {
      sing[score] = [title];
    }
  }

  console.log(check(sing, targetScore).join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241103.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);