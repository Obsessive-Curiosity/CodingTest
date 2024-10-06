const isValidRange = (x, final) => {
  return 0 <= x && x <= 1000000;
};

const BFS = (start, final) => {
  const queue = [[start, 0]];
  const visited = Array(100001).fill(false);
  visited[start] = true;

  while (queue.length) {
    const [x, move] = queue.shift();

    // 도착시 이동수 반환
    if (x === final) {
      console.log(move);
      return;
    }

    for (const nx of [x - 1, x + 1, x * 2]) {
      if (isValidRange(nx, final) && !visited[nx]) {
        // console.log(move, nx, queue);
        queue.push([nx, move + 1]);
        visited[nx] = true; // 중복 방지
      }
    }
  }

  return -1; // 경로가 없는 경우
};

function solution(input) {
  const [N, K] = input.split(" ").map(Number);

  BFS(N, K);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);