function average(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const len = arr.length;

  return sum / len;
}

function merge(left, right) {
  let [i, j] = [0, 0];
  const sorted = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function solution(input) {
  const arr = input.map(Number);

  const avg = average(arr);
  const sorted = mergeSort(arr);

  console.log(avg);
  console.log(sorted[2]);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);