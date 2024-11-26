function solution(testCase) {
  const [N, M] = testCase.shift();
  const sejune = testCase.shift().sort((a, b) => b - a);
  const sebi = testCase.shift().sort((a, b) => b - a);

  while (sejune.length > 0 && sebi.length > 0) {
    if (sejune[0] < sebi[0]) {
      sejune.pop();
    } else {
      sebi.pop();
    }
  }

  if (sejune.length === 0) console.log("B");
  else if (sebi.length === 0) console.log("S");
  else console.log("C");
}

const { group } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241126.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n\n");

const N = parseInt(input[0]); // 첫 번째 블록은 N
const testCases = input
  .slice(1)
  .map((block) => block.split("\n").map((line) => line.split(" ").map(Number)));

for (const testCase of testCases) {
  solution(testCase);
}