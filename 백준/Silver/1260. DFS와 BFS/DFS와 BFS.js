const DFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...graph[node], ...needVisit]; // 앞에 추가하기 스택
    }
  }
  console.log(visited.join(" "));
};

const BFS = (graph, startNode) => {
  const visited = [];
  const needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit.push(...graph[node]); // 뒤에 추가하기 큐
    }
  }

  console.log(visited.join(" "));
};

function solution(input) {
  // N: 정점의 개수, M: 간선의 개수, V: 탐색시작번호
  const [NMV, ...nodes] = input;
  const [N, M, V] = NMV.split(" ").map(Number);
  // 빈배열의 graph생성
  const graph = Object.fromEntries(
    Array.from({ length: N }, (_, i) => [i + 1, []])
  );

  nodes.forEach((node) => {
    const [from, to] = node.split(" ").map(Number);
    // from에서 to로 가는 간선 추가
    graph[from].push(to);
    // 양방향이므로 to에서 from으로 가는 간선도 추가
    graph[to].push(from);
  });

  // 그래프의 각 인접 리스트를 정렬
  Object.keys(graph).forEach((key) => {
    graph[key].sort((a, b) => a - b);
  });

  DFS(graph, V);
  BFS(graph, V);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "1260/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
