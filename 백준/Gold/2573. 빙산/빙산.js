function isValidRange(y, x) {
  return 0 <= y && y < leny && 0 <= x && x < lenx;
}

function isAllMelted(maps) {
  for (let i = 0; i < leny; i++) {
    for (let j = 0; j < lenx; j++) {
      if (maps[i][j]) return false;
    }
  }
  return true;
}

function zeroCnt(cy, cx, maps) {
  let cnt = 0;

  for (const direction of directions) {
    const [dy, dx] = direction;
    const [ny, nx] = [cy + dy, cx + dx];

    if (!maps[ny][nx]) cnt++;
  }

  return cnt;
}

function BFS(y, x, maps, visited) {
  const queue = [[y, x]];

  visited[y][x] = true;

  while (queue.length) {
    const [cy, cx] = queue.shift();

    for (const direction of directions) {
      const [dy, dx] = direction;
      const [ny, nx] = [cy + dy, cx + dx];

      if (isValidRange(ny, nx) && maps[ny][nx] && !visited[ny][nx]) {
        visited[ny][nx] = true; // 방문처리
        queue.push([ny, nx]); // 큐에 추가
      }
    }
  }
}

function isSingleIceberg(maps) {
  const visited = Array.from({ length: leny }, () => Array(lenx).fill(false));
  let check = 0; // 빙산 개수 체크

  for (let i = 0; i < leny; i++) {
    for (let j = 0; j < lenx; j++) {
      if (maps[i][j] && !visited[i][j]) {
        BFS(i, j, maps, visited); // BFS로 방문처리하기
        check++; // 한번 돌고 빙산 개수 체크

        if (check > 1) return false; // 빙산 개수 2개 이상이면 false 반환
      }
    }
  }

  return check ? true : false;
}

function melting(maps) {
  const melted = Array.from({ length: leny }, () => Array(lenx).fill(0));
  maps.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val) {
        const after = val - zeroCnt(i, j, maps);
        melted[i][j] = after < 1 ? 0 : after;
      }
    });
  });
  return melted;
}

function solution(input) {
  let maps = input.map((row) => row.split(" ").map(Number));
  let year = 0;

  // 분리 될때까지 루프
  while (isSingleIceberg(maps)) {
    maps = melting(maps);
    year++;
    //만일 빙산이 다 녹을 때까지 분리되지 않으면 0을 출력
    if (isAllMelted(maps)) return 0;
  }

  return year;
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [leny, lenx] = input.shift().split(" ").map(Number);
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const s = solution(input);
console.log(s);