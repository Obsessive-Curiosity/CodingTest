function solution(input) {
  const N = Number(input.shift());
  const line = input.shift().split(" ").map(Number);
  const stk = [];
  let target = 1;

  // 순서대로 나오는지 판별하기
  while (target <= N) {
    if (line.length > 0 && line[0] === target) {
      // line에 target이 있는 경우
      line.shift();
      target++;
    } else if (stk[stk.length - 1] === target) {
      // stk에 target이 있는 경우
      stk.pop();
      target++;
    } else if (line.length > 0) {
      // 둘다 없는 경우
      // 이동하기
      stk.push(line.shift());
    } else {
      //이동해도 없는 경우
      return "Sad";
    }
  }

  return "Nice";
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "12789/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const s = solution(input);
console.log(s);