class MaxHeap {
  constructor() {
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
  const [N, H, T] = input.shift().split(" ").map(Number);
  const giants = input.map(Number);
  const heap = new MaxHeap();
  let hammerCount = 0;

  for (const giant of giants) {
    heap.heappush(giant);
  }

  for (let i = 0; i < T; i++) {
    const max = heap.heappop();

    if (max >= H) {
      const half = max / 2 < 1 ? 1 : (max / 2) >> 0;
      heap.heappush(half);
      hammerCount++;
    } else {
      heap.heappush(max);
      break;
    }
  }

  const max = heap.heappop();
  const isSuccess = max < H ? true : false;
  const message = isSuccess ? "YES" : "NO";
  let result = "";

  if (isSuccess) {
    result = [message, hammerCount].join("\n");
  } else {
    result = [message, max].join("\n");
  }

  console.log(result);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241116.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);