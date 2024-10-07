function merge(left, right) {
  const sorted = [];
  let [i, j] = [0, 0];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      // 큰 수 먼저 추가
      sorted.push(right[j]);
      j++;
    } else {
      sorted.push(left[i]);
      i++;
    }
  }

  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;

  const mid = Math.ceil(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function solution(input) {
  const [N, k] = input.shift().split(" ").map(Number);
  const arr = input.shift().split(" ").map(Number);
  const sortedArr = mergeSort(arr);
  console.log(sortedArr[k - 1]);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);