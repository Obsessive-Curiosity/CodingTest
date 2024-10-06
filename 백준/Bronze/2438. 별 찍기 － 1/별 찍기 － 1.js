const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
for (let i = 0; i < N; i++) {
  console.log(`${"*".repeat(i + 1)}`);
}