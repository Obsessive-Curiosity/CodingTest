function BFS(start, ladders, snakes) {
  const visited = Array(101).fill(false);
  const dice = [1, 2, 3, 4, 5, 6];
  const queue = [[start, 0]];

  visited[start] = true; // 시작 위치를 방문 처리

  while (queue.length) {
    const [cx, roll] = queue.shift();

    if (cx === 100) {
      return roll;
    }

    for (const dx of dice) {
      let nx = cx + dx;
      if (nx <= 100) {
        nx = snakes[nx] ?? ladders[nx] ?? nx; // 뱀이나 사다리 처리
        if (!visited[nx]) {
          visited[nx] = true;
          queue.push([nx, roll + 1]);
        }
      }
    }
  }
}

function solution() {
  const rollCnt = BFS(1, ladders, snakes);
  console.log(rollCnt);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((row) => row.split(" ").map(Number));
const ladders = Object.fromEntries(arr.slice(0, N));
const snakes = Object.fromEntries(arr.slice(N, N + M));

solution();