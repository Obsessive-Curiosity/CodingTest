function solution(input) {
  const N = Number(input.shift());
  let arr = input.map((item) => item.split(" ").map(Number));

  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]; // 1 index 기준 오름차순
    } else {
      return a[1] - b[1]; // 0 index 기준 오름차순
    }
  });

  arr = arr.map((item) => item.join(" "));
  console.log(arr.join("\n"));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
