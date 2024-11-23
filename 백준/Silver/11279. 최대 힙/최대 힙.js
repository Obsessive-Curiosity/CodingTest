class MaxHeap {
  constructor(initial = []) {
    this.heap = [null];
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
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  heappop() {
    const max = this.heap[1] ?? 0;

    if (this.size() > 1) {
      this.heap[1] = this.heap.pop();
      this.heapify(1);
    } else {
      this.heap = [null];
    }

    return max;
  }

  heapify(idx) {
    let largest = idx;
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;

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
  const N = Number(input.shift());
  const array = input.map(Number);
  const heap = new MaxHeap();
  const result = [];

  for (const num of array) {
    if (num) {
      heap.heappush(num);
    } else {
      result.push(heap.heappop());
    }
  }

  console.log(result.join("\n"));
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "11279/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);