const BFS = (networkmaps, start, visited) => {
  const queue = [start]; // 탐색을 위한 큐

  while (queue.length) {
    const computer = queue.shift();

    if (!visited[computer]) {
      visited[computer] = true; // 방문체크
      queue.push(...networkmaps[computer]); // 컴퓨터 추가
    }
  }
};

function solution(n, computers) {
  const visited = new Array(n).fill(false); // 각 노드의 방문 여부
  let network = 0; // 네트워크 개수
  const networkmaps = {}; // 인접행렬을 인접리스트로 변환

  computers.forEach((row, i) => {
    networkmaps[i] = [];
    row.forEach((val, j) => {
      if (val && i !== j) {
        networkmaps[i].push(j);
      }
    });
  });

  // 방문 기록 검토
  visited.forEach((val, i) => {
    // 아직 방문하지 않았으면
    if (!val) {
      BFS(networkmaps, i, visited); // 네트워크 탐색
      network++; // 너트워크 수 추가
    }
  });

  return network;
}