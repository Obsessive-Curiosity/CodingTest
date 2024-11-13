function solution(input) {
  const [K, L] = input.shift().split(" ").map(Number);
  const students = input;
  const clickMap = new Map();
  let result = [];

  for (const student of students) {
    clickMap.delete(student);
    clickMap.set(student, true);
  }

  console.log(Array.from(clickMap.keys()).slice(0, K).join("\n"));
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "13414/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);