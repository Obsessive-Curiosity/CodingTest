const DFS = (graph, start) => {
  const visited = [];
  const needVisit = [];

  needVisit.push(start);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      needVisit.unshift(...graph[node]);
    }
  }

  console.log(visited.length - 1);
};

function solution(input) {
  const [N, M, ...nodes] = input;
  const graph = Object.fromEntries(
    Array.from({ length: Number(N) }, (_, i) => [i + 1, []])
  );

  nodes.forEach((node) => {
    const [from, to] = node.split(" ").map(Number);
    graph[from].push(to); // 간선 방향 설정
    graph[to].push(from); // 양방향 설정
  });

  DFS(graph, 1);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
