function solution(input) {
  const N = Number(input.shift());
  const skills = input.shift();
  let [numcnt, scnt, kcnt, lcnt, rcnt] = [0, 0, 0, 0, 0];
  let count = 0;

  for (const skill of skills) {
    if (skill === "S") {
      scnt++;
    } else if (skill === "L") {
      lcnt++;
    } else if (skill === "K") {
      if (scnt > kcnt) kcnt++;
      else break;
    } else if (skill === "R") {
      if (lcnt > rcnt) rcnt++;
      else break;
    } else numcnt++;
  }

  count = numcnt;
  count += Math.min(scnt, kcnt);
  count += Math.min(lcnt, rcnt);

  console.log(count);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);