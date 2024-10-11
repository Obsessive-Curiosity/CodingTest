function GreenTop(N) {
  return 2 ** N;
}

function Solution(input) {
  const N = Number(input);
  console.log(GreenTop(N));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

Solution(input);