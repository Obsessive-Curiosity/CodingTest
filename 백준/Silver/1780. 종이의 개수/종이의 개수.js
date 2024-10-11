function divide(y, x, scope) {
  const firstNum = paper[y][x];

  if (check(y, x, scope)) {
    if (firstNum === -1) count[0] += 1;
    else if (firstNum === 0) count[1] += 1;
    else count[2] += 1;
  } else {
    const newScope = scope / 3;
    for (const div of divide9) {
      const [i, j] = div;
      divide(y + i * newScope, x + j * newScope, newScope);
    }
  }
}

function check(y, x, scope) {
  const firstNum = paper[y][x];

  for (let i = y; i < y + scope; i++) {
    for (let j = x; j < x + scope; j++) {
      if (firstNum !== paper[i][j]) {
        return false;
      }
    }
  }

  return true;
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const count = [0, 0, 0]; // -1, 0, 1의 개수들
const N = Number(input.shift());
const paper = input.map((row) => row.split(" ").map(Number));
const divide9 = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
  [0, 2],
  [2, 0],
  [2, 2],
  [1, 2],
  [2, 1],
];

divide(0, 0, N);

console.log(count.join("\n"));