// 0 : unripe tomato
// -1 : void
// 1 : ripe tomato
function isValidRange(z, y, x) {
  return 0 <= z && z < H && 0 <= y && y < N && 0 <= x && x < M;
}

function findRipeTomato(box) {
  const ripeTomatoPosition = [];
  let unripeTomatoCnt = 0;

  for (let z = 0; z < H; z++) {
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (box[z][y][x] === 1) {
          ripeTomatoPosition.push([z, y, x]);
        } else if (box[z][y][x] === 0) {
          unripeTomatoCnt++;
        }
      }
    }
  }

  return [ripeTomatoPosition, unripeTomatoCnt];
}

function BFS(box, start, unripeTomatoCnt) {
  const queue = [];
  for (const s of start) {
    queue.push([...s, 0]);
  }
  const directions = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  let head = 0;
  let finalDay = 0;
  let ripeTomatoCnt = 0;

  while (head < queue.length) {
    const [cz, cy, cx, day] = queue[head++];

    // 마지막 날 업데이트
    if (finalDay < day) finalDay = day;

    for (const direction of directions) {
      const [dz, dy, dx] = direction;
      const [nz, ny, nx] = [cz + dz, cy + dy, cx + dx];

      if (isValidRange(nz, ny, nx) && box[nz][ny][nx] === 0) {
        box[nz][ny][nx] = 1;
        queue.push([nz, ny, nx, day + 1]);
        ripeTomatoCnt++;
      }
    }
  }

  return ripeTomatoCnt === unripeTomatoCnt ? finalDay : -1;
}

function solution(input) {
  // box에 토마토 상태 설정하기
  const box = [];
  while (input.length) {
    const tmp = [];
    for (let i = 0; i < N; i++) {
      tmp.push(input.shift().split(" ").map(Number));
    }
    box.push(tmp);
  }

  // 익은 토마토 위치 찾기
  const [ripeTomato, unripeTomatoCnt] = findRipeTomato(box);

  // 익은 토마토 위치부터 BFS 시작
  const finalDay = BFS(box, ripeTomato, unripeTomatoCnt);

  // 결과 출력
  console.log(finalDay);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N, H] = input.shift().split(" ").map(Number);

solution(input);