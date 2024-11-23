class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] || null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  heappop() {
    const min = this.heap[1] ?? 0;

    if (this.size() > 1) {
      this.heap[1] = this.heap.pop();
      this.heapify(1);
    } else {
      this.heap = [null];
    }

    return min;
  }

  heapify(idx) {
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;
    let smallest = idx;

    if (
      leftIdx < this.heap.length &&
      this.heap[leftIdx] < this.heap[smallest]
    ) {
      smallest = leftIdx;
    }

    if (
      rightIdx < this.heap.length &&
      this.heap[rightIdx] < this.heap[smallest]
    ) {
      smallest = rightIdx;
    }

    if (smallest !== idx) {
      this.swap(idx, smallest);
      this.heapify(smallest);
    }
  }
}

function solution(input) {
  const N = Number(input.shift());
  const array = input.map(Number);
  const heap = new MinHeap();
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
const filePath = process.platform === "linux" ? "/dev/stdin" : "1927/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
