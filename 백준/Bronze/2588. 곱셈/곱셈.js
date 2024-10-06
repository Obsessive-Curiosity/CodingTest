const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

const [A, B] = input.split("\n");
const num1 = Number(A);
const num2 = Number(B);
const [c3, c2, c1] = B.split("").map(Number);

console.log(num1 * c1);
console.log(num1 * c2);
console.log(num1 * c3);
console.log(num1 * num2);