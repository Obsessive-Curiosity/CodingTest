function sum(array) {
  return array.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0);
}

function findMin2(numbers) {
  let min = Infinity;
  const faceIdx = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 2],
    [1, 3],
    [1, 5],
    [2, 4],
    [2, 5],
    [3, 4],
    [3, 5],
    [4, 5],
  ];

  for (const [idx1, idx2] of faceIdx) {
    const face2 = [numbers[idx1], numbers[idx2]];
    min = Math.min(min, sum(face2));
  }

  return min;
}

function findMin3(numbers) {
  let min = Infinity;
  const faceIdx = [
    [0, 1, 2],
    [0, 1, 3],
    [1, 2, 5],
    [1, 3, 5],
    [2, 4, 5],
    [3, 4, 5],
    [0, 2, 4],
    [0, 3, 4],
  ];

  for (const [idx1, idx2, idx3] of faceIdx) {
    const face3 = [numbers[idx1], numbers[idx2], numbers[idx3]];
    min = Math.min(min, sum(face3));
  }

  return min;
}

function solution(input) {
  const N = Number(input.shift());
  const numbers = input.shift().split(" ").map(Number);

  if (N === 1) return sum(numbers) - Math.max(...numbers);

  const [min3, min2, min1] = [
    findMin3(numbers),
    findMin2(numbers),
    Math.min(...numbers),
  ];

  const [cnt3, cnt2, cnt1] = [4, 8 * N - 12, 5 * N ** 2 - 16 * N + 12];
  const result = min3 * cnt3 + min2 * cnt2 + min1 * cnt1;

  return result;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "1041/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const s = solution(input);
console.log(s);