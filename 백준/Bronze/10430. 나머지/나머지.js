const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

const [A, B, C] = input.split(" ").map(Number);
console.log(`${(A + B) % C}`);
console.log(`${((A % C) + (B % C)) % C}`);
console.log(`${(A * B) % C}`);
console.log(`${((A % C) * (B % C)) % C}`);