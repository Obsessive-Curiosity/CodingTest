function divide(y, x, len) {
  const firstCnt = (len * len) / 4;
  const halfLen = len / 2;

  if (len === 1) return;

  if (y < halfLen && x >= halfLen) {
    // 1사분면
    cnt += firstCnt;
    divide(y, x - halfLen, halfLen);
  }
  if (y < halfLen && x < halfLen) {
    // 2사분면
    divide(y, x, halfLen);
  }
  if (y >= halfLen && x < halfLen) {
    // 3사분면
    cnt += 2 * firstCnt;
    divide(y - halfLen, x, halfLen);
  }
  if (y >= halfLen && x >= halfLen) {
    // 4사분면
    cnt += 3 * firstCnt;
    divide(y - halfLen, x - halfLen, halfLen);
  }
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

const [N, r, c] = input.split(" ").map(Number);
let cnt = 0;

divide(r, c, 1 << N);
console.log(cnt);