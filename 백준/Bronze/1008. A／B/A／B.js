const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const [num1, num2] = input.split(" ").map(Number);
console.log(num1 / num2);