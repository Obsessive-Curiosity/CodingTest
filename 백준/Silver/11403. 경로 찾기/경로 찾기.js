function BFS(list, start, end, N) {
  const visited = Array(N).fill(false);

  const queue = [[start, 0]];

  while (queue.length) {
    const [node, move] = queue.shift();

    if (move > 0 && node === end) {
      return 1;
    }

    if (0 <= node && node < N && !visited[node]) {
      visited[node] = true;
      for (const n of list[node]) {
        queue.push([n, move + 1]);
      }
    }
  }

  return 0;
}

function solution(input) {
  const N = Number(input.shift());
  const arr = input.map((row) => row.split(" ").map(Number));
  const result = Array.from({ length: N }, () => Array(N).fill(0));
  // 인접 리스트 생성
  const list = Object.fromEntries(Array.from({ length: N }, (_, i) => [i, []]));
  arr.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 1) list[i].push(j);
    });
  });

  // BFS 실행
  result.forEach((row, i) => {
    row.forEach((_, j) => (result[i][j] = BFS(list, i, j, N)));
  });

  for (const row of result) {
    console.log(row.join(" "));
  }
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);