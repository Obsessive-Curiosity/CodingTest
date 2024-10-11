function divide(y, x, scope) {
  const firstNum = paper[y][x];

  if (check(y, x, scope)) {
    // 전체 색이 모두 같은 경우
    if (firstNum) {
      // 파란색인 경우
      blueCnt++;
    } else {
      // 흰색인 경우
      whiteCnt++;
    }
  } else {
    const newScope = scope / 2;
    // 4분할 하기
    for (const d of [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ]) {
      const [i, j] = d;
      divide(y + i * newScope, x + j * newScope, newScope);
    }
  }
}

function check(y, x, scope) {
  const firstNum = paper[y][x];

  for (let i = y; i < y + scope; i++) {
    for (let j = x; j < x + scope; j++) {
      if (paper[i][j] !== firstNum) {
        return false;
      }
    }
  }

  return true;
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = Number(input.shift());
const paper = input.map((row) => row.split(" ").map(Number));
let whiteCnt = 0;
let blueCnt = 0;

divide(0, 0, len);
console.log(whiteCnt);
console.log(blueCnt);