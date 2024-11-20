class MaxHeap {
  constructor(initial = []) {
    this.heap = [null]; // 힙은 1부터 시작
  }

  size() {
    return this.heap.length - 1;
  }

  getMax() {
    return this.heap[1] || null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  heappop() {
    if (this.size() === 0) return null;

    const max = this.heap[1];
    if (this.size() === 1) {
      this.heap = [null];
    } else {
      this.heap[1] = this.heap.pop();
      this.heapify(1);
    }
    return max;
  }

  heapify(idx) {
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;
    let largest = idx;

    if (leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[largest]) {
      largest = leftIdx;
    }

    if (
      rightIdx < this.heap.length &&
      this.heap[rightIdx] > this.heap[largest]
    ) {
      largest = rightIdx;
    }

    if (largest !== idx) {
      this.swap(idx, largest);
      this.heapify(largest);
    }
  }
}

function solution(input) {
  const N = input.shift();
  let dasom = input.shift();
  const candidates = input;
  const heap = new MaxHeap();
  let count = 0;

  for (const candidate of candidates) {
    heap.heappush(candidate);
  }

  while (heap.size() > 0) {
    const max = heap.heappop();
    if (dasom + count > max) {
      break;
    } else {
      count++;
      heap.heappush(max - 1);
    }
  }

  console.log(count);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

solution(input);