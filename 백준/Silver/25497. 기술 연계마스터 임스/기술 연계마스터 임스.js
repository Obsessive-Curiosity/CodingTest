function countSkills(skills) {
  const stack = [];
  let count = 0;

  for (const skill of skills) {
    stack.push(skill);
    if (stack.length === 1) continue;
    const target = stack.slice(-2).join("");
    if (target === "SK" || target === "LR") {
      count++;
      stack.pop();
      stack.pop();
    }
  }

  return count;
}

function solution(input) {
  const N = Number(input.shift());
  const skills = input.shift();
  const [numSkills, SKSkills, LRSkills] = [[], [], []];
  let [scnt, kcnt, lcnt, rcnt] = [0, 0, 0, 0];
  let count = 0;

  for (const skill of skills) {
    if (skill === "S") {
      SKSkills.push(skill);
      scnt++;
    } else if (skill === "L") {
      LRSkills.push(skill);
      lcnt++;
    } else if (skill === "K") {
      if (scnt > kcnt) {
        SKSkills.push(skill);
        kcnt++;
      } else {
        break;
      }
    } else if (skill === "R") {
      if (lcnt > rcnt) {
        LRSkills.push(skill);
        rcnt++;
      } else {
        break;
      }
    } else {
      numSkills.push(skill);
    }
  }

  count = numSkills.length;
  count += countSkills(SKSkills);
  count += countSkills(LRSkills);

  console.log(count);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);