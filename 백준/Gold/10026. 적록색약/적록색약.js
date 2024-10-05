const isValidRange = (y, x) => {
  return 0 <= y && y < N && 0 <= x && x < N;
};

function solution(input) {
  const N = Number(input.shift());
  const image = input.map((row) => row.split(""));
  let visited = Array.from({ length: N }, () => Array(N).fill(false));
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let nomalCnt = 0;
  let disabledCnt = 0;

  const isValidRange = (y, x) => {
    return 0 <= y && y < N && 0 <= x && x < N;
  };

  const DFS = (y, x, color) => {
    visited[y][x] = true; // 방문처리

    for (let d of dir) {
      const [dy, dx] = d;
      const [ny, nx] = [y + dy, x + dx];

      if (isValidRange(ny, nx) && !visited[ny][nx] && image[ny][nx] === color) {
        DFS(ny, nx, color); // 재귀
      }
    }
  };

  // 정상일때
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        DFS(i, j, image[i][j]);
        nomalCnt++;
      }
    }
  }

  visited = Array.from({ length: N }, () => Array(N).fill(false));
  // 적녹색약일 때
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // R, G 색일 때 Y로 바꾸기
      if (image[i][j] === "R") image[i][j] = "G";
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        DFS(i, j, image[i][j]);
        disabledCnt++;
      }
    }
  }

  console.log([nomalCnt, disabledCnt].join(" "));
}

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "10026/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
