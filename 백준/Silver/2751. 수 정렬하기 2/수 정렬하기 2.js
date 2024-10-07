function heapSort(arr) {
  // 힙을 구성하는 함수
  function buildHeap(arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i);
    }
  }

  // 힙을 유지하는 함수
  function heapify(arr, len, idx) {
    let largest = idx;
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;

    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest != idx) {
      [arr[idx], arr[largest]] = [arr[largest], arr[idx]]; //swap
      heapify(arr, len, largest);
    }
  }

  // 정렬 수행 함수
  function sort(arr) {
    const len = arr.length;

    buildHeap(arr);

    for (let i = len - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }

    return arr;
  }

  return sort(arr);
}

function solution(input) {
  const N = Number(input.shift());
  const arr = input.map(Number);
  const sortedArr = heapSort(arr);

  console.log(sortedArr.join("\n"));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);