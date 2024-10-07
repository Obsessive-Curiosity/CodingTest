function bubbleSort(N, arr) {
  for (let i = N - 1; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }

  return arr;
}

function solution(input) {
  const N = Number(input.shift());
  const arr = input.map(Number);

  const sorted = bubbleSort(N, arr);
  sorted.forEach((s) => console.log(s));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "2750/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);