const DFS = (graph, startNode, total) => {
  const visited = new Set(); // 탐색을 마친 노드들
  const needVisit = []; // 탐색해야할 노드들
  const orders = Array(total).fill(0);

  let order = 1;

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visited.has(node)) {
      visited.add(node);
      needVisit.push(...graph[node]);
      orders[node - 1] = order++;
      // order++이 visietd.length 보다 빠르다
      // 왜냐하면 visited는 하나하나 배열을 모두 확인해야 하므로
    }
  }

  orders.forEach((item) => console.log(item));
};

function solution(input) {
  const [N, _, V] = input[0].split(" ").map(Number); // N:node 개수, M: edge 개수, V: start
  const [...edges] = input.slice(1); // edges

  const graph = Object.fromEntries(
    Array.from({ length: N }, (_, i) => [i + 1, []]) // 그래프 초기화
  );

  // 그래프 간선 설정
  edges.forEach((edge) => {
    const [from, to] = edge.split(" ").map(Number);
    graph[from].push(to); // 무방향 그래프 === 양방향 그래프
    graph[to].push(from);
  });

  // 그래프의 각 인접 리스트를 정렬
  Object.keys(graph).forEach((key) => {
    graph[key].sort((a, b) => b - a); // 정렬
  });

  DFS(graph, V, N); // DFS 시작
}

// 입력을 읽어들이는 부분
const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);