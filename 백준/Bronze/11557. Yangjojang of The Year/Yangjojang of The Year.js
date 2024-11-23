function findHeavyDrinkingSchool(testCase) {
  const alchol = {};

  for (const [school, consumption] of testCase) {
    alchol[Number(consumption)] = school;
  }
  const max = Math.max(...Object.keys(alchol));

  return alchol[max];
}

function solution(input) {
  const T = Number(input.shift());
  const testCases = [];
  const result = [];

  for (let i = 0; i < T; i++) {
    const N = Number(input.shift());
    const testCase = input.slice(0, N).map((item) => item.split(" "));
    input = input.slice(N);
    testCases.push(testCase);
  }

  for (const testCase of testCases) {
    const school = findHeavyDrinkingSchool(testCase);
    result.push(school);
  }

  console.log(result.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241123.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);