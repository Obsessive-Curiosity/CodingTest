const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, _, R] = input.shift().split(" ").map(Number);
// 인접리스트 초기화
const graph = Object.fromEntries(
  Array.from({ length: N + 1 }, (_, i) => [i + 1, []])
);
const visitedOrder = Array(N + 1).fill(0); // 방문 여부와 순서를 기록하는 배열
let order = 1;

// 인접리스트 설정
for (const row of input) {
  const [from, to] = row.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 인접리스트 정렬
for (const key in graph) {
  graph[key].sort((a, b) => b - a);
}

function BFS(start) {
  const queue = [start];
  visitedOrder[start] = order++; // 방문처리

  while (queue.length) {
    const node = queue.shift();

    for (const neigbor of graph[node]) {
      if (!visitedOrder[neigbor]) {
        queue.push(neigbor);
        visitedOrder[neigbor] = order++;
      }
    }
  }
  // 출력
  visitedOrder.slice(1).forEach((i) => console.log(i));
}

// BFS 탐색 시작
BFS(R);