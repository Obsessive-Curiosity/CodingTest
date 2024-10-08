function solution(input) {
  const N = Number(input.shift());
  let arr = input.map((item) => item.split(" ").map(Number));

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]; // 1 index 기준 오름차순
    } else {
      return a[0] - b[0]; // 0 index 기준 오름차순
    }
  });

  arr = arr.map((item) => item.join(" "));
  console.log(arr.join("\n"));
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "11650/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
