// 최대 힙 정렬 (오름차순)
function maxHeapSort(arr) {
  function buildHeap(arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i);
    }
  }

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
    if (largest !== idx) {
      [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
      heapify(arr, len, largest);
    }
  }

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
  const arr = input.shift().split(" ").map(Number);
  let totalTime = 0; // 돈을 인출하는데 필요한 총 시간

  // 최대 힙 정렬 (오름차순)
  maxHeapSort(arr);

  // 누적 인출 시간 구하기
  arr.reduce((acc, cur) => {
    acc += cur;
    totalTime += acc;
    return acc;
  }, 0);

  console.log(totalTime);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);