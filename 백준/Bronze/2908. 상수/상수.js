function solution(input) {
  const [num1, num2] = input;
  const reverseNum1 = Number([...num1].reverse().join(""));
  const reverseNum2 = Number([...num2].reverse().join(""));

  console.log(Math.max(reverseNum1, reverseNum2));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "2908/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);
