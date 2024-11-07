function solution(input) {
  const n = input.shift();
  const logs = input;
  const hash = {};

  for (const log of logs) {
    const [name, status] = log.split(" ");

    if (status === "enter") {
      hash[name] = true;
    } else {
      hash[name] = false;
    }
  }

  const result = Object.entries(hash)
    .filter(([key, val]) => val === true)
    .map(([key]) => key)
    .sort()
    .reverse();

  console.log(result.join("\n"));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);