function DFS(graph, start, total) {
  const visietd = new Set();
  const needvisit = [start];
  const orders = Array(total).fill(0);

  let order = 1;

  // 1 2 3 -> 3
  // 1 2 new
  while (needvisit.length) {
    const node = needvisit.pop();

    if (!visietd.has(node)) {
      visietd.add(node);
      needvisit.push(...graph[node]);
      orders[node - 1] = order++;
    }
  }

  // 출력
  for (const p of orders) {
    console.log(p);
  }
}

function solution(input) {
  const [N, M, R] = input.shift().split(" ").map(Number);
  const graph = Object.fromEntries(
    Array.from({ length: N }, (_, i) => [i + 1, []])
  ); // 그래프 초기화

  // 그래프 설정
  for (const row of input) {
    const [from, to] = row.split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  // 그래프 정렬 1->100
  for (const key in graph) {
    graph[key].sort((a, b) => a - b);
  }

  DFS(graph, R, N);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);