function heapSort(arr) {
  function buildHeap(arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i);
    }
  }

  function heapify(arr, len, idx) {
    let smallest = idx;
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;

    if (left < len && arr[left] < arr[smallest]) {
      smallest = left;
    }
    if (right < len && arr[right] < arr[smallest]) {
      smallest = right;
    }
    if (smallest !== idx) {
      [arr[idx], arr[smallest]] = [arr[smallest], arr[idx]];
      heapify(arr, len, smallest);
    }
  }

  function sort(arr) {
    const len = arr.length;
    buildHeap(arr);

    for (i = len - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
    return arr;
  }

  return sort(arr);
}

function solution(input) {
  const arr = input.split("").map(Number);
  const sortedArr = heapSort(arr);
  console.log(sortedArr.join(""));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);