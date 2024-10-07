let swapCount = 0;

function merge(left, right) {
  const sortedArr = [];
  let [i, j] = [0, 0];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sortedArr.push(left[i]);
      i++;
    } else {
      sortedArr.push(right[j]);
      j++;
      swapCount += left.length - i;
    }
  }

  return [...sortedArr, ...left.slice(i), ...right.slice(j)];
}
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function solution(input) {
  const N = input.shift();
  const arr = input[0].split(" ").map(Number);

  mergeSort(arr);

  console.log(swapCount);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);