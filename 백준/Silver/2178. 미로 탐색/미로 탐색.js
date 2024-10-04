const BFS = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const maze = input.map((row) => row.split("").map(Number));
  const [goalY, goalX] = [N - 1, M - 1];
  const dist = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  maze[0][0] = 0;
  const node = [[0, 0, 1]]; // 좌표 및 움직인 칸수

  while (node.length !== 0) {
    const [curY, curX, move] = node.shift();

    // 현재 위치가 도착 지점에 도달하면 움직인 칸수 반환
    if (curY === goalY && curX === goalX) {
      console.log(move);
    }

    // 다음 이동할 인접 위치 탐색을 위한 반복문
    dist.forEach((ds) => {
      const [dsy, dsx] = ds;
      const nY = curY + dsy;
      const nX = curX + dsx;

      // 다음 위치가 미로 안인지 판단하고 길이 있는 곳(1)인지 판단
      if (0 <= nY && nY < N && 0 <= nX && nX < M && maze[nY][nX] === 1) {
        maze[nY][nX] = 0; // 방문처리
        node.push([nY, nX, move + 1]);
      }
    });
  }
};

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

BFS(input);