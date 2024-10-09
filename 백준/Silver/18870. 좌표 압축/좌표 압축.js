// 오름차순 힙 정렬
function heapSort(arr) {
  // 힙을 구성하는 함수
  function buildHeap(arr) {
    const len = arr.length;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i);
    }
  }

  // 최대 힙 사용
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

    if (idx !== largest) {
      [arr[idx], arr[largest]] = [arr[largest], arr[idx]]; // swap
      heapify(arr, len, largest);
    }
  }

  // 정렬을 수행하는 함수
  function sort(arr) {
    const len = arr.length;

    // 1단계
    buildHeap(arr);

    // 2, 3단계
    for (let i = len - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]; // swap
      heapify(arr, i, 0);
    }

    return arr;
  }

  return sort(arr);
}

function solution(input) {
  const N = Number(input.shift());
  const arr = input.shift().split(" ").map(Number);
  const setArr = Array.from(new Set(arr));
  const sortedArr = heapSort(setArr);
  const MapArr = new Map();

  sortedArr.forEach((num, idx) => MapArr.set(num, idx));

  const result = arr.map((num) => MapArr.get(num)).join(" ");
  console.log(result);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);