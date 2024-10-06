function isValidRange(y, x, boardSize) {
  return 0 <= y && y < boardSize && 0 <= x && x < boardSize;
}

function parseInput(input) {
  const numOfTestcase = input.shift();
  const inputArr = input.map((row) => row.split(" ").map(Number));
  const testCases = []; // 테스트케이스들

  for (let i = 0; i < numOfTestcase; i++) {
    const start = i * 3;
    const end = (i + 1) * 3;
    testCases.push(inputArr.slice(start, end));
  }

  return testCases;
}

function solution(input) {
  const testCases = parseInput(input);
  const dir = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const BFS = (input) => {
    const [boardSize] = input.shift();
    const board = Array.from({ length: boardSize }, () =>
      Array(boardSize).fill(0)
    );
    const [start, final] = input;
    const [sy, sx] = start;
    const [fy, fx] = final;
    const queue = [[sy, sx, 0]];

    board[sy][sx] = 1; // 시작 지점 방문 처리

    // BFS 탐색 시작
    while (queue.length) {
      const [cy, cx, move] = queue.shift();

      // 현재 목표 지점에 도착할 경우
      // 몇번 이동했는지 반환
      if (cy === fy && cx === fx) {
        console.log(move);
        return;
      }

      for (const d of dir) {
        const [dy, dx] = d;
        const [ny, nx] = [cy + dy, cx + dx];

        if (isValidRange(ny, nx, boardSize) && !board[ny][nx]) {
          board[ny][nx] = 1; // 방문처리
          queue.push([ny, nx, move + 1]); // 큐에 추가
        }
      }
    }
  };

  // 테스트케이스 별로 탐색
  testCases.forEach((test) => BFS(test));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);