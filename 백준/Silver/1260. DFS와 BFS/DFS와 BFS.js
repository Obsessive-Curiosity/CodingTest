function DFS(graph, start, N) {
  const visited = Array(N + 1).fill(false);
  const needVisit = [start];
  const result = [];

  while (needVisit.length) {
    const node = needVisit.pop();

    if (!visited[node]) {
      result.push(node);
      visited[node] = true; // 방문처리
      needVisit.push(...graph[node]); // 스택 추가
    }
  }

  return result.join(" ");
}

function BFS(graph, start, N) {
  const visited = Array(N + 1).fill(false);
  const needVisit = [start];
  const result = [];

  while (needVisit.length) {
    const node = needVisit.pop();

    if (!visited[node]) {
      result.push(node);
      visited[node] = true; // 방문처리
      needVisit.unshift(...graph[node]); // 큐 추가
    }
  }

  return result.join(" ");
}

function solution(input) {
  const [N, M, V] = input.shift().split(" ").map(Number);
  const edges = input.map((edge) => edge.split(" ").map(Number));
  // 인접리스트 생성
  const graph = Object.fromEntries(
    Array.from({ length: N }, (_, i) => [i + 1, []])
  );
  // 인접리스트 값 추가
  for (const edge of edges) {
    const [from, to] = edge;
    graph[from].push(to);
    graph[to].push(from);
  }
  // 인접리스트 값 정렬
  for (const key in graph) {
    graph[key].sort((a, b) => b - a);
  }

  const dfs = DFS(graph, V, N);
  const bfs = BFS(graph, V, N);

  console.log([dfs, bfs].join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "DFS/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);