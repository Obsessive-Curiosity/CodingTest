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
    if (this.size() === 0) return null;

    const min = this.heap[1];
    if (this.size() === 1) {
      this.heap = [null];
    } else {
      this.heap[1] = this.heap.pop();
      this.heapify(1);
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

function solution(scoville, K) {
  const heap = new MinHeap();
  let count = 0;

  for (const heat of scoville) {
    heap.heappush(heat);
  }

  while (heap.size() > 1) {
    const min = heap.heappop();

    if (min < K) {
      const nextmin = heap.heappop();
      const mixed = min + nextmin * 2;

      heap.heappush(mixed);
      count++;
    } else {
      return count;
    }
  }

  const min = heap.heappop();
  return min < K ? -1 : count;
}